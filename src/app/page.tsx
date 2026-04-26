"use client";
import ZoomAlbum from "../components/ZoomAlbum";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      {/* 1. HERO SECTION (Zoom Album) */}
      <section className="h-screen">
        <ZoomAlbum />
      </section>

      {/* 2. PREVIEW : QUI SOMMES-NOUS (Mobile Friendly) */}
      <section className="py-20 px-6 md:px-20 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <h2 className="text-xs uppercase tracking-[0.4em] text-gray-400 mb-4 font-bold">L'Agence</h2>
            <h3 className="text-3xl md:text-5xl font-serif mb-8 leading-tight">Concevoir l'exceptionnel depuis 2026.</h3>
            <p className="text-gray-500 font-light leading-relaxed mb-8">
              Nous croyons que l'architecture est le point de rencontre entre l'art et la fonction. 
              Chaque projet est une nouvelle page blanche où nous écrivons votre histoire.
            </p>
            <Link href="/qui-sommes-nous" className="text-xs uppercase tracking-widest font-bold border-b-2 border-black pb-2 hover:text-gray-400 hover:border-gray-400 transition-all">
              Découvrir l'équipe
            </Link>
          </div>
          <div className="w-full md:w-1/2 h-[400px] relative">
            <Image src="/images/equipe-group.jpg" alt="Bureau" fill className="object-cover rounded-sm shadow-xl" />
          </div>
        </div>
      </section>

      {/* 3. PREVIEW : SERVICES (Mise à jour avec tes vrais noms d'images) */}
<section className="py-20 bg-gray-50 px-6">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-2xl font-serif uppercase tracking-widest">Nos Domaines</h2>
    </div>
    
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {/* On utilise les noms exacts que tu as définis dans ta page Services */}
      {[
        { name: 'Résidentiel', img: '/images/cat-res.jpg' },
        { name: 'Bureaux', img: '/images/cat-off.webp' },
        { name: 'Commercial', img: '/images/cat-com.jpg' },
        { name: 'Industriel', img: '/images/cat-ind.webp' }
      ].map((cat, i) => (
        <Link href="/services" key={i} className="group relative h-80 overflow-hidden">
          <Image 
            src={cat.img} 
            alt={cat.name} 
            fill 
            className="object-cover transition-transform duration-700 group-hover:scale-110" 
          />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white text-[10px] uppercase tracking-[0.3em] font-bold border border-white/40 px-6 py-2">
              {cat.name}
            </span>
          </div>
        </Link>
      ))}
    </div>
  </div>
</section>

      {/* 4. PREVIEW : BLOG (Last Articles) */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-serif uppercase tracking-wider">Dernières Pensées</h2>
            <div className="h-1 w-12 bg-black mt-4" />
          </div>
          <Link href="/Blog" className="hidden md:block text-[10px] uppercase tracking-widest font-bold text-gray-400 hover:text-black">
            Voir tout le journal →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[1, 2].map((id) => (
            <div key={id} className="space-y-4">
              <div className="relative h-64 w-full bg-gray-100">
                <Image src={`/images/blog${id}.jpg`} alt="Blog" fill className="object-cover grayscale hover:grayscale-0 transition-all" />
              </div>
              <h4 className="text-lg font-serif">Projet de rénovation durable à Tunis</h4>
              <p className="text-sm text-gray-500 line-clamp-2">Comment nous avons intégré des matériaux locaux dans ce projet...</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. CTA : CONTACT QUICK LINK */}
      <section className="py-20 bg-black text-white text-center px-6">
        <h2 className="text-2xl md:text-4xl font-serif mb-10 tracking-wide">Prêt à donner vie à votre projet ?</h2>
        <Link href="/contact" className="inline-block border border-white/30 px-10 py-4 hover:bg-white hover:text-black transition-all uppercase text-[10px] tracking-[0.4em]">
          Prendre Rendez-vous
        </Link>
      </section>
    </main>
  );
}