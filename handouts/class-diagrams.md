---
publish: true
title: Class Diagrams
section: Java
order: 13
---

# Class Diagrams

A **class diagram** is a picture of your classes and how they connect. Draw it before you code: it's much easier to move a box than to rewrite a class. (Workbook 5a §1-1)

## 1. One class, one box

Every class is a box in three parts:

| Part | What goes in it | Example |
|---|---|---|
| **Name** | the class name, in bold | `Animal` |
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

![Animal with name, getName and setName. Dog with breed, getBreed, setBreed and bark. A hollow-triangle arrow labeled Extends goes from Dog up to Animal](/diagrams/animal.svg){.screenshot}

<a href="/java-academy-docs/diagrams/animal.drawio" download>Download animal.drawio</a> and open it in draw.io (**File → Open from → Device**) to copy its boxes and arrows.

## 5. Drawing it in draw.io

1. Go to **[app.diagrams.net](https://app.diagrams.net)**. If it asks where to save your diagrams, choose **Device**.
2. **A class box:** type `class` in the **search box** at the top left and drag the first result (a box with a title and two parts) onto the page. Double-click any text to change it.
3. **An arrow:** the easy way is to **copy one** from `animal.drawio` (Cmd+C / Ctrl+C, then paste). To draw one yourself, hover over a box, drag one of the small blue arrows to the other box, then, in the **Style** panel on the right, change the arrowhead at the line's end: the hollow triangle for is-a, the open arrow for has-a.
4. **Glue the ends.** Let go only when the other box lights up in **blue**. Then drag a box around: a glued arrow follows it. An arrow that doesn't is just sitting there.
5. **Numbers on a line (optional):** double-click the line near one end and type `1` or `0..*`. Drag the label off the line a little.
6. **Tidy up:** select a bent arrow and choose **Arrange → Clear Waypoints**.
7. **Save and export:**
   - **File → Save as** saves the `.drawio` file, the one you can edit later.
   - **File → Export as → PNG** makes the picture. Set **Zoom** to 200% so it's sharp, and leave **Include a copy of my diagram** checked.
   - Put both files in your project folder (for example `vehicle-diagram.drawio` and `vehicle-diagram.png`), commit, and push. Show the picture in your README with `![Class diagram](vehicle-diagram.png)`.

## 6. You'll also see

Diagrams online use a few extra arrows. You can read them; in class we keep to the two above.

| You see | It means | We draw |
|---|---|---|
| A **diamond** at one end (filled or empty) | a has-a where one class holds the other (a house has rooms) | the open arrow |
| `*` alone | the same as `0..*` | `0..*` |
| A field with `+` | a public field | always `-` (private) |
