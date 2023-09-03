import Email from '../../../emails/index';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { email, name, message, tel } = await request.json();
  
  try {
    const data = await resend.emails.send({
      from: '高杉 竜平 <info@garden-sugizo.website>',
      to: email,
      bcc: process.env.YOUR_EMAIL,
      subject: '【庭屋すぎ蔵】お問い合わせ内容の確認',
      react: Email({ email, name, message, tel }),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
