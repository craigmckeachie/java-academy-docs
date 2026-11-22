---
publish: true
title: Tue 11/24
section: Daily Checklists
---

# Tuesday 11/24: Today's Checklist

**Today:** in the morning, **working with interfaces** (Workbook 6a §2-2): a list of things that have nothing in common, and **`List`**, the interface behind `ArrayList`. You'll finish your `portfolio-manager` with a `Portfolio` class. In the afternoon, **streams and lambdas** (§4-1 and §4-2): a shorter way to write the loops you already know.

Check items off as you go. **"Done" = the code runs, it's committed, it's pushed to GitHub, and its link is on the class GitHub sheet.**

## First thing (5 min)

- [ ] **`portfolio-manager`** (Exercise 1) is pushed, its README answers p. 30's questions, and its link is on the class GitHub sheet. This morning builds on it.
- [ ] Invited to an **Assessment 2 retake**? The invite has the time. Review the topics you missed first.

## Morning: working with interfaces (Workbook 6a §2-2, 25 min)

After the **Working with Interfaces** demo (the code: [CleanEverythingDemo.java](https://github.com/craigmckeachie/java-academy-demos/blob/main/src/main/java/com/pluralsight/workbook6a/workingwithinterfaces/solutions/CleanEverythingDemo.java) and [ListInterfaceDemo.java](https://github.com/craigmckeachie/java-academy-demos/blob/main/src/main/java/com/pluralsight/workbook6a/workingwithinterfaces/solutions/ListInterfaceDemo.java)), read pp. 32–37.

> [!TIP] Remember
> **`List` is an interface; `ArrayList` implements it.** From now on, write `List<Vehicle> vehicles = new ArrayList<>();`. Import `java.util.List`, not `java.awt.List`.

## Exercise 2: Interfaces, `Portfolio` (p. 38, about 2 hours 30 min)

In yesterday's **`portfolio-manager`** (the starter project), as a new class in `model`. Finish Monday's Part 1 first: `Portfolio` needs `Valuable` and a working `CreditCard.getValue()`.

- [ ] Create **`Portfolio`** with a name, an owner, and a **`List<Valuable>`** of everything it holds
- [ ] An **`add(Valuable valuable)`** method. In `main`, add a house, some gold or jewelry, a bank account **and** a credit card.
- [ ] **`getValue()`**: the total of every valuable's value. Start at `BigDecimal.ZERO` and `.add()` each one.
- [ ] Check it by hand: add up your valuables' values on paper. Same answer?
- [ ] **`getMostValuable()`**: returns the **`Valuable`** with the highest value (not just the number). Start with the first one as the best so far, then compare each one with `compareTo`.
- [ ] **`getLeastValuable()`**: the lowest value. A credit card's value is **negative** (you owe it), so a big credit card balance is the least valuable thing you have.
- [ ] Print all three in `main`, and check them by hand
- [ ] Should `Portfolio` itself implement `Valuable`? It has a `getValue()`. Decide, and say why in your README.
- [ ] Commit and push after each method that works

> [!NOTE] Exercise 3 (`Comparable`, pp. 39–40) is optional
> Do it only after `Portfolio` works. It sorts a list of people, and it's a good warm-up for tomorrow's `sorted()`.

## Afternoon: lambdas and streams (Workbook 6a §4-1 and §4-2, 25 min)

After the **Lambdas and Streams** demo (the code: [FilterDemo.java](https://github.com/craigmckeachie/java-academy-demos/blob/main/src/main/java/com/pluralsight/workbook6a/lambdas/solutions/FilterDemo.java) and [ForEachDemo.java](https://github.com/craigmckeachie/java-academy-demos/blob/main/src/main/java/com/pluralsight/workbook6a/lambdas/solutions/ForEachDemo.java)), read pp. 60–71. Skip p. 66's exercise; ours replaces it.

> [!TIP] Remember
> A **lambda** is a tiny method with no name: `employee -> employee.getSalary().compareTo(limit) > 0`. The input is on the left of the arrow, the answer on the right. **`filter`** keeps the items where the lambda says `true`. **`forEach`** runs the lambda once for each item.

## Streams exercise (Products), Step A and the first streams (about 2 hours 25 min)

Follow the **[Streams: Products](/handouts/streams-exercise)** page.

- [ ] **Setup:** create `product-streams`, paste in `Product` and the starter, and push it
- [ ] **Step A, all five tasks:** the loops. Check each answer against **When it's right**.
- [ ] **Step B, Tasks 5, 1 and 3:** `forEach`, `filter` with `toList()`, and `filter` with `count()`
- [ ] Every loop stays in a comment above its stream
- [ ] Commit after every task that works (two commits per task: the loop, then the stream)
- [ ] Tasks 2 and 4's streams wait for tomorrow's demo (`map` and `reduce`)

## Finished early?

- [ ] Exercise 3: `Comparable` (pp. 39–40)
- [ ] p. 38's **Bonus**: ask the user what kind of asset to add, and its values
- [ ] More ideas: the [Weeks 6–7 Stretch Goals](/stretch-goals/week-6-7-stretch-goals)

## Stuck?

- **[Help Desk](/handouts/help-desk):** today's helper is in the Help Desk breakout room for the first 15–20 minutes of each breakout. Share your screen; you do the typing.
- **Your instructor** is always available. Ask early!
- **`List` is red, or "cannot find symbol: method add"?** You imported `java.awt.List`. Change the import to `java.util.List`.
- **"Incompatible types: ... LinkedList ... ArrayList"?** The variable's type is `ArrayList`. Make it `List`.
- **`getMostValuable()` returns the wrong one?** `compareTo` gives a number: more than 0 means "bigger". Print each value as you loop, and check which one your code kept.
- **"bad operand types for binary operator '+'"?** `+` doesn't work on `BigDecimal`. Use `.add()`.
- **Missing a `;` or a `)` after a lambda?** A lambda with `{ }` ends with `});`. Count the brackets.
- **`.toList()` is red?** Your project isn't on Java 17. Use `.collect(Collectors.toList())` instead, or ask your instructor.

## End of day

- [ ] `portfolio-manager` and `product-streams` are pushed, and both links are on the class GitHub sheet
- [ ] Update your README: what `Portfolio` does, and your answer about whether it should implement `Valuable`
