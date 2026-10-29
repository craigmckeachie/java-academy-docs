---
publish: true
title: IntelliJ Shortcuts
section: IntelliJ
order: 1
---

# IntelliJ Shortcuts: Templates, Generate & Refactoring

IntelliJ can type a lot of Java for you. This page covers the shortcuts that save the most typing: **templates** (short words that expand into code), **Generate** (constructors, getters, setters, `toString()`), and **refactoring** tools (changing code without breaking it).

> [!TIP] Learn two or three at a time
> You don't need all of these today. Pick two or three, use them all week, then come back for more. The [Key Promoter X plugin](/handouts/intellij-plugins) shows you the shortcut each time you click a menu instead.

## Live templates: type a word, press Tab

A **live template** is a short abbreviation that expands into code. Type it on an empty line, then press **Tab** (or **Enter**).

| Type | Press Tab and you get |
|---|---|
| `main` (or `psvm`) | `public static void main(String[] args) { }` |
| `sout` | `System.out.println();` |
| `souf` | `System.out.printf("");` |
| `soutv` | `System.out.println("name = " + name);` for the nearest variable |
| `fori` | `for (int i = 0; i < ; i++) { }` (fill in the end) |

> [!NOTE]
> `i++` is shorthand for `i = i + 1`. IntelliJ's templates always use the short form.

## Postfix templates: write the value first

A **postfix template** goes **after** something you already typed. Type the value or condition, then a **dot**, then the template name, then **Tab**. It's handy because you usually know *what* you want to print or check before you think about the `if` or `println` around it.

