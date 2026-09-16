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

export function parseAndValidateContactPayload(payload: unknown): ContactEmailPayload {
  if (!isRecord(payload)) {
    throw new ContactFormValidationError("Invalid request body");
  }

  const name = typeof payload.name === "string" ? payload.name.trim() : "";
  const email = typeof payload.email === "string" ? payload.email.trim() : "";
  const phone = typeof payload.phone === "string" ? payload.phone.trim() : "";
  const company = typeof payload.company === "string" ? payload.company.trim() : "";
  const service = typeof payload.service === "string" ? payload.service.trim() : "";
  const budget = typeof payload.budget === "string" ? payload.budget.trim() : "";
  const subject = typeof payload.subject === "string" ? payload.subject.trim() : "";
  const message = typeof payload.message === "string" ? payload.message.trim() : "";

  if (!name || !email || !service || !message) {
    throw new ContactFormValidationError("Missing required fields: name, email, service, and message are required");
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(email)) {
    throw new ContactFormValidationError("Please provide a valid email address");
  }

  return {
    name,
    email,
    phone: phone || undefined,
    company: company || undefined,
    service,
    budget: budget || undefined,
    subject: subject || undefined,
    message,
  };
}

export async function submitContactForm(payload: unknown): Promise<void> {
  const validPayload = parseAndValidateContactPayload(payload);

  await sendContactFormEmail(validPayload);
}
