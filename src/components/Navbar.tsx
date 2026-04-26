// src/components/Navbar.tsx
"use client";
import { useState } from "react";
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-md z-[100] border-b border-gray-100">
      <div className="flex justify-between items-center px-6 md:px-10 py-5">
        {/* LOGO */}
        <div className="text-xl md:text-2xl font-serif font-bold tracking-tighter">
          ARCHI<span className="text-gray-400">TECT</span>
        </div>

        {/* BOUTON MOBILE (BURGER) */}
        <button 
          className="md:hidden text-2xl" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </button>

        {/* LIENS DESKTOP */}
        <div className="hidden md:flex space-x-8 text-xs uppercase tracking-[0.2em] font-medium">
          <Link href="/" className="hover:text-gray-500 transition">Accueil</Link>
          <Link href="/qui-sommes-nous" className="hover:text-gray-500 transition">Qui sommes nous</Link>
          <Link href="/services" className="hover:text-gray-500 transition">Services</Link>
          <Link href="/Blog" className="hover:text-gray-500 transition">Blog</Link>
          <Link href="/contact" className="hover:text-gray-500 transition">Contact</Link>
        </div>
      </div>

      {/* MENU MOBILE (S'affiche uniquement quand isOpen est vrai) */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 flex flex-col p-6 space-y-4 text-center text-xs uppercase tracking-widest font-bold">
          <Link href="/" onClick={() => setIsOpen(false)}>Accueil</Link>
          <Link href="/qui-sommes-nous" onClick={() => setIsOpen(false)}>Qui sommes nous</Link>
          <Link href="/services" onClick={() => setIsOpen(false)}>Services</Link>
          <Link href="/Blog" onClick={() => setIsOpen(false)}>Blog</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;