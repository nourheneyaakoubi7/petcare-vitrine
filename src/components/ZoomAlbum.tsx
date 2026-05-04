export default function ZoomAlbum() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      {/* L'image de fond (ex: Un vétérinaire souriant ou un animal) */}
      <div 
        className="absolute inset-0 bg-cover bg-center animate-zoom"
        style={{ backgroundImage: "url('/images/hero-vet.jpg')" }} 
      />
      
      <div className="absolute inset-0 bg-blue-900/20" />

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-6">
        <h1 className="text-4xl md:text-6xl font-light tracking-widest uppercase">
          La Santé de vos Compagnons
        </h1>
        <p className="mt-4 text-sm md:text-lg font-extralight tracking-[0.3em]">
          Soins Experts & Amour pour vos Animaux
        </p>
      </div>
    </section>
  );
}