import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { nomComplet, telephone, email, objet, message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'nourhene.yaakoubi.7@gmail.com', // Ton mail
        pass: process.env.GMAIL_APP_PASSWORD, // Utilise la variable d'env !
      },
    });

    const mailOptions = {
      from: email,
      to: 'nourhene.yaakoubi.7@gmail.com',
      subject: `🏥 RDV PETCARE : ${nomComplet} - ${objet}`,
      text: `
        Nouveau message de la part de : ${nomComplet}
        Email: ${email}
        Téléphone: ${telephone}
        Sujet: ${objet}
        
        Message:
        ${message}
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Email envoyé" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Erreur" }, { status: 500 });
  }
}