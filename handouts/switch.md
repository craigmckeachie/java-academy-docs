---
publish: true
title: Switch
section: Java
order: 6.5
---

# The switch: One Value, Many Cases

A `switch` checks **one value** against a list of **cases** and runs the one that matches. It's the easy-to-read replacement for a long `if / else if` chain, and it's how most menus are written. (Workbook 1c §4-3, pp. 121–124)

## 1. The parts of a switch expression

This `switch` **gives back a value**, so we store it in a variable. That's called a **switch expression**, and it's the form to reach for first.

<div class="viz"><div class="viz-board"><div class="viz-code">
<div class="viz-line"><span class="viz-chip viz-p1"><b>1</b><span>String dayType</span></span><span class="viz-plain"> = </span><span class="viz-chip viz-p5"><b>2</b><span>switch (dayNumber)</span></span><span class="viz-plain"> {</span></div>
<div class="viz-line viz-indent"><span class="viz-chip viz-p3"><b>3</b><span>case 0, 6</span></span><span class="viz-plain"> </span><span class="viz-chip viz-p2"><b>4</b><span>-&gt;</span></span><span class="viz-plain"> </span><span class="viz-chip viz-p4"><b>5</b><span>"Weekend"</span></span><span class="viz-plain">;</span></div>
<div class="viz-line viz-indent"><span class="viz-plain">case 1, 2, 3, 4, 5 -&gt; "Weekday";</span></div>
<div class="viz-line viz-indent"><span class="viz-chip viz-p6"><b>6</b><span>default</span></span><span class="viz-plain"> -&gt; "Invalid day";</span></div>
<div class="viz-line"><span class="viz-plain">}</span><span class="viz-chip viz-p7"><b>7</b><span>;</span></span></div>
</div>
<div class="viz-legend">
<div class="viz-card"><div class="viz-t"><span class="viz-n" style="background:var(--viz-1)">1</span>The result goes here</div>The value the <code>switch</code> gives back is stored in this variable, just like <code>int sum = a + b;</code>.</div>
<div class="viz-card"><div class="viz-t"><span class="viz-n" style="background:var(--viz-5)">2</span>The value to check</div>Java looks at <code>dayNumber</code> once, then compares it with each case. It can be an <code>int</code>, a <code>char</code> or a <code>String</code>.</div>
<div class="viz-card"><div class="viz-t"><span class="viz-n" style="background:var(--viz-3)">3</span>Case labels</div>The values this case matches. Separate several values with <strong>commas</strong>: <code>case 0, 6</code> means "0 or 6".</div>
<div class="viz-card"><div class="viz-t"><span class="viz-n" style="background:var(--viz-2)">4</span>Arrow</div>Read <code>-&gt;</code> as "then". Only the matching case runs; there is no falling into the next one.</div>
<div class="viz-card"><div class="viz-t"><span class="viz-n" style="background:var(--viz-4)">5</span>The case's result</div>What the <code>switch</code> gives back when this case matches. Every case must give back the same type (here, a <code>String</code>).</div>
<div class="viz-card"><div class="viz-t"><span class="viz-n" style="background:var(--viz-6)">6</span><code>default</code></div>Runs when <strong>no</strong> case matches. It's the <code>switch</code>'s <code>else</code>.</div>
<div class="viz-card"><div class="viz-t"><span class="viz-n" style="background:var(--viz-7)">7</span>Semicolon</div>The whole <code>switch</code> is one long assignment, so it ends with <code>;</code> after the closing <code>}</code>.</div>
</div>
</div></div>

## 2. How Java picks a case

Java checks the cases **from top to bottom**, stops at the first match, and hands back that case's value.

