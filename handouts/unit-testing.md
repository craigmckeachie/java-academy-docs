---
publish: true
title: Unit Testing
section: Java
order: 60
group: "Testing"
---

# Unit Testing with JUnit

A **unit test** is code that checks your code. You write it once, and it re-checks everything in seconds, every time you run it. When a change breaks something that used to work, a test turns red and tells you, instead of a user finding it later. (Workbook 4a §3-1 and §3-2)

The code from class: [Car.java](https://github.com/craigmckeachie/java-academy-demos/blob/main/src/main/java/com/pluralsight/workbook4a/testing/solutions/Car.java) and [CarTest.java](https://github.com/craigmckeachie/java-academy-demos/blob/main/src/test/java/com/pluralsight/workbook4a/testing/solutions/CarTest.java).

## 1. Arrange, act, assert

Every test has the same three parts, in this order:

| Part | What it does | In `CarTest` |
|---|---|---|
| **Arrange** | Set up everything the test needs: the object, the inputs, and the answer you **expect** | a new `Car`, how much to brake, the speed you expect |
| **Act** | Call the **one** method you're testing | `car.brake(slowDownBy);` |
| **Assert** | Check the **actual** result against the expected one | `assertEquals(...)` |

```java
@Test
public void brake_should_decreaseCarSpeed() {
    // arrange
    Car car = new Car("Ford", "F150 Raptor");
    int speedUpBy = 15;
    int slowDownBy = 10;
    int expectedSpeed = 5;
    car.accelerate(speedUpBy);

    // act
    car.brake(slowDownBy);

    // assert
    int actualSpeed = car.getSpeed();
    assertEquals(expectedSpeed, actualSpeed);
}
```

- **Keep the three comments.** They make every test easy to read.
- **Name your values.** `slowDownBy` and `expectedSpeed` say what `10` and `5` mean; a bare `5` doesn't.
- **One situation per test.** Braking normally and braking harder than your speed are two tests.

## 2. Naming tests

`methodName_should_whatHappens`, plus `_whenSomething` for a special case:

| Test | Reads as |
|---|---|
| `brake_should_decreaseCarSpeed()` | "brake should decrease car speed" |
| `brake_should_stopCar_whenChangeIsGreater()` | "brake should stop the car when the change is greater" |

More on the conventions page: [Test methods](/handouts/java-code-conventions#test-methods). The test **class** is the class name + `Test`: `CarTest`, `RoomTest`.

## 3. The assertions you'll use

```java
assertEquals(expected, actual);   // passes when the two are equal
assertTrue(condition);            // passes when the condition is true
assertFalse(condition);           // passes when the condition is false
```

For example:

```java
assertEquals(5, car.getSpeed());
assertTrue(room.isDirty());
assertFalse(room.isOccupied());
```

**Expected first, actual second.** If you swap them, the test still works, but a failure message says the opposite of what happened.

> [!WARNING] Testing a BigDecimal
> `assertEquals` uses `equals`, and to `BigDecimal`, `5.0` and `5.00` are **not** equal (see [BigDecimal: Comparing](/handouts/bigdecimal#_4-comparing)). Write the expected value with the same number of decimal places as the result: for money, two.
>
> ```java
> assertEquals(new BigDecimal("538.43"), contract.getMonthlyPayment());
> ```
>
> If the decimal places might differ, compare the values instead: `assertEquals(0, expected.compareTo(actual));`

## 4. Create a test class in IntelliJ

IntelliJ creates the test class for you, and adds JUnit to your project the first time.

1. Open the class you want to test, for example `Room`.
2. Click on the class name, `public class Room`, then right-click → **Generate…** → **Test…** (or press **Cmd+Shift+T** / **Ctrl+Shift+T** and choose **Create New Test…**).
3. In the dialog:

| Field | Set it to |
|---|---|
| **Testing library** | **JUnit6**. If your list only has **JUnit5**, pick that; your tests look the same either way. |
| **Class name** | leave it: `RoomTest` (the class name + `Test`) |
| **Destination package** | leave it: the same package as `Room` |
| **Generate test methods for** | **leave every box unticked**. You'll write and name the tests yourself. |

4. The first time, the dialog says the **JUnit library is not found in the module**. Click **Fix**. IntelliJ adds JUnit to your `pom.xml`.
5. Click **OK**. If IntelliJ shows a small **M** button at the top right of the editor (**Load Maven Changes**), click it.

> [!NOTE] What Fix added
> Open `pom.xml` and you'll find a `<dependency>` for `junit-jupiter`. Its `<version>` may be a number like `6.1.3`, or the word `RELEASE`, which means "the newest". Either is fine. We'll talk about `pom.xml` in a later week.

IntelliJ puts `RoomTest` in **`src/test/java`**, in a package with the **same name** as `Room`'s:

```
src
├── main
│   └── java
│       └── com.pluralsight
│           └── Room.java
└── test
    └── java
        └── com.pluralsight
            └── RoomTest.java
```

The class starts empty. Add your first test with the three comments, then fill them in:

```java
@Test
public void checkIn_should_markRoomOccupiedAndDirty() {
    // arrange

    // act

    // assert
}
```

If `@Test` is red, put your cursor on it and press **Option+Enter** / **Alt+Enter** to add `import org.junit.jupiter.api.Test;`.

## 5. Run your tests

- **One test:** the green arrow next to the test's name.
- **A whole test class:** the green arrow next to `class RoomTest`.
- **Every test in the project:** right-click the `src/test/java` folder → **Run 'All Tests'**.

Green checks mean they passed. A red test shows **Expected** and **Actual** at the bottom: read both before you change anything. Sometimes the code is wrong; sometimes the test's expected value is.

## Stuck?

| You see | Do this |
|---|---|
| `Cannot resolve symbol 'jupiter'` | Click the **M** button (Load Maven Changes), or press **Cmd+Shift+I** / **Ctrl+Shift+O**. |
| No **Fix** button, and `@Test` stays red | Paste the block below into `pom.xml`, right above `</project>`, then load Maven changes. |
| `@Test` is red | Option+Enter / Alt+Enter on it. Pick `org.junit.jupiter.api.Test`, **not** `org.junit.Test` (that's the old JUnit 4). |
| `assertEquals` is red | Option+Enter / Alt+Enter on it, and import it from `org.junit.jupiter.api.Assertions`. |
| No `src/test/java` folder | Right-click `src` → **New → Directory**, and pick **test/java** from the list IntelliJ suggests. |
| The test class is in `src/main/java` | Drag it to the same package under `src/test/java`. |
| `No tests found` | The method needs `@Test` above it. |
| A `BigDecimal` test fails, but the numbers look the same | Different decimal places, like `5.0` and `5.00`. See the BigDecimal warning in section 3. |

The JUnit block, if you need to add it by hand (if you already have a `<dependencies>` section, paste only the `<dependency>` part inside it):

```xml
    <dependencies>
        <dependency>
            <groupId>org.junit.jupiter</groupId>
            <artifactId>junit-jupiter</artifactId>
            <version>6.1.3</version>
            <scope>test</scope>
        </dependency>
    </dependencies>
```
