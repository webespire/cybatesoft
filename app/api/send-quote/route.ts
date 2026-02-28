import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, subject, telephone, message } =
      await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email to YOU
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: "New Business Inquiry",
      text: `New Business Inquiry

Name: ${name}
Email: ${email}
Phone: ${telephone}
Subject: ${subject}
Message: ${message}`,
    });

    // Thank You email to USER
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Thank You for Your Inquiry",
      text: `Hi ${name},

Thank you for contacting us.
We have received your inquiry and will contact you soon.

Best Regards,
Webespire Team`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false });
  }
}