---
publish: true
title: Check MySQL Setup
section: SQL
order: 1
group: Setup
---

# Check Your MySQL Setup (One Time)

From Week 9 on, your programs store data in **MySQL**. This page checks that MySQL is installed and working, so you're ready on day one. It takes about **5 minutes**.

You installed two programs, and they work as a pair:

| Program | What it is | Think of it as |
|---|---|---|
| **MySQL Server** | The database itself. It runs quietly in the background and stores the data. | The library |
| **MySQL Workbench** | A **client**: a program you use to talk to the server, send it questions, and see the answers. | The front desk |

Workbench can connect only if the server is running and you give it the right username and password. So one successful connection checks everything.

> [!IMPORTANT] Use the course password
> When you installed the server, the install guide had you set a password for the **`root`** account (the main admin user). You'll type **that password** below. Don't remember it? It's in the install guide: Mac, section 4, step 10; Windows, section 4, step 7 (see [Finding the install guides](#finding-the-install-guides)).

## Connect Workbench to your server

1. Open **MySQL Workbench**.
2. On the home screen, under **MySQL Connections**, look for a box named **Local instance 3306** (or similar).
   - **There's a box:** right-click it → **Edit Connection**, click **Test Connection**, and go to step 4.
   - **No box:** click the **+** next to **MySQL Connections** and go to step 3.
3. Fill in the new connection, then click **Test Connection**:

   | Field | Type |
   |---|---|
   | Connection Name | `Local MySQL` |
   | Hostname | `127.0.0.1` (this means "this computer") |
   | Port | `3306` (MySQL's standard port) |
   | Username | `root` |

4. When asked for the password, type **the course password from the install guide**.
   - Check **Save password in keychain** (Mac) or **Save password in vault** (Windows), so you don't type it every time.
5. You should see **"Successfully made the MySQL connection"**. Click **OK**, then **OK** (or **Close**) to save the connection.

> [!TIP] "Connection Warning" or "Incompatible/nonstandard server version"?
> Workbench is a little older than the server, so it may warn you about the version. Click **Continue Anyway**. Everything we do in class works.

**You're done when** you see "Successfully made the MySQL connection".

## Stuck?

| What you see | What it means | Fix |
|---|---|---|
| You can't find **MySQL Workbench** on your computer | Workbench isn't installed. | Install it: section **5** of the install guide (see [Finding the install guides](#finding-the-install-guides)). |
| `Can't connect to MySQL server on '127.0.0.1:3306'` | The server isn't running, or isn't installed. | See [Starting the server](#starting-the-server), then test again. |
| `Access denied for user 'root'@'localhost' (using password: YES)` | The password is wrong. | Retype it carefully (it's case-sensitive). If you saved a wrong one, in **Edit Connection** click **Clear** next to Password, then test again. |
| You set a different password during install and don't remember it | Workbench can't log in. | Tell your instructor. Resetting it takes a few extra steps. |
| Mac: "MySQL Workbench can't be opened" | macOS is being careful with a downloaded app. | In **Applications**, right-click **MySQLWorkbench** → **Open** → **Open**. |
| Something else | | Post a screenshot of the whole window in the class chat, or bring it to the Help Desk. |

### Starting the server

The server normally starts by itself when your computer starts, so **restart your computer first** and test again. Still can't connect?

- **Windows:** press the **Windows key**, type **Services**, and open the **Services** app. Find **MySQL84** (the number matches your version, e.g. `MySQL80`). If **Status** isn't **Running**, right-click it → **Start**. No MySQL row at all means the server isn't installed: install it with section **4** of the install guide.
- **Mac:** tell your instructor, and we'll look at it together. If your instructor asks you to, use the Terminal steps below.

::: details Mac: check and start the server from Terminal
Open **Terminal** (press **Cmd+Space**, type **Terminal**, press **Enter**). Run each command on its own. Commands that start with `sudo` ask for your **Mac** password (the one you log in with, not the MySQL one). Nothing shows while you type it; that's normal.

**1. Is the server installed?**

```bash
ls /usr/local/mysql/bin/mysqld
```

It prints the path back: installed. `No such file or directory`: not installed. Install it with section **4** of the install guide.

**2. Is it running?**

```bash
sudo launchctl list | grep mysql
```

A line ending in `com.oracle.oss.mysql.mysqld` with a number at the start: running. A `-` at the start, or no line at all: not running.

**3. Start it:**

```bash
sudo launchctl kickstart -k system/com.oracle.oss.mysql.mysqld
```

If that says the service could not be found, run this instead (it also makes MySQL start by itself again when your Mac starts):

```bash
sudo launchctl bootstrap system /Library/LaunchDaemons/com.oracle.oss.mysql.mysqld.plist
```

Then go back to Workbench and click **Test Connection** again.
:::

### Finding the install guides

The **Software Installation Guide** for your computer has the install steps and the course password:

| You need | Install guide section |
|---|---|
| MySQL Server | **4. MySQL Community Server** |
| MySQL Workbench | **5. MySQL Workbench** |

In **Brightspace**, open **Course Overview → Content**, expand **Java Focus LTCA General Resources**, and click **Windows Software Installation Guide** or **MacOS Software Installation Guide**.

![The Brightspace Content list with Java Focus LTCA General Resources expanded, showing the Windows and MacOS Software Installation Guides](/images/mysql-setup/brightspace-install-guides.png){.screenshot}
