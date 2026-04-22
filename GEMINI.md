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
    - **Metadata Base:** Root `layout.tsx` MUST define `metadataBase` to resolve social images correctly.
    - **Hospital Schema:** Integrated **JSON-LD Hospital Structured Data** in `layout.tsx` for clinical search ranking authority.
    - **Language Alternates:** Proper `hreflang` link tags in the `<head>` for global search ranking authority.
    - **Semantic Markup:** Strict use of `<main>`, `<article>`, `<section>`, and hierarchical heading structures. **Strictly one `h1` per page.**
    - **Metadata Routes:** `robots.ts` and `sitemap.ts` MUST include `export const dynamic = 'force-static'` for static exports.

## ⚡ Performance & Accessibility (Core Web Vitals)
- **LCP Optimization:** The primary Hero image MUST use `priority` and `fetchPriority="high"`. Avoid entrance animations (opacity/scale) on the LCP element itself.
- **Responsive Images:** EVERY `<Image />` component MUST include a `sizes` attribute (e.g., `sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"`) to prevent over-fetching.
- **Accessibility (A11y):** 
    - **Interactive Labels:** All `<button>` or `<Link>` elements without visible text MUST have a descriptive `aria-label`.
    - **Decorative Assets:** All purely decorative icons (Lucide) MUST have `aria-hidden="true"`.
    - **Heading Order:** Maintain strict logical heading hierarchy (`h1` -> `h2` -> `h3`).
- **Main Thread Efficiency:** Heavy client-side interactive components (like `CustomCursor`) MUST only initialize on devices with a fine pointer (`matchMedia("(pointer: fine)")`).

## 🎨 Global Design System (Oceanic Trust)
- **Palette:** 
    - **Theme Support:** Native Light/Dark modes. Default: **Dark**.
    - **Obsidian Dark:** Midnight Slate (`oklch(0.20 0.03 250)`) base.
    - **Primary Accent:** Royal Cobalt (`oklch(0.51 0.20 250)`) – Trust and authority.
    - **Secondary Accent:** Electric Cyan (`oklch(0.80 0.20 200)`) – Technical innovation.
- **Layout Consistency:** Global section width standardized to **1400px** (`max-w-[1400px] mx-auto`).
- **Typography Architecture:** 
    - **Headings:** Standardized **`text-3xl`** (mobile), **`md:text-4xl`**, **`lg:text-5xl`**, **`xl:text-6xl`**, and **`2xl:text-7xl`** font-semibold with `tracking-tighter`.
    - **Signature Style:** Use `<span className="text-gradient-primary italic pr-4">Word</span>` for secondary words.
- **Branding Signature:** Always include "Developed by **Vorabbit**" in the footer bottom bar with cobalt styling.

## ✨ Advanced Interaction & Micro-Animations
- **Global Transition:** **Spring physics only** (`stiffness: 260, damping: 20`). 
- **Clinical Cursor Engine:**
    - **Physicality:** Surgical crosshair core with spring-following pulse ring and heartbeat (EKG) animation on hover.
    - **Pointer Guard:** Suppress default browser cursor (`lg:cursor-none`) only on desktop/fine-pointer devices.
- **Section Intelligence:**
    - **Anatomical Mapping:** Persistent 3D mannequin with pixel-perfect hotspots and persistent department selection.
    - **Diagnostic Terminal:** 3D perspective transitions with orbital scanning rings and high-transparency glass data nodes.

## 🧱 Static Export (SSG) Technical Rules
- **Directives:** Interactive components MUST use `"use client"`.
- **Image Optimization:** All images are optimized via the custom loader (`src/lib/image-loader.js`). Do NOT use `unoptimized: true` in component code.
- **Data Architecture:** No hardcoded content in sections. All strings come from dictionaries; all structured data lives in `src/lib/data.ts`.
- **Vertical Rhythm:** Standardized vertical padding: **`py-12`** (mobile), **`md:py-16`**, **`lg:py-20`**, and **`2xl:py-24`**.
- **Type Safety:** 100% Strict TypeScript. No `any` types.
