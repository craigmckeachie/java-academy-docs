---
publish: true
title: Thu 11/12
section: Daily Checklists
---

# Thursday 11/12: Today's Checklist

**Today:** class starts at **10:45**. You'll meet **`BigDecimal`**, the right type for money, and finally find out what **`static`** means. Both show up in this week's workshop, the **Car Dealership**, which you'll start this afternoon.

Check items off as you go. **"Done" = the code runs, it's committed, it's pushed to GitHub, and its link is on the class GitHub sheet.**

## First thing: carry-over from Wednesday

- [ ] **`hotel-operations`**: all six `RoomTest` tests pass, and it's pushed
- [ ] **`blackjack`**: two players and a winner work, and it's pushed. Not done? Keep going this weekend; it's due **Monday**.

## Late morning: BigDecimal (Workbook 4a §4-1)

After the **BigDecimal** demo (the code: [BankAccount.java](https://github.com/craigmckeachie/java-academy-demos/blob/main/src/main/java/com/pluralsight/workbook4a/bigdecimal/solutions/BankAccount.java)), read pp. 69–71.

### Exercise: money-math (p. 72)

- [ ] Create the project **`money-math`** in `workbook-4`, with a git repository. Share it to GitHub as a **public** repo.
- [ ] Steps 1–2: a `float`, a `double` and a `BigDecimal` that go up by ten cents, 10 times, printed on one line each time
- [ ] Steps 3–4: reset them, add 19.99 a thousand times, and print them after the loop
- [ ] Step 5: compare the three. **Behind? This one can wait.**
- [ ] Answer the three questions at the end of p. 72 in a **README**
- [ ] Commit, push, and **add the link to the class GitHub sheet**. Not done? It's due **Monday**.

## Early afternoon: static (Workbook 4a §4-2)

After the **Static** demo, read pp. 74–81.

### Exercise: static-classes (pp. 82–83)

Start it today. Whatever isn't done is due **Monday**.

- [ ] Create the project **`static-classes`** in `workbook-4`, with a git repository. Share it to GitHub as a **public** repo.
- [ ] Create **`NameFormatter`** with a **private** constructor
- [ ] Write `format(String firstName, String lastName)`, the easiest one
- [ ] Write the five-parameter `format`
- [ ] Write `format(String fullName)`. **Behind? This one can wait.**
- [ ] Add unit tests with a few different names. Compare with the formats on p. 82.
- [ ] Commit, push, and **add the link to the class GitHub sheet**

## Late afternoon: Car Dealership kickoff (Workshop 4w)

- [ ] Read Workshop 4w pp. 2–4 along with your instructor
- [ ] Create the project **`car-dealership`** in your `workshops` folder, with a **public** GitHub repo. Add the link to the class GitHub sheet.
- [ ] Copy **`inventory.csv`** from WorkshopFiles.zip into the project's **root folder**, and keep a backup copy
- [ ] Start **Phase 1** (p. 5): `Vehicle` and `Dealership`
- [ ] Commit and push

> [!NOTE] One change from the workbook
> The diagram says `List<Vehicle>`. **Write `ArrayList<Vehicle>`.** You'll learn what `List` is in Week 7.

Your pre-work instructor is with you for the last hour today and all day tomorrow.

## Finished early?

- [ ] This week's [Stretch Goals](/stretch-goals/week-5-stretch-goals)

## Stuck?

- **[Help Desk](/handouts/help-desk):** today's helper is in the Help Desk breakout room for the first 15–20 minutes of each breakout. Share your screen; you do the typing.
- **Your instructor** is always available. Ask early!
- **The `BigDecimal` didn't change?** `total.add(price)` gives you a new value. Write `total = total.add(price);`.
- **`non-static method cannot be referenced from a static context`?** You're in a static method and asked for something that belongs to an object. Usually the fix is to create the object, not to add `static`.
