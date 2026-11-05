---
publish: true
title: Code Anatomy
section: Java
order: 11
---

# Anatomy of Java Code: Naming and Explaining It

Writing code and explaining it are two different skills. This page helps with the second one: first the names of the parts, then how to walk someone through a method out loud. On demo day, you'll explain your own code this way.

The code is from **Search Inventory**, so you've seen it before. It has the same shape as a Capstone: read a file, build a list of objects, then find matches. When you're ready, try the [quiz](/handouts/code-anatomy-quiz).

## 1. Name the parts

Each number sits on the line above the code it points to, and the tables say what each one is. (`displayProducts()` is left out to keep `StoreApp` short.)

### `Product`: a class that holds data

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

| # | Code | What it is |
|---|---|---|
| ① | `Product` | **Class:** the blueprint for a product |
| ② | `int` | **Type:** the kind of value `id` holds |
| ③ | `id` | **Field:** data each `Product` object keeps |
| ④ | `Product(...)` | **Constructor:** the code that runs when a new object is created |
| ⑤ | `id` (in the parentheses) | **Parameter:** a value handed in to the constructor |
| ⑥ | `getName` | **Method:** a named block of code |
| ⑦ | `String` | **Return type:** the kind of value `getName()` hands back |

### `StoreApp`: a class that does the work

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

| # | Code | What it is |
|---|---|---|
| ① | `StoreApp` | **Class:** this one holds the app's methods |
| ② | `products` | **Local variable:** it exists only inside `main` |
| ③ | `loadInventory()` | **Method call:** runs the method and gets back what it returns |
| ④ | `"Oreos"` | **Argument:** the real value passed in the call |
| ⑤ | `ArrayList<Product>` | **Return type:** this method hands back a list of products |
| ⑥ | `loadInventory` | **Method:** this line defines it; ③ runs it |
| ⑦ | `new ArrayList<>()` | **Object:** a new, empty list is created here |
| ⑧ | `readLine()` | **Method call:** reads the next line, or gives `null` at the end of the file |
| ⑨ | `product` | **Local variable:** it holds one product for this trip through the loop |
| ⑩ | `new Product(id, name, price)` | **Object:** a new product is created here, which runs the constructor |
| ⑪ | `product` (in `add(...)`) | **Argument:** the real value passed to `add` |
| ⑫ | `name` | **Parameter:** a placeholder, filled in by the call at ④ |

## 2. Words that are easy to mix up

| These two | The difference |
|---|---|
| **Class** and **object** | The class is the blueprint, written once. An object is one real thing made from it with `new`. There's one `Product` class, and one object for each line in the file. |
| **Parameter** and **argument** | The parameter is the placeholder in the method's definition (`String name`). The argument is the real value in the call (`"Oreos"`). |
| **Method** and **method call** | A method is defined once. A method call runs it, and can happen many times. |
| **Field** and **local variable** | A field is declared in the class, outside any method, and each object keeps its own. A local variable exists only inside its method. |
| **Type** and **variable** | In `String name`, `String` is the type and `name` is the variable. |

> [!NOTE] One idea, many names
> We say **field**, but you'll see other words for almost the same thing: **instance variable** (the workbook's word), **member variable** or **field member**, **attribute** and **property**. Some languages give "property" its own meaning, so it's the loosest of these.

## 3. Explain a method out loud

Don't read the code to someone ("`int id` equals `Integer.parseInt`…"). Say **what it does and why**, and follow one real example through it. Here's how that sounds for `loadInventory()`, using this line from the file:

```text
3|Oreos|4.29
```

> `loadInventory()` reads the inventory file and returns a list of `Product` objects. It takes no parameters, and `main` calls it once when the app starts.
>
> First it makes an empty list, so there's somewhere to put the products. Then it opens the file and reads one line at a time, until `readLine()` gives back `null`, which means the file has ended.
>
> Say the line is `3|Oreos|4.29`. `split` cuts it at each `|`, so `parts` holds three pieces of text. A file only holds text, so I turn the first piece into an `int` and the third into a `double`. Then I make a `Product` object with those three values and add it to the list.
>
> After the last line, it closes the file and returns the list. If the file can't be read, the `catch` prints a message and the method returns whatever it has so far.

Here's what happens to the variables on that one trip through the loop. You can watch the same thing in the debugger:

| Variable | Value |
|---|---|
| `line` | `"3\|Oreos\|4.29"` |
| `parts` | `"3"`, `"Oreos"`, `"4.29"` |
| `id` | `3` |
| `name` | `"Oreos"` |
| `price` | `4.29` |
| `product` | a new `Product` object holding those three values |
| `products` | the list, now one product longer |

## 4. The four questions

These are the questions to practice. Here are sample answers for `loadInventory()`:

1. **What does this method do, in one sentence?**
   It reads the inventory file and returns a list of products.
2. **What goes in, what comes out, and where is it called from?**
   Nothing goes in, a list of products comes out, and `main` calls it.
3. **Walk me through it with one real example.**
   That's the explanation in section 3.
4. **What would happen if…? Why did you write it this way?**
   - *What if the file is missing?* The `catch` prints the message, and the app keeps running with an empty list.
   - *What if a line has no price?* `parts[2]` doesn't exist, so the app crashes with `ArrayIndexOutOfBoundsException`.
   - *Why `"\\|"` and not `"|"`?* `|` has a special meaning to `split`, and `\\` tells it to treat `|` as a plain character.
   - *Why does `findByName()` return a list instead of printing?* So finding and showing stay separate, and any list can use the same display method.

If you don't know an answer, say so and work it out: read the line, or run it in the debugger. That's a good answer too.

## 5. Practice on your own code

1. Pick a method you wrote, of about 10 to 20 lines. `loadTransactions()` or one of your reports is a good choice.
2. In pairs, your partner asks you the four questions. No notes, and no reading the code word for word.
3. Swap. Then swap methods and go again.

If a line stumps you, that's the line to go and learn. Ask your instructor, or ask AI to explain it, then say it again in your own words ([AI Use Policy](/handouts/ai-use-policy)).

**On demo day:** you'll explain the code you picked, and you may be asked these same questions about another method.
