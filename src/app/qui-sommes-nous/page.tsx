"use client"; // Obligatoire car nous utilisons useState pour le Pop-up
import { useState } from "react";
import Image from "next/image";

// Données de l'équipe
const teamMembers = [
  {
    id: 1,
    name: "Nurhan Yaakoubi",
    role: "Architecte Principal",
    parcours: "Diplômée en architecture avec une passion pour le minimalisme...",
    image: "/images/team1.webp",
  },
  {
    id: 2,
    name: "Aziz Yaakoubi",
    role: "Designer d'Intérieur",
    parcours: "Expert en aménagement d'espaces modernes et fonctionnels...",
    image: "/images/team2.webp",
  },
];

export default function QuiSommesNous() {
  const [selectedMember, setSelectedMember] = useState<any>(null);

  return (
    <main className="min-h-screen bg-white">
      {/* SECTION 1: A PROPOS (Split Screen) */}
      <section className="flex flex-col md:flex-row items-center pt-20">
        <div className="w-full md:w-1/2 h-[600px] relative">
          <Image 
            src="/images/equipe-group.jpg" 
            alt="Notre Équipe" 
            fill 
            className="object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 p-10 md:p-20">
          <h1 className="text-4xl font-serif mb-6 uppercase tracking-widest">À Propos</h1>
          <p className="text-gray-600 leading-relaxed italic">
            Notre agence est née d'une vision commune : transformer chaque espace en une expérience sensorielle. 
            Nous travaillons de manière collaborative, où chaque membre apporte sa pierre à l'édifice. 
            Du concept initial au suivi de chantier, notre processus est basé sur l'écoute et la précision technique.
          </p>
        </div>
      </section>

      {/* SECTION 2: NOTRE EQUIPE (Grille) */}
      <section className="py-20 px-10">
        <h2 className="text-3xl font-serif text-center mb-16 uppercase tracking-widest underline decoration-gray-200 underline-offset-8">
          Notre Équipe
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {teamMembers.map((member) => (
            <div 
              key={member.id} 
              className="group cursor-pointer text-center"
              onClick={() => setSelectedMember(member)}
            >
              <div className="relative h-80 w-full mb-4 overflow-hidden">
                <Image 
                  src={member.image} 
                  alt={member.name} 
                  fill 
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="text-lg font-medium">{member.name}</h3>
              <p className="text-sm text-gray-400 uppercase tracking-widest">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* POP-UP (MODAL) */}
      {selectedMember && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-white max-w-4xl w-full flex flex-col md:flex-row relative">
            {/* Bouton Fermer */}
            <button 
              onClick={() => setSelectedMember(null)}
              className="absolute top-4 right-4 text-2xl font-light hover:rotate-90 transition-transform z-50"
            >
              ✕
            </button>

            {/* Photo à Droite (Comme demandé) */}
            <div className="w-full md:w-1/2 md:order-2 h-[400px] md:h-auto relative">
              <Image src={selectedMember.image} alt={selectedMember.name} fill className="object-cover" />
            </div>

            {/* Texte à Gauche */}
            <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <h2 className="text-3xl font-serif mb-2">{selectedMember.name}</h2>
              <p className="text-gray-400 uppercase tracking-widest text-xs mb-6">{selectedMember.role}</p>
              <div className="h-[1px] w-12 bg-gray-200 mb-6" />
              <p className="text-gray-600 leading-relaxed font-light">
                {selectedMember.parcours}
              </p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}