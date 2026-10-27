---
publish: true
title: Fri 10/30
section: Daily Checklists
---

# Friday 10/30: Today's Checklist

**Today:** the **Workbook 3w workshop: Online Store** until early afternoon. It pulls the whole week together: reading a CSV file, an `ArrayList` of objects, searching, and a menu. The last two hours are the **Capstone 1 kickoff**: you'll read the project, set it up, and plan your week.

Check items off as you go. **"Done" = the code runs, it's committed, it's pushed to GitHub, and you've sent the repo URL.**

## First thing

- [ ] Anything from this week that isn't pushed yet: push it now
- [ ] Read **all of Workbook 3w** (pp. 2–4) before writing any code
- [ ] **Plan in your notebook:** sketch the `Product` class and draw the three screens (Home, Display Products, Display Cart), with what the user sees and what they can type

> [!NOTE] Solo, not a team
> The workbook says to do this workshop as a team. **This time, work on your own**: teams need Git branching and merging, which come in Week 6. You'll do a team project later.

## Workshop: Online Store (Workbook 3w)

- [ ] Create the project **`online-store`** in `workbook-3`, with a git repository. Share it to GitHub as a **public** repo.
- [ ] Copy **`products.csv`** from DataFiles.zip into the project's **root folder**

### Milestone 1: load the products

- [ ] A `Product` class with the four fields from the file: SKU, product name, price, department. Use **Generate** for the constructor and getters.
- [ ] Read `products.csv` into an `ArrayList<Product>` with Wednesday's pattern: read a line, `split("\\|")`, create a `Product`, add it to the list
- [ ] The first line is a **header** (`SKU|Product Name|Price|Department`). Read it once **before** the loop.
- [ ] Print every product once to check the list loaded (delete that later). Commit and push.

### Milestone 2: the home screen

- [ ] A loop with three options: **Display Products**, **Display Cart**, **Exit**
- [ ] Pick the option with a `switch` (yesterday's demo). Each `case` calls a method, like `displayProducts()`.
- [ ] Commit and push

### Milestone 3: Display Products

- [ ] Show every product: SKU, name, price (as money, `%.2f`) and department, lined up with `printf`
- [ ] Let the user **search or filter** by **product name**, **price range** or **department**. Each one is a for-each with an `if` inside, like Vehicle Inventory's searches.
- [ ] Let the user **add a product to their cart** by its SKU. The cart is another `ArrayList<Product>`.
- [ ] **Go back** to the home screen
- [ ] Commit and push after **each** feature works

### Milestone 4: Display Cart

- [ ] Show every product in the cart, and the **total** of their prices
- [ ] **Remove** a product: ask for its SKU, find it, and remove it from the cart
- [ ] **Check Out** appears as an option, but it doesn't have to do anything (it's a bonus)
- [ ] **Go back** to the home screen
- [ ] Commit and push

### Milestone 5: polish

- [ ] Every screen tells the user exactly what they can type
- [ ] A wrong letter or an unknown SKU shows a friendly message, not a crash
- [ ] Good names, formatted code (**Cmd+Option+L** / **Ctrl+Alt+L**), and a short **README** (Thursday's template)
- [ ] Final commit, push, and **send the repo URL**

> [!TIP] Optional (if time): the bonus (p. 4)
> - **Check Out:** ask for a cash payment, show the change, print a receipt (order date, items, total, amount paid, change), and empty the cart
> - Show each product in the cart **once**, with a quantity
> - Write the receipt to a file, too

## 2:00–4:00: Capstone 1 kickoff

Your instructor will walk you through this and share a guide on how to do well.

- [ ] Read the whole **Capstone 1 - Accounting Ledger** document and write down one question
- [ ] Make a **`capstones`** folder in your `pluralsight` folder
- [ ] Create the project with a good kebab-case name (like `accounting-ledger`), and share it to GitHub as a **public** repository
- [ ] Download the starter **`transactions.csv`** (your instructor will share the link) and put it in the project root
- [ ] Commit and push
- [ ] Add your repo link to the **class GitHub sheet** (Capstone 1 row)
- [ ] Create a **GitHub project board** and add a card for each screen and feature in the document
- [ ] Before you leave, look at **Monday's bite**: the home screen, Add Deposit and Make Payment

## Stuck?

- **[Help Desk](/handouts/help-desk):** today's helper is in the Help Desk breakout room for the first 15–20 minutes of each breakout. Share your screen; you do the typing.
- **Your instructor** is always available. Ask early!
- **`NumberFormatException` for "Price"?** That's the header line. Read it once before the loop.
- **Removing from the cart crashes or skips an item?** Find the product first (loop and remember it), **then** remove it after the loop.
- **A search finds nothing?** Compare with `equalsIgnoreCase`, and print what the user typed to check for extra spaces.
