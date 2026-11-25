---
publish: true
title: Weeks 6–7
section: Stretch Goals
---

# Weeks 6–7 Stretch Goals

For when you've **finished the required exercises** and want more. Stretch work never replaces the required exercises; do those first.

**Pick what interests you.** You don't need to do them all. **Level Up** goes a bit further; **Challenge** pushes harder.

## What "done" means for stretch work

- [ ] It runs, and it handles weird input without crashing
- [ ] Clear names, and small classes and methods that each do one job
- [ ] **You can explain every line** to your instructor. That's the rule even if AI helped you understand something.
- [ ] Committed and pushed. Tell your instructor what you tried; they'll review it with you.

---

## Week 6

### Monday: inheritance and constructors (Workbook 5a §1-1 to §1-3)

- **Level Up:** in **`vehicle-inheritance`**, give each child class one field and one method that only it has, and show them in `main`.
- **Challenge:** draw a second family of classes on your own (for example `Employee` → `Manager`, `Intern`) in Excalidraw, with is-a and has-a arrows, before you write any code. Then build it.

### Tuesday: overriding, polymorphism, `instanceof` (Workbook 5a §2-1)

- **Level Up:** add a third kind of asset, like `Jewelry` or `Stock`, with its own `getValue()`. Does your loop need to change?
- **Level Up:** override `toString()` in `Asset` (**Code → Generate → toString()**), then just `println` each asset.
- **Challenge:** write JUnit tests for `House.getValue()` and `Vehicle.getValue()`, including the mileage rule and a Honda over 100,000 miles.

### Wednesday: abstract classes, prompting patterns, `static` (Workbook 5a §2-2, §2-3; 4a §4-2)

- **Level Up:** print your **net worth**: start at `BigDecimal.ZERO` and `.add()` each asset's `getValue()`.
- **Level Up:** solve `Cash` **both** ways from p. 55 on two branches, and explain in the README which you'd keep and why.
- **Challenge:** update your class diagram: `«abstract»` above `Asset` and `(abstract)` after `getValue()` (see [Class Diagrams](/handouts/class-diagrams)).
- **Challenge:** in **`static-classes`**, handle every mix of optional name parts in all three `format` methods, with a test for each.

### Thursday: branches (Workbook 5c)

- **Level Up:** in **`car-dealership`**, make a branch for one small improvement (a nicer vehicle table, or a "no vehicles found" message), and merge it into `main` when it works.
- **Challenge:** in **`git-exercise`**, look at the **Log** tab's graph. Point to where each branch started and where it was merged, and explain it to a classmate.

### Friday: Car Dealership, part 2 (Workshop 5w)

Do these only after Phases 1–3 work.

- **Level Up:** JUnit tests for `getTotalPrice()` and `getMonthlyPayment()` with p. 5's two examples.
- **Challenge:** Bonus 1 (p. 8): an **Admin** option behind a password, with an `AdminUserInterface` that lists all contracts or the last 10.
- **Challenge:** Bonus 2 (p. 8): add-ons a buyer can choose when they buy, saved at the end of the sale's line.

---

## Week 7 (Monday–Wednesday)

### Monday: interfaces (Workbook 6a §1, §2-1)

- **Level Up:** add a **`Stock`** class to your Fixed Assets diagram and to `portfolio-manager`. Is it a fixed asset, an account, or neither? Which arrow does it get?
- **Level Up:** write a JUnit test for `CreditCard.getValue()`: after you charge $500, its value is −$500.
- **Challenge:** in a small project of your own, rebuild the demo's `Flyable` and `Helicopter`, then write a `Refuelable` interface with `refuel()` and make `Helicopter` implement **both**. Put a helicopter in a `Flyable` variable: can you call `refuel()`? Why not?

### Tuesday: working with interfaces, lambdas and streams (Workbook 6a §2-2, §4-1, §4-2)

- **Level Up:** the Comparable exercise (pp. 39–40): sort a list of people by last name, then by age.
- **Level Up:** p. 38's Bonus: ask the user what kind of asset to add to the portfolio, and its values.
- **Challenge:** should `Portfolio` implement `Valuable`? Make it do so, put one portfolio **inside** another, and check that the total is still right. Explain in your README why it works.

### Wednesday: stream methods and generics (Workbook 6a §4-3, §3)

- **Level Up:** Tasks 6 and 7 on the [Streams: Products](/handouts/streams-exercise) page.
- **Level Up:** the average price of the products in a category, with `reduce` and then `divide` (two decimal places, `RoundingMode.HALF_UP`).
- **Challenge:** in `portfolio-manager`, rewrite `getValue()` with `map` and `reduce`, and keep the loop in a comment. Do the same for `getMostValuable()` with `sorted` or `reduce`. Which version reads better?

### Over the Thanksgiving break (optional)

- **Capstone 2 head start:** sketch your class diagram and work out the [price checks](/handouts/capstone-2-task-list#price-checks) by hand
- **Challenge:** the Turtle Logo exercise (Workbook 6a pp. 90–92)
- **Challenge:** Workbook 6c's JAR files: package one of your apps as a `.jar` and run it with `java -jar` from a terminal

## More practice

- The CodeWars kata at the end of Workbook 5a (pp. 73–76)

---

## Career tracks: shape your stretch work around an internship area

| Internship area | Flavor these two weeks |
|---|---|
| **Software Testing & Automation / Quality Assurance Analysis** | Test every `getValue()` and every contract's price. Write the test cases down before the code. |
| **Application Development** | Draw your Contract classes before you build them, then compare the drawing with what you built. |
| **Production Support** | Keep a `debugging-notes.md`: every `ClassCastException`, "not public" or "is abstract" error you hit, its cause, and the fix. |
| **Software Project Management** | Put 5w's three phases on a project board, with acceptance criteria on each card. |
| **DevOps / Automation** | Use a branch for every feature in `dealership-manager`, and merge each one only when it runs. |
| **Server/Cloud or Mobile App Development** | Notice the `model` / `data` / `ui` split. Server apps use the same layers, with a web page or app in place of `ui`. |