<div class="viz"><div class="viz-board">
<div class="viz-machine">
<div class="viz-col"><div class="viz-val viz-a">6</div><div class="viz-small"><strong>dayNumber</strong><br>the value to check</div></div>
<div class="viz-arrow">→</div>
<div class="viz-box"><div class="viz-cap2">switch (dayNumber)</div><div class="viz-slot" style="background:#ccfbf1;font-weight:700">case 0, 6 -&gt; "Weekend" ✓</div><div class="viz-slot" style="background:#e2e8f0;opacity:.55">case 1, 2, 3, 4, 5 -&gt; "Weekday"</div><div class="viz-slot" style="background:#e2e8f0;opacity:.55">default -&gt; "Invalid day"</div></div>
<div class="viz-arrow">→</div>
<div class="viz-col"><div class="viz-val viz-c">"Weekend"</div><div class="viz-small"><strong>The result</strong><br>stored in dayType</div></div>
</div>
<div class="viz-steps">
<div class="viz-card"><div class="viz-t"><span class="viz-n" style="background:var(--viz-5)">1</span>Check</div>Is <code>6</code> one of <code>0, 6</code>? <strong>Yes.</strong></div>
<div class="viz-card"><div class="viz-t"><span class="viz-n" style="background:var(--viz-4)">2</span>Give back</div>That case's value, <code>"Weekend"</code>, comes out.</div>
<div class="viz-card"><div class="viz-t"><span class="viz-n" style="background:var(--viz-2)">3</span>Skip the rest</div>The other cases are never checked.</div>
<div class="viz-card"><div class="viz-t"><span class="viz-n" style="background:var(--viz-6)">4</span>No match?</div>If <code>dayNumber</code> were <code>9</code>, <code>default</code> would give back <code>"Invalid day"</code>.</div>
</div>
</div></div>

**Watch it happen:** set a breakpoint on the `switch` line, then press **Step Over** and see which case Java lands on.

## 3. Two jobs: give back a value, or run code

The arrows are the same. What changes is what each case does.

<div class="viz"><div class="viz-board">
<div class="viz-shape"><div class="viz-code"><div><span class="viz-mark viz-dash viz-a">String description =</span>&nbsp;switch (dayNumber) {</div><div class="viz-indent">case 0 -&gt; "Sunday";</div><div class="viz-indent">case 1 -&gt; "Monday";</div><div class="viz-indent">case 2 -&gt; "Tuesday";</div><div class="viz-indent">default -&gt; "Invalid day";</div><div>}<span class="viz-mark viz-dash viz-c">;</span></div></div><div><strong>Gives back a value (a switch expression)</strong><br>Each case is a <strong>value</strong>. The result lands in a variable, and the <code>switch</code> ends with <code>;</code>. Use it to turn one value into another: a number into a day name, a size into a price.</div></div>
<div class="viz-shape"><div class="viz-code"><div>switch (command.toUpperCase()) {</div><div class="viz-indent">case "D" -&gt; <span class="viz-mark viz-dash viz-b">{</span></div><div class="viz-indent"><div class="viz-indent">addDeposit();</div></div><div class="viz-indent"><span class="viz-mark viz-dash viz-b">}</span></div><div class="viz-indent">case "X" -&gt; {</div><div class="viz-indent"><div class="viz-indent">System.out.println("Goodbye!");</div></div><div class="viz-indent">}</div><div class="viz-indent">default -&gt; {</div><div class="viz-indent"><div class="viz-indent">System.out.println("Try again.");</div></div><div class="viz-indent">}</div><div>}</div></div><div><strong>Runs code (a switch statement)</strong><br>Each case is a <strong>block</strong> of code in <code>{ }</code>. Nothing is stored, and there's no <code>;</code> after the last <code>}</code>. This is the shape of every <strong>menu</strong>: each case usually calls one method, which keeps the <code>switch</code> short.</div></div>
</div></div>

> [!TIP] Strings: match the case
> `"d"` and `"D"` are different values to a `switch`. Switch on `command.toUpperCase()` so the user can type either one.

## 4. Rules that trip people up

