---
publish: true
title: Prompting Patterns
section: AI
order: 3
---

# Prompting Patterns: Getting Useful Help from AI

AI is most useful when it **reviews** your work or **quizzes** you, not when it writes your code. **You write the code; AI explains, reviews and quizzes.** (See the [AI Use Policy](/handouts/ai-use-policy).) A good prompt has a predictable shape, and two patterns cover most of what you'll need. (Workbook 5a §2-3)

## 1. The four parts of a good prompt

| Part | Says | Example |
|---|---|---|
| **Context** | what you're working on and what you know | "I'm a beginning Java student. I just made my `Asset` class abstract." |
| **Task** | what you want the AI to do | "Explain what changed in what my code can and can't do." |
| **Constraints** | what it should **not** do | "Don't write more than five lines of code." |
| **Format** | how you want the answer | "A two-column table: before and after." |

**Weak:** `Explain abstract classes.` It has only a task, so you get a long, general answer that isn't about your code.

**Strong:** all four parts.

```text
I'm a beginning Java student. I just built an Asset class with House and
Vehicle children. Explain how making Asset abstract changes what my code
can and can't do. Use a two-column table of "before" and "after". Don't
write more than five lines of code.
```

## 2. The Persona pattern: "act as..."

Tell the AI **who to be**. A reviewer notices things the compiler can't.

> [!TIP] Template
> **Act as** a [role]. **Review** [my work] and [what you want]. **Do not** [what you don't want].

```text
Act as a senior Java developer reviewing a junior developer's first
inheritance hierarchy. Below are my Asset and House classes. Point out
three design problems, ranked most to least serious, and explain why
each one will cause trouble later. Do not rewrite my code.

[paste your Asset.java and House.java here]
```

**Then you decide.** Read each point and ask yourself: do I agree? Would I change it? Make the change **yourself**, in your own words and code.

> [!WARNING] It rewrote your code anyway?
> Don't copy it. Point at your constraint ("I said don't rewrite my code") and ask again, or stop reading there.

## 3. The Flipped Interaction pattern: "quiz me"

Normally you ask the questions. Here the **AI asks**, and you answer **from memory**.

> [!TIP] Template
> **Ask me one question at a time** until [goal]. **Don't tell me the answer** until [condition].

```text
I'm studying abstract classes and abstract methods in Java. Ask me one
question at a time to check whether I really understand them. Wait for
my answer before asking the next one. If I get something wrong, don't
correct me; ask a follow-up question that helps me find it myself.
After 5 questions, tell me which ideas I was shakiest on.
```

Change the topic in the first line, and the same prompt works for anything: overriding, polymorphism, `static`, `ArrayList`, try/catch. It's one of the best ways to study for an assessment.

## 4. Which one when?

| You... | Use | Why |
|---|---|---|
| **built** something and want feedback | **Persona** | a reviewer finds problems you can't see |
| are **about to** build something, or feel unsure | **Flipped Interaction** | finds the gaps in what you know before they become bugs |
| want something explained | **the four parts** | context and format make the answer about *your* code |

## 5. Rules that keep AI helpful

- **AI can be wrong.** Check what it says against the workbook, the [Java reference pages](/handouts/java-code-conventions), or by running the code.
- **Never paste code you can't explain.** If AI showed you something, close the chat and write it yourself. Then explain it out loud. (Before a Capstone demo, try the [AI Code Check](/handouts/ai-code-check).)
- **Say what you've learned so far.** "I'm a beginner and we haven't covered interfaces yet" keeps the answer at your level.
- **Ask it to explain, not to fix.** "Why does this error happen?" teaches you; "Fix this" doesn't.
