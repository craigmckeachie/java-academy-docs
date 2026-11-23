---
publish: true
title: Sorting
section: Java
order: 56
group: "Streams"
---

# Sorting Your Own Objects

Java can sort a list of `String`s or numbers without any help. A list of **your own** objects (movies, products, people) is different: Java can't know whether to sort them by title, by year, or by price. There are two ways to tell it:

| | **`Comparable`** | **`Comparator`** |
|---|---|---|
| **In one sentence** | "This object knows how to compare **itself**." | "**I'll** tell you how to compare two objects." |
| **Where the code goes** | **Inside** the class: `implements Comparable<Movie>` | **Outside** the class: a lambda, or `Comparator.comparing(...)` |
| **The method** | `compareTo(Movie other)` | `compare(Movie first, Movie second)` |
| **How many orders** | **One**, the class's "natural" order | **As many as you need**: by year today, by title tomorrow |
| **How you sort** | `Collections.sort(movies);` | `movies.sort(comparator);` |
| **In a stream** | `.sorted()` | `.sorted(comparator)` |

Workbook 6a: `Comparable` is Exercise 3 (pp. 39–40); `sorted()` is pp. 75–76.

## 1. The answer `compareTo` gives

You've used `compareTo` since Week 5: `price.compareTo(limit) > 0` means "the price is bigger." It always answers with a **number**, and only its **sign** matters:

| `a.compareTo(b)` gives | It means | Think of it as |
|---|---|---|
| **negative** (less than 0) | `a` is smaller | "I come **before** you" |
| **0** | they're the same | "we tie" |
| **positive** (more than 0) | `a` is bigger | "I come **after** you" |

```java
System.out.println("Apple".compareTo("Banana"));   // -1: Apple comes first
System.out.println("Banana".compareTo("Banana"));  // 0: the same
System.out.println("Cherry".compareTo("Banana"));  // 1: Cherry comes after
System.out.println("apple".compareTo("Banana"));   // 31: lowercase comes after uppercase!
```

It isn't always `-1` or `1`: the last one is `31`. That's why you always compare the answer **with 0** (`< 0`, `> 0`, `== 0`), never with `-1` or `1`.

> [!TIP] Sorting is just this question, asked over and over
> To sort a list, Java keeps picking two items and asking "which one comes first?" Your `compareTo` (or your `Comparator`) is the answer to that question. You never write the sorting itself.

## 2. Way 1: `Comparable` (inside the class)

Use it when the class has **one obvious order**. Movies are usually listed by title:

```java
public class Movie implements Comparable<Movie> {
    private String title;
    private int year;

    public Movie(String title, int year) {
        this.title = title;
        this.year = year;
    }

    public String getTitle() {
        return title;
    }

    public int getYear() {
        return year;
    }

    @Override
    public int compareTo(Movie other) {
        return this.title.compareTo(other.title);
    }

    @Override
    public String toString() {
        return title + " (" + year + ")";
    }
}
```

**Read `compareTo` out loud:** "To compare me with another movie, compare **my title** with **its title**." A `Movie` doesn't know how to put words in order, but a `String` does, so the movie **asks its title**. You reuse `String`'s alphabetical order instead of writing your own.

```java
List<Movie> movies = new ArrayList<>();
movies.add(new Movie("Twister", 1996));
movies.add(new Movie("Ghost", 1990));
movies.add(new Movie("Halloween", 1978));
movies.add(new Movie("Jaws", 1975));
movies.add(new Movie("Coco", 2017));

Collections.sort(movies);
System.out.println(movies);
```

```text
[Coco (2017), Ghost (1990), Halloween (1978), Jaws (1975), Twister (1996)]
```

**Comparing numbers instead?** An `int` has no `compareTo`, so use `Integer.compare(this.year, other.year)`. A `BigDecimal` has its own: `this.price.compareTo(other.price)`.

## 3. Way 2: a `Comparator` (outside the class)

Use it when you need a **different** order, or the class isn't yours to change. The movies still sort by title with `Collections.sort`, but today you want them **by year**.

**With a lambda** (two movies in, a number out):

```java
movies.sort((first, second) -> Integer.compare(first.getYear(), second.getYear()));
```

```text
[Jaws (1975), Halloween (1978), Ghost (1990), Twister (1996), Coco (2017)]
```

**With `Comparator.comparing`**: you only say **what to compare**, and Java writes the comparing part for you. These two lines do the same thing:

```java
movies.sort(Comparator.comparing(movie -> movie.getYear()));
movies.sort(Comparator.comparing(Movie::getYear));
```

`Movie::getYear` is a **method reference**: a shorter way to write `movie -> movie.getYear()`.

**Newest first:** add `.reversed()`.

```java
movies.sort(Comparator.comparing(Movie::getYear).reversed());
```

```text
[Coco (2017), Twister (1996), Ghost (1990), Halloween (1978), Jaws (1975)]
```

**A tie-breaker:** two movies called *Halloween*? Sort by title, then by year:

```java
movies.sort(Comparator.comparing(Movie::getTitle).thenComparing(Movie::getYear));
```

```text
[Coco (2017), Ghost (1990), Halloween (1978), Halloween (2018), Jaws (1975), Twister (1996)]
```

> [!WARNING] `.reversed()` and `.thenComparing()` need the method reference
> `Comparator.comparing(movie -> movie.getYear()).reversed()` gives **"cannot find symbol: method getYear()"**. Once you chain on another method, Java can't tell that `movie` is a `Movie`. Write `Movie::getYear` there instead.

## 4. In a stream

`sorted()` works the same two ways ([Stream Anatomy](/handouts/streams) has the parts of a stream). It doesn't change the original list; it gives you a new, sorted one.

```java
// the natural order: needs Comparable
List<Movie> byTitle = movies.stream()
        .sorted()
        .toList();

// any order you want: a Comparator
List<Movie> byYear = movies.stream()
        .sorted(Comparator.comparing(Movie::getYear))
        .toList();
```

## 5. Which one should I use?

| Situation | Use |
|---|---|
| The class has one order everyone expects (names A–Z, dates oldest first) | **`Comparable`** |
| You need several orders at different times (by price, by year, newest first) | a **`Comparator`** |
| The class isn't yours (it came from a library), or you don't want sorting code in it | a **`Comparator`** |
| You want both | Both! `Comparable` for the usual order, a `Comparator` for the others |

## Stuck?

- **"no suitable method found for sort(List&lt;Movie&gt;)"?** `Collections.sort(movies)` needs `Movie` to implement `Comparable<Movie>`. Add it, or pass a `Comparator`: `movies.sort(...)`.
- **`compareTo(Object o)` instead of `compareTo(Movie other)`?** You wrote `implements Comparable` without `<Movie>`. Add it, and IntelliJ's **Implement methods** fills in the right type.
- **"bad operand types for binary operator '<'"?** `<` and `>` don't work on `String`s or `BigDecimal`s. Use `compareTo`.
- **"int cannot be dereferenced"?** `year.compareTo(...)` doesn't work on an `int`. Use `Integer.compare(first, second)`.
- **Lowercase names sort after all the uppercase ones?** That's `String`'s order (see the `31` above). Use `compareToIgnoreCase`.
- **Sorted backwards?** Swap the two sides (`other` and `this`, or `second` and `first`), or add `.reversed()`.
