---
publish: true
title: "Formatting Output: String.format & printf"
section: Reference
order: 3
---

# Formatting Output: `String.format` & `printf`

A **format string** is a template with blanks in it. Java fills each blank with a value, formatted the way you ask. (Workbook 1c, pp. 74–76)

## 1. The parts of a format call

<div class="viz"><div class="viz-board">
<div class="viz-line"><span class="viz-chip viz-p1"><b>1</b><span>System.out.printf</span></span><span class="viz-plain">("</span><span class="viz-chip viz-p3"><b>3</b><span>%s</span></span><span class="viz-chip viz-p2"><b>2</b><span> id:</span></span><span class="viz-chip viz-p3"><b>3</b><span>%d</span></span><span class="viz-chip viz-p2"><b>2</b><span> $</span></span><span class="viz-chip viz-p3"><b>3</b><span>%.2f</span></span><span class="viz-chip viz-p4"><b>4</b><span>%n</span></span><span class="viz-plain">", </span><span class="viz-chip viz-p5"><b>5</b><span>name, id, pay</span></span><span class="viz-plain">);</span></div>
<div class="viz-legend">
<div class="viz-card"><div class="viz-t"><span class="viz-n" style="background:var(--viz-1)">1</span>Method</div><code>printf</code> prints right away. <code>String.format</code> gives you back a <code>String</code> instead.</div>
<div class="viz-card"><div class="viz-t"><span class="viz-n" style="background:var(--viz-2)">2</span>Literal text</div>Copied into the output exactly as typed, spaces included.</div>
<div class="viz-card"><div class="viz-t"><span class="viz-n" style="background:var(--viz-3)">3</span>Placeholders</div>Format specifiers. Each starts with <code>%</code> and is a blank for one value.</div>
<div class="viz-card"><div class="viz-t"><span class="viz-n" style="background:var(--viz-4)">4</span>New line</div><code>%n</code> ends the line. <code>printf</code> doesn't add one for you.</div>
<div class="viz-card"><div class="viz-t"><span class="viz-n" style="background:var(--viz-5)">5</span>Arguments</div>The values that fill the blanks, separated by commas.</div>
</div>
</div></div>

## 2. Blanks are filled in order, left to right

The 1st placeholder gets the 1st argument, the 2nd gets the 2nd, and so on. **The type must match**: a `%d` needs a whole number.

<div class="viz"><div class="viz-board">
<div class="viz-map">
<div class="viz-h">1st blank</div><div class="viz-h">2nd blank</div><div class="viz-h">3rd blank</div>
<div class="viz-cell viz-a">%s</div><div class="viz-cell viz-b">%d</div><div class="viz-cell viz-c">%.2f</div>
<div class="viz-arrow">▲</div><div class="viz-arrow">▲</div><div class="viz-arrow">▲</div>
<div class="viz-cell viz-a">name</div><div class="viz-cell viz-b">id</div><div class="viz-cell viz-c">pay</div>
<div class="viz-val"><em>String</em><br>"Brandon Plyers"</div><div class="viz-val"><em>int</em><br>10135</div><div class="viz-val"><em>double</em><br>5239.7</div>
</div>
<div class="viz-result"><div class="viz-cap">Output:</div><span class="viz-a">Brandon Plyers</span> id:<span class="viz-b">10135</span> $<span class="viz-c">5239.70</span></div>
</div></div>

Notice `%.2f` turned `5239.7` into `5239.70`: exactly 2 decimal places.

## 3. The parts of one placeholder

Everything between `%` and the type letter is **optional**. Add only what you need.

