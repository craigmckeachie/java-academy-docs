---
publish: true
title: Class Types
section: Java
order: 15
---

# Concrete Class, Abstract Class, or Interface?

All three describe what objects can do. The difference is **how many of their methods have a body**. (Abstract classes: Workbook 5a §2-2. Interfaces: Workbook 6a Module 1.)

## 1. The parts of a method

A method has two parts. Abstract classes and interfaces let you write the first part **without** the second.

<div class="viz"><div class="viz-board"><div class="viz-code">
<div class="viz-line"><span class="viz-chip viz-p5"><b>1</b><span>public void makeSound()</span></span><span class="viz-plain"> {</span></div>
<div class="viz-bodybox"><span class="viz-tag">2</span><div class="viz-line"><span class="viz-plain">System.out.println("Woof!");</span></div></div>
<div class="viz-line"><span class="viz-plain">}</span></div>
<div class="viz-line" style="margin-top:18px"><span class="viz-chip viz-p5"><b>1</b><span>public abstract void makeSound()</span></span><span class="viz-chip viz-p6"><b>3</b><span>;</span></span></div>
</div>
<div class="viz-legend">
<div class="viz-card"><div class="viz-t"><span class="viz-n" style="background:var(--viz-5)">1</span>Declaration</div><strong>What</strong> the method is: its name, inputs and return type. Often called the method's <em>signature</em>.</div>
<div class="viz-card"><div class="viz-t"><span class="viz-n" style="background:var(--viz-2)">2</span>Implementation (body)</div><strong>How</strong> it works: the code between the curly braces.</div>
<div class="viz-card"><div class="viz-t"><span class="viz-n" style="background:var(--viz-6)">3</span>No body</div>An <code>abstract</code> method ends with <code>;</code> instead of <code>{ }</code>. Some child class must write the body.</div>
</div>
</div></div>

> [!NOTE] Signature, strictly speaking
> On [Method Anatomy](/handouts/method-anatomy) the **signature** is just the name and parameter types: `makeSound()`. People often say "signature" for the whole first line, as this page does.

## 2. How many methods have a body?

Each box is a method. A solid box has a body <code>{ }</code>. A dashed box is a declaration only, ending in <code>;</code>.

<div class="viz"><div class="viz-board"><div class="viz-three">
<div class="viz-card"><div class="viz-t">Concrete class</div><div class="viz-meter"><i class="viz-full">{ }</i><i class="viz-full">{ }</i><i class="viz-full">{ }</i></div><strong>All</strong> methods have a body.</div>
<div class="viz-card"><div class="viz-t">Abstract class</div><div class="viz-meter"><i class="viz-full">{ }</i><i class="viz-full">{ }</i><i>;</i></div>A <strong>mix</strong>: some have a body, some are just declarations.</div>
<div class="viz-card"><div class="viz-t">Interface</div><div class="viz-meter"><i>;</i><i>;</i><i>;</i></div><strong>None</strong> have a body: declarations only.</div>
</div></div></div>

## 3. Side by side

<div class="viz"><div class="viz-board"><div class="viz-two viz-stack">
<div class="viz-card"><div class="viz-t">Concrete class</div><span class="viz-kw">class</span><pre>public class Dog {
    public void bark() {
        System.out.println("Woof!");
    }
}</pre>A <strong>specific thing</strong>. You can make one: <code>new Dog()</code>.</div>
<div class="viz-card"><div class="viz-t">Abstract class</div><span class="viz-kw">abstract class</span><pre>public abstract class Animal {
    public void eat() {
        System.out.println("Eating...");
    }
    public abstract void makeSound();
}</pre>A <strong>partial template</strong>. No <code>new Animal()</code>; children <code>extends Animal</code> and fill in <code>makeSound()</code>.</div>
<div class="viz-card"><div class="viz-t">Interface</div><span class="viz-kw">interface</span><pre>public interface Flyable {
    void fly();
}</pre>A <strong>contract</strong>: what a class can do, not how. No <code>new Flyable()</code>; classes <code>implements Flyable</code>.</div>
</div></div></div>

