---
publish: true
title: Week 3
section: Stretch Goals
---

# Week 3 Stretch Goals

For when you've **finished the required exercises** and want more. Stretch work never replaces the required exercises; do those first.

**Pick what interests you.** You don't need to do them all. **Level Up** goes a bit further; **Challenge** pushes harder.

## What "done" means for stretch work

- [ ] It runs, and it handles weird input (blank, a missing file, letters for numbers) without crashing
- [ ] Clear names, and small methods that each do one thing
- [ ] **You can explain every line** to your instructor. That's the rule even if AI helped you understand something.
- [ ] Committed and pushed. Tell your instructor what you tried; they'll review it with you.

---

## Monday: Exceptions and reading files (Workbook 3a Module 1)

- **Level Up:** do both **famous-quotes** bonuses (p. 9): keep asking for another quote, keep going after a bad number (the `try/catch` goes inside the loop), and add a random-quote option.
- **Level Up:** in **bedtime-stories**, when the file isn't found, print "Sorry, I couldn't find that story" and ask again until the user types one that exists.
- **Challenge:** in **bedtime-stories**, print a summary after the story: how many lines, how many words (`split(" ")` on each line), and the longest line.
- **Challenge:** in **famous-quotes**, also catch typing letters instead of a number. Look up which exception `nextInt()` throws, and give it its own friendly message.

## Tuesday: Writing files and dates (Workbook 3a Module 2)

- **Level Up:** the **payroll-calculator** JSON bonus (p. 23).
- **Level Up:** in **payroll-calculator**, pay overtime: hours over 40 at 1.5 times the rate, in `getGrossPay()`. Check that 40 hours and under gives the same answer as before.
- **Challenge:** in **search-engine-logger**, add a menu option that reads `logs.txt` back and prints only **today's** searches. Use `LocalDate.parse` on the first 10 characters of each line (Workbook 2a §1-2).
- **Challenge:** in **format-dates**, do the GMT line and the challenge line on p. 33. Look up `ZonedDateTime` and `ZoneId` in the Java docs.

## Wednesday: ArrayList (Workbook 3a Modules 3–4)

- **Level Up:** finish all three **search-inventory** bonuses (pp. 49–50): load from `inventory.csv`, sort by name, and the menu.
- **Level Up:** in the menu's **Add a new product**, also **write** the new product to `inventory.csv` (append), so it's still there the next time the program runs.
- **Challenge:** do **search-inventory-map** (p. 62) too, then explain in your README when a `HashMap` is the better choice and when an `ArrayList` is.
- **Challenge:** count how many times each word appears in a bedtime story, using a `HashMap<String, Integer>`. Print the 5 most common words.

## Thursday: Agile and READMEs (Workbook 3b)

- **Level Up:** on your Hardware Store board, write the optional user stories (p. 20) into the cards, put acceptance criteria on **every** card, and convert one into an issue.
- **Level Up:** give **every** Week 3 repo a README with a screenshot.
- **Challenge:** in one README, add a "What I learned" section and a "What I'd do next" section. Explain one bug you hit and how you found it.

## Friday: Online Store workshop

Do these only after **every** required screen works.

- **Level Up:** the Check Out bonus (p. 4): cash payment, change, a receipt on screen, and an empty cart.
- **Level Up:** show each product in the cart once, with a quantity.
- **Challenge:** write each receipt to its own file, named with the date and time (for example `receipt-2026-10-30-143005.txt`), using a `DateTimeFormatter`.

---

## Career tracks: shape your stretch work around an internship area

Pick the area you're most interested in and give your stretch work that flavor:

| Internship area | Flavor this week |
|---|---|
| **Software Testing & Automation / Quality Assurance Analysis** | Make a "bad files" folder: an empty file, a line with a missing `\|`, a price that says "abc". Run your programs on each one, write down what happens, and make each one fail with a friendly message instead of a crash. |
| **Application Development** | Polish the Online Store: lined-up `printf` tables, clear menus, and a receipt that looks like a real one. |
| **Production Support** | Read every stack trace from top to bottom this week. Keep a short log of each exception you hit (its name, the line, the cause, the fix) in a `debugging-notes.md` file. |
| **Software Project Management** | Plan your Capstone on a project board **before** Monday: a card for every feature, acceptance criteria on each, in priority order, and an estimate on each card. Next Friday, compare the estimates with what really happened. |
| **DevOps / Automation** | Make sure every repo has a README someone else could run it from, a `.gitignore` that keeps out files the program writes, and small commits with clear messages. |
| **Server/Cloud or Mobile App Development** | Those come later in the course (REST APIs and Spring Boot, Weeks 10–12). For now, notice that reading and writing CSV lines is what a server does with data, just with files instead of a database. |
