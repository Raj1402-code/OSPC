# VJ SIDHU / VLOGS — Unofficial Fan Community & Creator Hub

> **Academic Project Notice:** This website is an unofficial fan tribute created for a college web development assignment. It is not affiliated with, endorsed by, or sponsored by VJ Sidhu or his management. All content, milestones, and visuals are original, royalty-safe, or demonstrative placeholders.

A cinematic, responsive multi-page web application celebrating the road trips, chai culture, spontaneous humor, and community camaraderie of **VJ Sidhu Vlogs**. Designed with a "road-trip creator journal meets premium streaming platform" aesthetic.

---

## 🌟 Key Features

1. **Multi-Page Navigation (React Router):**
   - **`/` (Home):** Cinematic hero with ReactBits-inspired interactive cursor background orbs, "The Vibe" feature cards, Featured Moments with interactive story preview modal, celebratory stats counter, and callout banner.
   - **`/journey` (Journey Timeline):** Storytelling vertical timeline with alternating milestone cards, location indicators, audience themes ("What the crew rides for"), and join CTA.
   - **`/join` (Join the Crew):** Split-screen passenger manifest sign-up form with client-side Zod validation, boarding pass generation, celebratory confetti, and live evaluator inspection drawer.

2. **Form Data Persistence & Dual-Mode Fallback:**
   - **Production Mode:** Submits directly to Supabase table `fan_signups`.
   - **Serverless Endpoint Option:** Supports POST to `/api/signup` for Vercel/Netlify functions.
   - **Evaluator Demo Vault Mode:** If Supabase keys are not provided, gracefully saves submissions to browser local storage so academic evaluators can immediately test form validation and submissions without setting up an external database.

3. **Motion & Interaction (Framer Motion):**
   - Staggered hero text entrance
   - Dynamic cursor-tracking ambient gradient orbs (ReactBits style)
   - Route transitions with `AnimatePresence`
   - Scroll-triggered reveal animations with `whileInView`
   - Real-time animated number counters
   - Full support for `prefers-reduced-motion`

4. **Design System & Typography:**
   - Dark cinematic charcoal base (`#090a0f`, `#0c0e14`, `#161a24`)
   - Warm saffron-orange (`#f97316`) and electric lime (`#84cc16`) accents
   - Premium Google Fonts: **Outfit** (editorial headlines), **Plus Jakarta Sans** (body), and **JetBrains Mono** (telemetry)
   - Frosted glassmorphism panels, subtle grain texture, and radial light glows

---

## 🚀 Tech Stack

- **Framework:** React 19 + TypeScript + Vite
- **Styling:** Tailwind CSS + PostCSS + Autoprefixer
- **Routing:** React Router v7
- **Motion:** Framer Motion
- **Icons:** Lucide React
- **Forms & Validation:** React Hook Form + Zod (`@hookform/resolvers`)
- **Backend / DB:** Supabase (`@supabase/supabase-js`) with Demo Vault fallback
- **Effects:** Canvas Confetti

---

## 🛠️ Local Development Setup

### 1. Prerequisites
- Node.js 18+ or 20+
- npm (or pnpm / yarn)

### 2. Clone and Install Dependencies
```bash
# Navigate to the project root
cd OSPC

# Install dependencies
npm install --legacy-peer-deps
```

### 3. Configure Environment Variables
Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```
Open `.env` and fill in your Supabase credentials:
```env
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
```
*(Note: If you leave these blank, the app will run in **Demo Vault** mode without breaking!)*

### 4. Run the Dev Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🗄️ Supabase Setup & SQL Schema

### 1. Create Table in Supabase
In your Supabase project, open the **SQL Editor** and execute the following query:

```sql
-- 1. Create the fan_signups table
create table public.fan_signups (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  email text not null,
  favorite_vlog_type text not null,
  message text,
  consent boolean not null default false,
  created_at timestamptz not null default now()
);

-- 2. Enable Row Level Security (RLS)
alter table public.fan_signups enable row level security;

