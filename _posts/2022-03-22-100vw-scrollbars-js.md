---
title: "Avoid Horizontal Scrollbars Using 100vw"
layout: post
topic: Styles
---

- When you use 100vw, you can cause horizontal scrollbars to show on some sytems, especially on Windows.
- If you're on a mac, you can turn this setting on to see if you're causing scrollbars to show.
- You can fix this using `overflow: hidden` on the body tag, but DONT DO THIS. It breaks positioning. (It's probably fine to use in other, smaller & more isolated component styles.)
- Create a `--vw-100` variable in CSS, then the JS fixes this value by detecting scrollbars and adjusting the value.
