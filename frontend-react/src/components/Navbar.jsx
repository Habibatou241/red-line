import React from 'react';

const Navbar = ({ onLoginClick, showNavigation = true }) => {
  return (
    <nav className="w-full">
      {/* First line */}
      <div className="bg-[#c0601c] h-16">
        <div className="flex justify-between items-center h-full">
          <div className="flex items-center h-full">
            <img 
              src="/logo_habs.png" 
              alt="Logo" 
              className="h-full w-auto"
            />
            <span className="text-[#F5F5DC] font-bold text-xl ml-3">
              PLATEFORME D'INGENIERIE PETROLIERE
            </span>
          </div>
          <div className="text-[#F5F5DC] text-sm pr-0">
            Conçu pour les ingénieurs, par les ingénieurs.
          </div>
        </div>
      </div>

      {/* Second line - Navigation items (conditional rendering) */}
      {showNavigation && (
        <div className="bg-[#F5F5DC] py-2">
          <div className="flex justify-end pr-4">
            <div className="space-x-6">
              <a href="#" className="text-gray-700 hover:text-gray-900">ENTREPRISE</a>
              <a href="#" className="text-gray-700 hover:text-gray-900">TECHNOLOGIE</a>
              <a href="#" className="text-gray-700 hover:text-gray-900">SERVICES</a>
              <a href="#" className="text-gray-700 hover:text-gray-900">CONTACT</a>
              <button 
                onClick={onLoginClick}
                className="text-gray-700 hover:text-gray-900"
              >
                LOGIN
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;