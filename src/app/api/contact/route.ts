import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ success: false });
  }

  const whatsappNumber = "918688601826";

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    `Hello AppyWeb 👋\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`
  )}`;

  return NextResponse.json({
    success: true,
    whatsappUrl,
  });
}
