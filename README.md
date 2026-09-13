# OLX Clone

A simple OLX (classifieds/marketplace) UI clone built with React + Vite, styled with Tailwind CSS, using Firebase for auth/data.

## Tech Stack

React 18 · Vite · Tailwind CSS · Firebase · React Router · Framer Motion

## Run Locally

```bash
git clone https://github.com/Jahanad-pr/OLX_.git
cd OLX_
npm install
npm run dev
```

Open the local URL Vite prints (usually `http://localhost:5173`).

> Uses Firebase — the repo includes a `.env` file for config keys. Replace it with your own Firebase project credentials before running.

## Scripts

- `npm run dev` – start dev server
- `npm run build` – build for production
- `npm run preview` – preview production build

## Deploy

Easiest option: **Vercel**
1. Import the repo at [vercel.com](https://vercel.com/new)
2. It auto-detects Vite (build: `npm run build`, output: `dist`)
3. Add your Firebase `.env` values under project environment variables
4. Deploy

(Netlify works the same way.)

> ⚠️ The repo has a `.env` file committed — swap in your own keys and avoid pushing real secrets publicly.
