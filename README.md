# Logic Group website starter

This is a small Jekyll website designed for GitHub Pages. It uses no paid theme, database, plug-ins, or external JavaScript.

## What each file does

- `_config.yml`: website title and basic configuration.
- `_layouts/default.html`: shared header, navigation, and footer.
- `assets/css/style.css`: colours, typography, spacing, cards, and mobile layout.
- `index.md`: homepage.
- `people.md`, `research.md`, `seminars.md`, `contact.md`: principal pages.
- `404.html`: page shown for an incorrect address.

## Replace before publishing

Search the project for these placeholders:

- `Logic Group`
- `Your University`
- `YOUR-ORGANIZATION`
- `example.org`
- sample names, dates, addresses, and research descriptions

## Publish on GitHub Pages

1. Create a public repository named `ORGANIZATION.github.io` inside your GitHub organization.
2. Upload everything in this folder to the repository root. Do not upload the containing folder itself.
3. Open **Settings → Pages** in the repository.
4. Under **Build and deployment**, select **Deploy from a branch**.
5. Select the `main` branch and `/ (root)`, then save.
6. Wait a few minutes and visit `https://ORGANIZATION.github.io`.

## Make an ordinary text change

1. Open a `.md` file on GitHub.
2. Click the pencil icon.
3. Edit the text.
4. Select **Commit changes**.

GitHub Pages rebuilds the site automatically.

## Change the colours

Open `assets/css/style.css`. The principal colours are at the top:

```css
--navy: #102a43;
--teal: #087f8c;
--ink: #17202a;
--paper: #ffffff;
--soft: #f3f7f8;
```

Changing these values changes the colour system across the entire website. Check colour contrast before publishing.

## Add a new page

Create `publications.md` containing:

```markdown
---
layout: default
title: Publications
---

# Publications

- Author, *Title*, Journal, year.
```

The page will appear at `/publications/`. To put it in the main navigation, add a link in `_layouts/default.html`.

## Domain

First confirm that the site works at `ORGANIZATION.github.io`. Then follow GitHub's current custom-domain documentation. Verify the domain at organization level before adding DNS records, and enable **Enforce HTTPS** afterwards.

