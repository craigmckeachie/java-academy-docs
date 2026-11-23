---
publish: true
title: "Streams: Products"
section: "Exercises & Workshops"
order: 20
group: Week 7
---

# Exercise: Streams with Products

An online store keeps its products in a list. You'll do five jobs with them, **twice**: first with the **loop** you already know (Step A), then with a **stream** (Step B). Writing both shows you exactly what each stream step replaces.

**Do this after:** the **Lambdas and Streams** demo (Tuesday, late morning). Tasks 2 and 4 need `map` and `reduce` from Wednesday's demo; write their loops on Tuesday and their streams on Wednesday.

**The parts of a stream, as a picture:** [Stream Anatomy](/handouts/streams).

**This replaces** the workbook's Traditional Loops and Streams exercises (pp. 66 and 79).

## Setup

- [ ] Create a new project **`product-streams`** in your `workbook-6` folder: Maven, **Create Git repository** checked, **GroupId** `com.pluralsight`
- [ ] Add a package **`com.pluralsight.productstreams`**
- [ ] Create `Product` in it and paste in the code below. **Don't change it.**
- [ ] Create `Program` in it and paste in the starter below
- [ ] Run it. It already runs. The answers are empty or zero until you write the tasks.
- [ ] Commit, share it to GitHub as a **public** repo, and add the link to the class GitHub sheet

```java
package com.pluralsight.productstreams;

import java.math.BigDecimal;

public class Product {
    private String name;
    private String category;
    private BigDecimal price;

    public Product(String name, String category, BigDecimal price) {
        this.name = name;
        this.category = category;
        this.price = price;
    }

    public String getName() {
        return name;
    }

    public String getCategory() {
        return category;
    }

    public BigDecimal getPrice() {
        return price;
    }

    @Override
    public String toString() {
        return String.format("%-14s %-12s $%8.2f", name, category, price);
    }
}
```

```java
package com.pluralsight.productstreams;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class Program {

    public static void main(String[] args) {
        List<Product> inventory = getInventory();

        // 1. Filter by category
        String searchCategory = "Electronics";
        System.out.println("--- " + searchCategory + " ---");
        List<Product> electronics = getProductsByCategory(inventory, searchCategory);
        printProducts(electronics);

        // 2. Add up the price of every product
        BigDecimal totalValue = getTotalInventoryValue(inventory);
        System.out.println("\nTotal inventory value: $" + totalValue);

        // 3. Count the products in one category
        String countCategory = "Clothing";
        long clothingCount = countProductsInCategory(inventory, countCategory);
        System.out.println("Number of " + countCategory + " items: " + clothingCount);

        // 4. Just the prices
        List<BigDecimal> prices = getPrices(inventory);

        // 5. The most and least expensive prices
        if (!prices.isEmpty()) {
            System.out.println("\nMost expensive: $" + Collections.max(prices));
            System.out.println("Cheapest: $" + Collections.min(prices));
        }
    }

    // TASK 1: the products in one category
    private static List<Product> getProductsByCategory(List<Product> products, String category) {
        // STEP A (loop): make an empty list, loop through products, and add each one
        //   whose category matches (equalsIgnoreCase). Return the list.
        // STEP B (stream): products.stream(), then .filter(...), then .toList()

        return new ArrayList<>(); // replace this line
    }

    // TASK 2: the total of every product's price
    private static BigDecimal getTotalInventoryValue(List<Product> products) {
        // STEP A (loop): start a total at BigDecimal.ZERO, and add each price with .add()
        // STEP B (stream, after Wednesday's demo): .map(...) each product to its price,
        //   then .reduce(BigDecimal.ZERO, ...) to add them up

        return BigDecimal.ZERO; // replace this line
    }

    // TASK 3: how many products are in one category
    private static long countProductsInCategory(List<Product> products, String category) {
        // STEP A (loop): a count that starts at 0, plus 1 for each match
        // STEP B (stream): .filter(...), then .count()

        return 0; // replace this line
    }

    // TASK 4: a list of just the prices
    private static List<BigDecimal> getPrices(List<Product> products) {
        // STEP A (loop): an empty List<BigDecimal>; add each product's price
        // STEP B (stream, after Wednesday's demo): .map(...) each product to its price,
        //   then .toList()

        return new ArrayList<>(); // replace this line
    }

    // TASK 5: print each product
    private static void printProducts(List<Product> products) {
        // STEP A (loop): a for-each loop that prints each product
        // STEP B: products.forEach(...) with a lambda

    }

    private static List<Product> getInventory() {
        List<Product> products = new ArrayList<>();
        products.add(new Product("Laptop", "Electronics", new BigDecimal("999.99")));
        products.add(new Product("Smartphone", "Electronics", new BigDecimal("699.99")));
        products.add(new Product("Headphones", "Electronics", new BigDecimal("149.99")));
        products.add(new Product("Coffee Maker", "Home", new BigDecimal("89.99")));
        products.add(new Product("Blender", "Home", new BigDecimal("45.50")));
        products.add(new Product("Desk Chair", "Furniture", new BigDecimal("199.00")));
        products.add(new Product("T-Shirt", "Clothing", new BigDecimal("19.99")));
        products.add(new Product("Jeans", "Clothing", new BigDecimal("49.99")));
        products.add(new Product("Socks", "Clothing", new BigDecimal("9.99")));
        return products;
    }
}
```

