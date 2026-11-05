---
publish: true
title: Mon 11/9
section: Daily Checklists
---

# Monday 11/9: Today's Checklist

**Today:** Workbook 4a starts a new way of thinking. Your Capstone was one class doing everything; this week, **each class gets one job**. This morning has no code: in groups, you'll work out what objects a hotel needs and what each one is responsible for. This afternoon you'll start building them.

Check items off as you go. **"Done" = the code runs, it's committed, it's pushed to GitHub, and its link is on the class GitHub sheet.**

## First thing

- [ ] Create a folder named **`workbook-4`** in your `pluralsight` folder. This week's exercises go there.
- [ ] In your clone of **java-academy-demos**, run `git pull`, then reload Maven if IntelliJ asks

## Morning: thinking in objects (Workbook 4a Module 1)

### Exercise 1: Objects at a Hotel (p. 9)

After the **Thinking in Objects** talk, in your group:

- [ ] Read the seven scenarios on p. 9 and list the **nouns**
- [ ] Decide which ones are objects: a department, a job, a person, a thing, or an idea
- [ ] Share your list with the class

### Exercise 2: Responsibilities at a Hotel (p. 13)

After the **Responsibilities** talk, in the same group:

- [ ] List what the hotel needs to **know** and what it needs to **do**
- [ ] Give each responsibility to **one** object. It's fine to add or drop objects.
- [ ] Share your list with the class

## Afternoon: classes (Workbook 4a §2-1)

After the **Classes Review** demo (the code: [Person.java](https://github.com/craigmckeachie/java-academy-demos/blob/main/src/main/java/com/pluralsight/workbook4a/getters/solutions/Person.java)), read pp. 16–27.

### Exercise 1: hotel-operations (pp. 28–30)

> [!IMPORTANT] Keep it simple: no menu, no Scanner
> This project has no user input. In `main`, create objects with values you choose, call their methods, and print the results. The classes aren't connected to each other, either: a `Reservation` doesn't need a `Room`.

- [ ] Create the project **`hotel-operations`** in `workbook-4`, with a git repository. Share it to GitHub as a **public** repo.
- [ ] **`Room`**: four private variables: `numberOfBeds`, `price`, `occupied` and `dirty`. There's **no `available` variable**.
- [ ] **`Room`**: a constructor that takes all four, so you can write `new Room(2, 124.00, false, false)`
- [ ] **`Room`**: the five getters on p. 29, and **no setters**. `isAvailable()` is one line: it returns true when the room is not occupied and not dirty.
- [ ] Test `Room` in `main`. A clean, empty room is available (`true`). A dirty room and an occupied room are not (`false`).
- [ ] Commit and push
- [ ] **`Reservation`**: three private variables: `roomType`, `numberOfNights` and `weekend`. The price is **not** a variable.
- [ ] **`Reservation`**: a constructor that takes all three, plus the getters and setters on p. 29. There's no `setPrice()`.
- [ ] **`Reservation`**: `getPrice()` is the price for **one night**. It's $139.00 for `"king"` and $124.00 for `"double"`, and 10% more when `weekend` is true.
- [ ] **`Reservation`**: `getReservationTotal()` is `getPrice()` times the number of nights
- [ ] Test it in `main`. A king for 3 nights over a weekend is **$152.90** a night and **$458.70** in total.
- [ ] Commit and push
- [ ] **`Employee`** (p. 30): the five private variables (`hoursWorked` and `payRate` are `double`), a constructor that takes all five, and a getter for each
- [ ] **`Employee`**: `getRegularHours()` is the hours up to 40, and `getOvertimeHours()` is the hours over 40. Neither one has a variable.
- [ ] **`Employee`**: `getTotalPay()` is regular hours times the pay rate, plus overtime hours times the pay rate times 1.5
- [ ] Test it at $20.00 an hour. 20 hours is 20 regular, 0 overtime, **$400.00**. 45 hours is 40 regular, 5 overtime, **$950.00**.
- [ ] Commit, push, and **add the link to the class GitHub sheet**

> [!TIP] Prices stay double for now
> You'll learn a better type for money on Wednesday. You won't need to come back and change this project.

## Finished early?

- [ ] This week's [Stretch Goals](/stretch-goals/week-5-stretch-goals)

## Stuck?

- **[Help Desk](/handouts/help-desk):** today's helper is in the Help Desk breakout room for the first 15–20 minutes of each breakout. Share your screen; you do the typing.
- **Your instructor** is always available. Ask early!
- **`non-static method cannot be referenced from a static context`?** You called an object's method from `main` without an object. Create the object with `new`, then call the method on it.
- **Does a getter need a variable?** If you can work the answer out from other variables, no.
- **`isAvailable()` says the wrong thing?** Say the rule out loud, then check each `!` and `&&`.
