"use client";
import Link from "next/link";
import { MdPets, MdPhoneInTalk } from "react-icons/md";

export default function Navbar() {
  return (
    <nav className="fixed w-full z-[100] bg-white/90 backdrop-blur-md border-b border-blue-50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-blue-900 font-serif text-2xl font-bold shrink-0">
          <MdPets className="text-blue-500" size={28} />
          <span className="tracking-tight">PetCare</span>
        </Link>

        {/* Liens de navigation - AJOUT DE ACCUEIL */}
        <div className="hidden lg:flex gap-8 text-[11px] xl:text-[13px] uppercase tracking-[0.2em] font-semibold text-blue-900/70">
          <Link href="/" className="hover:text-blue-500 transition border-b-2 border-transparent hover:border-blue-500 pb-1">Accueil</Link>
          <Link href="/la-clinique" className="hover:text-blue-500 transition border-b-2 border-transparent hover:border-blue-500 pb-1">La Clinique</Link>
          <Link href="/soins-et-services" className="hover:text-blue-500 transition border-b-2 border-transparent hover:border-blue-500 pb-1">Soins</Link>
          <Link href="/notre-equipe" className="hover:text-blue-500 transition border-b-2 border-transparent hover:border-blue-500 pb-1">L'Équipe</Link>
          <Link href="/contact" className="hover:text-blue-500 transition border-b-2 border-transparent hover:border-blue-500 pb-1">Contact</Link>
        </div>

        {/* Bouton Urgence */}
        <a 
          href="tel:+21612345678" 
          className="bg-red-500 text-white px-5 py-2.5 rounded-full text-[10px] font-black flex items-center gap-2 shadow-lg shadow-red-200 hover:scale-105 transition-transform shrink-0"
        >
          <MdPhoneInTalk size={16} />
          <span className="hidden sm:inline">URGENCE 24/7</span>
          <span className="sm:hidden text-[14px]">71 000 000</span>
        </a>

      </div>
    </nav>
  );
}