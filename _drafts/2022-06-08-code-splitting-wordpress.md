---
title: "A Code Splitting Strategy for WordPress"
layout: post
topic: WordPress
---

- Create entrypoints for your template:
  - Front Page
  - Single
  - Archive
  - Page
  - etc
- Entry points need to be set up right in the index files to include the core CSS.
  - Entry points need to include any mixins and any other non-outputting CSS
  - Partials should not include base styles like CSS custom properties in `:root{}`, these only need to be loaded once.
- Check what page you're on before enqueueing stylesheets.
- This will improve coverate scores for CWV.
