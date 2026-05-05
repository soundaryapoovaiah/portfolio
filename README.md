# soundarya-portfolio 
Link: https://portfolio-xi-weld-17.vercel.app/

Personal portfolio website for **Soundarya Poovaiah Kookanda** — Java Backend & Cloud Engineer.

Built with **Next.js 14** (App Router), **TypeScript**, and **Tailwind CSS**. Designed to make a strong impression within the first 5–10 seconds of viewing.

---

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS (custom design tokens)
- **Fonts**: JetBrains Mono + Sora + DM Sans (Google Fonts)
- **Deployment**: Static-ready, works on any Node.js host

---

## Sections

| Section | Description |
|---|---|
| **Hero** | Typewriter role animation, key metrics, status badge |
| **About** | Background narrative, engineering philosophy, education |
| **Experience** | Tabbed interface — TCS/Walgreens & UC roles with achievement bullets |
| **Projects** | Featured work cards with tech stacks and GitHub links |
| **Skills** | Animated skill bars grouped by category + full tech tag cloud |
| **Contact** | Direct links with copy-email feature |

---

## Local Setup

### Prerequisites
- Node.js 18+ 
- npm 9+

### Install & Run

```bash
git clone https://github.com/<your-username>/soundarya-portfolio.git
cd soundarya-portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

---

## Customization

- **Content**: All data lives in the component files under `/components/`
- **Colors**: CSS variables are defined in `app/globals.css` under `:root`
- **Fonts**: Swap font imports in `globals.css` and update `tailwind.config.js`

---

## Design Decisions

- **Dark terminal aesthetic** — GitHub-inspired but premium, with cyan/green accents
- **JetBrains Mono** for all code-like UI elements
- **Staggered reveal animations** on scroll for each section
- **Typewriter effect** in the hero cycling through engineering roles
- **Animated skill bars** triggered on section visibility
- **Zero dependencies** beyond Next.js and Tailwind — no animation libraries needed
