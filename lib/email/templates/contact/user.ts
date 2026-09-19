import { emailLayout, escapeHtml } from "@/lib/email/layout";
import { contactInfo } from "@/lib/data";

export type UserEmailPayload = {
  name: string;
  email?: string;
  phone?: string;
  company?: string;
  service?: string;
  budget?: string;
  message: string;
};

export function userContactEmail(payload: UserEmailPayload): string {
  const { name, phone, company, service, budget, message } = payload;

  const safeName = escapeHtml(name);
  const safeService = service ? escapeHtml(service) : undefined;
  const safeCompany = company ? escapeHtml(company) : undefined;
  const safePhone = phone ? escapeHtml(phone) : undefined;
  const safeBudget = budget ? escapeHtml(budget) : undefined;
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br>");

  const summaryFields: string[] = [];
  if (safeService) summaryFields.push(`<p><strong>Service:</strong> ${safeService}</p>`);
  if (safeCompany) summaryFields.push(`<p><strong>Company:</strong> ${safeCompany}</p>`);
  if (safePhone) summaryFields.push(`<p><strong>Phone:</strong> ${safePhone}</p>`);
  if (safeBudget) summaryFields.push(`<p><strong>Budget:</strong> ${safeBudget}</p>`);

  const summaryHtml =
    summaryFields.length > 0
      ? `
    <h3 style="margin-top: 25px; margin-bottom: 12px; font-size: 16px; color: #1f2937;">Summary of Your Inquiry:</h3>
    <div class="info-box">
      ${summaryFields.join("")}
    </div>
  `
      : "";

  const content = `
    <h2>Thanks for reaching out, ${safeName}!</h2>
    <p>We received your ${safeService ? `inquiry regarding <strong>${safeService}</strong>` : "message"} and appreciate you taking the time to contact us. Our team will review your details and get back to you as soon as possible.</p>

    ${summaryHtml}

    <h3 style="margin-top: 25px; margin-bottom: 12px; font-size: 16px; color: #1f2937;">Your Message / Project Details:</h3>
    <div class="info-box">
      <p>${safeMessage}</p>
    </div>

    <div class="divider"></div>

    <p>In the meantime, if you have any urgent questions, feel free to reach out to us directly:</p>
    <p style="margin-top: 10px;">
      <strong>Email:</strong> <a href="mailto:${contactInfo.email}">${contactInfo.email}</a><br>
      <strong>Phone:</strong> <a href="tel:${contactInfo.phone.replace(/\D/g, "")}">${contactInfo.phone}</a>
    </p>

    <p style="margin-top: 20px; font-size: 13px; color: #6b7280;">
      Best regards,<br>
      <strong>The Simplicity Web Inc Team</strong>
    </p>
  `;

  return emailLayout({
    title: "We Received Your Inquiry",
    preheader: safeService ? `Thank you for your inquiry about ${safeService}` : "Thank you for contacting us",
    children: content,
  });
}
