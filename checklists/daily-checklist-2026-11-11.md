---
publish: true
title: Wed 11/11
section: Daily Checklists
---

# Wednesday 11/11: Today's Checklist

**Today:** a big one. This morning you'll write **unit tests**: code that checks your code. This afternoon you'll meet **`BigDecimal`**, the right type for money, and finally find out what **`static`** means.

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

## Afternoon: BigDecimal (Workbook 4a §4-1)

After the **BigDecimal** demo (the code: [BankAccount.java](https://github.com/craigmckeachie/java-academy-demos/blob/main/src/main/java/com/pluralsight/workbook4a/bigdecimal/solutions/BankAccount.java)), read pp. 69–71.

### Exercise: money-math (p. 72)

- [ ] Create the project **`money-math`** in `workbook-4`, with a git repository. Share it to GitHub as a **public** repo.
- [ ] Steps 1–2: a `float`, a `double` and a `BigDecimal` that go up by ten cents, 10 times, printed on one line each time
- [ ] Steps 3–4: reset them, add 19.99 a thousand times, and print them after the loop
- [ ] Step 5: compare the three
- [ ] Answer the three questions at the end of p. 72 in a **README**
- [ ] Commit and push

## Late afternoon: static (Workbook 4a §4-2)

After the **Static** demo, read pp. 74–81.

### Exercise: static-classes (pp. 82–83)

Whatever isn't done today, finish tomorrow morning.

- [ ] Create the project **`static-classes`** in `workbook-4`, with a git repository. Share it to GitHub as a **public** repo.
- [ ] Create **`NameFormatter`** with a **private** constructor
- [ ] Write `format(String firstName, String lastName)`, the easiest one
- [ ] Write the five-parameter `format`
- [ ] Write `format(String fullName)`. **Behind? This one can wait.**
- [ ] Add unit tests with a few different names. Compare with the formats on p. 82.
- [ ] Commit, push, and **add the link to the class GitHub sheet**

## Finished early?

- [ ] This week's [Stretch Goals](/stretch-goals/week-5-stretch-goals)

## Stuck?

- **[Help Desk](/handouts/help-desk):** today's helper is in the Help Desk breakout room for the first 15–20 minutes of each breakout. Share your screen; you do the typing.
- **Your instructor** is always available. Ask early!
- **Red imports in your test?** Reload Maven: open `pom.xml` and click the small Maven icon, or use the Maven tool window's Reload button.
- **`expected: <15> but was: <0>`?** The test is doing its job. Is the bug in the test, or in the class?
- **The `BigDecimal` didn't change?** `total.add(price)` gives you a new value. Write `total = total.add(price);`.
- **`non-static method cannot be referenced from a static context`?** You're in a static method and asked for something that belongs to an object. Usually the fix is to create the object, not to add `static`.
