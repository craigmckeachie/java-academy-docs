---
publish: true
title: Ignore IntelliJ Files
section: "Git & GitHub"
order: 2
group: Setup
---

# Ignore IntelliJ's `.idea` Folder (One Time)

Do this **once per computer**. After that, Git ignores IntelliJ's settings folder in **every** project, and you never have to think about it again.

## Why

Every IntelliJ project has a folder named **`.idea`**. It holds *your* IntelliJ settings for that project: window layout, "don't ask again" choices, and so on. It isn't your code, and nobody else needs it.

When `.idea` files get committed, they cause trouble with **branches**. A settings file gets committed on one branch but not on the other, and then Git refuses to switch branches: *"Your local changes would be overwritten by checkout."*

> [!NOTE] Why doesn't IntelliJ ignore it for you?
> IntelliJ is built for teams. Some `.idea` files hold settings a team wants everyone to share, like code style and run configurations, so IntelliJ only ignores the files that are clearly personal (like `workspace.xml`). Our projects are individual, so there's nothing to share, and ignoring the whole folder is fine. IntelliJ rebuilds `.idea` from your `pom.xml` whenever you open the project.

The fix is to tell Git to **ignore** the `.idea` folder. You could add it to each project's `.gitignore` (the steps are on [IntelliJ + Git](/handouts/intellij-git)), but it's easier to do it once for your whole computer.

## Step 1: Create your global ignore file

1. Open a terminal:
   - **Mac:** IntelliJ's terminal (**View → Tool Windows → Terminal**, or **Option+F12**), or the Terminal app
   - **Windows:** **Git Bash**. Don't use PowerShell or Command Prompt for this step: PowerShell saves the file in a format Git can't read.
2. Run this command:

   ```bash
   echo ".idea/" >> ~/.gitignore_global
   ```

   This creates a file named `.gitignore_global` in your home folder, with one line in it: `.idea/`. It's a plain `.gitignore` file, just like the ones in your projects.

## Step 2: Tell Git to use it

Git doesn't know about the file yet. Run:

```bash
git config --global core.excludesFile "~/.gitignore_global"
```

This saves a setting that says "in every repository, also ignore what's in this file." `--global` means it applies to every project on this computer, the same as your name and email from [Git & GitHub Setup](/handouts/git-github-setup).

## Step 3: Check it worked

```bash
cat ~/.gitignore_global
```

It should print `.idea/`.

```bash
git config --global core.excludesFile
```

It should print `~/.gitignore_global`.

Then, the next time you create a project, open the **Commit** window (**Cmd+K** / **Ctrl+K**) before your first commit. You shouldn't see any `.idea` files listed.

## What it doesn't do

- **It doesn't change projects that already committed `.idea` files.** Git keeps tracking files it already has. In those projects, **commit or roll back every change before you switch branches**, `.idea` files included. The Commit window should be empty.
- **It's per computer.** On a new computer, do these steps again.

## Stuck?

| Problem | Fix |
|---|---|
| `cat` prints nothing, or "No such file" | Run Step 1 again, in Git Bash on Windows. |
| The second check prints nothing | Run Step 2 again, with the quotes. |
| You ran Step 1 twice and `.idea/` is in the file twice | That's fine. Git reads it the same way. |
| "would be overwritten by checkout" when switching branches | The file it names was changed but not committed. Commit it, or right-click it in the Commit window → **Rollback**, then switch again. |
| You want an old project to stop tracking `.idea` | Ask your instructor first. |
