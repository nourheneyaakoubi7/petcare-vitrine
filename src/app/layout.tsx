import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"; // 1. Importe ton nouveau composant Footer

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "PetCare | Clinique Vétérinaire d'Excellence",
  description: "Soins vétérinaires de pointe à Tunis. Une équipe dévouée pour le bien-être de vos compagnons.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-white font-sans text-slate-900 antialiased flex flex-col min-h-screen">
        <Navbar />
        
        {/* Le flex-grow permet au footer de rester en bas même si la page a peu de contenu */}
        <main className="flex-grow">
          {children}
        </main>
        
        {/* 2. On remplace l'ancien code par ton composant pro */}
        <Footer /> 
      </body>
    </html>
  );
}