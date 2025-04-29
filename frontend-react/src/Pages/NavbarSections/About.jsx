import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* First Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-gray-900">
              Extract Insights from Qualitative Data. In minutes.
            </h1>
            
            <p className="text-gray-700 leading-relaxed">
              "OilTech Insights" représente une fusion de la technologie et de 
              l'analyse des données appliquées à l'industrie pétrolière et gazière 
              pour fournir des informations approfondies et exploitables qui 
              améliorent les opérations, augmentent la rentabilité et favorisent 
              l'innovation. Il s'agit d'utiliser la technologie moderne pour 
              résoudre des problèmes complexes en génie pétrolier, en 
              améliorant l'efficacité et l'efficience globales de l'industrie.
            </p>
          </div>

          {/* Right Image */}
          <div className="relative">
            <img 
              src="/OR9.png" 
              alt="Petroleum Analysis Setup"
              className="rounded-lg shadow-xl w-full"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-blue-500/30 rounded-lg"></div>
          </div>
        </div>
      </div>

      {/* Problems Section */}
      <div className="container mx-auto px-4 py-12 bg-gray-50">
        <h2 className="text-3xl font-bold text-center text-[#1E3C58] mb-8">
          Quels problèmes OilTech Insights résout-elle ?
        </h2>
        
        <p className="text-gray-700 text-center max-w-3xl mx-auto mb-12">
          La plateforme "OilTech Insights" est conçue pour résoudre plusieurs problèmes critiques auxquels l'industrie pétrolière et gazière est confrontée, notamment :
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <h3 className="font-semibold text-[#1E3C58] mb-2">
              Gestion des données massives
            </h3>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <h3 className="font-semibold text-[#1E3C58] mb-2">
              Précision des prévisions
            </h3>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <h3 className="font-semibold text-[#1E3C58] mb-2">
              Optimisation de la production
            </h3>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <h3 className="font-semibold text-[#1E3C58] mb-2">
              Identification des risques géologiques
            </h3>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <h3 className="font-semibold text-[#1E3C58] mb-2">
              Amélioration de l'efficacité des opérations
            </h3>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Left Image */}
          <div className="flex justify-center items-center lg:col-span-1">
            <img 
              src="/why1.PNG" 
              alt="Question Mark"
              className="w-64 h-64 object-contain"
            />
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:col-span-2">
            {/* Précision et Fiabilité */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-[#1E3C58] mb-3">Précision et Fiabilité</h3>
              <p className="text-gray-600 text-sm">
                Nos modèles de machine learning sont développés pour garantir des résultats fiables, validés par des experts du domaine.
              </p>
            </div>

            {/* Gain de Temps et D'efficacité */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-[#1E3C58] mb-3">Gain de Temps et D'efficacité</h3>
              <p className="text-gray-600 text-sm">
                L'automatisation du prétraitement et des analyses permet de réduire les erreurs humaines et d'augmenter la productivité.
              </p>
            </div>

            {/* Collaboration Optimisée */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-[#1E3C58] mb-3">Collaboration Optimisée</h3>
              <p className="text-gray-600 text-sm">
                Grâce à des outils de travail collaboratifs, nos utilisateurs peuvent travailler en équipe, partager des résultats, et faire avancer leurs projets communs en toute simplicité.
              </p>
            </div>

            {/* Utilité Académique et Professionnelle */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-[#1E3C58] mb-3">Utilité Académique et Professionnelle</h3>
              <p className="text-gray-600 text-sm">
                Notre plateforme est conçue pour répondre à la fois aux besoins de recherche académique et aux exigences de l'industrie pétrolière, offrant ainsi une solution flexible pour une large gamme d'utilisateurs.
              </p>
            </div>

            {/* Interface Intuitive */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-[#1E3C58] mb-3">Interface Intuitive</h3>
              <p className="text-gray-600 text-sm">
                Accessible même aux utilisateurs sans expertise technique poussée, la plateforme reste intuitive tout en offrant des fonctionnalités avancées pour les utilisateurs experts.
              </p>
            </div>

            {/* Sécurité et conformité */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-[#1E3C58] mb-3">Sécurité et conformité</h3>
              <p className="text-gray-600 text-sm">
                Garantie de la sécurité des données sensibles, tout en assurant la conformité avec les normes réglementaires en matière de gestion des données dans l'industrie pétrolière et gazière.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Previous sections remain unchanged */}

            {/* Get Started Section */}
            <div className="container mx-auto px-4 py-16">
              <h2 className="text-3xl font-bold text-center text-[#1E3C58] mb-12">
                ACCEDEZ A PIP DES AUJOURD'HUI
              </h2>
  
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {/* Direct Access Card */}
                <div className="bg-white p-8 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-[#1E3C58] mb-4">
                    Accès direct
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Démarrez votre période d'essai gratuite de 30 jours.
                  </p>
                  <button className="bg-[#1E3C58] text-white px-6 py-2 rounded-md hover:bg-[#1E3C58]/90 transition-colors">
                    Essayez gratuitement
                  </button>
                </div>
  
                {/* Purchase Options Card */}
                <div className="bg-white p-8 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-[#1E3C58] mb-4">
                    Mode d'achat
                  </h3>
                  <div className="space-y-4">
                    <button className="flex items-center space-x-3 text-gray-700 hover:text-[#1E3C58] transition-colors">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      <span>Explorer les prix</span>
                    </button>
                    <button className="flex items-center space-x-3 text-gray-700 hover:text-[#1E3C58] transition-colors">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      <span>Solliciter un devis</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
    </div>
  );
};

export default About;