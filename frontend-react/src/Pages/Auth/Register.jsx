import React from 'react';

const Register = ({ onLoginClick }) => {
  return (
    <div className="min-h-screen bg-[#f6d1b6] py-6">
      <div className="max-w-md mx-auto bg-[#FFF3E0] p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold text-[#8B4513] text-center mb-1">Inscrivez-vous pour continuer.</h2>
        <p className="text-center text-[#8B4513] mb-4 text-sm">Veuillez remplir les champs suivants pour vous inscrire.</p>

        <form className="space-y-3">
          <div>
            <label className="block text-[#8B4513] text-sm mb-1">
              Prénom
            </label>
            <input
              type="text"
              placeholder="Entrez votre prénom"
              className="w-full px-3 py-1.5 border rounded-md bg-[#fad9c1] focus:outline-none focus:ring-2 focus:ring-[#1E3C58]"
            />
          </div>
          <div>
            <label className="block text-[#8B4513] text-sm mb-1">
              Nom
            </label>
            <input
              type="text"
              placeholder="Entrez votre nom"
              className="w-full px-3 py-1.5 border rounded-md bg-[#fad9c1] focus:outline-none focus:ring-2 focus:ring-[#1E3C58]"
            />
          </div>
          <div>
            <label className="block text-[#8B4513] text-sm mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="Entrez votre email"
              className="w-full px-3 py-1.5 border rounded-md bg-[#fad9c1] focus:outline-none focus:ring-2 focus:ring-[#1E3C58]"
            />
          </div>
          <div>
            <label className="block text-[#8B4513] text-sm mb-1">
              Mot de passe
            </label>
            <input
              type="password"
              placeholder="Entrez votre mot de passe"
              className="w-full px-3 py-1.5 border rounded-md bg-[#fad9c1] focus:outline-none focus:ring-2 focus:ring-[#1E3C58]"
            />
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="terms"
              className="mr-2"
            />
            <label htmlFor="terms" className="text-xs text-gray-600">
              J'accepte les <a href="#" className="text-[#1E3C58]">conditions d'utilisation</a> et 
              la <a href="#" className="text-[#1E3C58]">politique de confidentialité</a>
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-[#c0601c] text-white py-1.5 rounded-md hover:bg-[#db7c38] transition duration-300"
          >
            Rejoignez notre équipe
          </button>
        </form>

        <div className="mt-4 text-center">
          <p className="text-[#8B4513] text-sm">Vous avez déjà un compte?</p>
          <button 
            onClick={onLoginClick}
            className="text-[#8B4513] font-semibold hover:underline mt-0.5 text-sm"
          >
            Connectez-vous
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
