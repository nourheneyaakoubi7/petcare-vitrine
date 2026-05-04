"use client";
import { useState } from "react";
import Image from "next/image";
import { MdChevronRight, MdInfoOutline, MdCheckCircleOutline } from "react-icons/md";

const services = [
  {
    title: "Chirurgie",
    img: "/images/SERVICE2.jpg",
    desc: "Bloc opératoire stérile haute technologie.",
    process: [
      { step: "Bilan Pré-opératoire", detail: "Examen sanguin complet pour vérifier l'aptitude à l'anesthésie." },
      { step: "Anesthésie Sécurisée", detail: "Monitorage constant des fonctions vitales par nos experts." },
      { step: "Réveil Monitoré", detail: "Phase de réveil sous surveillance étroite en espace calme." }
    ]
  },
  {
    title: "Échographie",
    img: "/images/SERVICE.webp",
    desc: "Imagerie médicale avancée pour diagnostic précis.",
    process: [
      { step: "Préparation", detail: "Tonte légère de la zone pour une qualité d'image optimale." },
      { step: "Examen Non-Invasif", detail: "Observation en temps réel des organes sans aucune douleur." },
      { step: "Compte-rendu", detail: "Explication immédiate des résultats avec le propriétaire." }
    ]
  },
  {
    title: "Hospitalisation",
    img: "/images/CABINET5.jpg",
    desc: "Box confortables et surveillance 24h/24.",
    process: [
      { step: "Installation VIP", detail: "Box individuels adaptés à la taille et aux besoins de l'animal." },
      { step: "Suivi Médical", detail: "Administration des soins et traitements selon un planning rigoureux." },
      { step: "Nouvelles Quotidiennes", detail: "Appel matinal pour vous tenir informé de l'état de votre compagnon." }
    ]
  },
  {
    title: "Soins Félins",
    img: "/images/SOIN_CAT.jpg",
    desc: "Espace dédié pour réduire le stress des chats.",
    process: [
      { step: "Zéro Stress", detail: "Utilisation de diffuseurs de phéromones apaisantes dès l'arrivée." },
      { step: "Zone Dédiée", detail: "Salle d'attente et de consultation sans contact visuel avec les chiens." },
      { step: "Manipulation Douce", detail: "Techniques de contention minimaliste pour respecter le chat." }
    ]
  }
];

export default function Services() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <main className="pt-40 pb-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* En-tête avec style inspiré de l'image */}
        <div className="mb-16">
          <h1 className="text-6xl md:text-7xl font-serif text-blue-500/90 italic font-light tracking-tight">
            protocoles de soins.
          </h1>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* MENU GAUCHE */}
          <div className="lg:col-span-4 space-y-3">
            {services.map((s, i) => (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                className={`w-full flex items-center justify-between p-7 rounded-[25px] transition-all duration-500 group ${
                  activeTab === i 
                  ? "bg-blue-600 text-white shadow-2xl shadow-blue-200" 
                  : "bg-transparent text-blue-900 hover:bg-slate-50"
                }`}
              >
                <span className="text-xl font-bold font-serif">{s.title}</span>
                <MdChevronRight size={20} className={`${activeTab === i ? "translate-x-1" : "opacity-40"}`} />
              </button>
            ))}
            
            <div className="mt-12 p-8 bg-[#0a192f] text-white rounded-[35px] space-y-4">
              <MdInfoOutline size={28} className="text-blue-400" />
              <p className="text-sm font-light leading-relaxed opacity-80">
                Protocoles validés selon les normes internationales. Votre compagnon est entre de bonnes mains.
              </p>
            </div>
          </div>

          {/* CONTENU DROITE - STYLE IMAGE_9BEE97.PNG */}
          <div className="lg:col-span-8 relative">
            <div className="relative rounded-[50px] overflow-hidden shadow-sm h-[500px]">
              <Image 
                src={services[activeTab].img} 
                alt={services[activeTab].title} 
                fill 
                className="object-cover"
                priority
              />
              {/* Overlay dégradé pour la lisibilité */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Carte flottante superposée */}
            <div className="relative -mt-32 mx-4 md:mx-10 p-10 md:p-14 bg-white rounded-[50px] shadow-xl border border-slate-50">
              <h3 className="text-4xl font-serif text-blue-900 mb-4">{services[activeTab].title}</h3>
              <p className="text-slate-500 mb-10 text-lg font-light leading-relaxed">
                {services[activeTab].desc}
              </p>

              <div className="space-y-8">
                <h4 className="text-[10px] uppercase font-bold text-blue-400 tracking-[0.3em]">Protocole étape par étape</h4>
                
                <div className="grid gap-8">
                  {services[activeTab].process.map((p, idx) => (
                    <div key={idx} className="flex gap-6">
                      <div className="shrink-0 w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 font-bold text-sm">
                        {idx + 1}
                      </div>
                      <div className="space-y-1">
                        <h5 className="font-bold text-blue-900 text-lg">{p.step}</h5>
                        <p className="text-slate-500 font-light leading-relaxed">{p.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Badges de confiance */}
              <div className="mt-12 pt-8 border-t border-slate-100 flex flex-wrap gap-8">
                <div className="flex items-center gap-2 text-emerald-600/80">
                  <MdCheckCircleOutline size={18} /> 
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Normes Stériles</span>
                </div>
                <div className="flex items-center gap-2 text-emerald-600/80">
                  <MdCheckCircleOutline size={18} /> 
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Surveillance Continue</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}