---
publish: true
title: "Branching: Emergency Fix"
section: "Exercises & Workshops"
order: 6
group: Week 6
---

# Exercise: The Emergency Fix

**Do this after:** the [Branching exercise](/handouts/branching-exercise). It uses the same project, `git-exercise`.

**Time:** about 30 minutes. Check off each step as you finish it. **Next:** [Merge Abstract Assets](/handouts/merge-abstract-assets-exercise), with your real project.

## The story: why branches exist

You're **halfway through a new feature**. It isn't finished, so it can't go live yet. Then your manager messages you: *"The app's question is confusing users. Fix it **right now**."*

Without branches, you're stuck: your half-finished feature is mixed in with everything else. **With branches, it's easy.** Your unfinished work waits on its own branch while you fix `main` and ship the fix. Then you go back and finish.

Here's the plan, from start to finish:

```
               FixPrompt (the emergency)
main ──●──────────●──────────────●
        \                       /
         ●─────────────────────
         AddGoodbye (your feature, waiting)
```

The fix goes into `main` first. The feature joins `main` later, when it's finished.

> [!TIP] Keep these in view
> - **Which branch am I on?** The name at the **top of the IntelliJ window** (or bottom right). Check it before every step.
> - **The Log tab:** **Git** tool window (**Cmd+9** / Alt+9) → **Log**. Watch the graph as you go.
> - **Commit before you switch branches.** Uncommitted changes can quietly come along to the other branch, and your unfinished goodbye would end up in the fix.

## Step 1: Start the feature

Your feature: say goodbye at the end of the program.

- [ ] Make sure you're on **`main`**, and that it has the greeting from the Branching exercise
- [ ] **Git → New Branch...**, name it **`AddGoodbye`**, keep **Checkout branch** checked, and click **Create**
- [ ] Add this as the **last line** of `main(...)`, after the `Hello` line:

```java
System.out.println("Goodbye " + name + "!");
```

(Use your own variable name if yours isn't `name`.)

- [ ] Run it, then commit with the message `Add goodbye message`

**Check:** in the **Log**, `AddGoodbye` is one commit ahead of `main`.

## Step 2: The emergency

Your manager wants the question to say `Please enter your name: `. The goodbye feature isn't ready to go live, so **don't** fix it on `AddGoodbye`. Fix it from `main`.

- [ ] **Git → Branches...** → **`main`** → **Checkout**
- [ ] **Git → New Branch...**, name it **`FixPrompt`**, keep **Checkout branch** checked, and click **Create**
- [ ] Change **only** the line that asks for the name, so it prints `Please enter your name: `. Don't touch any other line.
- [ ] Run it, then commit with the message `Clarify name prompt`

**Check:** look at `Main`. There's **no** `Goodbye` line here. `FixPrompt` started from `main`, and `main` doesn't have your unfinished feature.

## Step 3: Ship the fix

- [ ] **Git → Branches...** → **`main`** → **Checkout**
- [ ] **Git → Branches...** → **`FixPrompt`** → **Merge 'FixPrompt' into 'main'**
- [ ] Run it: the new question is there, and there's still no `Goodbye`
- [ ] **Git → Push...** (**Cmd+Shift+K** / Ctrl+Shift+K) → **Push**. The fix is live, and your unfinished feature didn't go with it.

## Step 4: Back to your feature

- [ ] **Git → Branches...** → **`AddGoodbye`** → **Checkout**
- [ ] Look at `Main`: your `Goodbye` line is here, but the **old** question is back. That's fine: this branch started before the fix. The fix comes in when you merge.

Pretend you just finished the feature. It's ready to go live.

## Step 5: Ship the feature

- [ ] **Git → Branches...** → **`main`** → **Checkout**
- [ ] **Git → Branches...** → **`AddGoodbye`** → **Merge 'AddGoodbye' into 'main'**
- [ ] Run it. You should see **both** changes:

```
Please enter your name: Ana
Hello Ana!
Goodbye Ana!
```

- [ ] **Git → Push...** → **Push**

**Check:** look at the **Log** graph. This time you see **two lines join**: `main` and `AddGoodbye` both had new commits, so Git made a **merge commit** to bring them together. In the Branching exercise it was a straight line, because only one side had changed.

> [!NOTE] Did a window ask for a merge message?
> IntelliJ may show the merge commit's message, like `Merge branch 'AddGoodbye'`. Keep it and click **Commit** or **Merge**.

## Last check

- [ ] You can explain, in one or two sentences, how the fix went live **without** the unfinished goodbye feature

## Stuck?

- **Which branch am I on?** The top of the IntelliJ window (or bottom right).
- **"Your local changes would be overwritten by checkout"?** You changed something and didn't commit it. Click **Don't Checkout** (never Force Checkout: it throws your changes away), commit, then switch.
- **No "Merge ... into 'main'" option?** Check out `main` first.
- **A Conflicts window?** Both branches changed the **same lines**. This happens if the prompt and the goodbye ended up right next to each other. Don't click anything you're unsure of. Ask your instructor.
- **Push rejected?** See [Push Rejected](/handouts/push-rejected).
