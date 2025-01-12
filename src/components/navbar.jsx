// import React from 'react'

// const navbar = () => {
//     return (
//         <div className='z-10 bg-white flex justify-between items-center h-[70px] w-full px-14'>
//             <div>
//                 <img src="logo.svg" alt="loading..." />
//             </div>
//             <div id='navbar-menu'>
//                 <img src="navbarmenu.svg" alt="Navbar Menu" />
//             </div>
//             <div className='flex items-center font-semibold gap-10'>
//                 <a href="#">Crypto Taxes</a>
//                 <a href="#">Free Tools</a>
//                 <a href="#">Resouces center</a>
//                 <div className='bg-use py-2 px-6 rounded-lg'>
//                     <button className='text-white'>Get Started</button>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default navbar


import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="z-10 bg-white flex justify-between items-center h-[70px] w-full px-4 md:px-14 shadow-md">
      {/* Logo */}
      <div>
        <img src="logo.svg" alt="Logo" className="h-8" />
      </div>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center font-semibold gap-10">
        <a href="#" className="hover:text-blue-600">Crypto Taxes</a>
        <a href="#" className="hover:text-blue-600">Free Tools</a>
        <a href="#" className="hover:text-blue-600">Resources Center</a>
        <div className="bg-blue-600 py-2 px-6 rounded-lg">
          <button className="text-white">Get Started</button>
        </div>
      </div>

      {/* Mobile Menu Toggle Button */}
      <div
        id="navbar-menu"
        className="lg:hidden cursor-pointer"
        onClick={toggleMenu}
      >
        <img src="navbarmenu.svg" alt="Menu" className="h-6" />
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
