
import React from 'react';
import { Link } from 'react-router-dom';
import { getIcon } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-soft border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <Link to="/" className="inline-block mb-6">
          <span className="text-3xl font-serif font-bold text-gold-500 tracking-widest block">L'HÉRITAGE</span>
          <span className="text-xs tracking-[0.4em] text-white/60">D'ALGER</span>
        </Link>
        
        <p className="text-white/40 mb-8 max-w-md mx-auto text-sm">
          Découvrez l'élégance intemporelle et l'hospitalité légendaire au cœur de la capitale algérienne.
        </p>

        <div className="flex justify-center space-x-6 mb-10">
          {['Facebook', 'Instagram', 'Linkedin'].map((social) => (
            <a key={social} href="#" className="text-white/60 hover:text-gold-500 transition-colors p-2 border border-white/10 rounded-full hover:border-gold-500">
              {getIcon(social, 20)}
            </a>
          ))}
        </div>

        <div className="text-white/30 text-xs tracking-widest uppercase flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 border-t border-white/5 pt-8">
          <span>&copy; 2024 L'HÉRITAGE D'ALGER</span>
          <div className="flex items-center space-x-2">
            <span>ALGERIA</span>
            <span>🇩🇿</span>
          </div>
          <Link to="/contact" className="hover:text-gold-500">MENTIONS LÉGALES</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
