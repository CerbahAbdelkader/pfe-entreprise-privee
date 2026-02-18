
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Accueil', path: '/' },
    { name: 'Chambres', path: '/rooms' },
    { name: 'Services', path: '/services' },
    { name: 'Événements', path: '/events' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-dark shadow-xl py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex flex-col">
            <span className="text-2xl font-serif font-bold tracking-widest text-gold-500">L'HÉRITAGE</span>
            <span className="text-[10px] tracking-[0.3em] text-white/70 -mt-1">D'ALGER LUXURY HOTEL</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium tracking-wide hover:text-gold-500 transition-colors ${location.pathname === link.path ? 'text-gold-500' : 'text-white'}`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/booking"
              className="bg-gold-500 hover:bg-gold-600 text-dark font-semibold px-6 py-2.5 rounded transition-all duration-300 transform hover:scale-105 active:scale-95"
            >
              Réserver
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-gold-500 transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-dark/95 z-40 transition-transform duration-500 ease-in-out md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8 px-6">
          <button onClick={() => setIsOpen(false)} className="absolute top-6 right-6 text-white"><X size={32} /></button>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="text-2xl font-serif tracking-widest text-white hover:text-gold-500"
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/booking"
            className="w-full text-center bg-gold-500 text-dark font-bold py-4 rounded-lg text-lg"
          >
            Réserver maintenant
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
