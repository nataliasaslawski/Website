import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// Where contact-form submissions are actually delivered. Intentionally
// separate from `site.email` (the public-facing address shown on the page),
// since the client wants form submissions routed to her personal inbox.
// Override via CONTACT_TO_EMAIL if that should ever change.
const CONTACT_TO_EMAIL = process.env.CONTACT_TO_EMAIL || "natalia.saslawski@gmail.com";

/**
 * Contact form endpoint. Sends the submission to CONTACT_TO_EMAIL via Resend.
 * Falls back to a clear "not configured" response (which the UI turns into
 * a mailto link) until RESEND_API_KEY is set in the environment.
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

  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json(
      { ok: false, error: "not_configured" },
      { status: 501 },
    );
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const fromAddress = process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev";

  const { name, unternehmen, email, telefon, rolle, message } = body as Record<string, string>;

  try {
    await resend.emails.send({
      from: `Kontaktformular Website <${fromAddress}>`,
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
