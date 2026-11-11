---
publish: true
title: Blackjack Rules
section: Exercises
order: 3
---

# Blackjack Rules: the Short Version

Never played Blackjack? This is all you need for the exercise (Workbook 4a p. 95).

## The goal

Get a hand **as close to 21 as you can, without going over**. Going over 21 is called **busting**, and a hand that busts loses.

## What each card is worth

| Card | Points |
|---|---|
| `2` to `10` | Its number: a `7` is 7 |
| `J`, `Q`, `K` (Jack, Queen, King) | 10 |
| `A` (Ace) | 11 |

A hand's value is its cards added up: `K` + `7` = 17. The suit (Hearts, Spades, Diamonds, Clubs) doesn't change the points.

## How a round works in the exercise

1. Shuffle the deck.
2. Deal **2 cards** to each player.
3. Add up each hand.
4. The highest hand that's **21 or less** wins. Equal hands are a tie. If everyone busts, nobody wins.

| Hands | Winner |
|---|---|
| 10 + 4 = **14** vs `Q` + 7 = **17** | 17 |
| `A` + `K` = **21** vs 9 + 9 = **18** | 21 |
| `A` + 2 = **13** vs 6 + 7 = **13** | Tie |
| `A` + `A` = **22** vs 3 + 2 = **5** | 5 (22 busts) |

> [!TIP] Only for the bonuses
> - **Hit or stay:** after the first 2 cards, each player can **hit** (take one more card) as many times as they like, or **stay** (stop). Hitting gets you closer to 21, but one card too many busts the hand.
> - **The Ace can be 1:** if counting an Ace as 11 would bust the hand, it counts as 1 instead. So `A` + `A` is 12, not 22, and `A` + 9 + 5 is 15, not 25.

> [!NOTE] Real Blackjack has a dealer
> In a casino, everyone plays against a **dealer**, and one of the dealer's cards stays face down until the end. The exercise leaves the dealer out: the players just compare hands.
