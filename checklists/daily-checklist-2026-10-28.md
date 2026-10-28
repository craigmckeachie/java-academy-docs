---
publish: true
title: Wed 10/28
section: Daily Checklists
---

# Wednesday 10/28: Today's Checklist

**Today:** **`ArrayList`** (Workbook 3a Module 3), a list that grows as you add to it. This afternoon you'll **read a file into a list of objects**, which is the most important pattern for next week's Capstone. Then a short **`switch`** demo, so you can build a menu, and a quick look at **`HashMap`**.

Check items off as you go. **"Done" = the code runs, it's committed, it's pushed to GitHub, and you've sent the repo URL.**

## First thing: carry-over from Tuesday

- [ ] **Payroll Calculator part 2**, **Formatting Dates** and **Search Engine Logger** are committed, pushed, and the URLs are sent

> [!NOTE] Assessment 1 retake
> If you got an email inviting you to the retake, it's today at **12:00–1:00 pm Central** (lunch). Same rules as Monday: see the [Assessment Policy](/handouts/assessment-policy).

## Morning: ArrayList (Workbook 3a §3-1 and §3-2)

After the **ArrayList** demo, read pp. 36–48.

### Exercise 1: search-inventory (p. 49)

- [ ] Create the project **`search-inventory`** in `workbook-3`, with a git repository. Share it to GitHub.
- [ ] A `Product` class with `id`, `name`, `price`, a constructor and getters (p. 47)
- [ ] A `main` like the one on p. 48: get the list from `getInventory()`, then print every product with `printf`
- [ ] Write `getInventory()`: create an empty `ArrayList<Product>`, add **at least 5** products, and **return** the list
- [ ] Run it. Commit and push.
- [ ] **Send the repo URL**

## Afternoon: from a file into a list

After the **Read a File into a List** demo:

- [ ] **Search Inventory bonus 1** (p. 49): copy `inventory.csv` from DataFiles.zip into the project's **root folder**. Change `getInventory()` so it reads the file instead: for each line, `split("\\|")`, turn the parts into an id, a name and a price, create a `Product`, and add it to the list.
- [ ] Run it. Add a product to `inventory.csv`, run it again, and see the new product show up **without changing any code**.
- [ ] Commit, push, and **send the repo URL**

> [!IMPORTANT] This is the Capstone pattern
> Read each line → split it → create an object → add it to an `ArrayList`. Next week, every transaction in your Capstone's file becomes an object in a list this way. Make sure you can write it yourself.

## Late afternoon: a menu with switch (Workbook 1c pp. 121–124)

After the short **`switch`** demo (the code: [SwitchMenuDemo.java](https://github.com/craigmckeachie/java-academy-demos/blob/main/src/main/java/com/pluralsight/workbook1c/switches/SwitchMenuDemo.java)):

- [ ] **Search Inventory menu bonus** (p. 50): put a **menu in a loop** in `main`, the way the demo did, with the five choices from p. 50:

```
What do you want to do?
 1- List all products
 2- Lookup a product by its id
 3- Find all products within a price range
 4- Add a new product
 5- Quit the application
Enter command:
```

- [ ] Use a **`switch`** with arrow cases (`case "1" -> { ... }`) to pick what happens. For now, each choice just **prints something**, like `You chose: list all products`. You don't have to make them work yet.
- [ ] `5` ends the loop, and any other input prints a message and shows the menu again
- [ ] Run it and try every choice, plus one that isn't on the menu. Commit, push, and **send the repo URL**

> [!TIP] Optional (if time): more Search Inventory bonuses
> - Make choice **1** really list all the products (call the code you already have)
> - Sort the products by name before you display them (p. 49)

## End of day: HashMap (a quick look)

After the short **HashMap** demo, skim pp. 52–61 if you're curious.

- [ ] **Optional:** Exercise 2, **search-inventory-map** (p. 62). Do it only after Search Inventory and its file bonus are done. For the Capstone, use an `ArrayList`.

## Finished early?

- [ ] The Search Inventory bonuses above
- [ ] More ideas: this week's [Stretch Goals](/stretch-goals/week-3-stretch-goals)

## Stuck?

- **[Help Desk](/handouts/help-desk):** today's helper is in the Help Desk breakout room for the first 15–20 minutes of each breakout. Share your screen; you do the typing.
- **Your instructor** is always available. Ask early!
- **`IndexOutOfBoundsException`?** Like arrays, a list's indexes go from 0 to `size() - 1`.
- **The products print as `Product@6d06d69c`?** Print the getters with `printf` (or generate a `toString()`).
- **`ArrayIndexOutOfBoundsException` after `split`?** Check the line really has `|` between its parts, and that you wrote `split("\\|")`, with two backslashes.
- **The price is wrong or won't parse?** `Double.parseDouble(parts[2])`. Print `parts.length` and each part to see what `split` gave you.
