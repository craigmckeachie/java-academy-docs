---
publish: true
title: Menus and Screens
section: Java
order: 9
---

# Menus and Screens

Most console apps you'll build in this class, the Online Store and every Capstone included, are a set of **menus**: the user types a letter, something happens, and the menu comes back. This page is the pattern to copy for them: how to build a screen, how to go one screen deeper and back out, and how to show results the user can actually read.

The full example is **[MenuScreensDemo.java](https://github.com/craigmckeachie/java-academy-demos/blob/main/src/main/java/com/pluralsight/workbook3a/screens/solutions/MenuScreensDemo.java)**, a small movie collection app. Run it and try every option.

## Screens and actions

Every method in a menu app is one of two kinds:

| | A **screen** | An **action** |
|---|---|---|
| What it does | Shows a menu again and again, until the user picks the way out | Does **one** thing, then returns |
| Has a loop? | Yes, a `do-while` | No |
| Named | `run` + the screen's name + `Screen`: `runHomeScreen()`, `runBrowseScreen()` | A verb + what it acts on, after its menu label: `addMovie()`, `displayAllMovies()`, `searchByTitle()` |
| Ends with | The user typing the way-out letter (`X`, `H`, `0`) | `pressEnterToContinue()` |

Most of your methods are actions. An app usually has only a few screens. **A screen is only a screen if it has a menu.** A list of results isn't a screen; it's an action that displays something.

## Map your screens first

Draw the screens before you write code. Each screen lists its commands, and each command either runs an action or opens a screen one level down:

```text
main
 └── runHomeScreen()              A) addMovie()
      │                           B) runBrowseScreen() ──┐
      │                           X) Exit                │
      │                                                  │
      └── runBrowseScreen()  ◄───────────────────────────┘
           │                      A) displayAllMovies()
           │                      W) displayWatchedMovies()
           │                      U) displayUnwatchedMovies()
           │                      S) runSearchScreen() ──┐
           │                      H) back to Home        │
           │                                             │
           └── runSearchScreen()  ◄──────────────────────┘
                                  1) searchByTitle()
                                  2) searchByYear()
                                  0) back to Browse
```

## A screen

Every screen looks like this. Only the title, the menu lines, the `case`s and the way-out letter change:

```java
public static void runBrowseScreen() {
    String command;
    do {
        System.out.println();
        System.out.println("=== Browse Movies ===");
        System.out.println("A) All Movies");
        System.out.println("W) Watched");
        System.out.println("U) Unwatched");
        System.out.println("S) Search");
        System.out.println("H) Home");
        System.out.print("Enter a command: ");
        command = scanner.nextLine().trim().toUpperCase();

        switch (command) {
            case "A" -> displayAllMovies();
            case "W" -> displayWatchedMovies();
            case "U" -> displayUnwatchedMovies();
            case "S" -> runSearchScreen();
            case "H" -> System.out.println("Back to Home");
            default -> System.out.println("That isn't a command. Try again.");
        }
    } while (!command.equals("H"));
}
```

- **`do-while`**, because a menu always shows at least once: show it, read the command, act on it, then check whether to go round again.
- **`String command;` goes above the `do`.** The `while` line is outside the `{ }`, and a variable declared inside them doesn't exist there ("cannot find symbol").
- **The same input line in every screen:** `trim()` drops extra spaces, and `toUpperCase()` lets the user type `h` or `H`. Then the `case` labels can match the menu's capitals exactly. (It does nothing to digits, so number menus use the same line.)
- **One method call per `case`.** The `switch` then reads like the menu. If a `case` needs more than one line, that's a new action method.
- **The way-out letter appears twice**: in its `case` (which prints a short message, so it doesn't fall into `default`) and in the `while`. If you change one, change the other.

## Going deeper, and going back

**Going into** a screen is calling its method: `case "S" -> runSearchScreen();`.

**Going back** is letting the method **finish**. When the user types the way-out letter, the loop ends, the method returns, and you're back inside the loop of the screen that called it, right where you left it.

> [!WARNING] Don't call the parent screen to go back
> `case "H" -> runHomeScreen();` inside the Browse screen *looks* like it goes home, but it opens a **new** Home screen on top of the old ones. Later, **Exit** drops you into an old screen instead of ending the app. To go back, let the loop end.

> [!TIP] See the screens stack up in the debugger
> Put a breakpoint on the `switch` in your deepest screen, and run in Debug mode. The **Frames** panel lists every screen you're inside, newest on top: `runSearchScreen`, `runBrowseScreen`, `runHomeScreen`, `main`.

## An action

An action does its one job, then **waits for Enter**, so its results stay on screen. Without the pause, the menu prints right after the results, and the user has to scroll back up past it to read them.

```java
public static void displayAllMovies() {
    System.out.println("TODO: display all movies");
    pressEnterToContinue();
}

// the results stay on screen until the user is ready to see the menu again
public static void pressEnterToContinue() {
    System.out.println();
    System.out.print("Press Enter to go back to the menu...");
    scanner.nextLine();
}
```

**Every action ends with `pressEnterToContinue()`.** Screens never pause: going into a screen, going back and a wrong letter all go straight to a menu.

Even an action that asks questions, like `addMovie()`, ends with `pressEnterToContinue()`. The Enters before it **answer** the questions; this last one says **I've read the result** (`Added Arrival (2016)`), so it doesn't scroll away under the menu.

## Reading input: always `nextLine()`

Read **every** input with `nextLine()`, and convert it when you need a number:

```java
System.out.print("Year: ");
int year = Integer.parseInt(scanner.nextLine());

System.out.print("Amount: ");
double amount = Double.parseDouble(scanner.nextLine());
```

**Why:** `nextInt()` and `nextDouble()` read the number but leave the **Enter** behind. The next `nextLine()` reads that leftover Enter instead of waiting, so `pressEnterToContinue()` skips straight to the menu, or a prompt gets skipped.

| Other ways you'll see | Why we don't use them |
|---|---|
| `nextInt()` followed by an extra `scanner.nextLine();` (Workbook 1c) | It works, but forget the extra line once and a prompt or a pause gets skipped. That bug is hard to spot. |
| Two `Scanner`s, one for numbers and one for text | They both read the same keyboard and get in each other's way. Use **one** `Scanner` for the whole app. |

> [!NOTE] Bad input
> If the user types `abc` for a number, `parseInt` throws a `NumberFormatException`. To ask again instead of crashing, use the helpers on [Validating Input](/handouts/validating-input).

## One Scanner for the whole app

Every screen and action reads from the keyboard, so declare the `Scanner` **once**, at the top of the class, outside `main`, with `static`:

```java
public class MenuScreensDemo {
    static Scanner scanner = new Scanner(System.in);

    public static void main(String[] args) {
        runHomeScreen();
    }
}
```

Don't close it inside a screen: closing it closes the keyboard for the rest of the app.

## Build it empty first

1. Draw your screen map.
2. Write every **screen**, with every menu line and `case`.
3. Write every **action** as a one-line `TODO` that ends with `pressEnterToContinue()`.
4. Run it and go into, and back out of, every screen. Try a wrong letter and a lowercase letter on each.
5. Commit. Then replace one `TODO` at a time with real code, and commit after each one works.

**Practice it:** [Menus and Screens Practice](/handouts/menu-screens-practice) (the Workout Tracker).

**Next:** [Validating Input](/handouts/validating-input), for actions that ask until the answer is good.
