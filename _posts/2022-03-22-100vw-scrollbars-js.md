---
title: "Avoid Unwanted Scrollbars When Using 100% Viewport Width"
layout: post
topic: Styles
---

Using `width: 100vw` in your stylesheets can cause an unwanted horizontal scrollbar to display for some users. This is a common issue on Windows, where a static scrollbar is added to the viewport even when it's not necessary. On a Mac, the scrollbar is shown **over** the content by default, but you can recreate this bug by enabling the "Always Show scroll bars" option.

![scrollbar settings](/assets/images/posts/macos-scrollbar-appearance.png){:class="screenshot"}

The [100vw width](https://developer.mozilla.org/en-US/docs/Web/CSS/Viewport_concepts){:target="_blank"} value in CSS doesn't account for the width of the scrollbar in the viewport. Content that would be behind the scrollbar causes [a horizontal overflow](https://destroytoday.com/blog/100vw-and-the-horizontal-overflow-you-probably-didnt-know-about){:target="_blank"} instead.

Some developers will instinctively reach for `overflow: hidden` and apply it to the `<body>` to fix the overflow, but that's not a good practice. This creates a new stacking context which can cause problems with sticky or fixed positioning. More importantly, it doesn't address the layout issues that are causing the bug.

A better solution is to is to create a `--viewport-width` custom property to reference in your stylesheets. Assume its default value is 100vw and then subtract any scrollbar width.

```css
:root {
	--viewport-width: calc(100vw - var(--scrollbar-width, 0px));
}
```

We can use Javascript to check for a vertical scrollbar by comparing the [window.innerWidth](https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth){:target="_blank"} & [document.body.clientWidth](https://www.w3.org/TR/2016/WD-cssom-view-1-20160317/#dom-element-clientwidth) properties and changing the `--scrollbar-width` value.

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

Setting this CSS property on the `<html>` element makes it available to the viewport width calculation in our stylesheet, overriding the `0px` default value.

Remember that you'll want to use this function to check for the scrollbar when the page first loads, and again whenever the viewport size changes. (☝️ A great use case for a debouncer.)

Don't hesitate to use overflow hidden elsewhere in your styles. It has may use cases in CSS that's scoped to smaller components. But the safest way to fix an unexpected overflow issue is always to debug it.
