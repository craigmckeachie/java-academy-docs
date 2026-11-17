---
publish: true
title: Thu 11/19
section: Daily Checklists
---

# Thursday 11/19: Today's Checklist

**Today:** **branches** (Workbook 5c), all in IntelliJ. A branch is a separate line of commits, so you can build something new while `main` keeps working. This morning you merge Wednesday's `abstract-assets` branch, practice branching in a small project, and see how to get working code back from an old commit. After that, the day is for finishing the **Car Dealership**, which is **due today**.

Check items off as you go. **"Done" = the code runs, it's committed, it's pushed to GitHub, and its link is on the class GitHub sheet.**

## First thing

- [ ] **`car-dealership`** (Workshop 4w, pt 1) is **due today**, all five phases. Friday's workshop adds to this same project, so it needs to work.
- [ ] **`assets-manager`**: Abstract Assets is committed and pushed **on the `abstract-assets` branch**. We'll merge it together this morning.
- [ ] **Assessment 2** is **Monday 11/23 at 3:00**

## Morning: branches in IntelliJ (Workbook 5c)

After the **Branches in IntelliJ** demo, read pp. 5–7.

> [!TIP] Remember
> **Your code lives on whichever branch you're on.** Switch branches and IntelliJ swaps the files to match. Nothing is lost; it's on the other branch.

### Together: merge `abstract-assets`

- [ ] Open **`assets-manager`**. Everything is committed and pushed.
- [ ] **Git → Branches...** → **`main`** → **Checkout**. `Asset` is back to how it was Tuesday: not abstract, no `Cash`.
- [ ] **Git → Branches...** → **`abstract-assets`** → **Merge 'abstract-assets' into 'main'**
- [ ] Open `Asset`: it's abstract now, and `Cash` is there. Run it.
- [ ] Push: **Git → Push...** (Cmd+Shift+K / Ctrl+Shift+K). Check on GitHub that `main` has your changes.

### Exercise: Branching (pp. 26–28), in IntelliJ

The workbook gives `git` commands. **Do each step in IntelliJ instead**, using the right-hand column:

| Workbook says | Do this in IntelliJ |
|---|---|
| `git branch CustomizeGreeting` and `git switch CustomizeGreeting` | **Git → New Branch...**, name it `CustomizeGreeting`, keep **Checkout branch** checked, **Create** |
| `git status` | The branch name at the top of the window (or bottom right). Changed files are **blue** in the Project window and listed in the **Commit** window (Cmd+K / Ctrl+K). |
| `git add -A` and `git commit -m "..."` | **Commit** window (Cmd+K / Ctrl+K): check the files, type the message, **Commit** |
| `git log` | **Git** tool window (Cmd+9 / Alt+9) → **Log** tab |
| `git switch main` | **Git → Branches...** → `main` → **Checkout** |
| `git merge --no-ff CustomizeGreeting -m "..."` | On `main`: **Git → Branches...** → `CustomizeGreeting` → **Merge 'CustomizeGreeting' into 'main'** |
| `git branch -d CustomizeGreeting` | **Git → Branches...** → `CustomizeGreeting` → **Delete** |

- [ ] **Step 1:** create the project **`git-exercise`** in `workbook-5`, with a git repository. Run it: Hello World works. Commit. Share it to GitHub as a **public** repo and add the link to the class GitHub sheet.
- [ ] **Step 2:** create the branch **`CustomizeGreeting`** and check that you're on it
- [ ] **Step 3:** change `Main` to ask for the user's name with a `Scanner`, then print `Hello <name>!`. Run it.
- [ ] **Step 4:** commit with the message `Add custom user greeting`. Find your commit in the **Log** tab.
- [ ] **Step 5:** check out **`main`** and open `Main`. Your greeting is gone! Check out **`CustomizeGreeting`** again: it's back.
- [ ] **Step 6:** check out **`main`**, then merge `CustomizeGreeting` into it. Open `Main`: the greeting is there now. Run it.
- [ ] Push `main`, and look at the graph in the **Log** tab
- [ ] Delete the `CustomizeGreeting` branch (optional; some teams keep old branches)

p. 28's note about a text editor and vim doesn't apply: IntelliJ asks for the message in a window.

### The emergency fix (p. 7), same project

You're halfway through a feature when a bug has to be fixed **right now**. Branches let you do both.

- [ ] Create a branch **`AddGoodbye`**. Start the feature: at the very end of `main`, print `Goodbye <name>!`. Commit.
- [ ] The "emergency": the question is unclear. Check out **`main`** and create a branch **`FixPrompt`** from it. Change only the line that asks for the name, to `Please enter your name: `. Commit.
- [ ] Check out **`main`** and merge **`FixPrompt`** into it. Run it: the fix is there, and `Goodbye` isn't, because that feature isn't finished.
- [ ] Check out **`AddGoodbye`**. The fix isn't here, and that's fine. Then check out `main`, merge `AddGoodbye`, and run it: both changes are there. Push.

> [!WARNING] A merge conflict window?
> If both branches changed the **same line**, IntelliJ opens a **Conflicts** window. Don't panic, and don't click anything you're unsure of. Ask your instructor; we'll handle conflicts together after Capstone 2.

## Late morning: getting working code back (Workbook 6b p. 8)

After the **"get working code back"** show:

- [ ] Know the steps. If something that used to work is broken:
  1. Find the commit where it still worked: the **Log** tab in IntelliJ, or **Commits** on your repo's GitHub page
  2. Click the commit, then the file, to see it as it was then
  3. Copy the working code into your current file
  4. Run it, then commit: `Restore working search` (or whatever you restored)

## Rest of the day: finish the Car Dealership

- [ ] **Phases 1–4** work: choosing **7** lists the vehicles from the file
- [ ] **Phase 5:** every search, add, and remove works, and `saveDealership()` keeps your changes after you quit and run again
- [ ] A **README** that says what the app does and how to run it
- [ ] Commit, push, and check its link on the class GitHub sheet

**Friday** starts from this project: you'll move it into packages and add sales and lease contracts.

## Done with the dealership?

In this order:

- [ ] Any unfinished exercise from this week: **Vehicles**, **Assets**, **Abstract Assets** (merged into `main`?), **Prompting Patterns**
- [ ] **Assessment 2** (Monday at 3:00): classes and objects, encapsulation, `this` and `super`, constructors, overloading vs. overriding, inheritance, polymorphism, `static`, `ArrayList`, try/catch, `LocalDate`. Explain each one out loud, or have an AI quiz you (Flipped Interaction).

## Finished early?

- [ ] In `car-dealership`, make a branch for one small improvement (a nicer vehicle table, or a "no vehicles found" message), commit it there, and merge it into `main` when it works
- [ ] In `git-exercise`, look at the **Log** tab's graph. Can you point to where each branch started and where it was merged?

## Stuck?

- **[Help Desk](/handouts/help-desk):** today's helper is in the Help Desk breakout room for the first 15–20 minutes of each breakout. Share your screen; you do the typing.
- **Your instructor** is always available. Ask early!
- **Which branch am I on?** Look at the branch name at the top of the IntelliJ window (or bottom right).
- **"Your local changes would be overwritten by checkout"?** Commit your changes first, then switch branches.
- **The merge option isn't there?** You have to be **on** the branch you're merging **into** (usually `main`). Check out `main` first.
- **Merged, but GitHub doesn't show it?** Merging happens on your computer. Push `main`.
- **Push rejected?** GitHub has commits you don't. Ask your instructor before you click anything.
