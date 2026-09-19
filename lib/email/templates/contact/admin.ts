import { emailLayout, escapeHtml } from "@/lib/email/layout";
import { contactInfo } from "@/lib/data";

export type AdminEmailPayload = {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service: string;
  budget?: string;
  subject?: string;
  message: string;
};

export function adminContactEmail(payload: AdminEmailPayload): string {
  const { name, email, phone, company, service, budget, subject, message } = payload;

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safePhone = phone ? escapeHtml(phone) : "Not provided";
  const safeCompany = company ? escapeHtml(company) : "Not provided";
  const safeService = escapeHtml(service);
  const safeBudget = budget ? escapeHtml(budget) : "Not provided";
  const safeSubject = subject ? escapeHtml(subject) : undefined;
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br>");

  const content = `
    <h2>New Project Inquiry</h2>
    <p>You have received a new project inquiry from your website contact form.</p>
    
    <div class="info-box">
      <p><strong>Name:</strong> ${safeName}</p>
      <p><strong>Company:</strong> ${safeCompany}</p>
      <p><strong>Email:</strong> <a href="mailto:${safeEmail}">${safeEmail}</a></p>
      <p><strong>Phone:</strong> ${safePhone}</p>
      <p><strong>Service Interested In:</strong> ${safeService}</p>
      <p><strong>Project Budget:</strong> ${safeBudget}</p>
      ${safeSubject ? `<p><strong>Subject:</strong> ${safeSubject}</p>` : ""}
    </div>

    <h3 style="margin-top: 25px; margin-bottom: 10px; font-size: 16px; color: #1f2937;">Project Details / Message:</h3>
    <div class="info-box">
      <p>${safeMessage}</p>
    </div>

    <div class="divider"></div>
    <p style="font-size: 13px; color: #6b7280;">
      <strong>Action:</strong> You can respond directly by replying to <a href="mailto:${safeEmail}">${safeEmail}</a>.
    </p>
    <p style="margin-top: 15px; font-size: 12px; color: #9ca3af;">
      <strong>Contact Info:</strong> ${contactInfo.phone} | ${contactInfo.email}
    </p>
  `;

  return emailLayout({
    title: "New Project Inquiry",
    preheader: `New inquiry from ${safeName} (${safeService})`,
    children: content,
  });
}
