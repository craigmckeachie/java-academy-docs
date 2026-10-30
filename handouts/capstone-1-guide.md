---
publish: true
title: Capstone 1 Guide
section: Capstones
order: 1
---

# Capstone 1: How to Do Well

**Eat the elephant one bite at a time.** A whole week of work handed to you at once looks huge. One screen a day doesn't. This page breaks the Accounting Ledger into daily bites and covers what makes a capstone stand out.

**Key dates**
- **Due and presented: Friday 11/6, starting at 8:30 am Central.**
- **Office hours** (all times Central). Bring your code and a question:

| Monday 11/2 | Tuesday 11/3 | Wednesday 11/4 | Thursday 11/5 |
|---|---|---|---|
| 9:15–11:15 am | 8:30–10:30 am | 8:30–10:30 am | 10:45–11:30 am and 12:30–1:45 pm |

- **Late work** drops one level, and isn't accepted without your instructor's OK **before** the due date.

> [!IMPORTANT] One change to the Capstone document: newest at the bottom
> The document says *"All entries should show the newest entries first."* **In this class, show them oldest first, with the newest at the bottom**, right above the menu where the user is looking. Every ledger list and report is a plain for-each loop. Your Capstone is graded this way. [Why, and what it means for your code](#newest-at-the-bottom-a-change-to-the-document).

## You already know how to build this

Every piece was taught in Week 3, and almost every exercise you did this week is a small version of a Capstone feature. When you get to a feature, **open the exercise that matches it** in IntelliJ (or on GitHub) and copy its pattern.

| The Capstone needs | Where you learned it | The exercise to look back at |
|---|---|---|
| **Home, Ledger and Reports screens**: a menu in a loop | [Menus and Screens](/handouts/menus-and-screens) (Fri), `switch` (Wed) | **[Workout Tracker](/handouts/menu-screens-practice)**, and the **Search Inventory menu bonus** (p. 50) |
| **Load `transactions.csv` when the app starts**: read each line, split it, make a `Transaction`, add it to an `ArrayList` | Reading files (Mon), `ArrayList` (Wed) | **Search Inventory file bonus** (p. 49), the closest match to the Capstone; **Payroll Calculator part 1** (pp. 17–18) for splitting each line |
| **Add Deposit and Make Payment**: append one line to the file | Writing to files, with `true` to append (Tue) | **search-engine-logger** (p. 34), which appends a line with the date and time; **Payroll Calculator part 2** (p. 23) |
| **A date and time on every transaction** | `LocalDate`, `LocalTime`, `DateTimeFormatter` (Tue) | **format-dates** (p. 33), and the [Formatting Dates](/handouts/date-time-format) page |
| **Month To Date, Previous Month, Year To Date, Previous Year** | Date parts: `getMonthValue()`, `getYear()` (Tue) | **format-dates** (p. 33) |
| **Ledger lists and Search by Vendor**: loop through the list and show only the matches | Searching an `ArrayList` (Wed) | **Search Inventory** (p. 49), and Vehicle Inventory's searches (Week 2) |
| **Lined-up columns** for the ledger and reports | `printf` (Week 1) | **Search Inventory** (p. 49), and the [Formatting Output](/handouts/string-format) page |
| **No crash on bad input** (a letter where a number goes, a missing file) | Exceptions, `try/catch` (Mon) | **famous-quotes** (p. 9), **bedtime-stories** (pp. 15–16), and [Handling Bad Input](/handouts/if-or-exception) |
| **Ask again on a typo**: an amount that isn't a number, a blank vendor, a `\|` in the text | [Validating Input](/handouts/validating-input) (Fri) | The **[Validating Input demo](https://github.com/craigmckeachie/java-academy-demos/blob/main/src/main/java/com/pluralsight/workbook3a/validation/solutions/ValidatingInputDemo.java)**, and the input helpers you added to your **[Workout Tracker](/handouts/menu-screens-practice)** |
| **A project board** with a card for each feature | Agile and project boards (Thu) | **Project Board** (Workbook 3b p. 38), and the [Projects & Issues](/handouts/github-projects-and-issues) page |
| **A README** | Markdown and READMEs (Thu) | Your **search-inventory README**, and the [Markdown and README Files](/handouts/markdown-and-readmes) page |

> [!TIP] Haven't finished one of them?
> Finish it **first**, before the Capstone feature that needs it. A small exercise is a much easier place to get a pattern working than a whole Capstone.

**Want a more detailed plan?** The **[Capstone 1 Task List](/handouts/capstone-1-task-list)** breaks the whole project into small steps, in order, with a checkbox for each.

## Friday: set up (in class)

- [ ] Read the whole Capstone 1 document first, and write down your questions
- [ ] Make a `capstones` folder inside your `pluralsight` folder
- [ ] Create the IntelliJ project with a **good name**, in kebab-case: `accounting-ledger`, or your own app's name. Not `capstone1`. Employers see this name.
- [ ] Share it to GitHub as a **public** repository
- [ ] Download the starter **<a href="/java-academy-docs/capstones/transactions.csv" download>transactions.csv</a>** and put it in the project root (next to `pom.xml`). It has 212 sample transactions from January 2025 to October 29, 2026, oldest first, so your ledger and reports have something to show from day one.
- [ ] Commit and push, then add your repo link to the **class GitHub sheet** (Capstone 1 row)
- [ ] Create a **GitHub project board**, make it **public**, and add a card for each screen and feature. The **[Task List](/handouts/capstone-1-task-list)** has them all, in order.

## Design decisions before you code

### Every deposit and payment is a Transaction

You don't need a `Deposit` class and a `Payment` class. Both are a **`Transaction`**, and the sign of the amount tells them apart:

- **Deposits (money in) are positive:** a paycheck or a refund is `1500.00`
- **Payments (money out) are negative:** a coffee or a bill is `-25.00`

So the **balance** is just the total of every amount: adding a negative number subtracts it. When the user makes a payment, they type `25.00` and **your code** saves `-25.00`.

### A date and a time: two fields

Give `Transaction` a **`LocalDate date`** and a **`LocalTime time`**, one field for each column in the file:

- **Loading** is one `parse` per column: `LocalDate.parse(parts[0])` and `LocalTime.parse(parts[1])`.
- **The reports** only need the date: `transaction.getDate().getMonthValue()`, `getDate().isBefore(startDate)`.

When you **save** a new transaction, format the time with a `DateTimeFormatter`, like in format-dates. Without it, `LocalTime.now()` adds fractions of a second (`14:03:27.481920`):

```java
DateTimeFormatter timeFormatter = DateTimeFormatter.ofPattern("HH:mm:ss");
String time = LocalTime.now().format(timeFormatter);
```

The date needs no formatter: `LocalDate.now()` is already `2026-10-30`, the file's format.

> [!NOTE] What about LocalDateTime?
> Real apps often store one moment as one value, and you'll see that with databases in Week 9. A `LocalDateTime` is fine here too, as long as your file keeps the **two columns** exactly as the document has them.

### Newest at the bottom (a change to the document)

> [!IMPORTANT] Show transactions oldest first, newest at the bottom
> The Capstone document says *"All entries should show the newest entries first."* **For this class, your instructor has changed that: show them oldest first, with the newest at the bottom.** This is how your Capstone is graded, so you won't lose anything for it.

**Why:** a console prints from the top down, and the window keeps the **last** lines. With newest first, the newest transactions print first and scroll off the top, and the oldest end up right above the menu. With the newest at the bottom, the newest are right where the user is looking, like a text-message thread.

**It's also simpler.** New transactions are appended, so the file and your list are already oldest first. Every ledger list and report is a plain **for-each** loop, from the start of the list to the end. No backwards loop, no sorting.

### Menus and screens

Build the Home, Ledger and Reports menus with the pattern on the **[Menus and Screens](/handouts/menus-and-screens)** page, the one you practiced in the **[Workout Tracker](/handouts/menu-screens-practice)**. Draw your Capstone's screen map first: the [Task List](/handouts/capstone-1-task-list#your-screen-map-you-fill-it-in) has the three screens and their menus, and **you** name the actions. Then build the screens empty before you fill in any actions. Want a second opinion on your map? Bring it to office hours.

- **"Page" means screen.** The document's back options say "go back to the Ledger **page**" and "go back to the home **page**". That's the same thing as a screen: **H** and **0** end the screen's loop, like **H** and **0** in the Workout Tracker.
- **The "starter screen" is a welcome banner, not a screen.** Challenge Yourself (p. 4) suggests a unique app name and a "starter screen". It has no menu, so it isn't a screen: it's a few `println` lines with your app's name, printed **once** in `main`, just before `runHomeScreen()`. Put them in a method named `displayWelcomeBanner()`. It doesn't need `pressEnterToContinue()`: the Home menu prints right below it, so the user still sees it.

```java
public static void main(String[] args) {
    loadTransactions();
    displayWelcomeBanner();
    runHomeScreen();
}
```

### Validate every answer

A typo in an amount shouldn't crash your app, and a `|` in a vendor name shouldn't break `transactions.csv`. Copy the input helpers into your app, under an `// ---------- Input helpers ----------` banner below your actions. They're on the **[Validating Input](/handouts/validating-input)** page, and Friday's demo shows them working in the movie app: **[ValidatingInputDemo.java](https://github.com/craigmckeachie/java-academy-demos/blob/main/src/main/java/com/pluralsight/workbook3a/validation/solutions/ValidatingInputDemo.java)**.

- **[`promptForString()`](/handouts/validating-input#asking-for-text)** for the description and the vendor: not blank, and no `|`
- **[`promptForDouble()`](/handouts/validating-input#asking-for-a-number)** for the amount: asks until it's a number
- **[The rule in the action](/handouts/validating-input#rules-belong-in-the-action):** Add Deposit and Make Payment both check that the amount is **more than 0**, and ask again if it isn't. The user always types a positive amount; for a payment, your code makes it negative.

### One transaction, one line

Every transaction is **one line** in `transactions.csv`. The line break (`\n`) is what ends one line and starts the next, so **where you put it** matters. Get it wrong and nothing looks broken when you save. The crash comes **the next time your app starts** and loads the file.

**No line break at the end of the last line**, then you append: the new transaction is glued onto the old one.

```text
2026-10-29|09:12:44|Coffee|Starbucks|-5.75 2026-11-02|10:03:15|Paycheck|Acme|1500.00
```

`split("\\|")` gives **nine** parts, and the amount is now `-5.75 2026-11-02`: `Double.parseDouble` throws a `NumberFormatException`.

**A line break at the start** of the line you write (or an extra Enter at the end of the file): an empty line.

```text
2026-10-29|09:12:44|Coffee|Starbucks|-5.75

2026-11-02|10:03:15|Paycheck|Acme|1500.00
```

`split` gives **one** part for the empty line, so `parts[1]` throws an `ArrayIndexOutOfBoundsException`.

> [!TIP] The rule: every line ends with \n. No line starts with one.
> Then the file always ends with a line break, ready for the next line. The starter file already does.

1. **When you write**, put `\n` at the **end** of the line, like in search-engine-logger and Payroll Calculator part 2. Open the `FileWriter` with `true`, so the line is added at the end.

2. **When you load**, skip blank lines, so one stray Enter can't crash your app:

```java
while ((line = bufferedReader.readLine()) != null) {
    // an empty line has nothing to split, so skip it
    if (!line.isBlank()) {
        String[] parts = line.split("\\|");
        // ... build a Transaction and add it to the list
    }
}
```

3. **When you check the file by hand** in IntelliJ, click at the very end: the cursor should land on **one** empty line (with a line number) after the last transaction. That's the line break at the end. Two empty lines means a blank line; no empty line means the next transaction will be glued on. **Don't type in the file** while you check it; close it without pressing Enter or Delete.

### Read the file once, when the app starts

Reading and writing the file is the slowest thing your app does. So:

1. When the app starts, read **every** line of `transactions.csv` into an `ArrayList<Transaction>`.
2. When the user adds a deposit or payment, add it to the file **and** to the list.
3. Every ledger display and report loops through the **list**. They never read the file again.

The `Scanner` and the list are used by every screen and action, so declare them **once**, at the top of the class, outside `main`, with `static`:

```java
public class App {
    static Scanner scanner = new Scanner(System.in);
    static ArrayList<Transaction> transactions = new ArrayList<>();

    public static void main(String[] args) {
        loadTransactions();
        runHomeScreen();
    }
}
```

## One bite a day

Work in this order. Each day ends with something that **runs**, is **committed**, and is **pushed**.

| Day | The bite | Done when |
|---|---|---|
| **Mon** | All **three screens**, empty, with `TODO` actions (like the Workout Tracker). A `Transaction` class (date, time, description, vendor, amount). **Add Deposit** and **Make Payment** save a line to `transactions.csv`, asking with the [input helpers](#validate-every-answer). | You can add a deposit and a payment, and both lines are in the file, each on [its own line](#one-transaction-one-line) (a payment's amount is negative). Typing `abc`, `0` or a `\|` asks again. |
| **Tue** | Read `transactions.csv` into the `ArrayList<Transaction>` when the app starts, and add new deposits and payments to the list too. The **Ledger** screen: **All**, **Deposits**, **Payments**, [newest at the bottom](#newest-at-the-bottom-a-change-to-the-document). | Each ledger option shows the right entries, newest at the bottom. |
| **Wed** | The **Reports** screen: Month To Date, Previous Month, Year To Date, Previous Year, Search by Vendor, Back. | Each report shows the right entries, checked against the file by hand. |
| **Thu** | Fix bugs. Write the **README**. Clean up names and formatting. **Rehearse your demo.** [Optional features](#make-it-your-own-optional) only if everything above works. | Someone else could run it from your README. |
| **Fri** | Present (10 minutes). | |

The **[Task List](/handouts/capstone-1-task-list)** breaks each day into small checkboxes: **Monday** is its sections 2 and 3, **Tuesday** section 4, **Wednesday** section 5, and **Thursday** sections 6 and the Quality check. Use whichever helps you more: this table to see the week, the Task List to see the next step.

> [!TIP] Every ledger display and report is the same loop
> Go through **every** transaction in your list, and only show the ones that match: a for-each with an `if` inside. Deposits: the amount is more than 0. A vendor search: the vendor matches what the user typed (ignoring capitals).

> [!TIP] A count at the bottom
> After the loop, print how many transactions matched, like `98 deposits`, right above the "Press Enter" line. Count them in the loop, the way you'd count them for "No transactions found".

> [!TIP] Dates for the reports
> "Month To Date" means this month and this year. Compare a transaction's `getMonthValue()` and `getYear()` with today's (`LocalDate.now()`). The previous month and previous year work the same way: work out which month and year you want first, then compare. Watch out for January: the previous month is December of **last** year.

## What makes a capstone stand out

**It works**
- [ ] Every required screen and option from the document works
- [ ] Test it the way a user would: every option, a wrong letter, a vendor with no matches
- [ ] Check reports against the file **by hand**, with real dates (this month, last month, last year)

**The code is easy to read**
- [ ] Java naming: `PascalCase` classes, `camelCase` variables and methods, full words (see [Java Code Conventions](/handouts/java-code-conventions))
- [ ] Small methods that each do one thing, like `addMovie()` or `displayWatchedMovies()` in the movie app, so `main` stays short
- [ ] Formatted code (**Cmd+Option+L** on Mac, **Ctrl+Alt+L** on Windows) and a few comments where they help

**The repository tells the story**
- [ ] **Commit after every working piece**, with a clear message (`Save deposits to the file`), not one big commit Thursday night
- [ ] A **README** with what it does, how to run it, a screenshot of each screen, and one interesting piece of code (template: [Markdown and README Files](/handouts/markdown-and-readmes))
- [ ] The repository is **public** and linked on the class sheet

**It's yours**
- [ ] Optional features, **after** the required ones work, in the order in [Make it your own](#make-it-your-own-optional)
- [ ] You can explain every line. AI follows the [AI Use Policy](/handouts/ai-use-policy): your own attempt first, and you must be able to explain your code on demo day.

## Make it your own (optional)

The Capstone document's **Challenge Yourself** (p. 4) lists the optional features. Do them **in the order below**, and only when every required screen and option works and is pushed. A finished app with no extras beats a half-working app with a custom search.

- **One at a time.** Start one, get it working, commit and push, then decide whether there's time for the next.
- **Thursday's work comes first.** Testing, the README and rehearsing your demo are graded; an unfinished extra isn't. Stop wherever you are when it's time for them.

> [!WARNING] Customize the look, not the menus or the file
> **The menus stay exactly as the document writes them:** every option, with the same letter and the same words, in the same order, on the same screen. Home is `D) Add Deposit`, `P) Make Payment`, `L) Ledger`, `X) Exit`, even if your app is a record store. So **don't**:
> - rename an option (`S) Record a Sale` instead of `D) Add Deposit`)
> - change a letter or a number (`1) Deposit` instead of `D) Add Deposit`)
> - leave an option out because it doesn't fit your app, or add new options in between
> - move an option to another screen
>
> **The file stays in the document's format:** five columns in this order, `date|time|description|vendor|amount`, with that header line. Don't add a column (like `category`), remove one, or change the order. Your app has to load the starter file, and your instructor tests it with it.
>
> **What you can make your own:** the app's name and welcome banner, the screen titles' decoration (`=== Home ===`), the messages your app prints, and the descriptions and vendors in your data.

### A unique name and a welcome banner

**First, about 15 minutes.** Give your app a name that fits your business (a record store, a food truck, a dog-walking business), and print it in a [welcome banner](#menus-and-screens) when the app starts: a few `println` lines in `displayWelcomeBanner()`, called once in `main`. Use the same name in your README's title. It's the quickest way to make your demo memorable.

**ASCII art** makes a banner stand out: big letters drawn with keyboard characters. Type your app's name into a generator like **[Text to ASCII Art Generator (patorjk.com)](https://patorjk.com/software/taag/)**, or ask an AI chatbot: *"Make my app name, Vinyl Vault, into ASCII art that's at most 60 characters wide, using only keyboard characters."* Then paste it in, one `println` per line.

> [!TIP] Backslashes and quotes in ASCII art
> Inside a Java `String`, `\` starts a special character, and `"` ends the `String`. If your art has them, write `\\` for each backslash and `\"` for each double quote (see [Special Characters](/handouts/special-characters)). Run it and compare it with the original: a missing backslash shifts the whole row.

### Custom Search

**Second, about half a day.** Option **6) Custom Search** on the Reports screen: an action, `customSearch()`, that asks for a **start date**, **end date**, **description**, **vendor** and **amount**, then shows the transactions that match. The catch: **the user can leave any of them blank**, and a blank one isn't used as a filter.

#### What the requirement means

**Custom Search is one search, not five.** It's a single option, **6**, that asks **five questions in a row**. The user answers only the ones they care about and presses **Enter** to skip the rest. Then the app shows the transactions that match **every** answer they gave, all together.

It works like the filters on a shopping website: you pick a brand and a price range, leave color and size alone, and you see only the products that match both. Here, the "filters" are questions, asked one at a time.

> **User story:** As a business owner, I want to answer a question like *"What did I spend at Amazon in October?"* with **one** search, filling in only the details I care about, so I don't have to scroll through the whole ledger.

Here's that search in the app. The user presses **Enter** on the questions they don't care about:

```text
=== Custom Search ===
Answer only the questions you care about. Press Enter to skip one.
Start date (yyyy-MM-dd): 2026-10-01
End date (yyyy-MM-dd): 2026-10-31
Description:
Vendor: amazon
Amount:

Date        Time      Description           Vendor   Amount
2026-10-27  14:02:10  Printer ink           Amazon   -48.99
2026-10-12  09:30:45  Ergonomic keyboard    Amazon   -89.50
2026-10-03  16:15:00  Refund: desk lamp     Amazon    32.00

Press Enter to go back to the menu...
```

Three answers, so three checks: on or after October 1, **and** on or before October 31, **and** the vendor is Amazon. A transaction has to pass **all** of them to show. The two blank questions don't check anything.

The same option, with different answers:

| Start date | End date | Description | Vendor | Amount | It shows |
|---|---|---|---|---|---|
| *(blank)* | *(blank)* | *(blank)* | *(blank)* | *(blank)* | **Every** transaction: nothing was filtered |
| *(blank)* | *(blank)* | *(blank)* | `Amazon` | *(blank)* | Every Amazon transaction, like Search by Vendor |
| `2026-10-01` | `2026-10-31` | *(blank)* | *(blank)* | *(blank)* | Everything in October |
| `2026-01-01` | *(blank)* | `coffee` | *(blank)* | *(blank)* | Every transaction since January 1 with "coffee" in its description |
| *(blank)* | *(blank)* | *(blank)* | *(blank)* | `-89.50` | Every transaction for exactly −$89.50 |

> [!WARNING] Not five separate searches
> A common mistake is to build **6) Search by Start Date**, **7) Search by End Date**, **8) Search by Description**, and so on, each asking one question. That doesn't meet the requirement: the user couldn't answer *"Amazon, in October"*, because each search filters on only one thing. There's **one** option, it asks **all five** questions, and it **combines** the answers.

**Before you code, write two searches of your own** like the ones in the table, and work out by hand which transactions in your file each one should show. Those are your test cases.

#### Building it

**1. Ask for all five first.** Start by telling the user they can skip questions (like the `Press Enter to skip one.` line above), or they won't know. Use `scanner.nextLine().trim()`, not `promptForString()`, because here a blank answer is allowed. Keep the text answers (description, vendor) as `String`s. For the dates, start with `LocalDate startDate = null;`, and only if the answer isn't blank, turn it into a date (`LocalDate.parse`). Then `null` means "the user left it blank". Do the same for the amount, or keep it as text and convert it when you compare. (Want to ask again on a typo? See the stretch goals on [Validating Input](/handouts/validating-input#stretch-goals).)

**2. Then loop through the transactions and decide for each one: does it match?** The trick is a `boolean` named `matches`:

- **Start by assuming it matches:** `boolean matches = true;`
- **Then look for a reason it doesn't.** Each field the user filled in gets its own `if`. If the transaction fails that check, set `matches` to `false`.
- **A blank field never sets it to `false`**, so it doesn't filter anything. That's what makes blank answers work.
- **After all five checks**, show the transaction only if `matches` is still `true`. One failed check is enough to leave it out.

```java
for (Transaction transaction : transactions) {
    // assume it matches, then look for a reason it doesn't
    boolean matches = true;

    if (startDate != null && transaction.getDate().isBefore(startDate)) {
        matches = false;
    }
    if (!vendor.isEmpty() && !transaction.getVendor().equalsIgnoreCase(vendor)) {
        matches = false;
    }
    // ... an if like these for the end date, the description and the amount

    if (matches) {
        // display the transaction, the same way your other reports do
    }
}
```

Each `if` has two parts joined by `&&`: **did the user fill it in?** and **does this transaction fail it?** The first part is what skips blank fields.

- **Dates include the days themselves.** A transaction on the start date matches, so check `isBefore(startDate)` (too early) and `isAfter(endDate)` (too late), not "not equal".
- **Description:** match if the description **contains** what the user typed, ignoring capitals: compare both in lowercase with `toLowerCase()` and `contains()`.
- **Test the combinations:** everything blank (every transaction), only a vendor, only the dates, a vendor plus dates, and a search that finds nothing ("No transactions found").

### More ideas, if there's still time

**Worth it.** Both reuse the loops you've already written, and both make your demo better:

- **The balance on the Home screen:** `Current balance: $12,345.67` above the menu. It's the total of **every** amount, because payments are negative.
- **Totals under each report:** total deposits, total payments and the difference, under Month To Date and the other reports. The same loop, with three running totals.
- **Paging:** show a long list **20 at a time**, then ask `Press Enter for more, or Q to stop:`. Inside your loop, count the transactions you've shown; every time the count reaches a multiple of 20, ask. If the user types `Q`, stop the loop: add a `boolean keepGoing = true;` before it, check it in the loop's condition, and set it to `false`. The user still gets **every** transaction, just one page at a time.

**Fine, but lower value.** Only after everything above:

- **Search by description** on the Reports screen. It's almost a copy of Search by Vendor, and Custom Search already covers it, so it adds little.
- **Colored amounts** (green deposits, red payments) with ANSI color codes. They work in IntelliJ's Run window, but they're easy to overdo, and they make your code harder to read.
- **Emoji in the menus**, like `💰 D) Add Deposit`. Put them **in front of** the option, never in place of its letter or words, and check every screen still lines up (emoji are wider than letters in some consoles).

**Not this time.** These are too big for one week, or not taught yet, and they're how Capstones go wrong:

- **Editing or deleting transactions.** It means rewriting the whole file, and one bug wipes out your data the night before the demo.
- **A database, a window-based app (Swing), or a web page.** They're coming in Weeks 9–12.
- **Streams and lambdas** (Week 7)
- **User accounts, passwords, or more files** besides `transactions.csv`
- **Clearing the screen.** It doesn't work in IntelliJ's Run window.
- **A big feature from AI that you can't explain line by line** (see the [AI Use Policy](/handouts/ai-use-policy)). You'll be asked about your code on demo day.

> [!TIP] Not on this list? Ask yourself three questions
> Does it use only what we've learned? Does it leave the required menus and file exactly as they are? Can I explain every line of it? If any answer is no, save the idea for your portfolio after the academy. When in doubt, ask your instructor.

### Make your own transactions file

**Last, and only if there's time.** It changes nothing in your code, so it's the least important. Keep the starter file if you'd rather spend the time on testing and your README.

The starter file was made with an AI tool, from a prompt like this one. Change the vendors and descriptions to fit your app, or the number of rows, then check a few lines by hand: five columns, separated by `|`, with the header line first.

```text
Could you generate me a file with data as specified below.
All transactions in the application should be read from and saved to a transaction file named transactions.csv.
Each transaction should be saved as a single line with the following format.
date|time|description|vendor|amount
2023-04-15|10:13:25|ergonomic keyboard|Amazon|-89.50
2023-04-15|11:15:00|Invoice 1001 paid|Vertex Logistics|1500.00

1. split the transactions across multiple months and at least two years up until today's date
2. Please use common vendors and keep separate lists for ones used for deposits and payments
3. randomly positive and negative
4. name the file transactions.csv
5. sort the rows by date and time, oldest first
6. give me a preview of the data so I can review
7. in the final generation generate 200 rows
```

Notice the pattern: the prompt gives the **exact format with examples**, lists the **rules** as numbered steps, and asks for a **preview before** the full file, so you can fix problems early.

Before you replace the starter file, check the new one: the header line first, five columns on every line, **oldest first** (your for-each depends on it), dates up to today (so your reports have something to show), and [a line break at the end](#one-transaction-one-line). Then run every report again.

## Demo day (Friday 11/6)

You have **10 minutes**:
1. **Run the app:** go through the screens and a few scenarios. The starter file ends on October 29, 2026, so in November, Month To Date shows only the transactions **you** add. Add a few deposits and payments during the week, so every report has something to show.
2. **Show one interesting piece of code** you wrote, and explain it.
3. **Answer questions** if there's time.

- [ ] Rehearse once, out loud, on Thursday, with a timer
- [ ] Pick your interesting piece of code ahead of time

## Stuck?

1. **20-minute rule:** stuck for 20 minutes? Stop and ask.
2. **Office hours:** Monday through Thursday; the times are in [Key dates](#capstone-1-how-to-do-well) at the top of this page.
3. Look back at the week's demos (`workbook3a` in the [demos repo](https://github.com/craigmckeachie/java-academy-demos)) and the workbook pages. Bad input from the user? See [if or try/catch?](/handouts/if-or-exception).
4. Use the debugger: set a breakpoint and watch your list and variables change.
5. **Crash while loading the file, after it worked before?** Open `transactions.csv` and look for an empty line or two transactions on one line. See [One transaction, one line](#one-transaction-one-line).
