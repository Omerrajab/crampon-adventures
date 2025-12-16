import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

// Create a transporter using environment variables
// For Gmail, use an App Password if 2FA is enabled
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
})

export async function POST(req: Request) {
  try {
    const { to, subject, html } = await req.json()

    if (!to || !subject || !html) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    // Only attempt to send if credentials are configured
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.warn(
        "Email credentials missing. Simulating email send.\nTo:",
        to,
        "\nSubject:",
        subject
      )
      return NextResponse.json({
        message: "Email simulated (configure credentials to send real emails)",
      })
    }

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to,
      subject,
      html,
    })

    return NextResponse.json({ message: "Email sent successfully" })
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    )
  }
}
