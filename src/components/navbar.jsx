import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="z-10 bg-white flex justify-between items-center h-[70px] w-full px-4 md:px-8 lg:px-14 shadow-md">
      {/* Logo */}
      <div>
        <img src="logo.svg" alt="Logo" className="h-6 sm:h-8" />
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center font-semibold gap-[3vw]">
        <a href="#" className="hover:text-blue-600">Crypto Taxes</a>
        <a href="#" className="hover:text-blue-600">Free Tools</a>
        <a href="#" className="hover:text-blue-600">Resources Center</a>
        <div className="bg-blue-600 py-2 px-6 rounded-lg">
          <button className="text-white">Get Started</button>
        </div>
      </div>

      {/* Mobile Menu Toggle Button */}
      <div id="navbar-menu" className="md:hidden cursor-pointer" onClick={toggleMenu}>
        <img src="navbarmenu.svg" alt="Menu" className="h-4 sm:h-6 md:hidden" />
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-[70px] left-0 w-full bg-white shadow-lg flex flex-col items-center font-semibold space-y-4 py-6 z-20">
          <a href="#" className="hover:text-blue-600">Crypto Taxes</a>
          <a href="#" className="hover:text-blue-600">Free Tools</a>
          <a href="#" className="hover:text-blue-600">Resources Center</a>
          <div className="bg-blue-600 py-2 px-6 rounded-lg">
            <button className="text-white">Get Started</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
