---
publish: true
title: Thu 11/12
section: Daily Checklists
---

# Thursday 11/12: Today's Checklist

**Today:** class starts at **10:45**. Most of today is for finishing **`blackjack`**. After lunch you'll meet **`BigDecimal`**, the right type for money, and get a quick first look at what **`static`** means. Both show up in this week's workshop, the **Car Dealership**, which starts for everyone **tomorrow**.

Check items off as you go. **"Done" = the code runs, it's committed, it's pushed to GitHub, and its link is on the class GitHub sheet.**

## Morning: finish blackjack (p. 95)

The rules are on the [Blackjack Rules](/handouts/blackjack-rules) page. Get the basic game working first, and run it after each step:

- [ ] Ask for two players' names, and decide where a name lives
- [ ] Create and shuffle a deck, and deal 2 cards to each player
- [ ] Show each player's hand and its value
- [ ] Announce who's closest to 21 without going over. Check a few rounds by hand: both over 21, one over 21, and a tie.
- [ ] Commit, push, and **add the link to the class GitHub sheet**
- [ ] **Only then**, the bonuses: any number of players, hit or stay, and an Ace counting 1 when 11 would bust

Not done today? Keep going this weekend; it's due **Monday**.

Also left from Wednesday:

- [ ] **`hotel-operations`**: all six `RoomTest` tests pass, and it's pushed

## Early afternoon: BigDecimal (Workbook 4a §4-1)

After the **BigDecimal** demo (the code: [BankAccount.java](https://github.com/craigmckeachie/java-academy-demos/blob/main/src/main/java/com/pluralsight/workbook4a/bigdecimal/solutions/BankAccount.java)), read pp. 69–71.

### Exercise: money-math (p. 72)

**Optional:** good practice with `BigDecimal`, but not required. Do it if you have time, after `blackjack` and the Car Dealership.

- [ ] Create the project **`money-math`** in `workbook-4`, with a git repository. Share it to GitHub as a **public** repo.
- [ ] Steps 1–2: a `float`, a `double` and a `BigDecimal` that go up by ten cents, 10 times, printed on one line each time
- [ ] Steps 3–4: reset them, add 19.99 a thousand times, and print them after the loop
- [ ] Step 5: compare the three. **Behind? This one can wait.**
- [ ] Answer the three questions at the end of p. 72 in a **README**
- [ ] Commit, push, and **add the link to the class GitHub sheet**

## A quick look at static (Workbook 4a §4-2)

Your instructor gives a short first look at **`static`** today. The reading is pp. 74–81, whenever you have time.

### Exercise: static-classes (pp. 82–83)

**Optional:** not required, but it's good practice for `static`, which is on the next Knowledge Assessment. Do it if you have time, after `blackjack` and the Car Dealership.

- [ ] Create the project **`static-classes`** in `workbook-4`, with a git repository. Share it to GitHub as a **public** repo.
- [ ] Create **`NameFormatter`** with a **private** constructor
- [ ] Write `format(String firstName, String lastName)`, the easiest one
- [ ] Write the five-parameter `format`
- [ ] Write `format(String fullName)`. **Behind? This one can wait.**
- [ ] Add unit tests with a few different names. Compare with the formats on p. 82.
- [ ] Commit, push, and **add the link to the class GitHub sheet**

## The rest of today

- [ ] **Still on `blackjack`?** Keep going; that's the focus for today.
- [ ] **`blackjack` done and pushed?** You can get a head start on the **Car Dealership** (Workshop 4w), which everyone starts together tomorrow:
  - Read Workshop 4w pp. 2–4
  - Create the project **`car-dealership`** in your `workshops` folder, with a **public** GitHub repo, and add the link to the class GitHub sheet
  - Copy **`inventory.csv`** from WorkshopFiles.zip into the project's **root folder**, and keep a backup copy
  - Start **Phase 1** (p. 5): `Vehicle` and `Dealership`. Write `ArrayList<Vehicle>` where the diagram says `List<Vehicle>`.

Your pre-work instructor is with you for the last hour today and all day tomorrow.

## Finished early?

- [ ] This week's [Stretch Goals](/stretch-goals/week-5-stretch-goals)

## Stuck?

- **[Help Desk](/handouts/help-desk):** today's helper is in the Help Desk breakout room for the first 15–20 minutes of each breakout. Share your screen; you do the typing.
- **Your instructor** is always available. Ask early!
- **The `BigDecimal` didn't change?** `total.add(price)` gives you a new value. Write `total = total.add(price);`.
- **`non-static method cannot be referenced from a static context`?** You're in a static method and asked for something that belongs to an object. Usually the fix is to create the object, not to add `static`.
