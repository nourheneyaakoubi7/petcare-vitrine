export default function ZoomAlbum() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      {/* L'image qui zoome */}
      <div 
        className="absolute inset-0 bg-cover bg-center animate-zoom"
        style={{ backgroundImage: "url('/images/votre-image.jpg')" }} 
      />
      
      {/* Overlay sombre pour que le texte soit lisible */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Texte par dessus */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
        <h1 className="text-6xl font-light tracking-widest uppercase">
          L'Art de l'Espace
        </h1>
        <p className="mt-4 text-lg font-extralight tracking-[0.3em]">
          Architecture & Design d'Intérieur
        </p>
      </div>
    </section>
  );
}