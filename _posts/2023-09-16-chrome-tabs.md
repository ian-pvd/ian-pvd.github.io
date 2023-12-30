---
title: "Set keyboard shortcuts for Chrome's tab menu options"
layout: post
topic: chrome tabs
image: chrome-tabs-menu.png
---

For casual reading & browsing, use Firefox. When I need to get work done, I always switch back to Chrome. Tab groups are crucial for keeping my development workflows untangled.

I prefer to have as few tabs open as possible, and I always want to be able to find the one I need. Chrome's tab groups, along with quickly pinning, undocking, duplicating, and searching tabs is indispensable during project management and engineering.

Unfortunately Chrome doesn't ship with keyboard shortcuts for the options in the Tab menu. After leaving the home row one too many times, I eventually decided to use the macOS System Preferences to create my own.

1. Open the Shortcuts tab inside the Keyboard panel.
2. To add new shortcuts to Chrome, start by clicking the create new shortcut button.
3. Select Chrome as the application, and use the menu name exactly as it appears in the application. Choose your shortcut keys, and make sure to test it for conflicts.

![macOS Keyboard Shortcuts](/assets/images/add-app-shortcut.png){:class="screenshot"}

Whenever I'm setting up Chrome for the first time, I add these shortcuts:

| New Tab to the Right | `ctrl` + `cmd` + `t` |
| Duplicate Tab | `ctrl` + `alt` + `cmd` + `t` |
| Pin Tab | `ctrl` + `cmd` + `p` |
| Group Tab | `ctrl` + `cmd` + `g` |
| Close Other Tabs | `ctrl` + `cmd` + `w` |
| Close Tabs to the Right | `ctrl` + `alt` + `cmd` + `w` |
| Move Tab to New Window | `ctrl` + `cmd` + `u` |

Pinning tabs lets me hide things that I to keep open but will rarely check: inboxes, task lists, or deploys & builds for example.

Groups organize all the tabs from your workflow. I use them to collect JS documentation, task information, testing environments, back & front-end views, or whatever else I need to organize into a group.

Undocking tabs with the "Move Tab to New Window" shortcut pops them out into a separate window. This a big help when you're context switching, comparing views, checking for full-screen details, and more.

Adding shortcuts doesn't just make it easier to use the Tab menu's options. Making these available from the keyboard means you'll use them more often. Plus it's one less reason to reach for your mouse, which is always appreciated.
