---
title: "Can I Push The Button?"
layout: post
topic: Accessibility
---

React has some invaluable plugins for [linting your react project](https://www.npmjs.com/package/eslint-plugin-react){:target="_blank"} and [enforcing code quality](https://www.npmjs.com/package/eslint-plugin-react-hooks){:target="_blank"}. The [eslint-plugin-jsx-a11y](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y){:target="_blank"} will catch markup and functionality that doesn't follow best practices and recommend accessibility fixes.

One common issue that I see when reviewing code is from interactivity that has been added to elements incorrectly. These errors can look like this:

## Error:

```jsx
/* rule: no-static-element-interactions */

/* fail */
<button onClick={() => {console.log('clicked')}}>

/* pass */
<button onClick={() => {console.log('clicked')}}>
```

## Error: Elements with the 'button' interactive role must be tabbable

```jsx
/* rule: interactive-supports-focus */

/* fail */
<button onClick={() => {console.log('clicked')}}>

/* pass */
<button onClick={() => {console.log('clicked')}}>
```

If an element is added to the markup that has interactive behavior, for example `onClick`, the element must be focusable using the tab key.
- If you get this error in Fix the a11y warning in React: Clickable Element Needs Focus: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/interactive-supports-focus.md

## Button Semantics & Styles
- While there are several ways to fix this, the smartest solution is to turn the element into a button.
- Buttons give you interactive behavior for free.
- Usually the friction that discourages developers from doing this in the first place is to avoiding to dealing with the browser's user-agent button styles.
- Here are some styles for resetting the button in all browsers.

Notes:
linter plugin error notice
https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/interactive-supports-focus.md
