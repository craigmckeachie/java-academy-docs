---
publish: true
title: Working Code Back
section: "Git & GitHub"
order: 6
---

# Get Working Code Back from an Old Commit

Something that **used to work** is broken now, and you can't see what you changed. Your commit history is a safety net: every commit is a snapshot of your code, so you can look at the version that worked and **copy it back**.

> [!TIP] The short version
> 1. Find the last commit where it still worked.
> 2. Look at the file as it was then.
> 3. Copy the working part into your current file.
> 4. Run it, then commit: `Restore working search` (or whatever you restored).

## 1. In IntelliJ

1. Open the **Git** tool window (**Cmd+9** / Alt+9) → **Log** tab.
2. Read the commit messages. Click the last commit **where it still worked**.
3. On the right, you see the files that commit changed. Double-click the broken file: the right side shows it **as it was after that commit**. Not in the list? That commit didn't change it; use **Show History** (below).
4. Copy the working code from there, and paste it over the broken part of your **current** file.
5. Run it. When it works, commit: `Restore working search`.

> [!TIP] Know which file broke?
> Right-click the file in the Project window → **Git** → **Show History**. It lists only the commits that changed **that file**, so the right one is easier to find. Click a commit to see what the file looked like.

## 2. On GitHub

For when you're not at your own computer, or the Log is hard to read:

1. Open your repo on GitHub, and click **Commits** (the clock icon with the number of commits).
2. Click the commit where it still worked.
3. Find the file, click **⋯** next to its name → **View file**. That's the whole file as it was then.
4. Copy what you need into your current file in IntelliJ. Run it, then commit.

## 3. Copy only what you need

> [!WARNING] Don't paste the whole old file
> The old file is missing everything **good** you did since that commit. Copy only the part that was working (a method, a few lines), and keep the rest of your current file.

Did you lose the broken commit? No. History keeps it, and your fix is a **new** commit on top. That's normal; nothing needs to be deleted.

## 4. Make it easy next time

This only works as well as your commits do:

- **Commit small and often,** every time something works. Then there's always a recent commit that works.
- **Write messages that say what changed:** `Add search by price` is easy to find in the Log; `stuff` and `update` aren't.
- **Push,** so GitHub has your history too.

> [!NOTE] Other ways you'll see online
> IntelliJ and GitHub also have **Rollback**, **Revert** and **Reset**. Don't use them for now: they can undo more than you meant to. Copying the working code back is safe, and you can see exactly what you're changing.
