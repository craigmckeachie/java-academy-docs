---
publish: true
title: Thu 10/22
section: Daily Checklists
---

# Thursday 10/22: Today's Checklist

**Today (a short day):** finish loops, then **Workbook 2a, §3-2: Arrays**, plus **Workbook 2b: IntelliJ code generation**. That finishes Workbooks 2a and 2b. Friday is the **Neighborhood Library** workshop.

Check items off as you go. **"Done" = the code runs, it's committed, it's pushed to GitHub, and you've sent the repo URL.**

## Morning (1 hr 45 min): finish loops, start arrays

- [ ] Finish **roll-the-dice** (pp. 66–67) if you didn't Wednesday
  - [ ] Commit, push, send repo URL
- [ ] Watch the demo: arrays and for-each (demo code: `arrays/ArraysDemo`, `arrays/ForEachDemo`)
- [ ] Read **pp. 68–72** (arrays, default values, for-each)
  - [ ] I know positions start at **0** and the last one is `length - 1`
  - [ ] I know when to use a regular `for` (I need the index) and when to use for-each (I just need each value)
- [ ] **Exercise 3: test-statistics** (p. 79)
  - [ ] Average, high score, and low score are all correct (check one by hand)
  - [ ] Bonus: the median
  - [ ] Commit, push, send repo URL

## Afternoon (3 hours): more arrays, code generation, Vehicle Inventory

- [ ] Watch the demo: arrays in methods, sorting, copying, and an **array of objects** (demo code in `arrays/`), using the debugger's **Frames** pane
- [ ] Read **pp. 73–78**
- [ ] Watch the demo: **IntelliJ code generation**: right-click → **Generate** a constructor, getters and setters, and `toString()` (demo code: `codegen/Customer`, `codegen/CodeGenerationDemo` in `workbook2b`)
- [ ] Read **Workbook 2b pp. 4–16**
- [ ] **Exercise 4: vehicle-inventory** (pp. 80–81)
  - [ ] Use **Generate** for the `Vehicle` constructor, getters and setters, and `toString()`. That covers **Workbook 2b's Car Inventory** exercise (p. 17) too.
  - [ ] Start with menu options **1, 2 and 5**, then add 3 and 4 if you have time
  - [ ] A counter keeps track of how many vehicles are in the array right now
  - [ ] Format your code with **Ctrl+Alt+L** (Windows) / **Cmd+Option+L** (Mac)
  - [ ] Commit, push, send repo URL

## Finished early?

- [ ] **Workbook 2b Exercise 2: Palindromes** (p. 33, optional). Use the debugger to watch it work.
- [ ] More ideas: this week's [Stretch Goals](/stretch-goals/week-2-stretch-goals)
- [ ] Preview Friday: open **Workbook 2w** (Neighborhood Library)

## Stuck?

- **[Help Desk](/handouts/help-desk):** today's helper is in the Help Desk breakout room for the first 15–20 minutes of each breakout. Share your screen; you do the typing.
- **Your instructor** is always available. Ask early!
- **`ArrayIndexOutOfBoundsException`?** Check your loop condition: `i < array.length`, not `<=`.
- **`NullPointerException` on an array of objects?** That position hasn't been filled yet. Only loop up to your counter.
