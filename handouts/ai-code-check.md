---
publish: true
title: AI Code Check
section: Handouts
order: 2
---

# AI Code Check

A prompt that reviews code **you already wrote**, using the same points your instructor checks. It finds problems and explains them. It doesn't fix them: that part is yours. This is the code review habit from the [AI Use Policy](/handouts/ai-use-policy#_2-code-review).

## How to use it

1. **Get it working first.** Run it, and commit and push. A review is for working code, not for building it.
2. **Copy the prompt** below into your AI tool, and paste your code at the bottom. For a long file, paste one class or a few methods at a time.
3. **Decide about each point.** Do you agree? Can you say why? AI is sometimes confidently wrong, and it doesn't know everything about your project, so you can reject a point.
4. **Make the changes yourself**, one at a time, by typing them. Don't paste code back.
5. **Run it again** after each change, then commit with a clear message.

> [!WARNING] Check what you paste
> Paste only your project code. Leave out passwords, keys and anything personal.

## The prompt

```text
You are reviewing code written by a beginner in their first weeks of learning
Java. Help me learn. Don't write my code for me.

RULES FOR YOUR REVIEW
- Do NOT rewrite my code, and don't give me a corrected version of a method.
- For each issue, give me: the method or line, what the issue is, and why it
  matters. You may describe the kind of change to make, in words.
- List the most important issues first. If something is fine, don't invent a
  problem. Also tell me 2 things I did well.
- Only suggest what a beginner has learned: variables, conditionals, loops,
  methods, Strings, arrays, ArrayList, HashMap, simple classes, try/catch,
  reading and writing files, LocalDate and LocalTime.
- Don't suggest streams, lambdas, interfaces, inheritance, generics of my own,
  BigDecimal, design patterns, or new classes. I organize my code with methods.

CHECK THESE POINTS

Methods
1. Names are a verb + a noun. A void method says what it does: display, print,
   save, add. "get" means it returns a value, so a method that prints shouldn't
   start with get. displayMonthToDate() is good; getMonthToDate() is not.
2. "run" is for methods that show an interactive screen, like runLedgerScreen().
3. Each method does one thing. 5 to 20 lines is a good target, though a screen
   with a long menu can run over. Point out any method doing two jobs.
4. Similar methods are named the same way, and repeated code could be a method.
   A search or report finds its matches and returns a list, and a separate
   method displays a list.

Variables and logic
5. Names say what they hold. No one-letter names, except a loop counter. A
   boolean reads like a yes/no question (isRunning). Constants are UPPER_SNAKE_CASE.
6. No variables that aren't needed, and no changing data just to work around
   something, like reversing a list to loop through it backwards.
7. A loop that filters is easy to read. An if on what to include is simplest.
   A boolean flag or continue is also fine, so don't call either one a problem.
   Do point out a flag that does nothing, like one set and checked right away.
8. double values aren't compared with ==. Use Math.abs(a - b) < 0.001.

Dates and types
9. date and time fields are LocalDate and LocalTime, not String. They only become
   text when writing a line to a file or reading one back.
10. Dates are compared with date methods: isBefore(), isAfter(), getMonth(),
    getMonthValue(), getYear(). Not compareTo(), startsWith() or substring().

Cleanup
11. No debug prints left in: working directory, file paths, raw file lines,
    loaded counts.
12. File work catches IOException, not Exception.
13. No unused imports, no commented-out code, no leftover TODOs.
14. One brace and formatting style throughout.
15. Names explain the code, so few or no comments is fine. Don't list a missing
    comment as an issue. If a line is hard to follow, suggest a clearer name or
    a small method first. Do point out comments that just restate the code. A
    good comment says why, gives an outside rule, or warns about a gotcha.

Also point out any bug you can see, and tell me how I could test it to see it
for myself.

MY CODE
[paste your code here]
```

## After the review

The review reads your code, but it doesn't run your app. Before you call it done, test it yourself, the way a user would: add a deposit and a payment, **quit, start the app again**, and check that both are still there and nothing was skipped. Then go through the [Quality check](/handouts/capstone-1-task-list#quality-check-before-friday).

Be ready to explain any change you make. On demo day, the code is yours to explain.
