---
publish: true
title: Why Static?
section: Java
order: 15.3
---

# Why Static? When You'd Actually Use It

> [!TIP] The one-sentence rule
> **Static field:** "there's one of these for the whole class, not one per object."
> **Static method:** "this job doesn't need any one object, so you call it on the class name."

You know **how** to write `static`. This page is about **when**. The code from class: [BankAccount.java](https://github.com/craigmckeachie/java-academy-demos/blob/main/src/main/java/com/pluralsight/workbook4a/statics/solutions/BankAccount.java) and [FinancialCalculator.java](https://github.com/craigmckeachie/java-academy-demos/blob/main/src/main/java/com/pluralsight/workbook4a/statics/solutions/FinancialCalculator.java).

## 1. Three questions

| Question | If the answer is yes |
|---|---|
| **1. Is the value the same for every object?** One interest rate for every account. One sales tax rate for every order. | Make it a **static field**. |
| **2. Does the method use no fields of an object?** Everything it needs comes in through its parameters. | It can be a **static method**. |
| **3. Would you have to make an object just to call it?** `new Math()` just to get `Math.max(3, 7)`? | Make it **static**. If **every** method is like that, it's a **utility class** with a `private` constructor. |

For a method, ask: **"Which object would I call it on?"** For `deposit()`: *this* account, so it's an instance method. For `Math.max(3, 7)`: no object, it's just math, so it's static.

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

Talk these through with a classmate, or ask an AI to quiz you (Flipped Interaction). **Static or instance?**

- [ ] A `Dog`'s `name`
- [ ] A `Pizza`'s `getPrice()`, which adds up its toppings
- [ ] `DistanceConverter.milesToKilometers(double miles)`
- [ ] The minimum age to rent a car, the same for every customer
- [ ] How many `Student` objects have been created so far
- [ ] In your Car Dealership, should `Dealership.getAllVehicles()` be static? Which dealership's vehicles would it return?
