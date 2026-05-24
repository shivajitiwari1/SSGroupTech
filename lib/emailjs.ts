import emailjs from '@emailjs/browser'

export interface ContactFormData {
  name: string
  email: string
  phone: string
  service: string
  message: string
}

export async function sendContactEmail(data: ContactFormData): Promise<void> {
  await emailjs.send(
    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
    {
      from_name: data.name,
      from_email: data.email,
      phone: data.phone,
      service: data.service,
      message: data.message,
    },
    process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
  )
}
