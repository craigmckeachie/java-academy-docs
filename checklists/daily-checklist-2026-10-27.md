---
publish: true
title: Tue 10/27
section: Daily Checklists
---

# Tuesday 10/27: Today's Checklist

**Today:** yesterday you **read** files; today you **write** them (Workbook 3a §2-1), and in the afternoon you work with **dates and times** (§2-2). Both show up in next week's Capstone.

Check items off as you go. **"Done" = the code runs, it's committed, it's pushed to GitHub, and you've sent the repo URL.**

## First thing: carry-over from Monday

- [ ] **Famous Quotes** and **Bedtime Stories** are committed, pushed, and the URLs are sent
- [ ] **Payroll Calculator, part 1** (pp. 17–18), if you didn't get to it. You need it this morning:
  - [ ] Create the project **`payroll-calculator`** in `workbook-3` and copy `employees.csv` into its **root folder**
  - [ ] An `Employee` class with `employeeId`, `name`, `hoursWorked`, `payRate`, a constructor, getters, and `getGrossPay()`
  - [ ] Read the file with the read loop. For each line: `split("\\|")`, turn the parts into the right types (`Integer.parseInt`, `Double.parseDouble`), and create an `Employee`
  - [ ] Print each employee's id, name and gross pay with `printf`
  - [ ] The first line of `employees.csv` is a **header** (`id|name|...`). Read it once **before** the loop so you don't try to turn "id" into a number.
  - [ ] Commit and push

## Morning: writing to files (Workbook 3a §2-1)

After the **Writing to Files** demo, read pp. 20–22.

### Exercise 1: Payroll Calculator, part 2 (p. 23)

- [ ] Ask the user for the name of the file to **read** (`employees.csv`) and the name of the payroll file to **create** (for example `payroll-sept-2023.csv`)
- [ ] Before the read loop, open a `FileWriter` and `BufferedWriter` for the new file
- [ ] Write the header line first: `id|name|gross pay`
- [ ] Inside the read loop, write one line per employee instead of printing it, for example `111|Cameron Tay|3277.65`. Build the line with `String.format("%d|%s|%.2f\n", ...)`.
- [ ] Close **both** the reader and the writer after the loop
- [ ] Run it, then open the new file in IntelliJ (it's in the project root). Check a couple of the gross pays by hand.
- [ ] Commit, push, and **send the repo URL**

> [!TIP] Optional (if time): the p. 23 bonus
> If the payroll file name ends in `.json` (`endsWith(".json")`), write the JSON format shown on p. 23 instead.

## Afternoon: dates (Workbook 3a §2-2)

After the **Date Basics** demo, read pp. 24–32.

### Exercise 2: format-dates (p. 33)

- [ ] Create the project **`format-dates`** in `workbook-3`, with a git repository. Share it to GitHub.
- [ ] Get the current date and time with `LocalDateTime.now()`
- [ ] Print it in each format from p. 33, with one `DateTimeFormatter` per line:
  - [ ] `04/22/2026`
  - [ ] `2026-04-22`
  - [ ] `Wednesday, April 22, 2026`
- [ ] Commit, push, and **send the repo URL**

> [!TIP] Optional (if time)
> The GMT line and the challenge line on p. 33 need time zones, which aren't in the workbook. Try them if you're curious.

### Exercise 3: search-engine-logger (p. 34)

- [ ] Create the project **`search-engine-logger`** in `workbook-3`, with a git repository. Share it to GitHub.
- [ ] Write a method `logAction(String action)` that adds **one line** to `logs.txt`: the date and time in `yyyy-MM-dd HH:mm:ss` format, a space, then the action
- [ ] **End each line with `\n`**, at the **end** of the line, never at the start (`"... " + action + "\n"`). Then the file always ends with a line break, ready for the next line. Your Capstone's `transactions.csv` uses the same rule.
- [ ] Open the `FileWriter` with **`true`** so each line is **added**, not replacing the file
- [ ] In `main`: log `launch`, then loop asking for a search term (X or x to exit). Log each search as `search : ` plus the term, and log `exit` at the end.
- [ ] Run it twice, then open `logs.txt`. Lines from **both** runs should be there, each entry on its **own line**, with no empty lines between them. Click at the very end: the cursor should land on **one** empty line after the last entry (the line break at the end).
- [ ] Commit, push, and **send the repo URL**

## Finished early?

- [ ] In Search Engine Logger, add an option that **reads** `logs.txt` and prints only today's searches
- [ ] More ideas: this week's [Stretch Goals](/stretch-goals/week-3-stretch-goals)

## Stuck?

- **[Help Desk](/handouts/help-desk):** today's helper is in the Help Desk breakout room for the first 15–20 minutes of each breakout. Share your screen; you do the typing.
- **Your instructor** is always available. Ask early!
- **The new file is empty?** You forgot to `close()` the writer.
- **Everything ends up on one line?** `write` doesn't add a new line for you. End each line with `\n`.
- **An empty line in the file?** The `\n` is at the **start** of a line instead of the end, or an extra Enter was typed into the file. Put `\n` only at the end.
- **Only one line in `logs.txt`?** Pass `true` as the second argument to `new FileWriter(...)`.
- **`NumberFormatException: For input string: "id"`?** That's the header line. Read it once before the loop.
