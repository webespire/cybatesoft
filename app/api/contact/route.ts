import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req:Request){

const body = await req.json();

try{

const transporter = nodemailer.createTransport({
service:"gmail",
auth:{
user:process.env.EMAIL_USER,
pass:process.env.EMAIL_PASS
}
});

await transporter.sendMail({
from:process.env.EMAIL_USER,
to:process.env.EMAIL_USER,
subject:"New Contact Message",
html:`

<h2>New Contact Form</h2>

<p><b>Name:</b> ${body.fullName}</p>
<p><b>Email:</b> ${body.emailAddress}</p>
<p><b>Phone:</b> ${body.phoneNumber}</p>
<p><b>Service:</b> ${body.service}</p>
<p><b>Message:</b> ${body.message}</p>

`
});

return NextResponse.json({success:true});

}catch(error){

return NextResponse.json({success:false});

}

}