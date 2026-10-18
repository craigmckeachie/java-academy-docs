---
publish: true
title: "IntelliJ Warning: println and Logpoints"
section: Setup
order: 3
---

# IntelliJ Warning: `println` and Logpoints

If IntelliJ highlights your `System.out.println` lines in yellow, **you aren't doing anything wrong.** Here's what the warning means, and how to turn it off.

## What you'll see

IntelliJ marks each `println` call with a yellow highlight or squiggly underline:

```java
System.out.println("User count: " + count);
```

Hover over it and the tooltip says something like:

> *Call to 'println' can be replaced with a logpoint*

The same warning shows up in the **Problems** window (Windows: **Alt+6**, Mac: **Cmd+6**).

## What's a logpoint?

A **logpoint** is a debugger feature. Instead of adding a `println` line to your code, you set a special breakpoint that **prints a message while the program runs in Debug mode**, without changing your source code at all. Professional developers use logpoints for *temporary* debugging messages, so they don't have to remember to delete `println` lines later.

## Why `println` is still the right choice for us

IntelliJ adds this warning to discourage leftover debugging statements in production code. But in a **console application**, `println` isn't debugging: **it's how your program talks to the user.**

| | Logpoint | `System.out.println` |
|---|---|---|
| Shows output when… | running in the **debugger** only | **every time** the program runs |
| Changes your code? | No | Yes, it's a line of code |
| Use it for… | temporary debugging messages | **your program's real output**: menus, prompts, results |

> [!NOTE]
> Logpoints are a handy debugging trick to know about. But for showing output to the user, keep using `System.out.println`, `print`, and `printf`.

## Turn the warning off

We use `println` all the time, so turn this inspection off to keep your editor clean.

**For all your future projects (do this once):**
1. Close any open project, or from inside one choose **File → New Projects Setup → Settings for New Projects…**
2. Go to **Editor → Inspections**.
3. Type **`logpoint`** in the search box at the top.
4. Under **Java**, **uncheck** the inspection about replacing `println` with a logpoint.
5. Click **Apply**, then **OK**.

**For a project you already have open:**
1. Open **Settings** (Windows: **Ctrl+Alt+S**, Mac: **Cmd+,**).
2. Follow steps 2–5 above.

The yellow highlights disappear right away.

> [!TIP] Just one line?
> Click the highlighted code, press **Alt+Enter** (Mac: **Option+Enter**), and choose to suppress or disable the inspection from the menu.
