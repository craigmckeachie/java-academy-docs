---
publish: true
title: BigDecimal
section: Java
order: 11
group: "Fundamentals"
---

# BigDecimal: Exact Money Math

A `double` stores most decimals as a close **approximation**, so `0.1 + 0.2` prints `0.30000000000000004`. A **`BigDecimal`** stores a decimal **exactly**, so the cents always come out right. Use it for money: prices, totals, tax, balances. (Workbook 4a, pp. 69–71)

```java
import java.math.BigDecimal;
import java.math.RoundingMode;   // only when you round or divide
```

A `BigDecimal` is an **object**, not a primitive like `int` or `double`. That changes three things:

- You **create** one with `new` (or a method like `valueOf`), not by typing a bare number.
- You do **math with methods** (`add`, `multiply`), not with `+` and `*`.
- You **compare** with a method (`compareTo`), not with `>` or `==`.

## 1. Getting a value into a BigDecimal

Ask one question: **where does the number come from?**

| The number comes from… | Use | Example |
|---|---|---|
| **Your code**: you type it in | `new BigDecimal("…")`, **with quotes** | `new BigDecimal("19.99")`<br>`new BigDecimal("100")` |
| **0, 1 or 10** | a constant | `BigDecimal.ZERO`, `BigDecimal.ONE`, `BigDecimal.TEN` |
| **An `int` variable** | `BigDecimal.valueOf(…)` | `BigDecimal.valueOf(quantity)` |
| **A `double` variable** | `BigDecimal.valueOf(…)` | `BigDecimal.valueOf(price)` |
| **A `String`**: what the user typed, or a part of a file line | `new BigDecimal(…)` | `new BigDecimal(input.trim())`<br>`new BigDecimal(parts[4])` |

> [!TIP] Two rules cover almost everything
> - **Typed in your code → quotes:** `new BigDecimal("19.99")`
> - **A number variable → `valueOf`:** `BigDecimal.valueOf(quantity)`

A running total starts at `BigDecimal.ZERO`, like an `int` total starts at `0`:

```java
BigDecimal total = BigDecimal.ZERO;
```

### The trap: a double without quotes

<div class="viz"><div class="viz-two" style="grid-template-columns:1fr">
<div class="viz-card"><div class="viz-t">❌ No quotes</div>It compiles and runs, but it copies the <code>double</code>'s approximation:<pre>new BigDecimal(19.99)</pre>stores <code style="word-break:break-all">19.989999999999998436805981327779591083526611328125</code></div>
<div class="viz-card"><div class="viz-t">✅ Quotes, or valueOf</div>Both store exactly what you meant:<pre>new BigDecimal("19.99")
BigDecimal.valueOf(19.99)</pre>store <code>19.99</code></div>
</div></div>

There's no error, so this bug is easy to miss. It shows up later as a cent that's off after rounding: `new BigDecimal(1.005)` rounds to `1.00`, while `new BigDecimal("1.005")` rounds to `1.01`.

