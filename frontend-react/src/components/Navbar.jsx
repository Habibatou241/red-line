import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ onLoginClick, showNavigation = true }) => {
  return (
    <nav className="w-full">
      {/* First line */}
      <div className="bg-[#c0601c] h-12">
        <div className="flex justify-between items-center h-full px-16">
          <div className="flex items-center h-full">
            <Link to="/">
              <img 
                src="/logo_habs.png" 
                alt="Logo" 
                className="h-10 w-auto my-1"
              />
            </Link>
            <span className="text-[#F5F5DC] font-bold text-lg ml-3">
              PLATEFORME D'INGENIERIE PETROLIERE
            </span>
          </div>
          <div className="text-[#F5F5DC] text-sm">
            Une plateforme intelligente conçu pour des ingénieurs, par les ingénieurs.
          </div>
        </div>
      </div>

      {/* Second line - Navigation items */}
      {showNavigation && (
        <div className="bg-[#FFF3E0] py-2">
          <div className="flex justify-end px-16">
            <div className="space-x-6">
              <Link to="/about" className="font-semibold text-[#8B4513] hover:text-gray-900">ENTREPRISE</Link>
              <Link to="/technology" className="font-semibold text-[#8B4513] hover:text-gray-900">TECHNOLOGIE</Link>
              <Link to="/services" className="font-semibold text-[#8B4513] hover:text-gray-900">SERVICES</Link>
              <Link to="/contact" className="font-semibold text-[#8B4513] hover:text-gray-900">CONTACT</Link>
              <Link to="/login" className="font-semibold text-[#8B4513] hover:text-gray-900">LOGIN</Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
