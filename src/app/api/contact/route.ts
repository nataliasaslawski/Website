import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Where contact-form submissions are actually delivered. Override via
// CONTACT_TO_EMAIL if that should ever change.
const CONTACT_TO_EMAIL = process.env.CONTACT_TO_EMAIL || "kontakt@natalia-saslawski.de";

/**
 * Contact form endpoint. Sends the submission to CONTACT_TO_EMAIL via the
 * client's own Gmail account over SMTP (using a Google "App Password", not
 * her real password). Falls back to a clear "not configured" response
 * (which the UI turns into a mailto link) until GMAIL_USER and
 * GMAIL_APP_PASSWORD are set in the environment.
 */
export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);

  if (
    !body ||
    typeof body.name !== "string" ||
    typeof body.email !== "string" ||
    typeof body.message !== "string" ||
    !body.name.trim() ||
    !body.email.trim() ||
    !body.message.trim()
  ) {
    return NextResponse.json(
      { ok: false, error: "invalid_input" },
      { status: 400 },
    );
  }

  // Basic honeypot spam protection.
  if (typeof body.company_website === "string" && body.company_website.length > 0) {
    return NextResponse.json({ ok: true });
  }

  if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
    return NextResponse.json(
      { ok: false, error: "not_configured" },
      { status: 501 },
    );
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  const { name, unternehmen, email, telefon, rolle, message } = body as Record<string, string>;

  try {
    await transporter.sendMail({
      from: `Kontaktformular Website <${process.env.GMAIL_USER}>`,
      to: CONTACT_TO_EMAIL,
      replyTo: email,
      subject: `Neue Anfrage über das Kontaktformular – ${name}`,
      text: [
        `Name: ${name}`,
        unternehmen ? `Unternehmen: ${unternehmen}` : null,
        `E-Mail: ${email}`,
        telefon ? `Telefon: ${telefon}` : null,
        rolle ? `Ich bin: ${rolle}` : null,
        "",
        "Anliegen:",
        message,
      ]
        .filter(Boolean)
        .join("\n"),
    });
  } catch {
    return NextResponse.json({ ok: false, error: "send_failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
