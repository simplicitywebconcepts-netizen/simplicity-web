import { NextResponse } from 'next/server'
import { ContactFormValidationError, submitContactForm } from '@/lib/services/contact-form.service'

export const runtime = 'nodejs'

export async function POST(request: Request) {
  try {
    const payload = await request.json()
    await submitContactForm(payload)

    return NextResponse.json({ success: true })
  } catch (error) {
    if (error instanceof ContactFormValidationError) {
      return NextResponse.json(
        { error: error.message },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { error: 'Something went wrong' },
      { status: 500 }
    )
  }
}
