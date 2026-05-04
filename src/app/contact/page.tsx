"use client";
import { MdOutlineLocationOn, MdOutlineAccessTime, MdOutlinePhoneInTalk, MdEmail } from "react-icons/md";

export default function Contact() {
  return (
    <main className="pt-32 pb-20 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* En-tête de page */}
        <div className="mb-20 text-center md:text-left">
          <span className="text-blue-500 font-bold tracking-[0.3em] uppercase text-xs">Contact & Accès</span>
          <h1 className="text-5xl md:text-7xl font-serif text-blue-900 mt-4 leading-tight">
            Nous sommes là pour <br/> <span className="italic font-light text-blue-400 text-4xl md:text-6xl">vous et vos compagnons.</span>
          </h1>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* COLONNE GAUCHE : INFOS PRATIQUES (Remplace la 404) */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Carte Info : Horaires */}
            <div className="bg-white p-8 rounded-[40px] shadow-sm border border-blue-50 flex gap-6">
              <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 shrink-0">
                <MdOutlineAccessTime size={24} />
              </div>
              <div>
                <h4 className="font-bold text-blue-900 text-lg mb-2">Horaires d'ouverture</h4>
                <div className="text-slate-500 text-sm space-y-1">
                  <p className="flex justify-between gap-10"><span>Lun - Ven :</span> <span className="font-semibold text-blue-900">08:30 - 19:30</span></p>
                  <p className="flex justify-between"><span>Samedi :</span> <span className="font-semibold text-blue-900">09:00 - 17:00</span></p>
                  <p className="flex justify-between text-red-500 font-medium"><span>Dimanche :</span> <span>Urgences uniquement</span></p>
                </div>
              </div>
            </div>

            {/* Carte Info : Localisation */}
            <div className="bg-white p-8 rounded-[40px] shadow-sm border border-blue-50 flex gap-6">
              <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 shrink-0">
                <MdOutlineLocationOn size={24} />
              </div>
              <div>
                <h4 className="font-bold text-blue-900 text-lg mb-2">Notre Clinique</h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                  12 Rue des Lilas, Centre Urbain Nord<br/>
                  1082 Tunis, Tunisie
                </p>
                <button className="mt-4 text-blue-500 font-bold text-xs uppercase tracking-widest hover:underline">
                  Ouvrir dans Google Maps →
                </button>
              </div>
            </div>

            {/* Section Urgence Rappel Rapide */}
            <div className="bg-red-50 p-8 rounded-[40px] border border-red-100">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-white animate-pulse">
                  <MdOutlinePhoneInTalk size={20} />
                </div>
                <h4 className="font-bold text-red-700 uppercase tracking-tighter text-sm">Besoin d'aide immédiate ?</h4>
              </div>
              <p className="text-red-900/70 text-sm mb-4 leading-relaxed">
                En cas d'urgence en dehors des horaires d'ouverture, contactez notre service de garde au :
              </p>
              <a href="tel:+21671000000" className="text-3xl font-serif text-red-600 font-bold hover:scale-105 block transition-transform">
                +216 71 000 000
              </a>
            </div>
          </div>

          {/* COLONNE DROITE : LE FORMULAIRE */}
          <div className="lg:col-span-7">
            <div className="bg-white p-10 md:p-14 rounded-[60px] shadow-2xl shadow-blue-100/50 border border-white">
              <h3 className="text-3xl font-serif text-blue-900 mb-8 italic">Prendre rendez-vous</h3>
              
              <form className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-bold text-blue-400 ml-4 tracking-widest">Votre Nom</label>
                    <input type="text" placeholder="Ex: Sarah Ben Fraj" className="w-full p-5 bg-slate-50 rounded-3xl outline-none focus:ring-2 ring-blue-100 transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-bold text-blue-400 ml-4 tracking-widest">Téléphone</label>
                    <input type="tel" placeholder="+216 -- --- ---" className="w-full p-5 bg-slate-50 rounded-3xl outline-none focus:ring-2 ring-blue-100 transition-all" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold text-blue-400 ml-4 tracking-widest">Motif de consultation</label>
                  <select className="w-full p-5 bg-slate-50 rounded-3xl outline-none focus:ring-2 ring-blue-100 transition-all text-slate-500 appearance-none">
                    <option>Vaccination / Bilan de santé</option>
                    <option>Consultation médicale</option>
                    <option>Chirurgie / Stérilisation</option>
                    <option>Urgences</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold text-blue-400 ml-4 tracking-widest">Message (Facultatif)</label>
                  <textarea placeholder="Décrivez brièvement les symptômes..." rows={4} className="w-full p-5 bg-slate-50 rounded-3xl outline-none focus:ring-2 ring-blue-100 transition-all"></textarea>
                </div>

                <button type="submit" className="w-full py-6 bg-blue-600 text-white rounded-3xl font-bold text-lg hover:bg-blue-900 shadow-xl shadow-blue-200 transition-all duration-500 transform hover:-translate-y-1">
                  Confirmer la demande
                </button>
                <p className="text-center text-[10px] text-slate-400 italic">
                  Nous vous rappellerons dans l'heure pour confirmer l'horaire précis.
                </p>
              </form>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}