---
publish: true
title: Capstone 2 Guide
section: Capstones
order: 3
---

# Capstone 2: How to Do Well

**A point-of-sale app for a food shop.** A customer builds an order one item at a time, sees the total, and gets a receipt. You've built every piece of it already: menus and screens in Capstone 1, files in Week 3, `BigDecimal` and classes in Week 5, inheritance and abstract classes in Week 6, interfaces and `List` in Week 7. This time the **design** is yours too.

**Key dates**
- **Pick your version on Wednesday 11/25** ([Choose your version](#choose-your-version)).
- **Due and presented: Friday 12/4, starting at 8:30 am Central.**
- **Office hours** (all times Central). Bring your code and a question:

| Monday 11/30 | Tuesday 12/1 | Wednesday 12/2 | Thursday 12/3 |
|---|---|---|---|
| 9:15–11:15 am | 8:30–10:30 am | 8:30–10:30 am | 10:45 am–12:00 pm and 1:00–1:45 pm |

- **Late work** drops one level, and isn't accepted without your instructor's OK **before** the due date.

## Choose your version

All four versions have the **same screens and the same rules**. Only the food changes.

**Read the Deli document first**, all the way through, even if you might build something else. Once you understand the Deli, look at the others. The Deli is a great choice too.

| | **The Deli** | **The Pizza** | **The Taco** | **The Custom** |
|---|---|---|---|---|
| The main item | sandwich | pizza | taco or burrito | your item |
| You pick its | bread | crust | shell | type |
| Three sizes | 4", 8", 12" | 8", 12", 16" | single, 3-taco plate, burrito | yours |
| Premium toppings | meat, cheese | meat, cheese | meat, cheese | meat, premium |
| Its special option | toasted | stuffed crust | covered in salsa and queso | yours |
| Free sides | au jus, sauce | red pepper, parmesan | lime wedges, crema | yours (two) |
| The extra you sell | chips | garlic knots | chips & salsa | yours |

This page uses **the Deli** for its examples. Reading another version? Swap in its words from this table: "sandwich" becomes "pizza", "bread" becomes "crust", and so on.

> [!IMPORTANT] The Custom version needs an OK first
> It's harder: you design the menu and prices too. Fill in the **[Custom Shop Planner](https://docs.google.com/spreadsheets/d/1Lsfr2l19Q5-1nGhUmOlewQyVHMkEsyy_k83WAw3Ptck/copy)** and send it to your instructor in a **Teams message by Monday 11/30, before class**. It's a Google Sheet, so you don't need Excel.
>
> 1. Open the link, sign in to a Google account, and click **Make a copy**. The copy is yours to edit.
> 2. Rename it `Capstone 2 Custom - ` and your name.
> 3. Read the **Start Here** tab, then fill in the yellow cells on **My Shop** until "Still to do" is **0**. The Deli, Pizza and Taco tabs are finished examples.
> 4. Click **Share**. Under **General access**, choose **Anyone with the link** and **Commenter**, then click **Copy link**.
> 5. Send your instructor that link. (Not the planner's link: that one is blank.)
>
> Without an OK, pick the Deli, the Pizza or the Taco. Keep your repo and its name, and build it there.

## You already know how to build this

| The Capstone needs | Where you learned it | Look back at |
|---|---|---|
| **Home and Order screens**: a menu in a loop | [Menus and Screens](/handouts/menus-and-screens), Capstone 1 | Your **Capstone 1**, and the [Workout Tracker](/handouts/menu-screens-practice) |
| **Ask again on a typo** | [Validating Input](/handouts/validating-input) | Your Capstone 1's input helpers |
| **Classes with fields, constructors, getters** | Week 5 (Workbook 4a) | Car Dealership pt 1 |
| **Prices in `BigDecimal`** | [BigDecimal](/handouts/bigdecimal) | `money-math`, the dealership's contracts |
| **Different kinds of things in one list**, each with its own price | Inheritance, abstract classes and interfaces (Weeks 6–7) | `assets-manager`, Car Dealership pt 2's contracts, `portfolio-manager` |
| **An order's total**: add up the price of everything on it | A loop, or a stream with `map` and `reduce` (Week 7): use the one you can explain | Task 2 of [Streams: Products](/handouts/streams-exercise) |
| **Classes sorted into packages** | [Packages](/handouts/package-organization) | `dealership-manager` |
| **A receipt file** with the date and time in its name | Writing files, `LocalDateTime` and `DateTimeFormatter` (Week 3) | `search-engine-logger`, the dealership's contracts file, [Formatting Dates](/handouts/date-time-format) |
| **A class diagram** | [Class Diagrams](/handouts/class-diagrams) | The Fixed Assets diagram |
| **Branches** | [Branching in IntelliJ](/handouts/branching-exercise) | Thursday 11/19's three exercises |
| **A project board and a README** | [Projects & Issues](/handouts/github-projects-and-issues), [Markdown and README Files](/handouts/markdown-and-readmes) | Your Capstone 1 |

**Want a detailed plan?** The **[Capstone 2 Task List](/handouts/capstone-2-task-list)** breaks the whole project into small steps, in order, with a checkbox for each.

## Wednesday 11/25: set up (in class)

- [ ] Read the whole **Deli** document, and write down your questions
- [ ] Look at the Pizza, the Taco and the Custom, then pick your version and read its document too (the Custom one: start your [Custom Shop Planner](#choose-your-version))
- [ ] Create the IntelliJ project in your `capstones` folder with a **good name**, in kebab-case: `deli-cious`, `slice-of-heaven`, `taco-truck`. Not `capstone-2`. Employers see this name.
- [ ] Ignore IntelliJ's files **before your first commit**: add `.idea/` to the project's `.gitignore` ([IntelliJ + Git, step 7](/handouts/intellij-git)), or do the one-time [Ignore IntelliJ Files](/handouts/git-ignore-idea) setup
- [ ] Share it to GitHub as a **public** repository, and add the link to the class GitHub sheet (Capstone 2 row)
- [ ] Create a **public GitHub project board**, with a card for each screen and feature. The **[Task List](/handouts/capstone-2-task-list)** has them all.
- [ ] **Write three user stories yourself**, on the Add Sandwich, Checkout and receipt cards: *As a (role), I want (something) so that (benefit).* There's a [model](#a-model-user-story) below.
- [ ] Optional: have AI draft the rest. Paste in [the requirements](#review-your-diagram-with-ai) and one of your stories as an example, then check each one against the document. The other cards can be just a title.
- [ ] Optional over the break: start your class diagram (next section)

### A model user story

The Home Screen card, as an example for your three. The **title** is short, the **story** says who wants it and why, and the **checks** say when it's done:

```text
Title:  Home Screen

As a customer, I want to start a new order from a Home screen,
so that I can order as soon as I reach the counter.

- [ ] 1 starts a new, empty order
- [ ] 0 says goodbye and ends the app
- [ ] Any other choice shows a friendly message, then the menu again
```

## Design before you code

### Draw your class diagram first

Your document asks for a class diagram **before** you code, saved in your repository and **kept current** as your app changes. It's part of your grade.

1. **Find the nouns and verbs.** Go through the Application Requirements and underline every **noun** (a thing: order, sandwich, bread, topping...) and circle every **verb** (something it does: add, choose, calculate...). Nouns that hold their own data become **classes** or **fields**. Verbs become **methods**.
2. **Ask who knows what.** Which class should know a sandwich's price? Which one adds up the whole order?
3. **Look at the Order screen.** It adds **three different kinds of things** to one order, and Checkout needs a price from **each** of them. Which of the last two weeks' ideas lets one list hold different kinds of things?
4. **Draw it** in Excalidraw from the [class template](/handouts/class-diagrams#_7-drawing-it-in-excalidraw). Save the `.excalidraw` file and a PNG in your project folder, and show the PNG in your README.

There's no single right diagram. Want a second opinion on yours? Bring it to office hours on Monday. On demo day, be ready to say **why** you designed it the way you did.

#### Review your diagram with AI

Draw it **yourself** first. Then use the **[Persona pattern](/handouts/prompting-patterns#_2-the-persona-pattern-act-as)**: upload your PNG, then paste the prompt **and** the requirements under it. Without the requirements, AI can't see what's **missing** from your diagram.

**1. The prompt:**

```text
Act as a senior Java developer reviewing a junior developer's first
class diagram. My class diagram is attached. I've learned inheritance,
abstract classes, interfaces and List, but not enums or records. What
the app must do is below.

Point out the three biggest problems, ranked most to least serious, and
explain why each one will cause trouble when I code it. Check that
everything the app must do has a place in my diagram, that each class
has one job, that each field and method is in the right class, and that
each arrow is the right kind.

Do not redraw my diagram, suggest class names, or write any code. Ask
me a question about anything you can't read.
```

**2. The requirements** (the Deli's):

```text
What the app must do:
- A customer builds one order at a time. An order can hold any number of
  sandwiches, drinks and chips. With no sandwiches, it must have a drink
  or chips.
- A sandwich has a bread, a size (4", 8" or 12"), any number of toppings,
  and is toasted or not. Toppings are meats, cheeses, regular toppings,
  sauces and sides.
- A drink has a size and a flavor. Chips have a type.
- The order is shown oldest first. Checkout shows every item with all its
  toppings, each price, and the total. Confirm saves one new receipt file
  for that order. Cancel throws the order away.

Prices:
                        4"      8"      12"
  Bread (sets base)     5.50    7.00    8.50
  Each meat             1.00    2.00    3.00
  Extra meat            0.50    1.00    1.50
  Each cheese           0.75    1.50    2.25
  Extra cheese          0.30    0.60    0.90
  Regular toppings, sauces, sides and toasting are free.
  Drinks: small 2.00, medium 2.50, large 3.00. Chips: 1.50.
```

**Building another version?** Swap in your document's words and prices first.

**Then you decide.** For each point: do you agree? Would you change it? Change the diagram by hand, in your own words. AI can be wrong, so if a point doesn't make sense, bring it to office hours.

> [!TIP] Keep it current
> Your diagram will change as you build. That's normal. Update it at the end of each day (or at least on Thursday), so it matches your code on Friday.

### Potential classes

A starting point for the Deli, **not a finished design**. Try the nouns and verbs yourself first, then compare. Your classes can be different, and the ways they're connected are for you to decide.

| Class | What it's for | Look back at |
|---|---|---|
| `Order` | Holds everything the customer adds, and works out the total | `Portfolio` in `portfolio-manager` |
| `Sandwich` | Its bread, size, toppings and whether it's toasted, and its price | `House` in `portfolio-manager` |
| `Topping` | One meat, cheese, regular topping or sauce | `Jewelry` and `Gold` in `portfolio-manager` |
| `Drink`, `Chips` | A drink's size and flavor, a bag's type, and their prices | `BankAccount` in `portfolio-manager` |
| `ReceiptWriter` | Writes the receipt file | `DealershipFileManager` in `dealership-manager` |
| `UserInterface` | The screens, the questions and the input | `UserInterface` in `dealership-manager` |

### Sort your classes into packages

Sort your classes the way you did in `dealership-manager` ([Packages](/handouts/package-organization)): a root package like **`com.pluralsight.delicious`**, with **`model`** (the things on an order), **`data`** (writing the receipt file) and **`ui`** (the screens, and the only code that prints or reads input). Your class with `main` goes in the root package. Create it **first**, then the packages.

**Not everything needs to be `static` this time.** In Capstone 1, your screens were in the same class as `main`, so they had to be `static`. Now they won't all be in that class. `main` does what it does in your dealership: it makes one `UserInterface` object and calls its method. The `Scanner` and the screen methods belong to that object, so they don't need `static`. Constants, like a price that never changes, are still `static final`.

> [!WARNING] No enums
> We haven't learned **enums** (`enum Size { SMALL, MEDIUM, LARGE }`) in class, so **don't use them**. AI tools and websites often suggest them for sizes, breads and toppings. Use what you know: a `String` (or an `int`, for inches) and a `List` of the choices.

### Menus and screens

The screens and their options come from your document's **"Your application must include"** page. For the Deli:

```text
Home:   1) New Order   0) Exit
Order:  1) Add Sandwich   2) Add Drink   3) Add Chips   4) Checkout   0) Cancel Order
```

- **Keep every option, its number, and its order.** Wording close to the document's is fine (`1) Add a Sandwich`).
- **Add Sandwich, Add Drink and Add Chips are actions**, not screens: each asks its questions, adds one item to the order, then goes back to the Order screen.
- **The Order screen shows the order so far**, in the order they were added: the newest item is at the bottom ("display the items most recently added last").
- **Cancel Order** (on the Order screen) and **Cancel** (at Checkout) throw the whole order away and go back to Home.

### Your screen map (you fill it in)

The two screens and their menus come from your document. The **blanks are yours**: each one is an action, and naming it is part of designing your app.

```text
main
 └── runHomeScreen()         1) New Order      → runOrderScreen()
      │                      0) Exit
      │
      └── runOrderScreen()   1) Add Sandwich   → ____________
                             2) Add Drink      → ____________
                             3) Add Chips      → ____________
                             4) Checkout       → ____________
                             0) Cancel Order   → back to Home
```

1. Copy it into your notebook (or your README), and fill in every blank with an action name: a verb, then what it acts on.
2. Under each action, list the questions it asks, in the order your document gives them (Add Sandwich: bread, size, meats, cheeses, other toppings, sauces, free sides, toasted).
3. Then build the screens empty, with a `TODO` in every action, before you fill any in.

Want a second opinion on your map? Bring it to office hours.

### Choosing from a list

Most questions are a **choice from a list**: the bread, the size, the meats. Number the choices, so the user types a number instead of spelling `provolone`:

```text
Select your bread:
  1) White
  2) Wheat
  3) Rye
  4) Wrap
Your choice: 
```

Toppings can be **more than one**, so ask in a loop, and say how to stop:

```text
Add a meat (0 when you're done):
  1) Steak   2) Ham   3) Salami   4) Roast Beef   5) Chicken   6) Bacon
Your choice: 1
Extra steak? (y/n): y
Add a meat (0 when you're done):
...
```

> [!IMPORTANT] Extras: meat and cheese only
> The Deli document says customers can add "extras of each topping". **In this class, ask "Extra?" for meats and cheeses only**, the two with an Extra price. Extra regular toppings are optional. Your Capstone is graded this way. The same rule goes for every version: ask about extras only for the toppings that have an Extra price.

A number that isn't on the list asks again, like every other answer in your app ([Validating Input](/handouts/validating-input)).

**Ask about the free sides too**, after the sauces. They're in your document's price table, but not on its Add screen, so they're easy to miss.

### Validate every answer

A typo should never crash your app or end up on the order. Copy your **input helpers** from Capstone 1 ([Validating Input](/handouts/validating-input)):

| The question | What asks again |
|---|---|
| **Choose from a list** (bread, size, a meat) | a letter (`abc`), a blank, or a number that isn't on the list (`9`) |
| **Yes or no** (extra? toasted?) | anything except `y` or `n`, in capitals or not |
| **A menu** (Home, Order, Checkout) | a choice that isn't on the menu: a friendly message, then the menu comes back |

### Prices

- **Every price is a `BigDecimal`**. The required features only **add** prices, so you don't need `setScale` ([Where to round](/handouts/bigdecimal#where-to-round)). Print them with `%.2f`.
- **Prices depend on the size.** A meat on a 4" sandwich costs $1.00; on a 12", $3.00. So the sandwich needs to know its size **before** it can price its toppings.
- **Premium toppings cost extra; regular toppings and sauces are included.** **Extra meat** or **extra cheese** adds the Extra price for that size (4": $0.50 for meat, $0.30 for cheese). Regular toppings don't need an extra question.
- **The special option (toasted) is free.**
- **Prices that never change are constants**, marked `final`: `private static final BigDecimal CHIPS_PRICE = new BigDecimal("1.50");`. Your code reads better, and nobody can change a price by accident.
- **Check your prices by hand.** The [Task List](/handouts/capstone-2-task-list#price-checks) has worked examples. Turning them into JUnit tests is recommended, but not required.

### The Deli's prices and toppings

Copied from the Deli document. **Building another version?** Use the tables in your own document.

| Price | 4" | 8" | 12" |
|---|---|---|---|
| **Bread** (white, wheat, rye, wrap) | $5.50 | $7.00 | $8.50 |
| **Each meat** | $1.00 | $2.00 | $3.00 |
| **Extra meat** | $0.50 | $1.00 | $1.50 |
| **Each cheese** | $0.75 | $1.50 | $2.25 |
| **Extra cheese** | $0.30 | $0.60 | $0.90 |
| **Regular toppings, sauces, sides, toasted** | included | included | included |

| Kind | The choices |
|---|---|
| **Meats** (premium) | steak, ham, salami, roast beef, chicken, bacon |
| **Cheeses** (premium) | american, provolone, cheddar, swiss |
| **Regular toppings** | lettuce, peppers, onions, tomatoes, jalapeños, cucumbers, pickles, guacamole, mushrooms |
| **Sauces** | mayo, mustard, ketchup, italian, thousand island, vinaigrette |
| **Sides** (free) | au jus, sauce |

| Other products | Small | Medium | Large |
|---|---|---|---|
| **Drinks** | $2.00 | $2.50 | $3.00 |

**Chips** are $1.50.

### The order rules

- **An order can have no sandwiches**, but then it must have **chips or a drink**. So an **empty order** can't check out: Checkout shows a friendly message and goes back to the Order screen.
- **Checkout** shows every item with **all** its toppings, each item's price, and the **order total**. Then: **Confirm** (save the receipt, go back to Home) or **Cancel** (throw the order away, go back to Home).

### The receipt file

> [!WARNING] One order, one new file
> A common mistake is to put every order in **one** file, the way Capstone 1 put every transaction in `transactions.csv`. Here, **each confirmed order gets its own new file**. Three orders make three files:
>
> ```text
> receipts/
>   20261202-121523.txt
>   20261202-121847.txt
>   20261202-123305.txt
> ```
>
> So make the file name **when the customer confirms**, not once when the app starts. And don't append: no `true` in the `FileWriter`.

- Each confirmed order gets **its own file** in a **`receipts`** folder in your project (next to `pom.xml`), named by the date and time the order was placed: **`20261202-121523.txt`** (`yyyyMMdd-HHmmss`).
- **Hint: use the date formatting examples to make the file name.** [Formatting Dates §4](/handouts/date-time-format#_4-a-complete-example) and Week 3's [FormattingDatesDemo.java](https://github.com/craigmckeachie/java-academy-demos/blob/main/src/main/java/com/pluralsight/workbook3a/dates/solutions/FormattingDatesDemo.java) both turn a `LocalDateTime` into a `String` with a `DateTimeFormatter`. Do the same with the pattern above, then add `".txt"` to the end.
- The receipt holds the same order details and total the customer saw at Checkout. Write it to look like a receipt.
- Create the `receipts` folder **by hand** before you run your app. Git doesn't keep an empty folder, so commit **one sample receipt** to keep it on GitHub.

## One bite a day

Work in this order. Each day ends with something that **runs**, is **committed**, and is **pushed**.

| Day | The bite | Done when |
|---|---|---|
| **Wed 11/25** | Set up. Over the break (optional): your class diagram. | The repo, the board and the `.gitignore` are on GitHub. |
| **Mon** | The **class diagram** and your **[screen map](#your-screen-map-you-fill-it-in)** first. The **model classes** with their prices (start with the drink and chips: the easy ones), and (recommended) JUnit tests for the prices. The **Home** and **Order** screens, empty, with `TODO` actions. | The screens work; each item's price is right. |
| **Tue** | **Add Drink**, **Add Chips**, then **Add Sandwich**, the biggest action. The Order screen shows the order so far, newest at the bottom. | You can build a whole order, and it shows on the Order screen. |
| **Wed** | **Checkout**: the details, the total, **Confirm** writes the receipt file, **Cancel** throws it away. The empty-order rule. | A confirmed order is in `receipts`, with the right total. |
| **Thu** | Fix bugs. Update your **diagram**. Write the **README**. Clean up names and formatting. **Rehearse your demo.** Optional features only if everything works. | Someone else could run it from your README. |
| **Fri** | Present (10 minutes). | |

The **[Task List](/handouts/capstone-2-task-list)** breaks each day into small checkboxes: **Monday** is its sections 2 and 3, **Tuesday** section 4, **Wednesday** section 5, and **Thursday** section 6 and the Quality check.

> [!TIP] A branch for each feature
> Your document says to **use Git branches appropriately**. Make a branch for each bite (`add-sandwich`, `checkout`), commit on it while you work, and merge it into `main` when it **works**, the way you did on Thursday 11/19 ([Branching](/handouts/branching-exercise)). Then `main` always runs, even the night before the demo. Something broke? [Getting Working Code Back](/handouts/get-working-code-back).

## Test it like a customer

Run your app and try each one. The last column is what should happen.

| Try this | What should happen |
|---|---|
| A sandwich with **only regular toppings** | The price is the bread's price: nothing is added |
| A **toasted** sandwich | It says toasted at Checkout and on the receipt, and the price doesn't change |
| **Extra** meat and **extra** cheese | Both Extra prices are added, for that size |
| **Three sandwiches** in one order | All three are listed, oldest first, each with its own toppings and price |
| **Only a drink**, then Checkout | It works: an order doesn't need a sandwich |
| **Nothing**, then Checkout | A friendly message, then the Order screen again |
| **Cancel** at Checkout, and **Cancel Order** | Back to Home, no receipt file, and the next order starts empty |
| **Confirm** two orders | Two receipt files. Each matches what Checkout showed: the items, the toppings, the total. |
| Any **price** | Two decimal places: `$8.50`, not `$8.5` |
| **Bad input** everywhere: `abc`, `9`, just Enter | It asks again, and nothing crashes |

## What makes a capstone stand out

**It works**
- [ ] Every screen and option from your document works, and bad input never crashes it
- [ ] The prices are right: checked by hand, or by JUnit tests if you wrote them
- [ ] Every row of [Test it like a customer](#test-it-like-a-customer) does what it should

**The design is easy to follow**
- [ ] Your **class diagram** matches your code, and you can say why it's designed that way
- [ ] Inheritance, an abstract class or an interface where it fits, not everywhere. Each class has **one job**.
- [ ] Classes sorted into `model`, `data` and `ui`

**The code is easy to read**
- [ ] Java naming: `PascalCase` classes, `camelCase` variables and methods, full words ([Java Code Conventions](/handouts/java-code-conventions)), and `UPPER_CASE` for constants
- [ ] Small methods that each do one thing, and no repeated blocks
- [ ] Formatted code (**Cmd+Option+L** / **Ctrl+Alt+L**), and no commented-out code or leftover `TODO`s. Short section comments that group methods (`// ---------- Order screen ----------`) are welcome.

**The repository tells the story**
- [ ] **Small commits** with clear messages, on **branches**, merged into `main` as each feature works
- [ ] A **README** with what it does, its main features, how to run it, your **class diagram**, a screenshot of each screen, and one interesting piece of code ([template](/handouts/markdown-and-readmes))
- [ ] A public **project board**, with each card in the right column

**It's yours**
- [ ] Optional: a shop name and a welcome banner (see [Make it your own](#make-it-your-own-optional))
- [ ] You can explain every line. AI follows the [AI Use Policy](/handouts/ai-use-policy): your own attempt first, and you'll be asked about your code on demo day.

## Make it your own (optional)

Only after every required screen and option works and is pushed. One at a time; commit and push after each.

1. **[Signature items](#signature-items)** (your document's **Challenge Yourself**, about half a day). **This is the one that counts most:** implemented well, with every required feature working correctly, it gets you to **Exceeding** on required features, the biggest part of **Completion of Objectives**.
2. **A shop name and a welcome banner** (about 15 minutes): the same idea as Capstone 1. They're nice to have, but they won't get you to Exceeding on their own.
3. **[More ideas](#more-ideas)**, after Signature items work: extra features your document doesn't ask for. Signature items plus extras, with **everything** working correctly, is what **Leading** on required features looks like.

### Signature items

**What it means:** a signature sandwich is a ready-made one, like the BLT or the Philly Cheese Steak. The customer picks it by name, then **adds or removes** toppings before it goes on the order. Both are part of it: a sandwich nobody can change is only half of the feature.

> **User story:** As a customer, I want to pick a BLT and leave off the tomatoes, so that I don't have to build the whole sandwich myself.

**Where it goes:** the Order screen's menu stays the same. Ask **inside** Add Sandwich, as its first question:

```text
=== Add Sandwich ===
  1) Build your own
  2) BLT
  3) Philly Cheese Steak
Your choice: 2

BLT: 8" white, bacon, cheddar, lettuce, tomatoes, ranch, toasted
  1) Add a topping   2) Remove a topping   0) Done
Your choice: 2
Remove which topping?
  1) Bacon   2) Cheddar   3) Lettuce   4) Tomatoes   5) Ranch
Your choice: 4

BLT: 8" white, bacon, cheddar, lettuce, ranch, toasted
  1) Add a topping   2) Remove a topping   0) Done
```

> [!IMPORTANT] Your document's hint
> Make each signature sandwich a **child of your sandwich class**. (A BLT **is a** sandwich.)

- **The price follows the toppings.** Remove the bacon, and the price goes down; add a meat, and it goes up.
- The Deli's BLT lists **ranch**, which isn't in its sauce list: add ranch to your sauces.

### More ideas

None of these changes a required option or its number.

| Idea | What it does | About |
|---|---|---|
| **Order total** | The Order screen shows the total so far, under the items, and it goes up as they're added. | 15 minutes |
| **Sales this session** | When the user exits, show how many orders were placed since the app started, and their total. Cancelled orders don't count. | 30 minutes |
| **Remove an item** | A new option **5** on the Order screen: list the items with numbers, and take one off the order. | 1 hour |
| **Quantity** | After an item is built, ask "How many of these?" The Order screen, Checkout and the receipt all show the quantity and the right price. | 1 hour |
| **Combo discount** | At Checkout, ask for a promo code. With the code, an order that has a sandwich, a drink **and** chips gets 10% off, on its own line. Round the discount to cents ([Where to round](/handouts/bigdecimal#where-to-round)). Without the code, the total is the same as always. | 1–2 hours |

**Not this time:** editing a sandwich after it's on the order, a database, a web page, a Swing window, user accounts, or a big feature from AI that you can't explain line by line. A finished app with no extras beats a half-working app with signature sandwiches.

## Demo day (Friday 12/4)

You have **10 minutes**:
1. **Run the app:** place an order with a sandwich (a few toppings and an extra), a drink and chips; check out; open the receipt file. Then try to check out an **empty order**, and show the message.
2. **Show one interesting piece of code** you wrote, and explain it. [Anatomy of Java Code](/handouts/code-anatomy#_3-explain-a-method-out-loud) shows how. Your class diagram is a good place to start.
3. **Answer questions** if there's time.

- [ ] Rehearse once, out loud, on Thursday, with a timer
- [ ] Pick your interesting piece of code ahead of time
- [ ] Practice [the four questions](/handouts/code-anatomy#_4-the-four-questions) with a partner, on a method you wrote

## AI prompts that help you think

Your own attempt first ([AI Use Policy](/handouts/ai-use-policy)). These ask AI to **explain or question you**. If it answers with code anyway, ask it for a hint instead.

- **Design:** "I'm designing a food-order app. Ask me questions, one at a time, that help me decide what my classes should be. Don't suggest any classes."
- **My diagram:** the [Persona prompt](#review-your-diagram-with-ai) reviews it.
- **Toppings:** "What are common mistakes in a loop that keeps asking for toppings until the user is done? Don't write code."
- **Prices:** "My sandwich's price is wrong. What should I look at first in the debugger? Don't fix it for me."
- **The receipt:** "Why might my receipt file be created but empty? Explain it, without code."
- **Presenting:** "Ask me five questions a classmate might ask about this method I wrote."

## Stuck?

1. **20-minute rule:** stuck for 20 minutes? Stop and ask.
2. **Office hours:** Monday through Thursday; the times are under **Key dates**, at the top of this page.
3. Look back at the demos for Workbooks 4a, 5a and 6a in the [demos repo](https://github.com/craigmckeachie/java-academy-demos), and at your own `dealership-manager` and `portfolio-manager`.
4. Use the debugger: set a breakpoint in a `getPrice()` method and watch the total build up.
5. **"The system cannot find the path specified" when saving a receipt?** The `receipts` folder doesn't exist yet, or it's in the wrong place. It goes next to `pom.xml`.
6. **The receipt file is there, but it's empty?** Close the `BufferedWriter` when you're done writing. Until you do, the text may not be in the file.
7. **"would be overwritten by checkout" when switching branches?** Commit your changes first. Never click Force Checkout. See [Ignore IntelliJ Files](/handouts/git-ignore-idea) if it names a `.idea` file.
