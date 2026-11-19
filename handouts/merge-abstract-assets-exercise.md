---
publish: true
title: "Branching: Merge Assets"
section: "Exercises & Workshops"
order: 7
group: Week 6
---

# Exercise: Merge Your Abstract Assets Branch

**Do this after:** the [Branching](/handouts/branching-exercise) and [Emergency Fix](/handouts/emergency-fix-exercise) exercises. Those were practice projects. This time it's **your real work**.

**Time:** about 15 minutes. Check off each step as you finish it.

## The story

On Wednesday, you made a branch called **`abstract-assets`** in your **`assets-manager`** project, and did the Abstract Assets exercise on it: `Asset` became abstract, and you added `Cash`.

That work is **only on the branch**. `main` still has Tuesday's version. Today you'll see that for yourself, then merge the branch into `main`, the same way you did this morning.

> [!TIP] Which situation are you in?
> - **You did Abstract Assets on the `abstract-assets` branch and it works:** do every step below.
> - **You started it on the branch but it isn't finished:** finish it on the branch first (do Steps 1 and 2, then work on it). Only merge code that works into `main`.
> - **You did it on `main`, or in a copy of the project:** there's nothing to merge; your work is already where it belongs. Skip this exercise and go on to the Car Dealership.

## Step 1: Get ready

- [ ] Open **`assets-manager`** in IntelliJ
- [ ] Check the top of the window: you're on **`abstract-assets`**. If not: **Git → Branches...** → **`abstract-assets`** → **Checkout**.
- [ ] Anything **blue** in the Project window? Commit it now, on the branch: **Commit** window (**Cmd+K** / Ctrl+K).
- [ ] Open the **Log** tab: **Git** tool window (**Cmd+9** / Alt+9) → **Log**

**Check:** in the **Log**, `abstract-assets` is ahead of `main`. Your Wednesday commits are only on the branch.

## Step 2: See what `main` is missing

- [ ] **Git → Branches...** → **`main`** → **Checkout**
- [ ] Open `Asset`: it's **not** abstract, and `getValue()` has a body again
- [ ] Look in the Project window: there's **no `Cash`** class, and no README answer
- [ ] Run it: Tuesday's version still works

**Check:** you can say why `Cash` "disappeared": it's only on `abstract-assets`, and you're on `main`.

## Step 3: Merge

- [ ] Make sure you're on **`main`** (top of the window). You always merge **into** the branch you're on.
- [ ] **Git → Branches...** → **`abstract-assets`** → **Merge 'abstract-assets' into 'main'**
- [ ] Open `Asset`: it's abstract now, and **`Cash`** is back in the Project window
- [ ] Run it: every asset prints, including your cash

**Check:** in the **Log**, `main` is now at the same commit as `abstract-assets`.

> [!NOTE] Straight line or two lines?
> If you didn't commit anything on `main` since Wednesday, the Log is a straight line: Git just moved `main` forward (a **fast-forward**, like this morning's Branching exercise). If you did, Git made a merge commit and you'll see two lines join, like the Emergency Fix.

## Step 4: Push and check GitHub

- [ ] **Git → Push...** (**Cmd+Shift+K** / Ctrl+Shift+K) → **Push**
- [ ] Open your `assets-manager` repo on GitHub. On **`main`**, you see `Cash.java` and your README answer.
- [ ] Click the **branch** dropdown (it says `main`) on GitHub: `abstract-assets` is there too, because you pushed it on Wednesday

## Step 5 (optional): Delete the branch

- [ ] **Git → Branches...** → **`abstract-assets`** → **Delete**

This deletes the branch on your computer only. The copy on GitHub stays, and that's fine. Your work is safe in `main` either way.

## Last check

- [ ] You can explain why your Abstract Assets work wasn't in `main` until now, and what the merge did

## Stuck?

- **Which branch am I on?** The top of the IntelliJ window (or bottom right).
- **"Your local changes would be overwritten by checkout"?** You have changes that aren't committed. Click **Don't Checkout** (never Force Checkout: it throws your changes away), commit on the branch you're on, then switch.
- **No `abstract-assets` in the Branches list?** You didn't make the branch on Wednesday. Your work is on `main` already; skip this exercise.
- **No "Merge ... into 'main'" option?** Check out `main` first.
- **A Conflicts window?** You changed the same lines on `main` and on the branch. Don't click anything you're unsure of. Ask your instructor.
- **Push rejected?** See [Push Rejected](/handouts/push-rejected).
