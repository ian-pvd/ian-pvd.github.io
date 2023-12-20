---
title: "Set keyboard shortcuts for Chrome's tab menu options"
layout: post
topic: chrome tabs
---

Firefox is my main web browser for casual reading & browsing. But when I need to get work done, I switch back to Chrome. Tab groups are crucial for keeping my development workflows untangled.

I prefer to have as few tabs open as possible, and I always want to be able to find the one I need. Chrome's tab groups, along with quickly pinning, undocking, and duplicating tabs is indispensable during project management and engineering.

Unfortunately Chrome doesn't ship with keyboard shortcuts for the options in the Tab menu. Eventually I decided to use the macOS System Preferences to create my own.

![macOS Keyboard Shortcuts](/assets/images/keyboard-shortcuts-panel.png)

1. Open the Shortcuts tab inside the Keyboard panel.
2. To add new shortcuts to Chrome, start by clicking the create new shortcut button.
3. Select Chrome as the application, and use the menu name exactly as it appears in the application. Choose your shortcut keys, and make sure to test it for conflicts.

![macOS Keyboard Shortcuts](/assets/images/add-app-shortcut.png)

I always add these shortcuts whenever I set up Chrome.

| New Tab to the Right | `ctrl` + `cmd` + `t` |
| Duplicate Tab | `ctrl` + `cmd` + `d` |
| Pin Tab | `ctrl` + `cmd` + `p` |
| Group Tab | `ctrl` + `cmd` + `g` |
| Close Other Tabs | `ctrl` + `cmd` + `w` |
| Move Tab to New Window | `ctrl` + `cmd` + `u` |

The pin tabs option lets me hide tabs that I to keep open but will rarely check. Things like email inboxes, calendars, task lists, or deploys & builds for example.

Tab groups organize your development and project management. I use them to collect documentation, task information, different testing environments, back & front-end views, or whatever else I need into its own tab group.

Undocking tabs with the "Move Tab to New Window" shortcut pops them out into a separate window. This a big help when you're context switching, comparing views, checking for full-screen details, when creating a new task, and more.

Set a duplicate tab shortcut, you'll use it every once in a while. The "New Tab to the Right" shortcut is different from just "New Tab" because it creates the tab to the right of the current one, instead of at the end of the tab bar.

![Chrome tabs menu](/assets/images/chrome-tabs-menu.png){:class="size-medium"}

Adding shorts doesn't just make it easier to use the Tab menu's options. Making these commands available with keyboard control means you'll use them more often. It's one less thing you need to reach for your mouse to control, which is always appreciated.
