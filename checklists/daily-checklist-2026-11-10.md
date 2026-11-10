---
publish: true
title: Tue 11/10
section: Daily Checklists
---

# Tuesday 11/10: Today's Checklist

**Today:** yesterday's classes knew things. Today they **do** things. This morning you'll add methods that change an object, and this afternoon you'll give a method or constructor more than one form, which is called **overloading**.

Check items off as you go. **"Done" = the code runs, it's committed, it's pushed to GitHub, and its link is on the class GitHub sheet.**

## First thing: carry-over from Monday

- [ ] **`Room`**, **`Reservation`** and **`Employee`** are committed and pushed, and `hotel-operations` is linked on the sheet

## Morning: methods (Workbook 4a §2-2)

After the **Methods** demo (the code: [Car.java](https://github.com/craigmckeachie/java-academy-demos/blob/main/src/main/java/com/pluralsight/workbook4a/methods/solutions/Car.java)), read pp. 32–35.

### Exercise 2: Creating Classes (p. 36)

Keep working in **`hotel-operations`**.

> [!IMPORTANT] These methods are short, with no if statements
> Each `Room` method just changes its variables, in one or two lines. Don't try to block anything yet. "Cleaned before another guest" already works: after check out the room is still dirty, so `isAvailable()` says `false`. On Wednesday, your tests will decide what should happen in the tricky cases.

- [ ] **`Room`**: `checkIn()` sets `occupied` and `dirty` to `true`
- [ ] **`Room`**: `checkOut()` sets `occupied` to `false`. It leaves `dirty` alone.
- [ ] **`Room`**: `cleanRoom()` sets `dirty` to `false`
- [ ] In `main`, create a clean, empty room and print `isAvailable()` at each step: `true` at the start, `false` after check in, `false` after check out, `true` after cleaning
- [ ] Commit and push
- [ ] **`Employee`**: add a private `double startTime` variable. It doesn't go in the constructor.
- [ ] **`Employee`**: `punchIn(int time)` saves `time` in `startTime`
- [ ] **`Employee`**: `punchOut(int time)` adds `time - startTime` to `hoursWorked`. Times are whole hours on a 24-hour clock, in the same day, so `14` is 2:00 pm. There's nothing to check first.
- [ ] In `main`, punch in at `10` and out at `14`. `hoursWorked` goes up by 4.
- [ ] Commit and push

> [!TIP] Optional (if time): the bonus
> Add `punchTimeCard(int time)` (p. 36): the first call punches in, the next punches out. You'll need a `boolean` to remember which is next. Keep `punchIn` and `punchOut`, because the next exercises use them.

## Afternoon: overloading (Workbook 4a §2-3)

After the **Overloading** demo, read pp. 38–43.

### Exercise 3: Overloading Methods (pp. 44–45)

- [ ] **`Employee`**: overload `punchIn()` and `punchOut()` with **no parameters**. They do the same job as your `int` versions, but the time comes from `LocalDateTime`, so you end up with four methods.
- [ ] **`Employee`**: keep `startTime` and `hoursWorked` as **numbers**. Don't change them to a `LocalTime` or `LocalDateTime`; only use `LocalDateTime` to get the current hour and minutes. If `startTime` is an `int`, change it to a `double` so it can hold part of an hour: 10:30 is `10.5`.
- [ ] Punch in and straight back out in `main`. Hours near 0 are correct, because no time passed.
- [ ] Commit and push
- [ ] **`Hotel`**: a new class with the private variables `name`, `numberOfSuites`, `numberOfRooms`, `bookedSuites` and `bookedBasicRooms`, and **no public setters**. It only keeps counts, so it doesn't use your `Room` class.
- [ ] Write **both** constructors (p. 45). The shorter one starts the booked counts at 0.
- [ ] Write `getAvailableSuites()` and `getAvailableRooms()`: the total minus the booked count. They're derived getters, so no new variables.
- [ ] Write `bookRoom(int roomCount, boolean suite)`. `suite` is `true` for suites and `false` for basic rooms.
- [ ] In `bookRoom`, if there aren't enough free, change nothing and return `false`. Otherwise, add `roomCount` to the booked count and return `true`.
- [ ] Test it in `main` with `new Hotel("Lakeside Inn", 2, 10)`. Booking 2 suites gives `true`, then 1 more suite gives `false`, and `getAvailableSuites()` gives 0.
- [ ] Commit, push, and check the link on the class GitHub sheet

## Late afternoon: review and, or, not (Workbook 1c pp. 101–102)

After the **And, Or, Not** warm-up (the code: [logicaloperators](https://github.com/craigmckeachie/java-academy-demos/tree/main/src/main/java/com/pluralsight/workbook1c/logicaloperators/solutions)):

- [ ] Read the [And, Or, Not](/handouts/logical-operators) page, and do its **predict the output** quiz before you open the answers
- [ ] Find `&&`, `||` or `!` in your own `hotel-operations` code (`isAvailable()` and `bookRoom`), and read each one out loud as English
- [ ] Back to **Exercise 3**. Unit testing starts tomorrow, not today.

## Finished early?

- [ ] This week's [Stretch Goals](/stretch-goals/week-5-stretch-goals)

## Stuck?

- **[Help Desk](/handouts/help-desk):** today's helper is in the Help Desk breakout room for the first 15–20 minutes of each breakout. Share your screen; you do the typing.
- **Your instructor** is always available. Ask early!
- **A method changed nothing?** Are you changing the field? Step into it with the debugger and watch `this`.
- **`is already defined`?** Two overloads need different parameter **types**. Different names for the parameters don't count.
- **`LocalDateTime`:** you've used it in Workbook 3a. For the time as a number, think about the hour plus the minutes as part of an hour. Divide by `60.0`, not `60`: two `int`s divide to a whole number, so `30 / 60` is `0`.
