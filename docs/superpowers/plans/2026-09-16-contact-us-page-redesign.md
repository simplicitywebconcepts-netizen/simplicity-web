# Contact Us Page Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Redesign the Simplicity Web Contact Us page (`/contact`) into a high-converting, 4-section landing experience with an expanded inquiry form, dedicated service cards, trust/value proposition cards, and closing CTA with smooth scroll.

**Architecture:** Split the contact page into 4 modular React components (`ContactForm` / `ContactHero`, `ContactServices`, `ContactWhyUs`, `ContactClosingCta`), integrate the new form fields (`company`, `service`, `budget`) throughout the client service, server validation, and nodemailer email templates.

**Tech Stack:** Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS, Framer Motion, Lucide React, Nodemailer.

## Global Constraints

- Preserve responsive design and glassmorphic styling consistent with the existing theme (`glass`, `bg-network-pattern`, `gradient-text`, `ring-1 ring-white/10`).
- Ensure all form fields follow accessibility standards (`label` with `htmlFor`, keyboard navigability).
- Mandatory fields: Name, Email, Service Interested In, Tell Us About Your Project.
- Optional fields: Business/Company Name, Phone, Project Budget.
- All code must pass TypeScript compilation (`npm run build` / `npx tsc --noEmit`) and ESLint (`npm run lint`).

---

### Task 1: Backend Data Model, Validation & Email Templates

**Files:**
- Modify: `lib/services/contact-form-client.service.ts`
- Modify: `lib/services/contact-form.service.ts`
- Modify: `lib/services/email.service.ts`
- Modify: `lib/email/templates/contact/admin.ts`
- Modify: `lib/email/templates/contact/user.ts`

**Interfaces:**
- Consumes: Standard HTTP POST body at `/api/contact`
- Produces: `ContactFormRequest`, `ContactEmailPayload`, `AdminEmailPayload` including `company`, `service`, and `budget`.

- [ ] **Step 1: Update type definitions and client service**
Update `ContactFormRequest` in `lib/services/contact-form-client.service.ts` to include `company?: string`, `service: string`, `budget?: string`.

- [ ] **Step 2: Update server-side payload validation in `contact-form.service.ts`**
Update `parseAndValidateContactPayload` in `lib/services/contact-form.service.ts` to validate required fields (`name`, `email`, `service`, `message`) and sanitize optional fields (`company`, `phone`, `budget`).

- [ ] **Step 3: Update email service and email templates**
Update `ContactEmailPayload` in `lib/services/email.service.ts` and `adminContactEmail` in `lib/email/templates/contact/admin.ts` to display Company Name, Service Interested In, and Project Budget in the HTML template.

- [ ] **Step 4: Verify TypeScript compilation**
Run: `npx tsc --noEmit`
Expected: 0 errors.

- [ ] **Step 5: Commit changes**
```bash
git add lib/services/ lib/email/templates/contact/
git commit -m "feat(contact): update payload validation and email templates for new fields"
```

---

### Task 2: Contact Form & Hero Section (`ContactForm.tsx`)

**Files:**
- Modify: `components/contact/ContactForm.tsx`

**Interfaces:**
- Consumes: `sendContactFormRequest`, `useNotification`, `contactInfo`
- Produces: 2-column Hero + Inquiry Form with `id="contact-form"`

- [ ] **Step 1: Implement form state and fields**
Add `company`, `service`, `budget` to form state.
Add dropdown options:
- Services: `Web Development`, `Design & Branding`, `Social Media Marketing`, `SEO & Marketing`, `Conversion Optimization`, `Analytics`, `Other`.
- Budget ranges: `Under $2,500`, `$2,500 – $5,000`, `$5,000 – $10,000`, `$10,000 – $25,000`, `$25,000+`, `Flexible / Undecided`.

- [ ] **Step 2: Implement 2-Column layout**
- Left Column:
  - Label: `LET'S CONNECT`
  - H1: `Let's Build Something Great Together`
  - Intro paragraph: `Have a project in mind? Tell us what you're looking to achieve and our team will get back to you.`
  - Direct contact links: Email (`contactInfo.email`) and Phone (`contactInfo.phone`)
  - Response badge: `Replies typically within 24 hours`
- Right Column:
  - H2: `Tell Us About Your Project`
  - Form inputs with accessible labels, custom styled selects with dropdown arrows, error/required indicators, and submit button.

- [ ] **Step 3: Verify TypeScript compilation and linting**
Run: `npx tsc --noEmit && npm run lint`
Expected: 0 errors.