> [!WARNING] Never write new BigDecimal( with a number inside the parentheses
> Inside `new BigDecimal(…)` there's always either **quotes** or a **String variable**. For a number variable, use `BigDecimal.valueOf(…)`.

### Reading a BigDecimal from the user or a file

`new BigDecimal(text)` works like `Double.parseDouble(text)`: if the text isn't a number, it throws a **`NumberFormatException`**. That includes a leading space and a dollar sign, so `trim()` what the user typed:

```java
System.out.print("Amount: ");
BigDecimal amount = new BigDecimal(scanner.nextLine().trim());
```

To ask again instead of crashing, write a `promptForBigDecimal()` helper the same way as `promptForDouble()` on [Validating Input](/handouts/validating-input#asking-for-a-number): the only change is `new BigDecimal(…)` instead of `Double.parseDouble(…)`.

## 2. Math gives you a new BigDecimal

The math methods **don't change** the `BigDecimal` you call them on. They **return a new one** with the answer. To keep the answer, **assign it**:

<div class="viz"><div class="viz-two" style="grid-template-columns:1fr">
<div class="viz-card"><div class="viz-t">❌ The answer is thrown away</div><pre>BigDecimal total = BigDecimal.ZERO;
total.add(new BigDecimal("19.99"));
System.out.println(total);</pre>prints <code>0</code></div>
<div class="viz-card"><div class="viz-t">✅ Assign it back</div><pre>BigDecimal total = BigDecimal.ZERO;
total = total.add(new BigDecimal("19.99"));
System.out.println(total);</pre>prints <code>19.99</code></div>
</div></div>

You've seen this before with Strings: `name.toUpperCase();` on its own line doesn't change `name` either. You need `name = name.toUpperCase();`.

Each math operator has a method. The `//` line is the `double` way; the line under it is the `BigDecimal` way:

```java
// total = total + price;
total = total.add(price);

// total = total - discount;
total = total.subtract(discount);

// lineTotal = price * quantity;
lineTotal = price.multiply(BigDecimal.valueOf(quantity));

// average = total / count;
average = total.divide(BigDecimal.valueOf(count), 2,
        RoundingMode.HALF_UP);

// refund = -amount;
refund = amount.negate();
```

Both sides of the math must be `BigDecimal`s: `price.multiply(quantity)` with an `int` quantity doesn't compile. Turn the `int` into a `BigDecimal` first, with `BigDecimal.valueOf(quantity)`.

## 3. Rounding to cents

A `BigDecimal` keeps every decimal place it gets. Multiplying adds more of them:

```java
BigDecimal price = new BigDecimal("24.99");
BigDecimal tax = price.multiply(new BigDecimal("0.0825"));
System.out.println(tax);   // 2.061675
```

`setScale` rounds to the number of decimal places you ask for. It returns a new `BigDecimal` too, so assign it:

```java
tax = tax.setScale(2, RoundingMode.HALF_UP);
System.out.println(tax);   // 2.06
```

`RoundingMode.HALF_UP` is the rounding you learned in school: `.5` and up rounds up. It's the one to use for money in this course.

### Dividing always needs a scale

`10 ÷ 3` is `3.333…` forever, and a `BigDecimal` can't store "forever". So a plain `divide` crashes:

```java
new BigDecimal("10").divide(new BigDecimal("3"));
// crashes: ArithmeticException: Non-terminating decimal expansion
```

Always give `divide` the decimal places and the rounding mode, like `setScale`:

```java
BigDecimal ten = new BigDecimal("10");
BigDecimal share = ten.divide(new BigDecimal("3"), 2, RoundingMode.HALF_UP);
System.out.println(share);   // 3.33
```

## 4. Comparing

Use `compareTo`. It compares the **values**, then gives you back a number: **negative** if the first is smaller, **0** if they're equal, **positive** if the first is bigger. Compare that number to `0`, using the operator you wanted in the first place:

```java
amount.compareTo(BigDecimal.ZERO) > 0    // amount > 0
amount.compareTo(BigDecimal.ZERO) < 0    // amount < 0
price.compareTo(limit) >= 0              // price >= limit
total.compareTo(budget) == 0             // total == budget
```

> [!TIP] How to read it
> `a.compareTo(b) > 0` means `a > b`. Put the operator where the `compareTo` is, and it reads the same.

> [!WARNING] Not == and not equals
> `==` checks whether two variables are the **same object**, not the same value. `equals` also compares the decimal places: `new BigDecimal("2.0").equals(new BigDecimal("2.00"))` is **false**. `compareTo` says they're equal.

## 5. Getting a value out

```java
BigDecimal total = new BigDecimal("1234.5");

System.out.println("$" + total);          // $1234.5
System.out.printf("$%.2f%n", total);      // $1234.50

String withCommas = String.format("$%,.2f", total);   // $1,234.50
String forFile = String.format("%.2f", total);        // 1234.50
```

`forFile` is what goes in a saved line. Printing a `BigDecimal` as it is (the first line) shows only the decimal places it has, so use `%.2f` for money. It works on a `BigDecimal` directly, the same as on a `double` (see [Formatting Output](/handouts/string-format)). There's no need to turn it back into a `double` first, and you shouldn't: that brings the approximation back.

## Errors you'll see

| Error | Why | Fix |
|---|---|---|
| `NumberFormatException: Character a is neither a decimal digit number…` | `new BigDecimal(text)` got text that isn't a number: letters, a `$`, a space | `trim()` the input; ask again with a helper |
| `ArithmeticException: Non-terminating decimal expansion…` | `divide` without a scale | Give `divide` a scale ([Dividing](#dividing-always-needs-a-scale)) |
| `bad operand types for binary operator '+'` (or `*`, `-`, `/`, `>`) | Math and comparisons are methods | Use `add`, `multiply`, `compareTo`… |
| `incompatible types: int cannot be converted to BigDecimal` | An `int` passed where a `BigDecimal` goes | `BigDecimal.valueOf(…)` |
| A total that **stays at 0** | The math's answer wasn't assigned | `total = total.add(…);` |
| A cent that's **off** after rounding | `new BigDecimal(someDouble)` without quotes | Quotes, or `BigDecimal.valueOf(…)` |
