---
publish: true
title: Why Static?
section: Java
order: 53
group: "Classes & OOP"
---

# Why Static? When You'd Actually Use It

> [!TIP] The one-sentence rule
> **Static field:** "there's one of these for the whole class, not one per object."
> **Static method:** "this job uses only what you pass in, never the data in an object's fields, so you call it on the class name."

![The BankAccount class holds one static interestRate. acct1 and acct2 each have their own balance and both use the class's rate](/diagrams/static-vs-instance.svg){.screenshot}

You know **how** to write `static`. This page is about **when**. The code from class: [BankAccount.java](https://github.com/craigmckeachie/java-academy-demos/blob/main/src/main/java/com/pluralsight/workbook4a/statics/solutions/BankAccount.java) and [FinancialCalculator.java](https://github.com/craigmckeachie/java-academy-demos/blob/main/src/main/java/com/pluralsight/workbook4a/statics/solutions/FinancialCalculator.java).

## 1. Three questions

| Question | If the answer is yes |
|---|---|
| **1. Is the value the same for every object?** One interest rate for every account. One sales tax rate for every order. | Make it a **static field**. |
| **2. Does the method use no fields of an object?** Everything it needs comes in through its parameters. | It can be a **static method**. |
| **3. Would you have to make an object just to call it?** `new Math()` just to get `Math.max(3, 7)`? | Make it **static**. If **every** method is like that, it's a **utility class** with a `private` constructor. |

For a method, ask: **"Does it need the data stored in an object's fields?"**

Put two methods side by side:

```java
// Instance: uses THIS account's balance
public void deposit(BigDecimal amount) {
    this.balance = this.balance.add(amount);
}
```

```java
// Static: uses only its parameter
public static double toFahrenheit(double celsius) {
    return celsius * 9 / 5 + 32;
}
```

`deposit()` is useless without an account: whose balance would it add to? So you call it on an object, `acct1.deposit(...)`. `toFahrenheit()` never looks at any object's fields; give it a number and it gives one back. So it's static, and you call it on the class: `TemperatureConverter.toFahrenheit(20)`.

It works the other way too: a static method has **no `this`**, so it **can't** use an object's fields. If a method needs `this.something`, it can't be static.

## 2. Static in the wrong place: a silent bug

Make `balance` static by mistake:

```java
private static BigDecimal balance;
```

Now there's **one** balance for the whole class. Bob deposits $5, and Susan's balance goes up by $5 too. No error and no crash, just wrong numbers.

> [!WARNING] The rule
> A static field never holds something that's different for each object: a name, a balance, a VIN. Those are instance fields.

The other mistake goes the other way. Inside `main` (which is static), you call an object's method without an object:

```
non-static method deposit(java.math.BigDecimal) cannot be referenced from a static context
```

**Don't fix it by adding `static` everywhere.** Usually the fix is to create the object and call the method on it: `acct1.deposit(...)`.

## 3. Where you've met it

| Where | What's static | Why |
|---|---|---|
| Every program since Week 1 | `public static void main` | Java runs `main` before any object exists |
| Week 1 on | `Integer.parseInt(...)`, `String.format(...)` | Converting or formatting text needs no object |
| Week 3 | `LocalDate.now()` | "Today" doesn't belong to any one date |
| Capstone 1 | `static Scanner scanner` at the top of `App` | One `Scanner`, shared by every screen |
| Static demo | `BankAccount.interestRate` | One rate for every account |
| Static demo | `Math.pow`, `FinancialCalculator` | Utility classes: numbers in, answer out |
| `static-classes` exercise | `NameFormatter.format(...)` | A utility class: names in, a formatted name out |
| Friday (Workshop 5w) | `LoanCalculator.calculateMonthlyPayment(...)` | The same kind of class as `FinancialCalculator` |

## 4. More everyday examples

| Example | Static or not? |
|---|---|
| `TemperatureConverter.toFahrenheit(double celsius)` | **Static.** Everything it needs is the number you pass in. |
| `Validator.isValidEmail(String email)` | **Static.** It checks the text you give it. |
| `static final double SALES_TAX_RATE = 0.05;` | **Static constant.** The same for every order, and it never changes (see [Java Code Conventions](/handouts/java-code-conventions)). |
| A counter of how many tickets have been made | **Static field.** One count for the whole class. |
| A ticket's own number | **Instance field.** Every ticket has its own. |

The last two belong together. Every ticket gets the next number, so the class keeps one shared counter:

```java
public class Ticket {
    private static int nextNumber = 1;

    private int number;
    private String eventName;

    public Ticket(String eventName) {
        this.eventName = eventName;
        this.number = nextNumber;
        nextNumber = nextNumber + 1;
    }

    public int getNumber() {
        return number;
    }

    public String getEventName() {
        return eventName;
    }
}
```

```java
Ticket ticket1 = new Ticket("Concert");
Ticket ticket2 = new Ticket("Concert");
Ticket ticket3 = new Ticket("Ball game");

System.out.println(ticket1.getNumber());
System.out.println(ticket2.getNumber());
System.out.println(ticket3.getNumber());
```

Predict the output before you run it. If `number` were static too, what would all three print?

## 5. Try it

Talk these through with a classmate, or ask an AI to quiz you (Flipped Interaction). For each one, ask: **does it belong to each object, or to the class as a whole?** Then decide: **static or instance?**

> [!TIP] Reading the dot
> A **variable** before the dot means one object: `acct1.deposit(50)`, so it's **instance**. A **class name** (capital letter) before the dot means the class itself: `TemperatureConverter.toFahrenheit(20)`, so it's **static**. Below, instance examples are written with a variable, the way you'd call them in code.

- [ ] Every dog has a name. With `Dog rex = new Dog("Rex");`, you read it with `rex.getName()`. Should the `name` field be static or instance?
- [ ] Each pizza adds up **its own** toppings to get its price: `myPizza.getPrice()`. Static or instance?
- [ ] `DistanceConverter.milesToKilometers(double miles)` gets a number and gives one back. Static or instance?
- [ ] The minimum age to rent a car is 21, the same for every customer. Static or instance?
- [ ] A count of how many `Student` objects have been created so far. Static or instance?
- [ ] In your Car Dealership, each `Dealership` object has its own list of vehicles, loaded from its own file. Imagine the program loads **two** dealerships, `northDealership` and `southDealership`. Should `getAllVehicles()` be static or instance?

::: details Check your answers
- **A dog's name: instance.** Every dog has its own name, so `rex` and `buddy` each store one.
- **A pizza's price: instance.** It adds up *that* pizza's toppings. A static `getPrice()` couldn't tell which pizza you mean.
- **`milesToKilometers`: static.** It only uses the number you pass in, never an object's fields. Call it on the class: `DistanceConverter.milesToKilometers(10)`.
- **The minimum rental age: static** (and `final`, since it never changes). One value, shared by every customer.
- **How many students have been created: static.** One count for the whole class. A field in each object would only ever count itself.
- **`getAllVehicles()`: instance.** It returns *this* dealership's list: `northDealership.getAllVehicles()` and `southDealership.getAllVehicles()` give different lists. If it were static, there'd be one list for the whole program, and it couldn't know which dealership you meant.
:::
