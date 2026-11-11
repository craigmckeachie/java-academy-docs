---
publish: true
title: Wed 11/11
section: Daily Checklists
---

# Wednesday 11/11: Today's Checklist

**Today:** two big ideas. This morning you'll write **unit tests**: code that checks your code. Then classes start working **together**: you'll see how a `Hand` has `Card`s and a `Deck` deals them, and build a game of **Blackjack**.

Check items off as you go. **"Done" = the code runs, it's committed, it's pushed to GitHub, and its link is on the class GitHub sheet.**

## First thing: carry-over from Tuesday

- [ ] **`Room`** and **`Hotel`** are finished and pushed. If you're short on time, these come before the `LocalDateTime` overloads.

## Morning: unit tests (Workbook 4a Module 3)

After the **Unit Testing** demo, set up JUnit along with your instructor (pp. 53–56). Every step is on the [Create a Test Class](/handouts/junit-test-class) page.

- [ ] In **`hotel-operations`**, open `Room`, right-click on the class name → **Generate…** → **Test…**. Choose **JUnit6** (or JUnit5 if that's all you see), leave the method boxes unticked, click **Fix** if you see it, then **OK**.
- [ ] Find `RoomTest` in `src/test/java`, in the same package as `Room`
- [ ] Write your first test with the class, `checkIn_should_markRoomOccupiedAndDirty`, and **see it go green**

> [!TIP] Naming tests
> `method_should_result`, plus `_when...` only for a special case: `checkIn_should_doNothing_whenRoomIsDirty`. More on the [conventions page](/handouts/java-code-conventions#test-methods).

### Exercise: Creating Unit Tests (p. 66)

Each test has **arrange, act, assert**, and a name that follows the pattern, like `checkOut_should_leaveRoomDirty`. Each test checks **one** situation, so `RoomTest` ends up with six tests.

- [ ] **`RoomTest`**: `checkIn()` on an available room makes it occupied and dirty
- [ ] **`RoomTest`**: `checkOut()` leaves the room not occupied, still dirty, and not available
- [ ] **`RoomTest`**: `cleanRoom()` on an empty, dirty room makes it available
- [ ] Run them. These three should pass with Tuesday's code.
- [ ] Commit and push

The questions on p. 66 ask what should happen in the tricky cases. Our answer to all three is **no**: only an available room can be checked in to, and housekeeping can't clean an occupied room.

- [ ] **`RoomTest`**: `checkIn()` on a dirty room does nothing (it stays not occupied)
- [ ] **`RoomTest`**: `checkIn()` on an occupied room does nothing. Build it with `new Room(2, 124.00, true, false)` and check it stays not dirty.
- [ ] **`RoomTest`**: `cleanRoom()` on an occupied room does nothing (it stays dirty)
- [ ] Run them. **All three should fail.** That's the test telling you `Room` doesn't have these rules yet.
- [ ] Add an `if` to `checkIn()` and to `cleanRoom()` until all six pass
- [ ] Commit and push
- [ ] **`EmployeeTest`**: start at 0 hours, punch in at `10` and out at `14`, and expect 4 hours
- [ ] **`EmployeeTest`**: start at 8 hours, punch in at `13` and out at `15`, and expect 10 hours. Leave out the versions that use the current time.
- [ ] Commit and push

## Late morning and afternoon: class interactions (Workbook 4a Module 5)

After part 1 of the **Card Game** demo, read pp. 86–91. After part 2, read pp. 92–94. (The code: [cardgame](https://github.com/craigmckeachie/java-academy-demos/blob/main/src/main/java/com/pluralsight/workbook4a/cardgame/solutions).)

### Exercise: Blackjack (p. 95)

- [ ] Set up the project with the **[Blackjack Starter](/handouts/blackjack-starter)** page: create **`blackjack`**, then copy in `Card`, `Hand` and `Deck` (pp. 89–93). Don't copy them from the PDF.
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

## Finished early?

- [ ] This week's [Stretch Goals](/stretch-goals/week-5-stretch-goals)

## Stuck?

- **[Help Desk](/handouts/help-desk):** today's helper is in the Help Desk breakout room for the first 15–20 minutes of each breakout. Share your screen; you do the typing.
- **Your instructor** is always available. Ask early!
- **Red imports in your test?** Reload Maven: open `pom.xml` and click the small Maven icon, or use the Maven tool window's Reload button.
- **`expected: <15> but was: <0>`?** The test is doing its job. Is the bug in the test, or in the class?
- **Your cards print as `#`?** A card starts face down. Look at `flip()` and `getValue()`.
- **The hand is worth 0?** Check `getPointValue()`, and whether the card is face up when you ask.
- **`NullPointerException` after dealing?** Did the `ArrayList` get created in the constructor?
- **The winner is wrong?** A hand over 21 can't win. Try a hand with two Aces.
