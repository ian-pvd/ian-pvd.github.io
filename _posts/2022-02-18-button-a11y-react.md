---
title: "Can I Push The Button?"
layout: post
topic: Accessibility
---

React has some invaluable plugins for [linting your react project](https://www.npmjs.com/package/eslint-plugin-react){:target="_blank"} and [enforcing code quality](https://www.npmjs.com/package/eslint-plugin-react-hooks){:target="_blank"}. The [eslint-plugin-jsx-a11y](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y){:target="_blank"} will catch markup and functionality that don't follow best practices and recommend accessibility fixes.

One issue that I'll occasionally see are a warnings about events that have either been added to the wrong type of elements, or to interactive elements incorrectly. These errors can look like this:

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

The `<button>` and `<a>` elements have semantic meaning that assistive technologies understand as being interactive, but the `div` does not. You could fix this by adding the [button role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/button_role){:target="_blank"} to the div, but this won't add button behavior. The smartest way to fix this is to use a button element, you get all the a11y support for free.

## Error: [Elements with the 'button' interactive role must be tabbable](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/interactive-supports-focus.md){:target="_blank"}

If an element is added to the markup that has an interactivity, for example `onClick`, the element must be focusable by using the tab key.

```jsx
/* rule: interactive-supports-focus */

/* fail */
<span onClick={handleClick()} role="button">Click Test</span>

/* pass */
<span tabindex="0" onClick={handleClick()} role="button">Click Test</span>

/* best */
<button onClick={handleClick()}>Click Test</button>
```

If an event is added to an element that doesn't have interactive behavior, it will not be tabbable. While you could add a [tabindex](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex){:target="_blank"} attribute, using a button has the behavior built int.

## Button Semantics vs Styles

Usually the friction that discourages developers from using a button element is to avoid dealing with the browser's user-agent styles that exist on the button. These are the default styles that browsers will use to give elements their basic appearance.

To reset the button styles and apply your custom styles to a blank slate, you can use this mixin to reset button element styles:
```
@define-mixin button-reset {
    appearance: none;
    background: none;
    border: none;
    box-sizing: inherit;
    color: inherit;
    font-family: inherit;
    padding: 0;
}

button {
	@mixin button-reset;
}
```

This way, yadda yadda.
