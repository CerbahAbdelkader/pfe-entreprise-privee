
import React, { useState } from 'react';
import { Calendar, Users, Home, ChevronRight, CheckCircle, Info, UserPlus, Baby, Phone, CreditCard, Wallet } from 'lucide-react';
import { ROOMS } from '../constants';

const Booking: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<'arrival' | 'baridimob'>('arrival');
  const [selectedRoomId, setSelectedRoomId] = useState(ROOMS.filter(r => r.isAvailable)[0]?.id || ROOMS[0].id);

  const selectedRoom = ROOMS.find(r => r.id === selectedRoomId);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="pt-32 pb-24 bg-dark min-h-screen flex items-center justify-center animate-fade-in px-4">
        <div className="max-w-md w-full text-center bg-dark-card p-12 rounded-3xl border border-gold-500/20 shadow-2xl">
          <div className="flex justify-center mb-8">
            <div className="bg-gold-500/10 p-6 rounded-full">
              <CheckCircle size={64} className="text-gold-500" />
            </div>
          </div>
          <h2 className="text-3xl font-serif font-bold text-white mb-4">Demande Enregistrée !</h2>
          <p className="text-white/60 mb-10 leading-relaxed">
            Merci de votre confiance. Notre concierge vous appellera sous peu pour confirmer votre réservation et finaliser les détails de votre arrivée.
          </p>
          <button 
            onClick={() => setIsSubmitted(false)}
            className="w-full py-4 bg-gold-500 text-dark font-bold rounded-lg hover:bg-gold-600 transition-all"
          >
            Faire une autre réservation
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 bg-dark animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div className="sticky top-32">
          <span className="text-gold-500 tracking-[0.3em] font-medium uppercase text-sm block mb-4">L'HÉRITAGE D'ALGER</span>
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-8">Votre Réservation</h1>
          <p className="text-white/50 text-lg mb-12 font-light max-w-lg leading-relaxed">
            Un séjour d'exception commence ici. Nous prendrons contact avec vous par téléphone pour assurer un accueil personnalisé.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4 text-white/70">
              <div className="w-10 h-10 rounded-full bg-gold-500/10 flex items-center justify-center text-gold-500"><Phone size={20} /></div>
              <span className="text-sm font-medium italic">Appel de confirmation obligatoire</span>
            </div>
            <div className="flex items-center gap-4 text-white/70">
              <div className="w-10 h-10 rounded-full bg-gold-500/10 flex items-center justify-center text-gold-500"><Wallet size={20} /></div>
              <span className="text-sm font-medium italic">Paiement sécurisé via Baridimob</span>
            </div>
          </div>
        </div>

        <div className="bg-dark-card p-8 md:p-12 rounded-[2.5rem] border border-gold-500/20 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/5 rounded-full -mr-16 -mt-16 blur-3xl"></div>
          
          <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
            {/* Step 1: Personal Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-gold-500 font-bold">Nom Complet</label>
                <input type="text" required placeholder="Ahmed Benali" className="w-full bg-dark border border-white/5 rounded-xl p-4 text-white focus:border-gold-500 outline-none transition-all shadow-xl" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-gold-500 font-bold">Numéro de Téléphone</label>
                <input type="tel" required placeholder="0555 00 00 00" className="w-full bg-dark border border-white/5 rounded-xl p-4 text-white focus:border-gold-500 outline-none transition-all shadow-xl font-mono" />
              </div>
            </div>

            {/* Step 2: Dates & Guests */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-gold-500 font-bold">Arrivée</label>
                <input type="date" required className="w-full bg-dark border border-white/5 rounded-xl p-4 text-white focus:border-gold-500 outline-none transition-all shadow-xl" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-gold-500 font-bold">Départ</label>
                <input type="date" required className="w-full bg-dark border border-white/5 rounded-xl p-4 text-white focus:border-gold-500 outline-none transition-all shadow-xl" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-gold-500 font-bold">Adultes</label>
                <select className="w-full bg-dark border border-white/5 rounded-xl p-4 text-white focus:border-gold-500 outline-none shadow-xl">
                  <option>1</option><option selected>2</option><option>3</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-gold-500 font-bold">Enfants</label>
                <select className="w-full bg-dark border border-white/5 rounded-xl p-4 text-white focus:border-gold-500 outline-none shadow-xl">
                  <option>0</option><option>1</option><option>2</option>
                </select>
              </div>
            </div>

            {/* Step 3: Room Selection */}
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-gold-500 font-bold">Choisir la Chambre</label>
              <select 
                value={selectedRoomId}
                onChange={(e) => setSelectedRoomId(e.target.value)}
                className="w-full bg-dark border border-white/5 rounded-xl p-4 text-white focus:border-gold-500 outline-none shadow-xl"
              >
                {ROOMS.filter(r => r.isAvailable).map(room => (
                  <option key={room.id} value={room.id}>N°{room.number} — {room.type} ({room.price.toLocaleString()} DZD)</option>
                ))}
              </select>
            </div>

            {/* Payment Method Selection */}
            <div className="space-y-4">
              <label className="text-[10px] uppercase tracking-widest text-gold-500 font-bold block">Mode de Paiement</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button 
                  type="button"
                  onClick={() => setPaymentMethod('arrival')}
                  className={`flex items-center gap-3 p-4 rounded-xl border transition-all ${paymentMethod === 'arrival' ? 'border-gold-500 bg-gold-500/10 text-white' : 'border-white/5 bg-dark text-white/40'}`}
                >
                  <Home size={18} /> <span className="text-sm font-bold">À l'arrivée</span>
                </button>
                <button 
                  type="button"
                  onClick={() => setPaymentMethod('baridimob')}
                  className={`flex items-center gap-3 p-4 rounded-xl border transition-all ${paymentMethod === 'baridimob' ? 'border-gold-500 bg-gold-500/10 text-white' : 'border-white/5 bg-dark text-white/40'}`}
                >
                  <CreditCard size={18} /> <span className="text-sm font-bold">Baridimob</span>
                </button>
              </div>

              {paymentMethod === 'baridimob' && (
                <div className="mt-4 p-5 bg-gold-500/5 border border-gold-500/20 rounded-2xl animate-fade-in">
                  <div className="flex items-center gap-3 text-gold-500 mb-3">
                    <Info size={16} />
                    <span className="text-xs font-bold uppercase tracking-widest">Informations de virement</span>
                  </div>
                  <div className="space-y-2">
                    <p className="text-[10px] text-white/40 uppercase">RIP Algérie Poste</p>
                    <p className="text-lg font-mono text-white tracking-widest">007 99999 0001234567 89</p>
                    <p className="text-[10px] text-white/40 mt-4 leading-relaxed">
                      * Veuillez envoyer une capture d'écran du virement par e-mail ou lors de notre appel de confirmation.
                    </p>
                  </div>
                </div>
              )}
            </div>

            <button 
              type="submit"
              className="w-full py-5 bg-gold-500 hover:bg-gold-600 text-dark font-bold rounded-xl text-lg transition-all shadow-2xl shadow-gold-500/30 flex items-center justify-center gap-3"
            >
              RÉSERVER MAINTENANT <ChevronRight size={20} />
            </button>
            <p className="text-center text-white/20 text-[10px] uppercase tracking-widest">Notre concierge vous appellera sous 15 minutes</p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Booking;
