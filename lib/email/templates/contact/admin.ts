import { emailLayout } from "@/lib/email/layout";
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

  const content = `
    <h2>New Project Inquiry</h2>
    <p>You have received a new project inquiry from your website contact form.</p>
    
    <div class="info-box">
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Company:</strong> ${company || "Not provided"}</p>
      <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
      <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
      <p><strong>Service Interested In:</strong> ${service}</p>
      <p><strong>Project Budget:</strong> ${budget || "Not provided"}</p>
      ${subject ? `<p><strong>Subject:</strong> ${subject}</p>` : ""}
    </div>

    <h3 style="margin-top: 25px; margin-bottom: 10px; font-size: 16px; color: #1f2937;">Project Details / Message:</h3>
    <div class="info-box">
      <p>${message.replace(/\n/g, "<br>")}</p>
    </div>

    <div class="divider"></div>
    <p style="font-size: 13px; color: #6b7280;">
      <strong>Action:</strong> You can respond directly by replying to <a href="mailto:${email}">${email}</a>.
    </p>
    <p style="margin-top: 15px; font-size: 12px; color: #9ca3af;">
      <strong>Contact Info:</strong> ${contactInfo.phone} | ${contactInfo.email}
    </p>
  `;

  return emailLayout({
    title: "New Project Inquiry",
    preheader: `New inquiry from ${name} (${service})`,
    children: content,
  });
}
