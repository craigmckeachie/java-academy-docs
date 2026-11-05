---
publish: true
title: Week 5
section: Stretch Goals
---

# Week 5 Stretch Goals

For when you've **finished the required exercises** and want more. Stretch work never replaces the required exercises; do those first.

**Pick what interests you.** You don't need to do them all. **Level Up** goes a bit further; **Challenge** pushes harder.

## What "done" means for stretch work

- [ ] It runs, and it handles weird input without crashing
- [ ] Clear names, and small classes and methods that each do one job
- [ ] **You can explain every line** to your instructor. That's the rule even if AI helped you understand something.
- [ ] Committed and pushed. Tell your instructor what you tried; they'll review it with you.

---

## Monday: Objects and classes (Workbook 4a Modules 1–2)

- **Level Up:** in **hotel-operations**, add a derived getter of your own to `Reservation`, such as the weekend surcharge on its own.
- **Challenge:** pick a hotel object from your group's list that isn't in the exercise (a `Guest` or a `Receipt`). Write its KNOWS and DOES lists, then build the class.

## Tuesday: Methods and overloading (Workbook 4a Module 2)

- **Level Up:** the `punchTimeCard()` bonus (p. 36).
- **Level Up:** give `bookRoom` a second form that books one room.
- **Challenge:** after Wednesday's tests, `checkIn()` refuses a room that isn't available, but the caller can't tell. Make it tell the caller it failed, and explain why you chose how to tell them.

## Wednesday: JUnit, BigDecimal and static (Workbook 4a Modules 3–4)

- **Level Up:** write a test for **every** scenario of `Hotel.bookRoom`: enough rooms, exactly enough, too few, suites and basic rooms.
- **Level Up:** in **hotel-operations**, write a `BigDecimal` version of `getReservationTotal()`, with a test.
- **Challenge:** think of a bug you fixed in Capstone 1. Pull the logic into a small class of its own, and write a **regression test** that would have caught it (p. 49).
- **Challenge:** in **static-classes**, handle every mix of optional parts in all three `format` methods, with a test for each.

## Thursday: Class interactions (Workbook 4a Module 5)

- **Level Up:** the Blackjack bonuses (p. 95): any number of players, then hit or stay.
- **Challenge:** count an Ace as 1 when 11 would bust the hand. Write tests for a few tricky hands.
- **Challenge:** show cards with `Symbols.java` and colors with `ColorCodes.java` from WorkshopFiles.zip.

## Friday: Car Dealership workshop

Do these only after **every** menu option works.

- **Level Up:** line up the vehicle list in a clean `printf` table, and print how many vehicles were found.
- **Challenge:** write JUnit tests for the `Dealership` search methods. They return lists and don't print, so they're easy to test.
- **Challenge:** one search that takes several filters at once (make, a maximum price and a color). Any left blank don't filter.

## More practice

- The [practice repository](https://github.com/Pluralsight-ILT/YUU-Java-Academy-Bonus) (Workbook 4a p. 98) and the optional CodeWars kata (pp. 100–104).

---

## Career tracks: shape your stretch work around an internship area

Pick the area you're most interested in and give your stretch work that flavor:

| Internship area | Flavor this week |
|---|---|
| **Software Testing & Automation / Quality Assurance Analysis** | This is your week. For one class, write down every scenario you can think of **before** writing tests, then test them all. Which ones found a bug? |
| **Application Development** | Draw your Car Dealership's classes before you code them. Afterwards, compare your drawing with what you built. |
| **Production Support** | Keep a `debugging-notes.md`: every `NullPointerException` and `static context` error you hit this week, its cause, and the fix. |
| **Software Project Management** | Put the workshop's five phases on a project board, with acceptance criteria and an estimate on each card. Compare the estimates with what really happened. |
| **DevOps / Automation** | Run your tests from the Maven tool window as well as the green arrow. Find out what the `test` step does, and what happens to the build when a test fails. |
| **Server/Cloud or Mobile App Development** | Notice the split between `UserInterface` and `Dealership`. A server does the same thing: the logic doesn't print, and something else shows the result. |
