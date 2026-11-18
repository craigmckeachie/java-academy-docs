---
publish: true
title: Fri 11/20
section: Daily Checklists
---

# Friday 11/20: Today's Checklist

**Today:** the **Car Dealership, part 2** (Workshop 5w). Your dealership starts **selling and leasing** cars. First, you move your project into **packages**: folders that sort your classes by the job they do. Then you build the contracts: an abstract `Contract` with two children, the same idea as Wednesday's `Asset`.

**Today's target:** your project ported into packages, and **Phase 1** with numbers that match p. 5. The whole workshop is due **Monday 12/7**, after Capstone 2.

Check items off as you go. **Commit and push after every step that works.**

## First thing

- [ ] **`car-dealership`** (part 1) is finished and pushed. Today copies it, so it needs to run.
- [ ] **Assessment 2** is **Monday 11/23 at 3:00**. Read the [Assessment Policy](/handouts/assessment-policy) if you haven't.
- [ ] The **Friday survey** is this afternoon (the link will be in Teams)

## Kickoff: packages and sales (25 min)

Keep these open: [Packages](/handouts/package-organization) and [Loan Payment](/handouts/loan-payment).

> [!TIP] Remember
> **`model`** = the things (vehicles, contracts). **`data`** = the files. **`ui`** = the screen. Only `ui` prints or reads input.

## Port your project into packages (about 55 min, p. 6)

We use our own names, not p. 6's: the project is **`dealership-manager`** and the package is **`com.pluralsight.dealershipmanager`**.

### Copy it over

- [ ] Create a new project **`dealership-manager`** in your `workshops` folder: Maven, **Create Git repository** checked, **Add sample code** unchecked, **GroupId** `com.pluralsight`
- [ ] Right-click `src/main/java` → **New** → **Package** → `com.pluralsight.dealershipmanager`
- [ ] In **`car-dealership`**, right-click your package → **Open In** → **Finder** (Windows: **Explorer**). Copy the five `.java` files.
- [ ] In **`dealership-manager`**, open `com.pluralsight.dealershipmanager` in Finder or Explorer the same way, and paste them there
- [ ] Each copied file's **first line** is red. Change it to `package com.pluralsight.dealershipmanager;`
- [ ] Copy **`inventory.csv`** into the project folder (next to `pom.xml`), and keep a backup copy
- [ ] Run it and choose the **list all vehicles** option: you see your vehicles. Commit.

### Sort it into packages

- [ ] Right-click `com.pluralsight.dealershipmanager` → **New** → **Package** → `model`. Then `data`, then `ui`.
- [ ] **Drag** each class onto its package and click **Refactor**: `Vehicle` and `Dealership` → `model`, `DealershipFileManager` → `data`, `UserInterface` → `ui`. `Program` stays where it is.
- [ ] Open `UserInterface`: IntelliJ added `import` lines for the classes it uses
- [ ] Run it again: everything still works. Errors? See **Stuck?** below.
- [ ] Commit, share it to GitHub as a **public** repo, and add the link to the class GitHub sheet
- [ ] Copy **`contracts.csv`** from this week's **WorkshopFiles.zip** into the project folder. Open it, click at the very end of the last line, and press **Enter** once, so your first contract starts on a new line.

## Phase 1: the contracts (about 2 hours, pp. 3–4)

![Contract, marked abstract, with contractDate, customerName, customerEmail and vehicleSold, a constructor, getters and setters, and abstract getTotalPrice and getMonthlyPayment. A has-a arrow goes from Contract to Vehicle. SalesContract with salesTaxAmount, recordingFee, isFinanced and getProcessingFee, and LeaseContract with expectedEndingValue and leaseFee, each with a constructor, getters and setters, getTotalPrice and getMonthlyPayment. Hollow-triangle arrows go from SalesContract and LeaseContract up to Contract](/diagrams/contract.svg){.screenshot}

All three classes go in **`model`**. Every money amount is a `BigDecimal`.

- [ ] **`Contract`**, **abstract** (why? see [Why Abstract?](/handouts/why-abstract)): the fields in the diagram, a constructor, getters and setters, and two **abstract** methods with no body: `getTotalPrice()` and `getMonthlyPayment()`
- [ ] **`SalesContract`** extends `Contract`:
  - sales tax is **5%** of the vehicle's price, and the recording fee is **$100**
  - `getProcessingFee()`: **$295** if the vehicle's price is under $10,000, otherwise **$495**
  - `getTotalPrice()`: the vehicle's price + tax + recording fee + processing fee
  - `getMonthlyPayment()`: **$0** if not financed. Financed: **4.25% for 48 months** if the vehicle's price is $10,000 or more, otherwise **5.25% for 24 months**
