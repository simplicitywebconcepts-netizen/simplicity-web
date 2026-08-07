# Service Pages Visual & Theme Consistency Design Spec

- **Date**: 2026-08-07
- **Target Route**: `/services/[slug]`
- **Goal**: Achieve full visual, theme, and component parity across all service sub-pages, aligning them with the Home and About pages.

---

## 1. Overview

Service sub-pages (`/services/[slug]`) currently exhibit visual inconsistencies compared to the rest of the site (Home and About pages):
- Plain white section headers instead of theme gradient text.
- Missing `SectionLabel` badges and `AnimatedSection` scroll animations.
- Custom one-off `CTASection` and redundant hardcoded `IndustriesSection`.
- Non-standard hover states (e.g. `bg-white` instead of `bg-primary`).
- Inconsistent container max-widths across sections.

This spec defines a systemic refactoring of all service page sub-sections and main template to enforce theme compliance and component reuse.

---

## 2. Component Architecture & Cleanup

### Deleted Components
- `components/services/sections/CTASection.tsx`
- `components/services/sections/IndustriesSection.tsx`

### Reused Shared Components
- `ServicePageTemplate.tsx` will import and use `@/components/home/CallToAction` instead of `CTASection`.
- All section components will import `@/components/ui/SectionLabel` and `@/components/ui/AnimatedSection`.

---

## 3. Detailed Component Specifications

### 3.1 HeroSection (`HeroSection.tsx`)
- Remove `max-w-3xl` constraint from the left hero content card.
- Apply `<span className="gradient-text">` to trailing words of `data.h1`.

### 3.2 Sub-Section Headers & Motion
Across all 9 sub-sections (`Challenges`, `Solution`, `Included`, `Benefits`, `Process`, `Tech`, `WhyChoose`, `RecentProjects`, `Testimonials`):
- Wrap header block in `<AnimatedSection>`.
- Render `<SectionLabel label="..." className="justify-center" />` above each heading.
- Render trailing 1-2 words of each `h2` heading inside `<span className="gradient-text">`.

### 3.3 Interactive Styling & Theme Alignment
- **ProcessSection**: Step number circles hover state changed to `group-hover:bg-primary group-hover:text-white`.
- **WhyChooseSection**: Title bullet dots changed from `bg-white` to `bg-primary`.
- **IncludedSection**: Icon container styled as `bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all`.
- **ChallengesSection**: Number badges styled as `bg-primary/10 text-primary border border-primary/20`.
- **BenefitsSection**: Add numbered badges (`01`, `02`, ...) using `bg-primary/10 text-primary` to give cards visual anchors.

### 3.4 Container Width Standardization
- Set container wrappers in all sections to `max-w-7xl mx-auto px-6` for unified alignment.

---

## 4. Verification Plan

- Run `npm run build` to confirm zero TypeScript compilation errors.
- Visual inspection on dev server (`/services/web-development`) via Playwright screenshots to verify:
  - Gradient text on headings.
  - Section labels and entrance animations.
  - Primary theme hovers & badge styling.
  - Shared CallToAction component rendering above Footer.