<div class="viz"><div class="viz-board">
<div class="viz-legend">
<div class="viz-card"><div class="viz-t"><span class="viz-n" style="background:var(--viz-6)">1</span>Always add default</div>A switch expression must give back a value for <strong>every</strong> possible input. Leave out <code>default</code> and it won't compile.</div>
<div class="viz-card"><div class="viz-t"><span class="viz-n" style="background:var(--viz-3)">2</span>Exact values only</div>A case is a value, not a condition. <code>case score &gt;= 90</code> isn't allowed: use <code>if / else if</code> for ranges.</div>
<div class="viz-card"><div class="viz-t"><span class="viz-n" style="background:var(--viz-5)">3</span>Each value once</div>Two cases with the same value is an error ("Duplicate label"). Check your copy-and-pastes.</div>
<div class="viz-card"><div class="viz-t"><span class="viz-n" style="background:var(--viz-7)">4</span>The semicolon</div>A <code>switch</code> that's assigned to a variable ends with <code>};</code>. One that just runs code ends with <code>}</code>.</div>
<div class="viz-card"><div class="viz-t"><span class="viz-n" style="background:var(--viz-4)">5</span>One type of result</div>In an expression, every case gives back the same type. <code>"Weekend"</code> and <code>7</code> can't share a <code>switch</code>.</div>
</div>
</div></div>

## 5. You'll also see: the classic switch (colon and break)

Older code, many websites, and Workbook p. 124 use the **classic** form, with `case 0:` and `break;`. Recognize it, but write the arrow form.

<div class="viz"><div class="viz-two viz-stack">
<div class="viz-card"><div class="viz-t">Classic: colons and break</div><pre>String description = "";
switch (dayNumber) {
    case 0:
    case 6:
        description = "Weekend";
        break;
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        description = "Weekday";
        break;
}</pre></div>
<div class="viz-card"><div class="viz-t">Arrow: what we write</div><pre>String description = switch (dayNumber) {
    case 0, 6 -> "Weekend";
    case 1, 2, 3, 4, 5 -> "Weekday";
    default -> "Invalid day";
};</pre></div>
</div></div>

> [!WARNING] Fall-through: the classic switch's famous bug
> In the classic form, a case with no `break` keeps going and runs the **next** case too. Type `H` here and it prints **both** lines:
>
> ```java
> switch (command) {
>     case "H":
>         System.out.println("Hello!");      // no break...
>     case "X":
>         System.out.println("Goodbye!");    // ...so this runs too
>         break;
> }
> ```
>
> The arrow form never falls through, so there's no `break` to forget. If IntelliJ ever gives you the colon form, press **Option+Enter** (Mac) or **Alt+Enter** (Windows) on `switch` and choose **Replace with enhanced 'switch' statement**.

## 6. switch or if?

| Use a `switch` when... | Use `if / else if` when... |
|---|---|
| You check **one** variable against exact values | You check **ranges**: `score >= 90` |
| `dayNumber` is 0, 1, 2... | You check **different** variables: `age < 18 \|\| isStudent` |
| A menu choice is `"D"`, `"P"`, `"X"`... | You compare `double` values |

Both work for exact values. Pick the one that's easier to read. IntelliJ can turn an `if` chain into a `switch` for you: see [Writing a switch](/handouts/intellij-shortcuts#writing-a-switch).

## 7. Try it

**Predict the output.** What does this print when `size` is `"m"`? When it's `"XL"`?

```java
String size = "m";

double price = switch (size.toUpperCase()) {
    case "S" -> 4.50;
    case "M", "L" -> 5.75;
    default -> 0.0;
};
System.out.println(price);
```

::: details Check your answers
- `"m"` becomes `"M"`, which matches `case "M", "L"`, so it prints `5.75`.
- `"XL"` matches no case, so `default` gives back `0.0`, and it prints `0.0`.
:::

**Challenge:** write a switch expression that turns a `monthNumber` (1–12) into its season, `"Winter"`, `"Spring"`, `"Summer"` or `"Fall"`, and gives back `"Invalid month"` for anything else. Use commas so each season is one case.

::: details One possible answer
```java
int monthNumber = 4;

String season = switch (monthNumber) {
    case 12, 1, 2 -> "Winter";
    case 3, 4, 5 -> "Spring";
    case 6, 7, 8 -> "Summer";
    case 9, 10, 11 -> "Fall";
    default -> "Invalid month";
};
System.out.println(season);   // Spring
```
:::
