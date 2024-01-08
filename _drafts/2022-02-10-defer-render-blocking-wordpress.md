---
title: "How to Defer Render Blocks Resources in WordPress"
layout: post
topic: WordPress
---

- You might need to defer certain low priority stylesheets on a WordPress site, especially if you're trying to improve CWV scores
- You can defer javascript using the native WP enqueue script function: wp_enqueue_script()
- But there's no native WP function for deferring stylesheets.
- Here's how to write a function to defer stylesheets:
  - pvd_defer_styles()
  - Q: Does this function add the style as type=print and switch it after the page loads, or does it just print the scripts into the footer?

Notes:
- Defer Render Blocking WordPress Resources – https://www.notion.so/ianpvd/Defer-Render-Blocking-WordPress-Resources-c7b9db634e294cc3be8285009e1c221f
- How to Defer WordPress Stylesheets Using Hooks, and Deferring stylesheets using preload – https://www.notion.so/ianpvd/How-to-Defer-WordPress-Stylesheets-Using-Hooks-b2f0facfe7d148bb929ce9bd733774fb#ff87b666d2304fd7b19ab1e237a92b17
- Deferring Stylesheets With JS Detection – https://www.notion.so/ianpvd/Deferring-Stylesheets-With-JS-Detection-76020bd620524f95a5db028bac80133f#d9d7d31712ae458fae2202c4814992e0
- Mention code splitting
