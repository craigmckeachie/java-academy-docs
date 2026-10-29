---
publish: true
title: Method Anatomy
section: Java
order: 6
---

# Anatomy of a Java Method

Every method is built from the same parts. Learn to spot them, and any method becomes readable. (Workbook 1c §4-2, pp. 106–112)

## 1. The parts of a method

<div class="viz"><div class="viz-board"><div class="viz-code">
<div class="viz-line"><span class="viz-chip viz-p1"><b>1</b><span>public</span></span><span class="viz-plain"> </span><span class="viz-chip viz-p7"><b>2</b><span>static</span></span><span class="viz-plain"> </span><span class="viz-chip viz-p5"><b>3</b><span>int</span></span><span class="viz-plain"> </span><span class="viz-chip viz-p3"><b>4</b><span>addNumbers</span></span><span class="viz-chip viz-p4"><b>5</b><span>(int a, int b)</span></span><span class="viz-plain"> {</span></div>
<div class="viz-bodybox"><span class="viz-tag">6</span><div class="viz-line"><span class="viz-plain">int sum = a + b;</span></div><div class="viz-line"><span class="viz-chip viz-p6"><b>7</b><span>return sum;</span></span></div></div>
<div class="viz-line"><span class="viz-plain">}</span></div>
</div>
<div class="viz-legend">
<div class="viz-card"><div class="viz-t"><span class="viz-n" style="background:var(--viz-1)">1</span>Access modifier</div><strong>Who</strong> can call the method. <code>public</code> = any code. (<code>private</code> = only code in the same class; coming in Workbook 2a.)</div>
<div class="viz-card"><div class="viz-t"><span class="viz-n" style="background:var(--viz-7)">2</span><code>static</code> modifier</div>The method belongs to the <strong>class</strong>, so you can call it without creating an object, e.g. <code>Math.max(3, 4)</code>. For now, all our methods are <code>static</code>.</div>
<div class="viz-card"><div class="viz-t"><span class="viz-n" style="background:var(--viz-5)">3</span>Return type</div>The type of value handed back. <code>void</code> means nothing comes back.</div>
<div class="viz-card"><div class="viz-t"><span class="viz-n" style="background:var(--viz-3)">4</span>Method name</div>What you type to call it. camelCase, and a <strong>verb</strong>.</div>
<div class="viz-card"><div class="viz-t"><span class="viz-n" style="background:var(--viz-4)">5</span>Parameters</div>The inputs, each with a type and a name, inside parentheses. Can be empty: <code>()</code>.</div>
<div class="viz-card"><div class="viz-t"><span class="viz-n" style="background:var(--viz-2)">6</span>Body</div>The work the method does, between the curly braces.</div>
<div class="viz-card"><div class="viz-t"><span class="viz-n" style="background:var(--viz-6)">7</span>Return statement</div>Sends the answer back to whoever called the method. Its value must match the return type.</div>
</div>
</div></div>

> [!NOTE] Header vs. signature
> Parts 1–5 together are the method **header**. The method's **signature** is just its **name + parameter types**: `addNumbers(int, int)`. Java uses the signature to tell methods apart (overloading, Workbook 2a p. 51).

> [!TIP] Two kinds of modifiers
> `public` is an **access modifier**: it controls *who* can use the method. `static` is a **non-access modifier**: it changes *how* the method works (here, it belongs to the class instead of to an object).

## 2. A method is a machine

Put values in, something happens inside, and a value comes out.

<div class="viz"><div class="viz-board">
<div class="viz-machine">
<div class="viz-col"><div class="viz-val viz-a">3</div><div class="viz-val viz-a">4</div><div class="viz-small"><strong>Arguments</strong><br>the values you pass in</div></div>
<div class="viz-arrow">→</div>
<div class="viz-box"><div class="viz-slot" style="background:#ffedd5">addNumbers</div><div class="viz-cap2">Parameters</div><div class="viz-slot" style="background:#ccfbf1">int a = 3</div><div class="viz-slot" style="background:#ccfbf1">int b = 4</div><div class="viz-cap2">Body</div><div class="viz-slot" style="background:#e2e8f0">int sum = a + b;</div><div class="viz-slot" style="background:#ffe4e6">return sum;</div></div>
<div class="viz-arrow">→</div>
<div class="viz-col"><div class="viz-val viz-c">7</div><div class="viz-small"><strong>Return value</strong><br>what comes back out</div></div>
</div>
<div class="viz-result"><div class="viz-cap">The call that starts the machine:</div>int result = <span class="viz-mark viz-b">addNumbers(3, 4)</span>;</div>
<div class="viz-steps">
<div class="viz-card"><div class="viz-t">Parameters</div>The <strong>slots</strong> in the definition: <code>a</code> and <code>b</code>.</div>
<div class="viz-card"><div class="viz-t">Arguments</div>The <strong>values</strong> in the call: <code>3</code> and <code>4</code>.</div>
<div class="viz-card"><div class="viz-t">Return value</div>What comes <strong>out</strong>: <code>7</code>.</div>
</div>
</div></div>

