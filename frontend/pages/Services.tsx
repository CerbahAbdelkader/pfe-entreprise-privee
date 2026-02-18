
import React from 'react';
import { SERVICES, getIcon } from '../constants';

const Services: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-dark animate-fade-in">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <span className="text-gold-500 tracking-[0.3em] font-medium uppercase text-sm block mb-4">Luxe & Bien-être</span>
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6">Nos Services Exclusifs</h1>
          <p className="text-white/50 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            Nous transformons votre séjour en une expérience transcendante grâce à notre gamme de services personnalisés et nos installations de premier plan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {SERVICES.map((service, index) => (
            <div key={service.id} id={service.id} className={`group flex flex-col md:flex-row bg-dark-card rounded-2xl overflow-hidden border border-white/5 hover:border-gold-500/20 transition-all duration-500 shadow-2xl ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
              <div className="md:w-1/2 h-80 md:h-auto relative overflow-hidden">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-dark/20 group-hover:bg-transparent transition-all"></div>
              </div>
              <div className="md:w-1/2 p-10 flex flex-col justify-center bg-gradient-to-br from-dark-soft to-dark">
                <div className="text-gold-500 mb-6 bg-gold-500/10 w-fit p-4 rounded-full">
                  {getIcon(service.icon, 32)}
                </div>
                <h2 className="text-3xl font-serif font-bold text-white mb-4 group-hover:text-gold-500 transition-colors">
                  {service.name}
                </h2>
                <p className="text-white/50 leading-relaxed mb-6">
                  {service.description} Vivez des moments uniques grâce à notre souci du détail et notre engagement envers l'excellence.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-[10px] tracking-widest font-bold border border-white/10 px-3 py-1 rounded text-white/40 uppercase">Disponible 24/7</span>
                  <span className="text-[10px] tracking-widest font-bold border border-white/10 px-3 py-1 rounded text-white/40 uppercase">Premium</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
