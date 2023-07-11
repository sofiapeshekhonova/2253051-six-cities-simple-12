import { RoomType } from '../constants';

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
export type Room = {
  apartment: string;
  room: string;
  house: string;
  hotel: string;
};

export type Card = {
  title: string;
  previewImage: string;
  isPremium: boolean;
  price: number;
  type: keyof typeof RoomType;
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
