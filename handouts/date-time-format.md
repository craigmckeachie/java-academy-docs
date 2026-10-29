---
publish: true
title: Formatting Dates
section: Java
order: 8
---

# Formatting Dates: `DateTimeFormatter` Patterns

A **pattern** is a short code that tells Java how to show a date or time. Each letter stands for one part of the date (the month, the day, the hour…), and anything else is copied into the output as is. (Workbook 3a, pp. 30–32)

## 1. Each letter becomes one part of the output

This is the workbook's example (p. 31). Match the colors: each letter group in the pattern becomes the part of the output with the same number.

<div class="viz"><div class="viz-board">
<div class="viz-cap">Pattern</div>
<div class="viz-line"><span class="viz-plain">DateTimeFormatter.ofPattern("</span><span class="viz-chip viz-p1"><b>1</b><span>E</span></span><span class="viz-plain">, </span><span class="viz-chip viz-p2"><b>2</b><span>MMM</span></span><span class="viz-plain"> </span><span class="viz-chip viz-p3"><b>3</b><span>dd</span></span><span class="viz-plain">, </span><span class="viz-chip viz-p4"><b>4</b><span>yyyy</span></span><span class="viz-plain"> </span><span class="viz-chip viz-p5"><b>5</b><span>HH</span></span><span class="viz-plain">:</span><span class="viz-chip viz-p6"><b>6</b><span>mm</span></span><span class="viz-plain">:</span><span class="viz-chip viz-p7"><b>7</b><span>ss</span></span><span class="viz-plain">")</span></div>
<div class="viz-cap" style="margin-top:14px">Output</div>
<div class="viz-line"><span class="viz-plain">Today is: </span><span class="viz-chip viz-p1"><b>1</b><span>Tue</span></span><span class="viz-plain">, </span><span class="viz-chip viz-p2"><b>2</b><span>Oct</span></span><span class="viz-plain"> </span><span class="viz-chip viz-p3"><b>3</b><span>27</span></span><span class="viz-plain">, </span><span class="viz-chip viz-p4"><b>4</b><span>2026</span></span><span class="viz-plain"> </span><span class="viz-chip viz-p5"><b>5</b><span>09</span></span><span class="viz-plain">:</span><span class="viz-chip viz-p6"><b>6</b><span>41</span></span><span class="viz-plain">:</span><span class="viz-chip viz-p7"><b>7</b><span>12</span></span></div>
<div class="viz-legend">
<div class="viz-card"><div class="viz-t"><span class="viz-n" style="background:var(--viz-1)">1</span><code>E</code> → Tue</div>Day of the week, short name.</div>
<div class="viz-card"><div class="viz-t"><span class="viz-n" style="background:var(--viz-2)">2</span><code>MMM</code> → Oct</div>Month, short name. Capital <code>M</code>.</div>
<div class="viz-card"><div class="viz-t"><span class="viz-n" style="background:var(--viz-3)">3</span><code>dd</code> → 27</div>Day of the month, always 2 digits.</div>
<div class="viz-card"><div class="viz-t"><span class="viz-n" style="background:var(--viz-4)">4</span><code>yyyy</code> → 2026</div>The year, 4 digits.</div>
<div class="viz-card"><div class="viz-t"><span class="viz-n" style="background:var(--viz-5)">5</span><code>HH</code> → 09</div>Hour on a 24-hour clock (00–23).</div>
<div class="viz-card"><div class="viz-t"><span class="viz-n" style="background:var(--viz-6)">6</span><code>mm</code> → 41</div>Minutes. Lowercase <code>m</code>.</div>
<div class="viz-card"><div class="viz-t"><span class="viz-n" style="background:var(--viz-7)">7</span><code>ss</code> → 12</div>Seconds.</div>
</div>
<div class="viz-result"><div class="viz-cap">Everything that isn't a pattern letter is copied as is:</div>the <code>, </code> after the day name, the spaces, and the <code>:</code> between the hours, minutes and seconds.</div>
</div></div>

## 2. The letters you'll use most

Case matters: `M` and `m` are different letters.

| Letter | Means | Example pattern | Output for Tue, Oct 27, 2026, 9:41:12 PM |
|---|---|---|---|
| `y` | year | `yyyy` | `2026` |
| `M` | month (**capital**) | `MM` | `10` |
| `d` | day of the month | `dd` | `27` |
| `E` | day of the week | `E` | `Tue` |
| `H` | hour, 24-hour clock (0–23) | `HH` | `21` |
| `h` | hour, 12-hour clock (1–12) | `hh` | `09` |
| `a` | AM or PM | `a` | `PM` |
| `m` | minutes (**lowercase**) | `mm` | `41` |
| `s` | seconds | `ss` | `12` |

