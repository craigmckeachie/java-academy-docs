---
publish: true
title: Choosing a Data Type
section: Reference
order: 2
---

# Choosing a Data Type

Every variable in Java has a **type** that says what kind of value it can hold. Ask yourself a few questions and the type picks itself. (Workbook 1c, p. 46)

## Start here

```
What am I storing?
│
├── A number
│   ├── Needs decimal places?  ── yes ──▶  double     (or float)
│   └── Whole number?          ── yes ──▶  int        (or byte, short, long)
│
├── Text
│   ├── Exactly one character? ── yes ──▶  char       'a'
│   └── Anything else?         ── yes ──▶  String     "a dog"
│
└── Yes / no                   ──────────▶  boolean    true or false
```

> [!TIP] When in doubt
> Use **`int`** for whole numbers and **`double`** for decimals. Those are the defaults you'll use 95% of the time.

## Numbers

### Do I need decimal places?

**Yes** → a floating-point type

| Type | Size | Example | Notes |
|---|---|---|---|
| `float` | smaller | `float rating = 4.5f;` | Needs an `f` at the end. Less precise (~7 digits). |
| **`double`** ⭐ | bigger | `double price = 19.99;` | **Use this one.** More precise (~15 digits). |

**No** → a whole-number type

| Type | Size | Holds about… | Example |
|---|---|---|---|
| `byte` | smallest | -128 to 127 | `byte level = 12;` |
| `short` | smaller | ±32 thousand | `short year = 2026;` |
| **`int`** ⭐ | small | ±2.1 **billion** | `int age = 19;` **Use this one.** |
| `long` | big | ±9.2 **quintillion** | `long views = 8_000_000_000L;` Needs an `L` at the end. |

> [!WARNING] Money and decimals
> `double` can't store some decimals exactly: `0.1 + 0.2` prints `0.30000000000000004`. That's fine for now. Later in the course you'll use **`BigDecimal`** for money.

## Text

### Do I need to store text?

| Is it… | Type | Quotes | Example |
|---|---|---|---|
| **exactly one character** (often a letter) | `char` | **single** quotes `' '` | `char grade = 'A';` |
| **anything else** (a word, sentence, or even empty) | `String` | **double** quotes `" "` | `String pet = "a dog";` |

- `String` starts with a **capital S**, because it's a class, not a primitive type.
- `'a'` and `"a"` are different: one is a `char`, the other is a `String` that happens to be one letter long.

## True or false

| Type | Values | Example |
|---|---|---|
| `boolean` | `true` or `false` (lowercase, no quotes) | `boolean isRaining = false;` |

Name booleans like yes/no questions (`isRaining`, `hasTicket`), so `if (isRaining)` reads like English.

## The 8 primitive types at a glance

`byte` · `short` · `int` · `long` · `float` · `double` · `char` · `boolean`

All lowercase. Everything else you use (`String`, `Scanner`, `LocalDate`, your own classes) is a **class**, and starts with a capital letter.
