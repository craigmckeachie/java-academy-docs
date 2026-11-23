---
publish: true
title: Tue 11/24
section: Daily Checklists
---

# Tuesday 11/24: Today's Checklist

**Today:** first, a short look at **`List`**, the interface behind `ArrayList` (Workbook 6a §2-2). Then you'll add a `Portfolio` class to your `portfolio-manager`. Late in the morning, **lambdas and streams** (§4-1 and §4-2): a shorter way to write the loops you already know. You'll start the Streams exercise before lunch and have the whole afternoon for it.

Check items off as you go. **"Done" = the code runs, it's committed, it's pushed to GitHub, and its link is on the class GitHub sheet.**

## First thing (5 min)

- [ ] **`portfolio-manager`** (yesterday's Portfolio Manager exercise) is pushed, its README answers p. 30's questions, and its link is on the class GitHub sheet. This morning builds on it.
- [ ] Invited to an **Assessment 2 retake**? The invite has the time. Review the topics you missed first.

## Morning: the `List` interface (Workbook 6a §2-2, 10 min)

After the **Working with Interfaces** demo (the code: [ListInterfaceDemo.java](https://github.com/craigmckeachie/java-academy-demos/blob/main/src/main/java/com/pluralsight/workbook6a/workingwithinterfaces/solutions/ListInterfaceDemo.java)), read pp. 32–37. Wondering when you'd write an interface of your own? See [Why Interfaces?](/handouts/why-interfaces).

> [!TIP] Remember
> **`List` is an interface; `ArrayList` implements it.** From now on, write `List<Valuable> valuables = new ArrayList<>();`. Import `java.util.List`, not `java.awt.List`.

## Portfolio exercise: add `Portfolio` to `portfolio-manager` (p. 38, about 2 hours)

Keep working in **`portfolio-manager`**, the project you started from the zip yesterday. `Portfolio` is a new class in its `model` package. Stop when the Lambdas demo starts, wherever you are: what's left goes first in tomorrow's catch-up.

Before you start, make sure yesterday's **Part 1** is done: the `Valuable` interface exists, and `CreditCard.getValue()` gives back a **negative** number. `Portfolio` uses both.

- [ ] Create **`Portfolio`** with a name, an owner, and a **`List<Valuable>`** of everything it holds
- [ ] An **`add(Valuable valuable)`** method. In `main`, add a house, some gold or jewelry, a bank account **and** a credit card.
- [ ] **`getValue()`**: the total of every valuable's value. Start at `BigDecimal.ZERO` and `.add()` each one.
- [ ] Check it by hand: add up your valuables' values on paper. Same answer?
- [ ] **`getMostValuable()`**: returns the **`Valuable`** with the highest value (not just the number). Keep the first valuable as the "best so far." Loop through all of them. When one's value is bigger (`compareTo(...) > 0`), it becomes the new best so far.
- [ ] **`getLeastValuable()`**: returns the **`Valuable`** with the lowest value. A credit card's value is **negative** (you owe it), so a big credit card balance is the least valuable thing you have. Same pattern as `getMostValuable()`, but keep the one that's **smaller** (`compareTo(...) < 0`).
- [ ] Print all three in `main`, and check them by hand
- [ ] Make `Portfolio` implement `Valuable`, like the finished diagram. Why does that make sense? Say why in your README, and what it lets a portfolio hold. ([Why Interfaces?](/handouts/why-interfaces) has three questions to ask.)
- [ ] Commit and push after each method that works

> [!NOTE] The Comparable exercise (pp. 39–40) is optional
> Do it only after `Portfolio` works. It sorts a list of people, and it's a good warm-up for tomorrow's `sorted()`. [Sorting §2](/handouts/sorting#_2-way-1-comparable-inside-the-class) explains `Comparable`.

## Late morning: lambdas and streams (Workbook 6a §4-1 and §4-2, 25 min)

During the **Lambdas and Streams** demo (the code: [FilterDemo.java](https://github.com/craigmckeachie/java-academy-demos/blob/main/src/main/java/com/pluralsight/workbook6a/lambdas/solutions/FilterDemo.java) and [ForEachDemo.java](https://github.com/craigmckeachie/java-academy-demos/blob/main/src/main/java/com/pluralsight/workbook6a/lambdas/solutions/ForEachDemo.java)), we'll look at two pictures together: [Stream Anatomy §2](/handouts/streams#_2-watch-the-items-go-through) and [Lambdas §1](/handouts/lambdas#_1-a-lambda-is-a-method-without-the-name).

After it, read pp. 60–71. Skip p. 66's exercise: the Streams exercise below replaces it. Then read [Stream Anatomy](/handouts/streams) §1 (the parts of a stream) and [Lambdas](/handouts/lambdas) §2 (the shapes a lambda comes in).

> [!TIP] Remember
> A **lambda** is a tiny method with no name: `employee -> employee.getSalary().compareTo(limit) > 0`. It takes one employee and answers `true` or `false`: is this salary over the limit? The input is on the left of the arrow, the answer on the right. **`filter`** keeps the items where the lambda says `true`. **`forEach`** runs the lambda once for each item.

## Streams exercise (Products): the loops, then the first streams (before lunch and all afternoon, about 3 hours)

Do the **[Streams: Products](/handouts/streams-exercise)** exercise. Its page has the starter code and every step; the list below is the plan for today. Before lunch, aim for the setup and your first loop. Take your time with the streams: they're the new part.

- [ ] **Setup:** create `product-streams`, paste in `Product` and the starter, and push it
- [ ] **Step A, all five tasks:** the loops. Check each answer against **When it's right**.
- [ ] Before Step B (5 min): [Stream Anatomy §6](/handouts/streams#_6-try-it-label-the-stream), "label the stream". Check your answers.
- [ ] **Step B, three of the streams:** Task 5 with `forEach`, Task 1 with `filter` and `toList()`, and Task 3 with `filter` and `count()`
- [ ] Keep each loop, in a comment, above its stream
- [ ] Commit after every task that works (two commits per task: the loop, then the stream)
- [ ] Leave the streams for Tasks 2 and 4 until tomorrow: they need `map` and `reduce`, from tomorrow's demo

## Finished early?

- [ ] The Comparable exercise (pp. 39–40)
- [ ] p. 38's **Bonus**: ask the user what kind of asset to add, and its values
- [ ] More ideas: the [Weeks 6–7 Stretch Goals](/stretch-goals/week-6-7-stretch-goals)

## Stuck?

- **[Help Desk](/handouts/help-desk):** today's helper is in the Help Desk breakout room for the first 15–20 minutes of each breakout. Share your screen; you do the typing.
- **Your instructor** is always available. Ask early!
- **Not sure what each part of a stream does?** [Stream Anatomy](/handouts/streams) shows them as a picture.
- **`List` is red, or "cannot find symbol: method add"?** You imported `java.awt.List`. Change the import to `java.util.List`.
- **"Incompatible types: ... LinkedList ... ArrayList"?** The variable's type is `ArrayList`. Make it `List`.
- **`getMostValuable()` returns the wrong one?** `compareTo` gives a number: more than 0 means "bigger". Print each value as you loop, and check which one your code kept.
- **"bad operand types for binary operator '+'"?** `+` doesn't work on `BigDecimal`. Use `.add()`.
- **Missing a `;` or a `)` after a lambda?** A lambda with `{ }` ends with `});`. Count the brackets.
- **`.toList()` is red?** Your project isn't on Java 17. Use `.collect(Collectors.toList())` instead, or ask your instructor.

## End of day

- [ ] `portfolio-manager` and `product-streams` are pushed, and both links are on the class GitHub sheet
- [ ] README: one or two sentences on what `Portfolio` does
