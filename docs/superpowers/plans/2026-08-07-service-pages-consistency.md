# Service Pages Visual & Theme Consistency Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Refactor all service sub-pages (`/services/[slug]`) and section components to achieve full visual, theme, motion, and structural consistency with the Home and About pages.

**Architecture:** Replace bespoke section styling and one-off CTA/Industries sections with reusable components (`@/components/home/CallToAction`, `@/components/ui/SectionLabel`, `@/components/ui/AnimatedSection`). Enforce theme gradient text, primary color interactive states, and standardized `max-w-7xl` container widths.

**Tech Stack:** Next.js App Router, React, Tailwind CSS, Framer Motion, TypeScript.

## Global Constraints

- Do not break existing static paths generation in `app/services/[slug]/page.tsx`.
- All `npm run build` checks must compile cleanly with zero TypeScript or build errors.
- Preserve all existing content parameters passed to section components.
- Retain glassmorphism card styling (`bg-black/55 backdrop-blur-[2px] border border-white/10 ring-1 ring-white/10`).

---

### Task 1: Hero Section Alignment

**Files:**
- Modify: `components/services/sections/HeroSection.tsx`

**Interfaces:**
- Consumes: `ServiceContent` prop containing `h1`, `intro`, `trust`.
- Produces: Visual Hero component with unconstrained card width and gradient title.

- [ ] **Step 1: Inspect HeroSection.tsx**

Check lines 15-22 of `HeroSection.tsx` to locate the `max-w-3xl` container and `h1` rendering.

- [ ] **Step 2: Update HeroSection layout and title styling**

In `components/services/sections/HeroSection.tsx`:
1. Remove `max-w-3xl` class from the hero content wrapper (change to `w-full rounded-2xl bg-black/45 backdrop-blur-[2px] ring-1 ring-white/10 p-6 md:p-8`).
2. Implement dynamic title gradient rendering: split `data.h1` so the last 2-3 words are rendered inside `<span className="gradient-text">`.

- [ ] **Step 3: Verify build**

Run: `npm run build`
Expected: Compilation PASS.

- [ ] **Step 4: Commit**

```bash
git add components/services/sections/HeroSection.tsx
git commit -m "style(services): align HeroSection text width and add gradient title text"
```

---

### Task 2: Service Sections Refactor (Part 1 - Challenges, Solution, Included, Benefits)

**Files:**
- Modify: `components/services/sections/ChallengesSection.tsx`
- Modify: `components/services/sections/SolutionSection.tsx`
- Modify: `components/services/sections/IncludedSection.tsx`
- Modify: `components/services/sections/BenefitsSection.tsx`

**Interfaces:**
- Consumes: `ServiceContent` prop.
- Produces: Standardized section components with `AnimatedSection`, `SectionLabel`, gradient titles, theme colors, and `max-w-7xl` container width.

- [ ] **Step 1: Refactor ChallengesSection.tsx**

In `ChallengesSection.tsx`:
1. Add imports for `AnimatedSection` from `@/components/ui/AnimatedSection` and `SectionLabel` from `@/components/ui/SectionLabel`.
2. Set container to `max-w-7xl mx-auto px-6`.
3. Wrap title in `AnimatedSection` with `SectionLabel label="Challenges" className="justify-center"`.
4. Wrap last words of `<h2>` in `<span className="gradient-text">`.
5. Update challenge number circles to `bg-primary/10 text-primary border border-primary/20`.

- [ ] **Step 2: Refactor SolutionSection.tsx**

In `SolutionSection.tsx`:
1. Add imports for `AnimatedSection` and `SectionLabel`.
2. Set container to `max-w-7xl mx-auto px-6`.
3. Add `SectionLabel label="The Solution" className="justify-center"`.
4. Wrap last words of `<h2>The Solution</h2>` in `<span className="gradient-text">`.
5. Wrap headline and grid items in `AnimatedSection`.

- [ ] **Step 3: Refactor IncludedSection.tsx**

In `IncludedSection.tsx`:
1. Add imports for `AnimatedSection` and `SectionLabel`.
2. Set container to `max-w-7xl mx-auto px-6`.
3. Add `SectionLabel label="What's Included" className="justify-center"`.
4. Wrap trailing words of `data.included_h2` in `<span className="gradient-text">`.
5. Update card icon containers to `bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all`.

- [ ] **Step 4: Refactor BenefitsSection.tsx**

In `BenefitsSection.tsx`:
1. Add imports for `AnimatedSection` and `SectionLabel`.
2. Set container to `max-w-7xl mx-auto px-6`.
3. Add `SectionLabel label="Key Benefits" className="justify-center"`.
4. Wrap trailing words of `data.benefits_h2` in `<span className="gradient-text">`.
5. Add a numbered badge (`01`, `02`, ...) using `bg-primary/10 text-primary text-xs font-bold px-2.5 py-1 rounded-md` inside each benefit card.

- [ ] **Step 5: Verify build**

Run: `npm run build`
Expected: Compilation PASS.

- [ ] **Step 6: Commit**

```bash
git add components/services/sections/ChallengesSection.tsx components/services/sections/SolutionSection.tsx components/services/sections/IncludedSection.tsx components/services/sections/BenefitsSection.tsx
git commit -m "style(services): refactor Challenges, Solution, Included, and Benefits sections with theme standards"
```

---

