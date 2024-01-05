---
title: "Avoid Scrollbars With 100% Viewport Width"
layout: post
topic: Styles
---

- When you use `width: 100vw` in your styles, this will cause a horizontal scrollbar to show for some users. Especially on Windows, which you probably aren't using while you write styles.

- This is caused by the vertical scrollbar taking up space in the viewport width that `100vw` doesn't account for. The extra pixels will cause a horizontal overflow that causes a scrollbar to show.

- If you're on a mac, you can turn this setting on to see if you're causing a scrollbar to show:

![scrollbar settings](/assets/images/scrollbar-settings.png){:class="screenshot"}

- Sometimes developers will fix this by using `overflow: hidden` on the body tag, but you don't want to do this. It can break things like sticky and fixed positioning. It's also a code smell to simply hide things that are breaking the layout instead of addressing the cause. (Overflow hidden is still fine to use in other, smaller & more isolated component styles.)

- The best way to fix this is to create `--viewport-width` custom property to reference in your CSS. Set this value to `100vw` to start, and then subtract the scrollbar width from it.

```css
:root {
	--viewport-width: calc(100vw - var(--scrollbar-width, 0px));
}
```

- Use JS to check for a scrollbar and then set the `--scrollbar-width` variable to account for it.

```js
const getScrollbarWidth = () => {
	let scrollbarWidth = 0;

	if (window.innerWidth > document.body.clientWidth) {
		scrollbarWidth = window.innerWidth - document.body.clientWidth;
	}

	document.documentElement.style.setProperty(
		'--scrollbar-width',
		`${scrollbarWidth}px`
	)
}
```

- Now, in your CSS, whenever you reference `--viewport-width`, it will use a value that fills the viewport while accounting for the vertical scrollbar, which

- Remember that you'll want to use this JS check the scrollbar width when a page first loads, and (using a debouncer) whenever the viewport changes.
