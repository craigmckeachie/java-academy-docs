---
publish: true
title: Workout Tracker
section: Exercises
order: 1
---

# Menus and Screens Practice: Workout Tracker

Your Capstone is a set of screens inside screens. Before you build it, practice the pattern on a smaller app with the same shape: a **Workout Tracker**.

Keep the [Menus and Screens](/handouts/menus-and-screens) reference open while you work. It has every piece of code you need.

**Time:** about 30–40 minutes.

## What the app does

The Workout Tracker is for someone who exercises and wants to keep track of their workouts. When it's finished, a user can:

- **add a workout**, with a name and how many minutes it takes (like *Morning Run, 30 minutes*)
- **look through their workouts**: all of them, just the quick ones (30 minutes or less), or just their favorites
- **search** for workouts by name, by type (like *cardio* or *strength*), or by how much time they have

**In this practice you build only the menus.** Every screen works: you can go into it, use its menu and go back out. Every action is a placeholder that prints a `TODO` line, so there's no list of workouts and no saving yet. That's exactly how you'll start your Capstone.

Here's a short run of the finished practice app:

```text
=== Home ===
N) New Workout
W) Workouts
X) Exit
Enter a command: n
Name: Morning Run
Length in minutes: 30
Added Morning Run (30 minutes)

Press Enter to go back to the menu...
```

## The screens

The Workout Tracker has **three screens**. Each screen's menu is shown exactly as the user should see it.

**Home** (the screen the app starts on)

```text
=== Home ===
N) New Workout
W) Workouts
X) Exit
```

- **N** asks for the workout's **name** and its **length in minutes**, then prints what was added, like `Added Morning Run (30 minutes)`
- **W** opens the Workouts screen
- **X** ends the app

**Workouts**

```text
=== Workouts ===
A) All Workouts
Q) Quick Workouts
F) Favorites
S) Search
H) Home
```

- **A**, **Q** and **F** each print a `TODO` line (for example `TODO: display quick workouts (30 minutes or less)`)
- **S** opens the Search screen
- **H** goes back to Home

**Search**

```text
=== Search ===
1) By Name
2) By Type
3) By Length
0) Back
```

- **1** asks for a name, **2** for a type (like `cardio`), and **3** for the most minutes the user has. Each one then prints a `TODO` line that includes what the user typed.
- **0** goes back to Workouts

## Steps

- [ ] **Draw the screen map first**, on paper or in your notebook. Use the movie app's map on the reference page as your model: **[Map your screens first](/handouts/menus-and-screens#map-your-screens-first)**. Show every screen, every command, and which method each command calls. Name each screen `run…Screen()` and each action with a verb, like `addWorkout()` and `displayQuickWorkouts()`. Then, if you want, [check it with AI](#check-your-map-with-ai).
- [ ] Create the project **`workout-tracker`** in your `workbook-3` folder, with a git repository, and the main class **`App`**
- [ ] One `static Scanner` at the top of the class
- [ ] `runHomeScreen()`, called from `main`. Run it: the menu should repeat until you type `X`. Commit.
- [ ] `runWorkoutsScreen()`, opened by **W**. Run it: go in, and back out with **H**. Commit.
- [ ] `runSearchScreen()`, opened by **S**. Run it: go in, and back out with **0**. Commit.
- [ ] Every action is its own method, and **ends with `pressEnterToContinue()`**
- [ ] The minutes are read with `nextLine()` and turned into an `int` with `Integer.parseInt(...)`. No `nextInt()` anywhere.
- [ ] Format the code (**Cmd+Option+L** on Mac, **Ctrl+Alt+L** on Windows), commit, and push to GitHub

## Check your map with AI

**Optional.** Once you've drawn your map **yourself**, an AI tool can review it, the same way it reviews code you wrote (see the [AI Use Policy](/handouts/ai-use-policy)). Don't ask it to draw the map for you: deciding which commands are screens and which are actions is the skill you're practicing. Paste this, with your menus and your map at the end:

```text
I'm a beginner learning Java. I'm building a console app with menus, and I drew
this screen map myself before writing any code.

In my app, a screen is a method with a menu that repeats until the user picks the
way out, named run...Screen(). An action is a method that does one thing and
returns, named with a verb, like addWorkout().

Review my map against my menus below. Don't write any Java code, and don't redraw
the map for me. List anything that's missing, in the wrong place, or named
unclearly, and explain why each one matters.

My menus:
(paste the three menus from this page)

My map:
(type your map, or describe it screen by screen)
```

Then **decide** about each point yourself, and fix your map by hand. Once your map is right, you can ask: *"Now turn my map into a plain-text tree diagram, exactly as I wrote it, so I can paste it into a README."* That's only saving you typing, because every decision on it is already yours.

## Test it like a user

Run it and try each of these. Every one should behave the way the comment says.

- [ ] `n`, `Morning Run`, `30`: it prints `Added Morning Run (30 minutes)` and **waits** until you press Enter
- [ ] `w`, `q`: the `TODO` line stays on screen until you press Enter
- [ ] `w`, `s`, `3`, `15`: the `TODO` line includes `15`
- [ ] `w`, `s`, `0`, `h`, `x`: back to Workouts, back to Home, and the app ends **the first time** you type `x`
- [ ] A lowercase letter works on every screen, and so does a letter with a space before it
- [ ] A wrong letter (`z`) on every screen: a friendly message, and the same menu again

## Done when

- [ ] Every command on all three screens does what the page says
- [ ] Every test above passes
- [ ] No screen calls the screen above it to go back
- [ ] It's committed and pushed

## Stretch goals

- **A number helper.** Write `promptForInt(String prompt)`: it asks until the user types a whole number, so typing `abc` asks again instead of crashing. Use it for both minutes questions, and `promptForString()` for the name and type. Both are on the [Validating Input](/handouts/validating-input) page.
- **Put your map in a README.** Add a `README.md` with what the app does and your screen map in a code block.
- **Your Capstone's map.** Draw the screen map for the Accounting Ledger: which commands are screens and which are actions? (Hint: it has three screens.) Check it with the same AI prompt, using the Capstone's menus.
