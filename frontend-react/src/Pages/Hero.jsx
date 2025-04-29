import React from 'react';

const Hero = ({ onRegister }) => {
  return (
    <div className="relative h-[calc(100vh-96px)]">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/OR8.PNG')",
          backgroundColor: 'rgba(0,0,0,0.5)',
          backgroundBlend: 'overlay'
        }}
      >
      </div>
      
      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-start pt-24 text-[#F5F5DC] text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight shadow-text [text-shadow:_2px_2px_0_rgb(0_0_0),_-2px_-2px_0_rgb(0_0_0),_2px_-2px_0_rgb(0_0_0),_-2px_2px_0_rgb(0_0_0)]">
          IMAGINEZ QUE VOUS PUISSEZ GERER DES PROJETS D'INGENIERIE PROFESSIONNELS VIA UNE PLATEFORME EN LIGNE
        </h1>
        
        <button 
          onClick={onRegister}
          className="bg-[#F5F5DC] text-gray-800 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition duration-300 mt-12"
        >
          Lancez-vous maintenant
        </button>
      </div>
    </div>
  );
};

export default Hero;