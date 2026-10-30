# Ankush — Cybersecurity & Developer Portfolio

A responsive, dark-themed personal portfolio built with plain HTML, CSS, and JavaScript. It is ready to publish for free with GitHub Pages.

## Features

- Responsive desktop and mobile layout
- Cybersecurity + software development positioning
- Featured File Integrity Monitor project (C / OpenSSL / SHA-256)
- Skills, learning focus, and contact sections
- Terminal-inspired visual design
- Mobile navigation and subtle scroll reveals
- No framework, build step, backend, or paid dependency required

## 1. Personalize your details

Open `js/site-config.js` and replace the empty/example values:

```js
window.PORTFOLIO_CONFIG = {
  fullName: "Ankush",
  shortName: "ANKUSH",
  email: "your-email@example.com",
  links: {
    github: "https://github.com/yourusername",
    linkedin: "https://www.linkedin.com/in/yourusername",
    portfolio: "https://your-portfolio.example",
    fimRepo: "https://github.com/yourusername/file-integrity-monitor"
  }
};
```

Use complete URLs beginning with `https://`. Leave a link empty if you do not have that profile yet; the associated link will remain hidden. Edit the text in `index.html` whenever your skills or project status changes. Only list certifications you have actually earned.

## 2. Preview locally

Open `index.html` in a browser, or start a local server from this folder:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## 3. Publish with GitHub Pages

1. Create a public GitHub repository. For your main profile website, name it `YOUR_USERNAME.github.io`.
2. Upload all files and folders from this project. Make sure `index.html` is in the repository root.
3. Open the repository's **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select branch `main` and folder `/(root)`, then save.
6. After deployment, your website will be available at `https://YOUR_USERNAME.github.io`.

Official guide: https://docs.github.com/en/pages/quickstart

## 4. Link your File Integrity Monitor repository

Upload your FIM source code to GitHub. Copy its repository URL into the `fimRepo` value in `js/site-config.js`. The project card's source-code link will then point to your FIM repository.

## Notes

- GitHub Pages hosts static files. It cannot compile or run your C backend.
- The FIM section describes an MVP: selected-directory scanning, SHA-256 hashing, baseline comparison, and report generation. Adjust the description as you improve the implementation.
- Do not upload passwords, API keys, private files, personal documents, or sensitive system information.
- A custom domain is optional and may cost money; the default `github.io` address is free for eligible public repositories.

## Project structure

```text
ankush-cyber-portfolio/
├── index.html
├── README.md
├── assets/
│   └── favicon.svg
├── css/
│   └── style.css
└── js/
    ├── main.js
    └── site-config.js
```
