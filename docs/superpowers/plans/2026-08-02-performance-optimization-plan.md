# Performance and SEO Optimization Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Defer heavy WebGL/Three.js bundles, load Google Tag Manager asynchronously, restore client browser caching, and fix footer heading hierarchy to optimize website performance (target >80) and SEO (100).

**Architecture:** Use Next.js dynamic bundle splitting for client-side rendering components, update Script loading strategy parameters, clean up next.config.ts header rules, and align HTML footer tags with semantic standards.

**Tech Stack:** Next.js 16 (App Router), React 19, Tailwind CSS v4, Three.js, R3F.

## Global Constraints
- Do not introduce visual breaking changes.
- Ensure `#050505` background styles are hardcoded directly to prevent unstyled white background flashes.
- Run `npm run build` at the end of each task to ensure build compilation passes.

---

### Task 1: Dynamic Import of CrystalCanvas

**Files:**
- Modify: [app/layout.tsx](file:///Users/krishnkantrai/Documents/TestProjects/simplicity-web/app/layout.tsx)

**Interfaces:**
- Consumes: `CrystalCanvas` from `@/components/canvas/CrystalCanvas`
- Produces: Dynamic version of `CrystalCanvas` loaded with `{ ssr: false }`

- [ ] **Step 1: Edit layout.tsx to dynamically import CrystalCanvas**
  Modify [app/layout.tsx](file:///Users/krishnkantrai/Documents/TestProjects/simplicity-web/app/layout.tsx) to replace the static import of `CrystalCanvas` with a lazy dynamic import:
  
  ```typescript
  // Replace:
  // import { CrystalCanvas } from "@/components/canvas/CrystalCanvas";
  // With:
  import dynamic from "next/dynamic";
  const CrystalCanvas = dynamic(
      () => import("@/components/canvas/CrystalCanvas").then((mod) => mod.CrystalCanvas),
      { ssr: false }
  );
  ```

- [ ] **Step 2: Verify dynamic build succeeds**
  Run the Next.js production build compiler command:
  
  Run: `npm run build`
  Expected: SUCCESS, and the initial layout chunk size decreases as Three.js bundles are split into static chunks.

- [ ] **Step 3: Commit changes**
  
  ```bash
  git add app/layout.tsx
  git commit -m "perf: dynamically load CrystalCanvas to split heavy WebGL bundle"
  ```

---

### Task 2: Asynchronous Analytics Script

**Files:**
- Modify: [app/layout.tsx](file:///Users/krishnkantrai/Documents/TestProjects/simplicity-web/app/layout.tsx)

**Interfaces:**
- Consumes: Google Tag Manager `<Script>` tag
- Produces: Google Tag Manager `<Script>` tag with `"afterInteractive"` strategy

- [ ] **Step 1: Edit layout.tsx GTM script strategy**
  Modify [app/layout.tsx](file:///Users/krishnkantrai/Documents/TestProjects/simplicity-web/app/layout.tsx) to change `gtm-script`'s strategy from `"beforeInteractive"` to `"afterInteractive"`:
  
  ```typescript
  // Replace:
  // strategy="beforeInteractive"
  // With:
  strategy="afterInteractive"
  ```

- [ ] **Step 2: Verify next build compiles successfully**
  Run the production build compiler command:
  
  Run: `npm run build`
  Expected: SUCCESS

- [ ] **Step 3: Commit changes**
  
  ```bash
  git add app/layout.tsx
  git commit -m "perf: defer Google Tag Manager script to afterInteractive"
  ```

---

### Task 3: Clean Cache Configuration

**Files:**
- Modify: [next.config.ts](file:///Users/krishnkantrai/Documents/TestProjects/simplicity-web/next.config.ts)

**Interfaces:**
- Consumes: `headers` function in `nextConfig`
- Produces: `headers` function in `nextConfig` without the global `/:path*` wildcard rule

- [ ] **Step 1: Remove the global Cache-Control header block**
  Modify [next.config.ts](file:///Users/krishnkantrai/Documents/TestProjects/simplicity-web/next.config.ts) and remove the wildcard header block that disables browser caching globally:
  
  ```typescript
  // REMOVE this block:
  {
      source: "/:path*",
      headers: [
          {
              key: "Cache-Control",
              value: "no-store, must-revalidate",
          },
      ],
  },
  ```

- [ ] **Step 2: Ensure background color is preserved on root tags**
  Verify that the `html` and `body` tags in [app/layout.tsx](file:///Users/krishnkantrai/Documents/TestProjects/simplicity-web/app/layout.tsx) explicitly have `#050505` background styles. (Line 105: `style={{ backgroundColor: "#050505" }}`).

- [ ] **Step 3: Verify the build compiles without errors**
  Run the production build compiler command:
  
  Run: `npm run build`
  Expected: SUCCESS

- [ ] **Step 4: Commit changes**
  
  ```bash
  git add next.config.ts
  git commit -m "perf: remove global no-store caching headers to enable browser caching"
  ```

---

### Task 4: Footer Heading Hierarchy Fix

**Files:**
- Modify: [components/layout/Footer.tsx](file:///Users/krishnkantrai/Documents/TestProjects/simplicity-web/components/layout/Footer.tsx)

**Interfaces:**
- Consumes: Column header tags (`<h4>`)
- Produces: Column header tags (`<h3>`)

- [ ] **Step 1: Replace column header h4 tags with h3 tags**
  Modify [components/layout/Footer.tsx](file:///Users/krishnkantrai/Documents/TestProjects/simplicity-web/components/layout/Footer.tsx) to change the three column headers (`Services`, `Company`, and `Contact Simplicity`) from `<h4>` to `<h3>`.
  
  ```typescript
  // Replace:
  // <h4 className="font-bold text-sm tracking-wider uppercase mb-5">Services</h4>
  // With:
  <h3 className="font-bold text-sm tracking-wider uppercase mb-5">Services</h3>
  
  // Replace:
  // <h4 className="font-bold text-sm tracking-wider uppercase mb-5">Company</h4>
  // With:
  <h3 className="font-bold text-sm tracking-wider uppercase mb-5">Company</h3>
  
  // Replace:
  // <h4 className="font-bold text-sm tracking-wider uppercase mb-3">Contact Simplicity</h4>
  // With:
  <h3 className="font-bold text-sm tracking-wider uppercase mb-3">Contact Simplicity</h3>
  ```

- [ ] **Step 2: Verify build compilation succeeds**
  Run the production build compiler command:
  
  Run: `npm run build`
  Expected: SUCCESS

- [ ] **Step 3: Commit changes**
  
  ```bash
  git add components/layout/Footer.tsx
  git commit -m "seo: change footer column headers to h3 for correct semantic hierarchy"
  ```
