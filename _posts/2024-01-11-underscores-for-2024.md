---
title: "An Underscores Update for 2024"
layout: post
topic: WordPress
---

Automattic released a blank starter theme called [underscores](https://github.com/Automattic/_s){:target="_blank"} in 2012 to give developers a head start on their builds. The project included common template partials & default styles that most themes would make use of. These scaffolds and starter themes are more common and can be more full-featured now, but the underscores repository is still a useful tool for spinning up a simple site without using theme.json or wp-cli.

These days, my use case for underscores will either be a quick & simple WordPress site that doesn't need to track plugins, or a site that will use WooCommerce. The starter theme has the option to ship with basic support for WooCommerce components built in.

While the project still gets lots of attention from developers in the form of [issues](https://github.com/Automattic/_s/issues){:target="_blank"} and [pull requests](https://github.com/Automattic/_s/pulls){:target="_blank"}, it hasn't received an official update from Automattic since January 2022. The codebase is still being used to generate sites using the command `wp scaffold underscores` with the wp-cli tool.

Today I've published a v1.1 release of the [PVD Industrial _s fork](https://github.com/ian-pvd/_s){:target="_blank"} that makes some modern quality of life improvements:
- The new build script `npm run compile:prod` will lint and fix your SCSS files *before* compiling them, and now provides developers the option to output minified CSS.
- A `/build` folder has been added, and build scripts will now output compiled stylesheets there. This folder has also been added to `.gitignore` so that generated files are no longer tracked by version control.
- The files in the `/sass` directory have been simplified and flattened. Folders in the Sass directory now use an `_index.scss` file to load their partials. Any SCSS files that were stored in nested folders have been moved to the top level next to the index.
- Stylelint rules have been changed and now include: enforcing alpha-order, empty lines before at-rules, variable-mixin-property declaration order, max nesting depth, no duplicate selectors, and more.

In the future I also plan to include:
- Many package upgrades for security & deprecated packages. This includes bumping the version for wp-scripts and upgrading Stylelint to at least v14.
- A list of breakpoint variables for media queries.
- Reducing and reorganizing template and style partials. Many style partials are less than 10 lines long.
- Converting SCSS variables to custom properties, and other syntax changes in the CSS to eliminate node-sass as a dependency.
- Converting build scripts to use PostCSS.
- Adding an example of a custom gutenberg block, and a block pattern.

Check out [a diff of the full change set here](https://github.com/Automattic/_s/compare/master...ian-pvd:_s:master#diff-528119d81e5a10738ae49f5e20d333ebc37cea63657eb9069281693e6dae0ad3){:target="_blank"} or [download version 1.1](https://github.com/ian-pvd/_s/tags){:target="_blank"} from the tags page.
