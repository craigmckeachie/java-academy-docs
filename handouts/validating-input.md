---
publish: true
title: Validating Input
section: Java
order: 10
---

# Validating Input: Ask Until the Answer Is Good

Users mistype all the time: `abc` for a year, nothing at all for a name, `-50` for a deposit. A good app never crashes on a typo, and it doesn't throw away what the user already typed. It says what's wrong and **asks again**.

This page is the pattern for that: small **helper** methods that ask a question until the answer is good, then return it. It builds on [Handling Bad Input](/handouts/if-or-exception), which explains *which* tool to use (an `if` or a `try/catch`). This page shows how to **ask again**.

The full example is **[ValidatingInputDemo.java](https://github.com/craigmckeachie/java-academy-demos/blob/main/src/main/java/com/pluralsight/workbook3a/validation/solutions/ValidatingInputDemo.java)**, the movie app from [Menus and Screens](/handouts/menus-and-screens) with input helpers.

## Screens, actions and helpers

A menu app now has three kinds of methods:

| | A **screen** | An **action** | A **helper** |
|---|---|---|---|
| What it does | Shows a menu again and again | Does one thing the user picked | Does a small job **for** an action |
| Examples | `runHomeScreen()` | `addMovie()`, `addDeposit()` | `pressEnterToContinue()`, `promptForInt()`, `promptForString()` |
| Returns | nothing | nothing | often a value: the user's answer |

## Read every line with `nextLine()`

Every helper on this page reads with `nextLine()`, then converts the text when it needs a number. That's the rule from [Menus and Screens](/handouts/menus-and-screens#reading-input-always-nextline): `nextInt()` and `nextDouble()` leave the **Enter** behind, so the next prompt or `pressEnterToContinue()` gets skipped.

`nextLine()` also takes the **whole line**, good or bad. When the answer is bad, it's gone, and the next try starts fresh.

## Asking for a number

```java
// asks until the user types a whole number
public static int promptForInt(String prompt) {
    while (true) {
        System.out.print(prompt);
        try {
            // return leaves the method, so it leaves the loop too
            return Integer.parseInt(scanner.nextLine().trim());
        } catch (NumberFormatException e) {
            System.out.println("Please enter a whole number, like 12.");
        }
    }
}
```

- **`while (true)`** looks like it runs forever. The way out is the **`return`**: it leaves the method, so it leaves the loop too. The only way out is a good number.
- If `parseInt` throws, the `return` never happens. The `catch` prints a friendly message, and the loop goes round and asks again.
- **The `try/catch` is inside the loop.** If the loop were inside the `try`, the first bad answer would end the loop.
- **`trim()`** forgives a space before or after the number.
- Catch **`NumberFormatException`**, not `Exception`. You know exactly what can go wrong here, and catching everything would hide your own bugs.

Using it in an action is one line:

```java
int year = promptForInt("Year: ");
```

For money, the helper is the same, with `double` and `Double.parseDouble`:

```java
// asks until the user types a number
public static double promptForDouble(String prompt) {
    while (true) {
        System.out.print(prompt);
        try {
            // return leaves the method, so it leaves the loop too
            return Double.parseDouble(scanner.nextLine().trim());
        } catch (NumberFormatException e) {
            System.out.println("Please enter a number, like 89.50.");
        }
    }
}
```

## Asking for text

A blank answer, or one with a `|`, is something you can **check first**, so text needs an `if`, not a `try/catch`:

```java
// asks until the user types something, without a | (it would break a file split on |)
public static String promptForString(String prompt) {
    while (true) {
        System.out.print(prompt);
        String input = scanner.nextLine().trim();
        if (input.isEmpty()) {
            System.out.println("This can't be blank.");
        } else if (input.contains("|")) {
            System.out.println("Please don't use the | character.");
        } else {
            return input;
        }
    }
}
```

> [!WARNING] A | in the text breaks your file
> If each line of your file is split on `|`, like `transactions.csv`, a vendor typed as `Joe|s Pizza` saves a line with **six** parts instead of five. Nothing goes wrong when it's saved. The app crashes the **next time it starts** and reads the file, long after the typo. Check for it when the user types it.

## Rules belong in the action

The helpers check only the **type**: is it a whole number? Is it some text? Whether the value makes **sense** depends on what it's for, so the action checks that, right after it asks:

```java
int year = promptForInt("Year: ");
while (year > LocalDate.now().getYear()) {
    System.out.println("The year can't be in the future.");
    year = promptForInt("Year: ");
}
```

`promptForInt()` is used for every whole number in the app: a year, a quantity, minutes. Only `addMovie()` knows what a sensible **year** is. In the Capstone, Add Deposit and Make Payment ask with `promptForDouble()`, then check that the amount is **more than 0**.

> [!TIP] The helper checks the type. The action checks the rule.

After its last question, the action shows the result and still ends with `pressEnterToContinue()`. The Enters while asking **answer** the questions; the last one says **I've read the result**.

## Other ways you'll see

| Other ways you'll see | Why we don't use them |
|---|---|
| A `try/catch` that prints a message and gives up ([Handling Bad Input](/handouts/if-or-exception)) | No crash, but the action ends. The user has to pick it from the menu again and retype everything. Fine for one question; annoying for three. |
| The same retry loop written out in every action, with a `boolean valid` variable | It works, but it's about 11 lines per question, copied over and over. Copies drift apart, and a fix in one isn't in the others. |
| `hasNextInt()` / `hasNextDouble()`, then `nextInt()` | It reads **word by word**, not line by line. `12 dollars` passes, and `dollars` is left behind for the next prompt. And it's `nextInt()` again, so the leftover Enter comes back. |
| `nextInt()` inside a `try/catch` | When it fails, `nextInt()` doesn't remove the bad text, so the loop reads the same `abc` again: the message prints **forever**. |
| Checking the text with a pattern first (`input.matches(...)`) | Patterns (regular expressions) are a topic of their own, and easy to get wrong for decimals and negative numbers. Let `parseInt` decide. |

## Your own helpers

- [ ] **One copy of each helper**, in the same class as your screens and actions, under a `// ---------- Input helpers ----------` banner
- [ ] Every number is asked for with `promptForInt()` or `promptForDouble()`. No `parseInt` or `parseDouble` of user input anywhere else.
- [ ] Every rule (more than 0, not in the future) is a `while` loop in the action, right after it asks
- [ ] Test like a user: `abc`, nothing at all, a space before the number, `0`, a negative number, and a `|`

## Stretch goals

- **Dates.** Write `promptForDate(String prompt)`: it asks until the user types a date like `2026-10-30`. `LocalDate.parse` throws a **`DateTimeParseException`** when the text isn't a real date, so it's the same pattern as `promptForInt()`. (The Capstone's Custom Search bonus needs it.)
- **Optional answers.** The Custom Search bonus says that if the user leaves a field **blank**, you don't filter on it. Write a helper that returns the answer, or an empty String when the user just presses Enter, and decide how each search uses it.

**Practice it:** add `promptForInt()` to your [Workout Tracker](/handouts/menu-screens-practice) for the minutes, and try typing `abc`.
