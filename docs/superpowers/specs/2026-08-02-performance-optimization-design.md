# Spec: Performance and SEO Optimizations for Simplicity Web

**Date:** 2026-08-02  
**Status:** Draft  

---

## 1. Goal & Context
The landing page for `simplicityweb.ca` achieves an SEO score of 100/100, but is bottlenecked by a low Performance score (36/100). The primary performance bottlenecks are a high Total Blocking Time (TBT) of ~4.5 seconds and a slow Largest Contentful Paint (LCP) of ~16.4 seconds. This spec details the changes required to defer heavy WebGL/Three.js assets, optimize script loading, resolve caching issues without causing visual glitches, and fix semantic heading structures in the footer.

---

## 2. Proposed Changes

### A. Dynamic 3D WebGL Splitting
*   **File:** [layout.tsx](file:///Users/krishnkantrai/Documents/TestProjects/simplicity-web/app/layout.tsx)
*   **Change:** Import `CrystalCanvas` using Next.js `dynamic()` with SSR disabled (`{ ssr: false }`).
*   **Impact:** Moves the heavy Three.js, `@react-three/fiber`, and `@react-three/drei` node module packages into a deferred client-side chunk, keeping it out of the initial page load bundle.

### B. Asynchronous Analytics
*   **File:** [layout.tsx](file:///Users/krishnkantrai/Documents/TestProjects/simplicity-web/app/layout.tsx)
*   **Change:** Change the Google Tag Manager (GTM) script loading strategy from `beforeInteractive` to `afterInteractive`.
*   **Impact:** Prevents the GTM script download/execution from blocking the browser's initial HTML parsing.

### C. Restoring Browser Cache Safely
*   **File:** [next.config.ts](file:///Users/krishnkantrai/Documents/TestProjects/simplicity-web/next.config.ts)
*   **Change:** Remove the custom global wildcard `/:path*` cache header setting that disables caching with `no-store, must-revalidate`.
*   **Impact:** Enables standard browser caching of static routes, CSS files, and public images. The root `<html>` and `<body>` tags will continue to serve inline styles (`style={{ backgroundColor: "#050505" }}`) to avoid flashing a unstyled white background during initial loading.

### D. Semantic Heading Structure
*   **File:** [Footer.tsx](file:///Users/krishnkantrai/Documents/TestProjects/simplicity-web/components/layout/Footer.tsx)
*   **Change:** Change the three `<h4>` tags representing column headers (`Services`, `Company`, `Contact Simplicity`) to `<h3>` elements to maintain correct heading hierarchy.
*   **Impact:** Fixes the accessibility and SEO heading order warnings.

---

## 3. Verification Plan

### Automated Tests
*   Run `npm run build` to ensure the project builds correctly after code splits.
*   Run `npx lighthouse http://localhost:3000` on the production server to verify the Performance and SEO improvements.

### Manual Verification
*   Verify the visual behavior of the 3D crystal nodes (they should fade in smoothly once loaded without layout shifts).
*   Refresh the page multiple times to verify that no "white background flash" occurs.
