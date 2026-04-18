import { prisma } from "@/lib/prisma";
import { sendContactFormEmail, type ContactEmailPayload } from "@/lib/services/email.service";

export class ContactFormValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ContactFormValidationError";
  }
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function parseAndValidateContactPayload(payload: unknown): ContactEmailPayload {
  if (!isRecord(payload)) {
    throw new ContactFormValidationError("Invalid request body");
  }

  const name = typeof payload.name === "string" ? payload.name.trim() : "";
  const email = typeof payload.email === "string" ? payload.email.trim() : "";
  const phone = typeof payload.phone === "string" ? payload.phone.trim() : "";
  const subject = typeof payload.subject === "string" ? payload.subject.trim() : "";
  const message = typeof payload.message === "string" ? payload.message.trim() : "";

  if (!name || !email || !subject || !message) {
    throw new ContactFormValidationError("Missing required fields: name, email, subject, and message are required");
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(email)) {
    throw new ContactFormValidationError("Please provide a valid email address");
  }

  return { name, email, phone: phone || undefined, subject, message };
}

export async function submitContactForm(payload: unknown): Promise<void> {
  const validPayload = parseAndValidateContactPayload(payload);

  await prisma.contact.create({
    data: {
      name: validPayload.name,
      email: validPayload.email,
      phone: validPayload.phone ?? null,
      subject: validPayload.subject,
      message: validPayload.message,
    },
  });

  await sendContactFormEmail(validPayload);
}
