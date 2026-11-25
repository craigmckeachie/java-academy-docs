---
publish: true
title: Wed 11/25
section: Daily Checklists
---

# Wednesday 11/25: Today's Checklist

**Today:** the last class before Thanksgiving. In the morning, more **stream methods** (Workbook 6a §4-3): `map`, `sorted` and `reduce`, so you can finish the Streams exercise. Then a short talk on **generics**, the `<T>` in `ArrayList<T>`. In the afternoon, **Capstone 2**: what it is, the four versions, and setting up your project.

Check items off as you go. **"Done" = the code runs, it's committed, it's pushed to GitHub, and its link is on the class GitHub sheet.**

## First thing (5 min)

- [ ] **`portfolio-manager`** and **`product-streams`** are pushed, and both links are on the class GitHub sheet
- [ ] Know what's left: Streams Tasks 2 and 4 (after this morning's demo), `Portfolio` if it isn't finished, and **`dealership-manager`** (due **Monday 12/7**)

## Morning: stream methods (Workbook 6a §4-3, 25 min)

After the **Stream Methods** demo (the code: [MapDemo.java](https://github.com/craigmckeachie/java-academy-demos/blob/main/src/main/java/com/pluralsight/workbook6a/streammethods/solutions/MapDemo.java), [SortedDemo.java](https://github.com/craigmckeachie/java-academy-demos/blob/main/src/main/java/com/pluralsight/workbook6a/streammethods/solutions/SortedDemo.java) and [ReduceDemo.java](https://github.com/craigmckeachie/java-academy-demos/blob/main/src/main/java/com/pluralsight/workbook6a/streammethods/solutions/ReduceDemo.java)), read pp. 72–78. Skip p. 79's exercise; ours replaces it. Then [Stream Anatomy](/handouts/streams) §3 and §5 (the parts you'll use, and four rules that catch most mistakes) and [Lambdas §4](/handouts/lambdas#_4-method-references) (what `System.out::println` means).

> [!TIP] Remember
> - **`filter`** changes **how many**.
> - **`map`** changes **what each one is** (a movie into its title).
> - **`sorted`** puts them in order. For objects, say what to compare: `.sorted(Comparator.comparing(movie -> movie.getYear()))`.
> - **`reduce`** boils them down to **one answer**: `reduce(BigDecimal.ZERO, (total, price) -> total.add(price))`.
> - `System.out::println` is a shortcut for `item -> System.out.println(item)`.

## Finish the Streams exercise (about 1 hour 25 min)

On the **[Streams: Products](/handouts/streams-exercise)** page:

- [ ] **Task 4, Step B:** `map` each product to its price, then `toList()`
- [ ] **Task 2, Step B:** `map`, then `reduce` from `BigDecimal.ZERO`
- [ ] Both match **When it's right**: total **$2264.43**
- [ ] Every task has its loop in a comment above its stream
- [ ] Commit and push
- [ ] Done? Tasks 6 and 7 on the same page. For Task 7, see [Sorting §4, In a stream](/handouts/sorting#_4-in-a-stream).

## Talk: generics (10 min)

You've used generics since Week 3: `ArrayList<String>`, then `ArrayList<Transaction>` in Capstone 1 and `ArrayList<Vehicle>` in the dealership. We'll look at how one `Pair<T>` class works for numbers **and** words (Workbook 6a pp. 42–52; the code: [Pair.java](https://github.com/craigmckeachie/java-academy-demos/blob/main/src/main/java/com/pluralsight/workbook6a/generics/solutions/Pair.java)). No exercise: the goal is to **read** `<T>`.

- [ ] Explain in one sentence why it's `ArrayList<Integer>`, never `ArrayList<int>`

## Late morning: catch up (about 1 hour 10 min)

In this order:

- [ ] **`portfolio-manager`**: `Portfolio` with `getValue()`, `getMostValuable()` and `getLeastValuable()`
- [ ] **`product-streams`**, if it isn't finished
- [ ] **`dealership-manager`**: Phase 1, then Phase 2 (due Monday 12/7)

## Afternoon: catch up (about 1 hour)

- [ ] Keep going on the late-morning list, in the same order. If the Capstone introduction starts early, this block gets shorter.

## Capstone 2 introduction (about 2 hours)

We'll go through the **[Capstone 2 Guide](/handouts/capstone-2-guide)** together, then you'll set up your project.

- [ ] Open **the Deli** document in the LMS (Week 8), and read it all the way through, **even if you might build something else**. All four versions have the same screens and rules, so once you understand the Deli, you understand them all.
- [ ] Check that you understand it: what can a customer choose for one sandwich, and what makes its price go up? Ask about anything that isn't clear.
- [ ] **Then** look at the Pizza, the Taco and the Custom. Which food would you like to build? **The Deli is a great choice too.**
- [ ] Pick your version. **The Custom version** needs your instructor's OK: fill in the [Custom Shop Planner](/handouts/capstone-2-guide#choose-your-version) and send its link in Teams by **Monday 11/30, before class**.
- [ ] Work through the Guide's **[Wednesday 11/25: set up](/handouts/capstone-2-guide#wednesday-11-25-set-up-in-class)** list: the project, `.idea/` in `.gitignore`, a **public** repo on the class GitHub sheet, and a **public** project board
- [ ] Look over the **[Capstone 2 Task List](/handouts/capstone-2-task-list)**, and copy your [screen map](/handouts/capstone-2-guide#your-screen-map-you-fill-it-in) into your notebook or README

## Over the break (optional)

Nobody has to code over Thanksgiving. If you want a head start:

- [ ] Underline the nouns and circle the verbs in your document's requirements, and sketch your **class diagram** ([how](/handouts/capstone-2-guide#draw-your-class-diagram-first))
- [ ] Work out the [price checks](/handouts/capstone-2-task-list#price-checks) by hand
- [ ] More ideas: the [Weeks 6–7 Stretch Goals](/stretch-goals/week-6-7-stretch-goals)

## Stuck?

- **[Help Desk](/handouts/help-desk):** today's helper is in the Help Desk breakout room for the first 15–20 minutes of each breakout. Share your screen; you do the typing.
- **Your instructor** is always available. Ask early!
- **`reduce` gives a red line?** The first argument is the starting value, `BigDecimal.ZERO`, and the lambda takes **two** inputs: `(total, price) -> total.add(price)`.
- **`map` and then `toList()` gives a `List<Product>`?** The lambda in `map` must return the **price**: `product -> product.getPrice()`.
- **"bad operand types for binary operator '+'"?** `+` doesn't work on `BigDecimal`. Use `.add()`.
- **`.idea` files in your first Capstone commit?** Ask your instructor before you do anything else.

## End of day

- [ ] Everything is committed and pushed, and every link is on the class GitHub sheet
- [ ] Your Capstone 2 repo and board are **public**, and you know which version you're building
- [ ] Have a great Thanksgiving!
