"use client";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    nomComplet: "",
    telephone: "",
    email: "",
    objet: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert("C'est envoyé ! Je vous répondrai très prochainement.");
      // Réinitialiser le formulaire
      setFormData({ nomComplet: "", telephone: "", email: "", objet: "", message: "" });
    } else {
      alert("Oups ! Une erreur est survenue.");
    }
  } catch (error) {
    console.error(error);
  }
};

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <main className="min-h-screen pt-24 bg-white pb-20">
      <div className="px-10 mb-16 text-center">
        <h1 className="text-4xl font-serif uppercase tracking-[0.3em]">Contacter Nous</h1>
        <p className="text-gray-400 mt-4 font-light">Parlons de votre futur projet.</p>
      </div>

      <div className="flex flex-col lg:flex-row max-w-7xl mx-auto px-6 gap-12">
        
        {/* GAUCHE : FORMULAIRE */}
        <div className="w-full lg:w-1/2">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-[10px] uppercase tracking-widest text-gray-400 mb-2 font-bold">Nom Complet</label>
              <input 
                type="text" 
                name="nomComplet"
                required
                onChange={handleChange}
                className="w-full border-b border-gray-200 py-3 focus:border-black outline-none transition-colors font-light"
                placeholder="Votre nom..."
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-[10px] uppercase tracking-widest text-gray-400 mb-2 font-bold">Numéro de Téléphone</label>
                <input 
                  type="tel" 
                  name="telephone"
                  onChange={handleChange}
                  className="w-full border-b border-gray-200 py-3 focus:border-black outline-none transition-colors font-light"
                  placeholder="+216 -- --- ---"
                />
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-widest text-gray-400 mb-2 font-bold">Email</label>
                <input 
                  type="email" 
                  name="email"
                  required
                  onChange={handleChange}
                  className="w-full border-b border-gray-200 py-3 focus:border-black outline-none transition-colors font-light"
                  placeholder="exemple@mail.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-[10px] uppercase tracking-widest text-gray-400 mb-2 font-bold">Objet</label>
              <input 
                type="text" 
                name="objet"
                onChange={handleChange}
                className="w-full border-b border-gray-200 py-3 focus:border-black outline-none transition-colors font-light"
                placeholder="Sujet de votre message"
              />
            </div>

            <div>
              <label className="block text-[10px] uppercase tracking-widest text-gray-400 mb-2 font-bold">Message</label>
              <textarea 
                name="message"
                required
                rows={4}
                onChange={handleChange}
                className="w-full border-b border-gray-200 py-3 focus:border-black outline-none transition-colors font-light resize-none"
                placeholder="Décrivez votre projet..."
              />
            </div>

            <button 
              type="submit"
              className="mt-8 bg-black text-white px-12 py-4 text-[10px] uppercase tracking-[0.3em] hover:bg-gray-800 transition-colors w-full md:w-auto"
            >
              Envoyer
            </button>
          </form>
        </div>

        {/* DROITE : CARTE & ADRESSE */}
        <div className="w-full lg:w-1/2 flex flex-col">
          <div className="bg-gray-50 p-8 mb-6 border border-gray-100">
            <h3 className="text-xs uppercase tracking-widest font-bold mb-4">Notre Bureau</h3>
            <p className="text-gray-500 font-light text-sm leading-loose">
              [Les Berges du Lac](http://googleusercontent.com/map_location_reference/2) 1<br />
              Tunis, Tunisie<br />
              T : +216 71 000 000
            </p>
          </div>
          
          <div className="flex-grow min-h-[400px] grayscale hover:grayscale-0 transition-all duration-700">
            {/* Intégration Google Maps via Iframe */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3193.435728362473!2d10.2321962!3d36.8297779!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd3539d9ddbe5f%3A0x39b3024965506cf5!2sLes%20Berges%20du%20Lac%2C%20Tunis!5e0!3m2!1sfr!2stn!4v1714137000000!5m2!1sfr!2stn" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

      </div>
    </main>
  );
}