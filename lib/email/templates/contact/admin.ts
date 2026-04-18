import { emailLayout } from "@/lib/email/layout";
import { contactInfo } from "@/lib/data";

export type AdminEmailPayload = {
  name: string;
  email: string;
  message: string;
};

export function adminContactEmail(payload: AdminEmailPayload): string {
  const { name, email, message } = payload;

  const content = `
    <h2>New Contact Form Submission</h2>
    <p>You have received a new message from your website contact form.</p>
    
    <div class="info-box">
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
    </div>

    <h3 style="margin-top: 25px; margin-bottom: 10px; font-size: 16px; color: #1f2937;">Message:</h3>
    <div class="info-box">
      <p>${message}</p>
    </div>

    <div class="divider"></div>
    <p style="font-size: 13px; color: #6b7280;">
      <strong>Action:</strong> Reply to <a href="mailto:${email}">${email}</a> or use your contact management system to respond.
    </p>
    <p style="margin-top: 15px; font-size: 12px; color: #9ca3af;">
      <strong>Contact Info:</strong> ${contactInfo.phone} | ${contactInfo.email}
    </p>
  `;

  return emailLayout({
    title: "New Contact Message",
    preheader: `New message from ${name}`,
    children: content,
  });
}
