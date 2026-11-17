---
publish: true
title: Wed 11/18
section: Daily Checklists
---

# Wednesday 11/18: Today's Checklist

**Today:** first, a follow-up on yesterday's **`instanceof` and casting**, so everyone finishes the Assets display step. Then **abstraction** (Workbook 5a §2-2). Some classes are too general to make an object from. Ask for "an asset" and someone asks you, "What type?" An **abstract** class holds what its children share, and it can make every child write its own version of a method. You'll change yesterday's `assets-manager` on a new **branch**. After lunch, the **Prompting Patterns** demo moved here from yesterday, then time to catch up.

Check items off as you go. **"Done" = the code runs, it's committed, it's pushed to GitHub, and its link is on the class GitHub sheet.**

## First thing

- [ ] The **Internship Self-Reflection** survey is due **now, at the start of class**. Not submitted yet? Finish it first thing.
- [ ] **`assets-manager`** (Exercise 1 Assets) is pushed, its loop runs, and its link is in the sheet's **Overriding Methods** row. Today's exercises build on it.
- [ ] **`vehicle-inheritance`** has your diagram (`vehicle-diagram.excalidraw` and the PNG) and the README picture
- [ ] **`car-dealership`** is due **tomorrow, Thursday 11/19**

## First: `instanceof` and casting, a follow-up (Workbook 5a §2-1)

A quick recap of yesterday afternoon's demo (the code: [CastingDemo.java](https://github.com/craigmckeachie/java-academy-demos/blob/main/src/main/java/com/pluralsight/workbook5a/instanceofcasting/solutions/CastingDemo.java)), then time to finish the display step.

> [!TIP] Remember
> The **variable's type** decides what you can call. The **object** decides which version runs. To call a `House`-only method on an `Asset`, check with `instanceof` first, then cast.

### Assets, the display step (p. 47)

- [ ] Your loop in `main` runs, and every value matches yesterday's checks ($235,500.00 for the good house, $18,800.00 for the 2-year-old car). Not yet? Finish that first.
- [ ] In the loop, add the **address** of each house, or the **year and make/model** of each vehicle, to what you print
- [ ] `for (Asset asset : myAssets)`, then `if (asset instanceof House)` and `House house = (House) asset;`. Or the shorter way: `if (asset instanceof House house)`. Either is fine.
- [ ] Run it and check that each asset prints the right extra details
- [ ] Commit and push **on `main`**, before you make today's branch

## Morning: abstraction (Workbook 5a §2-2)

After the **Abstraction** demo (the code: [AssetArrayDemo.java](https://github.com/craigmckeachie/java-academy-demos/blob/main/src/main/java/com/pluralsight/workbook5a/abstraction/solutions/AssetArrayDemo.java) and [Asset.java](https://github.com/craigmckeachie/java-academy-demos/blob/main/src/main/java/com/pluralsight/workbook5a/abstraction/solutions/Asset.java)), read pp. 49–54.

> [!TIP] Remember
> An **abstract class** can't be used with `new`; only its children can. An **abstract method** has no body, and every child **must** override it.

### Together: a branch in IntelliJ (5 min)

A **branch** is a separate line of commits, so you can try a change without touching your working code on `main`. Tomorrow's demo explains it, and you'll merge it then.

- [ ] Open **`assets-manager`** in IntelliJ. Everything is committed and pushed.
- [ ] **Git → New Branch...**, name it **`abstract-assets`**, keep **Checkout branch** checked, and click **Create**
- [ ] Check the branch name at the top of the window (or bottom right): it says `abstract-assets`

### Exercise 2: Abstract Assets (p. 55), on the `abstract-assets` branch

Work in **`assets-manager`** on the branch. Don't make a copy of the project (p. 55 says to; we use the branch instead).

- [ ] **Part 1:** make `Asset` an **abstract** class, and make `getValue()` an **abstract method** (no body, just `;`)
- [ ] Run it. `House` and `Vehicle` still work, because they already override `getValue()`.
- [ ] In `main`, try `new Asset(...)`. What happens? Read the error, then delete the line.
- [ ] Commit (on the branch)
- [ ] **Part 2:** create **`Cash`**, which extends `Asset`: the cash under your mattress. Its value never changes.
- [ ] What problem do you run into? What are your options? Pick one and make `Cash` work.
- [ ] Add a `Cash` to your list in `main` and run it
- [ ] Answer p. 55's question in a **README**: what went wrong with `Cash`, what your options were, and which one you picked and why
- [ ] **Part 3:** commit and push the branch. **Don't merge it yet**; we'll do that together tomorrow.

> [!NOTE] Pushing a new branch
> The first push of a branch shows **"New"** next to it in the Push window. That's expected: GitHub is getting a branch it hasn't seen.

## Late morning: polymorphism, a second look

After the second pass on polymorphism, catch up: **Vehicles**, then **Assets**, then **Abstract Assets**.

## Afternoon: prompting patterns (Workbook 5a §2-3)

After the **Prompting Patterns** demo, read pp. 57–64.

### Exercise 3: Prompting Patterns (p. 65)

- [ ] **Persona:** ask an AI tool to review your `Asset` class and one child class the way a senior Java developer would. Include **context, task, constraints and format**, and a constraint that it must **not rewrite your code**.
- [ ] Pick **one** suggestion you agree with and make the change yourself. Commit it.
- [ ] **Flipped Interaction:** have an AI quiz you on **abstract classes**, one question at a time. Answer each one before you ask for the next.

## Rest of the afternoon: catch up

In this order:

- [ ] Any unfinished exercise from this week: **Vehicles** (Exercises 2–3), **Assets**, **Abstract Assets**
- [ ] **`car-dealership`**: due tomorrow, and Friday's workshop builds on it
- [ ] **Assessment 2** is **Monday 11/23 at 3:00** (classes and objects, inheritance, overriding, polymorphism, `static`, `ArrayList`, try/catch). Quiz yourself: explain each of today's words out loud, or ask an AI to quiz you (Flipped Interaction).

## Finished early?

- [ ] Add a second `Cash` and a `Jewelry` or `Stock` class. Does the loop in `main` change?
- [ ] Print your **net worth**: the total of every asset's `getValue()`. Start at `BigDecimal.ZERO` and use `.add()`.
- [ ] Write a JUnit test for `Cash.getValue()`
- [ ] Update your class diagram from Monday: an abstract class's name is in *italics*, or has `«abstract»` above it

## Stuck?

- **[Help Desk](/handouts/help-desk):** today's helper is in the Help Desk breakout room for the first 15–20 minutes of each breakout. Share your screen; you do the typing.
- **Your instructor** is always available. Ask early!
- **"'Asset' is abstract; cannot be instantiated"?** That's the point of Part 1: you can't `new` an abstract class. Make a `House`, `Vehicle` or `Cash` instead.
- **"Class 'Cash' must either be declared abstract or implement abstract method 'getValue()'"?** Every child has to override an abstract method. Click the red line, press **Option+Enter** (Windows: Alt+Enter), and pick **Implement methods**: IntelliJ writes the outline for you.
- **"Abstract methods cannot have a body"?** An abstract method ends with `;`, not `{ }`.
- **Can't find your branch?** **Git → Branches...** lists them. Pick `abstract-assets` → **Checkout**.
- **Committed on `main` by mistake?** Ask your instructor before you do anything else.
