---
publish: true
title: Stream Anatomy
section: Java
order: 54
group: "Streams"
---

# Anatomy of a Stream

A **stream** is an assembly line for a list. The items go in at one end, pass through the steps you choose, and one answer comes out at the other end. Every stream is built from the same parts. (Workbook 6a, pp. 60–78)

All the examples use the movies from the [Sorting](/handouts/sorting) page: Twister (1996), Ghost (1990), Halloween (1978), Jaws (1975) and Coco (2017).

## 1. The parts of a stream

<div class="viz"><div class="viz-board"><div class="viz-code">
<div class="viz-line"><span class="viz-chip viz-p5"><b>4</b><span>List&lt;String&gt; titles</span></span><span class="viz-plain"> = </span><span class="viz-chip viz-p1"><b>1</b><span>movies.stream()</span></span></div>
<div class="viz-line viz-indent"><span class="viz-chip viz-p4"><b>2</b><span>.filter(movie -&gt; movie.getYear() &lt; 1990)</span></span></div>
<div class="viz-line viz-indent"><span class="viz-chip viz-p4"><b>2</b><span>.map(movie -&gt; movie.getTitle())</span></span></div>
<div class="viz-line viz-indent"><span class="viz-chip viz-p3"><b>3</b><span>.toList()</span></span><span class="viz-plain">;</span></div>
</div>
<div class="viz-legend">
<div class="viz-card"><div class="viz-t"><span class="viz-n" style="background:var(--viz-1)">1</span>Source</div>Where the items come from. <code>.stream()</code> on a list starts the assembly line.</div>
<div class="viz-card"><div class="viz-t"><span class="viz-n" style="background:var(--viz-4)">2</span>Steps</div>Each one does something to the items and passes them on. Use as many as you need, in the order you need. Most take a <a href="/java-academy-docs/handouts/lambdas">lambda</a>.</div>
<div class="viz-card"><div class="viz-t"><span class="viz-n" style="background:var(--viz-3)">3</span>Final step</div>Turns the stream into an answer: a list, a number, or printing. Exactly <strong>one</strong>, always <strong>last</strong>.</div>
<div class="viz-card"><div class="viz-t"><span class="viz-n" style="background:var(--viz-5)">4</span>Result</div>Where the answer goes. Its type comes from the final step: <code>toList()</code> gives a <code>List</code>.</div>
</div>
</div></div>

**Read it out loud:** "Take the movies, keep the ones from before 1990, turn each one into its title, and give me a list."

> [!NOTE] The workbook's words
> The steps (2) are **intermediate operations**: each one gives back another stream, so you can add another step after it. The final step (3) is the **terminal operation**: it ends the stream.

## 2. Watch the items go through

The same stream, one step at a time. Each step only sees what the step before it let through.

<div class="viz"><div class="viz-board"><div class="viz-flow">
<div class="viz-step"><div class="viz-h">movies.stream()</div><div class="viz-small">all five movies</div><div class="viz-item viz-a">Twister (1996)</div><div class="viz-item viz-a">Ghost (1990)</div><div class="viz-item viz-a">Halloween (1978)</div><div class="viz-item viz-a">Jaws (1975)</div><div class="viz-item viz-a">Coco (2017)</div></div>
<div class="viz-arrow">→</div>
<div class="viz-step"><div class="viz-h">.filter(...)</div><div class="viz-small">before 1990? keep it</div><div class="viz-item viz-a viz-out">Twister (1996)</div><div class="viz-item viz-a viz-out">Ghost (1990)</div><div class="viz-item viz-a">Halloween (1978)</div><div class="viz-item viz-a">Jaws (1975)</div><div class="viz-item viz-a viz-out">Coco (2017)</div></div>
<div class="viz-arrow">→</div>
<div class="viz-step"><div class="viz-h">.map(...)</div><div class="viz-small">each movie → its title</div><div class="viz-item viz-gap">-</div><div class="viz-item viz-gap">-</div><div class="viz-item viz-b">"Halloween"</div><div class="viz-item viz-b">"Jaws"</div><div class="viz-item viz-gap">-</div></div>
</div>
<div class="viz-result"><div class="viz-cap">Then <code>.toList()</code> collects what's left:</div><span class="viz-c">[Halloween, Jaws]</span></div>
<div class="viz-steps">
<div class="viz-card"><div class="viz-t"><code>filter</code> keeps some</div>Five movies in, two out. <em>Ghost</em> is crossed out too: 1990 isn't <strong>before</strong> 1990.</div>
<div class="viz-card"><div class="viz-t"><code>map</code> changes each one</div>Two movies in, two titles out. The <strong>type</strong> changes: <code>Movie</code> → <code>String</code>.</div>
<div class="viz-card"><div class="viz-t"><code>toList</code> ends it</div>What's left becomes a <code>List&lt;String&gt;</code>. <code>movies</code> itself hasn't changed.</div>
</div>
</div></div>

## 3. The parts you'll use

**Steps** (as many as you like, each gives back a stream):

