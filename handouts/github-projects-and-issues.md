---
publish: true
title: Projects & Issues
section: "Git & GitHub"
order: 4
---

# GitHub Projects and Issues: Boards, Drafts and Repositories

You'll use a GitHub **project board** in Workbook 3b (pp. 23–38) and again in every Capstone. This page explains how a board and your repositories fit together, gives a workflow that avoids the most common mix-ups, and shows how to fix an issue that ended up in the wrong place.

## The big picture: repositories vs. boards

Two words first:

- An **issue** is one tracked piece of work (a bug, a feature, a user story). It has a title, a description, and a number like `#42`.
- A **project board** (GitHub calls it a **Project**) is a planning dashboard, often shown as columns like **Todo → In Progress → Done**.

| | Issue | Project board |
|---|---|---|
| **Where it lives** | Inside **one repository**. The number (`#42`) belongs to that repo. | On your GitHub account, **not** inside a repo. |
| **What it holds** | One piece of work. | Cards that **point to** issues (or are plain drafts). |
| **Can it span repos?** | No. It stays in its repo unless you transfer it. | Yes. One board can show issues from many repos. |

> [!TIP] Think of the board as a window
> The board doesn't **own** your issues. It's a window that shows and organizes them. The issue itself always lives in a repository. That's why fixing a mistake (an issue in the wrong repo) happens on the **issue's** page, not on the board.

**Why does GitHub split them up?** Real teams often have several repositories (say, a website, an API and a database project) but want **one board** to plan all the work. Keeping boards separate from repos makes that possible. The downside is that it can feel disconnected when you're working on just one project.

## The workflow: drafts first, issues later

A **draft** is a card that lives only on the board, with no repository and no issue number yet. Starting with drafts lets you plan freely before anything shows up in a repo.

1. **Set a default repository** for the board (steps below), so drafts become issues in the right repo.
2. **Create draft cards.** At the bottom of a column, click **+ Add item**, type a title, and press **Enter**. Each card is labeled **Draft**.
3. **Organize first.** Drag cards between columns, reorder them by priority, add descriptions and acceptance criteria. Nothing touches your repository yet.
4. **Convert to an issue** when the work is ready. Click the card's **⋯** menu → **Convert to issue**. If you set a default repository, GitHub picks it for you; otherwise, choose your repository from the list.

## Set a default repository

Do this once per board, before you convert any drafts.

1. Open your board and click the **⋯** menu at the top of the board (next to the project title), then **Settings**.
2. On the settings page, find **Default repository**.
3. Pick the repository for this project (for example, `accounting-ledger` for Capstone 1).

Now every draft you convert goes to that repository unless you choose another one.

> [!NOTE] GitHub changes its screens
> GitHub updates the Projects pages often. If a menu or label looks a little different from this page, look for the closest match, or ask your instructor or the Help Desk.

## Use Table view to check the Repository column

The board (columns) view doesn't show which repo each card belongs to. The **Table** view can.

1. **Add a Table view.** At the top of the board, next to the view tab (usually **View 1**), click **+ New view** and choose **Table**.
2. **Add the Repository column.** Scroll to the far right of the table, click the **+** in the last column header, and choose **Repository**.
3. **Read the column:**
   - **Empty:** the row is still a **draft** (not an issue yet).
   - **The right repo:** all good.
   - **The wrong repo:** fix it with **Transfer** (next section).

Both views show the same cards; switch between the tabs any time.

## Fix mistakes

### An issue is in the wrong repository: transfer it

1. Open the **issue itself** (click its title, then open it as a full page in its repository).
2. In the right-hand sidebar, click **Transfer issue** (near the bottom).
3. Choose the correct repository and confirm.

The issue keeps its title, description and comments, gets a **new number** in the new repo, and stays on your board.

### A card shouldn't be on the board at all: delete it from the project

1. Click the card's **⋯** menu (on the card, or on the row in Table view).
2. Choose **Delete from project**.

This removes the card from the **board only**. If the card was an issue, the issue is still in its repository. (If it was a draft, it's gone, since drafts live only on the board.)

## Common questions

- **I converted a draft and picked the wrong repo.** Transfer the issue (see above). You don't need to delete and recreate it.
- **My card says Draft. Is that wrong?** No. Drafts are fine for planning. Convert a card when you want a real issue (for example, to link it to commits).
- **Can my instructor see my board?** Only if the board is **public**. Boards are private by default; change it in the board's **⋯ → Settings**, under **Visibility**. Test the link in an incognito window, the same way you test a [public repo](/handouts/make-repo-public).
- **Does deleting a card from the board delete my issue?** No. **Delete from project** only removes the card from the board.
