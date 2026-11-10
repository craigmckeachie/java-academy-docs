---
publish: true
title: Create a Test Class
section: IntelliJ
order: 4
group: Setup
---

# Create a Test Class

IntelliJ creates the test class for you, and adds JUnit to your project the first time. (Workbook 4a §3-2, pp. 53–56)

## 1. Let IntelliJ create the test class

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

## 2. Find it

IntelliJ creates `RoomTest` in **`src/test/java`**, in a package with the **same name** as `Room`'s:

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

The class starts empty. Add a test inside it:

```java
@Test
public void checkIn_should_markRoomOccupiedAndDirty() {
    // arrange

    // act

    // assert
}
```

If `@Test` is red, put your cursor on it and press **Option+Enter** / **Alt+Enter** to add `import org.junit.jupiter.api.Test;`.

**Naming tests:** see [Test methods](/handouts/java-code-conventions#test-methods) on the conventions page.

## 3. Run it

Click the green arrow next to `class RoomTest` (all its tests) or next to one test. Green checks mean they passed. To run every test in the project, right-click the `src/test/java` folder → **Run 'All Tests'**.

## Stuck?

| You see | Do this |
|---|---|
| `Cannot resolve symbol 'jupiter'` | Click the **M** button (Load Maven Changes), or press **Cmd+Shift+I** / **Ctrl+Shift+O**. |
| No **Fix** button, and `@Test` stays red | Paste the block below into `pom.xml`, right above `</project>`, then load Maven changes. |
| `@Test` is red | Option+Enter / Alt+Enter on it. Pick `org.junit.jupiter.api.Test`, **not** `org.junit.Test` (that's the old JUnit 4). |
| No `src/test/java` folder | Right-click `src` → **New → Directory**, and pick **test/java** from the list IntelliJ suggests. |
| The test class is in `src/main/java` | Drag it to the same package under `src/test/java`. |
| `No tests found` | The method needs `@Test` above it. |

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
