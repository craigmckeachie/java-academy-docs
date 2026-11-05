---
publish: true
title: Fri 11/13
section: Daily Checklists
---

# Friday 11/13: Today's Checklist

**Today:** the **Car Dealership** workshop (Workshop 4w), with your pre-work instructor. It's a menu app like the ones you've built, but this time five classes each do one job. **Next week you'll add sales and leasing to this same project**, so it's worth building carefully.

**Today's target:** Phases 1–4, so the app lists the vehicles from the file, plus **two searches**. If you get further, great. The whole project is due **Thursday 11/19**.

Check items off as you go. **Commit and push after every phase.**

## First thing

- [ ] Anything left from this week: push what you have, and check your links on the class GitHub sheet
- [ ] Keep the [Menus and Screens](/handouts/menus-and-screens) and [Validating Input](/handouts/validating-input) pages open

## Phase 1: the data (p. 5)

- [ ] `Vehicle`: all the fields in the diagram, a constructor, and getters and setters. `price` is a `BigDecimal`.
- [ ] `Dealership`: name, address, phone, and an `ArrayList<Vehicle>` created in the constructor. Getters and setters for all but the inventory.
- [ ] `addVehicle()` and `getAllVehicles()` work; every search returns `null` for now, and `removeVehicle()` is empty
- [ ] It compiles. Commit and push.

## Phase 2: the file (p. 6)

- [ ] `inventory.csv` is in the root folder, and you have a backup
- [ ] `DealershipFileManager.getDealership()`: the **first line** becomes the `Dealership`, and **every other line** becomes a `Vehicle` added to it
- [ ] `saveDealership()` exists but is empty for now
- [ ] It compiles. Commit and push.

## Phase 3: the screen (pp. 7–8)

- [ ] `UserInterface`: `display()` calls a private `init()`, then loops: show the menu, read the command, and use an arrow `switch`
- [ ] `init()` loads the dealership with the file manager
- [ ] A private `displayVehicles()` shows any list of vehicles
- [ ] `processGetAllVehiclesRequest()` calls the dealership, then `displayVehicles()`. The other `process…` methods stay empty.
- [ ] No `static` here: these methods belong to the object
- [ ] It compiles. Commit and push.

## Phase 4: start it up (p. 9)

- [ ] `Program.main` creates a `UserInterface` and calls `display()`
- [ ] Run it and choose **7**. **You should see the vehicles from the file.** Commit and push.

## Phase 5: make everything work (p. 9)

Do the searches first, or add and remove first; it's your choice. Check off each one as it works.

- [ ] Find by price range
- [ ] Find by make / model
- [ ] Find by year range
- [ ] Find by color
- [ ] Find by mileage range
- [ ] Find by type
- [ ] Add a vehicle
- [ ] Remove a vehicle
- [ ] `saveDealership()` rewrites the whole file, dealership line first, after every add and remove. Quit, run again, and check that the change is still there.

## End of day

- [ ] Start a **README** that says what the app does and how to run it
- [ ] Commit, push, and check the link on the class GitHub sheet

## Finished early?

- [ ] This week's [Stretch Goals](/stretch-goals/week-5-stretch-goals)

## Stuck?

- **[Help Desk](/handouts/help-desk):** today's helper is in the Help Desk breakout room for the first 15–20 minutes of each breakout. Share your screen; you do the typing.
- **Your instructor** is always available. Ask early!
- **`NullPointerException` choosing a search?** It still returns `null` until you code it, so that's expected early on.
- **`NumberFormatException` when loading?** Print `parts.length` and each part. Is the first line being read as a vehicle?
- **`split` gave you one piece?** Write `split("\\|")`, with two backslashes.
- **Comparing prices?** `BigDecimal` uses `compareTo`, not `<` or `>`.
- **Your inventory disappeared?** Restore your backup, then check that `saveDealership()` writes the dealership line and every vehicle.