## 3. How many letters you type changes the output

Repeating a letter doesn't repeat the value: it picks a **longer form**.

| Kind | Fewer letters | More letters |
|---|---|---|
| **Text** (`E`, `M` as a name) | 3 or fewer = **short**: `E` → `Tue`, `MMM` → `Oct` | 4 = **full**: `EEEE` → `Tuesday`, `MMMM` → `October` |
| **Numbers** (`d`, `M`, `H`, `m`, `s`) | 1 letter = **no padding**: `d` → `7`, `M` → `3` | 2 letters = **always 2 digits**: `dd` → `07`, `MM` → `03` |
| **Year** (`y`) | `yy` → `26` (last 2 digits) | `yyyy` → `2026` |

`M` can be either a number or a name: `MM` → `10`, `MMM` → `Oct`.

## 4. A complete example

```java
package com.pluralsight;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class DateFormatApp {
    public static void main(String[] args) {
        LocalDateTime now = LocalDateTime.now();

        // 1. make a formatter from a pattern
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("E, MMM dd, yyyy HH:mm:ss");

        // 2. ask the date to format itself with it
        String formattedDate = now.format(formatter);
        System.out.println("Today is: " + formattedDate);

        // a 12-hour clock with AM/PM
        DateTimeFormatter clock = DateTimeFormatter.ofPattern("h:mm a");
        System.out.println("The time is " + now.format(clock));

        // a LocalDate works the same way, as long as the pattern has no time letters
        LocalDate today = LocalDate.now();
        System.out.println("Date only: " + today.format(DateTimeFormatter.ofPattern("MM/dd/yyyy")));
    }
}
```

Output (your date and time will be different):

```
Today is: Tue, Oct 27, 2026 21:41:12
The time is 9:41 PM
Date only: 10/27/2026
```

The steps are always the same: **make the formatter** with `ofPattern`, then **call `format`** on the date. `format` gives you back a `String`, so you can print it, store it, or write it to a file.

## 5. Common mistakes

> [!WARNING] `mm` is minutes, `MM` is the month
> `ofPattern("mm/dd/yyyy")` compiles and runs, but prints the **minutes** where the month should be: `41/27/2026`. If the month looks random, check the case of your `M`s.

> [!WARNING] `hh` without `a` hides AM and PM
> `hh:mm` prints `09:41` for both 9:41 in the morning and 9:41 at night. Use `HH:mm` for a 24-hour clock (`21:41`), or add `a`: `hh:mm a` → `09:41 PM`.

> [!WARNING] Use `yyyy`, not `YYYY`
> Capital `Y` is a "week-based year". It matches `yyyy` most of the year, but in the last days of December it can already show **next** year. Always use lowercase `yyyy` for the year.

> [!WARNING] A LocalDate has no time
> Formatting a `LocalDate` with `HH`, `mm` or `ss` in the pattern **crashes** with `UnsupportedTemporalTypeException: Unsupported field: HourOfDay`. Use time letters only with a `LocalDateTime` (or `LocalTime`).

> [!TIP] Words in a pattern go in single quotes
> Java reads every letter as a pattern code, so `ofPattern("h:mm on dd")` crashes with `Unknown pattern letter: o`. Put words inside single quotes, and Java copies them as is: `ofPattern("h:mm 'on' MMM dd")` → `9:41 on Oct 27`.

## 6. Going the other way: text to a date

The same patterns work in reverse with `parse` (Workbook 3a, p. 32). This is how you'll turn a date read from a file back into a `LocalDate`:

```java
DateTimeFormatter formatter = DateTimeFormatter.ofPattern("MM/dd/yyyy");
LocalDate birthday = LocalDate.parse("10/17/2022", formatter);
```

Without a formatter, `LocalDate.parse` expects `yyyy-MM-dd` (for example `2022-10-17`).

## Official documentation

Every pattern letter (there are many more than the ones here), with examples, is in the **Patterns for Formatting and Parsing** section of the Java 17 docs:

- [`DateTimeFormatter`: Patterns for Formatting and Parsing (Java 17)](https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/time/format/DateTimeFormatter.html#patterns)
- [`LocalDateTime` (Java 17)](https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/time/LocalDateTime.html): `now()`, `format()` and the methods for getting each part of a date

The workbook (p. 30) links the Java 8 version of the same page. The pattern letters are the same.
