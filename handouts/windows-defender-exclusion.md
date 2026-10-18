---
publish: true
title: "Windows: Speed Up IntelliJ (Defender Exclusion)"
section: Setup
order: 2
---

# Windows: Speed Up IntelliJ (Defender Exclusion)

**Windows only. Optional.**

When you open a project in IntelliJ, you may see a **Microsoft Defender** message suggesting you **exclude the project folder from antivirus scanning to improve performance**. Defender scans every file Java creates while building your program, which can slow builds down.

Instead of answering that prompt for every project, you can apply the setting **once** to your whole `pluralsight` folder. That covers all your current and future projects.

> [!WARNING] Keep this folder for coursework only
> Defender will **skip scanning everything** inside your `pluralsight` folder. Only keep your class projects there, and never put downloads or files from unknown sources in it.

## Before you start

- You need **administrator access** on your computer.
- **No admin access** (for example, a Year Up loaner laptop)? Contact IT Help:
  - Phone: **844-493-2787**
  - Email: **ITHelp@yearup.org**
- The script assumes your folder is at **`C:\Users\<your name>\pluralsight`**. If yours is somewhere else (for example, inside `Documents` or `OneDrive`), see [If your folder is somewhere else](#if-your-folder-is-somewhere-else) below.

## Steps

1. Open **Start** and search for **Windows PowerShell**.
2. Choose **Run as administrator**, then approve the permission prompt.
3. Copy this entire block, paste it into PowerShell, and press **Enter**:

   ```powershell
   $folder = Join-Path $env:USERPROFILE 'pluralsight'
   Add-MpPreference -ExclusionPath $folder -ErrorAction Stop
   (Get-MpPreference).ExclusionPath | Where-Object { $_ -eq $folder }
   ```

4. **Check the result.** You should see your folder's full path printed, such as:

   ```
   C:\Users\alex\pluralsight
   ```

   That confirms the exclusion was added. If you see a red error instead, it's usually because PowerShell wasn't run as administrator.

## If your folder is somewhere else

…or if someone else is entering an administrator login for you, so `$env:USERPROFILE` would point to *their* user folder: replace the **first line** with your folder's actual full path, then run the block again. For example:

```powershell
$folder = 'C:\Users\alex\pluralsight'
```

> [!TIP] Finding your folder's path
> In File Explorer, open your `pluralsight` folder, click the address bar at the top, and copy the path it shows.
