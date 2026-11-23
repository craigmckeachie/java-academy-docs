---
publish: true
title: Lambdas
section: Java
order: 55
group: "Streams"
---

# Lambdas and Method References

A **lambda** is a tiny method with no name, written right where you need it. A **method reference** (`::`) is an even shorter way to write some lambdas. You'll use both with streams (`filter`, `map`, `forEach`, `reduce`, `sorted`) and with a few list methods. New to streams? Start with [Stream Anatomy](/handouts/streams). (Workbook 6a, pp. 60–78)

## 1. A lambda is a method without the name

Here's a method that answers "does this employee earn more than the limit?", and the same thing as a lambda:

```java
// a normal method
public boolean earnsMore(Employee employee) {
    return employee.getSalary().compareTo(limit) > 0;
}

// the same thing as a lambda
employee -> employee.getSalary().compareTo(limit) > 0
```

| Part | In the method | In the lambda |
|---|---|---|
| **The input** | `(Employee employee)` | `employee`: no type, Java works it out |
| **The arrow** | | `->`: read it as "goes to" |
| **The answer** | `return ...;` | everything after the arrow: no `return`, no `;` |
| **The name** | `earnsMore` | none: it's used once, right where it's written |

**Read it out loud:** "Given an employee, is their salary more than the limit?"

## 2. The shapes a lambda comes in

A lambda's shape depends on two separate things: **how many inputs** it takes (the left side of `->`) and **how many lines** it needs (the right side).

**How many inputs:**

| Inputs | Looks like | Example |
|---|---|---|
| **One** | `input -> ...` | `employee -> employee.getName()` |
| **Two** | `(first, second) -> ...` | `(total, salary) -> total.add(salary)` |
| **None** | `() -> ...` | `() -> new ArrayList<>()` |

Only a lambda with exactly one input can leave out the `( )`.

**How many lines:** any of the shapes above can be one line or more.

| Lines | Looks like | The rules |
|---|---|---|
| **One** | `input -> answer` | no `{ }`, no `return`, no `;` inside |
| **More than one** | `input -> { lines; }` | `{ }` around the lines, each line ends with `;`, and `return` if it gives back an answer |

Here's a one-input lambda with more than one line:

```java
employees.forEach(employee -> {
    String line = employee.getName() + ": $" + employee.getSalary();
    System.out.println(line);
});
```

Note the ending: `});`. The `}` closes the lambda, the `)` closes `forEach(`, and the `;` ends the line.

## 3. Where lambdas go

Each method below calls your lambda for you, once per item (or once per pair). What it needs back is different:

| Method | Your lambda gets | It must give back | Example |
|---|---|---|---|
| **`filter`** | one item | `true` (keep it) or `false` | `employee -> employee.getSalary().compareTo(limit) > 0` |
| **`map`** | one item | the new value for it | `employee -> employee.getName()` |
| **`forEach`** | one item | nothing: it just does something | `name -> System.out.println(name)` |
| **`reduce`** | the total so far, and the next item | the new total | `(total, salary) -> total.add(salary)` |
| **`sorted`** / **`list.sort`** | two items | a number: negative, 0 or positive ([Sorting](/handouts/sorting)) | `(first, second) -> first.getName().compareTo(second.getName())` |

Lists have one more that takes a lambda, `removeIf`: see section 6.

Put together, with the workbook's employees:

```java
List<String> names = employees.stream()
        .map(employee -> employee.getName())
        .toList();

BigDecimal payroll = employees.stream()
        .map(employee -> employee.getSalary())
        .reduce(BigDecimal.ZERO, (total, salary) -> total.add(salary));
```

## 4. Method references: `::`

Some lambdas do nothing but **pass their input straight to one method**. For those, Java has a shortcut: name the method, with `::` in front of it, and leave out the input.

```java
names.forEach(name -> System.out.println(name));   // a lambda
names.forEach(System.out::println);                // the same, as a method reference
```

Read `System.out::println` as "use `System.out`'s `println` method." Java hands it each name, just as the lambda did.

### The test: can this lambda be a method reference?

Look at the lambda's answer (after the arrow) and ask two questions:

1. **Is it exactly one method call, and nothing else?** No second call chained on, no `+`, no `>`, no extra text.
2. **Does the input go in unchanged?** It's either the object the method is called **on** (`employee -> employee.getName()`) or exactly what's passed **to** it (`name -> System.out.println(name)`), with nothing added or swapped around.

**Two yeses: use a method reference. Any no: keep the lambda.** Every lambda that passes looks like one of these two:

```java
input -> input.method()            // becomes  InputClass::method
input -> something.method(input)   // becomes  something::method
```

### The four kinds

| Kind | The lambda | The method reference |
|---|---|---|
| **1. The input's own method** | `employee -> employee.getName()` | `Employee::getName` |
| | `name -> name.toUpperCase()` | `String::toUpperCase` |
| **2. A static method** | `text -> Integer.parseInt(text)` | `Integer::parseInt` |
| | `number -> Math.abs(number)` | `Math::abs` |
| **3. A method of one object you already have** | `name -> System.out.println(name)` | `System.out::println` |
| **4. A constructor** (`new`) | `() -> new ArrayList<>()` | `ArrayList::new` (Workbook 6a p. 73) |

