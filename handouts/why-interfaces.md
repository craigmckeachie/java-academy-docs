---
publish: true
title: Why Interfaces?
section: Java
order: 53
group: "Classes & OOP"
---

# Why Interfaces? When You'd Actually Use One

> [!TIP] The one-sentence rule
> **Interface:** "these classes aren't the same kind of thing, but they can all **do** this."

You know **how** to write an `interface`. This page is about **when**, and how to choose between an interface and an abstract class. For how they compare side by side, see [Class Types](/handouts/class-types); for abstract classes, see [Why Abstract?](/handouts/why-abstract). (Workbook 6a, Modules 1 and 2)

## 1. Three questions

When several classes need the same method, ask:

| Question | If the answer is yes |
|---|---|
| **1. Are the classes different kinds of things?** A bird isn't a drone. | An **interface** lets them share a method without sharing a parent. |
| **2. Would a shared parent be empty?** No fields, no code, only method names. | Use an **interface** instead: it's a list of method names. |
| **3. Does a class need more than one ability, or does it already have a parent?** A drone flies **and** recharges. | A class gets one parent, but as many **interfaces** as it needs. |

## 2. Where you've met it

| Interface | Classes that implement it | Method | When |
|---|---|---|---|
| `Flyable` | `Bird`, `Airplane`, `Drone` | `fly()` | Monday's demo |
| `Rechargeable` | `Drone` | `charge()` | Monday's demo |
| `Valuable` | `FixedAsset` and `Account`, and so all their children | `getValue()` | Portfolio Manager |
| `List` | `ArrayList`, `LinkedList` | `add()`, `get()`, `size()`... | Every week since Week 3 |

`Valuable` shows why it helps. A house and a credit card have nothing in common except that each has a value. That's enough for one `Portfolio` to hold both and add them up.

## 3. An example in code

A company pays its **employees** and its **invoices** (bills from other companies). An invoice isn't a kind of employee, and they share no fields. But every Friday, both must be paid:

```java
public interface Payable {
    BigDecimal getAmountDue();
}
```

```java
public class Employee implements Payable {
    private String name;
    private BigDecimal hourlyRate;
    private int hoursWorked;

    public Employee(String name, BigDecimal hourlyRate, int hoursWorked) {
        this.name = name;
        this.hourlyRate = hourlyRate;
        this.hoursWorked = hoursWorked;
    }

    @Override
    public BigDecimal getAmountDue() {
        return hourlyRate.multiply(BigDecimal.valueOf(hoursWorked));
    }
}
```

```java
public class Invoice implements Payable {
    private int invoiceNumber;
    private BigDecimal amount;

    public Invoice(int invoiceNumber, BigDecimal amount) {
        this.invoiceNumber = invoiceNumber;
        this.amount = amount;
    }

    @Override
    public BigDecimal getAmountDue() {
        return amount;
    }
}
```

One list holds both, and one loop adds them up. It doesn't care which is which:

```java
List<Payable> payables = new ArrayList<>();
payables.add(new Employee("Ezra", new BigDecimal("25.00"), 40));
payables.add(new Invoice(1042, new BigDecimal("310.50")));

BigDecimal total = BigDecimal.ZERO;
for (Payable payable : payables) {
    total = total.add(payable.getAmountDue());
}
System.out.println("Total to pay: $" + total);   // Total to pay: $1310.50
```

Next month the company pays **rent**, too. Write a `Rent` class that implements `Payable`, and the loop doesn't change.

## 4. Interface or abstract class?

Both can promise a method that each class writes its own way. So look at what else the classes share:

> [!IMPORTANT] Stored or worked out?
> - If the classes share something they **store** (a name, an ID), put it in an **abstract class**.
> - If they only share something they **work out**, each its own way, an **interface** is enough.

| What you see | Choose | Example |
|---|---|---|
| They're the same kind of thing, and share **fields or code** | **Abstract class** | `HourlyEmployee` and `SalariedEmployee` both store a name |
| They're different kinds of things, and share **only a method** | **Interface** | `Employee` and `Invoice` both have an amount due |
| The shared parent would have no fields and no code | **Interface** | A parent with only `fly()` in it |
| A class already has a parent, or needs several abilities | **Interface** | `Drone` is `Flyable` **and** `Rechargeable` |

**You can use both.** In Portfolio Manager, `FixedAsset` is an abstract class (its children share fields), and it **implements** `Valuable` (so an account can be in the same list):

```java
public abstract class FixedAsset implements Valuable {
```

**Sometimes either one works.** If you can say "I chose this one **because**..." and point to your own classes, you chose well.

## 5. When you don't need either

- **Only one class would implement it.** An interface for one class is an extra file that does nothing.
- **The classes differ only in a value.** A red car and a blue car aren't two classes. They're one `Car` with a `color`.
- **Nothing uses them together.** If no list, variable or parameter ever has the interface as its type, what is it for?

## 6. Java's own interfaces (you've used them)

- **`List`**: `ArrayList` implements it. That's why `List<Valuable> valuables = new ArrayList<>();` works.
- **`Comparable`**: "I can be put in order." `String` and `BigDecimal` both implement it, and that's where `compareTo` comes from ([Sorting](/handouts/sorting)).

Most of the time, you'll **use** interfaces someone else wrote. Sometimes, like `Valuable`, you'll write one.

## 7. Try it

Talk these through with a classmate, or ask an AI to quiz you (Flipped Interaction):

- [ ] A **phone** and a **lamp** can both be turned on and off. Interface or abstract class? What's it called, and what are its methods?
- [ ] A **library** has books, DVDs and magazines. Each stores a title and works out its own due date. Interface or abstract class? Why?
- [ ] The library also rents out **study rooms**, which can be reserved. So can books. What would you add?
- [ ] Find an interface you'd **remove**: a `Wheeled` interface that only `Bicycle` implements. What would have to change for it to be worth keeping?

::: details Check your answers
Other answers can be right too, if you can say **because**.

1. **An interface**, like `Switchable`, with `turnOn()` and `turnOff()`. A phone and a lamp are different kinds of things, and all they share is something they can do.
2. **An abstract class**, like `LibraryItem`. They're the same kind of thing, and they all **store** a title, so it goes in the parent. `getDueDate()` is an abstract method, because each one **works it out** its own way.
3. **An interface**, like `Reservable`, with `reserve()`. A study room isn't a library item, so they can't share that parent. `Book` already extends `LibraryItem`, and it can still implement `Reservable`.
4. `Wheeled` is worth keeping if **other classes** that aren't bicycles implement it (a wheelchair, a shopping cart), **and** something uses them together: a list, a variable or a parameter of type `Wheeled`.
:::
