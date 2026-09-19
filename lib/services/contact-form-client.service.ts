export type ContactFormRequest = {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service: string;
  budget?: string;
  subject?: string;
  message: string;
};

type SendMailResponse = {
  success?: boolean;
  error?: string;
};

export async function sendContactFormRequest(
  payload: ContactFormRequest | (Omit<ContactFormRequest, "service"> & { service?: string })
): Promise<void> {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const result = (await response.json()) as SendMailResponse;

  if (!response.ok || !result.success) {
    throw new Error(result.error || "Something went wrong");
  }
}
