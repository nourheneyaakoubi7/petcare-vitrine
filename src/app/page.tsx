import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="pt-20">
      <section className="relative min-h-[90vh] flex items-center bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2 space-y-8">
            <span className="text-blue-500 font-bold tracking-[0.3em] uppercase text-sm">Bienvenue chez PetCare</span>
            <h1 className="text-6xl lg:text-8xl font-serif text-blue-900 leading-[1.1]">
              L'excellence au service de vos <span className="italic font-light text-blue-400">animaux</span>.
            </h1>
            <p className="text-xl text-slate-500 font-light max-w-lg leading-relaxed">
              Une technologie de pointe et une équipe passionnée pour offrir à vos compagnons les meilleurs soins vétérinaires en Tunisie.
            </p>
            <div className="flex gap-5 pt-4">
              <Link href="/contact" className="bg-blue-600 text-white px-10 py-5 rounded-2xl font-bold shadow-xl shadow-blue-100 hover:bg-blue-700 transition">
                Prendre RDV
              </Link>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 relative">
            <div className="relative h-[600px] w-full rounded-[60px] overflow-hidden shadow-2xl skew-y-1">
              <Image src="/images/SOIN_CAT2.jpg" alt="Soin Chat" fill className="object-cover" />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-[30px] shadow-xl flex items-center gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">✓</div>
              <div>
                <p className="font-bold text-blue-900">Clinique Agréée</p>
                <p className="text-sm text-slate-400">Normes internationales</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}