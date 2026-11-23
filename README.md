# Deepanshu Punjabi — Portfolio

A responsive, animated React + Vite portfolio.

## Run locally (Windows)

1. Install Node.js (LTS).
2. Extract this ZIP.
3. Open the extracted folder in VS Code.
4. Open Terminal in VS Code and run:

```bash
npm.cmd install
npm.cmd run dev
```

5. Open the local URL printed by Vite (usually http://localhost:5173).

To create a production build:

```bash
npm.cmd run build
npm.cmd run preview
```

## Customize before publishing

- **Email:** Replace `your-email@example.com` in `src/App.jsx` with your preferred public email before publishing.
- **LinkedIn:** Replace the placeholder LinkedIn URL/text in `src/App.jsx` with your actual profile URL, or remove that row.
- **Skills:** Adjust the skill groups to match your current proficiency.
- **Profile artwork:** Replace `public/assets/profile-anime.jfif` with another image if desired.
- **Education:** Confirm your B.Sc. and diploma details before publishing.

## Deploy

You can deploy the generated `dist` folder to Vercel, Netlify, or another static hosting provider. For Vercel, import the GitHub repository and use the default Vite build settings (`npm run build`, output `dist`).
