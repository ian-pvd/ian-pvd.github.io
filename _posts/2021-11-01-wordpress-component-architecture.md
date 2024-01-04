---
title: "A Component Based Strategy For WordPress Development"
layout: post
topic: WordPress
---

- Keep your stylesheets and JS organized.
- Use one PHP file, one stylesheet, and one JS file to make a component.
- Css files should look like this:
  - Base
  - Global
  - Templates
    - Single
    - Front Page
  - Partials (components)
    - Site Header
    - Search Bar
    - Post Footer
    - etc
- Use BEM naming convetions to keep files organized.
  - partials/some-component.php
    - Should be able to use it as a unique ID, either id="some-component" or "some-component-<?php the_ID(); ?>">
    - All selectors should start with `class="some-component__`
  - css/partials/some-component.css - All selectors are flat and use `.some-component__` as a prefix.
  - js/partials/some-component.js

Notes:
https://www.notion.so/ianpvd/A-Component-Based-Strategy-For-WordPress-Development-62095c776af240bc88e2a306e4b4b0a7
