---
publish: true
title: "IntelliJ + Git: New Project, Commit & Push"
section: Cheat Sheets
order: 1
---

# IntelliJ + Git: New Project, Commit & Push

The flow for every new project:

1. **Create the project**: once
2. **First commit, then share on GitHub**: once per project
3. **Commit & Push**: every time you finish a piece of work

## 1. Create a new project

1. In the welcome window, choose **New Project** near the top.
2. In the New Project window, set:
   - **Name:** your project's name, in **kebab-case** (lowercase with dashes between words), e.g. `shopping-cart`
   - **Location:** click the folder icon, then choose your **pluralsight** folder (or the workbook folder inside it)
   - ✅ **Create Git repository.** This creates a *local* Git repository on your computer.
   - **Build system:** Maven
   - **JDK:**
     - *First time:* open the dropdown → **Download JDK** → Version **17** → Vendor **Amazon Corretto 17** → **Select**
     - *Every time after:* choose **Amazon Corretto 17**
   - ⬜ **Uncheck** Add sample code
   - Expand **Advanced Settings** → **GroupId:** `com.pluralsight`
3. Click **Create**.
4. In the Project panel, right-click `src/main/java` → **New** → **Package**, and name it `com.pluralsight`.
5. Right-click the `com.pluralsight` package → **New** → **Java Class**.
   - Type only the name. Don't add `.java`; IntelliJ adds it for you.
   - This class starts your application. Common names are `App` or `Program`.
6. Add a `main` method: type `main`, then pick the live template from the popup, and IntelliJ writes the method for you:
   ```java
   public static void main(String[] args) {

   }
   ```

## 2. First commit, then share on GitHub (once per project)

**Commit:**
1. Click the **Commit** icon (**-o-**) in the left toolbar, or press **Cmd+K** (Mac) / **Ctrl+K** (Windows).
2. Check the box next to **Changes** to select all files.
3. In the message box at the bottom, type **`Initial commit`**.
4. Click **Commit**. Not "Commit and Push" yet: there's nowhere to push to until the project is on GitHub.

**Share on GitHub:**
1. In the top menu, choose **Git → GitHub → Share Project on GitHub**.
   - The first time, IntelliJ asks you to log in to GitHub.
2. **Uncheck Private.** Our repositories are public.
3. Click **Share**. IntelliJ creates the GitHub repository and pushes your commit to it.

## 3. Every change after that: Commit & Push

1. Open **Commit** (the **-o-** icon or **Cmd/Ctrl+K**).
2. Check the files you changed (or **Changes** for all of them).
3. Write a commit message.
4. Click **Commit and Push…**, then **Push** in the window that opens.

> **Committed but forgot to push?** Choose **Git → Push…** from the top menu.

### Writing good commit messages

- Write it as an **instruction** to the codebase. It should finish the sentence *"If applied, this commit will…"*
  - ✅ `Add sandwich size prompt`
  - ✅ `Fix discount for seniors`
  - ❌ `stuff`, `changes`, `fixed it`
- Commit **small and often**: each time one piece works.

## Quick check

- **Local vs. GitHub:** a **commit** saves a snapshot on *your computer*. A **push** sends your commits to *GitHub*. Your instructor can only see what you've pushed.
- To check your work is on GitHub, open the repository page on github.com and look for your latest commit message.
