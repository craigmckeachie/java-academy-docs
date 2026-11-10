---
publish: true
title: And, Or, Not
section: Java
order: 5
---

# And, Or, Not: the Logical Operators

`&&`, `||` and `!` join or flip true/false questions. Read them out loud as English, and most bugs show themselves. (Workbook 1c §4-1, pp. 101–102)

## 1. Say it in English

<div class="viz"><div class="viz-board">
<div class="viz-legend">
<div class="viz-card"><div class="viz-t"><span class="viz-n" style="background:var(--viz-1)">1</span><code>&amp;&amp;</code>&nbsp;and</div>True only when <strong>both</strong> sides are true.<br><code>!occupied &amp;&amp; !dirty</code><br>"not occupied <strong>and</strong> not dirty"</div>
<div class="viz-card"><div class="viz-t"><span class="viz-n" style="background:var(--viz-3)">2</span><code>||</code>&nbsp;or</div>True when <strong>at least one</strong> side is true.<br><code>age &lt; 18 || age &gt;= 65</code><br>"under 18 <strong>or</strong> 65 and over"</div>
<div class="viz-card"><div class="viz-t"><span class="viz-n" style="background:var(--viz-5)">3</span><code>!</code>&nbsp;not</div><strong>Flips</strong> it: true becomes false, false becomes true.<br><code>!dirty</code><br>"<strong>not</strong> dirty"</div>
</div>
</div></div>

| `a` | `b` | `a && b` | `a \|\| b` | `!a` |
|---|---|---|---|---|
| `true` | `true` | `true` | `true` | `false` |
| `true` | `false` | `false` | `true` | `false` |
| `false` | `true` | `false` | `true` | `true` |
| `false` | `false` | `false` | `false` | `true` |

> [!TIP] The short version
> `&&` is picky: one `false` makes it `false`. `||` is easygoing: one `true` makes it `true`.

## 2. Where you'll use them this week

```java
// Room: available when it's clean and nobody is in it
boolean available = !occupied && !dirty;

// Workbook p. 101: the lower admission price
boolean lowerPrice = age < 18 || age >= 65;

// Car Dealership: a year from min to max (inclusive)
boolean inRange = year >= min && year <= max;
```

**A range is always `&&`:** the value has to be at least the min **and** at most the max. With `||`, every year would pass.

## 3. Mistakes that compile and run

These all compile, so Java won't warn you with red. Read them out loud to catch them.

<div class="viz"><div class="viz-board">
<div class="viz-shape"><div class="viz-code"><div>if (occupied <span class="viz-mark viz-dash viz-b">=</span> true) {</div></div><div><strong>One <code>=</code> stores, two <code>==</code> ask.</strong><br>This sets <code>occupied</code> to <code>true</code>, so the <code>if</code> always runs. A <code>boolean</code> is already a question: write <code>if (occupied)</code>, or <code>if (!occupied)</code> for the opposite.</div></div>
<div class="viz-shape"><div class="viz-code"><div>command != 1 <span class="viz-mark viz-dash viz-b">||</span> command != 2</div></div><div><strong>Two <code>!=</code> joined with <code>||</code> is always true.</strong><br>Every number is "not 1" or "not 2". You meant "not 1 <strong>and</strong> not 2": <code>command != 1 &amp;&amp; command != 2</code>.</div></div>
<div class="viz-shape"><div class="viz-code"><div>if (homeState <span class="viz-mark viz-dash viz-b">==</span> "Texas") {</div></div><div><strong>Strings use <code>.equals()</code>, not <code>==</code>.</strong><br><code>==</code> can say <code>false</code> for text the user typed. Write <code>homeState.equals("Texas")</code> (p. 102).</div></div>
<div class="viz-shape"><div class="viz-code"><div>if (<span class="viz-mark viz-dash viz-b">!</span>homeState.equals("Texas")) {</div></div><div><strong>"Not" goes in front of the whole call.</strong><br>The <code>!</code> flips the <code>true</code> or <code>false</code> that <code>.equals()</code> hands back. There's no <code>!equals</code>.</div></div>
</div></div>

> [!NOTE] IntelliJ helps with the first one
> IntelliJ highlights `if (occupied = true)` in yellow. Hover over yellow highlights: they're often bugs.

## 4. Try it: predict the output

```java
boolean occupied = true;
boolean dirty = false;
int age = 40;
int year = 1995;

System.out.println(!occupied && !dirty);            // 1
System.out.println(occupied || dirty);              // 2
System.out.println(age < 18 || age >= 65);          // 3
System.out.println(year >= 2000 && year <= 2015);   // 4
System.out.println(!(year >= 2000));                // 5
```

::: details Check your answers
1. `false`: the room is occupied, so "not occupied" is false, and `&&` needs both.
2. `true`: occupied is true, and `||` only needs one.
3. `false`: 40 is neither under 18 nor 65 and over.
4. `false`: 1995 isn't at least 2000.
5. `true`: `year >= 2000` is false, and `!` flips it.
:::

**Challenge:** write `isFull()` for the `Hotel` class (Exercise 3): true when there are no suites **and** no basic rooms left. Then explain why `||` would be wrong.
