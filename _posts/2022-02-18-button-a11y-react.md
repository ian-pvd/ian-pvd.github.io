---
title: "Can I Push The Button?"
layout: post
topic: Accessibility
---

React has some invaluable plugins for [linting your react projects](https://www.npmjs.com/package/eslint-plugin-react){:target="_blank"} and [enforcing code quality](https://www.npmjs.com/package/eslint-plugin-react-hooks){:target="_blank"}. The [eslint-plugin-jsx-a11y](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y){:target="_blank"} will catch markup and functionality that don't follow best practices, and recommend accessibility fixes.

Occasionally when reviewing code, I'll see warnings about events that have either been added to the wrong type of elements, or to interactive elements incorrectly. These errors will look like this:

## Error: [Avoid non-native interactive elements.](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-static-element-interactions.md){:target="_blank"}

This error in full:
> Avoid non-native interactive elements. If using native HTML is not possible, add an appropriate role and support for tabbing, mouse, keyboard, and touch inputs to an interactive content element.

```jsx
/* rule: no-static-element-interactions */

/* fail */
<div onClick={handleClick()}>Click Test</div>

/* pass */
<div onClick={handleClick()} role="button">Click Test</span>

/* best */
<button onClick={handleClick()}>Click Test</button>
```

The `<button>` and `<a>` elements have semantic meaning that assistive technologies understand as being interactive, while the `div` does not. Although you could fix this by adding the [button role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/button_role){:target="_blank"} to the div, but this won't add button behavior. The best solution is to use a button element, and get all the accessibility features for free.

## Error: [Elements with the 'button' interactive role must be tabbable](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/interactive-supports-focus.md){:target="_blank"}

If an element is added to the markup that has an interactivity, for example `onClick`, the element must be focusable using the tab key.

```jsx
/* rule: interactive-supports-focus */

/* fail */
<span onClick={handleClick()} role="button">Click Test</span>

/* pass */
<span tabindex="0" onClick={handleClick()} role="button">Click Test</span>

/* best */
<button onClick={handleClick()}>Click Test</button>
```

If a click event is added to a non-interactive element, it will not be tabbable by default. While you could add a [tabindex](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex){:target="_blank"} attribute, the button has the behavior built in.

## Button Semantics vs Styles

Usually the friction that discourages developers from using a button element is dealing with the browser's user-agent styles. These are default styles that browsers use to give buttons their basic appearance.

To [reset the button styles](https://css-tricks.com/overriding-default-button-styles/){:target="_blank"} so you can apply your custom styles on a blank slate, use this button reset:

```
button {
    appearance: none;
    background: none;
    border: none;
    box-sizing: inherit;
    color: inherit;
    font-family: inherit;
    padding: 0;
}
```

When an interactive element brings the visitor somewhere else, use a link. For any other element on a page that does something when clicked, use a button. Avoid using static elements to replicate button behavior. Use button reset styles so you don't have to worry about the default user agent appearance.
