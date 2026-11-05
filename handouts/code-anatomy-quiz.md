---
publish: true
title: Code Anatomy Quiz
section: Java
order: 12
---

# Anatomy of Java Code: Quiz

Name every numbered part. Each number sits on the line above the code it points to. Write your answers in your notebook, then check them below, or against [Anatomy of Java Code](/handouts/code-anatomy).

**Word bank:** argument · class · constructor · field · local variable · method · method call · object · parameter · return type · type

(You can use a word more than once.)

## `Product`

```java
// ①
public class Product {
    // ② ③
    private int id;
    private String name;
    private double price;

    // ④ ⑤
    public Product(int id, String name, double price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }

    // ⑥ ⑦
    public String getName() {
        return name;
    }
}
```

| # | Code | Your answer |
|---|---|---|
| ① | `Product` |  |
| ② | `int` |  |
| ③ | `id` |  |
| ④ | `Product(...)` |  |
| ⑤ | `id` (in the parentheses) |  |
| ⑥ | `getName` |  |
| ⑦ | `String` |  |

## `StoreApp`

```java
// ①
public class StoreApp {

    public static void main(String[] args) {
        // ② ③
        ArrayList<Product> products = loadInventory();
        // ④
        ArrayList<Product> matches = findByName(products, "Oreos");
        displayProducts(matches);
    }

    // ⑤ ⑥
    private static ArrayList<Product> loadInventory() {
        // ⑦
        ArrayList<Product> products = new ArrayList<>();
        try {
            FileReader fileReader = new FileReader("inventory.csv");
            BufferedReader bufferedReader = new BufferedReader(fileReader);

            String line;
            // ⑧
            while ((line = bufferedReader.readLine()) != null) {
                String[] parts = line.split("\\|");

                int id = Integer.parseInt(parts[0]);
                String name = parts[1];
                double price = Double.parseDouble(parts[2]);

                // ⑨ ⑩
                Product product = new Product(id, name, price);
                // ⑪
                products.add(product);
            }

            bufferedReader.close();
        } catch (IOException e) {
            System.out.println("Could not read the inventory file.");
        }
        return products;
    }

    // ⑫
    private static ArrayList<Product> findByName(ArrayList<Product> products, String name) {
        ArrayList<Product> matches = new ArrayList<>();
        for (Product product : products) {
            if (product.getName().equalsIgnoreCase(name)) {
                matches.add(product);
            }
        }
        return matches;
    }
}
```

| # | Code | Your answer |
|---|---|---|
| ① | `StoreApp` |  |
| ② | `products` |  |
| ③ | `loadInventory()` |  |
| ④ | `"Oreos"` |  |
| ⑤ | `ArrayList<Product>` |  |
| ⑥ | `loadInventory` |  |
| ⑦ | `new ArrayList<>()` |  |
| ⑧ | `readLine()` |  |
| ⑨ | `product` |  |
| ⑩ | `new Product(id, name, price)` |  |
| ⑪ | `product` (in `add(...)`) |  |
| ⑫ | `name` |  |

::: details Check your answers
**`Product`**

1. Class
2. Type
3. Field
4. Constructor
5. Parameter
6. Method
7. Return type

**`StoreApp`**

1. Class
2. Local variable
3. Method call
4. Argument
5. Return type
6. Method
7. Object
8. Method call
9. Local variable
10. Object
11. Argument
12. Parameter
:::

## Explain it in your own words

1. `products` in `main` and `products` in `loadInventory()` have the same name. Are they the same variable? How does the list get from one to the other?
2. Why does the `Product` constructor need `this.id = id;`? What would happen without `this`?
3. How many `Product` objects exist after a file with 50 lines is loaded? How many `Product` classes?
4. What does `findByName()` return if nothing matches? Does the app crash?

::: details Check your answers
1. No. They're two local variables in two different methods. `loadInventory()` returns its list, and `main` stores what comes back in its own `products`.
2. `this.id` is the object's field, and `id` is the parameter. Without `this`, `id = id;` copies the parameter onto itself, and the object's `id` stays `0`.
3. 50 objects and one class.
4. An empty list. There's no crash: the `for` loop in the display method just has nothing to do.
:::

## Now try it on your own code

The best version of this quiz is your own code. Open your Capstone, pick a method, and name the same parts: the return type, each parameter, each local variable, each method call and its arguments, and any object you create. If a word stumps you, that's the thing to go and look up.
