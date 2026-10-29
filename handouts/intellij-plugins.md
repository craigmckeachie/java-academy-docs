---
publish: true
title: IntelliJ Plugins
section: IntelliJ
order: 3
group: Setup
---

# IntelliJ Plugins: Rainbow Brackets & More

A **plugin** is an add-on that gives IntelliJ a new feature. You install plugins from the **Marketplace**, a free store built into IntelliJ. This page walks you through installing one plugin, **Rainbow Brackets**, and then suggests two optional ones.

## Why Rainbow Brackets?

Java code is full of matching pairs: `(` `)`, `{` `}`, and `[` `]`. When one `}` goes missing, IntelliJ shows a red error, often far away from the real mistake. **Rainbow Brackets** gives each matching pair its own color, so you can see at a glance which `{` goes with which `}`:

```java
public class App {
    public static void main(String[] args) {
        int count = 1;
        while (count <= 3) {
            if (count == 2) {
                System.out.println("Two!");
            }
            count = count + 1;
        }
    }
}
```

With the plugin, the braces for `class`, `main`, `while`, and `if` each get a different color.

> [!NOTE] Is it free?
> **Yes, for Java.** Coloring brackets in Java code is free. The plugin also has a paid upgrade for extra features (some other languages, extra highlighting options). **You don't need it.** If the plugin ever offers you a trial or upgrade, you can close that message.
>
> IntelliJ on its own only highlights the matching bracket **when your cursor is right next to one**. It doesn't color every pair, so the plugin is still worth installing.

## Step 1: Open Settings

| Mac | Windows |
|---|---|
| **IntelliJ IDEA → Settings…** (top menu bar) | **File → Settings** |
| Shortcut: **Cmd+,** (Cmd and comma) | Shortcut: **Ctrl+Alt+S** |

> [!TIP] No project open?
> On the **Welcome to IntelliJ IDEA** screen, click **Plugins** in the list on the left and skip to Step 3.

## Step 2: Go to Plugins

In the list on the left side of the Settings window, click **Plugins**.

## Step 3: Search the Marketplace

1. At the top of the Plugins page, click the **Marketplace** tab. (The **Installed** tab shows plugins you already have.)
2. Click in the search box and type **Rainbow Brackets**.
3. Click the result named exactly **Rainbow Brackets** (by izhangzhihao). It has millions of downloads.

## Step 4: Install

1. Click the green **Install** button.
2. If IntelliJ shows a warning about **third-party plugins**, click **Accept**. (It means the plugin was made by someone other than JetBrains, the company that makes IntelliJ.)
3. Wait for the button to change to **Installed** or **Restart IDE**.

## Step 5: Apply or restart

- If you see a **Restart IDE** button, click it, then click **Restart** to confirm. IntelliJ closes and reopens your project. Your code is saved automatically, so nothing is lost.
- If there's no restart button, click **OK** to close Settings. The plugin is already on.

## Step 6: Check that it worked

1. Open any `.java` file with a few nested blocks, like a `main` method with a loop or an `if` inside.
2. Look at the brackets: matching pairs should now have **matching colors**, and each nesting level a different color.
3. Still all one color? Open **Settings → Plugins → Installed**, find **Rainbow Brackets**, and make sure its checkbox is checked. If it is, restart IntelliJ (**File → Exit**, then open it again).

> [!TIP] Turning a plugin off
> Go to **Settings → Plugins → Installed** and uncheck it (turns it off), or click it and choose **Uninstall** (removes it). Do this if a plugin ever gets in your way.

## Optional: two more helpful plugins

Install these the same way (Steps 1–6, with a different search). **Both are free.** They are optional, so skip them if you'd rather keep things simple.

| Plugin | What it does | Why it helps a beginner |
|---|---|---|
| **Key Promoter X** | Each time you click a button or menu with the mouse, a small popup shows the **keyboard shortcut** for it. It also shows a list of the shortcuts you'd use most. | You learn shortcuts (like **Run** or **Reformat Code**) just by working normally, and you get faster without memorizing a list. |
| **CSV Editor** | Colors each column of a `.csv` file and adds a **table view** (like a spreadsheet) when you open one. Works with comma (`,`) and pipe (`\|`) separated files. | This week you read and write data files. Seeing columns line up makes it easy to spot a missing value or an extra separator. |

> [!NOTE]
> Plugins are optional helpers, not requirements. Your code runs the same with or without them.
