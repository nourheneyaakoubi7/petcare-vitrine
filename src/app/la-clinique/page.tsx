import Image from "next/image";

export default function CliniquePage() {
  return (
    <main className="pt-32">
      {/* Header Section */}
      <section className="px-6 py-20 max-w-7xl mx-auto text-center">
        <span className="text-blue-500 font-bold tracking-[0.3em] uppercase text-xs">Immersion</span>
        <h1 className="text-5xl md:text-7xl font-serif text-blue-900 mt-4 mb-8">Un environnement <br/>serein & moderne</h1>
        <p className="max-w-2xl mx-auto text-slate-500 font-light text-lg leading-relaxed">
          Notre clinique a été conçue pour minimiser le stress de vos animaux tout en offrant 
          aux vétérinaires les outils technologiques les plus performants.
        </p>
      </section>

      {/* Main Showcase - Utilisation de CABINET.jpg */}
      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="relative h-[70vh] w-full rounded-[60px] overflow-hidden shadow-2xl">
            <Image 
              src="/petcare-vitrine/public/images/CABINET.jpg" 
              alt="Notre salle de soin principale" 
              fill 
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/10"></div>
          </div>
        </div>
      </section>

      {/* Grid Déstructurée - Utilisation de tes images CABINET 2, 3, 4, 5 */}
      <section className="px-6 py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          
          <div className="md:col-span-7 space-y-10">
            <div className="relative h-[500px] rounded-[50px] overflow-hidden shadow-lg rotate-1 hover:rotate-0 transition-transform duration-500">
              <Image src="/petcare-vitrine/public/images/CABINET3.jpg" alt="Equipement" fill className="object-cover" />
            </div>
            <div className="pr-10">
              <h3 className="text-3xl font-serif text-blue-900 mb-4">Hygiène Irréprochable</h3>
              <p className="text-slate-500 font-light">
                Chaque espace est stérilisé selon des protocoles hospitaliers stricts pour garantir 
                la sécurité de nos patients les plus fragiles.
              </p>
            </div>
          </div>

          <div className="md:col-span-5 space-y-10">
            <div className="relative h-[400px] rounded-[50px] overflow-hidden shadow-lg -rotate-2 hover:rotate-0 transition-transform duration-500">
              <Image src="/petcare-vitrine/public/images/CABINET2.webp" alt="Box Hospitalisation" fill className="object-cover" />
            </div>
            <div className="relative h-[300px] rounded-[50px] overflow-hidden shadow-lg border-8 border-white">
              <Image src="/petcare-vitrine/public/images/CABINET5.jpg" alt="Pharmacie" fill className="object-cover" />
            </div>
          </div>

        </div>
      </section>

      {/* Section Espace Chat - Utilisation de CABINET4.webp */}
      <section className="px-6 py-32 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl font-serif text-blue-900 mb-6">Zone "Cat Friendly"</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Nous savons que les chats ont besoin d'un calme absolu. C'est pourquoi nous avons 
              aménagé des zones de repos et de consultation totalement séparées des chiens.
            </p>
            <ul className="space-y-4">
              {['Diffuseurs de phéromones apaisantes', 'Parcours en hauteur', 'Silence total'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-blue-600 font-medium">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full md:w-1/2 relative h-[500px] rounded-full overflow-hidden border-[15px] border-blue-50">
             <Image src="/petcare-vitrine/public/images/CABINET4.webp" alt="Espace Chat" fill className="object-cover" />
          </div>
        </div>
      </section>
    </main>
  );
}