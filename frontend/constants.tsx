
import React from 'react';
import {
  Wifi, Tv, Wind, Coffee, Waves, Utensils, Dumbbell, Car, MapPin, Phone, Mail,
  Facebook, Instagram, Linkedin, PartyPopper, Users, Music, Camera, Bell, Briefcase
} from 'lucide-react';
import { Room, Service, HotelEvent } from './types';

// Helper to generate 40 rooms
const generateRooms = (): Room[] => {
  const rooms: Room[] = [];

  for (let i = 1; i <= 40; i++) {
    let type: Room['type'] = 'Chambre Standard';
    let price = 18000;
    let size = '30m²';
    let capacity = 2;
    let number = '';

    // Assigning types and numbers
    if (i <= 10) {
      type = 'Suite Royale';
      price = 55000;
      size = '85m²';
      capacity = 3;
      number = (100 + i).toString();
    } else if (i <= 25) {
      type = 'Chambre Deluxe';
      price = 32000;
      size = '45m²';
      capacity = 2;
      number = (200 + (i - 10)).toString();
    } else {
      type = 'Chambre Standard';
      price = 22000;
      size = '32m²';
      capacity = 2;
      number = (300 + (i - 25)).toString();
    }

    const viewType: Room['viewType'] = i <= 20 ? 'Jardin Intérieur' : 'Baie d\'Alger';

    rooms.push({
      id: `room-${number}`,
      number,
      type,
      price,
      description: `Une expérience de séjour exceptionnelle dans notre ${type} n°${number}. Profitez d'un cadre raffiné avec une magnifique ${viewType}.`,
      image: i <= 10
        ? 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80'
        : i <= 25
          ? 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80'
          : 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1200&q=80',
      gallery: [
        `https://picsum.photos/seed/room-${number}-1/800/600`,
        `https://picsum.photos/seed/room-${number}-2/800/600`,
        `https://picsum.photos/seed/room-${number}-3/800/600`,
        `https://picsum.photos/seed/room-${number}-4/800/600`,
      ],
      amenities: ['Wi-Fi Haut Débit', 'Climatisation', 'Smart TV', 'Machine Espresso', 'Mini-bar'],
      capacity,
      size,
      viewType,
      isAvailable: Math.random() > 0.3, // Mock some booked rooms
    });
  }
  return rooms;
};

export const ROOMS: Room[] = generateRooms();

export const SERVICES: Service[] = [
  {
    id: 'restaurant',
    name: 'Le Gourmet d\'Alger',
    description: 'Une fusion raffinée entre la gastronomie algérienne traditionnelle et la cuisine internationale moderne.',
    icon: 'Utensils',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'spa',
    name: 'Spa & Bien-être',
    description: 'Un havre de paix proposant des rituels de hammam traditionnels et des massages relaxants.',
    icon: 'Waves',
    image: 'https://images.unsplash.com/photo-1544161515-4af6b1d462c2?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'concierge',
    name: 'Conciergerie Privée',
    description: 'Une assistance dédiée 24/7 pour satisfaire toutes vos demandes, de la réservation de spectacles à l\'organisation d\'excursions exclusives.',
    icon: 'Bell',
    image: 'https://images.unsplash.com/photo-1565058688-66f84931fb07?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'transport',
    name: 'Voiturier & Transport',
    description: 'Service de voiturier à votre arrivée et transferts privés en véhicules de luxe vers l\'aéroport ou pour vos déplacements en ville.',
    icon: 'Car',
    image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'fitness',
    name: 'Centre de Fitness',
    description: 'Maintenez votre forme avec nos équipements de dernière génération, ouverts 24h/24 pour s\'adapter à votre rythme.',
    icon: 'Dumbbell',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'business',
    name: 'Business Center',
    description: 'Des espaces de travail élégants et entièrement équipés pour vos réunions professionnelles et vos besoins de bureau.',
    icon: 'Briefcase',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80'
  }
];

export const EVENTS: HotelEvent[] = [
  {
    id: 'royal-weddings',
    title: 'Mariages Royaux',
    description: 'Célébrez le plus beau jour de votre vie dans notre salle de bal majestueuse.',
    capacity: 'Jusqu\'à 500 invités',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1200&q=80',
    features: ['Service Traiteur Gastronomique', 'Décoration Personnalisée']
  }
];

export const getIcon = (name: string, size = 24) => {
  switch (name) {
    case 'Wifi': return <Wifi size={size} />;
    case 'Tv': return <Tv size={size} />;
    case 'Wind': return <Wind size={size} />;
    case 'Coffee': return <Coffee size={size} />;
    case 'Waves': return <Waves size={size} />;
    case 'Utensils': return <Utensils size={size} />;
    case 'Dumbbell': return <Dumbbell size={size} />;
    case 'Car': return <Car size={size} />;
    case 'MapPin': return <MapPin size={size} />;
    case 'Phone': return <Phone size={size} />;
    case 'Mail': return <Mail size={size} />;
    case 'Facebook': return <Facebook size={size} />;
    case 'Instagram': return <Instagram size={size} />;
    case 'Linkedin': return <Linkedin size={size} />;
    case 'Party': return <PartyPopper size={size} />;
    case 'Users': return <Users size={size} />;
    case 'Music': return <Music size={size} />;
    case 'Music': return <Music size={size} />;
    case 'Camera': return <Camera size={size} />;
    case 'Bell': return <Bell size={size} />;
    case 'Briefcase': return <Briefcase size={size} />;
    default: return null;
  }
};
