# Hugo Migration Design

## Overview

Migrate the static HTML nervous.net site to Hugo for easier content management.

## Key Decisions

- **Location:** New `hugo-site/` folder alongside existing `site/`
- **Theme:** Custom theme built from scratch to match existing design
- **Content approach:** Human-friendly markdown files with YAML frontmatter

## Folder Structure

```
hugo-site/
├── config.toml
├── content/
│   ├── _index.md            # Homepage
│   ├── work/
│   │   ├── _index.md
│   │   ├── google-gemini.md
│   │   ├── munko.md
│   │   ├── less-than-jake.md
│   │   └── caribou-lodge.md
│   ├── bots/
│   │   ├── _index.md
│   │   ├── merch-table/
│   │   │   ├── _index.md
│   │   │   └── docs.md
│   │   ├── anxious-analytics/
│   │   ├── roadie/
│   │   ├── bouncer/
│   │   └── plus-one/
│   ├── blog/
│   │   └── _index.md
│   ├── podcast/
│   │   └── _index.md
│   ├── faq/
│   │   ├── _index.md
│   │   ├── general.md
│   │   └── ...
│   └── about.md
├── static/
│   ├── images/
│   └── fonts/
└── themes/nervous/
```

## Theme Structure

```
themes/nervous/
├── layouts/
│   ├── _default/
│   │   ├── baseof.html
│   │   ├── list.html
│   │   └── single.html
│   ├── index.html
│   ├── work/
│   │   ├── list.html
│   │   └── single.html
│   ├── bots/
│   │   ├── list.html
│   │   └── single.html
│   ├── faq/
│   │   └── list.html
│   ├── partials/
│   │   ├── head.html
│   │   ├── nav.html
│   │   ├── footer.html
│   │   ├── section-divider.html
│   │   ├── carousel.html
│   │   └── card.html
│   └── shortcodes/
│       ├── feature-list.html
│       └── content-block.html
├── static/
│   ├── css/style.css
│   └── js/main.js
└── theme.toml
```

## Content Types

### Case Studies (work/)
- Individual markdown files per case study
- Frontmatter: title, tagline, image, weight

### Bots (bots/)
- Folder per bot with _index.md and docs.md
- Frontmatter: title, tagline, image, price, features, use_cases

### FAQ (faq/)
- One markdown file per section
- Questions as YAML array in frontmatter

### Blog (blog/)
- Standard Hugo blog posts

### Podcast (podcast/)
- Main page with platform links
- Support for episode posts

### About
- Single page with team members in frontmatter

## Migration Order

1. Set up Hugo project structure
2. Create theme skeleton with existing CSS/JS
3. Build baseof.html with nav and footer partials
4. Migrate pages in order:
   - Homepage
   - Work + case studies
   - Bots listing + individual bots
   - FAQ
   - About, Podcast, Blog, 404
5. Copy static assets
6. Test and compare against current site