- [ ] **Step 4: Commit changes**
```bash
git add components/contact/ContactForm.tsx
git commit -m "feat(contact): revamp hero and inquiry form component"
```

---

### Task 3: "How Can We Help?" Services Grid Component (`ContactServices.tsx`)

**Files:**
- Create: `components/contact/ContactServices.tsx`

**Interfaces:**
- Consumes: Lucide icons / SVG icons, `AnimatedSection`, Framer Motion animations
- Produces: `ContactServices` React component

- [ ] **Step 1: Create `components/contact/ContactServices.tsx`**
Create component rendering:
- Header: SectionLabel (`Capabilities`), H2 (`How Can We Help?`), subtitle (`Explore our core services and see how we can help your business grow.`)
- 6 Interactive service cards linking to `/services`:
  1. Web Development
  2. SEO & Marketing
  3. Branding & Design
  4. Social Media
  5. Conversion Optimization
  6. Analytics
- Hover states with smooth transitions and glowing card borders.

- [ ] **Step 2: Verify TypeScript compilation**
Run: `npx tsc --noEmit`
Expected: 0 errors.

- [ ] **Step 3: Commit changes**
```bash
git add components/contact/ContactServices.tsx
git commit -m "feat(contact): add How Can We Help services grid component"
```

---

### Task 4: "Why Work With Simplicity Web?" Trust Points (`ContactWhyUs.tsx`)

**Files:**
- Create: `components/contact/ContactWhyUs.tsx`

**Interfaces:**
- Consumes: `AnimatedSection`, `SectionLabel`, Framer Motion animations
- Produces: `ContactWhyUs` React component

- [ ] **Step 1: Create `components/contact/ContactWhyUs.tsx`**
Create component rendering:
- Header: SectionLabel (`Why Us`), H2 (`Why Work With Simplicity Web?`), subtitle.
- 4 Trust / Value cards:
  1. Custom Solutions Tailored to Your Business
  2. Experienced Digital Team
  3. Strategy-Driven Approach
  4. Focus on Measurable Business Growth

- [ ] **Step 2: Verify TypeScript compilation**
Run: `npx tsc --noEmit`
Expected: 0 errors.

- [ ] **Step 3: Commit changes**
```bash
git add components/contact/ContactWhyUs.tsx
git commit -m "feat(contact): add Why Work With Simplicity Web trust points component"
```

---

### Task 5: Closing CTA Section with Smooth Scroll (`ContactClosingCta.tsx`)

**Files:**
- Create: `components/contact/ContactClosingCta.tsx`

**Interfaces:**
- Consumes: `Button`, `AnimatedSection`
- Produces: `ContactClosingCta` React component with smooth scroll to `#contact-form` and input focus.

- [ ] **Step 1: Create `components/contact/ContactClosingCta.tsx`**
Create component rendering:
- H2: `Let's Talk`
- Subtitle: `Have questions or ready to start your project? Get in touch with our team and let's discuss how we can help.`
- Button: `Send an Inquiry` with `onClick` handler that scrolls smoothly to `#contact-form` and focuses the `name` field.

- [ ] **Step 2: Verify TypeScript compilation**
Run: `npx tsc --noEmit`
Expected: 0 errors.

- [ ] **Step 3: Commit changes**
```bash
git add components/contact/ContactClosingCta.tsx
git commit -m "feat(contact): add closing CTA component with smooth scroll"
```

---

### Task 6: Page Integration & End-to-End Build Verification

**Files:**
- Modify: `app/contact/page.tsx`

**Interfaces:**
- Consumes: `ContactForm`, `ContactServices`, `ContactWhyUs`, `ContactClosingCta`, `PageTransition`
- Produces: Complete `/contact` page

- [ ] **Step 1: Update `app/contact/page.tsx`**
Compose the 4 sections in order:
1. Section 1: Hero & Contact Form (`<ContactForm />`)
2. Section 2: How Can We Help? (`<ContactServices />`)
3. Section 3: Why Work With Simplicity Web? (`<ContactWhyUs />`)
4. Section 4: Let's Talk CTA (`<ContactClosingCta />`)

- [ ] **Step 2: Run build and lint verification**
Run: `npm run build && npm run lint`
Expected: Successful Next.js build with 0 TypeScript and ESLint errors.

- [ ] **Step 3: Commit changes**
```bash
git add app/contact/page.tsx
git commit -m "feat(contact): assemble updated multi-section contact page"
```
