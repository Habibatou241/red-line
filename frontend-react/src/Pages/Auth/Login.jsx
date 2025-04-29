import React from 'react';

const Login = ({ onLoginSuccess }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici vous pouvez ajouter la logique de validation
    onLoginSuccess(); // Ceci redirigera vers le Dashboard
  };

  return (
    <div className="min-h-screen bg-[#FFF3E0] py-6">
      <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-center mb-1">Connectez-vous à votre compte</h2>
        <p className="text-center text-gray-600 mb-4 text-sm">Veuillez saisir vos identifiants</p>
        
        <form className="space-y-3" onSubmit={handleSubmit}>
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
          
          <div className="text-right">
            <a href="#" className="text-xs text-gray-600 hover:text-[#1E3C58]">
              Mot de passe oublié?
            </a>
          </div>

          <button 
            type="submit"
            className="w-full bg-[#1E3C58] text-white py-1.5 rounded-md hover:bg-[#2a5478] transition duration-300"
          >
            Se connecter
          </button>
        </form>

        <div className="mt-4 text-center">
          <p className="text-gray-600 text-sm">Vous n'avez pas de compte?</p>
          <button 
            className="text-[#1E3C58] font-semibold hover:underline mt-0.5 text-sm"
          >
            Inscrivez-vous
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;