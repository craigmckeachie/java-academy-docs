---
publish: true
title: Handling Bad Input
section: Java
order: 7
---

# if or try/catch? Handling Bad Input

Programs run into problems all the time: a user picks option 9 from a menu that only has options 1 to 5, a file is missing, or someone types "ten" when the program expects a number like 10. Java gives you two tools for handling them:

- an **`if`** that **checks first**, before anything goes wrong
- a **`try/catch`** that **catches an exception** after Java has hit a problem (Workbook 3a §1-1)

They can look interchangeable, but each one has its own job.

## The rule of thumb

> [!TIP] Check what you can. Catch what you can't.
> If you can find the problem **ahead of time** with a simple question ("Is this number between 1 and 10?"), use an **`if`**.
> Use **`try/catch`** when you **can't** know ahead of time whether something will work (a file you haven't opened yet), or when **Java insists** on it (the red underline on `new FileReader`).

| Ask yourself | If yes, use | Example from class |
|---|---|---|
| Can I check it with a simple condition **before** I use it? | `if` | Is the menu choice 1–5? Is the age under 25? Is this array slot `null`? |
| Is it a normal, everyday situation, not really an error? | `if` | A search finds no matches. A book is already checked out. |
| Does it depend on something **outside** my program (a file, the disk)? | `try/catch` | Reading `employees.csv`, writing `logs.txt` |
| Does Java refuse to compile without it? | `try/catch` | `new FileReader(...)`, `new FileWriter(...)`, `readLine()`, `write(...)` |
| Am I turning someone's **text** into a number or a date? | `try/catch` | `Integer.parseInt("ten")`, `LocalDate.parse("13/45/2026")` |

## Use an if when you can check first

An `if` is clear, cheap, and says exactly what you expect. Most validation in this course is an `if`.

**Menu choices** (Sandwich Shop, Vehicle Inventory, Online Store, Capstone). A wrong letter isn't an error; users mistype all the time. A `default` case (or a final `else`) handles it:

```java
switch (command.toUpperCase()) {
    case "D" -> addDeposit();
    case "P" -> makePayment();
    case "X" -> System.out.println("Goodbye!");
    default -> System.out.println("That isn't a command. Try again.");
}
```

**Rules from the requirements** (Rental Car, Sandwich Shop). An under-25 surcharge or a senior discount is a **business rule**. It's not a problem at all, just a different path:

```java
if (age < 25) {
    surcharge = basicRental * 0.30;
}
```

**Empty slots and missing values** (Vehicle Inventory, Search Inventory HashMap). An empty array slot holds `null`, and a `HashMap` gives back `null` for a key it doesn't have. Check for `null` before you use the value:

```java
Product matchedProduct = inventory.get(id);
if (matchedProduct == null) {
    System.out.println("We don't carry that product");
} else {
    System.out.println(matchedProduct.getName());
}
```

**Things that are allowed but need a different answer** (Neighborhood Library, Online Store, Capstone):
- Checking out a book that's already checked out: `if (book.isCheckedOut())`, then tell the user.
- A vendor search that finds nothing: count the matches, and if there were none, print "No transactions found."
- A payment amount of 0 or less in the Capstone: `if (amount <= 0)`, then ask again.

**Numbers out of range** (Famous Quotes). Before you use a number as an index, you can check it:

```java
if (number >= 1 && number <= quotes.length) {
    System.out.println(quotes[number - 1]);
} else {
    System.out.println("Pick a number from 1 to " + quotes.length);
}
```

> [!NOTE] Famous Quotes asks for a try/catch on purpose
> The exercise (Workbook 3a p. 9) has you **catch** the out-of-range index, so you can practice `try/catch` on an error you've already seen. That's the right thing to do in the exercise. In your own programs, an `if` like the one above is the clearer choice, because you can check the number before using it.

## Use try/catch when you can't check first

**Reading and writing files** (Bedtime Stories, Payroll, Search Engine Logger, Online Store, Capstone). Even if the file was there a minute ago, it could be missing, misnamed or locked when your program opens it. You can't know until you try, so Java **requires** a `try/catch` for file code:

