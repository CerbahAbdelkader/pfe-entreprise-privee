
import React from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, User, AtSign, Globe } from 'lucide-react';
import { getIcon } from '../constants';

const Contact: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-dark animate-fade-in">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <span className="text-gold-500 tracking-[0.4em] font-medium uppercase text-sm block mb-4">Une assistance d'exception</span>
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6">Parlons de votre séjour</h1>
          <p className="text-white/50 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            Notre conciergerie est à votre disposition 24h/24 pour répondre à vos exigences les plus raffinées.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Contact Information Sidebar */}
          <div className="lg:col-span-4 space-y-10">
            <div>
              <h3 className="text-2xl font-serif font-bold text-white mb-8 border-l-2 border-gold-500 pl-4">Coordonnées</h3>
              <div className="space-y-8">
                <div className="flex items-start gap-5">
                  <div className="bg-gold-500/10 p-3 rounded-xl text-gold-500">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Localisation</h4>
                    <p className="text-white/40 text-sm leading-relaxed">
                      12, Boulevard de la République,<br />
                      Alger-Centre, 16000, Algérie
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-5">
                  <div className="bg-gold-500/10 p-3 rounded-xl text-gold-500">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Réservations</h4>
                    <p className="text-white/40 text-sm">+213 (0) 23 45 67 89</p>
                  </div>
                </div>
                <div className="flex items-start gap-5">
                  <div className="bg-gold-500/10 p-3 rounded-xl text-gold-500">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Email Direct</h4>
                    <p className="text-white/40 text-sm">concierge@heritage-alger.dz</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-10 border-t border-white/5">
              <h4 className="text-white/30 text-xs uppercase tracking-[0.3em] mb-6">Plan d'accès</h4>
              <div className="aspect-square w-full rounded-3xl overflow-hidden bg-dark-soft border border-white/5 relative group">
                <img 
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=600&q=80" 
                  alt="Algiers Map View" 
                  className="w-full h-full object-cover grayscale opacity-40 group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="bg-gold-500 p-4 rounded-full shadow-2xl shadow-gold-500/50">
                    <MapPin size={32} className="text-dark" />
                   </div>
                </div>
              </div>
            </div>
          </div>

          {/* Professional Contact Form */}
          <div className="lg:col-span-8">
            <div className="bg-dark-card p-8 md:p-12 rounded-[2rem] border border-white/5 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-64 h-64 bg-gold-500/5 rounded-full -ml-32 -mt-32 blur-[100px]"></div>
              
              <form className="relative z-10 space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                  {/* Name Field */}
                  <div className="relative group">
                    <div className="flex items-center gap-3 mb-2 text-white/40 group-focus-within:text-gold-500 transition-colors">
                      <User size={16} />
                      <label className="text-xs font-bold uppercase tracking-widest">Nom Complet</label>
                    </div>
                    <input 
                      type="text" 
                      className="w-full bg-transparent border-b border-white/10 py-3 text-white outline-none focus:border-gold-500 transition-all placeholder:text-white/5"
                      placeholder="p. ex. Ahmed Benali"
                    />
                  </div>

                  {/* Email Field */}
                  <div className="relative group">
                    <div className="flex items-center gap-3 mb-2 text-white/40 group-focus-within:text-gold-500 transition-colors">
                      <AtSign size={16} />
                      <label className="text-xs font-bold uppercase tracking-widest">Email Professionnel</label>
                    </div>
                    <input 
                      type="email" 
                      className="w-full bg-transparent border-b border-white/10 py-3 text-white outline-none focus:border-gold-500 transition-all placeholder:text-white/5"
                      placeholder="ahmed@entreprise.dz"
                    />
                  </div>

                  {/* Phone Field */}
                  <div className="relative group">
                    <div className="flex items-center gap-3 mb-2 text-white/40 group-focus-within:text-gold-500 transition-colors">
                      <Phone size={16} />
                      <label className="text-xs font-bold uppercase tracking-widest">Téléphone</label>
                    </div>
                    <input 
                      type="tel" 
                      className="w-full bg-transparent border-b border-white/10 py-3 text-white outline-none focus:border-gold-500 transition-all placeholder:text-white/5"
                      placeholder="+213 555 00 00 00"
                    />
                  </div>

                  {/* Subject Field */}
                  <div className="relative group">
                    <div className="flex items-center gap-3 mb-2 text-white/40 group-focus-within:text-gold-500 transition-colors">
                      <Globe size={16} />
                      <label className="text-xs font-bold uppercase tracking-widest">Sujet</label>
                    </div>
                    <select className="w-full bg-transparent border-b border-white/10 py-3 text-white outline-none focus:border-gold-500 transition-all appearance-none cursor-pointer">
                      <option className="bg-dark">Réservation de groupe</option>
                      <option className="bg-dark">Demande de concierge</option>
                      <option className="bg-dark">Services VIP</option>
                      <option className="bg-dark">Partenariat Corporate</option>
                      <option className="bg-dark">Autre demande</option>
                    </select>
                  </div>
                </div>

                {/* Message Field */}
                <div className="relative group">
                  <div className="flex items-center gap-3 mb-2 text-white/40 group-focus-within:text-gold-500 transition-colors">
                    <MessageSquare size={16} />
                    <label className="text-xs font-bold uppercase tracking-widest">Message Détaillé</label>
                  </div>
                  <textarea 
                    rows={5}
                    className="w-full bg-dark/20 border border-white/5 rounded-2xl p-6 text-white outline-none focus:border-gold-500 transition-all placeholder:text-white/5 resize-none shadow-inner"
                    placeholder="Comment pouvons-nous rendre votre expérience parfaite ?"
                  ></textarea>
                </div>

                <div className="pt-4 flex flex-col md:flex-row items-center justify-between gap-6">
                  <p className="text-white/20 text-xs italic max-w-sm text-center md:text-left leading-relaxed">
                    * En envoyant ce formulaire, vous acceptez d'être contacté par notre équipe de conciergerie conformément à notre politique de confidentialité.
                  </p>
                  <button 
                    type="submit"
                    className="w-full md:w-auto px-12 py-5 bg-gold-500 hover:bg-gold-600 text-dark font-bold rounded-2xl transition-all flex items-center justify-center gap-3 shadow-2xl shadow-gold-500/30 group active:scale-95"
                  >
                    Envoyer le Message <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
