"use client";
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { MdPets, MdEmail, MdLocationOn, MdPhone } from 'react-icons/md';

export default function Footer() {
  return (
    <footer className="bg-[#0a192f] text-white pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          
          {/* Colonne 1: Branding & Philosophie */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2 text-blue-400 font-serif text-3xl font-bold">
              <MdPets size={32} />
              <span className="tracking-tighter text-white">PetCare</span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed font-light">
              L'excellence médicale au service de vos compagnons. Une approche humaine et technologique pour garantir le bien-être animal à Tunis.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-blue-500 hover:border-blue-500 transition-all duration-300">
                <FaFacebookF size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-blue-500 hover:border-blue-500 transition-all duration-300">
                <FaInstagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-green-500 hover:border-green-500 transition-all duration-300">
                <FaWhatsapp size={18} />
              </a>
            </div>
          </div>

          {/* Colonne 2: Navigation Rapide */}
          <div className="space-y-6">
            <h4 className="text-sm uppercase tracking-[0.2em] font-bold text-blue-400">Navigation</h4>
            <ul className="space-y-4 text-slate-400 text-sm font-light">
              <li><Link href="/" className="hover:text-white transition">Accueil</Link></li>
              <li><Link href="/la-clinique" className="hover:text-white transition">La Clinique</Link></li>
              <li><Link href="/soins-et-services" className="hover:text-white transition">Soins & Services</Link></li>
              <li><Link href="/notre-equipe" className="hover:text-white transition">Notre Équipe</Link></li>
            </ul>
          </div>

          {/* Colonne 3: Contact Direct */}
          <div className="space-y-6">
            <h4 className="text-sm uppercase tracking-[0.2em] font-bold text-blue-400">Contact</h4>
            <div className="space-y-4 text-slate-400 text-sm font-light">
              <div className="flex items-start gap-3">
                <MdLocationOn className="text-blue-500 shrink-0" size={20} />
                <p>Ennasr 2, Avenue Hédi Nouira<br/>Tunis, Tunisie</p>
              </div>
              <div className="flex items-center gap-3">
                <MdEmail className="text-blue-500 shrink-0" size={18} />
                <p>contact@petcare.tn</p>
              </div>
              <div className="flex items-center gap-3">
                <MdPhone className="text-blue-500 shrink-0" size={18} />
                <p>+216 71 111 222</p>
              </div>
            </div>
          </div>

          {/* Colonne 4: Urgences */}
          <div className="bg-blue-900/30 p-8 rounded-[40px] border border-blue-500/20 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-black text-red-400">Urgences 24/7</h4>
            <p className="text-sm text-slate-300 leading-relaxed">
              Une équipe de garde est disponible en permanence pour les cas critiques.
            </p>
            <a href="tel:+21671111222" className="block text-xl font-bold text-white hover:text-blue-400 transition">
              71 111 222
            </a>
          </div>

        </div>

        {/* Bottom Bar - Version Épurée */}
        <div className="pt-10 border-t border-white/5 text-center">
          <p className="text-[10px] uppercase tracking-[0.3em] text-slate-500">
            © {new Date().getFullYear()} PetCare Tunisie — Excellence Médicale Vétérinaire
          </p>
        </div>
        
      </div>
    </footer>
  );
}