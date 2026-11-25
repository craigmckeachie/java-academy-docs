---
publish: true
title: Capstone 2 Tasks
section: Capstones
order: 4
---

# Capstone 2 Task List: the Point-of-Sale App, Step by Step

**For anyone who wants a detailed project plan.** This page breaks the whole Capstone into small tasks, in the order to build them. Do them top to bottom, and check each one off. The **[Capstone 2: How to Do Well](/handouts/capstone-2-guide)** guide has the daily plan and the design tips; this page is the to-do list behind it.

It uses **the Deli's** words. Building the Pizza, the Taco or your own? Swap in your version's words from [the table in the guide](/handouts/capstone-2-guide#choose-your-version).

> [!TIP] After every task
> Run the app, check that the new piece works, then **commit and push** with a clear message (`Add the drink price`). Work on a **branch** for each section below, and merge it into `main` when it works.

## Your screen map

- [ ] Fill in **[your screen map](/handouts/capstone-2-guide#your-screen-map-you-fill-it-in)** in the guide: name every action, and list the questions it asks

## 1. Setup (Wednesday 11/25, in class)

- [ ] Read the whole **Deli** document, even if you might build something else, and write down your questions
- [ ] Look at the Pizza, the Taco and the Custom, then pick your version and read its document too. The Custom version: fill in the [Custom Shop Planner](/handouts/capstone-2-guide#choose-your-version) and send your instructor its link in Teams by Monday 11/30, before class.
- [ ] Create the project in your `capstones` folder with a good kebab-case name (`deli-cious`, or your own shop's name)
- [ ] Add **`.idea/`** to the project's `.gitignore` before your first commit ([IntelliJ + Git, step 7](/handouts/intellij-git)), unless you did the one-time [Ignore IntelliJ Files](/handouts/git-ignore-idea) setup
- [ ] Share it to GitHub as a **public** repository, and add the link to the class GitHub sheet
- [ ] **Project board:** create it, make it **public**, and add a card for each section below (a card per action from your screen map is even better)
- [ ] **Three user stories, in your own words**, on the Add Sandwich, Checkout and receipt cards ([a model](/handouts/capstone-2-guide#a-model-user-story)). The other cards can be just a title.
- [ ] Commit and push

## 2. The design and the model (Monday)

- [ ] **Class diagram:** underline the nouns and circle the verbs in your document's requirements, then draw your classes in Excalidraw ([how](/handouts/capstone-2-guide#draw-your-class-diagram-first)). Save the `.excalidraw` file and a PNG in your project folder.
- [ ] **Packages:** your root package (`com.pluralsight.delicious`), your class with `main` in it **first**, then `model`, `data` and `ui` ([Packages](/handouts/package-organization))
- [ ] **The drink:** its size and flavor, and a method that returns its price as a `BigDecimal`
- [ ] **The chips:** its type, and its price
- [ ] **The sandwich:** its bread, size, toppings and toasted, and a method that works out its price from the [price table](/handouts/capstone-2-guide#the-deli-s-prices-and-toppings). No **enums**: we haven't learned them.
- [ ] **The order:** holds everything the customer adds, and works out the **total**
- [ ] Every price is a `BigDecimal`. You only add, so no `setScale` ([Prices](/handouts/capstone-2-guide#prices)).
- [ ] Prices that never change are `static final` constants. Your screens aren't in the class with `main`, so they don't need `static`.
- [ ] **Recommended:** **JUnit tests** for each price, with the [price checks](#price-checks) below. They aren't a required feature, but they catch price mistakes fast. Run them after every change to a price. (Without tests: check the same prices by running your app.)
- [ ] Update your diagram if the code changed it. Commit and push.

## 3. The screens, empty (Monday)

Build the screens first, with every action a `TODO` that just prints its name, like Capstone 1.

- [ ] **Home Screen:** `runHomeScreen()` with **1** and **0**, in your `UserInterface`. `main` makes one `UserInterface` object and calls it, like your dealership.
- [ ] **Exit:** **0** ends the loop, and the app says goodbye
- [ ] **Order Screen:** opened by **1** on Home, with **1** to **4** and **0**. A **new, empty order** every time it opens.
- [ ] **Cancel Order:** **0** throws the order away and goes back to Home
- [ ] A wrong number on either screen shows a friendly message, and the menu comes back
- [ ] Copy your **input helpers** from Capstone 1 ([Validating Input](/handouts/validating-input)). Commit and push.

## 4. Building an order (Tuesday)

Start with the small ones.

- [ ] **Add Drink action:** ask for the size and the flavor, add the drink to the order, go back to the Order screen
- [ ] **Add Chips action:** ask for the type, add the chips to the order
- [ ] **The order so far:** the Order screen lists every item above its menu, oldest first, with the newest at the bottom
- [ ] **Add Sandwich action, part 1:** the bread and the size, each a numbered choice ([Choosing from a list](/handouts/capstone-2-guide#choosing-from-a-list))
- [ ] **Part 2:** meats, then cheeses, each asked in a loop until the user is done, with "extra?" for each one ([only meats and cheeses need it](/handouts/capstone-2-guide#choosing-from-a-list))
- [ ] **Part 3:** the other toppings and the sauces (a loop each), then the **free sides**, then **toasted?**
- [ ] The finished sandwich goes on the order. Build one of each [price check](#price-checks) and compare the prices.
- [ ] A letter, a blank, or a number that isn't on the list asks again ([Validate every answer](/handouts/capstone-2-guide#validate-every-answer)). Commit and push after each action.

## 5. Checkout and the receipt (Wednesday)

- [ ] **Checkout action:** show every item with **all** its toppings and its price, then the **order total**
- [ ] **The empty-order rule:** an order with nothing in it, or with no sandwich and no chips or drink, shows a friendly message and goes back to the Order screen
- [ ] **Confirm or Cancel:** Confirm saves the receipt and goes back to Home; Cancel throws the order away and goes back to Home
- [ ] Create the **`receipts`** folder in your project, next to `pom.xml`
- [ ] **Save the receipt** (in `data`): the order details and total, in a **new file for each order** ([one order, one new file](/handouts/capstone-2-guide#the-receipt-file)). Make the name when the customer confirms, `yyyyMMdd-HHmmss.txt` (`LocalDateTime.now()` and a `DateTimeFormatter`, like the [Formatting Dates](/handouts/date-time-format#_4-a-complete-example) example), and close the `BufferedWriter`.
- [ ] Place two orders and open both receipt files: two files, each with its own order and the right total
- [ ] Commit one sample receipt, so the `receipts` folder is on GitHub. Commit and push.

## 6. Finish and polish (Thursday)

- [ ] Fix any bugs you found, and clean up names and formatting (see the [Quality check](#quality-check-before-friday))
- [ ] **Class diagram:** matches your code. Re-export the PNG.
- [ ] **README.md:** what the app does, its main features, how to run it, your class diagram, a screenshot of each screen, and one interesting piece of code ([template](/handouts/markdown-and-readmes#a-readme-template-for-your-projects))
- [ ] **Project board:** every card you finished is in **Done**
- [ ] **Branches:** everything is merged into `main`, and `main` runs
- [ ] Every row of [Test it like a customer](/handouts/capstone-2-guide#test-it-like-a-customer) does what it should
- [ ] **Presentation:** pick your interesting piece of code, and rehearse your 10 minutes once, out loud, with a timer
- [ ] Optional features (section 7) only after everything above works

## 7. Optional (only after everything above works)

In this order, one at a time, with a commit after each ([details in the guide](/handouts/capstone-2-guide#make-it-your-own-optional)):

- [ ] **Signature items** from your document's Challenge Yourself, each a child of your sandwich class. The customer can **add and remove** toppings before it goes on the order. Working well, with every required feature correct, it gets you to **Exceeding** on required features.
- [ ] **A shop name and welcome banner**, and the same name in your README
- [ ] **[More ideas](/handouts/capstone-2-guide#more-ideas)**: the order total, sales this session, remove an item, quantity, a combo discount

## Price checks

Work each one out by hand first, then check that your code gives the same answer: run the app, or (recommended) make it a JUnit test. In a test, compare `BigDecimal`s with `compareTo`, or write the expected value with two decimal places ([Unit Testing](/handouts/unit-testing)).

**The Deli**

| What's ordered | How it adds up | Price |
|---|---|---|
| 4" white, ham, american cheese | 5.50 + 1.00 + 0.75 | **$7.25** |
| 8" wheat, steak **and extra** steak, provolone **and extra** cheese, lettuce, peppers, mayo, toasted | 7.00 + 2.00 + 1.00 + 1.50 + 0.60 (lettuce, peppers, mayo and toasting are included) | **$12.10** |
| 12" wrap, chicken, bacon, cheddar | 8.50 + 3.00 + 3.00 + 2.25 | **$16.75** |
| 12" rye, no toppings | 8.50 | **$8.50** |
| A large drink | 3.00 | **$3.00** |
| Chips | 1.50 | **$1.50** |
| **An order:** the $12.10 sandwich, a large drink and chips | 12.10 + 3.00 + 1.50 | **$16.60** |

**The Pizza**

| What's ordered | How it adds up | Price |
|---|---|---|
| 8" thin crust, no toppings | 8.50 | **$8.50** |
| 12" regular crust, pepperoni **and extra** meat, mozzarella, stuffed crust | 12.00 + 2.00 + 1.00 + 1.50 | **$16.50** |
| Garlic knots | 1.50 | **$1.50** |

**The Taco**

| What's ordered | How it adds up | Price |
|---|---|---|
| 3-taco plate, corn shell, carne asada, cotija | 5.00 + 2.00 + 1.50 | **$8.50** |
| Burrito, flour, carnitas **and extra** meat, cheddar, covered | 8.50 + 3.00 + 1.50 + 2.25 | **$15.25** |
| Chips & salsa | 1.50 | **$1.50** |

**The Custom:** write five checks like these for your own menu, before you code the prices.

## Quality check (before Friday)

Your Capstone is graded on **Completion** (the tasks above, your README and board, your diagram, and Friday's presentation) and **Quality**. The biggest part of Completion is that every required feature works without crashing, and the biggest part of Quality is formatting, names and structure. Go through this list on Thursday:

- [ ] **Commit history:** many small commits with clear messages, on branches, spread across the week
- [ ] **User experience:** every screen says exactly what the user can type, the order and receipt are easy to read, and bad input never crashes the app
- [ ] **Code formatting and structure:** every file formatted (**Cmd+Option+L** / **Ctrl+Alt+L**), good names ([Java Code Conventions](/handouts/java-code-conventions)), `final` on values that never change, small methods that each do one thing, classes in `model`, `data` and `ui`, and no commented-out code, leftover `TODO`s or unused code
- [ ] **Code comments:** a good README and clear names explain your project, so few comments is fine. Any comment you keep says why, not what ([Comments](/handouts/java-code-conventions#comments)). Section comments that group methods are fine.
- [ ] **Check your own code:** run the [AI Code Check](/handouts/ai-code-check) prompt, then decide on each point and type any changes yourself
