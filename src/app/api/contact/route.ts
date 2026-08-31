import { NextRequest, NextResponse } from "next/server";

/**
 * Contact form endpoint.
 *
 * Not yet wired to a real mail provider — that requires an account the
 * client needs to create herself (see project notes). Once RESEND_API_KEY
 * (or an equivalent provider) is configured in the environment, replace the
 * TODO block below with an actual send call. Until then this endpoint
 * validates input and responds with a clear "not configured" error so the
 * UI can fall back to a mailto link instead of silently failing.
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

  // TODO: send via Resend (or chosen provider) once RESEND_API_KEY is set.
  // const resend = new Resend(process.env.RESEND_API_KEY);
  // await resend.emails.send({ ... });

  return NextResponse.json({ ok: true });
}