```java
try {
    FileReader fileReader = new FileReader("transactions.csv");
    BufferedReader bufferedReader = new BufferedReader(fileReader);
    // ... read the lines ...
    bufferedReader.close();
} catch (IOException e) {
    System.out.println("Sorry, I couldn't read the transactions file.");
    // print the details so the error is never hidden from you
    e.printStackTrace();
}
```

**Turning text into numbers** (any program that reads a number from a file or a `nextLine()`). Checking ahead of time that some text is a valid number ("only digits, maybe one dot, maybe a minus sign...") is a lot of work. It's simpler to **try** the conversion and catch the failure:

```java
System.out.print("Amount: ");
String input = scanner.nextLine();
try {
    double amount = Double.parseDouble(input);
    System.out.println("You entered " + amount);
} catch (NumberFormatException e) {
    System.out.println("Please enter a number, like 89.50");
    // uncomment while debugging to see the details
    // e.printStackTrace();
}
```

Here the `catch` shows the user a **friendly message**, and `e.printStackTrace()` is **commented out**. You already know exactly what went wrong (the text wasn't a number), and a screen full of red text would confuse the user. If the `catch` runs and you don't understand why, uncomment the line while you debug.

The same goes for `scanner.nextInt()` when the user types letters: it throws an `InputMismatchException`.

**Turning text into dates** (the Capstone's custom search, Search Engine Logger's stretch goal). `LocalDate.parse` throws a `DateTimeParseException` if the text isn't a real date in the right format, such as `2026-02-30` or `10/26/2026` without a formatter. Catch it and ask again.

## Often you need both

Real input usually needs **a try/catch, then an if**. Take the Capstone's **Add Deposit**:

1. **try/catch:** is it a number at all? (`"ten"` fails `Double.parseDouble`.)
2. **if:** is it a number that makes sense? (A deposit of `-50` or `0` is a valid number but not a valid deposit.)

```java
try {
    double amount = Double.parseDouble(input);
    if (amount <= 0) {
        System.out.println("A deposit must be more than $0.00");
    } else {
        // save the deposit
    }
} catch (NumberFormatException e) {
    System.out.println("Please enter a number, like 89.50");
    // uncomment while debugging to see the details
    // e.printStackTrace();
}
```

## Mistakes to avoid

> [!WARNING] Don't use try/catch to cover up a bug
> If your own loop runs past the end of an array, the `ArrayIndexOutOfBoundsException` is telling you the loop is wrong. **Fix the loop** (`index < numbers.length`, not `<=`); don't wrap it in a `try/catch`.

- **An empty `catch` hides the problem.** `catch (Exception e) { }` makes the program fail silently, and you won't know why. Every `catch` should at least print a message. For **file code**, also call `e.printStackTrace()`, because a missing or misnamed file is something you need to see. For **bad user input** you expected, show a friendly message and keep `e.printStackTrace()` commented out, ready to uncomment while debugging.
- **Don't wrap your whole program in one big `try`.** Put the `try` around the few lines that can fail, so the `catch` knows exactly what went wrong and what to say.
- **Keep the try/catch inside the loop** when you want the program to keep going after bad input. If the loop is inside the `try`, the first bad input ends the loop.

## Quick reference

| Situation from the course | Use | Why |
|---|---|---|
| Menu letter or number that isn't an option | `if` / `default` | Expected; easy to check |
| Age, hours, size or price rules | `if` | Business rules, not errors |
| `null` slot in an array, `null` from `HashMap.get` | `if (x != null)` | Easy to check first |
| Book already checked out; item not in the cart | `if` | Allowed, just a different answer |
| Search with no matches | `if` (count the matches) | Normal result |
| Deposit or payment of 0 or less | `if` | A valid number, an invalid amount |
| Opening, reading, writing or closing a file | `try/catch (IOException e)` | Depends on the outside world; Java requires it |
| Text → number (`parseInt`, `parseDouble`) | `try/catch (NumberFormatException e)` | Hard to check ahead of time |
| Text → date (`LocalDate.parse`) | `try/catch (DateTimeParseException e)` | Hard to check ahead of time |
| `nextInt()` when the user types letters | `try/catch (InputMismatchException e)` | Hard to check ahead of time |
| Your own loop going past the end of an array | **Fix the code** | It's a bug, not bad input |
