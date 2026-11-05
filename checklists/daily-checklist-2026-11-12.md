---
publish: true
title: Thu 11/12
section: Daily Checklists
---

# Thursday 11/12: Today's Checklist

**Today:** classes start working **together**. You'll see how a `Hand` has `Card`s and a `Deck` deals them, then build a game of **Blackjack**. Late this afternoon you'll start this week's workshop, the **Car Dealership**.

Check items off as you go. **"Done" = the code runs, it's committed, it's pushed to GitHub, and its link is on the class GitHub sheet.**

## First thing: carry-over from Wednesday

- [ ] **`money-math`** is pushed
- [ ] **`static-classes`**: finish it after the first demo if it isn't done

## Morning: class interactions (Workbook 4a Module 5)

After part 1 of the **Card Game** demo, read pp. 86–91. After part 2, read pp. 92–94. (The code: [cardgame](https://github.com/craigmckeachie/java-academy-demos/blob/main/src/main/java/com/pluralsight/workbook4a/cardgame/solutions).)

### Exercise: Blackjack (p. 95)

- [ ] Create the project **`blackjack`** in `workbook-4`, with a git repository. Share it to GitHub as a **public** repo.
- [ ] Create `Card`, `Hand` and `Deck`, as shown on pp. 89–93
- [ ] Finish `getPointValue()`: number cards are worth their number, face cards 10, an Ace 11
- [ ] Commit and push
- [ ] Ask for two players' names. Decide where a player's name should live.
- [ ] Create and **shuffle** a deck, then deal 2 cards to each hand
- [ ] Show each player's hand and its value
- [ ] Find who's closest to 21 without going over, and announce the winner
- [ ] Play a few rounds and check the math by hand
- [ ] Commit, push, and **add the link to the class GitHub sheet**

> [!TIP] Optional (if time): the bonuses (p. 95)
> Only once two players and a winner work: ask how many players, hit or stay, and count an Ace as 1 when 11 would bust the hand. `Symbols.java` and `ColorCodes.java` are in WorkshopFiles.zip.

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
- **Your cards print as `#`?** A card starts face down. Look at `flip()` and `getValue()`.
- **The hand is worth 0?** Check `getPointValue()`, and whether the card is face up when you ask.
- **`NullPointerException` after dealing?** Did the `ArrayList` get created in the constructor?
- **The winner is wrong?** A hand over 21 can't win. Try a hand with two Aces.
