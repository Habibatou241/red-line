import React from 'react';

const Register = ({ onLoginClick }) => {
  return (
    <div className="min-h-screen bg-[#F5F5DC] py-6">
      <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-center mb-1">Inscrivez-vous pour continuer.</h2>
        <p className="text-center text-gray-600 mb-4 text-sm">Veuillez remplir les champs suivants pour vous inscrire.</p>

        <form className="space-y-3">
          <div>
            <input
              type="text"
              placeholder="Prénom"
              className="w-full px-3 py-1.5 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#1E3C58]"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Nom"
              className="w-full px-3 py-1.5 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#1E3C58]"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email"
              className="w-full px-3 py-1.5 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#1E3C58]"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Mot de passe"
              className="w-full px-3 py-1.5 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#1E3C58]"
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
            className="w-full bg-[#1E3C58] text-white py-1.5 rounded-md hover:bg-[#2a5478] transition duration-300"
          >
            Rejoignez notre équipe
          </button>
        </form>

        <div className="mt-4 text-center">
          <p className="text-gray-600 text-sm">Vous avez déjà un compte?</p>
          <button 
            onClick={onLoginClick}
            className="text-[#1E3C58] font-semibold hover:underline mt-0.5 text-sm"
          >
            Connectez-vous
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;