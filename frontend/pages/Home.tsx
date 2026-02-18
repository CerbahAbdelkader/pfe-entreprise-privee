
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Star } from 'lucide-react';
import { ROOMS, SERVICES, getIcon } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1920&q=80"
            alt="Hotel Lobby Algiers"
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark/60 via-dark/40 to-dark"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} className="text-gold-500 fill-gold-500 mx-1" size={16} />
            ))}
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight animate-fade-up">
            Une expérience d’exception <br /> <span className="text-gold-500">au cœur de l’Algérie</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-10 tracking-wide font-light animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Confort, élégance et hospitalité authentique dans un cadre somptueux.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <Link to="/booking" className="w-full sm:w-auto px-10 py-4 bg-gold-500 hover:bg-gold-600 text-dark font-bold text-lg rounded transition-all shadow-lg hover:shadow-gold-500/20">
              Réserver votre séjour
            </Link>
            <Link to="/rooms" className="w-full sm:w-auto px-10 py-4 border border-white/20 hover:border-gold-500 text-white hover:text-gold-500 font-medium text-lg rounded transition-all">
              Découvrir nos chambres
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-dark">
        <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 space-y-8">
            <span className="text-gold-500 tracking-[0.3em] font-medium uppercase text-sm">Héritage & Prestige</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white leading-tight">
              À propos de <br /> notre hôtel
            </h2>
            <p className="text-white/60 leading-relaxed text-lg">
              Situé au carrefour de l'histoire et de la modernité, L'Héritage d'Alger incarne le summum du luxe algérien. Chaque détail a été pensé pour vous offrir une expérience sensorielle unique, mêlant architecture traditionnelle et services de classe mondiale.
            </p>
            <p className="text-white/60 leading-relaxed text-lg">
              Notre équipe dévouée vous accueille avec la chaleur légendaire de l'hospitalité algérienne, garantissant que chaque moment de votre séjour soit empreint de serrénité et de raffinement.
            </p>
            <div className="pt-4">
              <Link to="/services" className="text-gold-500 flex items-center gap-2 font-medium hover:gap-4 transition-all">
                EN SAVOIR PLUS <ChevronRight size={18} />
              </Link>
            </div>
          </div>
          <div className="flex-1 relative group">
            <div className="absolute -inset-4 border border-gold-500/30 rounded-lg group-hover:inset-0 transition-all duration-500"></div>
            <img
              src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80"
              alt="Luxury Interior"
              className="relative z-10 rounded shadow-2xl grayscale-[30%] group-hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-dark-soft luxury-gradient">
        <div className="max-w-7xl mx-auto px-4 text-center mb-16">
          <span className="text-gold-500 tracking-[0.3em] font-medium uppercase text-sm block mb-4">L'excellence au quotidien</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Nos Services Exclusifs</h2>
          <div className="w-24 h-1 bg-gold-500 mx-auto"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service, index) => (
            <div key={service.id} className="group bg-dark p-8 rounded border border-white/5 hover:border-gold-500/50 transition-all duration-500 hover:-translate-y-2">
              <div className="text-gold-500 mb-6 group-hover:scale-110 transition-transform duration-300">
                {getIcon(service.icon, 40)}
              </div>
              <h3 className="text-xl font-serif font-bold text-white mb-4">{service.name}</h3>
              <p className="text-white/50 text-sm leading-relaxed mb-6">{service.description}</p>
              <Link to={`/services#${service.id}`} className="inline-flex items-center text-gold-500 text-sm font-medium tracking-wide hover:gap-2 transition-all duration-300">
                EN SAVOIR PLUS <ChevronRight size={16} className="ml-1" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Rooms Preview Section */}
      <section className="py-24 bg-dark">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <span className="text-gold-500 tracking-[0.3em] font-medium uppercase text-sm block mb-4">Confort & Sérénité</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">Nos Chambres</h2>
            </div>
            <Link to="/rooms" className="px-8 py-3 border border-white/10 text-white hover:bg-gold-500 hover:text-dark font-medium rounded transition-all">
              Voir toutes les chambres
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {ROOMS.slice(0, 3).map((room) => (
              <Link to={`/rooms/${room.id}`} key={room.id} className="group overflow-hidden rounded-lg bg-dark-card border border-white/5 block hover:border-gold-500/30 transition-all duration-500">
                <div className="relative h-72 overflow-hidden">
                  {/* Fixed room.name to room.type */}
                  <img
                    src={room.image}
                    alt={room.type}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 bg-dark/80 backdrop-blur-md px-4 py-2 rounded text-gold-500 font-bold border border-gold-500/20">
                    {room.price.toLocaleString()} DZD
                  </div>
                </div>
                <div className="p-8">
                  {/* Fixed room.name to room.type */}
                  <h3 className="text-2xl font-serif font-bold text-white mb-3 group-hover:text-gold-500 transition-colors">{room.type}</h3>
                  <p className="text-white/50 text-sm mb-6 line-clamp-2 leading-relaxed">{room.description}</p>
                  <span
                    className="flex items-center gap-2 text-gold-500 font-medium group-hover:gap-4 transition-all"
                  >
                    VOIR DÉTAILS <ChevronRight size={18} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1551882547-ff43c63fedfe?auto=format&fit=crop&w=1920&q=80"
            alt="View Algiers Night"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-dark/80 backdrop-blur-sm"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">Réservez votre séjour dès maintenant</h2>
          <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto font-light">
            Profitez d’un confort exceptionnel et de services haut de gamme au cœur de la Méditerranée.
          </p>
          <Link to="/booking" className="inline-block px-12 py-5 bg-gold-500 hover:bg-gold-600 text-dark font-bold text-xl rounded transition-all shadow-xl hover:shadow-gold-500/40 transform hover:-translate-y-1">
            Vérifier la disponibilité
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
