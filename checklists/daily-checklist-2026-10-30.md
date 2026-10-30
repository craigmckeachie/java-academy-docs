---
publish: true
title: Fri 10/30
section: Daily Checklists
---

# Friday 10/30: Today's Checklist

**Today:** the morning starts with a short demo on **menus and screens** (your Capstone has three screens inside each other), then you practice them in the **Workout Tracker**, and a second short demo shows how to **validate input** so a typo never crashes your app. Next comes the **search-engine-logger**, the pattern for saving each deposit and payment. After that, **finish this week's exercises**: almost every one of them is a piece of next week's Capstone. The **Online Store** workshop is **optional**. The last two hours are the **Capstone 1 kickoff**: you'll read the project, set it up, and plan your week.

Check items off as you go. **"Done" = the code runs, it's committed, it's pushed to GitHub, and you've sent the repo URL.**

## First thing

- [ ] Anything from this week that isn't pushed yet: push it now

## Morning: menus and screens

After the **Menus and Screens** demo, keep the **[Menus and Screens](/handouts/menus-and-screens)** page open. It has all the code from the demo: one method per screen, a `do-while` loop in each, and actions that wait for Enter. (The demo code: [MenuScreensDemo.java](https://github.com/craigmckeachie/java-academy-demos/blob/main/src/main/java/com/pluralsight/workbook3a/screens/solutions/MenuScreensDemo.java))

### Exercise: Menus and Screens Practice (the Workout Tracker)

- [ ] Build the **[Workout Tracker](/handouts/menu-screens-practice)**: three screens, every action a `TODO`. **Draw the screen map first.** Committed, pushed, and the URL posted in Teams.

Your Capstone's Home, Ledger and Reports menus are built exactly this way, so this is the best warm-up for Monday.

### Validating input

After the short **Validating Input** demo, keep the **[Validating Input](/handouts/validating-input)** page open. It has helper methods that **ask until the answer is good**, so a typo never crashes your app. (The demo code: [ValidatingInputDemo.java](https://github.com/craigmckeachie/java-academy-demos/blob/main/src/main/java/com/pluralsight/workbook3a/validation/solutions/ValidatingInputDemo.java))

- [ ] **(Optional if you're behind)** In the **Workout Tracker**, ask for the minutes with `promptForInt()`, and the name and type with `promptForString()`. Type `abc`, nothing at all, and a `|` to test them. Commit and push.

You'll copy the same helpers into your Capstone on Monday, for Add Deposit and Make Payment. Behind today? Skip this step and go on to the search-engine-logger: you'll practice the helpers in the Capstone instead.

### Next: search-engine-logger (Workbook 3a p. 34)

**Do this one next, even if you skipped it on Tuesday.** It's the exact pattern for the Capstone's **Add Deposit** and **Make Payment**: add **one line** with the date and time to the end of a file, every time the user does something.

- [ ] Create the project **`search-engine-logger`** in `workbook-3`, with a git repository. Share it to GitHub as a **public** repo.
- [ ] Write a method `logAction(String action)` that adds **one line** to `logs.txt`: the date and time in `yyyy-MM-dd HH:mm:ss` format, a space, then the action
- [ ] **End each line with `\n`**, at the **end** of the line, never at the start (`"... " + action + "\n"`). Then the file always ends with a line break, ready for the next line. Your Capstone's `transactions.csv` uses the same rule ([One transaction, one line](/handouts/capstone-1-guide#one-transaction-one-line)).
- [ ] Open the `FileWriter` with **`true`** so each line is **added**, not replacing the file
- [ ] In `main`: log `launch`, then loop asking for a search term (X or x to exit). Log each search as `search : ` plus the term, and log `exit` at the end.
- [ ] Run it twice, then open `logs.txt`. Lines from **both** runs should be there, each entry on its **own line**, with no empty lines between them. Click at the very end: the cursor should land on **one** empty line after the last entry (the line break at the end).
- [ ] Commit, push, and **send the repo URL**

### Then: practice the Capstone's searches and date reports

Every ledger list, search and report in the Capstone is the **same loop**: go through every item, and show only the ones that match (a for-each with an `if` inside). Practice it on two projects you already have.

**1. Make Search Inventory's search choices work** (in `search-inventory`, the menu from p. 50)

- [ ] **2- Lookup a product by its id:** ask for an id, loop through the list, and print the product whose id matches. Nothing found? Print `No product with that id`.
- [ ] **3- Find all products within a price range:** ask for a low and a high price (`Double.parseDouble(scanner.nextLine())`), and print every product whose price is between them
- [ ] Try a search that finds nothing, too. Commit and push.

This is the Capstone's **Search by Vendor**, **Deposits** and **Payments**: the same loop, with a different `if`.

**2. Show only today's searches** (in `search-engine-logger`)

- [ ] Write a method `displayTodaysSearches()` that reads `logs.txt` line by line and prints only the lines that are a **search** (`line.contains("search : ")`) **from today**
- [ ] The date is the first 10 characters of each line: `LocalDate date = LocalDate.parse(line.substring(0, 10));`. It's from today if `date.equals(LocalDate.now())`.
- [ ] **Skip blank lines:** put the line's checks inside `if (!line.isBlank())`. An empty line has no first 10 characters, so `substring(0, 10)` would crash with a `StringIndexOutOfBoundsException`. Test it: add an empty line at the end of `logs.txt` by hand, and run it again. Your Capstone loads `transactions.csv` the same way.
- [ ] Call it after the search loop ends, under a heading like `Today's searches:`. Run it and check it against `logs.txt`.
- [ ] Then change it to show **this month's** searches: the date's month **and** year match today's. Put `LocalDate today = LocalDate.now();` before the loop, then check `date.getMonthValue() == today.getMonthValue() && date.getYear() == today.getYear()`. Commit and push.

That last check is the Capstone's **Month To Date** report, line for line. Year To Date only compares the year.

## Late morning and early afternoon: finish this week's exercises

**This is the most important thing today.** Each exercise below is a piece of the Capstone you'll build next week. If it's finished and pushed, you can copy its pattern on Monday instead of learning it under pressure. Work in this order, skipping anything that's done:

| Exercise | What it gives you for the Capstone |
|---|---|
| **Search Inventory** (Wed, p. 49) and its **file bonus** | Reading a CSV file into an `ArrayList` of objects: how the Capstone loads `transactions.csv` |
| **Payroll Calculator**, parts 1 and 2 (Mon–Tue, pp. 17–18 and 23) | Splitting each line into its parts, and writing lines to a file |
| **format-dates** (Tue, p. 33) | `LocalDate`, `LocalTime` and formatting, for the transaction dates and the month and year reports |
| **Search Inventory menu bonus** (Wed, p. 50) | A menu in a loop with a `switch` |
| **bedtime-stories** (Mon, pp. 15–16) | Reading a file line by line, and what happens when it's missing |
| **famous-quotes** (Mon, p. 9) | `try/catch`, so a bad number or a wrong letter doesn't crash the app |
| **README** for search-inventory (Thu) | The README the Capstone needs |
| **Project Board** (Thu, p. 38) | The board you'll make for the Capstone this afternoon |

- [ ] Every exercise above is finished, committed, pushed, and the URL is sent
- [ ] Not sure what you're missing? Check your rows on the **class GitHub sheet**, or ask

## Optional: Online Store workshop (Workbook 3w)

**Only if every exercise above is done.** The Online Store pulls the whole week together: reading a CSV file, an `ArrayList` of objects, searching, and **screens inside screens**. It's great practice for the Capstone, but finishing the week's exercises comes first.

- [ ] Read **all of Workbook 3w** (pp. 2–4) before writing any code
- [ ] **Plan in your notebook:** sketch the `Product` class and draw the **screen map**, like the Workout Tracker's: the three screens (Home, Display Products, Display Cart), each command on them, and which commands are **actions** (search, add to cart, remove) and which open a screen

> [!NOTE] Solo, not a team
> The workbook says to do this workshop as a team. **This time, work on your own**: teams need Git branching and merging, which come in Week 6. You'll do a team project later.

### The workshop, step by step

- [ ] Create the project **`online-store`** in `workbook-3`, with a git repository. Share it to GitHub as a **public** repo.
- [ ] Copy **`products.csv`** from DataFiles.zip into the project's **root folder**

#### Milestone 1: load the products

- [ ] A `Product` class with the four fields from the file: SKU, product name, price, department. Use **Generate** for the constructor and getters.
- [ ] Read `products.csv` into an `ArrayList<Product>` with Wednesday's pattern: read a line, `split("\\|")`, create a `Product`, add it to the list
- [ ] The first line is a **header** (`SKU|Product Name|Price|Department`). Read it once **before** the loop.
- [ ] Print every product once to check the list loaded (delete that later). Commit and push.

#### Milestone 2: the home screen

Follow the **[Menus and Screens](/handouts/menus-and-screens)** pattern, the same as the Workout Tracker.

- [ ] `runHomeScreen()`: a `do-while` loop with three options: **Display Products**, **Display Cart**, **Exit**
- [ ] Display Products and Display Cart are **screens** too, so each one opens its own method: `runProductsScreen()` and `runCartScreen()`
- [ ] Build both of them **empty first**: a menu, `TODO` actions, and a way back to the home screen. Run it and go into and back out of each one.
- [ ] Commit and push

#### Milestone 3: Display Products

- [ ] At the top of `runProductsScreen()`'s loop, show every product: SKU, name, price (as money, `%.2f`) and department, lined up with `printf`
- [ ] Let the user **search or filter** by **product name**, **price range** or **department**. Each one is a for-each with an `if` inside, like Vehicle Inventory's searches.
- [ ] Let the user **add a product to their cart** by its SKU. The cart is another `ArrayList<Product>`.
- [ ] Each of these is an **action**: its own method that ends with `pressEnterToContinue()`. Read every input with `nextLine()` (prices: `Double.parseDouble(scanner.nextLine())`).
- [ ] **Go back** to the home screen
- [ ] Commit and push after **each** feature works

#### Milestone 4: Display Cart

- [ ] At the top of `runCartScreen()`'s loop, show every product in the cart, and the **total** of their prices
- [ ] **Remove** a product: ask for its SKU, find it, and remove it from the cart (an action, ending with `pressEnterToContinue()`)
- [ ] **Check Out** appears as an option, but it doesn't have to do anything (it's a bonus)
- [ ] **Go back** to the home screen
- [ ] Commit and push

#### Milestone 5: polish

- [ ] Every screen tells the user exactly what they can type
- [ ] A wrong letter or an unknown SKU shows a friendly message, not a crash
- [ ] Good names, formatted code (**Cmd+Option+L** / **Ctrl+Alt+L**), and a short **README** (Thursday's template)
- [ ] Final commit, push, and **send the repo URL**

> [!TIP] Optional (if time): the bonus (p. 4)
> - **Check Out:** ask for a cash payment, show the change, print a receipt (order date, items, total, amount paid, change), and empty the cart
> - Show each product in the cart **once**, with a quantity
> - Write the receipt to a file, too

## 2:00–4:00: Capstone 1 kickoff

Your instructor will walk you through this. Keep the **[Capstone 1 Guide](/handouts/capstone-1-guide)** open (how to do well, the design decisions, and one bite a day), and the **[Capstone 1 Task List](/handouts/capstone-1-task-list)** if you want every step.

- [ ] Read the whole **Capstone 1 - Accounting Ledger** document and write down one question
- [ ] Make a **`capstones`** folder in your `pluralsight` folder
- [ ] Create the project with a good kebab-case name (like `accounting-ledger`), and share it to GitHub as a **public** repository
- [ ] Download the starter **<a href="/java-academy-docs/capstones/transactions.csv" download>transactions.csv</a>** and put it in the project root
- [ ] Commit and push
- [ ] Add your repo link to the **class GitHub sheet** (Capstone 1 row)
- [ ] Create a **GitHub project board** and add a card for each screen and feature in the document
- [ ] Fill in **[your screen map](/handouts/capstone-1-task-list#your-screen-map-you-fill-it-in)**: name every action
- [ ] Before you leave, look at **[Monday's bite](/handouts/capstone-1-guide#one-bite-a-day)**: the three screens (empty), Add Deposit and Make Payment

## Stuck?

- **[Help Desk](/handouts/help-desk):** today's helper is in the Help Desk breakout room for the first 15–20 minutes of each breakout. Share your screen; you do the typing.
- **Your instructor** is always available. Ask early!
- **`NumberFormatException` for "Price"?** That's the header line. Read it once before the loop.
- **Removing from the cart crashes or skips an item?** Find the product first (loop and remember it), **then** remove it after the loop.
- **A search finds nothing?** Compare with `equalsIgnoreCase`, and print what the user typed to check for extra spaces.
