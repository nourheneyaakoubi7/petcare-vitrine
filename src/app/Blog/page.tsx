"use client";
import { useState } from "react";
import Image from "next/image";

const blogPosts = [
  {
    id: 1,
    title: "L'importance de la lumière naturelle dans l'habitat moderne",
    date: "14 Avril 2026",
    category: "Design",
    excerpt: "Comment l'orientation d'une maison peut changer radicalement le bien-être de ses occupants...",
    content: "Le contenu complet de l'article sur la lumière naturelle va ici. L'architecture moderne privilégie les larges ouvertures pour maximiser l'apport solaire et réduire la consommation énergétique.",
    image: "/images/blog1.jpg",
  },
  {
    id: 2,
    title: "Béton brut et Minimalisme : Le duo gagnant",
    date: "02 Mars 2026",
    category: "Matériaux",
    excerpt: "Retour sur l'utilisation du béton comme élément esthétique central dans nos derniers projets...",
    content: "Le béton n'est plus seulement structurel. Il devient une finition noble, offrant une texture unique et une neutralité qui sublime le mobilier contemporain.",
    image: "/images/blog2.jpg",
  },
  {
    id: 3,
    title: "Architecture Durable en Tunisie : Défis et Opportunités",
    date: "20 Février 2026",
    category: "Écologie",
    excerpt: "Explorer les techniques ancestrales pour rafraîchir les bâtiments sans climatisation excessive...",
    content: "La Tunisie possède un héritage architectural bioclimatique riche. L'utilisation de la brique de terre cuite et des patios permet une régulation thermique naturelle.",
    image: "/images/blog3.webp",
  },
];

export default function BlogPage() {
  const [selectedPost, setSelectedPost] = useState<any>(null);

  return (
    <main className="min-h-screen pt-24 bg-white pb-20">
      {/* Header */}
      <div className="px-10 mb-16">
        <h1 className="text-5xl font-serif uppercase tracking-widest text-center">Journal</h1>
        <div className="h-[1px] w-20 bg-black mx-auto mt-6" />
      </div>

      {/* Grille d'articles */}
      <section className="px-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {blogPosts.map((post) => (
            <article 
              key={post.id} 
              className="group cursor-pointer"
              onClick={() => setSelectedPost(post)}
            >
              <div className="relative h-72 w-full mb-6 overflow-hidden bg-gray-100">
                <Image 
                  src={post.image} 
                  alt={post.title} 
                  fill 
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-white px-3 py-1 text-[10px] uppercase tracking-tighter font-bold text-black">
                  {post.category}
                </div>
              </div>

              <div className="space-y-3">
                <p className="text-[10px] text-gray-400 uppercase tracking-widest">{post.date}</p>
                <h2 className="text-xl font-serif leading-tight group-hover:text-gray-600 transition-colors">
                  {post.title}
                </h2>
                <p className="text-sm text-gray-500 font-light leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="pt-4">
                  <button className="text-[10px] uppercase tracking-[0.2em] font-bold border-b border-black pb-1 hover:text-gray-400 hover:border-gray-400 transition-all">
                    Lire l'article
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* MODAL DE L'ARTICLE */}
      {selectedPost && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
          <div className="bg-white max-w-4xl w-full max-h-[90vh] overflow-y-auto relative rounded-sm shadow-2xl">
            {/* Bouton Fermer */}
            <button 
              onClick={() => setSelectedPost(null)}
              className="fixed md:absolute top-6 right-6 text-3xl font-light hover:rotate-90 transition-transform z-[110] bg-white/80 rounded-full w-10 h-10 flex items-center justify-center"
            >
              ✕
            </button>

            <div className="flex flex-col">
              {/* Image d'en-tête du Modal */}
              <div className="relative w-full h-[400px]">
                <Image 
                  src={selectedPost.image} 
                  alt={selectedPost.title} 
                  fill 
                  className="object-cover"
                />
              </div>

              {/* Contenu du Modal */}
              <div className="p-8 md:p-16">
                <p className="text-xs text-gray-400 uppercase tracking-[0.3em] mb-4">
                  {selectedPost.category} — {selectedPost.date}
                </p>
                <h2 className="text-4xl font-serif mb-8 leading-tight">{selectedPost.title}</h2>
                <div className="h-[1px] w-20 bg-gray-200 mb-10" />
                <div className="text-gray-700 leading-loose text-lg font-light space-y-6">
                  {/* On simule un long texte ici */}
                  <p>{selectedPost.content}</p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}