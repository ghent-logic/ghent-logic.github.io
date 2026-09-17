# Ghent Mathematical Logic — complete editable website

Start by opening START-HERE.html in a browser. Then open index.html to see the site.

This is a separate, complete replacement for the earlier Jekyll starter. It does
not need Jekyll, a command line, Node, or an installation. All normal navigation
works locally after extracting the entire folder, and on GitHub Pages.

## Routine changes

Edit content.js for the group name, institution, email, address, research areas,
members, seminars, and activities. Replace the sample records and set each
record's sample field to false. When the copy is approved, set preview to false.
Any records still marked sample will then be hidden.

The homepage takes its next seminar and research topics from the same content
file as the other pages, so those details do not have to be edited twice.

Mathematics in titles and abstracts is written as LaTeX, between \( and \) or
between single dollar signs, and is typeset in the browser: write
"the strength of \(\mathsf{ACA}_0\)" and the page shows it properly set. This uses
KaTeX, which is included in assets/katex so the site still makes no requests to
anyone else. Pages with no mathematics do not load it at all.

Previous talks are split in two: the seminars page keeps the next talks and the
four most recent past ones, and archive.html holds the whole archive, ten to a
page, with numbered pages at the foot. A link to a single talk, archive.html
followed by # and the talk's id, always opens the page that talk is on.

A seminar entry needs only a date, a speaker, and a title. Everything else is
optional and is left out of the page when absent: time, location, speakerUrl to
link the speaker's name, onlineUrl, videoUrl, slidesUrl, and paperUrl for the
links beneath the talk, and abstract, which takes a list with one entry per
paragraph. Talks sort themselves by date and move into the archive once their
date has passed, so the order in the file does not matter.

The CSS theme is in assets/style.css. The shared header/footer and data display
are in assets/site.js. The site uses native HTML links and expandable abstracts.
JavaScript is required for its shared navigation and lists; the noscript notice
explains this to visitors who have disabled it.

## Publish

Upload the contents of this folder, including the assets folder and .nojekyll,
to the root of a public GitHub Pages repository, including the assets/katex
folder. Settings > Pages > Deploy from
a branch > main > / (root). See START-HERE.html for full instructions and domain
links. Do not mix these files with the previous Jekyll package. Keep a backup of
the old site and preserve an existing CNAME file when using the same domain.
For a project site at /repository/ rather than an organization homepage, change
the base path in 404.html from / to /repository/ so nested missing pages recover
correctly. Ordinary pages already use relative links.

Never publish secrets in this repository. The sample content and research copy
must be reviewed before representing the group publicly. Missing contact links
are intentionally not replaced with fake addresses or non-working buttons.

The included design/code may be used and adapted for your group. No third-party
fonts, libraries, photos, or university logos are bundled. The inference-rule
graphic and favicon are made directly from text and simple geometry.
