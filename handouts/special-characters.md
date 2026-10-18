---
publish: true
title: Special Characters
section: Reference
order: 2
---

# Special Characters

Code is full of symbols, and each one has a name. Knowing the names helps when you read error messages, follow along in class, or ask for help ("you're missing a closing curly brace").

## Characters that come in pairs

Every opening character needs a matching closing one. IntelliJ adds the closing one for you as you type.

| Characters | Name | Used in Java for | Example |
|---|---|---|---|
| `(` `)` | **parentheses** ("parens") | method calls and definitions, conditions, grouping math | `printPlayer("Nova", 270)` · `if (age >= 18)` · `(a + b) * 2` |
| `{` `}` | **curly braces** | blocks: a class, a method, an `if`, a loop | `public class App { … }` |
| `[` `]` | **square brackets** | arrays | `int[] scores` · `scores[0]` |
| `<` `>` | **angle brackets** | less than / greater than; generic types later | `if (price < 20)` · `ArrayList<String>` (Workbook 3a) |
| `"` `"` | **double quotes** | `String` values: any text | `"a dog"` |
| `'` `'` | **single quotes** | `char` values: exactly one character | `'A'` |

> [!TIP] Missing a closing brace?
> Errors like *"reached end of file while parsing"* usually mean a `}` is missing. Click just after an opening brace and IntelliJ highlights its partner.

## Punctuation

| Character | Name | Used in Java for | Example |
|---|---|---|---|
| `;` | **semicolon** | ends a statement, like a period ends a sentence | `int age = 19;` |
| `.` | **dot** (period) | calling a method or using a member; also decimal numbers | `scanner.nextInt()` · `19.99` |
| `,` | **comma** | separates arguments, parameters, and array values | `addNumbers(3, 4)` · `{90, 85, 78}` |
| `:` | **colon** | the `?` `:` shorthand for if/else; `switch` cases | `(age >= 18) ? "adult" : "minor"` |
| `?` | **question mark** | the conditional ("ternary") operator | see colon |
| `@` | **at sign** | annotations, coming later in the course | `@Test`, `@Override` |

## Operators

| Character | Name | Used in Java for | Example |
|---|---|---|---|
| `=` | **equals** (assignment) | stores a value in a variable | `int age = 19;` |
| `==` | **double equals** | *compares* two values. Not for Strings: use `.equals()` | `if (count == 0)` |
| `!` | **exclamation point** ("bang") | NOT; also part of "not equal" | `!isRaining` · `age != 21` |
| `&&` | **double ampersand** | AND: both must be true | `age >= 18 && age < 65` |
| `\|\|` | **double pipe** | OR: either can be true | `day.equals("Sat") \|\| day.equals("Sun")` |
| `+` `-` `*` `/` | **plus, minus, asterisk, slash** | math; `+` also joins Strings | `"Hi " + name` |
| `%` | **percent** | remainder (modulus); placeholders in `printf` | `10 % 3` is `1` · `"%.2f"` |

> [!WARNING] = vs. ==
> One `=` **stores** a value. Two `==` **compare** values. `if (age = 18)` won't compile; you meant `if (age == 18)`.

## Escape sequences and comments

| Characters | Name | Used in Java for | Example |
|---|---|---|---|
| `\` | **backslash** | starts an escape sequence inside a String or char | see below |
| `\n` `\t` | new line, tab | special characters inside text | `"Line 1\nLine 2"` |
| `\"` `\'` `\\` | escaped quote, apostrophe, backslash | putting a quote or a backslash *inside* text | `"She said \"hi\""` · `'\''` |
| `//` | **double slash** | a one-line comment | `// TODO: validate input` |
| `/*` `*/` | **slash-star** | a comment spanning several lines | `/* … */` |

> [!TIP] Backslash vs. slash
> **Backslash** `\` leans back, and is used for escapes. **Slash** `/` (forward slash) is division and comments.

## In names (not symbols in code)

| Character | Name | Where you'll use it | Example |
|---|---|---|---|
| `-` | **hyphen** (dash) | **project and repository names** (kebab-case). **Not allowed in Java names**: Java reads it as minus. | `shopping-cart` |
| `_` | **underscore** | constants (UPPER_SNAKE_CASE); digit separator in big numbers | `TAX_RATE` · `1_000_000` |
| `` ` `` | **backtick** | **not used in Java.** Used in **Markdown** (like your README.md) to format `code` | `` `main` `` |
| `\|` | **pipe** | a separator in data, e.g. `"Run\|3.5\|32"`. To `split` on it, escape it. | `line.split("\\|")` |

## Hard to find on the keyboard?

| Character | Where it is |
|---|---|
| `{` `}` | **Shift** + the `[` `]` keys |
| `\|` | **Shift** + `\` (above Enter / Return) |
| `` ` `` | top-left, under **Esc**, on the same key as `~` |
| `<` `>` | **Shift** + the `,` `.` keys |
| `&` | **Shift** + `7` |
| `%` | **Shift** + `5` |
