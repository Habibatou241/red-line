import React from 'react';

const Login = ({ onLoginSuccess }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici vous pouvez ajouter la logique de validation
    onLoginSuccess(); // Ceci redirigera vers le Dashboard
  };

  return (
    <div className="min-h-screen bg-[#f6d1b6]">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-md mx-auto bg-[#FFF3E0] p-8 rounded-lg shadow-md">
          <h2 className="text-2xl text-[#8B4513] font-semibold text-center mb-2">
            Connectez-vous à votre compte
          </h2>
          <p className="text-center text-[#8B4513] mb-6 text-sm">
            Veuillez saisir vos identifiants.
          </p>
          
          <form className="space-y-3" onSubmit={handleSubmit}>
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
                className="w-full px-3 py-1.5 border bg-[#fad9c1] rounded-md focus:outline-none focus:ring-2 focus:ring-[#1E3C58]"
              />
            </div>
            
            <div className="text-right">
              <a href="#" className="text-xs text-gray-600 hover:underline">
                Mot de passe oublié?
              </a>
            </div>
  
            <button 
              type="submit"
              className="w-full bg-[#c0601c] text-white py-1.5 rounded-md hover:bg-[#db7c38] transition duration-300"
            >
              Se connecter
            </button>
          </form>
  
          <div className="mt-4 text-center">
            <p className="text-[#8B4513] text-sm">Vous n'avez pas de compte?</p>
            <button 
              className="text-[#8B4513] font-semibold hover:underline mt-0.5 text-sm"
            >
              Inscrivez-vous
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;