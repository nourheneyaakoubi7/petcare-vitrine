"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link"; // Importation pour la navigation
import { MdClose, MdSchool, MdPets } from "react-icons/md";

const team = [
  {
    id: 1,
    name: "Dr. Sarah Mansour",
    role: "Vétérinaire Chirurgie",
    image: "/petcare-vitrine/images/EQUIPE1.jpg",
    bio: "Diplômée de l'ENMV, le Dr. Sarah s'est spécialisée en chirurgie des tissus mous. Passionnée par le bien-être félin, elle veille à ce que chaque opération se déroule dans le calme et la sécurité la plus totale.",
    specialties: ["Chirurgie", "Dentisterie", "Soins Félins"],
    experience: "12 ans d'expérience"
  },
  {
    id: 2,
    name: "Dr. Aziz Ben Fraj",
    role: "Spécialiste NAC",
    image: "/petcare-vitrine/images/EQUIPE2.jpg",
    bio: "Aziz est notre expert pour les Nouveaux Animaux de Compagnie (lapins, oiseaux, reptiles). Son approche douce et sa connaissance approfondie des espèces exotiques font de lui un pilier de notre clinique.",
    specialties: ["NAC", "Médecine Interne", "Nutrition"],
    experience: "8 ans d'expérience"
  }
];

export default function Equipe() {
  const [selectedMember, setSelectedMember] = useState<typeof team[0] | null>(null);

  return (
    <main className="pt-40 pb-20 bg-slate-50/50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-20">
          <span className="text-blue-500 font-bold tracking-[0.3em] uppercase text-xs">Nos Spécialistes</span>
          <h2 className="text-5xl md:text-6xl font-serif text-blue-900 mt-4 mb-6">Des experts passionnés</h2>
          <p className="text-slate-500 max-w-2xl mx-auto italic leading-relaxed">
            "Parce que chaque vie compte, notre équipe combine savoir-faire médical et empathie pour le bien de vos compagnons."
          </p>
        </div>

        {/* Grille de l'équipe */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {team.map((member) => (
            <div 
              key={member.id} 
              onClick={() => setSelectedMember(member)}
              className="group cursor-pointer space-y-8"
            >
              <div className="relative h-[600px] rounded-[60px] overflow-hidden shadow-2xl transition-all duration-500 group-hover:scale-[0.98]">
                <Image src={member.image} alt={member.name} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/20 transition-colors duration-500" />
                
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 translate-y-20 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <span className="bg-white text-blue-900 px-8 py-3 rounded-full font-bold shadow-xl">Voir le profil</span>
                </div>
              </div>
              
              <div className="text-center">
                <h4 className="text-3xl font-serif text-blue-900 mb-2">{member.name}</h4>
                <p className="text-blue-500 font-semibold uppercase tracking-[0.2em] text-[10px]">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL / POP-UP */}
      {selectedMember && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-6">
          {/* Overlay flou pour fermer la modal au clic extérieur */}
          <div 
            className="absolute inset-0 bg-blue-900/40 backdrop-blur-md"
            onClick={() => setSelectedMember(null)}
          />
          
          <div className="relative bg-white w-full max-w-4xl rounded-[50px] overflow-hidden shadow-2xl flex flex-col md:flex-row animate-in fade-in zoom-in duration-300">
            
            <button 
              onClick={() => setSelectedMember(null)}
              className="absolute top-6 right-6 z-10 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center text-blue-900 hover:bg-red-500 hover:text-white transition-all shadow-md"
            >
              <MdClose size={24} />
            </button>

            <div className="w-full md:w-1/2 h-80 md:h-auto relative">
              <Image src={selectedMember.image} alt={selectedMember.name} fill className="object-cover" />
            </div>

            <div className="w-full md:w-1/2 p-10 md:p-14 space-y-8">
              <div>
                <p className="text-blue-500 font-bold uppercase tracking-widest text-[10px] mb-2">{selectedMember.role}</p>
                <h3 className="text-4xl font-serif text-blue-900">{selectedMember.name}</h3>
              </div>

              <p className="text-slate-600 leading-relaxed font-light">
                {selectedMember.bio}
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4 text-blue-900">
                  <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center text-blue-500">
                    <MdSchool size={18} />
                  </div>
                  <span className="text-sm font-medium">{selectedMember.experience}</span>
                </div>
                <div className="flex items-center gap-4 text-blue-900">
                  <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center text-blue-500">
                    <MdPets size={18} />
                  </div>
                  <div className="flex gap-2">
                    {selectedMember.specialties.map((s, i) => (
                      <span key={i} className="text-[10px] bg-slate-100 px-3 py-1 rounded-full uppercase font-bold text-slate-500">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* BOUTON CORRIGÉ : Redirige vers la page contact */}
              <Link 
                href="/contact" 
                className="block w-full py-4 bg-blue-600 text-white text-center rounded-2xl font-bold hover:bg-blue-700 transition shadow-lg shadow-blue-100"
              >
                Prendre rendez-vous avec {selectedMember.name.split(' ')[1]}
              </Link>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}