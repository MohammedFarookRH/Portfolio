import React, { useState } from 'react';

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: 'home' },
    { name: 'About', path: 'about' },
    { name: 'Skills', path: 'skills' },
    { name: 'Projects', path: 'projects' },
    { name: 'Education', path: 'education' },
    { name: 'Contact', path: 'contact' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      setMenuOpen(false); // Close menu on mobile after click
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-[#1a1a2e]/90 backdrop-blur-md z-50 border-b border-purple-500/20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <button 
            onClick={() => scrollToSection('home')} 
            className="text-2xl font-bold text-white"
          >
            <div className="text-[1.6em] font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              MF
            </div>
          </button>
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.path)}
                className="text-[1.27em] text-gray-300 hover:text-white transition-colors duration-300 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-1 after:bg-gradient-to-r after:from-blue-500 after:to-purple-600 after:rounded after:shadow-lg after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left px-2 py-1"
              >
                {item.name}
              </button>
            ))}
          </div>
          {/* Hamburger Icon */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden mt-4 flex flex-col space-y-2 bg-[#1a1a2e]/95 rounded shadow-lg p-4">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.path)}
                className="text-lg text-gray-300 hover:text-white transition-colors duration-300 text-left"
              >
                {item.name}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;