import React, { useState, useEffect } from 'react';
import { Menu, X, Wifi } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-white/95 backdrop-blur-sm py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Wifi className="h-8 w-8 text-blue-600 mr-2" />
          <span className="text-xl font-bold text-blue-600">Federal Associados</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="#beneficios" className="text-gray-700 hover:text-blue-600 transition-colors">Benefícios</a>
          <a href="#planos" className="text-gray-700 hover:text-blue-600 transition-colors">Planos</a>
          <a href="https://federalassociados.com.br/login" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600 transition-colors">Login</a>
          <a href="https://federalassociados.com.br/boletos" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600 transition-colors">Fatura</a>
          <a href="#sobre" className="text-gray-700 hover:text-blue-600 transition-colors">Sobre Nós</a>
          <a href="#faq" className="text-gray-700 hover:text-blue-600 transition-colors">FAQ</a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-2">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a href="#beneficios" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-blue-600 transition-colors py-2">Benefícios</a>
            <a href="#planos" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-blue-600 transition-colors py-2">Planos</a>
            <a href="https://federalassociados.com.br/login" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-blue-600 transition-colors py-2">Login</a>
            <a href="https://federalassociados.com.br/boletos" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-blue-600 transition-colors py-2">Fatura</a>
            <a href="#sobre" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-blue-600 transition-colors py-2">Sobre Nós</a>
            <a href="#faq" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-blue-600 transition-colors py-2">FAQ</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;