- [ ] **`LeaseContract`** extends `Contract`:
  - expected ending value is **50%** of the vehicle's price, and the lease fee is **7%**
  - `getTotalPrice()`: ending value + lease fee
  - `getMonthlyPayment()`: **4.0% for 36 months**
- [ ] Copy **`LoanCalculator`** from the [Loan Payment](/handouts/loan-payment) page into `model`, and use it for every monthly payment
- [ ] Check it: in `Program.main`, before the menu starts, make one of each with p. 5's numbers and print the totals and payments. Then remove that code.
  - A sale of a **$995.00** vehicle, not financed: total **$1,439.75**, monthly **$0.00**
  - A lease of a **$31,995.00** vehicle: total **$18,237.15**, monthly **$538.43**
- [ ] Commit and push

## After lunch: check-in (25 min)

- [ ] Be ready to share your screen: do your numbers match p. 5? If not, we'll find out why together.

## Phase 2: save a contract (about 1 hour, p. 5)

- [ ] In **`data`**, create **`ContractDataManager`** with `saveContract(Contract contract)`
- [ ] It **appends** one line to `contracts.csv`: `new FileWriter("contracts.csv", true)`. The `true` means add to the end instead of starting over.
- [ ] The line starts the same for every contract (type, date, customer, the vehicle's details). Then use **`instanceof`** to add the sale's or the lease's own fields, in p. 5's order.
- [ ] The date is written like `20261120`: `contractDate.format(DateTimeFormatter.ofPattern("yyyyMMdd"))` (see [Formatting Dates](/handouts/date-time-format))
- [ ] Money is written with two decimals, like `1439.75`
- [ ] Commit and push

## Late afternoon: the Friday survey (25 min)

- [ ] Fill out the **Friday survey** (the link is in Teams). Be honest: it shapes how next week runs.

## Phase 3: sell or lease from the menu (the rest of the day, p. 7)

- [ ] Add a menu option, **Sell or lease a vehicle**
- [ ] Ask for the **VIN** and find that vehicle. Not found? Say so and go back to the menu.
- [ ] Ask for the customer's name and email, then **sale or lease**
- [ ] **No lease on a vehicle over 3 years old.** If it's too old, say so.
- [ ] For a sale, ask whether they want to **finance** it (yes or no)
- [ ] Create the right contract, show its total and monthly payment, and save it with `ContractDataManager`
- [ ] **Remove the vehicle** from the dealership and save the dealership, so it's gone from `inventory.csv`
- [ ] Commit and push

## End of day

- [ ] Update your **README**: what the app does now, and how to run it
- [ ] Commit, push, and check the link on the class GitHub sheet
- [ ] Study for **Assessment 2** (Monday at 3:00): explain inheritance, overriding, polymorphism and abstract classes out loud, or have an AI quiz you (Flipped Interaction)

## Finished early?

- [ ] JUnit tests for `getTotalPrice()` and `getMonthlyPayment()` with p. 5's two examples
- [ ] **Bonus 1** (p. 8): an **Admin** option, behind a password, with its own `AdminUserInterface` that lists all contracts or the last 10. `ContractDataManager` reads the file back into an `ArrayList<Contract>`.
- [ ] **Bonus 2** (p. 8): add-ons a buyer can choose (window tinting, floor mats, ...), added to the end of the sale's line
- [ ] More ideas: the [Weeks 6–7 Stretch Goals](/stretch-goals/week-6-7-stretch-goals)

## Stuck?

- **[Help Desk](/handouts/help-desk):** today's helper is in the Help Desk breakout room for the first 15–20 minutes of each breakout. Share your screen; you do the typing.
- **Your instructor** is always available. Ask early!
- **"is not public ... cannot be accessed from outside package"?** Add `public` in front of that class, constructor or method. Fields stay `private`.
- **A class name is red after the move?** Click it, press **Option+Enter** (Windows: **Alt+Enter**) → **Import class**.
- **"File not found" for `inventory.csv`?** It belongs in the project folder, next to `pom.xml`, not inside `src`.
- **"is abstract; cannot be instantiated"?** You wrote `new Contract(...)`. Make a `SalesContract` or a `LeaseContract`.
- **"must either be declared abstract or implement abstract method"?** The child is missing `getTotalPrice()` or `getMonthlyPayment()`. Click the error → **Implement methods**.
- **Your first contract joined onto the last line of `contracts.csv`?** Press Enter at the end of that line, and write `"\n"` after each line you append.
- **Payment off by a few cents?** Round the 50% and 7% amounts to cents before adding them, and pass the **total price** to `LoanCalculator`.
