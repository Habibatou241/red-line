import React, { useState } from 'react';

const Services = () => {
  const [activeService, setActiveService] = useState(null);

  const services = [
    {
      id: '01',
      color: 'bg-purple-600',
      title: 'Importation de données, pré-traitement et analyse',
      description: "L'importation consiste à récupérer les données depuis diverses sources, le pré-traitement pour nettoyer et transformer les données, l'analyse permet d'explorer, visualiser et appliquer des techniques pour extraire des informations significatives",
      position: 'left'
    },
    {
      id: '02',
      color: 'bg-teal-500',
      title: 'Algorithmes de machine learning',
      description: "Les algorithmes d'analyse de données, supervisés ou non supervisés, permettent de résoudre divers problèmes en maximisant la précision et l'efficacité des modèles. Leur combinaison permet d'obtenir des résultats robustes et adaptés aux données complexes.",
      position: 'right'
    },
    {
      id: '03',
      color: 'bg-pink-400',
      title: 'Classification et prédiction des faciès',
      description: "La classification regroupe les faciès en différents types, tandis que la prédiction estime les faciès géologiques via des modèles statistiques ou d'apprentissage automatique à partir des données de diagraphies et de carottage.",
      position: 'left'
    },
    {
      id: '04',
      color: 'bg-orange-400',
      title: 'Calcul et prédiction des propriétés pétrophysiques',
      description: "Evaluées à partir de données géophysiques, de forages et de tests de laboratoire, les propriétés comme le volume d'argile, la porosité effective et la saturation en eau sont cruciales pour évaluer et optimiser le potentiel de production des réservoirs pétroliers.",
      position: 'right'
    },
    {
      id: '05',
      color: 'bg-blue-300',
      title: 'Prédiction de la production pétrolière',
      description: "L'analyse de la production pétrolière utilise des modèles statistiques et d'apprentissage automatique pour estimer les rendements futurs en tenant compte des propriétés du réservoir et des données opérationnelles. Elle permet d'optimiser les stratégies d'exploitation, réduire les coûts et maximiser la rentabilité",
      position: 'left'
    },
    {
      id: '06',
      color: 'bg-pink-300',
      title: 'Partage des documents, collaboration et exportation des travaux ou projets',
      description: "Ces fonctionnalités permettent aux utilisateurs de partager, collaborer en temps réel et exporter leurs projets sous divers formats. Elles optimisent la productivité et l'efficacité dans un environnement de travail collaboratif.",
      position: 'right'
    }
  ];

  const handleServiceClick = (id) => {
    setActiveService(activeService === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-white py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-16">
          SERVICES
        </h1>

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200"></div>

          {/* Services Timeline */}
          <div className="space-y-20">
            {services.map((service) => (
              <div key={service.id} className="relative">
                {/* Circle Number */}
                <button 
                  onClick={() => handleServiceClick(service.id)}
                  className={`absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2
                    w-12 h-12 rounded-full ${service.color} text-white
                    flex items-center justify-center font-semibold z-10
                    hover:scale-110 transition-transform cursor-pointer`}
                >
                  {service.id}
                </button>

                {/* Content */}
                <div className={`flex ${service.position === 'left' ? 'justify-start' : 'justify-end'} items-center`}>
                  <div className={`w-5/12 ${service.position === 'right' && 'order-2'}`}>
                    <div className={`p-4 ${service.color} bg-opacity-10 rounded-lg`}>
                      <p className={`text-sm ${service.color.replace('bg-', 'text-')}`}>
                        {service.title}
                      </p>
                      {activeService === service.id && (
                        <p className={`mt-2 text-sm text-gray-600 transition-all duration-300`}>
                          {service.description}
                        </p>
                      )}
                    </div>
                  </div>
                  {/* Colored Bar */}
                  <div className={`w-5/12 h-2 ${service.color} ${service.position === 'left' ? 'ml-auto' : 'mr-auto'}`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;