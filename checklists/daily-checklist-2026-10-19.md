---
publish: true
title: Mon 10/19
section: Daily Checklists
---

# Monday 10/19: Today's Checklist

**Today:** finish Workbook 1c. We'll review formatting output in the morning and spend the rest of the day on methods. **Tomorrow we start Workbook 2a** (Strings).

Check items off as you go. **"Done" = the code runs, it's committed, it's pushed to GitHub, and you've sent the repo URL** (where the workbook asks).

## Morning (~2 hours): Formatting output with `String.format` and `printf`

- [ ] Watch the demo: building Strings with concatenation vs. `String.format` vs. `printf` (demo code: `formatting/StringFormatDemo` and `formatting/DecimalFormattingDemo`; finished versions are in `formatting/solutions/`)
- [ ] Read Workbook 1c **pp. 74–76** (print vs. println, formatting output, format specifiers)
  - [ ] I can explain what `%s`, `%d`, `%.2f`, and `%n` do. Keep the [Formatting Output reference](/handouts/string-format) open while you work.
- [ ] **You Do:** open your **payroll-calculator** (p. 88) and change its output to use `printf` with `%.2f` for money
  - [ ] Commit and push
- [ ] Stretch: add thousands separators (`%,.2f` → `$5,239.70`) and line up columns with widths (`%-16s`, `%10.2f`) to make a mini pay stub. See [Lining up columns](/handouts/string-format#lining-up-columns-width-and-the-flag).

## Rest of the day: Methods (Workbook 1c §4-2)

### Part 1: methods that do a task (`void`), with and without parameters

- [ ] Watch the demo: the [Methods Big Picture](/handouts/methods-big-picture) checklist, then the Game Night Scoreboard refactor (demo code: `methods/VoidMethodsDemo` and `methods/ParametersDemo`; finished versions are in `methods/solutions/`)
- [ ] Read **pp. 106–110** (declaring methods, `void`, passing data with parameters)
- [ ] Warm-up: **Try it: label the method**, section 5 of [Anatomy of a Java Method](/handouts/method-anatomy) (name the 7 parts, then check your answers)
- [ ] I can explain the difference between a **parameter** (the slot in the method definition, e.g. `String name`) and an **argument** (the value I pass in, e.g. `player1`, which holds `"Nova"`). Their names don't have to match.
- [ ] **Exercise 1, steps 1–3** (p. 118), in a new project `method-practice`:
  - [ ] `Hello.java`: `sayHello()`, `sayGoodbye()`, `sayGoodMorning()`, all called from `main()`
  - [ ] `Menu.java`: `displayMenu()`, called twice
  - [ ] Bonus (parameter practice): add `sayHelloTo(String name)` to `Hello.java` and call it with two different names
  - [ ] Commit and push

### Part 2: methods that take parameters and give back a value (`return`)

- [ ] Watch the demo: Scoreboard part 2, methods that give back a value (`calculateScore`, `getRank`; demo code: `methods/ReturnValuesDemo`)
- [ ] Read **pp. 111–117** (returning data; pp. 113–117 show passing a `Scanner` to methods as a parameter)
- [ ] I know that arguments are matched to parameters **by position**, so the order matters
- [ ] **Exercise 1, steps 4–5** (p. 119):
  - [ ] `Format.java`: `formatName(first, last)` returns `"Last, First"`
  - [ ] `CompareNumbers.java`: `isEven(int)` and `isPositive(double)` return `true`/`false`
  - [ ] Commit, push, and **send your repo URL** to your instructor
- [ ] **Exercise 2** (p. 120): refactor your **payroll-calculator** into methods
  - [ ] **First**, plan in your notebook how you'll break it up, and talk it over with your breakout room
  - [ ] Then code it, check it still prints the same results, commit, push, and **send your repo URL**

## Finished early?

- [ ] Read ahead: **§4-3 The switch Statement** (pp. 121–127), and try **Exercises – Rental Car Company** (pp. 125–126)
- [ ] Add a method to your payroll refactor that **returns** a formatted pay-stub String built with `String.format`
- [ ] More ideas: this week's [Stretch Goals](/stretch-goals/week-2-stretch-goals)
- [ ] Preview tomorrow: skim Workbook 2a **pp. 5–12** (String methods)

## Stuck?

- **[Help Desk](/handouts/help-desk):** today's helper is in the Help Desk breakout room for the first 15–20 minutes of each breakout. Share your screen; you do the typing.
- **Your instructor** is always available. Ask early!
- **Try the debugger:** set a breakpoint, Step Into your method, and watch the values change.
