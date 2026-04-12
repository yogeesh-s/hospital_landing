# Project: Elite Hospital Digital Experience (Top 1% Edition)
**Tech Stack:** Next.js 16 (Static Export), Tailwind CSS v4, Framer Motion, Lenis Scroll, Lucide Icons, Geist Sans.

## 📂 Scalable Folder Structure
All generated files must strictly adhere to this map:
- `src/app/[lang]/`: Next.js App Router with i18n dynamic routing, layout logic, and SEO metadata.
- `src/components/ui/`: Atomic Shadcn components (Buttons, Cards, Accordions, Badges).
- `src/components/motion/`: Reusable animation wrappers (e.g., `Reveal.tsx`, `Magnetic.tsx`).
- `src/components/sections/`: High-level blocks (e.g., `Hero`, `LiveStats`, `AboutHospital`, `InteractiveBodyMap`, `BentoDepartments`, `DiagnosticLabs`, `HospitalEvents`, `ClinicalPerformance`, `HospitalGallery`, `HealthPackages`, `InsurancePartners`, `ContactSection`).
- `src/components/shared/`: Global components (`Navbar.tsx`, `Footer.tsx`, `CustomCursor.tsx`, `ThemeToggle.tsx`).
- `src/components/providers/`: Context providers (`theme-provider.tsx`, `SmoothScroll.tsx`).
- `src/lib/dictionaries/`: JSON-based i18n dictionaries (`en.json`, `kn.json`).
- `src/lib/`: Business logic, shared structured data (`data.ts`), and config.

## 🌍 Multilingual (i18n) & Advanced SEO
- **Path-Based Authority:** Native `/en` and `/kn` paths for multi-lingual search engine indexing.
- **Dynamic SSG:** Uses `generateStaticParams` to pre-render all language versions at build time for instant performance.
- **Advanced SEO Mandates:**
    - **Metadata API:** Unique, localized meta titles and descriptions injected via `generateMetadata`.
    - **Hospital Schema:** Integrated **JSON-LD Hospital Structured Data** in `layout.tsx` for clinical search ranking authority (address, geo-coordinates, emergency status).
    - **Language Alternates:** Proper `hreflang` link tags in the `<head>` for global search ranking authority.
    - **Semantic Markup:** Strict use of `<main>`, `<article>`, `<section>`, and hierarchical heading structures (`h1` through `h4`).

## 🎨 Global Design System (Oceanic Trust)
- **Palette:** 
    - **Theme Support:** Native Light/Dark modes. Default: **Dark**.
    - **Obsidian Dark:** Midnight Slate (`oklch(0.20 0.03 250)`) base.
    - **Primary Accent:** Royal Cobalt (`oklch(0.51 0.20 250)`) – Trust and authority.
    - **Secondary Accent:** Electric Cyan (`oklch(0.80 0.20 200)`) – Technical innovation.
- **Layout Consistency:** Global section width standardized to **1400px** (`max-w-[1400px] mx-auto`).
- **Typography Architecture:** 
    - **Headings:** Standardized **`text-8xl`** (desktop) and **`text-4xl`** (mobile) font-semibold with `tracking-tighter`.
    - **Signature Style:** Use `<span className="text-gradient-primary italic pr-4">Word</span>` for secondary words.
    - **Adaptive Grid Titles:** Titles scale dynamically (`text-2xl` mobile to `text-4xl` desktop) to prevent overflow.
- **Branding Signature:** Always include "Developed by **Vorabbit**" in the footer bottom bar with cobalt styling.

## ✨ Advanced Interaction & Micro-Animations
- **Global Transition:** **Spring physics only** (`stiffness: 260, damping: 20`). 
- **Clinical Cursor Engine:**
    - **Physicality:** Surgical crosshair core with spring-following pulse ring and heartbeat (EKG) animation on hover.
    - **Data HUD:** Floating clinical micro-metrics (BPM, Unit ID) following the cursor.
    - **Zero-Arrow Standard:** Default browser cursor is suppressed globally (`lg:cursor-none`).
- **Section Intelligence:**
    - **Anatomical Mapping:** Persistent 3D mannequin with pixel-perfect hotspots and persistent department selection.
    - **Diagnostic Terminal:** 3D perspective transitions with orbital scanning rings and high-transparency glass data nodes.
    - **Specialist Carousel:** Auto-scrolling grid (paused on hover) with 3D tilt profiles and hover-to-reveal clinical metrics.
    - **Performance Metrics:** Real-time animated SVG line graphs and radial dash-offset gauges.

## 🧱 Static Export (SSG) Technical Rules
- **Directives:** Interactive components MUST use `"use client"`.
- **Image Optimization:** Use `next/image` with `unoptimized: true` for compatibility with `output: 'export'`.
- **Data Architecture:** No hardcoded content in sections. All strings come from dictionaries; all structured data lives in `src/lib/data.ts`.
- **Vertical Rhythm:** Standardized vertical padding: **`py-16` (mobile)** and **`py-32` (desktop)**.
- **Type Safety:** 100% Strict TypeScript. No `any` types.
