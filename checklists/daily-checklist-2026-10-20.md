---
publish: true
title: Tue 10/20
section: Daily Checklists
---

# Tuesday 10/20: Today's Checklist

**Today:** start **Workbook 2a, Module 1: Working with Strings**. Create a new folder **`workbook-2`** in your `pluralsight` folder (p. 13). All of this week's projects go there.

Check items off as you go. **"Done" = the code runs, it's committed, it's pushed to GitHub, and you've sent the repo URL.**

## Morning: String methods (§1-1)

- [ ] Watch the demo: the workbook's String examples (escaping quotes, `.equals`, `trim`, `toUpperCase`, `indexOf`, `substring`, `split`; demo code in `strings/`: `EscapingQuotesDemo`, `ComparingStringsDemo`, `ChangingStringsDemo`, `CheckingStringsDemo`, `SearchingStringsDemo`, `SplitDemo`)
- [ ] Read **pp. 5–12** (escaping quotes, comparing Strings, the String method examples). Escapes like `\"` and `\n` are in [Special Characters](/handouts/special-characters).
  - [ ] I know why we use `.equals()` and not `==` to compare Strings
  - [ ] I know that positions start at **0**, and that `substring(start, end)` does **not** include `end`
- [ ] **Exercise 1: full-name-generator** (pp. 13–14)
  - [ ] Leave out the middle name or suffix when they're blank, and put a comma before a suffix
  - [ ] Trim every input
  - [ ] Commit, push, send repo URL
- [ ] **Exercise 2: full-name-parser** (p. 15)
  - [ ] Handles both "first last" and "first middle last"
  - [ ] Commit, push, send repo URL

## Afternoon: Converting Strings (§1-2)

- [ ] Watch the demo: the workbook's conversion examples (splitting on `|`, `parseInt`, `parseDouble`, `LocalDate.parse`; demo code: `converting/ParseNumbersDemo`, `ParseDatesDemo`)
- [ ] Read **pp. 16–19** (Strings to numbers, Strings to dates, the `DateTimeFormatter` pattern table). Not sure whether you need `parseInt` or `parseDouble`? See [Choosing a Data Type](/handouts/choosing-a-data-type).
- [ ] **Exercise 3: highscore-wins** (p. 20)
  - [ ] Works for a home win, a visitor win, **and a tie**
  - [ ] Commit, push, send repo URL
- [ ] **Exercise 4: theater-reservations** (p. 21)
  - [ ] Says "1 ticket" vs. "3 tickets" (no "s" for one)
  - [ ] Commit, push, send repo URL
- [ ] Read **§1-3 Using AI** (pp. 22–26). We'll talk about it as a class.

## If there's time today (otherwise first thing Wednesday): StringBuilder (§1-4)

- [ ] Watch the demo: the workbook's StringBuilder example (why Strings can't change; `StringBuilder.append`; demo code: `stringbuilder/StringBuilderDemo`)
- [ ] Read **pp. 27–29**
- [ ] **Exercise 5: address-builder** (p. 30). Use `append` as each answer comes in.
  - [ ] Commit, push, send repo URL

## Finished early?

- [ ] Stretch from today's topics: check whether an email is valid (exactly one `@`, and a `.` after it), or change `ParseNumbersDemo` so the user types the `id|description|quantity|price` line with a `Scanner`
- [ ] More ideas: this week's [Stretch Goals](/stretch-goals/week-2-stretch-goals)
- [ ] Practice repository / CodeWars (Workbook 2a §4-1, §4-2)
- [ ] Preview Wednesday: skim **pp. 32–39** (Classes)

## Stuck?

- **[Help Desk](/handouts/help-desk):** today's helper is in the Help Desk breakout room for the first 15–20 minutes of each breakout. Share your screen; you do the typing.
- **Your instructor** is always available. Ask early!
- **Try the debugger:** use Evaluate Expression to test a String method (e.g. `name.indexOf(" ")`) before you write the code.
