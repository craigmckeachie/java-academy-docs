---
publish: true
title: Formatting Output
section: Java
order: 4
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

The 1st placeholder gets the 1st argument, the 2nd gets the 2nd, and so on. Java matches them **by position only**: it never looks at the variable names. **The type must match**, too: a `%d` needs a whole number.

<div class="viz"><div class="viz-board">
<svg viewBox="0 0 573 166.5" role="img" aria-label="System.out.printf with three blanks: %s, %d and %.2f. Curved arrows go from the values name, id and pay back into the blanks: name fills %s first, id fills %d second, pay fills %.2f third." style="width:100%;min-width:540px;max-width:680px;margin:0 auto;height:auto;display:block;font-family:var(--vp-font-family-mono)"><defs><marker id="sfc-a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--viz-a)"/></marker><marker id="sfc-b" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--viz-b)"/></marker><marker id="sfc-c" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--viz-c)"/></marker></defs><text x="259.5" y="18" text-anchor="middle" style="font-family:var(--vp-font-family-base);font-size:11px;letter-spacing:.05em;fill:var(--vp-c-text-2)">BLANKS</text><text x="468.75" y="18" text-anchor="middle" style="font-family:var(--vp-font-family-base);font-size:11px;letter-spacing:.05em;fill:var(--vp-c-text-2)">VALUES</text><path d="M414,54 C414,172 198,172 198,57" style="fill:none;stroke:var(--viz-a);stroke-width:2.5" marker-end="url(#sfc-a)"/><circle cx="306" cy="142.5" r="11" style="fill:var(--viz-a)"/><text x="306" y="147" text-anchor="middle" style="font-family:var(--vp-font-family-base);font-size:12px;font-weight:700;fill:var(--vp-c-bg)">1</text><path d="M471,54 C471,138 264,138 264,57" style="fill:none;stroke:var(--viz-b);stroke-width:2.5" marker-end="url(#sfc-b)"/><circle cx="367.5" cy="117" r="11" style="fill:var(--viz-b)"/><text x="367.5" y="121.5" text-anchor="middle" style="font-family:var(--vp-font-family-base);font-size:12px;font-weight:700;fill:var(--vp-c-bg)">2</text><path d="M523.5,54 C523.5,106 321,106 321,57" style="fill:none;stroke:var(--viz-c);stroke-width:2.5" marker-end="url(#sfc-c)"/><circle cx="422.25" cy="93" r="11" style="fill:var(--viz-c)"/><text x="422.25" y="97.5" text-anchor="middle" style="font-family:var(--vp-font-family-base);font-size:12px;font-weight:700;fill:var(--vp-c-bg)">3</text><text x="12" y="46" xml:space="preserve" style="font-size:15px;fill:var(--vp-c-text-1)">System.out.printf(</text><text x="174" y="46" xml:space="preserve" style="font-size:15px;fill:var(--vp-c-text-1)">&quot;</text><rect x="185" y="30" width="26" height="22" rx="4" style="fill:var(--viz-a-bg);stroke:var(--viz-a);stroke-width:1.5"/><text x="189" y="46" style="font-size:15px;fill:var(--viz-a)">%s</text><text x="213" y="46" xml:space="preserve" style="font-size:15px;fill:var(--vp-c-text-1)"> id:</text><rect x="251" y="30" width="26" height="22" rx="4" style="fill:var(--viz-b-bg);stroke:var(--viz-b);stroke-width:1.5"/><text x="255" y="46" style="font-size:15px;fill:var(--viz-b)">%d</text><text x="279" y="46" xml:space="preserve" style="font-size:15px;fill:var(--vp-c-text-1)"> $</text><rect x="299" y="30" width="44" height="22" rx="4" style="fill:var(--viz-c-bg);stroke:var(--viz-c);stroke-width:1.5"/><text x="303" y="46" style="font-size:15px;fill:var(--viz-c)">%.2f</text><text x="345" y="46" xml:space="preserve" style="font-size:15px;fill:var(--vp-c-text-1)">%n</text><text x="363" y="46" xml:space="preserve" style="font-size:15px;fill:var(--vp-c-text-1)">&quot;, </text><rect x="392" y="30" width="44" height="22" rx="4" style="fill:var(--viz-a-bg);stroke:var(--viz-a);stroke-width:1.5"/><text x="396" y="46" style="font-size:15px;fill:var(--viz-a)">name</text><text x="438" y="46" xml:space="preserve" style="font-size:15px;fill:var(--vp-c-text-1)">, </text><rect x="458" y="30" width="26" height="22" rx="4" style="fill:var(--viz-b-bg);stroke:var(--viz-b);stroke-width:1.5"/><text x="462" y="46" style="font-size:15px;fill:var(--viz-b)">id</text><text x="486" y="46" xml:space="preserve" style="font-size:15px;fill:var(--vp-c-text-1)">, </text><rect x="506" y="30" width="35" height="22" rx="4" style="fill:var(--viz-c-bg);stroke:var(--viz-c);stroke-width:1.5"/><text x="510" y="46" style="font-size:15px;fill:var(--viz-c)">pay</text><text x="543" y="46" xml:space="preserve" style="font-size:15px;fill:var(--vp-c-text-1)">);</text></svg>
<div class="viz-result"><div class="viz-cap">The values, in order:</div>1. <span class="viz-a">name</span> = "Brandon Plyers" <span style="color:var(--vp-c-text-3)">(String)</span><br>2. <span class="viz-b">id</span> = 10135 <span style="color:var(--vp-c-text-3)">(int)</span><br>3. <span class="viz-c">pay</span> = 5239.7 <span style="color:var(--vp-c-text-3)">(double)</span></div>
<div class="viz-result"><div class="viz-cap">Output:</div><span class="viz-a">Brandon Plyers</span> id:<span class="viz-b">10135</span> $<span class="viz-c">5239.70</span></div>
</div></div>

