import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, service, message } = await req.json()

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const gmailUser = process.env.GMAIL_USER
    const gmailPass = process.env.GMAIL_APP_PASSWORD

    if (!gmailUser || !gmailPass) {
      return NextResponse.json({ error: 'SMTP not configured' }, { status: 500 })
    }

    const FROM = `"SSGroupTech" <${gmailUser}>`

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: { user: gmailUser, pass: gmailPass },
      tls: { rejectUnauthorized: false },
    })

    await transporter.verify()

    // Notification to owner inbox
    await transporter.sendMail({
      from: FROM,
      to: 'shivajitiwari@gmail.com, ssgrouptechindia@gmail.com',
      replyTo: email,
      subject: `New Enquiry: ${service || 'General'} — from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #F97316; border-bottom: 2px solid #F97316; padding-bottom: 10px;">
            New Project Enquiry — SSGroupTech
          </h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #666; width: 120px;"><strong>Name</strong></td><td style="padding: 8px 0;">${name}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;"><strong>Email</strong></td><td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td></tr>
            <tr><td style="padding: 8px 0; color: #666;"><strong>Phone</strong></td><td style="padding: 8px 0;">${phone || '—'}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;"><strong>Service</strong></td><td style="padding: 8px 0;">${service || '—'}</td></tr>
          </table>
          <div style="margin-top: 16px;">
            <strong style="color: #666;">Message</strong>
            <p style="background: #f5f5f5; padding: 12px; border-radius: 8px; margin-top: 8px;">${message}</p>
          </div>
          <p style="color: #999; font-size: 12px; margin-top: 24px;">Sent via ssgrouptech.com contact form</p>
        </div>
      `,
    })

    // Confirmation reply to the user
    await transporter.sendMail({
      from: FROM,
      to: email,
      subject: `We received your message, ${name}! — SSGroupTech`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #080C14; color: #F8FAFC; padding: 32px; border-radius: 12px;">
          <div style="text-align: center; margin-bottom: 28px;">
            <span style="color: #F97316; font-size: 24px; font-weight: 700;">SS</span><span style="color: #F8FAFC; font-size: 24px; font-weight: 700;">GroupTech</span>
          </div>
          <h2 style="color: #F8FAFC; font-size: 22px; margin-bottom: 8px;">Thanks for reaching out, ${name}!</h2>
          <p style="color: #94A3B8; line-height: 1.6; margin-bottom: 24px;">
            We've received your enquiry and will get back to you within <strong style="color: #F97316;">2 hours</strong>.
            Here's a summary of what you sent us:
          </p>
          <div style="background: #0D1422; border: 1px solid rgba(249,115,22,0.2); border-radius: 10px; padding: 20px; margin-bottom: 24px;">
            <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
              <tr><td style="padding: 6px 0; color: #64748B; width: 100px;">Service</td><td style="padding: 6px 0; color: #F8FAFC;">${service || '—'}</td></tr>
              <tr><td style="padding: 6px 0; color: #64748B;">Phone</td><td style="padding: 6px 0; color: #F8FAFC;">${phone || '—'}</td></tr>
              <tr><td style="padding: 6px 0; color: #64748B; vertical-align: top;">Message</td><td style="padding: 6px 0; color: #F8FAFC;">${message}</td></tr>
            </table>
          </div>
          <p style="color: #94A3B8; font-size: 14px; line-height: 1.6; margin-bottom: 20px;">
            In the meantime, feel free to reach us directly:
          </p>
          <div style="margin-bottom: 28px;">
            <a href="https://wa.me/919555839357" style="display: inline-block; background: #22c55e; color: #fff; text-decoration: none; padding: 10px 20px; border-radius: 8px; font-size: 14px; font-weight: 600; margin-right: 8px;">WhatsApp Us</a>
            <a href="mailto:ssgrouptechindia@gmail.com" style="display: inline-block; background: rgba(249,115,22,0.15); color: #F97316; text-decoration: none; padding: 10px 20px; border-radius: 8px; font-size: 14px; font-weight: 600; border: 1px solid rgba(249,115,22,0.3);">Email Us</a>
          </div>
          <p style="color: #475569; font-size: 12px; border-top: 1px solid #1e293b; padding-top: 16px; margin: 0;">
            SSGroupTech · India — Remote Worldwide · <a href="https://ssgrouptech.com" style="color: #F97316; text-decoration: none;">ssgrouptech.com</a>
          </p>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err)
    console.error('Email error:', message)
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