## How to work each task

1. **Step A:** write the loop. Run it, and check the answer against **When it's right** below.
2. Commit (`Add the category search loop`).
3. **Step B:** put the loop in a comment (select it, then **Cmd+/** / **Ctrl+/**), and write the stream under it. Run it: the answer must be the **same**.
4. Commit (`Use a stream for the category search`).

Keep every loop in its comment. Having the two side by side is the point.

## Step A: the loops (Tuesday)

- [ ] **Task 5** first, so you can see results: print each product with a for-each loop
- [ ] **Task 1:** the products whose category matches. Use `equalsIgnoreCase`, so `"electronics"` works too.
- [ ] **Task 2:** the total of every price. Start at `BigDecimal.ZERO`, and remember: `total.add(price);` alone does nothing; it's `total = total.add(price);`
- [ ] **Task 3:** count the matches
- [ ] **Task 4:** a list of just the prices

## Step B: the streams

- [ ] **Task 5:** `products.forEach(product -> ...)`
- [ ] **Task 1:** `filter`, then `toList()`
- [ ] **Task 3:** `filter`, then `count()`. `count()` gives back how many made it through the filter, as a `long`.
- [ ] **Task 4** (after Wednesday's demo): `map` each product to its price, then `toList()`
- [ ] **Task 2** (after Wednesday's demo): `map` each product to its price, then `reduce(BigDecimal.ZERO, (total, price) -> ...)`

> [!TIP] Lambdas first
> Write every step with a lambda, like `product -> product.getPrice()`. You'll also see `Product::getPrice` online: it's a shorter way to write the same lambda. Use it only once the lambda version works and you can explain it.

## When it's right

Both versions print exactly this:

```text
--- Electronics ---
Laptop         Electronics  $  999.99
Smartphone     Electronics  $  699.99
Headphones     Electronics  $  149.99

Total inventory value: $2264.43
Number of Clothing items: 3

Most expensive: $999.99
Cheapest: $9.99
```

Then try other categories in `main`: `"home"` (2 products), `"Furniture"` (1), `"Toys"` (none, and nothing crashes).

## Finished early?

- [ ] **Task 6** (after Wednesday's demo): the names of the products under $50, as a `List<String>`. Loop first, then `filter` and `map`.
- [ ] **Task 7:** the products sorted from cheapest to most expensive: `.sorted(Comparator.comparing(product -> product.getPrice()))`. Import `java.util.Comparator` ([Sorting §4](/handouts/sorting#_4-in-a-stream))
- [ ] Write JUnit tests for Tasks 1–3. To check a `BigDecimal`, use `compareTo(...) == 0`, or expect one with the same decimal places, `new BigDecimal("2264.43")`. `equals` treats `2264.43` and `2264.430` as different ([Unit Testing](/handouts/unit-testing)).

## Stuck?

- **`.toList()` is red?** Check the project uses Java 17 (**File → Project Structure → Project → SDK**). The workbook's `.collect(Collectors.toList())` does the same job.
- **`reduce` gives a red line?** Its first argument is the starting value, `BigDecimal.ZERO`, and the lambda takes **two** inputs: `(total, price) -> total.add(price)`.
- **"bad operand types for binary operator '+'"?** `+` doesn't work on `BigDecimal`. Use `.add()`.
- **Step B gives a different answer from Step A?** Trust neither. Work out the answer by hand from `getInventory()`, then find which one is wrong.