| You type | Press Tab and you get |
|---|---|
| `count > limit.if` | `if (count > limit) { }` |
| `count > limit.else` | `if (!(count > limit)) { }` |
| `isDone.not` | `!isDone` |
| `count <= limit.while` | `while (count <= limit) { }` |
| `scores.for` | `for (int score : scores) { }` (works for an array or an `ArrayList`) |
| `scores.fori` | `for (int i = 0; i < scores.length; i++) { }` |
| `command.switch` | `switch (command) { }` (see [Writing a switch](#writing-a-switch)) |
| `name.sout` | `System.out.println(name);` |
| `name.soutv` | `System.out.println("name = " + name);` |
| `new Scanner(System.in).var` | `Scanner scanner = new Scanner(System.in);` |
| `total.return` | `return total;` |

> [!WARNING] Don't end with a plain number
> `count > 3.if` doesn't work, because Java reads `3.` as the decimal number `3.0`. Type the `if` yourself there, or compare to a variable as in the table.

Example: printing a variable to check its value while you debug.

```java
// You type:
total.soutv
// After Tab:
System.out.println("total = " + total);
```

> [!TIP] The list didn't pop up?
> Press **Ctrl+Space** after the dot to show it. To see every template, open **Settings → Editor → General → Postfix Completion** (postfix) or **Settings → Editor → Live Templates** (live).

## Generate: constructors, getters, setters, toString()

Inside a class, put your cursor where the new code should go (usually below the fields), then open **Generate**:

| Mac | Windows |
|---|---|
| **Cmd+N** | **Alt+Insert** |
| or right-click → **Generate…** | or right-click → **Generate…** |

> [!TIP] No Insert key on your laptop?
> Try **Fn+Alt+Insert**, or just right-click → **Generate…**.

| Choose | What you get |
|---|---|
| **Constructor** | A constructor that sets the fields you check. Click **Select None** for one with no parameters. |
| **Getter** | A `getXxx()` method for each field you check |
| **Setter** | A `setXxx(...)` method for each field you check |
| **Getter and Setter** | Both, in one step |
| **toString()** | A `toString()` method that lists every field, so `System.out.println(book)` prints something readable |

In the field list, **Shift-click** to pick several, or press **Cmd+A** / **Ctrl+A** to select them all.

```java
public class Book {
    private String title;
    private int pages;

    // Cursor here → Generate → Getter and Setter → select both fields → OK
}
```

> [!NOTE]
> Generated code is normal Java. You can read it, change it, and delete it like code you typed yourself.

## Highlighting code

Many of IntelliJ's best tools (Surround With, Extract Method, Comment, Reformat) work on the code you **highlight** (select) first. These are the fastest ways to select exactly what you want:

| Select… | Mac | Windows |
|---|---|---|
| With the mouse | Click and drag | Click and drag |
| Line by line | **Shift+↑ / ↓** | **Shift+↑ / ↓** |
| From the cursor to a click | **Shift+click** | **Shift+click** |
| **Grow the selection** (word → expression → line → block → method) | **Option+↑** | **Ctrl+W** |
| Shrink the selection back | **Option+↓** | **Ctrl+Shift+W** |

> [!TIP] Grow the selection is the one to learn
> Put your cursor anywhere inside some code and press **Option+↑** / **Ctrl+W** a few times. Each press selects a bigger piece that makes sense on its own: a word, then the whole expression, then the line, then everything inside the `{ }`, then the block with its braces. You never select half a line by accident.

## Surround With: try/catch, if, while

**Surround With** wraps lines you already wrote in a block, so you don't have to cut, type the block, and paste back.

1. **Highlight** the lines (see [Highlighting code](#highlighting-code)).
2. Press **Cmd+Option+T** (Mac) or **Ctrl+Alt+T** (Windows).
3. Choose **try / catch** (or **if**, **while**, **for**, and more).

```java
// Before: highlight these two lines
int age = Integer.parseInt(input);
System.out.println("Next year you'll be " + (age + 1));

// After Surround With → try / catch:
try {
    int age = Integer.parseInt(input);
    System.out.println("Next year you'll be " + (age + 1));
} catch (NumberFormatException e) {
    throw new RuntimeException(e);
}
```

> [!WARNING] Replace the generated catch body
> IntelliJ fills the `catch` with `throw new RuntimeException(e);`, which still crashes the program. Replace it with what should really happen, like `System.out.println("Please enter a whole number.");`

> [!TIP] Red "Unhandled exception"?
> When code like `new FileReader("data.csv")` turns red, click it and press **Option+Enter** / **Alt+Enter**, then choose **Surround with try/catch**.

## Extract Method: turn lines into a method

Is `main` getting long? Do you see the same few lines in two places? **Extract Method** moves the lines you highlight into a new method and puts a call to it where they were. IntelliJ works out the parameters and the return type for you.

1. **Highlight** the lines that do one job.
2. Press **Cmd+Option+M** (Mac) or **Ctrl+Alt+M** (Windows). (Or right-click → **Refactor → Extract Method…**)
3. **Type a name** for the method that says what it does, like `printReport`, and press **Enter**.

```java
// Before: highlight the four println lines
public static void main(String[] args) {
    String name = "Ada";
    int score = 92;

    System.out.println("==============");
    System.out.println("Report for " + name);
    System.out.println("Score: " + score);
    System.out.println("==============");
}
```

```java
// After Extract Method, named printReport:
public static void main(String[] args) {
    String name = "Ada";
    int score = 92;

    printReport(name, score);
}

private static void printReport(String name, int score) {
    System.out.println("==============");
    System.out.println("Report for " + name);
    System.out.println("Score: " + score);
    System.out.println("==============");
}
```

IntelliJ noticed the lines use `name` and `score`, so it made them **parameters** and passed them in the call.

- **The lines create a value used later?** IntelliJ makes the method **return** it, for example `double total = calculateTotal(price, quantity);`.
- **The same lines appear somewhere else?** IntelliJ offers to replace those copies with a call too. Click **Replace** to accept.
- **`private`** means only this class can call the method. That's fine for helper methods; change it to `public` if you want.
- **Didn't like the result?** Press **Cmd+Z** / **Ctrl+Z** to undo it.

> [!TIP] Run it after every refactor
> Extract Method shouldn't change what the program does. Run it again and check that the output is the same as before.

## Writing a switch

In this class we write every `switch` in the **arrow** form: `case "H" -> { ... }`. IntelliJ can start one for you, or turn an `if / else if` chain into one.

### Start one with `.switch`

Type the value you're checking, then `.switch`, then **Tab**:

```java
// You type:
command.toUpperCase().switch
// After Tab:
switch (command.toUpperCase()) {
}
```

Then type the cases inside the braces:

```java
switch (command.toUpperCase()) {
    case "H" -> {
        System.out.println("Hello!");
    }
    case "X" -> {
        System.out.println("Goodbye!");
    }
    default -> {
        System.out.println("That isn't a command. Try again.");
    }
}
```

### Copy a case instead of retyping it

Write the first `case` block, then duplicate it for the next one:

1. Click on the word `case`.
2. Press **Option+↑** (Mac) or **Ctrl+W** (Windows) a few times, until the whole block is selected, from `case` to its closing `}`.
3. Press **Cmd+D** (Mac) or **Ctrl+D** (Windows). A copy appears right below.
4. Change the value and the body in the copy.

```java
case "H" -> {
    System.out.println("Hello!");
}
case "H" -> {                        // the copy: change "H" to "C"
    System.out.println("Hello!");    // and change what it does
}
```

> [!WARNING] Change the value in every copy
> Two cases with the same value is an error ("Duplicate label"), so IntelliJ underlines it in red until you change it.

### Turn an if / else if chain into a switch

When every branch of an `if` chain checks the **same variable**, IntelliJ can rewrite it for you:

1. Click on the first `if`.
2. Press **Option+Enter** (Mac) or **Alt+Enter** (Windows).
3. Choose **Replace 'if' with 'switch'**.

```java
// Before
if (dayNumber == 0) {
    System.out.println("Sunday");
} else if (dayNumber == 1) {
    System.out.println("Monday");
} else {
    System.out.println("Invalid day");
}
```

```java
// After
switch (dayNumber) {
    case 0 -> System.out.println("Sunday");
    case 1 -> System.out.println("Monday");
    default -> System.out.println("Invalid day");
}
```

A `case` with a single line doesn't need `{ }`. Both forms work.

> [!WARNING] Got `case 0:` and `break;` instead?
> That's the older form, where a missing `break` lets the next case run too. Click on `switch`, press **Option+Enter** / **Alt+Enter** again, and choose **Replace with enhanced 'switch' statement** to get the arrow form.

> [!TIP] The option isn't in the list?
> Each branch has to compare the same variable to a value (`dayNumber == 0`, or `command.equals("H")`). A chain that checks a range like `score >= 90` can't become a `switch`.

## Option+Enter: Show Context Actions

> [!TIP] Red or yellow? Press Option+Enter before you search online
> Click on the underlined code and press **Option+Enter** (Mac) or **Alt+Enter** (Windows). IntelliJ calls this menu **Show Context Actions**.

It offers two kinds of help:

- **Quick fixes** repair something IntelliJ flagged with a red error or a yellow warning. (IntelliJ's checks are called **inspections**.)
- **Intention actions** rewrite code that already works, a different way. Nothing is wrong; it's just another way to write it. A **yellow light bulb** in the margin means one is available.

### Quick fixes for common errors

| Problem | Pick |
|---|---|
| `Scanner` or `LocalDate` is red: "Cannot resolve symbol" | **Import class** (adds the `import` line) |
| A variable you haven't declared yet | **Create local variable** |
| A call to a method you haven't written yet | **Create method** (writes the method header for you) |
| "Unhandled exception" on `new FileReader(...)` | **Surround with try/catch** |
| `int x = 3.5;`: "incompatible types" | **Cast to 'int'**, or **Change variable type to 'double'** |
| "Missing return statement" | **Add 'return' statement** |
| Comparing Strings with `==` | **Replace '==' with 'equals()'** |

> [!TIP] Create method: write the call first
> In a menu, write the `case` with a call to a method that doesn't exist yet, like `case "D" -> addDeposit();`. It turns red. Press **Option+Enter** / **Alt+Enter** → **Create method 'addDeposit'**, and IntelliJ writes the empty method for you to fill in. This is a quick way to plan a program from the top down.

### Intention actions: rewrite working code

| Cursor on | Pick |
|---|---|
| An `if / else if` chain on one variable | **Replace 'if' with 'switch'** (see [Writing a switch](#writing-a-switch)) |
| An old `case 0:` / `break;` switch | **Replace with enhanced 'switch' statement** |
| `"Hi " + name + "!"` | **Replace '+' with 'String.format()'** |
| An `if` with an `else` | **Invert 'if' condition** (flips the condition and swaps the two blocks) |
| A variable declared far from where it's used | **Move declaration closer to usages** |

### Read before you pick

- **The first option isn't always right.** "Change variable type" can hide the real mistake. "Surround with try/catch" fills the `catch` with `throw new RuntimeException(e);`, which still crashes the program (see [Surround With](#surround-with-try-catch-if-while)).
- **Some options use Java you haven't learned yet.** Skip anything you don't recognize; it will make sense in a later week.
- **Didn't like the result?** **Cmd+Z** / **Ctrl+Z** undoes it.

## Quick fixes and refactoring

**Refactoring** means changing how code is written without changing what it does. IntelliJ updates every place the code is used, so nothing breaks.

| What it does | Mac | Windows |
|---|---|---|
| **Show fixes** for red or yellow code (add an import, create a variable, surround with try/catch) | **Option+Enter** | **Alt+Enter** |
| **Reformat code** (fix indenting and spacing) | **Cmd+Option+L** | **Ctrl+Alt+L** |
| **Rename** a variable, method, or class everywhere it's used | **Shift+F6** | **Shift+F6** |
| **Extract variable** from the highlighted expression | **Cmd+Option+V** | **Ctrl+Alt+V** |
| **Extract method** from the highlighted lines | **Cmd+Option+M** | **Ctrl+Alt+M** |
| **Optimize imports** (remove unused `import` lines) | **Ctrl+Option+O** | **Ctrl+Alt+O** |

> [!TIP] Reformat before every commit
> Messy indenting hides missing `}` braces. Press Reformat Code, and anything that suddenly lines up wrong is a clue.

## Everyday editing and running

| What it does | Mac | Windows |
|---|---|---|
| Code completion (suggestions) | **Ctrl+Space** | **Ctrl+Space** |
| Show a method's parameters | **Cmd+P** | **Ctrl+P** |
| Comment / uncomment lines | **Cmd+/** | **Ctrl+/** |
| Duplicate the current line | **Cmd+D** | **Ctrl+D** |
| Delete the current line | **Cmd+Backspace** | **Ctrl+Y** |
| Move a line up or down | **Option+Shift+↑ / ↓** | **Alt+Shift+↑ / ↓** |
| Undo / redo | **Cmd+Z** / **Cmd+Shift+Z** | **Ctrl+Z** / **Ctrl+Shift+Z** |
| Run the file you're in | **Ctrl+Shift+R** | **Ctrl+Shift+F10** |
| Run again / debug again | **Ctrl+R** / **Ctrl+D** | **Shift+F10** / **Shift+F9** |
| Find any file, class, or setting | **Shift, Shift** (press twice) | **Shift, Shift** (press twice) |
| Find any action or menu by name | **Cmd+Shift+A** | **Ctrl+Shift+A** |

> [!TIP] Forgot a shortcut?
> Press **Cmd+Shift+A** / **Ctrl+Shift+A** and type what you want, like "reformat" or "generate". IntelliJ shows the action and its shortcut.
