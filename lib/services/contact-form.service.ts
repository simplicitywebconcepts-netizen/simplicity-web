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
  const message = typeof payload.message === "string" ? payload.message.trim() : "";

  if (!name || !email || !message) {
    throw new ContactFormValidationError("Missing required fields: name, email, and message are required");
  }

  return { name, email, message };
}

export async function submitContactForm(payload: unknown): Promise<void> {
  const validPayload = parseAndValidateContactPayload(payload);
  await sendContactFormEmail(validPayload);
}