-- 3. Student Demo Policy: Allow anonymous users to insert new signups
create policy "Allow anonymous inserts"
  on public.fan_signups
  for insert
  to anon
  with check (true);
```

### 2. Recommended Production Guidance
- **Insert-Only RLS:** The policy above allows visitors to insert signups via the public anonymous key while completely preventing browser clients from reading or querying other passengers' private emails.
- **Abuse Prevention:** For commercial production deployments, protect public endpoints against bots and spam using Cloudflare Turnstile or Google reCAPTCHA v3, rate limiting, and an authenticated serverless backend function (e.g. `/api/signup`).

---

## ☁️ Deployment Guide

### Deploying to Vercel
1. Push this repository to GitHub or GitLab.
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import the repository.
4. Framework Preset: **Vite**.
5. Add Environment Variables in Vercel project settings:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
6. Click **Deploy**.
7. *(Single-Page App routing is preconfigured via `vercel.json` rewrite rules).*

### Deploying to Netlify
1. Connect your repository at [netlify.com](https://netlify.com).
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Add Environment Variables under **Site Configuration > Environment Variables**.
5. *(Client-side SPA routing is handled by `public/_redirects`).*

---

## 🎨 Safe Customization & Replacing Placeholders

- **Vlog Moments & Milestones:** Edit `src/data/mockData.ts` to add or modify roadmap chapters, featured moments, and quotes.
- **Social Links:** In `src/components/Footer.tsx`, replace the social placeholders (`href` attributes) with official or designated channel URLs.
- **Visuals:** All images use geometric gradients and SVG icons to remain 100% royalty-free and copyright-safe. If adding actual photographs, ensure rights are secured and place them in the `public/` directory.

---

## 📂 Project Architecture

```text
OSPC/
├── public/
│   ├── favicon.svg          # Custom road trip SVG favicon
│   └── _redirects           # Netlify SPA fallback routing
├── src/
│   ├── components/
│   │   ├── AnimatedButton.tsx       # Reusable button with spring motion
│   │   ├── FeatureCard.tsx          # "The Vibe" cards with hover glow
│   │   ├── Footer.tsx               # Footer with academic disclaimers
│   │   ├── MomentCard.tsx           # Editorial vlog story cards
│   │   ├── Navbar.tsx               # Sticky nav with mobile drawer
│   │   ├── PageTransition.tsx       # Route change motion wrapper
│   │   ├── ReactBitsBackground.tsx  # Ambient mouse-tracking gradient orbs
│   │   ├── ScrollToTop.tsx          # Viewport reset on route navigation
│   │   ├── SectionHeading.tsx       # Editorial section titles & badges
│   │   ├── StatsCounter.tsx         # Animated scroll count-up stats
│   │   └── StoryModal.tsx           # Interactive simulated vlog player modal
│   ├── data/
│   │   └── mockData.ts              # Royalty-safe fan milestones & moments
│   ├── lib/
│   │   ├── signup.ts                # Submission service (Supabase + Demo Vault)
│   │   └── supabase.ts              # Safe Supabase client initializer
│   ├── pages/
│   │   ├── Home.tsx                 # Landing page (Hero, Vibe, Moments, Stats)
│   │   ├── Journey.tsx              # Timeline storytelling page
│   │   └── Join.tsx                 # Zod validated waitlist form + Boarding Pass
│   ├── types.ts                     # TypeScript interfaces
│   ├── App.tsx                      # Router and application layout
│   ├── index.css                    # Tailwind + glassmorphism & grain styles
│   └── main.tsx                     # React root mount
├── .env.example                     # Environment variables template
├── package.json                     # Project manifest and scripts
├── tailwind.config.js               # Theme colors and typography
├── vercel.json                      # Vercel SPA routing
└── README.md                        # Documentation and setup guide
```

---

## ⚖️ License & Attribution

Created as an unofficial academic tribute for educational purposes under Fair Use.
Designed with passion for the creator community.
