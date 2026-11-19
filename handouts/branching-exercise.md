---
publish: true
title: "Branching: Practice"
section: "Exercises & Workshops"
order: 5
group: Week 6
---

# Exercise: Branching in IntelliJ

Every step uses **IntelliJ's menus**. Later in the course, you'll do this same exercise on the command line.

**What you'll practice:** building a small feature on its own **branch**, seeing that `main` doesn't have it until you **merge**, and then merging it in.

![A line of commits on main. A feature branch leaves it, gets two commits that are only on the branch, and merges back into main](/diagrams/branch-merge.svg){.screenshot}

**Time:** about 35 minutes. Check off each step as you finish it. **Next:** the [Emergency Fix](/handouts/emergency-fix-exercise), in the same project.

> [!TIP] Two things to keep in view
> - **Which branch am I on?** The branch name is at the **top of the IntelliJ window** (in the classic look, bottom right). Check it before every step.
> - **The Log tab:** open the **Git** tool window (**Cmd+9** / Alt+9) → **Log**, and leave it open. Every commit and branch shows up there.

## Step 1: Create the project

- [ ] **File → New → Project...**, and fill it in:
  - **Name:** `git-exercise`
  - **Location:** your `workbook-5` folder
  - **Build system:** Maven
  - **Create Git repository:** ✅ checked
  - **Add sample code:** ✅ checked (this time you want IntelliJ's starter `Main`)
  - **Advanced Settings → GroupId:** `com.pluralsight`
- [ ] Click **Create**, open `Main`, and run it. The sample code prints a greeting and some numbers.
- [ ] Make your first commit: **Commit** window (**Cmd+K** / Ctrl+K), check all the files, message `Initial commit`, click **Commit**.
- [ ] **Git → GitHub → Share Project on GitHub**. Uncheck **Private**, so the repo is **public**, then click **Share**. Add the link to the class GitHub sheet.

**Check:** the **Log** tab shows one commit, on `main`.

## Step 2: Create a branch for the feature

You're going to change the greeting so it uses the person's name. That's the **feature**, and you'll build it on its own branch.

(In real life a change this small wouldn't get its own branch. This is practice.)

- [ ] **Git → New Branch...**, name it **`CustomizeGreeting`**, keep **Checkout branch** checked, and click **Create**.

**Check:** the top of the window says **`CustomizeGreeting`**. Nothing in `Main` changed: a new branch starts as an exact copy of where you were.

## Step 3: Build the feature

- [ ] Change `Main` so it asks for the person's name with a `Scanner`, then greets them. Replace IntelliJ's sample code.
- [ ] Run it. It should look like this:

```
What is your name? Ana
Hello Ana!
```

**Check:** in the **Project** window, `Main` is **blue**. Blue means "changed since the last commit."

## Step 4: Commit the feature

- [ ] Open the **Commit** window (**Cmd+K** / Ctrl+K), check `Main.java`, type the message `Add custom user greeting`, and click **Commit**.

**Check:** in the **Log** tab, your new commit is labeled **`CustomizeGreeting`**, one step ahead of **`main`**. `main` hasn't moved.

## Step 5: Switch back and forth

This is the step that shows what a branch is.

- [ ] **Git → Branches...** → **`main`** → **Checkout**.
- [ ] Look at `Main`. **Your greeting is gone!** The change lives only on `CustomizeGreeting`. Run it: the sample code is back.
- [ ] **Git → Branches...** → **`CustomizeGreeting`** → **Checkout**. Your greeting is back.

> [!NOTE] Nothing was lost
> Switching branches swaps the files in your project for that branch's version. Your commit is safe on `CustomizeGreeting` the whole time.

## Step 6: Merge the feature into `main`

The greeting works, so bring it into `main`.

- [ ] **Check out `main` first:** **Git → Branches...** → **`main`** → **Checkout**. You always merge **into** the branch you're on.
- [ ] **Git → Branches...** → **`CustomizeGreeting`** → **Merge 'CustomizeGreeting' into 'main'**.
- [ ] Open `Main`: the greeting is on `main` now. Run it.
- [ ] **Push** `main` to GitHub: **Git → Push...** (**Cmd+Shift+K** / Ctrl+Shift+K) → **Push**. Open your repo on GitHub and look at `Main.java`: the greeting is there.

**Check:** in the **Log** tab, `main` and `CustomizeGreeting` now point to the **same** commit.

> [!NOTE] Why is the Log a straight line?
> `main` didn't get any new commits while you worked on the branch, so Git just moves `main` forward to catch up. That's called a **fast-forward**. In the [Emergency Fix](/handouts/emergency-fix-exercise), **both** branches get new commits, and you'll see two lines join.

## Step 7 (optional): Delete the branch

- [ ] **Git → Branches...** → **`CustomizeGreeting`** → **Delete**.

Some teams delete a branch once it's merged; others keep it for history. Either way, the commits stay in `main`.

## Last check

- [ ] You can explain, in one sentence, why the greeting disappeared in Step 5

## Stuck?

- **Which branch am I on?** The top of the IntelliJ window (or bottom right).
- **"Your local changes would be overwritten by checkout"?** You changed something and didn't commit it. Click **Don't Checkout** (never Force Checkout: it throws your changes away), commit, then switch.
- **No "Merge ... into 'main'" option?** You're not on `main`. Check out `main` first, then open **Git → Branches...** again.
- **Merged, but GitHub doesn't show it?** Merging happens on your computer. Push `main`.
- **Push rejected?** See [Push Rejected](/handouts/push-rejected).
- **A Conflicts window?** Don't click anything you're unsure of. Ask your instructor.
