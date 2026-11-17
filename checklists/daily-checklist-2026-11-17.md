---
publish: true
title: Tue 11/17
section: Daily Checklists
---

# Tuesday 11/17: Today's Checklist

**Today:** first, we finish Monday's diagram together in Excalidraw. Then **overriding and polymorphism** (Workbook 5a §2-1). A child class can **replace** a method it inherited, and a list of parent-type objects can hold every kind of child, each doing things its own way. You'll build one project, `assets-manager`, where every asset works out its own value. In the afternoon we'll talk about **technical career paths**, and you'll start your **Internship Self-Reflection** survey.

Check items off as you go. **"Done" = the code runs, it's committed, it's pushed to GitHub, and its link is on the class GitHub sheet.**

## First thing

- [ ] **`vehicle-inheritance`** has Exercises 2 and 3 pushed, and its link is on the class GitHub sheet. The diagram and README come next, together.
- [ ] **`car-dealership`** is due **Thursday 11/19**
- [ ] The **Internship Self-Reflection** survey is due **Wednesday 11/18 at the start of class** (we'll start it this afternoon)

## First: draw it in Excalidraw, together (Monday's last step)

- [ ] Follow along with the [Excalidraw We Do](/handouts/excalidraw-we-do) page: download <a href="/java-academy-docs/diagrams/vehicle-starter.excalidraw" download>vehicle-starter.excalidraw</a>, open it at [excalidraw.com](https://excalidraw.com) (menu ☰ → **Open**), and add classes and both arrows together
- [ ] Save it as `vehicle-diagram.excalidraw` in your `vehicle-inheritance` folder (menu → **Save to...** → **Save to file**), not in Downloads or a cloud drive
- [ ] Export `vehicle-diagram.png` into the same folder (menu → **Export image**, **Embed scene** on), show it in your README with `![Class diagram](vehicle-diagram.png)`, commit and push
- [ ] Later today or tonight: finish the rest of your group's diagram. Save (Cmd+S), export the PNG again, commit and push.

## Morning: overriding and polymorphism (Workbook 5a §2-1)

After the **Overriding** demo (the code: [Caveman.java](https://github.com/craigmckeachie/java-academy-demos/blob/main/src/main/java/com/pluralsight/workbook5a/overriding/solutions/Caveman.java)) and the **Polymorphism** demo (the code: [HumanListDemo.java](https://github.com/craigmckeachie/java-academy-demos/blob/main/src/main/java/com/pluralsight/workbook5a/polymorphism/solutions/HumanListDemo.java)), read pp. 32–40.

### Exercise 1: Assets (pp. 46–47)

> [!TIP] Remember
> The **variable's type** decides what you can call. The **object** decides which version runs.

The class diagram for pp. 46–47. `House` and `Vehicle` each **is an** `Asset`, and each has its own `getValue()`:

![Asset with description, dateAcquired, originalCost, a constructor, getters and setters, and getValue. House with address, condition, squareFoot and lotSize, and Vehicle with makeModel, year and odometer, each with a constructor, getters and setters, and its own getValue. Hollow-triangle arrows go from House and from Vehicle up to Asset](/diagrams/assets.svg){.screenshot}

- [ ] Create the project **`assets-manager`** in `workbook-5`, with a git repository. Share it to GitHub as a **public** repo and add the link to the class GitHub sheet.
- [ ] **`Asset`**: `description` (`String`), `dateAcquired` (`String`, like `"2024-08-20"`), `originalCost` (`BigDecimal`), a constructor, getters and setters, and `getValue()`, which returns the original cost
- [ ] **`House`** extends `Asset`: `address`, `condition` (1 excellent, 2 good, 3 fair, 4 poor), `squareFoot` and `lotSize`, a constructor that calls `super(...)`, getters and setters
- [ ] **`House.getValue()`**, with `@Override`: the price per square foot for its condition ($180, $130, $90 or $80) times `squareFoot`, **plus** $0.25 per square foot of `lotSize`
- [ ] Check it: a **good** house (2) of 1,800 sq ft on a 6,000 sq ft lot is worth **$235,500.00**
- [ ] Commit and push
- [ ] **`Vehicle`** extends `Asset`: `makeModel`, `year` and `odometer`, a constructor that calls `super(...)`, getters and setters
- [ ] **`Vehicle.getValue()`**, with `@Override`. The vehicle's age is this year minus `year`. Each year takes a percentage **of the original cost**: 3% a year up to 3 years old, 6% a year at 4–6, 8% a year at 7–10. Over 10 years old, it's worth $1,000.
- [ ] Check it: a $20,000 car that's 2 years old is worth 20,000 × (1 − 2 × 0.03) = **$18,800.00**
- [ ] Then the mileage rule: over 100,000 miles, take **25% off** the value, unless `makeModel` contains `Honda` or `Toyota`
- [ ] In `main`: an **`ArrayList<Asset>`** with at least **two houses and two vehicles**, with descriptions like `"my house"` or `"Tom's truck"`
- [ ] Loop through the list and print each asset's description, date acquired, what you paid, and its value
- [ ] Commit and push

## Afternoon: `instanceof` and casting (Workbook 5a §2-1)

After the **instanceof and Casting** demo (the code: [CastingDemo.java](https://github.com/craigmckeachie/java-academy-demos/blob/main/src/main/java/com/pluralsight/workbook5a/instanceofcasting/solutions/CastingDemo.java)), read pp. 41–45.

### Assets, the display step (p. 47)

- [ ] In your loop, add the **address** of each house, or the **year and make/model** of each vehicle, to what you print
- [ ] Ask first with `instanceof`, then cast: `House house = (House) myAssets.get(index);`. p. 47's example shows the whole pattern.
- [ ] Run it and check that each asset prints the right extra details
- [ ] Commit and push

## Late afternoon: technical career paths

A 30-minute talk with slides: the kinds of tech jobs a Java developer can grow into, and what each one looks for in an intern.

### Internship Self-Reflection survey, due Wednesday at the start of class

- [ ] Open **Section 04 | Year Up United Java Focus | Internship Self-Reflection** (the link is in the class Teams chat)
- [ ] Start it today, after the talk. Answer honestly: it helps your instructor see where you are as you get ready for internships.
- [ ] Submit it **before class starts on Wednesday 11/18**

### Then: finish Assets

- [ ] Finish **`assets-manager`** through the display step, then commit and push
- [ ] Not done? Finish it tonight. Tomorrow's Abstract Assets builds on it.

## Finished early?

- [ ] Add a third kind of asset, like `Jewelry` or `Stock`, with its own `getValue()`. Does your loop need to change?
- [ ] Override `toString()` in `Asset` (**Code → Generate → toString()**), then just `println` each asset
- [ ] Write a JUnit test for `House.getValue()` with the $235,500.00 example
- [ ] Finish **`car-dealership`** early, so Thursday isn't a rush

## Stuck?

- **[Help Desk](/handouts/help-desk):** today's helper is in the Help Desk breakout room for the first 15–20 minutes of each breakout. Share your screen; you do the typing.
- **Your instructor** is always available. Ask early!
- **"Method does not override method from its superclass"?** The name or parameters don't match the parent's exactly. Check the spelling of `getValue()`.
- **Every asset prints the original cost?** The child's `getValue()` isn't overriding: check that the name and the return type (`BigDecimal`) match `Asset`'s.
- **"Cannot resolve method 'getAddress'"?** The list holds `Asset`s. Check `instanceof House`, cast, and call it on the `House` variable.
- **`ClassCastException`?** You cast without checking. Put the cast inside the `instanceof` check.
- **`BigDecimal` math?** Use `.multiply()`, `.add()` and `.subtract()`, not `*`, `+` and `-`. Make a `BigDecimal` from an `int` with `new BigDecimal(squareFoot)`.
- **This year?** `LocalDate.now().getYear()`
