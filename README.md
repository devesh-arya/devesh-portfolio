# Devesh Arya — Portfolio

Built with **Next.js 15**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

## Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Run locally
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000)

### 3. Build for production
```bash
npm run build
npm start
```

---

## Deploy to Vercel

### Option A — Vercel CLI (fastest)
```bash
npm i -g vercel
vercel
```
Follow the prompts. Done.

### Option B — GitHub + Vercel Dashboard
1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → **New Project**
3. Import your GitHub repo
4. Framework: **Next.js** (auto-detected)
5. Click **Deploy**

No environment variables required.

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with font + LangProvider
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles + Tailwind
│   ├── not-found.tsx       # 404 page
│   ├── about/
│   │   └── page.tsx        # About page
│   ├── connect/
│   │   └── page.tsx        # Connect page (canvas + terminal)
│   └── projects/
│       ├── page.tsx        # Projects listing
│       └── [slug]/
│           └── page.tsx    # Case study detail
├── components/
│   ├── Navbar.tsx          # Nav + language toggle
│   ├── ProjectCard.tsx     # Reusable project card (3 variants)
│   └── SkillsMarquee.tsx   # Scrolling skills ticker
├── data/
│   ├── projects.ts         # All 7 projects (EN + FR)
│   ├── translations.ts     # All UI strings (EN + FR)
│   └── images.ts           # Image path map
├── hooks/
│   └── useLang.tsx         # Language context + localStorage
└── lib/
    └── types.ts            # TypeScript types
public/
└── images/                 # Optimized project photos
```

## Customisation

- **Add a project**: Add entries to `src/data/projects.ts` in both `projectsEn` and `projectsFr`
- **Add a language**: Extend `Lang` type in `src/lib/types.ts` and add entries to `src/data/translations.ts`
- **Replace images**: Drop new `.jpg` files in `public/images/` and update `src/data/images.ts`
- **Update contact links**: Edit `src/app/connect/page.tsx` → `links` array
- **Update social links**: Edit `src/components/Navbar.tsx` → `<a href=...>`
