import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { nomComplet, telephone, email, objet, message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'nourhene.yaakoubi.7@gmail.com',
        pass: 'frbq pioz sifg fesm', // Voir étape 3 ci-dessous
      },
    });

    const mailOptions = {
      from: email,
      to: 'nourhene.yaakoubi.7@gmail.com',
      subject: `Nouveau Message de ${nomComplet} : ${objet}`,
      text: `
        Nom: ${nomComplet}
        Email: ${email}
        Téléphone: ${telephone}
        Objet: ${objet}
        
        Message:
        ${message}
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Email envoyé avec succès" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Erreur lors de l'envoi" }, { status: 500 });
  }
}