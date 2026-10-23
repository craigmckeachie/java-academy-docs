---
publish: true
title: Fri 10/23
section: Daily Checklists
---

# Friday 10/23: Today's Checklist

**Today:** finish anything left from Thursday, then spend the rest of the day on the **Workbook 2w workshop: Neighborhood Library**. It pulls together the whole week: classes, loops, arrays, `Scanner` input, and IntelliJ's code generation. In the last hour (or this weekend), practice for **Monday's Assessment 1** (see below).

Check items off as you go. **"Done" = the code runs, it's committed, it's pushed to GitHub, and you've sent the repo URL.**

## First thing: finish carry-over from Thursday

- [ ] **Exercise 3: test-statistics** (p. 79) is committed, pushed, and the URL is sent
- [ ] **Exercise 4: vehicle-inventory** (pp. 80–81), in three parts (below). Short on time? Part 3's options 3 and 4 can wait; the workshop matters more.
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

This is part 3 of the Generating Code demo again (the array of customers), with `Vehicle`s instead of `Customer`s. Just the list for now; the menu comes in Part 3, below.

- [ ] In `main`, delete the Part 1 test code (the two vehicles). Your `Vehicle` class stays exactly as it is.
- [ ] Create an array that can hold up to **20** vehicles: `Vehicle[] vehicles = new Vehicle[20];`
- [ ] Put the **6 vehicles** from p. 80 into slots `0` through `5`, for example `vehicles[0] = new Vehicle(101121, "Ford Explorer", "Red", 45000, 13500);`
- [ ] Print **one** vehicle by its index first, `System.out.println(vehicles[0]);`, and run it
- [ ] Commit and push: `Add array of six vehicles`
- [ ] Now print **all** of them with a **for-each** loop: `for (Vehicle currentVehicle : vehicles)`, with `System.out.println(currentVehicle);` inside
- [ ] **Predict, then run:** what prints for slots 6 to 19? (Every empty slot holds `null`, so you get 14 lines of `null`.)
- [ ] Skip the empty slots: put the `println` inside `if (currentVehicle != null) { ... }` and run it again. Only your 6 vehicles print.
- [ ] Set a breakpoint on the `println` line and **Debug**. Step through and watch `currentVehicle` change, from a vehicle (expand it to see its fields) to `null`.
- [ ] Commit, push (`Print all vehicles with a loop`), and **send the repo URL**

> [!NOTE]
> The workbook keeps a counter of how many vehicles are in the array, so that menu option **5 (Add a vehicle)** knows where the next empty slot is. **Skip the counter and option 5 for now.** Next week you'll learn `ArrayList`, which grows as you add to it, and adding a vehicle becomes one line.

> [!TIP] Optional (if time)
> Print each vehicle on one neat line with the getters instead of `toString()`, for example `101121  Ford Explorer  Red  45000  $13500.00`. Use `printf` to line up the columns (see [String Format](/handouts/string-format)).

### Vehicle Inventory, Part 3: the menu

This is part 4 of the Generating Code demo (the customer menu), with `Vehicle`s. You'll build the menu from p. 81, **without option 5 (Add)** for now, so **Quit is 5** until next week.

- [ ] Move your Part 2 for-each into a method, `public static void listAllVehicles(Vehicle[] vehicles)`, and call it from `main`. Run it: the same 6 vehicles print.
- [ ] Commit and push: `Move vehicle list into a method`
- [ ] Create **one** `Scanner` at the top of `main`
- [ ] Add the menu loop: `int command = 0;` and `while (command != 5)`. Inside the loop:
  - [ ] Print the menu: `1 - List all vehicles`, `2 - Search by make/model`, `3 - Search by price range`, `4 - Search by color`, `5 - Quit`
  - [ ] Read the command with `scanner.nextInt();`, then `scanner.nextLine();` for the leftover newline
  - [ ] A `switch (command)`: `case 1 -> listAllVehicles(vehicles);`, `case 5 -> System.out.println("Goodbye!");`, and a `default ->` that says the command is invalid
