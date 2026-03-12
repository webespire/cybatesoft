"use server";

import { Resend } from "resend";
import SMTP2GOApi from 'smtp2go-nodejs';

const api = SMTP2GOApi(process.env.SMTP2GO_API_KEY!);

const resend = new Resend(process.env.RESEND_API_KEY);

export type ContactFormData = {
    fullName?: string;
    emailAddress?: string;
    phoneNumber?: string;
    service?: string;
    message?: string;
};

export async function sendEmail(formData: ContactFormData) {
    try {
        const { fullName, emailAddress, phoneNumber, service, message } = formData;

        const mailService = api.mail()
            .to({ email: emailAddress!, name: fullName! })
            .from({ email: "info@cybatesoft.com", name: "Cybatefort" })
            .subject(service! || "New Contact Request")
            .html(`
  <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 10px; max-width: 500px;">
  <h2 style="color: #333; margin-top: 0;">Message from ${fullName}</h2>
    <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
    <p><strong>Phone:</strong> <a href="tel:${phoneNumber || "Not provided"}">${phoneNumber || "Not provided"}</a></p>
    <div style="background: #f9f9f9; padding: 15px; border-left: 4px solid #007bff; font-style: italic;">
      ${message}
    </div>
    <p style="font-size: 12px; color: #888; margin-top: 25px;">
      Sent via Cybatesoft System • ${new Date().toLocaleString()}
    </p>
  </div>
`)


        const res = await api.client().consume(mailService);
        return res

        //     const response = await resend.emails.send({
        //         from: "Webespire <noreply@webespire.com>",
        //         to: ["kamal.sharma@webespire.com"],
        //         subject: `New Contact Request - ${service}`,
        //         replyTo: emailAddress,
        //         html: `
        //     <h2>New Contact Form Submission</h2>

        //     <p><strong>Name:</strong> ${fullName}</p>
        //     <p><strong>Email:</strong> ${emailAddress}</p>
        //     <p><strong>Phone:</strong> ${phoneNumber}</p>
        //     <p><strong>Service:</strong> ${service}</p>

        //     <h3>Message</h3>
        //     <p>${message}</p>
        // `,
        //     });

        //     return { success: true, data: response };

    } catch (error) {
        console.error("Email send error:", error);

        return {
            success: false,
            message: "Failed to send email",
        };
    }
}