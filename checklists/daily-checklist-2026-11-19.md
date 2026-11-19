---
publish: true
title: Thu 11/19
section: Daily Checklists
---

# Thursday 11/19: Today's Checklist

**Today:** we start with a class discussion of **`static`**: when you'd actually use it. Then **branches**, all in IntelliJ. A branch is a separate line of commits, so you can build something new while `main` keeps working. You'll practice branching in a small project, see how to get working code back from an old commit, and then merge your real work: Wednesday's `abstract-assets` branch. After that, the day is for finishing the **Car Dealership**, which is **due today**.

Check items off as you go. **"Done" = the code runs, it's committed, it's pushed to GitHub, and its link is on the class GitHub sheet.**

## First thing

- [ ] **`car-dealership`** (Workshop 4w, pt 1) is **due today**, all five phases. Friday's workshop adds to this same project, so it needs to work.
- [ ] **`assets-manager`**: Abstract Assets is committed and pushed **on the `abstract-assets` branch**. You'll merge it into `main` this afternoon.
- [ ] **Assessment 2** is **Monday 11/23 at 3:00**

## Together: Why Static? (15 min)

We'll go through the [Why Static?](/handouts/why-static) page as a class, after Wednesday's Static demo.

- [ ] Say the one-sentence rule in your own words: what's the difference between a static field and an instance field?
- [ ] Predict the `Ticket` output before we run it
- [ ] Answer the **Try it** questions in chat: static or instance?

## Branches in IntelliJ (25 min)

After the **Branches in IntelliJ** demo, go straight to the exercises below. Today everything happens in IntelliJ. Later in the course, we'll do these same exercises on the command line (Workbooks 5b and 5c).

> [!TIP] Remember
> **Your code lives on whichever branch you're on.** Switch branches and IntelliJ swaps the files to match. Nothing is lost; it's on the other branch.

### Exercise: Branching (about 35 min, before lunch)

- [ ] Finish the **[Branching exercise](/handouts/branching-exercise)** (all steps, in IntelliJ)

### After lunch: Emergency Fix (about 30 min)

You're halfway through a feature when a bug has to be fixed **right now**. Branches let you do both. Same project, `git-exercise`; check off the steps on the exercise page.

- [ ] Finish the **[Emergency Fix exercise](/handouts/emergency-fix-exercise)**

## Getting working code back (10 min)

After the **Getting Working Code Back** demo:

- [ ] Read **[Get Working Code Back](/handouts/get-working-code-back)**, and keep it for the next time something that used to work breaks

## Exercise: Merge Abstract Assets (15 min)

Now merge your real work. Wednesday's Abstract Assets is still only on its branch.

- [ ] Finish the **[Merge Abstract Assets exercise](/handouts/merge-abstract-assets-exercise)** (it says what to do if you didn't use the branch)

## Rest of the day: finish the Car Dealership (about 2 hours)

- [ ] **Phases 1–4** work: choosing **7** lists the vehicles from the file
- [ ] **Phase 5:** every search, add, and remove works, and `saveDealership()` keeps your changes after you quit and run again
- [ ] A **README** that says what the app does and how to run it
- [ ] Commit, push, and check its link on the class GitHub sheet

**Friday** starts from this project: you'll move it into packages and add sales and lease contracts.

## Done with the dealership?

In this order:

- [ ] Any unfinished exercise from this week: **Vehicles**, **Assets**, **Abstract Assets** (merged into `main`?), **Prompting Patterns**
- [ ] **Assessment 2** (Monday at 3:00): classes and objects, encapsulation, `this` and `super`, constructors, overloading vs. overriding, inheritance, polymorphism, `static`, `ArrayList`, try/catch, `LocalDate`. Explain each one out loud, or have an AI quiz you ([Flipped Interaction](/handouts/prompting-patterns#_3-the-flipped-interaction-pattern-quiz-me)). For abstract classes, review [Why Abstract?](/handouts/why-abstract); for `static`, [Why Static?](/handouts/why-static).

## Finished early?

- [ ] In `car-dealership`, make a branch for one small improvement (a nicer vehicle table, or a "no vehicles found" message), commit it there, and merge it into `main` when it works
- [ ] In `git-exercise`, look at the **Log** tab's graph. Can you point to where each branch started and where it was merged?

## Stuck?

- **[Help Desk](/handouts/help-desk):** today's helper is in the Help Desk breakout room for the first 15–20 minutes of each breakout. Share your screen; you do the typing.
- **Your instructor** is always available. Ask early!
- **Which branch am I on?** Look at the branch name at the top of the IntelliJ window (or bottom right).
- **"Your local changes would be overwritten by checkout"?** Click **Don't Checkout** (never Force Checkout: it throws your changes away), commit, then switch branches.
- **The merge option isn't there?** You have to be **on** the branch you're merging **into** (usually `main`). Check out `main` first.
- **Merged, but GitHub doesn't show it?** Merging happens on your computer. Push `main`.
- **Push rejected?** GitHub has commits you don't. See [Push Rejected](/handouts/push-rejected): usually you click **Merge**, then push again. A **Conflicts** window? Ask your instructor before you click anything.