Notice `%.2f` turned `5239.7` into `5239.70`: exactly 2 decimal places.

> [!WARNING] Swap the arguments and the blanks get the wrong values
> `printf("%s id:%d%n", id, name)` prints `10135 id:` (the `%s` happily takes the number) and then **crashes** with `IllegalFormatConversionException: d != java.lang.String`, because the 2nd blank, `%d`, got the String. The values go in the order you list them, not the order you meant.

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

### Lining up columns: width and the `-` flag

A **width** makes a value take up **at least** that many characters, padded with spaces. Numbers line up on the **right** by default; add `-` to line text up on the **left**. (Workbook 1c p. 76 lists width in the syntax, but the exercises don't use it. Treat it as a bonus.)

<div class="viz"><div class="viz-board">
<div class="viz-line"><span class="viz-plain">System.out.printf("</span><span class="viz-chip viz-p1"><b>a</b><span>%-6s</span></span><span class="viz-plain"> score: </span><span class="viz-chip viz-p5"><b>b</b><span>%4d</span></span><span class="viz-plain">%n", name, score);</span></div>
<div class="viz-legend">
<div class="viz-card"><div class="viz-t"><span class="viz-n" style="background:var(--viz-1)">a</span><code>%-6s</code></div>6 characters wide, <strong>left</strong>-aligned (the <code>-</code>). The spaces go <strong>after</strong> the text.</div>
<div class="viz-card"><div class="viz-t"><span class="viz-n" style="background:var(--viz-5)">b</span><code>%4d</code></div>4 characters wide, <strong>right</strong>-aligned (the default). The spaces go <strong>before</strong> the number.</div>
</div>
<div class="viz-result"><div class="viz-cap">Output, with every character in its own box (· = space). The columns line up:</div>
<div class="viz-row"><span class="viz-cells"><i class="viz-ca">N</i><i class="viz-ca">o</i><i class="viz-ca">v</i><i class="viz-ca">a</i><i class="viz-ca viz-sp">·</i><i class="viz-ca viz-sp">·</i></span><span> score: </span><span class="viz-cells"><i class="viz-cb viz-sp">·</i><i class="viz-cb">2</i><i class="viz-cb">7</i><i class="viz-cb">0</i></span></div><div class="viz-row"><span class="viz-cells"><i class="viz-ca">R</i><i class="viz-ca">e</i><i class="viz-ca">x</i><i class="viz-ca viz-sp">·</i><i class="viz-ca viz-sp">·</i><i class="viz-ca viz-sp">·</i></span><span> score: </span><span class="viz-cells"><i class="viz-cb viz-sp">·</i><i class="viz-cb">4</i><i class="viz-cb">3</i><i class="viz-cb">5</i></span></div><div class="viz-row"><span class="viz-cells"><i class="viz-ca">P</i><i class="viz-ca">i</i><i class="viz-ca">p</i><i class="viz-ca viz-sp">·</i><i class="viz-ca viz-sp">·</i><i class="viz-ca viz-sp">·</i></span><span> score: </span><span class="viz-cells"><i class="viz-cb viz-sp">·</i><i class="viz-cb viz-sp">·</i><i class="viz-cb">9</i><i class="viz-cb">0</i></span></div>
</div>
<div class="viz-result"><div class="viz-cap">Without a width (<code>"%s score: %d%n"</code>) they don't:</div><div class="viz-row">Nova score: 270</div><div class="viz-row">Rex score: 435</div><div class="viz-row">Pip score: 90</div></div>
</div></div>

Width is a **minimum, not a limit**: `String.format("%4d", 123456)` prints all of `123456`; nothing gets cut off. That row just won't line up.

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
