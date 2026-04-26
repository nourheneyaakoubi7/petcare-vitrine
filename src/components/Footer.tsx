// src/components/Footer.tsx
import { FaFacebook, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer 
      className="relative min-h-[50vh] md:h-[60vh] bg-cover bg-center flex items-center justify-center py-10"
      style={{ backgroundImage: "url('/images/footer-bg.webp')" }}
    >
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 text-white text-center px-6 flex flex-col items-center">
        <div className="space-y-2 text-sm md:text-lg font-light tracking-wide">
          <p>Email: contact@architecte.tn</p>
          <p>Adresse: Berges du Lac, Tunis</p>
          <p>Tél: +216 71 000 000</p>
        </div>

        <div className="flex space-x-8 py-8">
          <a href="#" className="hover:text-gray-400 text-2xl transition"><FaFacebook /></a>
          <a href="#" className="hover:text-gray-400 text-2xl transition"><FaInstagram /></a>
        </div>

        <p className="text-[9px] md:text-[10px] uppercase tracking-[0.4em] opacity-50 border-t border-white/10 pt-8 w-full max-w-xs">
          © {new Date().getFullYear()} ARCHITECTE - TOUS DROITS RÉSERVÉS
        </p>
      </div>
    </footer>
  );
}