- [ ] Run it and test **1**, a wrong number like **9**, and **5**. Commit and push: `Add menu loop`
- [ ] **Option 2:** a method `findVehiclesByMakeModel(Vehicle[] vehicles, Scanner scanner)`:
  - [ ] Ask for the make/model with `nextLine()`
  - [ ] For-each over `vehicles`, with `if (currentVehicle != null && currentVehicle.getMakeModel().equalsIgnoreCase(makeModel))` to print the matches. The `null` check goes **first**.
  - [ ] Call it from `case 2`, test `ford explorer` (lowercase should still work), then commit and push
- [ ] **Option 4:** `findVehiclesByColor` works the same way, with `getColor()`. Test, commit and push.
- [ ] **Option 3:** `findVehiclesByPriceRange` asks for a **minimum** and a **maximum** price (`nextDouble()`, then `nextLine()`), and prints the vehicles where `price >= min && price <= max`. Test `10000` to `14000`, commit and push.
- [ ] Test it the way a user would: every option, a search with no matches, a wrong number
- [ ] Final commit, push, and **send the repo URL**

> [!TIP] Optional (if time)
> - When a search finds nothing, print "No vehicles found." Hint: `boolean found = false;` before the loop, `found = true;` inside the `if`, and check `found` after the loop.
> - Search by make/model with `contains` instead of `equalsIgnoreCase`, so `ford` finds the Ford Explorer. (Lowercase both sides first.)

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
- [ ] Make the array **exactly as big as the number of books you put in it** (`new Book[20]` for 20 books), so it has no empty `null` slots. The library never adds books, so it never needs extra room.
- [ ] Print them all once to make sure the array is filled correctly (delete that later)
- [ ] Commit and push

### Milestone 3: the screens

- [ ] **Home screen** in a loop: Show Available Books, Show Checked Out Books, Exit
- [ ] **Show Available Books:** only books that are *not* checked out, with Id, ISBN and Title. Then let the user check one out (ask for their name) or go back.
- [ ] **Show Checked Out Books:** Id, ISBN, Title and who has it. Then **C** to check one in (by Id) or **X** to go back.
- [ ] Commit and push after **each** screen works

> [!TIP] Every screen is a for-each with an if inside
> Loop through **every** book, and only act on the ones that match, just like skipping the empty slots in Vehicle Inventory:
> - Available books: `for (Book currentBook : books)` with `if (!currentBook.isCheckedOut())` inside
> - Checked-out books: the same loop with `if (currentBook.isCheckedOut())`
> - Check out or check in by Id: the same loop with `if (currentBook.getId() == id)`
>
> **Heads-up:** for a `boolean` field named `isCheckedOut`, IntelliJ's Generate names the getter `isCheckedOut()` (not `getIsCheckedOut()`) and the setter `setCheckedOut(...)`.

### Milestone 4: polish (p. 4)

- [ ] Every screen tells the user exactly what they can type
- [ ] Good names (PascalCase classes, lowerCamelCase variables), comments where they help, and formatted code (**Ctrl+Alt+L** / **Cmd+Option+L**)
- [ ] Test it the way a user would: check a book out, see it move to the other list, check it back in
- [ ] Final commit, push, and **send the repo URL**

## Last hour of class (or this weekend): Assessment 1 practice

**Assessment 1 is Monday 10/26.** It covers Weeks 1 and 2: data types, casting, operators, Strings, arrays, loops, methods, and classes. Practice with the **[Java Assessment 1 Review](https://wayground.com/join?gc=46201155)** on Wayground. If the link asks for a code, go to **joinmyquiz.com** and enter **4620 1155**. Use your real first name. It's open until Fri 11/6. Do it in the last hour of class if you're at a good stopping point in the workshop; otherwise do it as homework this weekend.

- [ ] **First try: notes closed.** That shows you what you actually remember.
- [ ] After each question, **read the explanation**, even when you got it right. It says why the right answer is right *and* why each wrong answer is wrong.
- [ ] Write down the topics you missed, and look them up in the workbook (or rerun that demo in IntelliJ)
- [ ] **Take it again** until you score **80% or higher.** You have unlimited tries.

> [!TIP] Read the code like the computer does
> For a "what does this print?" question, trace it on paper: write each variable down and update it line by line. That's the debugger, done by hand.

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
