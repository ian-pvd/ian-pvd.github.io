---
title: "Filter WordPress Title Tag With Title Parts"
layout: post
topic: WordPress
---

WordPress offers flexibility in how your theme displays the title tag, which makes it easier to modify them if you're trying to improve SEO or add more context to the browser tab.

## Enabling Theme Support

Instead of using the `wp_title()` function, you can manage the document title tag using title parts by enabling theme support for `title-tag` in your `functions.php` file.

```php
// functions.php

add_theme_support( 'title-tag' );
```

*Reference: [developer.wordpress.org/reference/functions/add_theme_support](https://developer.wordpress.org/reference/functions/add_theme_support/#:~:text=Title%20Tag)*

## Filter The Title

You can customize the title by adding filters to either the `document_title_parts` or `pre_get_document_title` hooks.

To override the entire title, use `pre_get_document_title`. Passing a non-empty value will short-circuit `wp_get_document_title()` and return our value instead.

```php
add_filter( 'pre_get_document_title', function( $title ) {
    $title = "Custom Title";

    return $title;
} );
```

*Reference: [developer.wordpress.org/reference/hooks/pre_get_document_title](https://developer.wordpress.org/reference/hooks/pre_get_document_title/)*

For more granular control, you can use `document_title_parts` to filter different title parts used by the document's title tag. WordPress returns the document title for the current page using [`wp_get_document_title()`](https://developer.wordpress.org/reference/functions/wp_get_document_title/). For more information on how WordPress makes use of these different title parts, [view the source](https://developer.wordpress.org/reference/functions/wp_get_document_title/#source).

```php
add_filter( 'document_title_parts', function( $title ) {
    $title['title'] = 'Custom Page Title';
    $title['page'] = 'Custom Page Number';
    $title['tagline'] = 'Custom Home Description';
    $title['site'] = 'Custom Site Title';

    return $title;
} );
```

*Reference: [developer.wordpress.org/reference/hooks/document_title_parts](https://developer.wordpress.org/reference/hooks/document_title_parts/)*

## Example: Custom Post Type Titles

Here's a practical example of filtering the title tag for different custom post types. This function will check for a single Book or Author page and add context to that page's HTML title tag.

When a user visits a single post page for a Book CPT, the title will include the book's author. If a user visits an Author's page, this function will append the Author's publishing house in the title.

```php
<?php
/**
 * pvd_document_title_parts()
 * Filters document title tag parts.
 *
 * @see https://developer.wordpress.org/reference/hooks/document_title_parts/
 *
 * @param   array $title_parts Original title parts.
 * @return  array              Filtered title parts.
 */
function pvd_document_title_parts( $title_parts ) {
	// Customize the title based on the post type.
    if ( is_singular( 'book' ) ) {
        // If this is a Book CPT, append the author's name in the title.
		$title_parts['title'] .= ' by ' . pvd_get_author();
	} elseif ( is_singular( 'author' ) ) {
        // If this is an Author CPT, append their publisher.
		$title_parts['title'] .= ' from ' . pvd_get_publisher();
	}

    return $title_parts;
}
add_filter( 'document_title_parts', 'pvd_document_title_parts' );
```

## Read More
- [WordPress StackExchange – Can't change the title tag with wp_title filter](https://wordpress.stackexchange.com/a/305548/26063)
- [WordPress Codex – Title Tag](https://codex.wordpress.org/Title_Tag)
