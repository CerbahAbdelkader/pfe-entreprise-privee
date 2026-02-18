
import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Users, Calendar, Music, Utensils, ChevronRight } from 'lucide-react';
import { EVENTS } from '../constants';

const Events: React.FC = () => {
  return (
    <div className="bg-dark animate-fade-in">
      {/* Hero Header */}
      <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1920&q=80" 
          alt="Luxury Events Algiers" 
          className="absolute inset-0 w-full h-full object-cover scale-105 opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark/80 via-dark/40 to-dark"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <span className="text-gold-500 tracking-[0.4em] font-medium uppercase text-sm block mb-6">Des moments inoubliables</span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight">Événements & Célébrations</h1>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto font-light">
            De somptueux mariages aux galas d'entreprise prestigieux, nous donnons vie à vos visions les plus ambitieuses.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-24">
        {/* Intro Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-32 border-b border-white/5 pb-16">
          <div className="text-center group">
            <div className="text-gold-500 mb-4 flex justify-center group-hover:scale-110 transition-transform"><Users size={32} /></div>
            <div className="text-2xl font-serif text-white mb-1">Plus de 500</div>
            <div className="text-white/40 text-xs uppercase tracking-widest">Capacité d'accueil</div>
          </div>
          <div className="text-center group border-x border-white/5">
            <div className="text-gold-500 mb-4 flex justify-center group-hover:scale-110 transition-transform"><Utensils size={32} /></div>
            <div className="text-2xl font-serif text-white mb-1">Cuisine Élite</div>
            <div className="text-white/40 text-xs uppercase tracking-widest">Service Traiteur</div>
          </div>
          <div className="text-center group border-r border-white/5">
            <div className="text-gold-500 mb-4 flex justify-center group-hover:scale-110 transition-transform"><Music size={32} /></div>
            <div className="text-2xl font-serif text-white mb-1">Son & Lumière</div>
            <div className="text-white/40 text-xs uppercase tracking-widest">Technologie de pointe</div>
          </div>
          <div className="text-center group">
            <div className="text-gold-500 mb-4 flex justify-center group-hover:scale-110 transition-transform"><Calendar size={32} /></div>
            <div className="text-2xl font-serif text-white mb-1">Sur Mesure</div>
            <div className="text-white/40 text-xs uppercase tracking-widest">Planification Totale</div>
          </div>
        </div>

        {/* Events Grid */}
        <div className="space-y-32">
          {EVENTS.map((event, index) => (
            <div key={event.id} className={`flex flex-col lg:items-center gap-16 ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
              <div className="lg:w-1/2 relative group">
                <div className="absolute -inset-4 border border-gold-500/20 rounded-2xl group-hover:inset-0 transition-all duration-700"></div>
                <div className="relative overflow-hidden rounded-xl h-[450px]">
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-dark/20 group-hover:bg-transparent transition-all"></div>
                </div>
                <div className="absolute bottom-6 left-6 right-6 p-6 bg-dark/80 backdrop-blur-md border border-white/10 rounded-xl">
                   <div className="flex items-center gap-2 text-gold-500 text-sm font-bold uppercase tracking-widest">
                    <Users size={16} /> {event.capacity}
                   </div>
                </div>
              </div>

              <div className="lg:w-1/2 space-y-8">
                <span className="text-gold-500 tracking-[0.3em] font-medium uppercase text-sm block">Excellence en Organisation</span>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">{event.title}</h2>
                <p className="text-white/60 leading-relaxed text-lg">
                  {event.description} Notre équipe d'experts s'occupe de chaque détail, de la conception initiale à la coordination le jour J, pour assurer un succès retentissant.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 pt-4">
                  {event.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3 text-white/80">
                      <CheckCircle2 size={18} className="text-gold-500 flex-shrink-0" />
                      <span className="text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-8 flex flex-col sm:flex-row gap-4">
                  <Link 
                    to="/book-event" 
                    className="px-10 py-4 bg-gold-500 hover:bg-gold-600 text-dark font-bold rounded-lg transition-all text-center flex items-center justify-center gap-2"
                  >
                    Réserver cet Espace <ChevronRight size={18} />
                  </Link>
                  <button className="px-10 py-4 border border-white/10 text-white hover:border-gold-500 hover:text-gold-500 font-medium rounded-lg transition-all">
                    Télécharger la Brochure
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonial / Atmosphere Section */}
      <section className="py-32 bg-dark-soft border-y border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-500/5 rounded-full blur-[120px] -mr-64 -mt-64"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <div className="flex justify-center mb-8">
            <span className="text-6xl font-serif text-gold-500/20">"</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-serif italic text-white/90 leading-relaxed mb-10">
            « L'Héritage d'Alger a transformé notre gala annuel en un chef-d'œuvre. L'attention portée aux détails et le service impeccable ont laissé nos invités sans voix. »
          </h3>
          <div className="text-gold-500 font-bold tracking-[0.2em] uppercase text-sm">— Directrice de Communication, Air Algérie</div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Prêt à créer votre propre histoire ?</h2>
        <p className="text-white/50 mb-12 max-w-xl mx-auto font-light leading-relaxed">
          Contactez notre coordinateur d'événements pour une consultation privée et découvrez comment nous pouvons rendre votre événement légendaire.
        </p>
        <Link 
          to="/book-event" 
          className="inline-block px-12 py-5 bg-transparent border-2 border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-dark font-bold text-xl rounded transition-all shadow-xl hover:shadow-gold-500/20"
        >
          Planifier un Événement
        </Link>
      </section>
    </div>
  );
};

export default Events;
