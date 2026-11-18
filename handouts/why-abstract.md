---
publish: true
title: Why Abstract?
section: Java
order: 15.2
---

# Why Abstract? When You'd Actually Use One

> [!TIP] The one-sentence rule
> **Abstract class:** "every kind of X has this, but there's no such thing as a plain X."
> **Abstract method:** "every kind of X must do this, and each one does it its own way."

You know **how** to write `abstract`. This page is about **when**. For how abstract classes compare with the other class types, see [Class Types](/handouts/class-types).

## 1. Three questions

When you have several classes that are alike, ask:

| Question | If the answer is yes |
|---|---|
| **1. Do they share fields or code?** | Put those in a **parent class**. |
| **2. Would `new Parent()` never make sense?** "Give me an asset." *What kind?* "Sign a contract." *A sale or a lease?* | Make the parent an **abstract class**. |
| **3. Must every child do something, but each one in its own way?** | Make that method an **abstract method**. |

For question 3, ask: **"What would the parent's version return?"** What should `Asset.getValue()` return? 0? That's a wrong answer that looks like a real one. If the parent has no honest answer, the method should be abstract.

That's also why `abstract` helps you. Forget to write `getValue()` in a new child, and the compiler stops you:

```
Class 'Jewelry' must either be declared abstract or implement abstract method 'getValue()' in 'Asset'
```

Without `abstract`, the program would run and quietly count the diamond ring as $0.

## 2. Where you've met it

| Abstract parent | Children | Abstract method | When |
|---|---|---|---|
| `Asset` | `House`, `Vehicle`, `Cash` | `getValue()` | Week 6 (Abstract Assets) |
| `Contract` | `SalesContract`, `LeaseContract` | `getTotalPrice()`, `getMonthlyPayment()` | Week 6 Friday (Workshop 5w) |
| A menu item | a sandwich, a drink, chips | `getPrice()` | Capstone 2 |

The last one is coming up: a receipt loops over everything ordered and adds up `getPrice()`, but a sandwich is priced nothing like a bag of chips.

## 3. More everyday examples

| Abstract parent | Children | Abstract method |
|---|---|---|
| `Employee` | `HourlyEmployee`, `SalariedEmployee` | `getWeeklyPay()` |
| `Shape` | `Circle`, `Rectangle` | `getArea()` |
| `GameCharacter` | `Wizard`, `Knight` | `attack()` |
| `Shipment` | `GroundShipment`, `OvernightShipment` | `getShippingCost()` |

Here's the first one in code. Every employee has a name, but nobody is just "an employee", and each kind gets paid its own way:

```java
public abstract class Employee {
    private String name;

    public Employee(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public abstract BigDecimal getWeeklyPay();
}
```

```java
public class HourlyEmployee extends Employee {
    private BigDecimal hourlyRate;
    private int hoursWorked;

    public HourlyEmployee(String name, BigDecimal hourlyRate, int hoursWorked) {
        super(name);
        this.hourlyRate = hourlyRate;
        this.hoursWorked = hoursWorked;
    }

    @Override
    public BigDecimal getWeeklyPay() {
        return hourlyRate.multiply(new BigDecimal(hoursWorked));
    }
}
```

```java
public class SalariedEmployee extends Employee {
    private BigDecimal yearlySalary;

    public SalariedEmployee(String name, BigDecimal yearlySalary) {
        super(name);
        this.yearlySalary = yearlySalary;
    }

    @Override
    public BigDecimal getWeeklyPay() {
        return yearlySalary.divide(new BigDecimal("52"), 2, RoundingMode.HALF_UP);
    }
}
```

A payroll loop doesn't care which kind each one is:

```java
for (Employee employee : employees) {
    System.out.println(employee.getName() + ": $" + employee.getWeeklyPay());
}
```

## 4. Java's own abstract classes (you've used them)

- **`Number`** is abstract. `Integer`, `Double` and **`BigDecimal`** all extend it. You can't write `new Number(5)`: what kind of number?
- **`Reader`** is abstract. The **`FileReader`** you used for File I/O in Week 3 is one of its children.

Most of the time, you'll **use** abstract classes someone else wrote. Sometimes, like `Contract`, you'll write one.

## 5. Try it

Talk these through with a classmate, or ask an AI to quiz you (Flipped Interaction):

- [ ] A **library** has books, DVDs and magazines. Each can be checked out, but for a different number of days. What's the abstract class? What's the abstract method?
- [ ] A **pet store** sells dogs, cats and fish. What would `new Pet()` mean? What could every pet share?
- [ ] Should `Vehicle` in Monday's `vehicle-inheritance` be abstract? Argue both sides. (Is there ever "just a vehicle" on the lot?)
- [ ] Pick one row from section 3, and say what the parent's version of the method would return if it weren't abstract. Why is that a problem?
