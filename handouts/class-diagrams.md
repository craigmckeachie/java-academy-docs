---
publish: true
title: Class Diagrams
section: Java
order: 13
---

# Class Diagrams

A **class diagram** is a picture of your classes and how they connect. Draw it before you code: it's much easier to move a box than to rewrite a class. (Workbook 5a §1-1)

## 1. One class, one box

Every class is a box in three parts: the name on top, then the fields, then the methods.

| Part | What goes in it | Example |
|---|---|---|
| **Name** | the class name | `Animal` |
| **Fields** | what the object **knows**: `name: Type` | `- name: String` |
| **Methods** | what the object **does**: name, parameters, then `: ReturnType` | `+ getName(): String` |

The symbol in front says who can use it:

| Symbol | Means | Use it for |
|---|---|---|
| `-` | `private` | every field |
| `+` | `public` | methods other classes call |
| `#` | `protected` | rarely; we keep fields private |

> [!TIP] The type goes after the name
> In code you write `String name`. In a diagram you write `name: String`. Same information, different order.

## 2. Two ways classes connect

![Dog extends Animal, drawn with a hollow triangle at Animal. Hand has Card, drawn with an open arrow at Card, 1 at the Hand end and 0..* at the Card end](/diagrams/relationships.svg){.screenshot}

| Relationship | Say it | Draw it | In Java |
|---|---|---|---|
| **Is-a** (inheritance) | "A Dog **is an** Animal." | solid line, **hollow triangle** at the parent | `extends` |
| **Has-a** | "A Hand **has** Cards." | solid line, **open arrow** at the thing it has | a field, like `cards` in `Hand` |

**The test:** say "A ___ is a ___." If it sounds right, it's is-a. If it sounds wrong ("a Hand is a Card"), it's has-a, or the classes aren't connected at all.

The arrow always starts at the class doing the extending or the having, and points **at** the other one.

## 3. One or many?

For every has-a, decide: does it have **one**, or a **list**? The field in the box shows your answer:

| It has | The field | Example |
|---|---|---|
| one | the class itself | `- trunk: Trunk` |
| many | an `ArrayList` of it | `- cards: ArrayList<Card>` |

### Optional: numbers on the line

Many diagrams also put a number at each end of a has-a line. You don't need them in your diagrams, but you'll see them, including in the diagrams on this site:

| Write | Means |
|---|---|
| `1` | exactly one |
| `0..*` | any number, including none (a list) |

Each number describes the box **it's next to**. In the picture above, `1` sits by `Hand` and `0..*` sits by `Card`, so it reads: **one** hand has **zero or more** cards.

## 4. Example: Animal and Dog

The demo from Workbook 5a §1-2. `Dog` only lists what's new; it gets `name`, `getName()` and `setName()` from `Animal`.

![Animal with name, getName and setName. Dog with breed, getBreed, setBreed and bark. A hollow-triangle arrow goes from Dog up to Animal](/diagrams/animal.svg){.screenshot}

To draw your own, start from the template in section 6.

## 5. Abstract classes

An **abstract** class (Workbook 5a §2-2) gets two small marks:

| What | How to draw it | Example |
|---|---|---|
| An **abstract class** | `«abstract»` on its own line above the name | `«abstract»` / `Contract` |
| An **abstract method** (no body) | `(abstract)` at the end of the line | `+ getTotalPrice(): BigDecimal (abstract)` |

The children list their own version of each abstract method, because they **must** write one. The arrows don't change: a child still points at its parent with a hollow triangle.

![Contract, marked abstract, with abstract getTotalPrice and getMonthlyPayment. SalesContract and LeaseContract each list their own getTotalPrice and getMonthlyPayment, with hollow-triangle arrows up to Contract. A has-a arrow goes from Contract to Vehicle](/diagrams/contract.svg){.screenshot}

> [!TIP] Typing « and »
> Mac: **Option+\\** gives `«` and **Option+Shift+\\** gives `»`. Windows: **Alt+0171** and **Alt+0187** on the number pad. Or type `<<abstract>>`; it means the same thing.

In printed UML, abstract names and methods are often in *italics* instead. Excalidraw can't do italics, so we use the words.

## 6. Drawing it in Excalidraw

We draw class diagrams at **[excalidraw.com](https://excalidraw.com)**: free, no account, and it looks like a whiteboard sketch. Start from our template and copy what you need; you never build a class box from scratch.

1. **Get the template:** download <a href="/java-academy-docs/diagrams/class-template.excalidraw" download>class-template.excalidraw</a>. In Excalidraw, open the menu (☰, top left) → **Open** and pick the file. It has a blank class, an is-a pair (`Dog` → `Animal`) and a has-a pair (`Hand` → `Card`).
2. **Copy a class:** click its **name** once (the whole class gets one selection box), then **Cmd+D** (Windows: Ctrl+D) to duplicate it. Drag the copy away by its name.
3. **Change the text:** **double-click** the part you want (the name, or the fields and methods), then press **Enter** to start typing. Press **Enter** for a new line. Press **Escape** or click an empty spot to finish. The box grows on its own.
4. **Copy an arrow:** click the arrow, **Cmd+D**, then drag each end onto a box. Let go when the box outline turns **blue**: the end is glued. Check it: drag the box a little and the arrow follows.
5. **Or draw an arrow:** press **A** (the arrow tool) and drag from one box to the other. A new arrow already has the **open arrow** for has-a. For is-a, select it and pick the **hollow triangle** under **Arrowheads** in the panel on the left.
6. **Which way?** Start the arrow at the class doing the extending or the having, and end it **at** the other one: `Dog` → `Animal`, `Hand` → `Card`.
7. **Numbers on a line (optional):** double-click an empty spot next to the line and type `1` or `0..*`.
8. **Save the drawing:** menu (☰) → **Save to...** → **Save to file**. Save it in your **project folder** (next to `pom.xml`), for example `vehicle-diagram.excalidraw`, not in Downloads or a cloud drive. After that, **Cmd+S** saves to the same file. To keep editing later, **Open** that file.
9. **Export a picture:** menu (☰) → **Export image**. Turn on **Embed scene**, pick **2×**, and click **PNG**. Save it in the same folder (for example `vehicle-diagram.png`).
10. **Show it in your README** with `![Class diagram](vehicle-diagram.png)`, then commit both files and push. GitHub shows the PNG; it can't show the `.excalidraw` file.

For a guided walk-through of all of this, see the [Excalidraw We Do](/handouts/excalidraw-we-do).

> [!WARNING] Your drawing lives in this browser
> Excalidraw keeps your work in the browser tab until you save it. Save the `.excalidraw` file in your project folder before you close the tab.

### Which arrowhead?

| You want | Arrowhead | Line |
|---|---|---|
| **is-a** (`extends`) | **hollow triangle** (the empty one, not the filled one) | solid |
| **has-a** (a field) | **open arrow** (two strokes; the default) | solid |

Skip the diamonds, dots and bars in the arrowhead list; see below.

## 7. You'll also see

Diagrams online use a few extra arrows. You can read them; in class we keep to the two above.

| You see | It means | We draw |
|---|---|---|
| A **diamond** at one end (filled or empty) | a has-a where one class holds the other (a house has rooms) | the open arrow |
| A **dashed** line with a hollow triangle | `implements`, coming in Week 7 | nothing yet |
| A **dashed** line with an open arrow | one class just *uses* another for a moment (no field) | nothing |
| `*` alone | the same as `0..*` | `0..*` |
| A field with `+` | a public field | always `-` (private) |
