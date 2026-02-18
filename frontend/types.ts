
export interface Room {
  id: string;
  number: string;
  type: 'Suite Royale' | 'Chambre Deluxe' | 'Chambre Standard';
  price: number;
  description: string;
  image: string;
  gallery: string[];
  amenities: string[];
  capacity: number;
  size: string;
  viewType: 'Jardin Intérieur' | 'Baie d\'Alger';
  isAvailable: boolean;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  icon: string;
  image: string;
}

export interface NavLink {
  name: string;
  path: string;
}

export interface HotelEvent {
  id: string;
  title: string;
  description: string;
  capacity: string;
  image: string;
  features: string[];
}
