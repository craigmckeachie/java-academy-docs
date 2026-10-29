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

Here's a board with both kinds of cards. **View Available Books** is a **Draft** (it lives only on the board). The other two are issues: each card names its repository and number, `neighborhood-library #1` and `#2`.

![A project board with one Draft card and two issue cards from the neighborhood-library repository](/images/github-projects/board-drafts-and-issues.png){.screenshot}

> [!TIP] Think of the board as a window
> The board doesn't **own** your issues. It's a window that shows and organizes them. The issue itself always lives in a repository. That's why fixing a mistake (an issue in the wrong repo) happens on the **issue's** page, not on the board.

**Why does GitHub split them up?** Real teams often have several repositories (say, a website, an API and a database project) but want **one board** to plan all the work. Keeping boards separate from repos makes that possible. The downside is that it can feel disconnected when you're working on just one project.

## The workflow: drafts first, issues later

A **draft** is a card that lives only on the board, with no repository and no issue number yet. Starting with drafts lets you plan freely before anything shows up in a repo.

1. **Set a default repository** for the board (steps below), so drafts become issues in the right repo.
2. **Create draft cards.** At the bottom of a column, click **+ Add item**, type a title, and press **Enter**. Each card is labeled **Draft**.
3. **Organize first.** Drag cards between columns, reorder them by priority, add descriptions and acceptance criteria. Nothing touches your repository yet.
4. **Convert to an issue** when the work is ready. Point at the card, click the **⋯** button next to **Draft**, and choose **Convert to issue**.

   ![The draft card's menu, with Convert to issue at the top and Remove from project at the bottom](/images/github-projects/draft-card-menu.png){.screenshot}

5. **Pick the repository** in the **Select an item** list. Your default repository is at the top; type part of its name to find it fast. The draft becomes an issue in that repo, with a number.

   ![The Select an item list with neighborhood-library typed in the search box](/images/github-projects/convert-pick-repo.png){.screenshot}

## Set a default repository

Do this once per board, before you convert any drafts.

1. Open your board and click the **⋯** button at the top right (next to **Workflows**), then **Settings**.

   ![The board's ⋯ menu with Settings](/images/github-projects/project-menu-settings.png){.screenshot}

2. Under **Project settings**, find **Default repository** and pick the repository for this project from the dropdown (for example, `accounting-ledger` for Capstone 1).

   ![Project settings with Default repository set to craigmckeachie/neighborhood-library](/images/github-projects/settings-default-repository.png){.screenshot}

GitHub's own note under the setting says it: new issues created from this project go to that repository. It's picked for you when you convert a draft.

> [!NOTE] GitHub changes its screens
> GitHub updates the Projects pages often. If a menu or label looks a little different from these screenshots, look for the closest match, or ask your instructor or the Help Desk.

## Use Table view to check the Repository column

The board (columns) view shows the repo on each issue card, but it's easy to miss. The **Table** view puts it in its own column.

1. **Add a Table view.** Next to the **View 1** tab, click **+ New view** and choose **Table**.

   ![The New view menu with Table, Board and Roadmap layouts](/images/github-projects/new-view-table.png){.screenshot}

2. **Add the Repository column.** Click the **+** at the far right of the table's header row and check **Repository** (it moves up to **Visible fields**).

   ![The field menu with Title, Status and Repository checked under Visible fields](/images/github-projects/table-add-field.png){.screenshot}

3. **Read the column:**
   - **Empty:** the row is still a **draft** (not an issue yet).
   - **The right repo:** all good.
   - **The wrong repo:** fix it with **Transfer** (next section).

   ![Table view: View Available Books has an empty Repository cell; the two issues show craigmckeachie/neighborhood-library](/images/github-projects/table-repository-column.png){.screenshot}

Both views show the same cards; switch between the tabs any time. A small blue dot on **View** means you've changed the view without saving it; GitHub offers a **Save** button if you want to keep the change.

## Fix mistakes

### An issue is in the wrong repository: transfer it

1. Open the **issue itself**: click its title on the board, then open it as a full page in its repository.
2. Near the bottom of the right-hand sidebar, click **Transfer issue**.

   ![The issue sidebar's list: Transfer issue, Clone issue, Lock conversation, Pin issue, Delete issue](/images/github-projects/issue-transfer.png){.screenshot}

3. Choose the correct repository and confirm.

The issue keeps its title, description and comments, gets a **new number** in the new repo, and stays on your board.

> [!WARNING] Transfer, not Delete
> **Delete issue** sits right below **Transfer issue** in that list. Deleting can't be undone. If an issue is in the wrong place, transfer it.

### A card shouldn't be on the board at all: remove it from the project

1. Click the card's **⋯** button (the same menu as **Convert to issue**, shown above).
2. Choose **Remove from project**.

This takes the card off the **board only**. If the card was an issue, the issue is still in its repository. (If it was a draft, it's gone, since drafts live only on the board.)

> [!TIP] Archive instead?
> **Archive** in the same menu hides a card without removing it. Use it for finished work you want off the board but don't want to lose. Archived cards are listed under **⋯ → Archived items** at the top of the board.

## Common questions

- **I converted a draft and picked the wrong repo.** Transfer the issue (see above). You don't need to delete and recreate it.
- **My card says Draft. Is that wrong?** No. Drafts are fine for planning. Convert a card when you want a real issue (for example, to link it to commits).
- **Can my instructor see my board?** Only if the board is **public**. New boards are private. Go to **⋯ → Settings**, scroll to the **Danger zone**, and set **Visibility** to **Public**. Then test the link in an incognito window, the same way you test a [public repo](/handouts/make-repo-public).

  ![The Danger zone's Visibility setting showing Public](/images/github-projects/settings-visibility.png){.screenshot}

- **Does removing a card from the board delete my issue?** No. **Remove from project** only takes the card off the board.
