
export type Host = {
  avatarUrl: string;
  id: number;
  isPro: boolean;
  name: string;
 }

export type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
};

export type CityType = {
  location: Location;
  name: string;
};


export type Card = {
  title: string;
  previewImage: string;
  premium: boolean;
  price: number;
  type: string;
  id: number;
  maxAdults: number;
  bedrooms: number;
  rating: number;
  description?: string;
  goods: string[];
  images: string[];
  host: Host;
  length?: number;
  city: CityType;
  location: Location;
 }