<div class="viz"><div class="viz-board">
<div class="viz-spec">
<div class="viz-chip viz-p2"><span>%</span><div class="viz-lbl"><strong>Start</strong>every placeholder</div></div>
<div class="viz-chip viz-p1"><span>,</span><div class="viz-lbl"><strong>Flags</strong>optional<br><code>,</code> commas<br><code>-</code> left-align<br><code>0</code> zero-pad</div></div>
<div class="viz-chip viz-p5"><span>10</span><div class="viz-lbl"><strong>Width</strong>optional<br>at least 10 characters</div></div>
<div class="viz-chip viz-p4"><span>.2</span><div class="viz-lbl"><strong>Precision</strong>optional<br>2 decimal places</div></div>
<div class="viz-chip viz-p3"><span>f</span><div class="viz-lbl"><strong>Type</strong>required<br><code>f</code> = decimal number</div></div>
</div>
<div class="viz-result"><div class="viz-cap"><code>String.format("%,10.2f", 5239.7)</code> → 10 characters, right-aligned (· = space)</div><div class="viz-cells"><i class="viz-sp">·</i><i class="viz-sp">·</i><i>5</i><i>,</i><i>2</i><i>3</i><i>9</i><i>.</i><i>7</i><i>0</i></div></div>
</div></div>

## 4. `printf` vs. `String.format`

<div class="viz"><div class="viz-two">
<div class="viz-card"><div class="viz-t">System.out.printf(…)</div>Formats <strong>and prints</strong> in one step. It works like <code>print</code>, so end with <code>%n</code>.<pre>System.out.printf("Total: $%.2f%n", total);</pre></div>
<div class="viz-card"><div class="viz-t">String.format(…)</div><strong>Gives you back a String</strong> to store, reuse, or pass to a method. Nothing prints by itself.<pre>String line = String.format("Total: $%.2f", total);
System.out.println(line);</pre></div>
</div></div>

## Which letter for which type?

| Specifier | Use it for | Java types | Example | Output |
|---|---|---|---|---|
| `%s` | **text** (and anything else) | `String` (works with any value) | `String.format("%s", "Pet")` | `Pet` |
| `%d` | **whole numbers** | `int`, `long`, `short`, `byte` | `String.format("%d", 10135)` | `10135` |
| `%f` | **decimal numbers** | `double`, `float` | `String.format("%.2f", 24.756775)` | `24.76` |
| `%c` | **one character** | `char` | `String.format("%c", 'A')` | `A` |
| `%b` | **true / false** | `boolean` | `String.format("%b", true)` | `true` |
| `%n` | **new line** | (no value) | `printf("Hi%n")` | *Hi, then a new line* |
| `%%` | **a % sign** | (no value) | `String.format("%d%%", 15)` | `15%` |

> [!TIP] %f on its own shows 6 decimals
> `String.format("%f", 4.5)` gives `4.500000`. For money, always use `%.2f`.

## Common recipes

| You want… | Specifier | Example | Output |
|---|---|---|---|
| Money with 2 decimals | `%.2f` | `String.format("$%.2f", 24.756775)` | `$24.76` |
| Money with commas | `%,.2f` | `String.format("$%,.2f", 5239.7)` | `$5,239.70` |
| One decimal | `%.1f` | `String.format("%.1f", 9.142857)` | `9.1` |
| Right-align in a column | `%10.2f` | `String.format("[%10.2f]", 5239.7)` | `[   5239.70]` |
| Left-align text in a column | `%-16s` | `String.format("[%-16s]", "Brandon Plyers")` | `[Brandon Plyers  ]` |
| Pad a number with zeros | `%05d` | `String.format("%05d", 42)` | `00042` |
| Percent | `%d%%` | `String.format("%d%%", 15)` | `15%` |

`%.2f` **rounds** (`24.756775` → `24.76`); it doesn't just cut off digits.

## Gotchas

> [!WARNING] The type letter must match the value
> `printf("%d", 5239.7)` **crashes** with `IllegalFormatConversionException: d != java.lang.Double`. `%d` is for whole numbers only; use `%f` for a `double`.

> [!WARNING] Every placeholder needs a value
> `printf("%s %d", name)` prints `Brandon Plyers` and then **crashes** with `MissingFormatArgumentException: Format specifier '%d'`.

> [!CAUTION] Extra values are silently ignored
> `printf("%s %s", name, id, pay)` prints `Brandon Plyers 10135`, and `pay` just disappears, with **no error**. Count your placeholders and your values: they should match.

- **Forgot `%n`?** The next output continues on the same line.
- **Rule of thumb:** same **number** of placeholders and values, in the same **order**, with matching **types**.
