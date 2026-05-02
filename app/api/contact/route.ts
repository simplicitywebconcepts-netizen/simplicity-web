import { NextResponse } from "next/server";
import { ContactFormValidationError, submitContactForm } from "@/lib/services/contact-form.service";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as unknown;

    await submitContactForm(body);

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error) {
    if (error instanceof ContactFormValidationError) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ error: "Failed to save contact" }, { status: 500 });
  }
}