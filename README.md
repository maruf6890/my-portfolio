# Portfolio

Personal portfolio website (static) showcasing projects, experience, skills and contact.

## Overview

- Simple static site built with HTML, CSS and JavaScript.
- Main files:
  - `index.html` — main page
  - `cv.html` — CV page
  - `style.css` — styles
  - `script.js` — UI scripts and dynamic content
  - `src/` — images and assets

## Run locally

Open `index.html` in a browser, or serve with a simple static server:

```bash
# Python 3
python -m http.server 8000

# Node (serve)
npx serve .
```

Then open http://localhost:8000 (or the port you chose).

## Notes for development

- The contact form uses EmailJS; replace the placeholders in `script.js` (`USER_ID`, `YOUR_SERVICE_ID`, `YOUR_TEMPLATE_ID`) with your real EmailJS values.
- Images referenced in the projects are expected under `src/`.
- The CSS uses glassmorphism styles and responsive breakpoints in `style.css`.

## Project structure

```
portfolio/
  ├─ index.html
  ├─ cv.html
  ├─ style.css
  ├─ script.js
  └─ src/
```

## License & credits

This repository contains personal work. Use and attribution as you prefer; add a license file if you want an explicit license.

---

If you'd like, I can:

- Replace placeholders for EmailJS with environment-based loading.
- Clean up duplicated CSS rules and group styles.
