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

type MailtrapConfig = {
  host: string;
  port: number;
  user: string;
  pass: string;
};

type GmailConfig = {
  user: string;
  pass: string;
};

type EmailConfig = {
  provider: "mailtrap" | "gmail";
  fromEmail: string;
  adminEmail: string;
  mailtrap?: MailtrapConfig;
  gmail?: GmailConfig;
};

function getEmailConfig(): EmailConfig {
  const provider = (process.env.EMAIL_PROVIDER || "mailtrap").toLowerCase();
  const fromEmail = process.env.SMTP_FROM;
  const adminEmail = process.env.ADMIN_EMAIL;

  if (!fromEmail || !adminEmail) {
    throw new Error("SMTP configuration is incomplete: SMTP_FROM and ADMIN_EMAIL are required");
  }

  if (provider === "gmail") {
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    if (!user || !pass) {
      throw new Error("Gmail configuration is incomplete: SMTP_USER (or GMAIL_USER) and SMTP_PASS (or GMAIL_PASS) are required");
    }
    return {
      provider: "gmail",
      fromEmail,
      adminEmail,
      gmail: { user, pass },
    };
  } else if (provider === "mailtrap") {
    const host = process.env.SMTP_HOST;
    const port = Number(process.env.SMTP_PORT);
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    if (!host || !port || !user || !pass) {
      throw new Error("Mailtrap configuration is incomplete: SMTP_HOST (or MAILTRAP_HOST), SMTP_PORT (or MAILTRAP_PORT), SMTP_USER (or MAILTRAP_USER), and SMTP_PASS (or MAILTRAP_PASS) are required");
    }
    return {
      provider: "mailtrap",
      fromEmail,
      adminEmail,
      mailtrap: { host, port, user, pass },
    };
  } else {
    throw new Error(`Unsupported email provider: ${provider}`);
  }
}

export async function sendContactFormEmail(payload: ContactEmailPayload): Promise<void> {
  const config = getEmailConfig();
  console.log(`[EmailService] Initializing email dispatch. Selected provider: ${config.provider}`);

  try {
    let transporter;
    if (config.provider === "gmail" && config.gmail) {
      transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: config.gmail.user,
          pass: config.gmail.pass,
        },
      });
    } else if (config.provider === "mailtrap" && config.mailtrap) {
      transporter = nodemailer.createTransport({
        host: config.mailtrap.host,
        port: config.mailtrap.port,
        secure: config.mailtrap.port === 465,
        auth: {
          user: config.mailtrap.user,
          pass: config.mailtrap.pass,
        },
      });
    } else {
      throw new Error(`Invalid configuration state for provider: ${config.provider}`);
    }

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
      from: config.fromEmail,
      to: config.adminEmail,
      subject: "New Contact Form Submission",
      html: adminHtml,
    });

    // Add delay in local development only when using Mailtrap
    if (config.provider === "mailtrap" && process.env.APP_ENV === "local") {
      console.log("[EmailService] Mailtrap and local environment detected. Waiting 20 seconds before sending user confirmation email...");
      await new Promise(resolve => setTimeout(resolve, 20000));
    }

    await transporter.sendMail({
      from: config.fromEmail,
      to: payload.email,
      subject: "We Received Your Message",
      html: userHtml,
    });
  } catch (error) {
    console.error(`[EmailService] Error occurred while sending contact form email via ${config.provider}:`, error);
    throw error;
  }
}
