# Delete Blocked Message Bar
This script contains a recursive function that watches for the blocked message bar (like pictured below) and hides it.

### Before
![Before](https://raw.githubusercontent.com/Unimatrix0/discord-scripts/master/images/discord-hide-blocked-messages-div-before.png)

### After
![After](https://raw.githubusercontent.com/Unimatrix0/discord-scripts/master/images/discord-hide-blocked-messages-div-after.png)

**Instructions:**

NOTE: Unless you create a snippet or use some sort of extension to run the script, you'll have to do this each time you reload Discord.
1. With Discord open, hit <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>I</kbd> to bring up the developer tools.
2. Click the Console tab. You may see a warning; this is normal.
3. Copy and paste the following code to the right of the **>** as pictured and hit enter:

**Code:**

`(function hideBlocked(){document.querySelectorAll('div[class*="blockedSystemMessage"]').forEach(div => div.parentElement.parentElement.parentElement.setAttribute("style", "display: none;"));setTimeout(hideBlocked,500);})();`

**Example:**

![ScreenShot](https://raw.githubusercontent.com/Unimatrix0/discord-scripts/master/images/discord-hide-blocked-messages-div-code-example.png)

I've also put the code with accompanying comments into a script file for those interested. =)