### Task 3: Service Sections Refactor (Part 2 - Process, Tech, WhyChoose, RecentProjects, Testimonials)

**Files:**
- Modify: `components/services/sections/ProcessSection.tsx`
- Modify: `components/services/sections/TechSection.tsx`
- Modify: `components/services/sections/WhyChooseSection.tsx`
- Modify: `components/services/sections/RecentProjectsSection.tsx`
- Modify: `components/services/sections/TestimonialsSection.tsx`

**Interfaces:**
- Consumes: `ServiceContent` prop.
- Produces: Standardized section components with `AnimatedSection`, `SectionLabel`, gradient titles, theme colors, and `max-w-7xl` container width.

- [ ] **Step 1: Refactor ProcessSection.tsx**

In `ProcessSection.tsx`:
1. Add imports for `AnimatedSection` and `SectionLabel`.
2. Set container to `max-w-7xl mx-auto px-6`.
3. Add `SectionLabel label="Our Process" className="justify-center"`.
4. Wrap trailing words of `data.process_h2` in `<span className="gradient-text">`.
5. Change number badge hover state from `group-hover:bg-white group-hover:text-black` → `group-hover:bg-primary group-hover:text-white`.

- [ ] **Step 2: Refactor TechSection.tsx**

In `TechSection.tsx`:
1. Add imports for `AnimatedSection` and `SectionLabel`.
2. Set container to `max-w-7xl mx-auto px-6`.
3. Add `SectionLabel label="Technologies & Tools" className="justify-center"`.
4. Wrap trailing words of `data.tech_h2` in `<span className="gradient-text">`.

- [ ] **Step 3: Refactor WhyChooseSection.tsx**

In `WhyChooseSection.tsx`:
1. Add imports for `AnimatedSection` and `SectionLabel`.
2. Set container to `max-w-7xl mx-auto px-6`.
3. Add `SectionLabel label="Why Choose Us" className="justify-center"`.
4. Wrap trailing words of `data.why_h2` in `<span className="gradient-text">`.
5. Change title bullet dots from `bg-white` → `bg-primary`.

- [ ] **Step 4: Refactor RecentProjectsSection.tsx**

In `RecentProjectsSection.tsx`:
1. Add imports for `AnimatedSection` and `SectionLabel`.
2. Ensure container is `max-w-7xl mx-auto px-6`.
3. Add `SectionLabel label="Our Portfolio" className="justify-center"`.
4. Wrap trailing words of `data.projects_h2` in `<span className="gradient-text">`.

- [ ] **Step 5: Refactor TestimonialsSection.tsx**

In `TestimonialsSection.tsx`:
1. Add imports for `AnimatedSection` and `SectionLabel`.
2. Set container to `max-w-7xl mx-auto px-6`.
3. Add `SectionLabel label="Client Testimonial" className="justify-center"`.

- [ ] **Step 6: Verify build**

Run: `npm run build`
Expected: Compilation PASS.

- [ ] **Step 7: Commit**

```bash
git add components/services/sections/ProcessSection.tsx components/services/sections/TechSection.tsx components/services/sections/WhyChooseSection.tsx components/services/sections/RecentProjectsSection.tsx components/services/sections/TestimonialsSection.tsx
git commit -m "style(services): refactor Process, Tech, WhyChoose, Projects, and Testimonials sections"
```

---

### Task 4: Main Template Cleanup & Shared CallToAction Integration

**Files:**
- Delete: `components/services/sections/CTASection.tsx`
- Delete: `components/services/sections/IndustriesSection.tsx`
- Modify: `components/services/ServicePageTemplate.tsx`

**Interfaces:**
- Consumes: `ServiceContent` prop.
- Produces: Clean `ServicePageTemplate` rendering sub-sections and `@/components/home/CallToAction`.

- [ ] **Step 1: Delete custom CTA and Industries section files**

Remove `components/services/sections/CTASection.tsx` and `components/services/sections/IndustriesSection.tsx`.

- [ ] **Step 2: Update ServicePageTemplate.tsx**

In `ServicePageTemplate.tsx`:
1. Remove imports of `CTASection` and `IndustriesSection`.
2. Import `CallToAction` from `@/components/home/CallToAction`.
3. Remove `<IndustriesSection data={data} />`.
4. Replace `<CTASection data={data} />` with:
```tsx
<CallToAction
  bgClass="bg-card-bg/85"
  heading={
    <>
      {data.cta_h2.split(" ").slice(0, -2).join(" ")}{" "}
      <span className="gradient-text">
        {data.cta_h2.split(" ").slice(-2).join(" ")}
      </span>
    </>
  }
  description={data.cta_body}
  primaryButtonText="Start Your Project"
  primaryButtonHref="/contact"
  secondaryButtonText="View Our Work"
  secondaryButtonHref="/works"
/>
```

- [ ] **Step 3: Verify build**

Run: `npm run build`
Expected: Compilation PASS with zero errors.

- [ ] **Step 4: Commit**

```bash
git add components/services/ServicePageTemplate.tsx
git rm components/services/sections/CTASection.tsx components/services/sections/IndustriesSection.tsx
git commit -m "refactor(services): replace CTASection with shared CallToAction component and remove IndustriesSection"
```

- [ ] **Step 5: Visual Verification via Playwright**

Use Playwright MCP tool `browser_navigate` to `http://localhost:3000/services/web-development` and take screenshots to verify complete visual consistency.
