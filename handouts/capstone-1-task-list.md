---
publish: true
title: Capstone 1 Tasks
section: Capstones
order: 2
---

# Capstone 1 Task List: the Accounting Ledger, Step by Step

**For anyone who wants a detailed project plan.** This page breaks the whole Capstone into small tasks, in the order to build them. Do them top to bottom, and check each one off. The **[Capstone 1: How to Do Well](/handouts/capstone-1-guide)** guide has the daily plan and the tips; this page is the to-do list behind it.

**Two words you'll see a lot** (from the [Menus and Screens](/handouts/menus-and-screens) page):

- A **screen** shows a menu again and again until the user picks the way out. It has a `do-while` loop. Your app has only **three**: Home, Ledger, and Reports.
- An **action** does **one** thing, then returns to the screen: it adds a deposit, displays a list, or runs a report. It ends with `pressEnterToContinue()`. Everything else in your app is an action, and **you** name each one: a verb, then what it acts on, after its menu label (like `addMovie()` in the movie app).

> [!TIP] After every task
> Run the app, check that the new piece works, then **commit and push** with a clear message (`Add the Ledger screen`). Small commits are part of your grade, and they're your undo button.

## Your screen map (you fill it in)

The three screens and their menus come straight from the Capstone document. The **blanks are yours**: each one is an action, and naming it is part of designing your app.

```text
main
 └── runHomeScreen()        D) Add Deposit      → ____________
      │                     P) Make Payment     → ____________
      │                     L) Ledger           → runLedgerScreen()
      │                     X) Exit
      │
      └── runLedgerScreen() A) All              → ____________
           │                D) Deposits         → ____________
           │                P) Payments         → ____________
           │                R) Reports          → runReportsScreen()
           │                H) Home             → back to Home
           │
           └── runReportsScreen()
                            1) Month To Date    → ____________
                            2) Previous Month   → ____________
                            3) Year To Date     → ____________
                            4) Previous Year    → ____________
                            5) Search by Vendor → ____________
                            0) Back             → back to Ledger
```

