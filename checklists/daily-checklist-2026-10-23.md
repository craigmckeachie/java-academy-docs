---
publish: true
title: Fri 10/23
section: Daily Checklists
---

# Friday 10/23: Today's Checklist

**Today:** finish anything left from Thursday, then spend the rest of the day on the **Workbook 2w workshop: Neighborhood Library**. It pulls together the whole week: classes, loops, arrays, `Scanner` input, and IntelliJ's code generation.

Check items off as you go. **"Done" = the code runs, it's committed, it's pushed to GitHub, and you've sent the repo URL.**

## First thing: finish carry-over from Thursday

- [ ] **Exercise 3: test-statistics** (p. 79) is committed, pushed, and the URL is sent
- [ ] **Exercise 4: vehicle-inventory** (pp. 80–81) works for menu options **1, 2 and 5** at least
  - [ ] Commit, push, send repo URL
- [ ] Anything else from this week that isn't pushed yet. (Short on time? Options 3 and 4 of Vehicle Inventory can wait; the workshop matters more.)

## The rest of the day: Neighborhood Library (Workbook 2w)

- [ ] Read **all of Workbook 2w** (pp. 2–4) before writing any code
- [ ] **Plan in your notebook first:** sketch the `Book` class and draw each screen, with what the user sees and what they can type
- [ ] Create the project **`neighborhood-library`** in your `workbook-2` folder, with a git repository. Share it to GitHub.

### Milestone 1: the `Book` class

- [ ] Fields: `id`, `isbn`, `title`, `isCheckedOut`, `checkedOutTo`
- [ ] Use **Generate** for the constructor, getters and setters
- [ ] `checkOut(String name)` and `checkIn()` change **both** `isCheckedOut` and `checkedOutTo` (p. 3)
- [ ] Commit and push

### Milestone 2: the inventory

- [ ] An array of **at least 20** books of your choice, each with a **unique id**
- [ ] Print them all once to make sure the array is filled correctly (delete that later)
- [ ] Commit and push

### Milestone 3: the screens

- [ ] **Home screen** in a loop: Show Available Books, Show Checked Out Books, Exit
- [ ] **Show Available Books:** only books that are *not* checked out, with Id, ISBN and Title. Then let the user check one out (ask for their name) or go back.
- [ ] **Show Checked Out Books:** Id, ISBN, Title and who has it. Then **C** to check one in (by Id) or **X** to go back.
- [ ] Commit and push after **each** screen works

### Milestone 4: polish (p. 4)

- [ ] Every screen tells the user exactly what they can type
- [ ] Good names (PascalCase classes, lowerCamelCase variables), comments where they help, and formatted code (**Ctrl+Alt+L** / **Cmd+Option+L**)
- [ ] Test it the way a user would: check a book out, see it move to the other list, check it back in
- [ ] Final commit, push, and **send the repo URL**

## Before you leave

- [ ] Fill out the **Friday survey** (link in Teams). Tell us honestly how the demo-first rhythm worked for you this week.

## Finished early?

- [ ] Let the user search for a book by title
- [ ] Move each screen into its own method so `main` stays short
- [ ] More ideas: this week's [Stretch Goals](/stretch-goals/week-2-stretch-goals)

## Stuck?

- **[Help Desk](/handouts/help-desk):** today's helper is in the Help Desk breakout room for the first 15–20 minutes of each breakout. Share your screen; you do the typing.
- **Your instructor** is always available. Ask early!
- **Use the debugger:** a book won't check out? Set a breakpoint in `checkOut`, Debug, and watch the fields change.
- **Menu skipping a prompt?** That's the leftover newline after `nextInt()` (Workbook 1c). Add a `nextLine()` after it.
