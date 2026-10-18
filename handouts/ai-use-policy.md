---
publish: true
title: AI Use Policy
section: Handouts
order: 1
---

# AI Use Policy

**AI helps you understand and review your code. It doesn't write your code for you.**

That one line is the whole policy, and it applies for the **entire academy**, including the capstones. The table below is that rule applied to specific things you'll want to do.

## Why

This policy is here to help you learn, not to police you. It's about what you'll be able to do **on your own**: in the in-class knowledge assessments, in a job interview, and in your first weeks on the job.

There's a harder reason too: **you can't review code you don't understand.** Checking AI output is a real job skill, and it only works if you could have written the code yourself. Every exercise you build by hand is what makes you good with AI later.

The workbooks say the same thing: *"Never submit code you don't understand."* (Workbook 1c, AI Ethics, pp. 92–95; Workbook 2a §1-3, Using AI, pp. 22–26.)

## The test

When you're about to accept something from an AI tool, ask yourself:

> **Did I already know what I wanted to write?**

- **Yes:** the AI saved you some typing. That's fine.
- **No:** the AI made the decision for you. That's the decision you're here to practice making, so do it yourself.

## What's allowed

| What you want to do | OK? |
|---|---|
| Ask AI to **explain** a concept, or code you're reading | ✅ |
| Ask AI to **explain an error message** or stack trace | ✅ |
| Look up **syntax**, a Java class, or the Java docs | ✅ |
| Describe a bug's **symptoms** and ask where to look | ✅ |
| Ask for an **analogy** that connects to your interests | ✅ |
| Have AI **add a learning comment above each line** of code **you wrote** | ✅ ⭐ Encouraged |
| Ask AI to **review code you wrote** and critique it | ✅ ⭐ Encouraged |
| Ask AI for **test inputs** to try against your program | ✅ |
| Autocomplete finishing a line you'd **already decided on** | ✅ |
| Autocomplete writing a block you **hadn't thought through** | ❌ |
| Ask AI to **write** a method, a class, or an exercise | ❌ |
| Paste the exercise instructions and ask for a solution | ❌ |
| Ask AI to **design** your approach or your classes | ❌ |
| Agent mode / AI that edits your files for you | ❌ |

> [!NOTE] AI lessons in the course
> Some lessons teach a specific AI skill, such as **prompting patterns** (Workbook 5a) and **generating tests for Spring Boot** (Workbook 9a). In those lessons, follow the lesson's instructions. They're practicing a skill, not changing this policy.

## The two encouraged habits

### 1. Learning comments

After **your** code works, ask AI to explain it line by line:

> *"Add a short comment above each line of this Java code explaining what it does. I'm a beginner."*

Then **read every comment** and make sure you agree. These notes are for learning. Remove them from finished, professional code. (See [Comments](/handouts/java-code-conventions#comments) in Java Code Conventions.)

### 2. Code review

After you've written something that works, ask for a review instead of a rewrite:

> *"Here's a method I wrote. Review it for bugs, naming, and readability. Don't rewrite it. List the issues and explain why each one matters."*

Then **decide** about each point: accept it or reject it, and know your reason either way. Make the changes **yourself**, by typing them, and run your program to check.

## Prompts that work

- *"What's the difference between `==` and `.equals()` for Strings?"*
- *"Why does `nextLine()` return an empty String right after `nextInt()`?"*
- *"I'm getting `InputMismatchException` on this line. What are the likely causes?"* Then go check them yourself.
- *"I play basketball. Can you explain Java arrays using basketball?"*

**Prompts to skip:**
- *"Write the sandwich shop program."*
- *"Finish this exercise: …"* (pasted instructions)
- *"Fix my code"*, followed by pasting back whatever it gives you

> [!WARNING] Always verify. AI is sometimes confidently wrong.
> An explanation is a **claim, not a fact**. If AI tells you why a bug happens, confirm it: run the program, step through it in the debugger, or check the workbook before you act on it. A confident, plausible, *wrong* answer is the most expensive thing AI produces.

## Be careful what you paste

Don't paste passwords, API keys, personal information, or anything private into an AI tool (Workbook 1c, p. 93).

## If you're not sure

Ask. *"Is it okay if I use AI for this?"* is always a fine question, and asking it is a much better signal about you than guessing.
