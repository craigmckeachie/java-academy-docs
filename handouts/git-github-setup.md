---
publish: true
title: "Set Up Git & GitHub"
section: "Git & GitHub"
order: 1
group: Setup
---

# Git & GitHub Setup (One Time)

Do this **once per computer**, before your first project. After that, follow [IntelliJ + Git: New Project, Commit & Push](/handouts/intellij-git) for every project.

## Step 1: Tell Git who you are

1. Open a terminal:
   - **In IntelliJ:** **View → Tool Windows → Terminal** (Windows: **Alt+F12**, Mac: **Option+F12**)
   - **Outside IntelliJ:** Terminal (Mac), or Git Bash / Command Prompt (Windows)
2. Run these commands one line at a time, **using your own name and email**:

   ```bash
   git config --global user.name "FIRST_NAME LAST_NAME"
   git config --global user.email "my_name@example.com"
   git config --global init.defaultBranch main
   git config --global push.default current
   git config --global push.autoSetupRemote true
   git config --global pull.rebase false
   ```

   | Setting | What it does |
   |---|---|
   | `user.name`, `user.email` | Your name on every commit you make |
   | `init.defaultBranch main` | New repositories start on a branch called `main` (GitHub's default) |
   | `push.default current` + `push.autoSetupRemote true` | `git push` just works the first time, without extra options |
   | `pull.rebase false` | `git pull` **merges** new changes in (the simple default), instead of asking how to combine them |

   > [!TIP]
   > Use the **same email as your GitHub account**, so GitHub links your commits to your profile.

   > [!TIP] IntelliJ asks "Merge or Rebase?" the first time you update
   > IntelliJ's **Git → Update Project** has its own setting. When the dialog appears, choose **Merge** and check **Don't show again**. (Or set it ahead of time: **Settings → Version Control → Git → Update method: Merge**.)

3. **Check it worked:**

   ```bash
   git config --list --global
   ```

   You should see your name, email, and the branch settings in the list.

## Step 2: Connect IntelliJ to your GitHub account

### Option A: Log in through the browser (try this first)

1. Open IntelliJ **Settings**:
   - **Windows:** **File → Settings** (**Ctrl+Alt+S**)
   - **Mac:** **IntelliJ IDEA → Settings** (**Cmd+,**)
2. In the left menu, expand **Version Control** and select **GitHub**.
3. Click **+** (Add) near the top and choose **Log In via GitHub…**
4. A browser window opens. Click **Authorize in GitHub**, and sign in if asked.
5. Back in IntelliJ, your GitHub username and picture appear in the list. Click **Apply**, then **OK**.

### Option B: Log in with a token (if the browser login fails)

Use this if the browser page gets stuck, never returns to IntelliJ, or is blocked by a network or VPN.

**A. Create the token on GitHub**

1. Sign in at [github.com](https://github.com).
2. Click your profile picture (top right) → **Settings**.
3. Scroll to the bottom of the left sidebar → **Developer settings**.
4. **Personal access tokens → Tokens (classic)**.
5. **Generate new token → Generate new token (classic)**.
6. **Note:** a name that says where it's used, e.g. `IntelliJ IDEA - Laptop`.
7. **Expiration:** pick a date after the course ends.
8. Check these scopes:
   - `repo` (full control of your repositories)
   - `workflow` (update GitHub Actions workflows)
   - `read:org` (read organization and team membership)
   - `gist` (create gists; optional)
9. Click **Generate token** at the bottom.
10. **Copy the token right away.** GitHub only shows it once.

> [!WARNING] A token is a password
> Anyone with your token can change your repositories. Don't share it, don't paste it into chat or an AI tool, and don't put it in your code. If it leaks, delete it on GitHub and make a new one.

**B. Add the token to IntelliJ**

1. Open **Settings → Version Control → GitHub**.
2. Click **+** and choose **Log In with Token…**
3. Paste the token into the **Token** field.
4. Click **Log In**, then **Apply** and **OK**.

## Next

You're set up. For each new project, follow [IntelliJ + Git: New Project, Commit & Push](/handouts/intellij-git).
