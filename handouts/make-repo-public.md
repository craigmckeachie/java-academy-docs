---
publish: true
title: Make a Repo Public
section: "Git & GitHub"
order: 2
---

# GitHub: Make a Private Repository Public

Your instructor needs to see your code. If you shared a project with **Private** checked (it's checked by default in IntelliJ's **Share Project on GitHub** window), the repo URL you send gives a **404** to anyone but you. Here's how to fix it on GitHub. It takes about a minute, and you don't need to change anything in IntelliJ.

> [!WARNING] Before you make it public
> Anyone on the internet can read a public repository, **including its whole commit history**. Make sure no commit contains a password, API key, or personal information. For our exercises there shouldn't be any, but check before you flip the switch.

## Steps

1. **Open the repository on GitHub.** Go to [github.com](https://github.com), sign in, and click the repo's name (or open the repo URL you were going to send).
   - A private repo shows a **Private** label next to its name.
2. **Open Settings.** Click the **⚙ Settings** tab at the top of the repo, the last tab on the right after Code, Issues, Pull requests, and so on.
   - Don't see **Settings**? On a narrow window it's hidden under the **⋯** menu at the end of the tabs.
3. **Scroll to the bottom of the General page** to the red-bordered **Danger Zone**.
4. Next to **Change repository visibility**, click **Change visibility**.
5. Choose **Change to public** (or **Make public**, depending on GitHub's current wording).
6. **Confirm.** GitHub shows a few warnings, one click at a time:
   - Click **I want to make this repository public**.
   - Click **I have read and understand these effects**.
   - Click **Make this repository public**.
7. **If GitHub asks you to confirm it's you** (a password, a code from your authenticator app, or a passkey), do that. This is normal for Danger Zone changes.
8. **Check it worked.** The **Private** label next to the repo name now says **Public**.

> [!TIP] Test the link
> Open the repo URL in an **incognito (private browsing) window** (where you're not signed in). If you can see your code, so can your instructor. Then send the URL.

## Next time: share it as public from the start

In IntelliJ, **Git → GitHub → Share Project on GitHub**, then **uncheck Private** before you click **Share**. See [IntelliJ + Git: New Project, Commit & Push](/handouts/intellij-git).

## Common questions

- **Do I need to push again?** No. Visibility is a GitHub setting; your code, commits, and the repo URL stay the same.
- **Will my commit history change?** No. Everything stays as it is; it just becomes visible.
- **I don't see Danger Zone or Change visibility.** Make sure you're on **Settings → General** for **your own** repository. You can only change repos you own.