**What goes in front of `::`:** for kind 1, the **input's class** (`Employee`). For the others, whatever owns the method: the class for a static method (`Integer`), the object for kind 3 (`System.out`), and the class being made for kind 4 (`ArrayList`).

One more you'll see in `reduce`: with **two** inputs, `(total, salary) -> total.add(salary)` becomes `BigDecimal::add`. It's kind 1: the first input's own `add`, with the second one handed to it, in that order.

### When you can't use one

| Lambda | Method reference? | Why |
|---|---|---|
| `employee -> employee.getName()` | ✅ `Employee::getName` | one call on the input |
| `employee -> employee.getName().toUpperCase()` | ❌ | two calls |
| `name -> System.out.println("Name: " + name)` | ❌ | the input gets text added first |
| `employee -> employee.getSalary().compareTo(limit) > 0` | ❌ | two calls and a comparison |
| `text -> Integer.parseInt(text.trim())` | ❌ | the input is changed first |
| `(first, second) -> second.compareTo(first)` | ❌ | the inputs are swapped |
| `name -> "Hello, " + name` | ❌ | no method at all |

> [!TIP] Lambda first, always
> Write the lambda first, and get it working. Only then, if IntelliJ shows a yellow hint like **"Lambda can be replaced with method reference"**, decide whether to take it (**Option+Enter** / **Alt+Enter**). Both versions are correct; use the one you can explain.

## 5. Variables from outside a lambda

A lambda can **read** a variable from the method around it, like `limit` above. It **can't change** one:

```java
BigDecimal total = BigDecimal.ZERO;
employees.forEach(employee -> total = total.add(employee.getSalary()));  // won't compile
```

> local variables referenced from a lambda expression must be final or effectively final

"Effectively final" means "never changes after it's set." To add things up, use `map` and `reduce` (section 3), or the loop you already know.

## 6. Removing items from a list

Removing items **inside a for-each loop** looks right, and it compiles, but it crashes:

```java
for (String name : names) {
    if (name.startsWith("E")) {
        names.remove(name);   // crashes on the next pass of the loop
    }
}
```

> Exception in thread "main" java.util.ConcurrentModificationException

The for-each loop is keeping track of where it is in the list. Removing an item moves everything after it, so the loop loses its place, and Java stops it rather than skip an item without telling you.

**The fix: `removeIf`.** Every list has it. Give it a lambda that answers `true` for each item to **remove**:

```java
names.removeIf(name -> name.startsWith("E"));
```

With `[Ezra, Ian, Elisha, Maya]`, `names` is now `[Ian, Maya]`. It changes the list itself, so you can keep adding to it.

**With a stream:** `filter` keeps the items where the lambda says `true`, so **flip the test** with `!`, and put the new list back in the variable:

```java
names = names.stream()
        .filter(name -> !name.startsWith("E"))
        .toList();
```

Same answer, `[Ian, Maya]`, but a stream doesn't change the old list; it makes a new one.

| | `removeIf` | `stream()...filter(...).toList()` |
|---|---|---|
| **The lambda says** | which items to **remove** | which items to **keep** |
| **The old list** | is changed | stays the same; you get a new list |
| **`add(...)` afterwards** | works | **crashes**: a `toList()` list can't be changed |

> [!WARNING] A `toList()` list can't be changed
> Adding to it, or removing from it, gives `UnsupportedOperationException`. That bites when the list is one your program keeps adding to, like a list of orders. Use `removeIf` there. (Or wrap the stream in `new ArrayList<>(...)` to get a list you can change.)

## Stuck?

- **"cannot find symbol" on the input, like `employee.getName()`?** Java couldn't tell what type `employee` is. Check the list's type (`List<Employee>`, not `List`), and see the warning on the [Sorting](/handouts/sorting#_3-way-2-a-comparator-outside-the-class) page for `comparing(...).reversed()`.
- **"bad return type in lambda expression"?** The lambda gives back the wrong kind of answer. `filter` needs a `boolean`; `reduce` on `BigDecimal`s needs a `BigDecimal`.
- **Missing a `)` or a `;`?** Count the brackets: a one-line lambda inside `forEach(` ends with `);`, a `{ }` lambda ends with `});`.
- **`map` then `toList()` gives a `List<Employee>`, not the names?** The lambda in `map` must give back the **new** value: `employee -> employee.getName()`.
- **"local variables referenced from a lambda expression must be final..."?** See section 5.
- **`ConcurrentModificationException`?** You removed from a list inside a for-each loop over it. Use `removeIf` (section 6).
- **`UnsupportedOperationException` when you `add`?** The list came from `toList()`, and it can't be changed (section 6).
- **Not sure what `::` means in code you found?** Turn it back into a lambda with the four kinds in section 4. IntelliJ can do it too: click it, **Option+Enter** / **Alt+Enter** → **Replace method reference with lambda**.
