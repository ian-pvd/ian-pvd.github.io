---
title: "Casting PHP Variable Types"
layout: post
topic: PHP
---

PHP offers Type Juggling, which converts a variable to the chosen type. In the past, I never found myself using this much. Now, as I work more in the backend, I'm discovering many practical uses for it.

The [syntax](https://www.php.net/manual/en/language.types.type-juggling.php#language.types.typecasting){:target="_blank"} specifies a variable type inside parenthesis:

```
$var = (int) "123";
```

## Input Conversion

When dealing with values that come from somewhere outside your theme, you might find input or meta fields that aren't using the desired type.

```php
$input_string = "0123";
$number = (int) $input_string; // 123

$input_number = 401;
$string = (string) $input_number; // "401"
```

Now you can concatenate, calculate, or compare using the variable as needed.

## Type Checking

Working with TypeScript has emphasized the importance of variable types. Javascript is full of [weird typecasting bugs](https://github.com/denysdovhan/wtfjs?tab=readme-ov-file#-examples){:target="_blank"} but TypeScript guards against this. In PHP, strict comparisons are considered a best practice.

For example, you might expected a plugin to return a string value, but it returns `null` instead when nothing is found. Your theme is expecting booleans whenever it checks for style options.

```php
function pvd_get_style() {
	return "style"; // The plugin returns a string value.
}
$has_style = pvd_get_style(); // $has_style = "style"

// Strict check to see if a style value was returned:
if ( (bool) $has_style === true ) {
  // Style returned.
}
```

Here the `$has_style` check will be cast to a true value for this strict comparison, yet it will remain a string that can be used elsewhere in your code.
