import { ReviewsType } from 'types/reviews';
import { Card } from 'types/offer';
import { CityType } from 'types/city';

export const cards: Card[] = [
  {
    id: 1,
    previewImage: 'img/apartment-01.jpg',
    title: 'Beautiful &amp; luxurious apartment at great location',
    premium: true,
    price: 120,
    type: 'Apartment',
    maxAdults: 4,
    bedrooms: 3,
    rating: 4.8,
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    goods: ['Wi-Fi', 'Washing machine', ' Towels', ' Heating', 'Coffee machine', 'Baby seat', 'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge'],
    images: [
      'img/room.jpg', 'img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg', 'img/studio-01.jpg',
    ],
    host: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: 30,
      isPro: true,
      name: 'Angelina',
    },
    lat: 52.3909553943508,
    lng: 4.85309666406198,
  },
  {
    id: 2,
    previewImage: 'img/room.jpg',
    title: 'Wood and stone place',
    premium: false,
    price: 80,
    type: 'Private room',
    maxAdults: 4,
    bedrooms: 3,
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    rating: 4.8,
    goods: ['Wi-Fi', 'Washing machine', ' Towels', ' Heating', 'Coffee machine', 'Baby seat', 'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge'],
    images: [
      'img/room.jpg', 'img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg', 'img/studio-01.jpg',
    ],
    host: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: 50,
      isPro: true,
      name: 'Angelina',
    },
    lat: 52.3609553943508,
    lng:  4.85309666406198,
  },
  {
    id: 3,
    maxAdults: 4,
    bedrooms: 3,
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    previewImage: 'img/apartment-02.jpg',
    title: 'Canal View Prinsengracht',
    premium: false,
    price: 132,
    type: 'Apartment',
    rating: 4.8,
    goods: ['Wi-Fi', 'Washing machine', ' Towels', ' Heating', 'Coffee machine', 'Baby seat', 'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge'],
    images: [
      'img/room.jpg', 'img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg', 'img/studio-01.jpg',
    ],
    host: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: 60,
      isPro: true,
      name: 'Angelina',
    },
    lat: 52.3909553943508,
    lng: 4.929309666406198,
  },
  {
    id: 4,
    previewImage: 'img/apartment-03.jpg',
    title: 'Nice, cozy, warm big bed apartment',
    premium: true,
    price: 180,
    type: 'Apartment',
    maxAdults: 4,
    bedrooms: 3,
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    rating: 4.8,
    goods: ['Wi-Fi', 'Washing machine', ' Towels', ' Heating', 'Coffee machine', 'Baby seat', 'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge'],
    images: [
      'img/room.jpg', 'img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg', 'img/studio-01.jpg',
    ],
    host: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: 10,
      isPro: true,
      name: 'Angelina',
    },
    lat: 52.3809553943508,
    lng: 4.939309666406198,
  },
  {
    id: 5,
    previewImage: 'img/room.jpg',
    title: 'Wood and stone place',
    premium: false,
    price: 80,
    type: 'Private room',
    maxAdults: 4,
    bedrooms: 3,
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    rating: 4.8,
    goods: ['Wi-Fi', 'Washing machine', ' Towels', ' Heating', 'Coffee machine', 'Baby seat', 'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge'],
    images: [
      'img/room.jpg', 'img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg', 'img/studio-01.jpg',
    ],
    host: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: 20,
      isPro: true,
      name: 'Angelina',
    },
    lat: 52.372764,
    lng: 4.881209,
  },
];

export const reviews: ReviewsType[] = [
  {
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    date: '2023-02-09T10:33:21.322Z',
    id: 1,
    rating: 4,
    user: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: 2,
      isPro: false,
      name: 'Oliver.conner'
    }
  },
];

export const City: CityType = {
  title: 'Амстердам',
  lat: 	52.377956,
  lng: 4.897070,
  zoom: 12,
};
