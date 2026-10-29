---
publish: true
title: Thu 10/29
section: Daily Checklists
---

# Thursday 10/29: Today's Checklist

**Today:** the morning is **Agile** (Workbook 3b): how teams plan work on a **project board**, and how to write a **README** in Markdown. Both are things you'll use in next week's Capstone. The afternoon starts with a short demo on **menus and screens** (your Capstone has three screens inside each other), then it's time to practice them and catch up.

Check items off as you go. **"Done" = it's committed, it's pushed to GitHub, and you've sent the repo URL.**

## First thing: carry-over from Wednesday

- [ ] **Search Inventory** (with its file bonus, if you got to it) is committed, pushed, and the URL is sent
- [ ] **Search Inventory menu bonus** (p. 50): the menu loop with a `switch`, each choice printing something, `5` to quit. Committed, pushed, and sent. (The code from Wednesday's demo: [SwitchMenuDemo.java](https://github.com/craigmckeachie/java-academy-demos/blob/main/src/main/java/com/pluralsight/workbook1c/switches/SwitchMenuDemo.java))

## Morning: Agile, user stories, and project boards (Workbook 3b)

After the **Agile** talk and the **project board** demo, skim Workbook 3b Modules 1–3 (pp. 3–37). The board pages have a screenshot of every click.

### Exercise: the Project Board (Workbook 3b p. 38)

This is the main exercise this morning. Friday you'll make one for your Capstone with the same steps, so take your time with it.

- [ ] On github.com, make a new project with the **Board** template, named **Hardware Store Project**
- [ ] Add a **QA/Testing** column and drag it to the left of **Done**
- [ ] Add a card to **Todo** for each of the **8** hardware-store requirements on p. 20, with a short title like **Search for a product**
- [ ] Drag the cards into priority order: what a customer needs **first** goes at the top
- [ ] Open at least **3** cards and give each a description: who it's for, what it does, and 2–3 **acceptance criteria** as a checklist (`- [ ] ...`), the way the demo did
- [ ] Move one card to **In Progress**
- [ ] Make the board **public**: the **⋯** menu (top right of the board) → **Settings**, then under **Danger zone** set **Visibility** to **Public**. (A private board shows a 404 to everyone but you.)
- [ ] Post the board's URL in Teams

> [!TIP] Optional: User Stories (Workbook 3b p. 20)
> Write each requirement as a user story, *As a (role), I want (something) so that (benefit)*, and put it at the top of that card's description. Be specific about **who** (a customer, a store owner, a warehouse worker). Some requirements need **more than one** story.

## Late morning: Markdown and README files

After the **Markdown and README** demo, keep the **[Markdown and README Files](/handouts/markdown-and-readmes)** page open. It has the cheat sheet and a template.

Write a README for **`search-inventory`**, exactly the way you will for your Capstone next week.

- [ ] Open **search-inventory** in IntelliJ and create **`README.md`** in its root folder, next to `pom.xml` ([how](/handouts/markdown-and-readmes#create-readme-md-in-intellij))
- [ ] Fill in the template: a title, what it does, how to run it (mention `inventory.csv` if you did the file bonus), and one piece of interesting code in a ```` ```java ```` block
- [ ] Add **one screenshot** of it running, saved in an `images` folder (steps on the [README page](/handouts/markdown-and-readmes#adding-a-screenshot))
- [ ] Use the preview in IntelliJ to check it as you go
- [ ] Commit **both** the README and the image, push, and **check it on GitHub**
- [ ] Post the repo link in Teams

## Afternoon: menus and screens, then catch up

After the **Menus and Screens** demo, keep the **[Menus and Screens](/handouts/menus-and-screens)** page open. It has all the code from the demo: one method per screen, a `do-while` loop in each, and actions that wait for Enter. (The demo code: [MenuScreensDemo.java](https://github.com/craigmckeachie/java-academy-demos/blob/main/src/main/java/com/pluralsight/workbook3a/screens/solutions/MenuScreensDemo.java))

### Exercise: Menus and Screens Practice (the Workout Tracker)

- [ ] Build the **[Workout Tracker](/handouts/menu-screens-practice)**: three screens, every action a `TODO`. Draw the screen map first. Committed, pushed, and the URL posted in Teams.
- [ ] Not finished by the end of the day? That's fine: you'll get up to 30 minutes for it first thing Friday, and the Online Store uses the same pattern.

### Catch up

Then use the rest of the afternoon for anything from this week that isn't done yet, in this order:

- [ ] Any required exercise from Monday to Wednesday that isn't finished, pushed and sent
- [ ] Search Inventory's file bonus (Wednesday), the best practice for the Capstone
- [ ] Make your Search Inventory menu choices really work, starting with **1** (list all products)
- [ ] Read Workbook 1c pp. 121–124 on `switch`, if you haven't yet
- [ ] READMEs for more of your repos
- [ ] The optional User Stories, on your board's cards
- [ ] Neighborhood Library, if you want to finish it

## Finished early?

- [ ] Acceptance criteria on **every** card, not just 3
- [ ] Convert one card to an **issue** in your `search-inventory` repo, the way the demo did
- [ ] More ideas: this week's [Stretch Goals](/stretch-goals/week-3-stretch-goals)

## Stuck?

- **[Help Desk](/handouts/help-desk):** today's helper is in the Help Desk breakout room for the first 15–20 minutes of each breakout. Share your screen; you do the typing.
- **Your instructor** is always available. Ask early!
- **The README picture is broken on GitHub?** Commit the `images` folder, and check that the file name in the README matches exactly (capitals count).
- **A heading shows up as `#Title`?** Put a space after the `#`.
- **No preview in IntelliJ?** Use the buttons in the top-right corner of the README editor.
