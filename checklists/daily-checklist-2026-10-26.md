---
publish: true
title: Mon 10/26
section: Daily Checklists
---

# Monday 10/26: Today's Checklist

**Today:** Workbook 3a starts with **exceptions** (what to do when a program crashes) and **reading files**. Before that, push your fixes from your fix-it list. After lunch there's a short review, and then **Assessment 1 runs from 3:00 to 4:00**.

Check items off as you go. **"Done" = the code runs, it's committed, it's pushed to GitHub, and you've sent the repo URL.**

## First thing: your fix-it list

- [ ] Work through the fix-it list your instructor sent you in Teams, top item first
- [ ] Run each fixed program with **more than one input**, including the edge cases (for example ages 17, 25 and 65, or 20 and 45 hours)
- [ ] Commit and push to the **same repo**. The link on the class sheet stays the same.
- [ ] Link any missing exercise on the class GitHub sheet, finished or not
- [ ] **Deadline: end of class today.** The assessment runs from 3:00 to 4:00, so push **before 3:00** to be safe.

## Morning: handling exceptions (Workbook 3a §1-1)

After the **Handling Exceptions** demo, read pp. 5–8.

### Exercise 1: famous-quotes (p. 9)

- [ ] Create a **`workbook-3`** folder in your `pluralsight` folder. All of this week's exercises go there.
- [ ] Create the project **`famous-quotes`** in `workbook-3`, with a git repository. Share it to GitHub.
- [ ] Make an array of **10** of your favorite quotes
- [ ] Ask the user for a number from **1 to 10** and print that quote. Remember: number 1 is index 0.
- [ ] Test it with a number that exists. Commit and push.
- [ ] **No try/catch yet.** Type a number that doesn't exist, like 12 or 0. What happens? Read the red text: what went wrong, and on which line?
- [ ] Now add a `try/catch`, the way the demo did. Inside the `catch`, print a friendly message **and** call `e.printStackTrace();`
- [ ] Test it again with a good number and a bad number
- [ ] Commit, push, and **send the repo URL**

> [!TIP] Optional (if time): the p. 9 bonuses
> - Ask whether the user wants to see another quote, and repeat if they say yes. A bad number shouldn't end the program, so put the `try/catch` **inside** the loop.
> - Add an option for a **random** quote (`Math.random()`, from Workbook 1c).

## Late morning: reading files (Workbook 3a §1-2)

After the **Reading a File** demo, read pp. 11–14.

> [!IMPORTANT] Where files go
> Put every file your program reads in the **project's root folder**, next to `pom.xml`. Then `new FileReader("goldilocks.txt")` finds it with no folder names.

### Exercise 2: bedtime-stories (pp. 15–16)

- [ ] Create the project **`bedtime-stories`** in `workbook-3`, with a git repository. Share it to GitHub.
- [ ] Unzip **DataFiles.zip** and copy `goldilocks.txt`, `hansel_and_gretel.txt` and `mary_had_a_little_lamb.txt` into the project's **root folder**
- [ ] Start from the demo's read pattern: `FileReader`, `BufferedReader`, read the first line, then `while (line != null)`, inside a `try/catch` with `e.printStackTrace();`
- [ ] Read `goldilocks.txt` by name first and print every line. Run it, then commit and push.
- [ ] Ask the user for the story's file name with a `Scanner`, and use their answer instead of the fixed name
- [ ] Add a **line number** to the start of each line, like p. 16 shows. Hint: a counter that starts at 1, and `lineNumber = lineNumber + 1` inside the loop.
- [ ] Test all three stories, plus a file name that doesn't exist. What does `printStackTrace()` show you?
- [ ] Commit, push, and **send the repo URL**

## 1:00: Assessment 1 review

- [ ] Join the class review. If you have time before 3:00, retake the **[Java Assessment 1 Review](https://wayground.com/join?gc=46201155)** on Wayground (code **4620 1155** at joinmyquiz.com) and read every explanation.

## After the review: catch up

- [ ] Finish Famous Quotes or Bedtime Stories
- [ ] Push any last fixes from your fix-it list (before 3:00 is safest)
- [ ] If you're done: **Exercise 3: payroll-calculator** (pp. 17–18). It's the same read loop, plus `split("\\|")` on each line (Workbook 2a). You'll finish it tomorrow, when you add writing to a file.

## 3:00–4:00: Assessment 1

- [ ] **25 questions, 60 minutes.** It's open book: see the **[Assessment Policy](/handouts/assessment-policy)** for what you may use (workbooks, your notes, GitHub code, IntelliJ, the listed sites).
- [ ] **No AI and no search engines** during the assessment
- [ ] Read code questions the way the computer does: trace each variable on paper, line by line

## Finished early?

- [ ] The Famous Quotes bonuses (above)
- [ ] In Bedtime Stories, if the file isn't found, print "Sorry, I couldn't find that story" and ask again until the user types one that exists
- [ ] More ideas: this week's [Stretch Goals](/stretch-goals/week-3-stretch-goals)

## Stuck?

- **[Help Desk](/handouts/help-desk):** today's helper is in the Help Desk breakout room for the first 15–20 minutes of each breakout. Share your screen; you do the typing.
- **Your instructor** is always available. Ask early!
- **Red underline on `new FileReader`?** Java wants a `try/catch` around file code. Add one with `catch (IOException e)`.
- **`FileNotFoundException`?** The file isn't in the project root, or the name is spelled differently (check `.txt` and underscores).
- **Only the first line prints, or the same line prints forever?** Check that the loop reads the **next** line at the bottom: `line = bufferedReader.readLine();`
