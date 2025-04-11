# Modular UI Structure (DOM-Based Approach)

## 🧹 What This Branch Contains

This branch introduces a modular structure for the main UI sections of the website (navbar, header, Hero, etc.) using JavaScript DOM creation and separate CSS files for each module.

Instead of copy-pasting shared sections across pages, each section is created dynamically via JavaScript. This helps us:

- Avoid code duplication
- Maintain consistency across all pages
- Make future edits to layout/UI easier and centralized

## 🧠 Why This Approach?

While copy-pasting can work for small projects, it makes updates harder over time. For example, changing the navbar would require editing multiple HTML files, which increases the risk of inconsistencies or bugs.

This modular setup:

- Keeps HTML cleaner
- Improves maintainability
- Has negligible performance impact for a small site like ours

## 📁 File Structure Overview

```
/scripts/
  navbar.js
  header.js
  hero.js
  ...
/styles/
  navbar.css
  header.css
  hero.css
  ...
index.html
```

Each JS file defines and injects a component into the page. Each CSS file styles the corresponding component.

## 🤝 Let’s Collaborate

This is just a proposed structure. 
If you wanna try it out, you would do the following:
1. Create a new section and set its id to the name of the component you want to use.
2. Inject the js script of the component as a **module**.
3. Link the corresponding stylesheet of that same component.
```
    <header id ="header">
        <script type="module" src="../scripts/header.js"></script>
    </header>
```
