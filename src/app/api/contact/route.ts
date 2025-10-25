import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const data = await req.json();

  if (!data.name || !data.email || !data.message) {
    return NextResponse.json({ error: "All fields are required!" }, { status: 400 });
  }

  const port: number = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT) : 587;

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: port,
    secure: port === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: data.email,
      to: process.env.SMTP_RES,
      subject: `New Message on portfolio from ${data.name}`,
      text: data.message,
      html: `<p>${data.message}</p><p>From: ${data.name} (${data.email})</p>`,
    });

    return NextResponse.json({ status: "success" });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
