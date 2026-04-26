// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Architecte | Portfolio",
  description: "Agence d'architecture moderne",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      {/* overflow-x-hidden empêche le scroll horizontal indésirable sur téléphone */}
      <body className="antialiased overflow-x-hidden w-full bg-white text-black">
        <Navbar />
        {/* Le contenu principal s'adaptera maintenant à la largeur de l'écran */}
        <main className="w-full">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}