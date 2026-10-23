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
- [ ] **Exercise 4: vehicle-inventory** (pp. 80–81), in two parts (below)
- [ ] Anything else from this week that isn't pushed yet

### Vehicle Inventory, Part 1: the `Vehicle` class (no loops or arrays yet)

This is your chance to practice what the Generating Code demo showed (Workbook 2b pp. 4–17): you type the fields, and IntelliJ writes the rest.

- [ ] Create the project **`vehicle-inventory`** in your `workbook-2` folder, with a git repository. Share it to GitHub.
- [ ] Create a class named **`Vehicle`** and type its five fields (p. 80), each `private`:
  - [ ] `vehicleId` is a `long`
  - [ ] `makeModel` and `color` are `String`s
  - [ ] `odometerReading` is an `int`
  - [ ] `price` is a `double`
- [ ] Right-click a blank line inside the class → **Generate** (**Cmd+N** on Mac / **Alt+Insert** on Windows), then:
  - [ ] **Constructor** → select all five fields → OK
  - [ ] **Constructor** again → **Select None** → OK, which gives you a second, empty constructor
  - [ ] **Getter and Setter** → select all five fields → OK
  - [ ] **toString()** → select all five fields → OK
- [ ] Read what IntelliJ generated. Can you explain each method out loud?
- [ ] Commit and push: `Add Vehicle class`
- [ ] Create a class named **`App`** with a `main` method
- [ ] In `main`, create **two** vehicles using the five-field constructor and the first two rows on p. 80, for example `new Vehicle(101121, "Ford Explorer", "Red", 45000, 13500)`
- [ ] Print each vehicle with `System.out.println(...)`. Run it: you should see the `toString()` text, not something like `Vehicle@1b6d3586`.
- [ ] Use a **setter** to change one vehicle (a new price or color), then print it again to see the change
- [ ] Commit, push (`Create and print two vehicles`), and **send the repo URL**

### Vehicle Inventory, Part 2: an array of vehicles, printed with a loop (no menu yet)

This is the arrays demo again, with `Vehicle`s instead of numbers. Just the list for now; the menu comes in Part 3.

- [ ] In `main`, delete the Part 1 test code (the two vehicles). Your `Vehicle` class stays exactly as it is.
- [ ] Create an array that can hold up to **20** vehicles: `Vehicle[] vehicles = new Vehicle[20];`
- [ ] Put the **6 vehicles** from p. 80 into slots `0` through `5`, for example `vehicles[0] = new Vehicle(101121, "Ford Explorer", "Red", 45000, 13500);`
- [ ] Create a counter that says how many slots are filled: `int count = 6;`
- [ ] Print **one** vehicle by its index first, `System.out.println(vehicles[0]);`, and run it
- [ ] Commit and push: `Add array of six vehicles`
- [ ] Now print **all** of them with a `for` loop. Name the counter `index`, start at `0`, and stop at **`count`**, not `vehicles.length`:
  - `for (int index = 0; index < count; index = index + 1)`
  - inside the loop: `System.out.println(vehicles[index]);`
- [ ] **Predict, then try:** change `count` to `vehicles.length` and run it. What prints for slots 6 to 19? (Every empty slot holds `null`, so you get 14 lines of `null`.) Change it back to `count`.
- [ ] Set a breakpoint on the `println` line and **Debug**. Step through and watch `index` and `vehicles[index]` change.
- [ ] Commit, push (`Print all vehicles with a loop`), and **send the repo URL**

> [!TIP] Optional (if time)
> Print each vehicle on one neat line with the getters instead of `toString()`, for example `101121  Ford Explorer  Red  45000  $13500.00`. Use `printf` to line up the columns (see [String Format](/handouts/string-format)).

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
