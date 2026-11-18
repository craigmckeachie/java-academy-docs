---
publish: true
title: Push Rejected
section: "Git & GitHub"
order: 5
---

# Push Rejected: What It Means and How to Get Out

You clicked **Push**, and IntelliJ says the push was **rejected**. Nothing is broken, and nothing is lost. It means **GitHub has a commit that your computer doesn't**.

## 1. Why it happens

Your repo lives in two places: on your computer and on GitHub. A push only works when GitHub has nothing new. It gets something new when:

- You edited a file **on GitHub's website**, like fixing the README there
- You pushed from **another computer**
- Someone else pushed to the same repo

Git won't let your push wipe out that commit, so it stops and asks you to bring it down first.

## 2. Get out of it (usually one click)

1. In the **Push Rejected** window, click **Merge**. IntelliJ downloads GitHub's commits and combines them with yours.
2. If no other window opens, it worked. Open the files you changed and check they look right. Run the app.
3. Push again: **Git → Push...** (Cmd+Shift+K / Ctrl+Shift+K). It goes through this time.

The **Log** tab (Cmd+9 / Alt+9) now shows two lines joining: your commits and GitHub's, merged.

> [!WARNING] A "Conflicts" window opened?
> That means your computer and GitHub both changed the **same lines**, and Git needs a person to decide. **Don't click anything you're unsure of.** Ask your instructor, or click **Cancel** / close it and ask. Nothing is lost while you wait.

## 3. Stop it from happening

- **Pull before you start working:** **Git → Update Project...** (Cmd+T / Ctrl+T) brings down anything new from GitHub. Do it each time you open a project you might have changed somewhere else.
- **Make your changes in IntelliJ,** not on GitHub's website. Edit the README in IntelliJ, then commit and push.
- **Push often.** The longer you wait, the more likely something changed on GitHub in the meantime.
