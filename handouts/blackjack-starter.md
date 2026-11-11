---
publish: true
title: Blackjack Starter
section: Exercises
order: 2
---

# Blackjack Starter: Card, Hand and Deck

The Blackjack exercise (Workbook 4a p. 95) starts from the `Card`, `Hand` and `Deck` classes on pp. 89–93. Copying code out of a PDF is slow and easy to get wrong, and the printed `getPointValue()` doesn't compile. So copy these three classes instead. They're the same code as the **Card Game** demo, ready to paste.

Never played Blackjack? The [Blackjack Rules](/handouts/blackjack-rules) page explains it in two minutes.

## 1. Create the project

- [ ] Create the project **`blackjack`** in `workbook-4`, with a git repository. Share it to GitHub as a **public** repo.
- [ ] Check that `src/main/java` has the package **`com.pluralsight`**. If it doesn't, right-click `src/main/java` → **New** → **Package**, and name it `com.pluralsight`.

## 2. Add the three classes

Do this for each class below:

1. Right-click **`com.pluralsight`** → **New** → **Java Class**, and type the name (`Card`, then `Hand`, then `Deck`).
2. Select everything in the new file (**Cmd+A** / **Ctrl+A**) and delete it.
3. Click the **copy** button at the top right of the code block below, and paste.

The first line of every file is `package com.pluralsight;`. If yours says something else, the file is in the wrong package.

### Card

A card knows its suit and value, and whether it's face up. A face-down card shows `#`.

```java
package com.pluralsight;

public class Card {
    private String suit;
    private String value;
    private boolean faceUp;

    public Card(String suit, String value) {
        this.suit = suit;
        this.value = value;
        this.faceUp = false;
    }

    public String getSuit() {
        // only return the suit if the card is face up
        if (faceUp) {
            return suit;
        } else {
            return "#";
        }
    }

    public String getValue() {
        // only return the value if the card is face up
        if (faceUp) {
            // this is the string value of the card
            // i.e. A, K, Q, J, 10, 9 ...
            return value;
        } else {
            return "#";
        }
    }

    public int getPointValue() {
        // TODO: this is your job (Blackjack, p. 95).
        // Until you finish it, every card is worth 0.
        return 0;
    }

    public boolean isFaceUp() {
        return faceUp;
    }

    public void flip() {
        faceUp = !faceUp;
    }
}
```

### Hand

A hand **has** cards (an `ArrayList<Card>`), and adds up their points.

```java
package com.pluralsight;

import java.util.ArrayList;

public class Hand {
    private ArrayList<Card> cards;

    public Hand() {
        cards = new ArrayList<>();
    }

    // A Card is dealt to the Hand and the Hand is responsible
    // to store the card
    public void deal(Card card) {
        cards.add(card);
    }

    public int getSize() {
        return cards.size();
    }

    // The Hand uses the methods of each card to determine
    // the value of each card - and adds up all values
    public int getValue() {
        int value = 0;

        for (Card card : cards) {
            card.flip(); // turn the card over to see the value
            value = value + card.getPointValue();
            card.flip(); // hide the card again
        }

        return value;
    }
}
```

### Deck

A deck **has** 52 cards, and can shuffle and deal them.

```java
package com.pluralsight;

import java.util.ArrayList;
import java.util.Collections;

public class Deck {
    private ArrayList<Card> cards;

    public Deck() {
        cards = new ArrayList<>();
        String[] suits = {"Hearts", "Spades", "Diamonds", "Clubs"};
        String[] values = {"2", "3", "4", "5", "6", "7", "8",
                           "9", "10", "J", "Q", "K", "A"};

        // these loops create all the cards in the deck
        // and add them to the ArrayList
        for (String suit : suits) {
            for (String value : values) {
                Card card = new Card(suit, value);
                cards.add(card);
            }
        }
    }

    public void shuffle() {
        Collections.shuffle(cards);
    }

    public Card deal() {
        // deal the top card (if there are any cards left)
        if (cards.size() > 0) {
            Card card = cards.remove(0);
            return card;
        } else {
            return null;
        }
    }

    public int getSize() {
        return cards.size();
    }
}
```

## 3. Check that it works

- [ ] Create a class named **`Program`** with a `main` method. Inside `main`, create a `Deck` and print its size:

```java
Deck deck = new Deck();
System.out.println(deck.getSize());
```

- [ ] Run it. It should print **`52`**.
- [ ] Commit and push: `Add Card, Hand and Deck from the workbook`

Now you're ready for the exercise: go back to the checklist and start on `getPointValue()`.

> [!TIP] Why is every hand worth 0?
> Because `getPointValue()` returns 0 until you finish it. That's the first step of the exercise: number cards are worth their number, `J`, `Q` and `K` are worth 10, and an `A` is worth 11.

## Stuck?

- **Red `ArrayList`?** The `import java.util.ArrayList;` line is missing. Copy the whole block again, imports included.
- **`class Card is public, should be declared in a file named Card.java`?** The file name and the class name must match. Right-click the file → **Refactor** → **Rename**.
- **`Cannot resolve symbol 'Card'`?** Check that all three files are in `com.pluralsight`, with the same first line.
