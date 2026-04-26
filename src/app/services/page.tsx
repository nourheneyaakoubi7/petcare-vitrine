"use client";
import { useState } from "react";
import Image from "next/image";

// 1. Définition des catégories
const categories = [
  { id: "residentiel", name: "Résidentiel", image: "/images/cat-res.jpg" },
  { id: "bureaux", name: "Bureaux", image: "/images/cat-off.webp" },
  { id: "commercial", name: "Commercial", image: "/images/cat-com.jpg" },
  { id: "industriel", name: "Industriel", image: "/images/cat-ind.webp" },
];

// 2. Projets par défaut
const projectsData = [
  { 
    id: 1, 
    category: "residentiel", 
    title: "Villa Méditerranéenne", 
    location: "Gammarth", 
    image: "/images/p-res.jpg" 
  },
  { 
    id: 2, 
    category: "bureaux", 
    title: "Centre d'Affaires Horizon", 
    location: "Lac 2", 
    image: "/images/p-off.jpg" 
  },
  { 
    id: 3, 
    category: "commercial", 
    title: "Showroom Luxe", 
    location: "Sousse", 
    image: "/images/p-com.webp" 
  },
  { 
    id: 4, 
    category: "industriel", 
    title: "Usine Éco-Tech", 
    location: "Ben Arous", 
    image: "/images/p-ind.jpg" 
  },
];

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState("residentiel");

  // Filtrer les projets selon la catégorie sélectionnée
  const filteredProjects = projectsData.filter(p => p.category === activeTab);

  return (
    <main className="min-h-screen pt-24 bg-white">
      <div className="text-center mb-16 px-6">
        <h1 className="text-4xl font-serif uppercase tracking-[0.3em] mb-4">Nos Services</h1>
        <p className="text-gray-400 font-light max-w-2xl mx-auto">
          Nous concevons des espaces adaptés à chaque besoin, du confort privé à l'efficacité industrielle.
        </p>
      </div>

      {/* SECTION CERCLES (MENU) */}
      <section className="flex flex-wrap justify-center gap-8 md:gap-16 px-10 mb-20">
        {categories.map((cat) => (
          <div 
            key={cat.id}
            onClick={() => setActiveTab(cat.id)}
            className="flex flex-col items-center cursor-pointer group"
          >
            <div className={`
              relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-2 transition-all duration-300
              ${activeTab === cat.id ? "border-black scale-110 shadow-lg" : "border-transparent opacity-60 group-hover:opacity-100"}
            `}>
              <Image 
                src={cat.image} 
                alt={cat.name} 
                fill 
                className="object-cover"
              />
            </div>
            <span className={`mt-4 text-[11px] uppercase tracking-widest font-medium ${activeTab === cat.id ? "text-black" : "text-gray-400"}`}>
              {cat.name}
            </span>
          </div>
        ))}
      </section>

      {/* SECTION PROJETS FILTRÉS */}
      <section className="px-10 pb-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group relative overflow-hidden bg-gray-50 aspect-square">
              <Image 
                src={project.image} 
                alt={project.title} 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Overlay qui apparaît au survol */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 text-white">
                <h3 className="text-xl font-serif uppercase tracking-wider">{project.title}</h3>
                <p className="text-xs font-light tracking-[0.2em] mt-2">{project.location}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}