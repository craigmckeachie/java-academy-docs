---
publish: true
title: Class Diagram We Do
section: "Exercises & Workshops"
order: 4
slug: excalidraw-we-do
group: Week 6
---

# We Do: Draw a Class Diagram in Excalidraw

We'll do this one together: your instructor shares their screen and does a step, you do the same step, and you post a thumbs up in chat when you're ready for the next one. It finishes Exercise 1: Diagrams (Workbook 5a p. 13). It takes about 25 minutes.

- **Tool:** [excalidraw.com](https://excalidraw.com) in Google Chrome. It's free and needs no account.
- **Starter file:** <a href="/java-academy-docs/diagrams/vehicle-starter.excalidraw" download>vehicle-starter.excalidraw</a>. `Vehicle`, `Car` and `Trunk` are already typed in, with no arrows.
- **Your project:** `vehicle-inheritance`, in your `pluralsight/workbook-5` folder. The diagram files go in this folder, next to `pom.xml`, so they get committed with your code.
- **More help:** the [Class Diagrams](/handouts/class-diagrams) page has the same steps and a template with every shape.

## How a class is built

Each class is **two boxes grouped together**: the name on top, and the fields, a blank line and the methods underneath. When you click either box, the whole class gets selected, so it moves as one piece. The text belongs to its box, so the box grows as you type.

## Before you start (2 min)

1. Download <a href="/java-academy-docs/diagrams/vehicle-starter.excalidraw" download>vehicle-starter.excalidraw</a>.
2. Go to **[excalidraw.com](https://excalidraw.com)**. Open the menu (☰, top left) → **Open**, and pick the file from your **Downloads** folder.

You should see three classes. Thumbs up in chat.

## 1. Change a class's text (3 min)

1. **Double-click** the fields in `Trunk`. Only that box gets selected. The first click picks the whole class, and the second click goes inside it.
2. Press **Enter** to start typing. Click at the end of `- cargoSpace: int`, press **Enter**, and type `- open: boolean`.
3. Press **Escape** (or click an empty spot). The box grows on its own.

Double-click, Enter, type. Escape when you're done.

## 2. A new class: duplicate one (3 min)

1. Click the **name** of `Car` once. One selection box goes around the whole class.
2. Press **Cmd+D** (Windows: Ctrl+D). A copy appears on top, a little offset.
3. Drag the copy by its name to an empty spot.
4. Change the text: the name is `Moped`, the field is `- kickstandDown: boolean`, and the method is `+ putKickstandDown(): void`.

> [!WARNING] Only one box moved?
> You double-clicked into the group. Press **Escape**, click the empty canvas, then click the name **once**.

## 3. The has-a arrow: Car → Trunk (3 min)

1. Press **A** (the arrow tool), or click the arrow in the toolbar.
2. Drag from `Car` to `Trunk`. Let go when the outline of `Trunk` turns **blue**.
3. That's it. A new arrow already ends in the **open arrow** (two strokes), which is our has-a arrow.
4. **Check:** drag `Trunk` a little. The arrow follows, because it's glued.

The arrow starts at the class that has the field and points at what it has: a Car **has a** Trunk. A car has one trunk, so the field is `- trunk: Trunk`. Many wheels would be `- wheels: ArrayList<Wheel>`.

## 4. The is-a arrows: Car → Vehicle, Moped → Vehicle (4 min)

1. Press **A** and drag from `Car` up to the bottom edge of `Vehicle`. Let go when `Vehicle` turns blue.
2. With the arrow still selected, find **Arrowheads** in the panel on the left. Click the end arrowhead and pick the **hollow triangle** (the empty one, not the filled one).
3. The triangle points at the parent: a Car **is a** Vehicle.
4. Now `Moped`: click the Car → Vehicle arrow, press **Cmd+D** to duplicate it, and drag its plain end onto `Moped`. It keeps the hollow triangle.
5. **Check:** drag `Moped` around. Its arrow follows.

> [!WARNING] Gotchas
> - Is the triangle at the wrong end? You dragged from the parent. Delete the arrow (Backspace) and drag from the child.
> - A **filled** triangle means something else in UML. Pick the empty one.

## 5. Save the drawing (2 min)

Excalidraw keeps your drawing in this browser tab only. To keep it, save it as a file **in your project folder**.

1. Open the menu (☰) → **Save to...** → **Save to file** (under "Save to disk").
2. A Save window opens. Name the file `vehicle-diagram`. Excalidraw adds `.excalidraw` to the name.
3. Pick the folder: go to **pluralsight → workbook-5 → vehicle-inheritance**, the same folder that has `pom.xml`. Click **Save**.
4. From now on, **Cmd+S** (Windows: Ctrl+S) saves to the same file.

> [!WARNING] Not Google Drive, iCloud or Downloads
> Save it in your project folder. Then it's committed with your code, it's on GitHub, and you can find it next week. A file in Downloads or a cloud drive gets lost or left out of your repo.
>
> To keep editing later: excalidraw.com → menu (☰) → **Open** → `vehicle-inheritance/vehicle-diagram.excalidraw`.

Did your browser save it to Downloads without asking? Move `vehicle-diagram.excalidraw` from Downloads into your `vehicle-inheritance` folder.

## 6. Export a picture and put it in your README (3 min)

GitHub can't show an `.excalidraw` file, so we also export a picture of it.

1. Open the menu (☰) → **Export image...**.
2. Turn **Embed scene** on, so the picture can also be opened in Excalidraw. Pick **2×**, so it's sharp.
3. Click **PNG**. Name it `vehicle-diagram.png` and save it in the **same `vehicle-inheritance` folder**.
4. In IntelliJ, open `README.md` in the project (create it in the project folder if you don't have one) and add:

```markdown
## Class Diagram

![Class diagram](vehicle-diagram.png)
```

5. Click the **preview** button at the top right of the README editor. You should see your diagram.
6. Commit both files (`vehicle-diagram.excalidraw` and `vehicle-diagram.png`) and the README, then push.
7. Open your repo on GitHub. The picture shows on the front page.

> [!TIP] How the picture link works
> `![Class diagram](vehicle-diagram.png)` means: show the picture `vehicle-diagram.png` from the same folder as the README, and say "Class diagram" if it can't load. The name must match the file exactly, capital letters included. More on README files: [Markdown and READMEs](/handouts/markdown-and-readmes).

Changed the diagram later? Save (Cmd+S), export the PNG again with the same name, then commit and push both.

## On your own

Finish **your** diagram from the paper exercise (homework if needed):

- [ ] Duplicate a class for each remaining child (`SemiTruck`, `Hovercraft`), change the text, and give each one an is-a arrow (duplicate an existing one).
- [ ] Change the classes so they match **your** group's design, not ours.
- [ ] Add `Wheel` and its has-a arrow if your design has wheels.
- [ ] Save (Cmd+S), export the PNG again, commit and push.
- [ ] Check that the picture shows on your repo's GitHub page.

> [!NOTE] Optional (if time)
> - **Elbows:** select an arrow, then in the left panel pick **Arrow type** → the third icon (right angles).
> - **Groups:** to build a class from scratch, draw two rectangles, select both (Shift-click), and press **Cmd+G** (Windows: Ctrl+G). Duplicating is easier.
