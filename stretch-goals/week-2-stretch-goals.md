---
publish: true
title: Week 2
section: Stretch Goals
---

# Week 2 Stretch Goals

For when you've **finished the required exercises** and want more. Stretch work never replaces the required exercises; do those first.

**Pick what interests you.** You don't need to do them all. **Level Up** goes a bit further; **Challenge** pushes harder.

## What "done" means for stretch work

- [ ] It runs, and it handles weird input (blank, too big, wrong type) without crashing
- [ ] Clear names, and small methods that each do one thing
- [ ] **You can explain every line** to your instructor. That's the rule even if AI helped you understand something.
- [ ] Committed and pushed. Tell your instructor what you tried; they'll review it with you.

---

## Monday: Formatting output and methods (Workbook 1c)

- **Level Up:** turn your payroll output into a pay stub with thousands separators (`%,.2f`) and lined-up columns (`%-16s`, `%10.2f`). See [Lining up columns](/handouts/string-format#lining-up-columns-width-and-the-flag).
- **Level Up:** in your payroll refactor, add a method that **returns** the whole pay stub as a String built with `String.format`, and have `main` print it.
- **Challenge:** add overtime. Hours over 40 are paid at 1.5×. Put it in its own method, e.g. `calculateGrossPay(double hours, double rate)`, and make sure 40 hours and under still gives the same answer as before.

## Tuesday: Strings and converting (Workbook 2a §1-1, §1-2)

- **Level Up:** write `isValidEmail(String email)`. It returns `true` only if there's exactly one `@` and a `.` somewhere after it. (Hint: compare `indexOf("@")` with `lastIndexOf("@")`.)
- **Level Up:** in **highscore-wins**, print a friendly message instead of crashing when the input is missing the `|` or `:`. (Hint: what does `indexOf` return when it doesn't find something?)
- **Challenge:** in **theater-reservations**, refuse dates in the past. Look up `LocalDate.now()` and `isBefore()` in the Java docs. Learning to read the docs is part of the challenge.
- **Challenge:** make **full-name-parser** handle a suffix too: `Dana L. Wyatt, PhD`.

## Wednesday: StringBuilder and classes (Workbook 2a §1-4, Module 2)

- **Level Up:** in **address-builder**, ask "Is shipping the same as billing? (y/n)" and reuse the billing address if the answer is yes.
- **Level Up:** give your `CellPhone` an `isValidPhoneNumber()` method that checks the `###-###-####` format using String methods.
- **Challenge:** make `dial` refuse to call its own number, and print a message when someone tries.

## Thursday: Loops and arrays (Workbook 2a Module 3)

- **Level Up:** in **roll-the-dice**, count **every** sum from 2 to 12 using an array of 13 counters instead of separate variables.
- **Challenge:** print a text histogram of the dice results using `*` characters, built with a `StringBuilder`:
  ```
   7: ****************
   8: *************
  ```
- **Level Up:** in **vehicle-inventory**, make search by make/model ignore capitals (`equalsIgnoreCase` / `toLowerCase().contains(...)`), and print results as a lined-up `printf` table.
- **Challenge:** in **test-statistics**, after the median bonus, count how many scores fall in each letter-grade range (A/B/C/D/F).
- **Challenge:** Workbook 2b's optional **Palindromes** exercise.

## Friday: Neighborhood Library workshop

Do these only after **every** required screen works.

- **Level Up:** show a count on the home screen, e.g. "12 available, 8 checked out".
- **Level Up:** typing an ID that doesn't exist (or letters instead of a number) shows a friendly message, not a crash.
- **Challenge:** add search by title, ignoring capitals and matching part of the title.
- **Challenge:** add due dates. When a book is checked out, store a `LocalDate` 14 days from today, and add a "Show overdue books" screen.

---

## Career tracks: shape your stretch work around an internship area

Pick the area you're most interested in and give your stretch work that flavor:

| Internship area | Flavor this week |
|---|---|
| **Software Testing & Automation / Quality Assurance Analysis** | Before you code, write a test-case table for an exercise (input → expected output). Then try to break your own program: blank input, letters for numbers, negative numbers. Fix what breaks. |
| **Application Development** | Polish the user experience: clear prompts, lined-up `printf` tables, friendly error messages, a menu that's easy to read. |
| **Production Support** | Get good at finding bugs: do the Workbook 1c **Debugging Project** (§5-1) and Workbook 2b **Palindromes**. Read every stack trace top to bottom, and write down what the bug was and how you found it. |
| **Software Project Management** | Before coding the Friday workshop, write its features as a checklist or user stories in your README. Estimate each one, then record how long it actually took. (Agile and user stories are officially next week, Workbook 3b.) |
| **DevOps / Automation** | Build strong Git habits: small commits with clear messages, and a README that explains exactly how to run your project. |
| **Server/Cloud or Mobile App Development** | Those come later in the course (REST APIs and Spring Boot, Weeks 10–12). For now, practice designing classes with clear methods (inputs in, results out), such as `Book.checkOut(String name)`. That's the same thinking you'll use for APIs. |
