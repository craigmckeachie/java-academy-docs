---
publish: true
title: Loan Payment
section: Java
order: 17
---

# Monthly Loan Payment Helper

Workshop 5w needs a **monthly payment** for financed sales and for leases, but it doesn't give a formula. Use this helper. It's the same loan formula as Week 1's mortgage calculator, written with `BigDecimal` so the cents come out right.

You don't write this class; **copy it into your project**. Your job is to call it from your contracts.

## 1. Add it to your project

Right-click your **`model`** package → **New** → **Java Class** → `LoanCalculator`, and replace everything in the file with:

```java
package com.pluralsight.dealershipmanager.model;

import java.math.BigDecimal;
import java.math.RoundingMode;

public class LoanCalculator {

    // Returns the monthly payment on a loan, rounded to cents.
    // amount:            how much is borrowed, like 18237.15
    // yearlyRatePercent: the yearly interest rate as a percent, like 4.0 for 4.0%
    // months:            how many monthly payments, like 36
    public static BigDecimal calculateMonthlyPayment(BigDecimal amount, BigDecimal yearlyRatePercent, int months) {
        BigDecimal monthlyRate = yearlyRatePercent.divide(new BigDecimal("1200"), 20, RoundingMode.HALF_UP);
        BigDecimal growth = BigDecimal.ONE.add(monthlyRate).pow(months);

        return amount.multiply(monthlyRate)
                .multiply(growth)
                .divide(growth.subtract(BigDecimal.ONE), 2, RoundingMode.HALF_UP);
    }
}
```

Using a different root package? Change only the first line to match yours.

## 2. Call it

It's `static`, so you call it on the **class name**, with no object (see [Why Static?](/handouts/why-static)). Give it three things: **how much**, **the yearly rate as a percent**, and **how many months**.

```java
BigDecimal payment = LoanCalculator.calculateMonthlyPayment(getTotalPrice(), new BigDecimal("4.0"), 36);
```

| Contract | How much | Rate | Months |
|---|---|---|---|
| **Lease** | the lease's total price | `4.0` | `36` |
| **Sale, financed**, vehicle price $10,000 or more | the sale's total price | `4.25` | `48` |
| **Sale, financed**, vehicle price under $10,000 | the sale's total price | `5.25` | `24` |
| **Sale, not financed** | don't call it: the monthly payment is `BigDecimal.ZERO` | | |

Write the rate with quotes, `new BigDecimal("4.25")`, like every other `BigDecimal` typed in your code (see [BigDecimal](/handouts/bigdecimal#_1-getting-a-value-into-a-bigdecimal)).

## 3. Check your numbers

Workshop 5w p. 5's lease, step by step:

| Step | Value |
|---|---|
| Vehicle price | $31,995.00 |
| Expected ending value (50%) | $15,997.50 |
| Lease fee (7%) | $2,239.65 |
| Total price | **$18,237.15** |
| `calculateMonthlyPayment(18237.15, 4.0, 36)` | **$538.43** |

And p. 5's sale of a $995.00 vehicle, not financed: tax $49.75 + recording fee $100.00 + processing fee $295.00 = a total of **$1,439.75**, monthly payment **$0.00**. If that same sale were financed: `calculateMonthlyPayment(1439.75, 5.25, 24)` = **$63.33**.

> [!TIP] Wrong by a few cents?
> Round the 50% and 7% amounts to cents (`.setScale(2, RoundingMode.HALF_UP)`) before you add them, and pass the **total price** in, not the vehicle price.
