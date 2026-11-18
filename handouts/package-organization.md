---
publish: true
title: Packages
section: Java
order: 16
---

# Organizing an App into Packages

A **package** is a folder of classes with a name Java understands. Small projects keep every class in one package, `com.pluralsight`. When an app grows, you sort its classes into packages **by the job they do**, the way you'd sort papers into labeled folders. (Workshop 5w p. 6 asks for packages.)

## 1. The layout

This is the Car Dealership after Friday's move, in a project called `dealership-manager`:

```text
dealership-manager/
├── pom.xml
├── inventory.csv                      ← data files stay in the project folder
├── contracts.csv
└── src/main/java/
    └── com/pluralsight/dealershipmanager/
        ├── Program.java               ← starts the app (has main)
        ├── model/
        │   ├── Vehicle.java
        │   ├── Dealership.java
        │   ├── Contract.java
        │   ├── SalesContract.java
        │   ├── LeaseContract.java
        │   └── LoanCalculator.java    ← the monthly-payment helper
        ├── data/
        │   ├── DealershipFileManager.java
        │   └── ContractDataManager.java
        └── ui/
            └── UserInterface.java
```

## 2. What goes where

| Package | Its job | Asks the question | In the dealership |
|---|---|---|---|
| *(the root)* | Starts the app | "How does it start?" | `Program` |
| **`model`** | The **things** the app is about, and their rules | "What is a vehicle? A contract?" | `Vehicle`, `Dealership`, the contracts |
| **`data`** | Reading and writing **files** | "Where is it saved?" | `DealershipFileManager`, `ContractDataManager` |
| **`ui`** | The **screen**: menus, `Scanner`, `println` | "What does the user see?" | `UserInterface` |

**The rule from part 1 still holds:** only `ui` prints or reads input. `model` and `data` classes **return** things; they never talk to the user.

> [!TIP] Why bother?
> When something breaks, the package tells you where to look. Wrong total? `model`. File not saving? `data`. Menu looks wrong? `ui`. Later, swapping the file for a database changes only `data`.

## 3. Naming the packages

| Part | Rule | Example |
|---|---|---|
| **Root package** | `com.` + company + `.` + app name, all lowercase, **no dashes** | `com.pluralsight.dealershipmanager` |
| **Inside it** | One short lowercase word per job | `model`, `data`, `ui` |

At a real job, the company part is your employer's: something like `com.acme.payroll` (Acme is a made-up name). In class it's always `com.pluralsight`.

A project folder is kebab-case (`dealership-manager`), but a package can't have a dash, so the words run together: `dealershipmanager`.

## 4. The package line and imports

The **first line** of every class says which package it's in, and it must match the folder:

```java
package com.pluralsight.dealershipmanager.model;

public class Vehicle {
```

A class can use classes from **its own package** without asking. To use a class from **another** package, it needs an `import`:

```java
package com.pluralsight.dealershipmanager.ui;

import com.pluralsight.dealershipmanager.model.Vehicle;

public class UserInterface {
```

IntelliJ writes most imports for you. If a class name is red, click it and press **Option+Enter** (Windows: **Alt+Enter**) → **Import class**.

## 5. `public` matters now

Without `public`, a class, constructor or method can only be used **inside its own package**. That never mattered when everything was in one package. Now `UserInterface` (in `ui`) needs to use `Vehicle` (in `model`), so `Vehicle`, its constructor, and the methods `ui` calls must all be `public`.

If one isn't, you'll see an error like:

```text
Vehicle(int) is not public in Vehicle; cannot be accessed from outside package
```

**The fix:** add `public` in front of that class, constructor or method. Fields stay `private`; other classes use the getters.

## 6. Moving a class in IntelliJ

Don't fix package lines by hand. Let IntelliJ move the class:

1. Right-click `com.pluralsight.dealershipmanager` → **New** → **Package**, and type just `model`. Do the same for `data` and `ui`.
2. In the Project window, **drag** a class (for example `Vehicle`) onto its package, or select it and choose **Refactor** → **Move**.
3. Click **Refactor**. IntelliJ changes the `package` line and fixes the `import`s in every class that uses it.
4. Run the app after each move.

> [!WARNING] Data files don't move
> `inventory.csv` and `contracts.csv` stay in the **project folder**, next to `pom.xml`. Packages are only for `.java` files. Your code still opens them as `"inventory.csv"`.
