
import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { CheckCircle2, ArrowLeft, Calendar, User, Maximize, Map, ShieldCheck } from 'lucide-react';
import { ROOMS } from '../constants';

const RoomDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const room = ROOMS.find(r => r.id === id);
  const [activeImage, setActiveImage] = useState(room?.image || '');

  if (!room) {
    return <Navigate to="/rooms" />;
  }

  return (
    <div className="animate-fade-in bg-dark min-h-screen">
      {/* Hero Header */}
      <div className="relative h-[65vh] flex flex-col justify-end">
        <img src={activeImage} alt={room.type} className="absolute inset-0 w-full h-full object-cover transition-all duration-700" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/20 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto w-full px-4 mb-20 relative z-10">
          <Link to="/rooms" className="inline-flex items-center gap-2 text-white/80 hover:text-gold-500 transition-colors bg-dark/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 mb-8">
            <ArrowLeft size={18} /> Voir l'inventaire complet
          </Link>
          <div className="space-y-2">
            <span className="text-gold-500 tracking-[0.4em] font-bold uppercase text-sm block">{room.type}</span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white">Chambre {room.number}</h1>
            <div className="flex items-center gap-6 text-white/60 mt-4">
               <span className="flex items-center gap-2"><Map size={18} className="text-gold-500" /> {room.viewType}</span>
               <span className="flex items-center gap-2"><Maximize size={18} className="text-gold-500" /> {room.size}</span>
               <span className={`px-3 py-1 rounded text-[10px] font-bold uppercase tracking-widest ${room.isAvailable ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                  {room.isAvailable ? 'Disponible immédiatement' : 'Actuellement Occupée'}
               </span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-24">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-2/3 space-y-16">
            {/* Image Gallery */}
            <div className="space-y-4">
              <h3 className="text-xl font-serif font-bold text-white mb-6">Galerie de la chambre</h3>
              <div className="grid grid-cols-4 gap-4">
                {[room.image, ...room.gallery].map((img, i) => (
                  <button 
                    key={i} 
                    onClick={() => setActiveImage(img)}
                    className={`relative aspect-[4/3] rounded-xl overflow-hidden border-2 transition-all ${activeImage === img ? 'border-gold-500' : 'border-transparent opacity-50 hover:opacity-100'}`}
                  >
                    <img src={img} alt={`Angle ${i}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-dark-soft p-10 rounded-3xl border border-white/5 shadow-2xl">
              <h2 className="text-3xl font-serif font-bold text-white mb-8">Description de l'espace</h2>
              <p className="text-white/60 leading-relaxed text-lg mb-10">
                {room.description} Chaque chambre de L'Héritage d'Alger est une œuvre d'art. Les matériaux ont été sélectionnés parmi les plus nobles : marbre blanc d'Italie, boiseries artisanales et tissus de soie locale. La chambre {room.number} offre une sérénité particulière grâce à sa position privilégiée dans l'établissement.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-10 border-t border-white/5">
                {room.amenities.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-white/70">
                    <CheckCircle2 size={18} className="text-gold-500 flex-shrink-0" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:w-1/3">
            <div className="bg-dark-card p-10 rounded-3xl border border-gold-500/20 sticky top-32 shadow-2xl shadow-gold-500/10">
              <div className="text-center mb-8">
                <div className="text-5xl font-serif font-bold text-gold-500 mb-2">{room.price.toLocaleString()} <span className="text-lg text-white/40">DZD</span></div>
                <span className="text-white/30 text-xs tracking-widest uppercase">Par nuit • Taxes incluses</span>
              </div>
              
              <div className="space-y-6 mb-10">
                <div className="flex items-center justify-between py-3 border-b border-white/5">
                   <span className="text-white/50 text-sm">Capacité</span>
                   <span className="text-white font-bold">{room.capacity} Personnes</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-white/5">
                   <span className="text-white/50 text-sm">Vue</span>
                   <span className="text-white font-bold">{room.viewType}</span>
                </div>
              </div>

              {room.isAvailable ? (
                <Link 
                  to="/booking" 
                  className="block w-full text-center bg-gold-500 hover:bg-gold-600 text-dark font-bold py-5 rounded-2xl transition-all transform hover:scale-[1.02] shadow-xl shadow-gold-500/20 uppercase tracking-widest text-sm"
                >
                  Confirmer la réservation
                </Link>
              ) : (
                <div className="bg-white/5 text-white/40 p-5 rounded-2xl text-center border border-white/10 italic">
                  Cette chambre est actuellement réservée. Veuillez consulter nos autres disponibilités.
                </div>
              )}

              <div className="mt-8 flex flex-col gap-4">
                 <div className="flex items-center gap-3 text-white/30 text-[10px] uppercase tracking-widest">
                    <ShieldCheck size={14} className="text-gold-500" /> Assurance annulation incluse
                 </div>
                 <div className="flex items-center gap-3 text-white/30 text-[10px] uppercase tracking-widest">
                    <Calendar size={14} className="text-gold-500" /> Petit-déjeuner buffet offert
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetail;