Interface methods are `public` and `abstract` automatically, so `void fly();` needs neither word.

## 4. Filling in the blanks

A child class **must** write a body for every method that doesn't have one. Unrelated classes can share an interface:

<div class="viz"><div class="viz-board"><div class="viz-two viz-stack">
<div class="viz-card"><div class="viz-t">Dog <span class="viz-kw">extends</span> Animal</div><pre>public class Dog extends Animal {
    @Override
    public void makeSound() {
        System.out.println("Woof!");
    }
}</pre>Gets <code>eat()</code> for free. Writes <code>makeSound()</code>.</div>
<div class="viz-card"><div class="viz-t">Bird <span class="viz-kw">implements</span> Flyable</div><pre>public class Bird implements Flyable {
    @Override
    public void fly() {
        System.out.println("Flapping wings!");
    }
}</pre></div>
<div class="viz-card"><div class="viz-t">Airplane <span class="viz-kw">implements</span> Flyable</div><pre>public class Airplane implements Flyable {
    @Override
    public void fly() {
        System.out.println("Taking off!");
    }
}</pre>A bird and a plane aren't related, but both <strong>can fly</strong>.</div>
</div></div></div>

**One parent, many interfaces.** A class can `extends` only **one** class, but `implements` as many interfaces as it needs:

<div class="viz"><div class="viz-board"><div class="viz-code">
<div class="viz-line" style="flex-wrap:nowrap"><span class="viz-plain">public class Bat </span><span class="viz-chip viz-p1"><b>1</b><span>extends Animal</span></span><span class="viz-plain"> </span><span class="viz-chip viz-p4"><b>2</b><span>implements Flyable, Pet</span></span><span class="viz-plain"> {</span></div>
</div>
<div class="viz-legend">
<div class="viz-card"><div class="viz-t"><span class="viz-n" style="background:var(--viz-1)">1</span>extends</div>Exactly <strong>one</strong> parent class (concrete or abstract). <code>extends</code> comes first.</div>
<div class="viz-card"><div class="viz-t"><span class="viz-n" style="background:var(--viz-4)">2</span>implements</div><strong>Any number</strong> of interfaces, separated by commas.</div>
</div>
</div></div>

## 5. Summary

| | Concrete class | Abstract class | Interface |
|---|---|---|---|
| **Methods with a body** | All | Some | None\* |
| **Can use `new`?** | ✅ Yes | ❌ No | ❌ No |
| **Children use** | `extends` | `extends` | `implements` |
| **How many per class?** | 1 parent | 1 parent | As many as you like |
| **Think of it as** | A real, usable thing | A partial template | A contract or capability |

\* Interfaces can also have `default` and `static` methods with bodies (Workbook 6a p. 16). Start with "declarations only"; you'll meet those later.

## 6. Which one do I need?

<div class="viz"><div class="viz-board"><div class="viz-steps">
<div class="viz-card"><div class="viz-t"><span class="viz-n" style="background:var(--viz-4)">?</span>Concrete class</div>You want to <strong>make objects</strong> of it, and you can write every method now. Example: <code>House</code>, <code>Dog</code>.</div>
<div class="viz-card"><div class="viz-t"><span class="viz-n" style="background:var(--viz-3)">?</span>Abstract class</div><strong>Related</strong> classes share code, but each one must do one thing <strong>its own way</strong>. Example: <code>Asset</code> and <code>getValue()</code>.</div>
<div class="viz-card"><div class="viz-t"><span class="viz-n" style="background:var(--viz-5)">?</span>Interface</div><strong>Unrelated</strong> classes share an ability. Example: <code>Flyable</code>, <code>Drivable</code>, <code>Payable</code>.</div>
</div></div></div>

> [!TIP] Quick test
> Ask "**is a**" or "**can do**". A `Dog` **is an** `Animal`: extend a class. A `Bird` **can** fly: implement an interface.

Not sure when you'd ever use an abstract class? See [Why Abstract?](/handouts/why-abstract).
