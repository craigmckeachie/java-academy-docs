---
publish: true
title: Mon 11/23
section: Daily Checklists
---

# Monday 11/23: Today's Checklist

**Today:** **interfaces** (Workbook 6a §1 and §2-1). A parent class says what something **is**. An **interface** says what something **can do**, and a class can do many things. You'll add an interface to a class diagram in your group, then add it to a starter project. **Assessment 2 is at 3:00**, with one last review and time for questions right before it.

Check items off as you go. **"Done" = the code runs, it's committed, it's pushed to GitHub, and its link is on the class GitHub sheet.**

## First thing (5 min)

- [ ] **Assessment 2** is **today at 3:00**. Read the [Assessment Policy](/handouts/assessment-policy) if you haven't: it's open book, but no AI and no search engines.
- [ ] Friday's **`dealership-manager`** is pushed, even if Phase 1 isn't finished. It's due **Monday 12/7**, after Capstone 2.
- [ ] Make a **`workbook-6`** folder inside your `pluralsight` folder. This week's exercises go there.

## Morning: what is an interface? (Workbook 6a §1-1 and §1-2, 25 min)

After the **Interfaces** demo (the code: [Flyable.java](https://github.com/craigmckeachie/java-academy-demos/blob/main/src/main/java/com/pluralsight/workbook6a/flyable/solutions/Flyable.java), [Drone.java](https://github.com/craigmckeachie/java-academy-demos/blob/main/src/main/java/com/pluralsight/workbook6a/flyable/solutions/Drone.java) and [FlyingThingsDemo.java](https://github.com/craigmckeachie/java-academy-demos/blob/main/src/main/java/com/pluralsight/workbook6a/flyable/solutions/FlyingThingsDemo.java)), read pp. 5–18.

> [!TIP] Remember
> A class **extends** one parent and **implements** as many interfaces as it needs: `public class Drone implements Flyable, Rechargeable`. An interface's methods have no body; every class that implements it **must** write them all. On a class diagram, **implements** is a **dashed** line with a hollow triangle. (The workbook sometimes draws it as a small circle on a stick, a "lollipop": same meaning.)

## Exercise 1: Fixed Assets diagram, in groups (pp. 19–20, about 1 hour)

Your group starts from our diagram of the **assets as they are now**, not a blank page.

![The starter: Portfolio has a list of FixedAssets. FixedAsset is abstract with House, Gold and Jewelry under it. Account is abstract with BankAccount and CreditCard under it. Every money amount is a BigDecimal](/diagrams/fixed-assets-start.svg){.screenshot}

- [ ] Download <a href="/java-academy-docs/diagrams/fixed-assets-start.excalidraw" download>fixed-assets-start.excalidraw</a>. At [excalidraw.com](https://excalidraw.com), open the menu (☰) → **Open** and pick the file. (Need a refresher? [Class Diagrams §7](/handouts/class-diagrams#_7-drawing-it-in-excalidraw).)
- [ ] One person shares their screen and draws; everyone else helps decide
- [ ] **Part 1:** add an **interface** named **`Valuable`** with one method, `getValue()`. Mark it `«interface»`.
- [ ] Which classes should implement `Valuable`? Draw a **dashed** arrow with a hollow triangle from each one to `Valuable`.
- [ ] `BankAccount` and `CreditCard` **don't** extend `FixedAsset`. Why not? Be ready to say it in one sentence.
- [ ] Change **`Portfolio`** so its list can hold houses, gold, jewelry, bank accounts **and** credit cards. What type does the list need to be? What does `add()` take?
- [ ] **Part 2:** everyone saves a copy: menu (☰) → **Save to...** → **Save to file**, into a new **`assets-diagrams`** folder in `workbook-6`. Export a **PNG** there too (menu → **Export image...**).
- [ ] Be ready to share your diagram with the class. You'll build it after lunch, so keep it open.

## Late morning: implementing an interface (Workbook 6a §2-1, 25 min)

After the **Implementing an Interface** demo (the code: [Turtle.java](https://github.com/craigmckeachie/java-academy-demos/blob/main/src/main/java/com/pluralsight/workbook6a/implementing/solutions/Turtle.java), [Robot.java](https://github.com/craigmckeachie/java-academy-demos/blob/main/src/main/java/com/pluralsight/workbook6a/implementing/solutions/Robot.java) and [InterfaceTypeDemo.java](https://github.com/craigmckeachie/java-academy-demos/blob/main/src/main/java/com/pluralsight/workbook6a/implementing/solutions/InterfaceTypeDemo.java)), read pp. 22–28.

> [!TIP] Remember
> **The variable's type decides what you can call; the object decides which version runs.** A `Movable` variable can hold a `Robot` or a `Turtle`, but you can only call `move()` and `goHome()` on it.

### Together: Class Types (5 min)

Last week the **interface** column of [Class Types](/handouts/class-types) was a preview. Now all three columns make sense.

- [ ] Follow along: a **concrete** class, an **abstract** class and an **interface**, side by side
- [ ] Answer out loud: how many parents can a class extend? How many interfaces can it implement?

### Exercise 1: Portfolio (pp. 29–30, before lunch and after, about 1 hour 45 min)

You **don't** build the classes from scratch. A starter project already has every class from this morning's starter diagram except `Portfolio` (that's tomorrow). Your job is today's new part: the **interface**.

**Set up (10 min)**

- [ ] Download <a href="/java-academy-docs/downloads/portfolio-manager.zip" download>portfolio-manager.zip</a> and unzip it (Mac: double-click it; Windows: right-click → **Extract All**)
- [ ] Move the **`portfolio-manager`** folder (the one with `pom.xml` in it) into your `workbook-6` folder
- [ ] In IntelliJ, **File → Open**, pick that `portfolio-manager` folder, and click **Open**. If IntelliJ asks, click **Trust Project**.
- [ ] Run **`FinanceApplication`**: it prints a house, some gold and a ring, each with its value
- [ ] Look around `model` for a few minutes. Find each class from the diagram, and the `TODO`s.
- [ ] Make it your own Git project: **VCS → Create Git Repository**, pick the `portfolio-manager` folder, then commit everything (`Add the starter project`)
- [ ] **Git → GitHub → Share Project on GitHub**. Uncheck **Private**, then click **Share**. Add the link to the class GitHub sheet.
- [ ] Copy your group's diagram (the `.excalidraw` and the PNG) into the project folder, next to `pom.xml`

**Part 1: the interface (30 min)**

- [ ] In `model`, create **`Valuable`**: right-click `model` → **New → Java Class**, type the name, and pick **Interface**. Give it one method: `BigDecimal getValue();`
- [ ] Make **`FixedAsset`** and **`Account`** implement `Valuable`, and put `@Override` above their `getValue()`. Why don't `House`, `Gold` and the others need `implements Valuable` too?
- [ ] **`BankAccount`:** fill in `deposit` and `withdraw`. Use `getBalance()`, `.add()` or `.subtract()`, and `setBalance(...)`.
- [ ] **`CreditCard`:** fill in `charge` and `pay`. A charge **adds** to what you owe.
- [ ] **`CreditCard`:** override `getValue()`, so a card's value is its balance as a **negative** number (`.negate()`)
- [ ] Commit after each step that works

**Part 2: p. 30 (5 min, then the README)**

- [ ] Replace the `TODO` in `main` with p. 30's code. The starter's `deposit` takes a `BigDecimal`: `deposit(new BigDecimal("100"))`.
- [ ] Answer p. 30's four questions in a **README**, in your own words, with your diagram's PNG: `![Class diagram](fixed-assets.png)` (use your PNG's file name)
- [ ] Commit and push

## Afternoon: finish Exercise 1 (about 1 hour 15 min)

- [ ] Keep going on **Exercise 1** above: Part 1, then Part 2 and the README
- [ ] Commit and push. Stop when the review starts, wherever you are.

## Assessment 2 review, one more time (25 min)

You did the **[Java Assessment 2 Review: OOP](https://wayground.com/join?gc=44829811)** for homework (code **4482 9811** at **joinmyquiz.com** if the link asks). We'll open it once more; work through it at your own pace.

- [ ] Every question you miss: write down its topic
- [ ] Look up one or two of those topics in the workbook or a demo

## Questions (10 min)

- [ ] Bring a topic from your list, and ask it in the chat or out loud. Someone else probably has the same question.

## Assessment 2 at 3:00 (1 hour)

- [ ] Close every AI tool and browser tab you won't use
- [ ] Open book: the workbooks, your own code and this site are fine

## Finished early?

- [ ] Start tomorrow's **Exercise 2**, `Portfolio` (p. 38), on [Tuesday's checklist](/checklists/daily-checklist-2026-11-24)
- [ ] Add a **`Stock`** class to your diagram and your code. Is it a fixed asset, an account, or neither? Which arrow does it get?
- [ ] Write a JUnit test for `CreditCard.getValue()`: after you charge $500, its value is **−$500**. Add JUnit to the `pom.xml` first ([Unit Testing](/handouts/unit-testing)).
- [ ] More ideas: the [Weeks 6–7 Stretch Goals](/stretch-goals/week-6-7-stretch-goals)

## Stuck?

- **[Help Desk](/handouts/help-desk):** today's helper is in the Help Desk breakout room for the first 15–20 minutes of each breakout. Share your screen; you do the typing.
- **Your instructor** is always available. Ask early!
- **The project has no green Run arrow, or `BigDecimal` is red?** IntelliJ didn't load it as a Maven project. Right-click `pom.xml` → **Add as Maven Project**. Still red? **File → Project Structure → Project → SDK**: pick 17.
- **No VCS menu, only Git?** The project is already a Git repository. Skip that step and commit.
- **"no interface expected here"?** You wrote `extends Valuable`. A class **implements** an interface: `implements Valuable`.
- **"Class ... must either be declared abstract or implement abstract method 'getValue()'"?** A class that implements `Valuable` must have `getValue()`. Click the red line, press **Option+Enter** (Windows: **Alt+Enter**) → **Implement methods**.
- **`account2.deposit(...)` is red?** That's p. 30's question. What type is `account2`? What can a `Valuable` do?
- **`deposit(100)` won't compile?** `100` is an `int`, and your `deposit` wants a `BigDecimal`: `deposit(new BigDecimal("100"))`.
- **Your packages show as one line, like `com.pluralsight.portfoliomanager.model`?** In the Project window, click **⋮** → **Appearance** → uncheck **Compact Middle Packages** ([Packages §6](/handouts/package-organization#_6-moving-a-class-in-intellij)).
- **Excalidraw lost your diagram?** It only keeps it in that browser tab. Save the `.excalidraw` file into `assets-diagrams` as soon as you start.

## End of day

- [ ] `portfolio-manager` runs, its README answers p. 30, and its link is on the class GitHub sheet
- [ ] Commit and push
