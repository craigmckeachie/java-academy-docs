---
publish: true
title: Mon 11/16
section: Daily Checklists
---

# Monday 11/16: Today's Checklist

**Today:** Workbook 5a, **inheritance**. When two classes share fields and methods, you put the shared part in one **parent** class and let each **child** add only what makes it different. This morning you design that on paper in groups; this afternoon you build it, then draw it in draw.io.

Check items off as you go. **"Done" = the code runs, it's committed, it's pushed to GitHub, and its link is on the class GitHub sheet.**

## First thing

- [ ] **`blackjack`** is due **today**. Push what you have and check its link on the class GitHub sheet. If it's not finished, finish it tonight; there's no class time for it.
- [ ] **`car-dealership`** (Workshop 4w) is due **Thursday 11/19**, as homework. Friday's workshop adds to it, so it needs to work by then.
- [ ] Create a folder named **`workbook-5`** in your `pluralsight` folder. This week's exercises go there.
- [ ] In your clone of **java-academy-demos**, run `git pull`, then reload Maven if IntelliJ asks
- [ ] Keep the [Class Diagrams](/handouts/class-diagrams) page open today

## Morning: why inheritance? (Workbook 5a §1-1)

### Exercise 1: Diagrams (p. 13), in groups, on paper

After the **Why Inheritance?** talk:

- [ ] **Step 1:** draw a box for each of `Moped`, `Car`, `SemiTruck` and `Hovercraft` on its own: its name, what it **knows** (fields) and what it **does** (methods)
- [ ] **Step 2:** circle everything that shows up in more than one box
- [ ] **Step 3:** move what **all** of them share into a parent class, `Vehicle`, and draw an **is-a** arrow (hollow triangle) from each child up to it
- [ ] Anything a vehicle **has** (wheels? a trunk?) gets its own box and a **has-a** arrow (open arrow), with numbers at both ends
- [ ] Take a photo of your page. You'll redraw it this afternoon.
- [ ] Share your design with the class

## Late morning: `extends` (Workbook 5a §1-2)

After the **Simple Inheritance** demo (the code: [Dog.java](https://github.com/craigmckeachie/java-academy-demos/blob/main/src/main/java/com/pluralsight/workbook5a/inheritance/solutions/Dog.java)), read pp. 15–19.

### Exercise 2: Vehicles (pp. 20–21)

- [ ] Create the project **`vehicle-inheritance`** in `workbook-5`, with a git repository. Share it to GitHub as a **public** repo and add the link to the class GitHub sheet.
- [ ] **`Vehicle`**: the four private fields on p. 20 (`color`, `numberOfPassengers`, `cargoCapacity`, `fuelCapacity`) with a getter and a setter for each. **No constructor yet.**
- [ ] **`Moped`**, **`Car`**, **`SemiTruck`** and **`Hovercraft`** each `extends Vehicle`. Add a field or method or two from your diagram that only that vehicle has.
- [ ] In `main`, create one of each and set values with the setters, e.g. `slowRide.setColor("Red");`. Print a few with the getters.
- [ ] Answer p. 21's question in a comment in `main`: why can a `Moped` call `setColor()` when you never created a `Vehicle`?
- [ ] Commit and push

## Afternoon: constructors (Workbook 5a §1-3)

After the **Constructors** demo (the code: [Dog.java](https://github.com/craigmckeachie/java-academy-demos/blob/main/src/main/java/com/pluralsight/workbook5a/constructors/solutions/Dog.java)), read pp. 23–28.

### Exercise 3: Vehicles (p. 29), same project

- [ ] **`Vehicle`**: one constructor that takes all four fields
- [ ] Every child class just turned red. That's expected (p. 29). Give each child a constructor that calls `super(...)` with the four values. **Generate → Constructor** (Cmd+N / Alt+Insert) writes it for you.
- [ ] Update `main` so each vehicle is created with its constructor, e.g. `new Moped("Red", 1, 0, 5)`
- [ ] Run it and check the getters print what you passed in
- [ ] Commit and push

## Late afternoon: draw it in draw.io

- [ ] Open **[app.diagrams.net](https://app.diagrams.net)**, with the [Class Diagrams](/handouts/class-diagrams#_5-drawing-it-in-draw-io) steps beside it
- [ ] Redraw your group's design: `Vehicle`, the four children, and anything they have
- [ ] Glue at least one **is-a** arrow, and drag a box to check that it follows
- [ ] Make the diagram match **your code**. Changed something while coding? Change the boxes too.
- [ ] Save `vehicle-diagram.drawio` and export `vehicle-diagram.png` into your `vehicle-inheritance` folder
- [ ] Add a **README** that shows the picture: `![Class diagram](vehicle-diagram.png)`
- [ ] Commit and push, then check that the picture shows on GitHub

## Finished early?

- [ ] Add a `Wheel` class and give `Vehicle` an `ArrayList<Wheel>`, as a has-a. What does a `Hovercraft` do with it?
- [ ] Moped, Car and SemiTruck drive on roads. Would a middle class, `RoadVehicle`, help? Try it on paper, then in code.
- [ ] Finish **`car-dealership`** early, so Thursday isn't a rush

## Stuck?

- **[Help Desk](/handouts/help-desk):** today's helper is in the Help Desk breakout room for the first 15–20 minutes of each breakout. Share your screen; you do the typing.
- **Your instructor** is always available. Ask early!
- **"Cannot resolve method" on a child?** Check that the class line says `extends Vehicle`.
- **A child can't use a field like `color`?** Fields are `private`, so use the getter: `getColor()`.
- **"There is no parameterless constructor available in 'Vehicle'"?** The child needs its own constructor that calls `super(...)`. See p. 29.
- **"Call to 'super()' must be first statement"?** Move `super(...)` to the first line of the constructor.
- **Arrow won't stay attached in draw.io?** Drag the end onto the box again and let go only when the box lights up in blue.
