#!/usr/bin/env python3
"""Refresh assets/outputs.js, the list of members' recent publications.

Reads data/outputs-authors.json, asks OpenAlex (https://openalex.org, free, no
key) for each confirmed member's most recent works, merges and de-duplicates
them, and writes assets/outputs.js for the Research page. The website itself
never contacts OpenAlex: it only reads that file.

Standard library only. Run from anywhere:  python3 scripts/update_outputs.py
  --all      also look up entries that are not yet "confirmed" (preview only)
"""
import json, sys, time, urllib.parse, urllib.request
from datetime import date, timedelta
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
CONFIG = ROOT / "data" / "outputs-authors.json"
OUT = ROOT / "assets" / "outputs.js"
API = "https://api.openalex.org/works"
YEARS_BACK = 3        # only works from the last few years
PER_AUTHOR = 25       # newest works fetched per member
KEEP = 40             # newest works kept overall
MAX_NAMES = 10        # authors listed per work; the rest become "et al."
SKIP_TYPES = {"erratum", "paratext", "peer-review", "retraction", "supplementary-materials"}


def fetch(author_id):
    since = (date.today() - timedelta(days=365 * YEARS_BACK)).isoformat()
    query = urllib.parse.urlencode({
        "filter": f"author.id:{author_id},from_publication_date:{since}",
        "sort": "publication_date:desc",
        "per-page": PER_AUTHOR,
        "select": "id,doi,title,display_name,publication_date,type,primary_location,authorships",
    })
    req = urllib.request.Request(f"{API}?{query}", headers={"User-Agent": "ghent-logic-site-updater"})
    for attempt in range(3):
        try:
            with urllib.request.urlopen(req, timeout=60) as r:
                return json.load(r)["results"]
        except Exception as e:  # network hiccup: wait and retry, then give up on this member
            if attempt == 2:
                print(f"  failed for {author_id}: {e}", file=sys.stderr)
                return []
            time.sleep(5 * (attempt + 1))


def main():
    cfg = json.loads(CONFIG.read_text(encoding="utf-8"))
    use_all = "--all" in sys.argv
    members = [a for a in cfg["authors"] if a.get("confirmed") or use_all]
    by_id = {a["openalex"]: a["name"] for a in members}
    works = {}
    for a in members:
        print(f"{a['name']} ({a['openalex']})")
        for w in fetch(a["openalex"]):
            if (w.get("type") or "") in SKIP_TYPES:
                continue
            title = (w.get("title") or w.get("display_name") or "").strip()
            if not title:
                continue
            item = works.setdefault(w["id"], {
                "title": title,
                "date": w.get("publication_date") or "",
                "type": w.get("type") or "",
                "venue": ((w.get("primary_location") or {}).get("source") or {}).get("display_name") or "",
                "url": w.get("doi") or (w.get("primary_location") or {}).get("landing_page_url") or w["id"],
                "authors": [x["author"]["display_name"] for x in w.get("authorships", [])],
                "members": [],
            })
            if a["name"] not in item["members"]:
                item["members"].append(a["name"])
        time.sleep(0.3)
    items = sorted(works.values(), key=lambda x: (x["date"], x["title"]), reverse=True)[:KEEP]
    for it in items:
        names = it["authors"]
        it["authors"] = names[:MAX_NAMES] + (["et al."] if len(names) > MAX_NAMES else [])
        it["members"].sort()

    # Keep the old "updated" date when nothing changed, so a quiet month gives no diff.
    old = {}
    if OUT.exists():
        text = OUT.read_text(encoding="utf-8")
        try:
            old = json.loads(text[text.index("{"):text.rindex("}") + 1])
        except ValueError:
            pass
    updated = old.get("updated") if old.get("items") == items else date.today().isoformat()
    body = json.dumps({"updated": updated, "items": items}, ensure_ascii=False, indent=1)
    OUT.write_text(
        "// Written by scripts/update_outputs.py from OpenAlex. Do not edit by hand:\n"
        "// the next run replaces it. Who is looked up is set in data/outputs-authors.json.\n"
        f"window.OUTPUTS = {body};\n", encoding="utf-8")
    print(f"{len(items)} works written to {OUT.relative_to(ROOT)}")


if __name__ == "__main__":
    main()