- [ ] Copy it into your notebook (or your README), and fill in every blank with an action name. Use the movie app's map on [Menus and Screens](/handouts/menus-and-screens#map-your-screens-first) as your model.
- [ ] Optional: check it with the [AI review prompt](/handouts/menu-screens-practice#check-your-map-with-ai) from the Workout Tracker, pasting the Capstone's menus instead. The AI reviews your map; it doesn't name things for you.
- [ ] Want a second opinion? Bring your map to office hours.

## 1. Setup (Friday, in class)

- [ ] Read the whole **Capstone 1 - Accounting Ledger** document, and write down your questions
- [ ] Create the project in your `capstones` folder with a good kebab-case name (`accounting-ledger`, or your own app's name)
- [ ] Share it to GitHub as a **public** repository, and add the link to the class GitHub sheet
- [ ] Download the starter `transactions.csv` ([link in the guide](/handouts/capstone-1-guide#friday-set-up-in-class)) and put it in the project root (next to `pom.xml`)
- [ ] **Project board:** create it, make it **public**, and add a card for each task group below (a card per screen and per action from your screen map is even better)
- [ ] Commit and push

## 2. The three screens, empty (Monday)

Build the screens first, using your screen map, with every action a `TODO` that just prints its name, like the [Workout Tracker](/handouts/menu-screens-practice).

- [ ] **Home Screen:** `runHomeScreen()` with **D**, **P**, **L**, **X**, called from `main`
- [ ] **Exit:** **X** ends the loop, and the app says goodbye
- [ ] **Ledger Screen:** `runLedgerScreen()` with **A**, **D**, **P**, **R**, **H**, opened by **L** on the Home screen
- [ ] **Go back to Home:** **H** on the Ledger screen ends its loop and returns to Home
- [ ] **Reports Screen:** `runReportsScreen()` with **1** to **5** and **0**, opened by **R** on the Ledger screen
- [ ] **Go back to Ledger:** **0** on the Reports screen returns to the Ledger
- [ ] A wrong letter on any screen shows a friendly message, and the menu comes back
- [ ] Run it: go into every screen and back out again. Commit and push.

## 3. Transactions and saving (Monday)

- [ ] A **`Transaction`** class with date (`LocalDate`), time (`LocalTime`), description, vendor and amount (`double`). Use **Generate** for the constructor and getters.
- [ ] `static Scanner scanner` and `static ArrayList<Transaction> transactions` at the top of `App`, outside `main` ([why](/handouts/capstone-1-guide#read-the-file-once-when-the-app-starts))
- [ ] **Add Deposit action:** ask for the description, vendor and amount; use today's date and the time now (format the time with `"HH:mm:ss"`, or it prints fractions of a second); append one line to `transactions.csv` in the `date|time|description|vendor|amount` format. Ask with the [input helpers](/handouts/validating-input) (`promptForString()`, `promptForDouble()`), and ask again if the amount isn't more than 0.
- [ ] **Make Payment action:** the same, but save the amount as a **negative** number (the user types `25.00`, you save `-25.00`)
- [ ] Each line you write **ends with `\n`** ([why](/handouts/capstone-1-guide#one-transaction-one-line))
- [ ] Open `transactions.csv` after each one and check the new line by hand: on its own line, right below the one before, with no empty line between them. Commit and push.

## 4. Load the file and show the ledger (Tuesday)

- [ ] **Load the transactions** in their own method, called once at the start of `main`: skip the header line and any blank line, then for each line `split("\\|")`, build a `Transaction`, and add it to the list
- [ ] Add Deposit and Make Payment add the new transaction to the **list** too, not just the file
- [ ] **All action:** every transaction, oldest first with the **newest at the bottom** ([a change to the document](/handouts/capstone-1-guide#newest-at-the-bottom-a-change-to-the-document)), in lined-up columns with `printf`
- [ ] **Deposits action:** only amounts **more than 0**, newest at the bottom
- [ ] **Payments action:** only amounts **less than 0**, newest at the bottom
- [ ] Check each list against the file. Commit and push after each action.

## 5. Reports (Wednesday)

Each report is an action: loop through the list and show only the transactions that match.

- [ ] **Month To Date action:** this month **and** this year
- [ ] **Previous Month action:** last month, and watch out for January (the previous month is December of **last** year)
- [ ] **Year To Date action:** this year
- [ ] **Previous Year action:** last year
- [ ] **Search by Vendor action:** ask for a vendor and show its transactions, ignoring capitals (`equalsIgnoreCase`)
- [ ] A friendly message when a report finds nothing ("No transactions found")
- [ ] Check every report against the file by hand. Commit and push after each one.

## 6. Finish and polish (Thursday)

- [ ] Fix any bugs you found, and clean up names and formatting (see the [Quality check](#quality-check-before-friday))
- [ ] **README.md:** what the app does, how to run it, a screenshot of each screen, and one interesting piece of code ([template](/handouts/markdown-and-readmes#a-readme-template-for-your-projects))
- [ ] **Project board:** every card you finished is in **Done**
- [ ] Test it like a user: every option on every screen, a wrong letter, a letter where a number goes, a vendor with no matches
- [ ] **Presentation:** pick your interesting piece of code, and rehearse your 10 minutes once, out loud, with a timer
- [ ] Optional features (section 7) only after everything above works

## 7. Optional (only after everything above works)

In this order, one at a time, with a commit after each. The menus and the file format stay exactly as the document has them ([details in the guide](/handouts/capstone-1-guide#make-it-your-own-optional)):

- [ ] **A unique app name and welcome banner** (`displayWelcomeBanner()`, printed once in `main`), and the same name in your README
- [ ] **Custom Search action** (option **6** on the Reports screen): ask for a start date, end date, description, vendor and amount, and filter only on the ones the user filled in
- [ ] **More ideas:** the balance on the Home screen, totals under each report, then paging for long lists ([and what to leave out](/handouts/capstone-1-guide#more-ideas-if-there-s-still-time))
- [ ] **Your own transactions file** that fits your app ([make your own file](/handouts/capstone-1-guide#make-your-own-transactions-file))

## Quality check (before Friday)

Your Capstone is graded on **Completion** (the tasks above) and **Quality**. Go through this list on Thursday:

- [ ] **Commit history:** many small commits with clear messages, spread across the week, not one big commit at the end
- [ ] **User experience:** every screen says exactly what the user can type, results are lined up and easy to read, and bad input never crashes the app
- [ ] **README and other docs:** someone else could run your app from your README alone, and the screenshots show on GitHub
- [ ] **Code formatting:** every file formatted (**Cmd+Option+L** on Mac, **Ctrl+Alt+L** on Windows)
- [ ] **Code documentation:** a short comment where the code isn't obvious (not on every line)
- [ ] **Code beauty:** good names (see [Java Code Conventions](/handouts/java-code-conventions)), small methods that each do one thing, a short `main`, and no leftover unused code