## 3. Defining vs. calling

**Writing a method doesn't run it.** A method runs only when something **calls** it.

<div class="viz"><div class="viz-two viz-stack">
<div class="viz-card"><div class="viz-t">Definition: written once</div><pre>public static int addNumbers(int a, int b) {
    int sum = a + b;
    return sum;
}</pre></div>
<div class="viz-card"><div class="viz-t">Call: used as often as you like</div><pre>public static void main(String[] args) {
    int result = addNumbers(3, 4);
    System.out.println(result);   // 7
}</pre></div>
</div>
<div class="viz-steps">
<div class="viz-card"><div class="viz-t"><span class="viz-n" style="background:var(--viz-5)">1</span>Call</div><code>main</code> asks <code>addNumbers</code> to run, with the arguments <code>3</code> and <code>4</code>.</div>
<div class="viz-card"><div class="viz-t"><span class="viz-n" style="background:var(--viz-4)">2</span>Pass in</div><code>3</code> is copied into <code>a</code>, and <code>4</code> into <code>b</code>.</div>
<div class="viz-card"><div class="viz-t"><span class="viz-n" style="background:var(--viz-2)">3</span>Run and return</div>The body runs: <code>sum</code> is <code>7</code>, and <code>return</code> sends <code>7</code> back.</div>
<div class="viz-card"><div class="viz-t"><span class="viz-n" style="background:var(--viz-6)">4</span>Receive</div><code>7</code> lands in <code>result</code>, ready to print or reuse.</div>
</div></div>

**Watch it happen:** set a breakpoint on the call, then use **Step Into** in the debugger.

## 4. Same parts, different shapes

Not every method takes inputs or gives back a value. The highlighted part is what changes.

<div class="viz"><div class="viz-board">
<div class="viz-shape"><div class="viz-code"><div>public static <span class="viz-mark viz-dash viz-b">void</span> greet(String name) {</div><div class="viz-indent">System.out.println("Hi, " + name);</div><div>}</div></div><div><strong>Gives back nothing: <code>void</code></strong><br>No return statement. The method <em>does</em> something (prints) instead of handing a value back.</div></div>
<div class="viz-shape"><div class="viz-code"><div>public static int rollDie<span class="viz-mark viz-dash viz-c">()</span> {</div><div class="viz-indent">return (int) (Math.random() * 6) + 1;</div><div>}</div></div><div><strong>Takes nothing: empty <code>()</code></strong><br>No inputs needed. The parentheses stay, in the definition and in the call: <code>rollDie()</code>.</div></div>
<div class="viz-shape"><div class="viz-code"><div>public static <span class="viz-mark viz-dash viz-a">boolean</span> isGameOver(int lives) {</div><div class="viz-indent">return lives &lt;= 0;</div><div>}</div></div><div><strong>Any type can come back</strong><br>Here it's <code>true</code> or <code>false</code>. The return type must match what the <code>return</code> statement sends.</div></div>
</div></div>

> [!NOTE] Coming up: methods without static
> In Workbook 2a Module 2 you'll write methods **without** `static`. Those belong to an **object**, and you call them on that object: `pet.giveTreat()`, `scanner.nextInt()`. You've already used some!

## 5. Try it: label the method

Name each numbered part. Use the word bank (two words are extras).

<div class="viz"><div class="viz-board"><div class="viz-code">
<div class="viz-line"><span class="viz-chip viz-p2"><b>1</b><span>public</span></span><span class="viz-plain"> </span><span class="viz-chip viz-p2"><b>2</b><span>static</span></span><span class="viz-plain"> </span><span class="viz-chip viz-p2"><b>3</b><span>double</span></span><span class="viz-plain"> </span><span class="viz-chip viz-p2"><b>4</b><span>square</span></span><span class="viz-chip viz-p2"><b>5</b><span>(double n)</span></span><span class="viz-plain"> {</span></div>
<div class="viz-bodybox"><span class="viz-tag">6</span><div class="viz-line"><span class="viz-plain">double answer = n * n;</span></div><div class="viz-line"><span class="viz-chip viz-p2"><b>7</b><span>return answer;</span></span></div></div>
<div class="viz-line"><span class="viz-plain">}</span></div>
</div></div></div>

**Word bank:** access modifier · argument · body · method name · parameters · return statement · return type · `static` modifier · variable

::: details Check your answers
1. access modifier
2. `static` modifier
3. return type
4. method name
5. parameters
6. body
7. return statement

The extras are **argument** (that's the value in a *call*, like the `5` in `square(5)`) and **variable**.
:::

**Challenge:** write a method named `triple` that takes an `int` and returns it multiplied by 3. Then call it from `main` and print the result.

::: details One possible answer
```java
public static int triple(int number) {
    return number * 3;
}

public static void main(String[] args) {
    System.out.println(triple(5));   // 15
}
```
:::
