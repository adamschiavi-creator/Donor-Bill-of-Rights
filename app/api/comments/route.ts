import { NextRequest, NextResponse } from "next/server";
import { insertComment } from "@/lib/supabase";
import { Resend } from "resend";

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => ({}));
  const { article_slug, author_name, content } = body as {
    article_slug?: string | null;
    author_name?: string;
    content?: string;
  };

  if (!author_name?.trim() || !content?.trim()) {
    return NextResponse.json(
      { error: "Name and comment are required" },
      { status: 400 }
    );
  }

  const slug = article_slug ?? null;

  let comment;
  try {
    comment = await insertComment(slug, author_name.trim(), content.trim());
  } catch (err) {
    console.error("Supabase insert error:", err);
    return NextResponse.json({ error: "Failed to save comment" }, { status: 500 });
  }

  // Send email notification (best-effort — don't fail the request if this errors)
  try {
    await sendNotification(slug, author_name.trim(), content.trim());
  } catch (err) {
    console.error("Email notification error:", err);
  }

  return NextResponse.json(comment, { status: 201 });
}

async function sendNotification(
  slug: string | null,
  name: string,
  content: string
) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.NOTIFICATION_EMAIL;

  if (!apiKey || !to) return;

  const resend = new Resend(apiKey);
  const location = slug ? `Article: ${slug}` : "General comments (landing page)";

  await resend.emails.send({
    from: "Donation Bill of Rights <onboarding@resend.dev>",
    to,
    subject: `New comment on Donation Bill of Rights — ${location}`,
    html: `
      <p><strong>Location:</strong> ${location}</p>
      <p><strong>From:</strong> ${name}</p>
      <hr />
      <p>${content.replace(/\n/g, "<br />")}</p>
      <hr />
      <p style="color: #666; font-size: 12px;">
        View all comments at your site's landing page or the relevant article page.
      </p>
    `,
  });
}
