---
publish: true
title: Java Code Conventions
section: Reference
order: 1
---

# Java Code Conventions

In Java, **how a name is written tells you what it is.** Follow these conventions and your code will look like professional Java, and be easier for you, your classmates, and your instructor to read.

## Names at a glance

| What | Style | Example |
|---|---|---|
| **Project folder** | kebab-case | `shopping-cart`, `neighborhood-library` |
| **GitHub repository** | kebab-case (same as the project) | `shopping-cart`, `neighborhood-library` |
| **Package** | lowercase, dotted (reverse domain name) | `com.pluralsight` |
| **Class** | PascalCase, a **noun** | `ShoppingList`, `Pet` |
| **Main class** (the one with `main`) | `App` or `Program`, nothing more | `App.java` |
| **File** | exactly the class name + `.java` | `ShoppingList.java` |
| **Method** | camelCase, a **verb** | `calculateTotal()`, `printBanner()` |
| **Local variable** | camelCase | `item`, `totalPrice` |
| **Parameter** | camelCase | `printPlayer(String name, int score)` |
| **Field** (inside a class) | camelCase | `private String name;` |
| **Getter / setter** | `get` / `set` + field name | `getName()`, `setName(String name)` |
| **boolean** | camelCase, reads like a **yes/no question** | `isRaining`, `hasTicket` |
| **Constant** | UPPER_SNAKE_CASE | `static final double TAX_RATE = 0.0825;` |
| **Commit message** | lowercase, an instruction | `initial commit`, `add sandwich size prompt` |

### The casing styles

| Style | How it works | Used for |
|---|---|---|
| **kebab-case** | all lowercase, dashes between words | projects, repositories |
| **PascalCase** | every word capitalized | classes |
| **camelCase** | first word lowercase, then each word capitalized | methods, variables, parameters, fields |
| **UPPER_SNAKE_CASE** | all caps, underscores between words | constants |
| **lowercase.dotted** | all lowercase, dots between parts | packages |

### The main class: `App` or `Program`

Name the class that holds your `main` method **`App`** or **`Program`**. Don't add a prefix or suffix like `ShoppingCartApp`: the project is already called `shopping-cart`, so repeating it in the class name adds nothing.

A real application has **only one** class with a `main` method. Demos and practice projects sometimes have several (one per example), so those get descriptive names, like `ScannerDemoApp` or `PetApp`.

## Casing as a clue

You can tell what something is before you read the code around it:

| You see… | It's almost certainly a… |
|---|---|
| `Scanner`, `String`, `Pet` | **class** (PascalCase) |
| `nextLine()`, `calculateScore(...)` | **method** (camelCase, followed by `(`) |
| `firstName`, `score` | **variable, parameter, or field** (camelCase) |
| `TAX_RATE`, `MAX_PLAYERS` | **constant** (all caps) |

## Choosing good names

> [!IMPORTANT] Classes are nouns, methods are verbs
> A class is a *thing*; a method is something it *does*.
> `Pet` → `giveTreat()` · `ShoppingList` → `addItem()` · `Scoreboard` → `printBanner()`

- **Say what it is.** Use `totalPrice`, not `tp`, `x`, or `data2`. Saving keystrokes isn't worth confusing the reader (including future you).
- **booleans are yes/no questions:** `isWeekend`, `hasDiscount`. Then `if (isWeekend)` reads like English.
- **Plural names for groups:** `String[] emails` holds many emails; `email` holds one.

## Writing clean code

- **Let IntelliJ format your code:** **Code → Reformat Code** (Mac: ⌥⌘L, Windows: Ctrl+Alt+L). It fixes indentation (4 spaces) and spacing.
- **Opening braces go on the same line**, and **always use braces**, even for a one-line `if`:
  ```java
  if (age >= 65) {
      price = price * 0.80;
  }
  ```
- **One statement per line**, and a **blank line between methods**.
- **Methods do one job.** If you'd describe a method with "and", split it.
- **No magic numbers:** give special values a name. `price * TAX_RATE` explains itself; `price * 0.0825` doesn't.
- **Comments explain *why*, not *what*.** See [Comments](#comments) below.
- **Remember from class:**
  - compare Strings with `.equals()`, not `==`
  - `close()` your `Scanner` when you're done with it

## Comments

### Learning notes: fine while you're learning

While you're learning, it's OK, even encouraged, to leave yourself notes that explain what each line does. Most people put each note on the line **above** the code it describes:

```java
// create a Scanner that reads what the user types
Scanner scanner = new Scanner(System.in);

// read a whole number and store it in age
int age = scanner.nextInt();
```

These notes help *you* remember new syntax. Keep them in your practice projects and exercises if they help.

> [!TIP] Let AI write learning notes, after you write the code
> Once your code works, ask an AI tool to explain it line by line, for example:
> *"Add a short comment above each line of this Java code explaining what it does. I'm a beginner."*
> Then **read every comment** and make sure you agree. AI can be wrong, and the point is for you to understand the code. Write the code yourself first; use AI to explain it, not to write it.

> [!WARNING] Learning notes don't belong in production code
> Professional developers already know what `nextInt()` does. A comment that repeats the code is **noise**: it makes the file longer and harder to read, and when someone changes the code but not the comment, the comment becomes **wrong**. In real-world code, and in projects you'd show an employer, take these out.

### What comments are for

Good comments say what the code **can't** say by itself:

| Use a comment to… | Example |
|---|---|
| Explain **why** you did something non-obvious | `scanner.nextLine(); // eat the leftover Enter after nextInt()` |
| Explain a **rule** that comes from outside the code | `// Seniors (65+) get 20% off, per store policy` |
| **Warn** about a gotcha | `// Must be called before checkOut(), or the book stays available` |
| Mark **unfinished** work (temporarily) | `// TODO: reject negative quantities` |
| **Document** what a method does for other developers (Javadoc, later in the course) | `/** Returns the price after any age discount. */` |

### Before writing a comment, try a better name

Often the best fix for confusing code is clearer code, not a comment:

```java
// Before: needs a comment to make sense
double t = p * 0.0825; // calculate tax

// After: the names say it all
double tax = price * TAX_RATE;
```

If a block of code needs a comment like `// calculate the discount`, consider moving it into a method called `calculateDiscount()`. The method name *is* the comment.

### Don't

- **Don't restate the code:** `i++; // add 1 to i`
- **Don't leave commented-out code.** Delete it; Git remembers the old version.
- **Don't let comments go stale.** When you change code, update or delete its comments.

### Comment syntax

| Syntax | Use |
|---|---|
| `// …` | A single-line comment. Most comments look like this. |
| `/* … */` | A comment spanning several lines |
| `/** … */` | **Javadoc**: documentation for a class or method. IntelliJ shows it when you hover over a call. |

## Good to know

- **These are conventions, not compiler rules.** Java will happily compile `class shoppinglist` or `int TotalPrice`, but every Java developer will notice. Conventions make team code look like one person wrote it.
- **Check generated code.** AI tools and code generators sometimes break these conventions. Review the names before you commit.