| Step | What it does | Example |
|---|---|---|
| **`filter`** | keeps the items where the lambda says `true` | `.filter(movie -> movie.getYear() < 1990)` |
| **`map`** | changes each item into something else | `.map(movie -> movie.getTitle())` |
| **`sorted`** | puts the items in order ([Sorting](/handouts/sorting#_4-in-a-stream)) | `.sorted(Comparator.comparing(Movie::getYear))` |

**Final steps** (exactly one, at the end):

| Final step | What you get back | Example |
|---|---|---|
| **`toList()`** | a `List` of what's left | `.toList()` |
| **`count()`** | how many are left, as a `long` | `.count()` |
| **`forEach`** | nothing: it does something with each one | `.forEach(movie -> System.out.println(movie))` |
| **`reduce`** | one value made from all of them, like a total ([Lambdas §3](/handouts/lambdas#_3-where-lambdas-go)) | `.reduce(BigDecimal.ZERO, (total, price) -> total.add(price))` |

What each lambda must give back (`true` or `false`, a new value, a number) is on the [Lambdas](/handouts/lambdas#_3-where-lambdas-go) page.

## 4. A loop and a stream, side by side

You already know how to do this with a loop. Each part of the loop has a part in the stream:

<div class="viz"><div class="viz-two viz-stack">
<div class="viz-card"><div class="viz-t">The loop</div><pre>List&lt;String&gt; titles = new ArrayList&lt;&gt;();
for (Movie movie : movies) {
    if (movie.getYear() &lt; 1990) {
        titles.add(movie.getTitle());
    }
}</pre></div>
<div class="viz-card"><div class="viz-t">The stream</div><pre>List&lt;String&gt; titles = movies.stream()
        .filter(movie -&gt; movie.getYear() &lt; 1990)
        .map(movie -&gt; movie.getTitle())
        .toList();</pre></div>
</div>
<div class="viz-steps">
<div class="viz-card"><div class="viz-t"><span class="viz-n" style="background:var(--viz-1)">1</span>Source</div><code>for (Movie movie : movies)</code> → <code>movies.stream()</code></div>
<div class="viz-card"><div class="viz-t"><span class="viz-n" style="background:var(--viz-4)">2</span>filter</div>the <code>if</code> → <code>.filter(...)</code></div>
<div class="viz-card"><div class="viz-t"><span class="viz-n" style="background:var(--viz-4)">2</span>map</div><code>movie.getTitle()</code> inside <code>add</code> → <code>.map(...)</code></div>
<div class="viz-card"><div class="viz-t"><span class="viz-n" style="background:var(--viz-3)">3</span>toList</div><code>new ArrayList&lt;&gt;()</code> and <code>add</code> → <code>.toList()</code></div>
</div></div>

Both give `[Halloween, Jaws]`. Neither one is "more correct". When the stream is hard to read, the loop is fine.

## 5. Four rules of a stream

| Rule | What happens if you forget it |
|---|---|
| **No final step, no answer.** A stream with only steps does nothing. | Nothing runs. IntelliJ warns that the result is ignored. |
| **The order of the steps matters.** Each step gets what the step before it gave back. | `.map(movie -> movie.getTitle())` and then `.filter(movie -> movie.getYear() < 1990)` gives **"cannot find symbol: method getYear()"**, because after `map` the items are `String`s, not movies. |
| **A stream is used once.** | Using the same stream twice gives `IllegalStateException: stream has already been operated upon or closed`. Start a new one with `movies.stream()`. |
| **The original list doesn't change.** You get a new answer instead. | To keep the result, store it: `List<String> titles = ...`. A `toList()` list can't be added to ([Lambdas §6](/handouts/lambdas#_6-removing-items-from-a-list)). |

## 6. Try it: label the stream

Name each numbered part, then predict what `count` holds.

<div class="viz"><div class="viz-board"><div class="viz-code">
<div class="viz-line"><span class="viz-chip viz-p2"><b>1</b><span>long count</span></span><span class="viz-plain"> = </span><span class="viz-chip viz-p2"><b>2</b><span>movies.stream()</span></span></div>
<div class="viz-line viz-indent"><span class="viz-chip viz-p2"><b>3</b><span>.filter(movie -&gt; movie.getTitle().startsWith("H"))</span></span></div>
<div class="viz-line viz-indent"><span class="viz-chip viz-p2"><b>4</b><span>.count()</span></span><span class="viz-plain">;</span></div>
</div></div></div>

**Word bank:** source · step · final step · result · loop

::: details Check your answers
1. result (a `long`, because `count()` gives back a `long`)
2. source
3. step (`filter`)
4. final step (`count`)

`count` is **1**: only *Halloween* starts with "H". The extra word is **loop**.
:::

**Challenge:** write a stream that prints the title of every movie from **after** 1990, one per line.

::: details One possible answer
```java
movies.stream()
        .filter(movie -> movie.getYear() > 1990)
        .map(movie -> movie.getTitle())
        .forEach(title -> System.out.println(title));
```

It prints `Twister` and `Coco`. There's no result variable: `forEach` gives back nothing.
:::

## Next

- **[Lambdas](/handouts/lambdas):** how to write the lambda inside each step, and what `Movie::getYear` means
- **[Sorting](/handouts/sorting):** `sorted()` and `Comparator.comparing`
- **[Streams: Products](/handouts/streams-exercise):** practice, loop first and then a stream
