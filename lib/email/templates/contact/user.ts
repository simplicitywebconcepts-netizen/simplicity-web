import { emailLayout } from "@/lib/email/layout";
import { contactInfo } from "@/lib/data";

export type UserEmailPayload = {
  name: string;
  message: string;
  service?: string;
};

export function userContactEmail(payload: UserEmailPayload): string {
  const { name, message, service } = payload;

  const content = `
    <h2>Thanks for reaching out, ${name}!</h2>
    <p>We received your ${service ? `inquiry regarding <strong>${service}</strong>` : "message"} and appreciate you taking the time to contact us. Our team will review your details and get back to you as soon as possible.</p>

    <div class="divider"></div>

    <h3 style="margin-top: 25px; margin-bottom: 15px; font-size: 16px; color: #1f2937;">Your Inquiry / Message:</h3>
    <div class="info-box">
      <p>${message.replace(/\n/g, "<br>")}</p>
    </div>

    <div class="divider"></div>

    <p>In the meantime, if you have any urgent questions, feel free to reach out to us directly:</p>
    <p style="margin-top: 10px;">
      <strong>Email:</strong> <a href="mailto:${contactInfo.email}">${contactInfo.email}</a><br>
      <strong>Phone:</strong> <a href="tel:${contactInfo.phone.replace(/\D/g, '')}">${contactInfo.phone}</a>
    </p>

    <p style="margin-top: 20px; font-size: 13px; color: #6b7280;">
      Best regards,<br>
      <strong>The Simplicity Web Inc Team</strong>
    </p>
  `;

  return emailLayout({
    title: "We Received Your Inquiry",
    preheader: service ? `Thank you for your inquiry about ${service}` : "Thank you for contacting us",
    children: content,
  });
}
