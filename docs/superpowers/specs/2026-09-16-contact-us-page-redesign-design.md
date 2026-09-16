# Design Specification: Contact Us Page Redesign

**Date:** 2026-09-16  
**Status:** Approved  
**Topic:** Contact Us Page Revamp & Form Integration

---

## 1. Overview & Objectives

The goal of this revamp is to transform the existing single-card Contact Us page (`/contact`) into a comprehensive, high-conversion multi-section landing page. The new design organizes clear value propositions, interactive service discovery, and a robust project inquiry form with expanded lead-qualification fields (`company`, `service`, `budget`), backed by full end-to-end API validation and email template delivery.

---

## 2. Page Architecture & Visual Flow

The page at `app/contact/page.tsx` will consist of four sequential, responsive sections designed with Simplicity Web's dark-mode glassmorphic aesthetic:

```
+-------------------------------------------------------------------------+
| [Section 1: Hero & Project Inquiry Form]                                |
|  Left Column (Company Details & Context)   | Right Column (Contact Form)|
|  - H1: Let's Build Something Great         | - H2: Tell Us About Your   |
|    Together                                |   Project                  |
|  - Intro Subtitle                          | - Inputs: Name, Company,   |
|  - Direct Contact Info (Email, Phone)      |   Email, Phone, Service,   |
|  - Reply Time Indicator                    |   Budget, Project Details  |
|                                            | - Submit Button            |
+-------------------------------------------------------------------------+
| [Section 2: How Can We Help?]                                           |
|  - H2: How Can We Help?                                                 |
|  - 6 Interactive Service Cards linking to /services                     |
|    (Web Dev, SEO & Mktg, Branding, Social Media, CRO, Analytics)        |
+-------------------------------------------------------------------------+
| [Section 3: Why Work With Simplicity Web?]                              |
|  - H2: Why Work With Simplicity Web?                                    |
|  - 4 Key Trust/Value Proposition Cards                                  |
+-------------------------------------------------------------------------+
| [Section 4: Let's Talk CTA]                                             |
|  - H2: Let's Talk                                                       |
|  - Closing Action Subtitle                                              |
|  - "Send an Inquiry" Button (Smooth scrolls & focuses the form)         |
+-------------------------------------------------------------------------+
```

---

## 3. Detailed Component Specifications

### 3.1 Section 1: Hero & Inquiry Form (`components/contact/ContactHero.tsx` or modularized `ContactForm.tsx`)
- **Left Column:**
  - `SectionLabel`: `"LET'S TALK"`
  - **H1:** `Let's Build Something Great Together` (with gradient highlight on `Great Together`)
  - **Intro text:** `Have a project in mind? Tell us what you're looking to achieve and our team will get back to you.`
  - **Contact Information list:** Direct clickable `mailto:` and `tel:` links with icons.
  - **Response Commitment badge:** "Replies typically within 24 business hours".
- **Right Column (Form Container `#contact-form`):**
  - **H2:** `Tell Us About Your Project`
  - Subtitle: `Fill out the details below and we'll be in touch.`
  - **Fields:**
    1. **Name** (`name`): Text input, *Required*.
    2. **Business/Company Name** (`company`): Text input, *Optional*.
    3. **Email** (`email`): Email input, *Required*.
    4. **Phone** (`phone`): Tel input, *Optional*.
    5. **Service Interested In** (`service`): Select dropdown, *Required*.
       - Options:
         - `Web Development`
         - `Design & Branding`
         - `Social Media Marketing`
         - `SEO & Marketing`
         - `Conversion Optimization`
         - `Analytics`
         - `Other`
    6. **Project Budget** (`budget`): Select dropdown, *Optional*.
       - Options:
         - `Under $2,500`
         - `$2,500 – $5,000`
         - `$5,000 – $10,000`
         - `$10,000 – $25,000`
         - `$25,000+`
         - `Flexible / Undecided`
    7. **Tell Us About Your Project** (`message`): Textarea (5 rows), *Required*.
    8. **Submit Button**: Animated loading spinner during dispatch, disabled while pending.

### 3.2 Section 2: How Can We Help? (`components/contact/ContactServices.tsx`)
- **H2:** `How Can We Help?`
- **Subtitle:** `Explore our core capabilities to see how we can elevate your digital presence.`
- **6 Service Cards Grid (3 columns on desktop, 2 on tablet, 1 on mobile):**
  1. **Web Development**: *Custom websites and web solutions tailored for performance and scale.* (Link: `/services#web-development` / `/services`)
  2. **SEO & Marketing**: *Improve visibility, search rankings, organic traffic and online growth.* (Link: `/services#seo-marketing` / `/services`)
  3. **Branding & Design**: *Build a stronger, memorable, and more consistent brand identity.* (Link: `/services#branding-design` / `/services`)
  4. **Social Media**: *Create, manage, and expand your social presence across modern channels.* (Link: `/services#social-media` / `/services`)
  5. **Conversion Optimization**: *Turn more website visitors into qualified leads and paying customers.* (Link: `/services#conversion-optimization` / `/services`)
  6. **Analytics**: *Actionable data-driven insights to measure, optimize, and scale results.* (Link: `/services#analytics` / `/services`)

### 3.3 Section 3: Why Work With Simplicity Web? (`components/contact/ContactWhyUs.tsx`)
- **H2:** `Why Work With Simplicity Web?`
- **Subtitle:** `A dedicated partner focused on building digital solutions that generate real business growth.`
- **4 Value Props (4-column grid on desktop):**
  1. **Custom Solutions Tailored to Your Business**: No cookie-cutter templates; every strategy is customized to your exact goals.
  2. **Experienced Digital Team**: Seasoned developers, designers, and marketers committed to craftsmanship.
  3. **Strategy-Driven Approach**: Every feature, pixel, and campaign is engineered with clear business outcomes in mind.
  4. **Focus on Measurable Business Growth**: Transparent tracking, reliable delivery, and focus on ROI.

### 3.4 Section 4: Let's Talk CTA Banner (`components/contact/ContactClosingCta.tsx`)
- **H2:** `Let's Talk`
- **Body text:** `Have questions or ready to start your project? Get in touch with our team and let's discuss how we can help.`
- **Button:** `Send an Inquiry`
  - On click: triggers smooth scroll behavior to `#contact-form` and focuses the `name` input.

---

## 4. Data Layer & API Architecture

### 4.1 Client Service (`lib/services/contact-form-client.service.ts`)
```typescript
export type ContactFormRequest = {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service: string;
  budget?: string;
  subject?: string;
  message: string;
};
```

### 4.2 Server Validation (`lib/services/contact-form.service.ts`)
- Validate non-empty `name`, `email` (regex pattern), `service`, and `message`.
- Sanitize optional strings `company`, `phone`, `budget`.
- Throw descriptive `ContactFormValidationError` on invalid inputs.

### 4.3 Email Dispatch & Templates (`lib/services/email.service.ts` & `lib/email/templates/contact/admin.ts`)
- Update `AdminEmailPayload` & template to render structured details:
  - Client Name & Company
  - Contact Info (Email & Phone)
  - Requested Service & Budget Tier
  - Project Details / Message
- Update user confirmation template to reflect received inquiry.

---

## 5. Accessibility & Responsiveness
- Semantic HTML tags (`<h1>`, `<h2>`, `<form>`, `<label>`, `<select>`, `<textarea>`).
- ARIA attributes and descriptive `<label htmlFor="...">` associations.
- Keyboard navigability with visible focus rings.
- Fully responsive across mobile (320px+), tablet, and desktop (1280px+).
