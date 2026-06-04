# Plan: Add English Version + Navbar Language Switch

## Summary
- Add an English version of the landing page under `#/en` (HashRouter path: `/en`) plus `#/en/contact-us`.
- Add a language switch button in the top navbar (desktop + mobile) to toggle between Chinese and English.
- Persist the language choice in `localStorage`, and keep route + language in sync (shareable URLs).
- Translate all user-facing strings currently hardcoded in components to an i18n dictionary (best-effort translation).

## Current State Analysis (Repo Facts)
- Router: `HashRouter` with routes `/` and `/contact-us` in [main.tsx](file:///Users/guangbochen/src/archersmart-ai/archersmart.github.io/src/main.tsx#L12-L35).
- Home page composition is hardcoded in [App.tsx](file:///Users/guangbochen/src/archersmart-ai/archersmart.github.io/src/App.tsx#L14-L35).
- The navbar navigation items are currently Chinese hardcoded in [Navbar.tsx](file:///Users/guangbochen/src/archersmart-ai/archersmart.github.io/src/components/Navbar.tsx#L27-L44).
- Most site copy is hardcoded across 11 components (e.g. [Hero.tsx](file:///Users/guangbochen/src/archersmart-ai/archersmart.github.io/src/components/Hero.tsx#L78-L119), [FAQ.tsx](file:///Users/guangbochen/src/archersmart-ai/archersmart.github.io/src/components/FAQ.tsx#L15-L72)).

## Proposed Changes

### 1) Add a minimal i18n layer (no external deps)
**Add files**
- `src/i18n/types.ts`
  - Define `Locale = "zh" | "en"` and shared types.
- `src/i18n/translations.ts`
  - Central dictionary for all UI copy used by components.
  - Provide both Chinese and English variants.
- `src/i18n/LanguageContext.tsx`
  - React context + `useLanguage()` hook that exposes:
    - `locale`
    - `setLocale(nextLocale: Locale)`
  - Persistence: read/write `localStorage` key (e.g. `archersmart.locale`).

**Why**
- Keeps the change lightweight (no `react-i18next` dependency added).
- Makes translation edits centralized and reduces future diff churn.

**How**
- The context determines `locale` from:
  1) Current route prefix: `/en` => English, otherwise Chinese
  2) LocalStorage preference (used to redirect to matching route on initial load)

### 2) Add `/en` routes and keep language + route in sync
**Update**
- `src/main.tsx`
  - Add routes:
    - `/en` -> English home
    - `/en/contact-us` -> English contact page
  - Wrap the router content in `LanguageProvider`.

**Update**
- `src/App.tsx`
  - Keep layout but ensure all child components consume translations from context.

**Routing rules**
- Chinese:
  - Home: `#/`
  - Contact: `#/contact-us`
- English:
  - Home: `#/en`
  - Contact: `#/en/contact-us`

**Initial load behavior (persisted preference)**
- If localStorage is `en` and user opens `#/`, redirect to `#/en`.
- If localStorage is `zh` and user opens `#/en`, redirect to `#/`.
- Do not redirect if user explicitly opened a matching language URL.

### 3) Add language switch button to the top navbar
**Update**
- `src/components/Navbar.tsx`
  - Add a language toggle UI on the right side of the navbar:
    - Desktop: next to the Github button.
    - Mobile: inside the Sheet menu (and optionally also visible next to the hamburger).
  - When toggled:
    - Persist locale in localStorage.
    - Navigate to the equivalent route:
      - `/` <-> `/en`
      - `/contact-us` <-> `/en/contact-us`
    - Keep scrolling behavior for section links working on both locales by always scrolling to the same section IDs.

**UX**
- Button label:
  - When current locale is Chinese: show `EN`
  - When current locale is English: show `中文`

### 4) Translate site content to use the i18n dictionary
**Update these components to replace hardcoded strings with dictionary lookups**
- `src/components/Navbar.tsx`
- `src/components/Hero.tsx`
- `src/components/Sponsors.tsx`
- `src/components/Advantages.tsx`
- `src/components/Features.tsx`
- `src/components/Cases.tsx`
- `src/components/FAQ.tsx`
- `src/components/About.tsx`
- `src/components/Statistics.tsx`
- `src/components/Contact.tsx`
- `src/components/Footer.tsx`

**Notes**
- Keep all `id="..."` anchors unchanged so existing scrolling/navigation keeps working.
- Keep existing styling and component structure; only swap strings/data structures.
- For data-driven sections (features list, FAQ list, cases bullets), store the per-locale arrays in `translations.ts` so the components remain mostly UI-only.

## Assumptions & Decisions (Locked)
- URL strategy: use `/en` routes (shareable), not a single URL toggle.
- Copy strategy: best-effort translation from existing Chinese strings.
- Persistence: remember choice via `localStorage`.

## Verification Steps
- Run:
  - `npm run lint`
  - `npm run build`
- Manual checks (dev server):
  - `#/` shows Chinese, nav switch shows `EN`, section links scroll correctly.
  - `#/en` shows English, nav switch shows `中文`, section links scroll correctly.
  - `#/contact-us` and `#/en/contact-us` show correct language, switch keeps you on the equivalent page.
  - Refresh page keeps the selected language (and stays/redirects to the correct locale route).

