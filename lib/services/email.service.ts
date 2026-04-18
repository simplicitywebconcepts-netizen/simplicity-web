import nodemailer from "nodemailer";
import { adminContactEmail } from "@/lib/email/templates/contact/admin";
import { userContactEmail } from "@/lib/email/templates/contact/user";

export type ContactEmailPayload = {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
};

type SmtpConfig = {
  host: string;
  port: number;
  user: string;
  pass: string;
  adminEmail: string;
  service: string;
  fromEmail: string;
};

function getSmtpConfig(): SmtpConfig {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const adminEmail = process.env.ADMIN_EMAIL;
  const service = process.env.SMTP_SERVICE;
  const fromEmail = process.env.SMTP_FROM;

  if (!host || !port || !user || !pass || !adminEmail || !service || !fromEmail) {
    throw new Error("SMTP configuration is incomplete");
  }

  return { host, port, user, pass, adminEmail, service, fromEmail };
}

export async function sendContactFormEmail(payload: ContactEmailPayload): Promise<void> {
  try {
    const smtpConfig = getSmtpConfig();

    const transporter = nodemailer.createTransport({
      host: smtpConfig.host,
      port: smtpConfig.port,
      secure: smtpConfig.port === 465,
      // service: smtpConfig.service,
      auth: {
        user: smtpConfig.user,
        pass: smtpConfig.pass,
      },
    });

    const adminHtml = adminContactEmail({
      name: payload.name,
      email: payload.email,
      phone: payload.phone,
      subject: payload.subject,
      message: payload.message,
    });

    const userHtml = userContactEmail({
      name: payload.name,
      message: payload.message,
    });

    await transporter.sendMail({
      from: smtpConfig.fromEmail,
      to: smtpConfig.adminEmail,
      subject: "New Contact Form Submission",
      html: adminHtml,
    });

    // Add 30-second delay in local development
    if (process.env.APP_ENV === "local") {
      console.log("Local environment detected. Waiting 20 seconds before sending user confirmation email...");
      await new Promise(resolve => setTimeout(resolve, 20000));
    }

    await transporter.sendMail({
      from: smtpConfig.fromEmail,
      to: payload.email,
      subject: "We Received Your Message",
      html: userHtml,
    });
  } catch (error) {
    console.log("Error sending contact form email:", error);
    throw error;
  }
}
