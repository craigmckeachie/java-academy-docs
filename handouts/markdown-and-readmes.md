---
publish: true
title: Markdown and README Files
section: Reference
order: 3
---

# Markdown and README Files

A **README** is the front page of your project. When someone opens your repository on GitHub, it's the first thing they see, right under your files: what the project is, how to run it, and what it looks like. Hiring managers read READMEs, and **every Capstone needs one**.

READMEs are written in **Markdown**: plain text with a few symbols that GitHub turns into headings, lists, links and pictures. The file is named **`README.md`** and sits in your project's **root folder**, next to `pom.xml`.

## Create README.md in IntelliJ

1. In the **Project** panel, right-click the project's **top folder** (the one with your project's name, where `pom.xml` is). Not `src`.
2. Choose **New → File**.
3. Type **`README.md`** and press **Enter**. Capital `README`, lowercase `.md`.
4. If IntelliJ asks whether to **add the file to Git**, click **Add**.

IntelliJ opens it with the text on the left and a **preview** on the right. If you only see one side, use the buttons in the editor's top-right corner: **Editor**, **Editor and Preview**, **Preview**.

> [!NOTE] No plugin needed
> IntelliJ comes with Markdown support already turned on: colors, the preview, and spell check. If the preview is missing, open **Settings → Plugins → Installed** and check that **Markdown** is enabled.

> [!WARNING] README.md in src, or named README.md.txt?
> GitHub only shows a README that's in the **top folder** and named exactly `README.md`. If yours is in the wrong place, drag it to the top folder in the Project panel. If its icon is a plain text page instead of an **M**, right-click it → **Rename** and fix the name.

## Markdown in one example

Type this:

````md
# Bedtime Stories

A command-line app that reads a children's story from a file
and prints it with **line numbers**.

## Features

- Pick any story by its file name
- Every line is numbered
- A friendly message if the story isn't found

## How to run it

1. Open the project in IntelliJ
2. Run `App.java`
3. Type a story name, like `goldilocks.txt`

## Interesting code

```java
String line = bufferedReader.readLine();
while (line != null) {
    System.out.println(line);
    line = bufferedReader.readLine();
}
```

## Screenshot

![The app printing a story](images/story-screen.png)

Made by Sam for the [Java Academy](https://craigmckeachie.github.io/java-academy-docs/).
````

And GitHub shows a page with a big title, two smaller headings, a bullet list, a numbered list, a gray code box with Java colors, and the picture.

## Cheat sheet

| What you want | Type this | Notes |
|---|---|---|
| Big title (once, at the top) | `# Project Name` | The space after `#` matters |
| Section heading | `## How to run it` | More `#` = smaller heading |
| Paragraph | Just type | Leave a **blank line** between paragraphs |
| Bold | `**important**` | |
| Italic | `*a little emphasis*` | |
| Bullet list | `- item` | One item per line |
| Numbered list | `1. step` | For steps in order |
| Checklist | `- [ ] to do` and `- [x] done` | Great for user stories on a project board |
| Code in a sentence | `` `App.java` `` | Backticks around the code |
| Code block | Three backticks + `java` on their own line, the code, then three backticks | Gives the code Java colors |
| Link | `[text people see](https://example.com)` | |
| Picture | `![what it shows](images/home-screen.png)` | Same as a link, with `!` in front |

> [!TIP] See it before you push
> In IntelliJ, open `README.md` and use the buttons in its top-right corner to show the **preview** next to the text. What you see there is close to what GitHub will show.

## Adding a screenshot

1. Take a screenshot of your app running in IntelliJ's console:
   - **Mac:** **Cmd+Shift+4**, then drag around the console. It saves to your Desktop.
   - **Windows:** **Win+Shift+S**, drag around the console, then click the notification to save it.
2. In your project's root folder, make a folder named **`images`**. Move the screenshot into it and give it a short name with no spaces, like `home-screen.png`.
3. In `README.md`, add `![The home screen](images/home-screen.png)`
4. Commit **both** the image and the README, then push. Check the README on GitHub: the picture should show.

## A README template for your projects

Copy this into `README.md` and replace everything in square brackets.

````md
# [Project Name]

[One or two sentences: what the app does and who it's for.]

## Features

- [What a user can do, one line each]
- [Another feature]

## How to run it

1. Clone the repository and open it in IntelliJ
2. Run `[App].java`
3. [What to type first]

## Screenshots

![The home screen](images/home-screen.png)

![Another screen](images/[another-screen].png)

## Interesting code

[One piece of code you're proud of, and a sentence about why.]

```java
[your code here]
```

## Author

[Your name], Year Up Java Academy
````

## What makes a good README

- [ ] The title is the project's name, and the first lines say what it does
- [ ] Someone who has never seen it could **run it** from your steps
- [ ] At least one **screenshot** of it running
- [ ] One piece of code you can explain (handy on demo day)
- [ ] No leftover template text in square brackets
- [ ] You checked it **on GitHub** after pushing, not just in IntelliJ
