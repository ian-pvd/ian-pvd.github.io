---
title: "Casting PHP Variable Types"
layout: post
topic: PHP
---

In 2015, PHP introduced Type Juggling. I didn't work as much in the back end as I do now, so I didn't use it frequently when it was new. As I work more in the backend, I'm discovering more practical uses for it.

The [syntax](https://www.php.net/manual/en/language.types.type-juggling.php#language.oop5.traits.multiple.ex1){:target="_blank"} specifies a variable type inside parenthesis:

```
$string = (string) "212";
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

Working with TypeScript emphasized the importance of types. Javascript is full of [weird typecasting bugs](https://github.com/denysdovhan/wtfjs?tab=readme-ov-file#-examples){:target="_blank"} but TypeScript guards against this. In PHP, strict comparisons are considered a best practice.

For instance, maybe a plugin is expected to return a string value but returns `null` when nothing is found. But your theme is expecting booleans whenever it checks for style options.

```php
function pvd_get_style() {
	return "style"; // The plugin returns a string value.
}
$has_style = pvd_get_style(); // $has_style = "style"

// Strict check to see if any style value was returned:
if ( (bool) $has_style === true ) {
  // Style returned.
}
```

Here the `$has_style` check will be cast to a true value for this strict comparison, yet it will remain a string that can be used elsewhere in your code.
