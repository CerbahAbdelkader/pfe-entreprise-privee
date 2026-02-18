
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, Users, Maximize, Wind, Wifi, Tv, Map } from 'lucide-react';
import { ROOMS } from '../constants';

const Rooms: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="pt-32 pb-24 animate-fade-in bg-dark">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-gold-500 tracking-[0.3em] font-medium uppercase text-sm block mb-4">Hébergement de luxe</span>
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6">Nos 40 Chambres & Suites</h1>
          <p className="text-white/50 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            Découvrez nos espaces d'exception, entre vue sur mer et sérénité de nos jardins intérieurs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {ROOMS.map((room) => (
            <div 
              key={room.id} 
              onClick={() => navigate(`/rooms/${room.id}`)}
              className="group flex flex-col h-full bg-dark-card rounded-xl border border-white/5 hover:border-gold-500/30 transition-all duration-500 shadow-2xl cursor-pointer relative"
            >
              <div className="relative h-64 overflow-hidden rounded-t-xl">
                {/* Fixed room.name to room.type */}
                <img 
                  src={room.image} 
                  alt={room.type} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent"></div>
                
                {/* Availability Badge */}
                <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${room.isAvailable ? 'bg-green-500/20 text-green-400 border border-green-500/30' : 'bg-red-500/20 text-red-400 border border-red-500/30'}`}>
                  {room.isAvailable ? 'Disponible' : 'Réservée'}
                </div>

                <div className="absolute top-4 right-4 bg-gold-500 text-dark font-bold px-4 py-1.5 rounded text-sm shadow-xl">
                  {room.price.toLocaleString()} DZD
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                  <div className="text-white">
                    <span className="text-[10px] uppercase tracking-widest text-gold-500 font-bold block mb-1">{room.type}</span>
                    <span className="text-2xl font-serif font-bold">Chambre {room.number}</span>
                  </div>
                  <div className="flex flex-col items-end text-[10px] text-white/70 font-medium space-y-1">
                     <span className="flex items-center gap-1 bg-dark/40 backdrop-blur-md px-2 py-0.5 rounded">
                        <Map size={12} /> {room.viewType}
                     </span>
                  </div>
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <p className="text-white/40 text-sm mb-6 line-clamp-2 leading-relaxed italic">
                  "{room.description}"
                </p>
                
                <div className="flex items-center gap-6 text-white/30 mb-8 pb-6 border-b border-white/5">
                   <div className="flex items-center gap-2"><Users size={16}/> <span className="text-xs">{room.capacity}</span></div>
                   <div className="flex items-center gap-2"><Maximize size={16}/> <span className="text-xs">{room.size}</span></div>
                   <div className="flex items-center gap-2 ml-auto"><Wifi size={16}/><Tv size={16}/><Wind size={16}/></div>
                </div>

                <div className="mt-auto flex items-center justify-between">
                  <span className="text-white/40 group-hover:text-gold-500 font-semibold tracking-wider text-xs flex items-center gap-2 transition-all">
                    DÉTAILS <ChevronRight size={14} />
                  </span>
                  {room.isAvailable && (
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate('/booking');
                      }}
                      className="bg-gold-500 text-dark px-6 py-2 rounded text-xs font-bold transition-all hover:bg-white"
                    >
                      RÉSERVER
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rooms;
