import { Card } from '../../types/offer';

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
      'img/room.jpg', 'img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg', 'img/studio-01.jpg', 'img/apartment-01.jpg'
    ],
    host: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: 30,
      isPro: true,
      name: 'Angelina',
    },
  },
  // {
  //   id: 2,
  //   previewImage: 'img/room.jpg',
  //   title: 'Wood and stone place',
  //   premium: false,
  //   price: 80,
  //   type: 'Private room',
  //   rating: 4.8,
  //   goods: ['Wi-Fi', 'Washing machine', ' Towels', ' Heating', 'Coffee machine', 'Baby seat', 'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge'],
  //   images: [
  //     'img/room.jpg', 'img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg', 'img/studio-01.jpg', 'img/apartment-01.jpg'
  //   ],
  //   host: {
  //     avatarUrl: 'img/avatar-angelina.jpg',
  //     id: 50,
  //     isPro: true,
  //     name: 'Angelina',
  //   },
  // },
  // {
  //   id: 3,
  //   previewImage: 'img/apartment-02.jpg',
  //   title: 'Canal View Prinsengracht',
  //   premium: false,
  //   price: 132,
  //   type: 'Apartment',
  //   rating: 4.8,
  //   goods: ['Wi-Fi', 'Washing machine', ' Towels', ' Heating', 'Coffee machine', 'Baby seat', 'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge'],
  //   images: [
  //     'img/room.jpg', 'img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg', 'img/studio-01.jpg', 'img/apartment-01.jpg'
  //   ],
  //   host: {
  //     avatarUrl: 'img/avatar-angelina.jpg',
  //     id: 60,
  //     isPro: true,
  //     name: 'Angelina',
  //   },
  // },
  // {
  //   id: 4,
  //   previewImage: 'img/apartment-03.jpg',
  //   title: 'Nice, cozy, warm big bed apartment',
  //   premium: true,
  //   price: 180,
  //   type: 'Apartment',
  //   rating: 4.8,
  //   goods: ['Wi-Fi', 'Washing machine', ' Towels', ' Heating', 'Coffee machine', 'Baby seat', 'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge'],
  //   images: [
  //     'img/room.jpg', 'img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg', 'img/studio-01.jpg', 'img/apartment-01.jpg'
  //   ],
  //   host: {
  //     avatarUrl: 'img/avatar-angelina.jpg',
  //     id: 10,
  //     isPro: true,
  //     name: 'Angelina',
  //   },
  // },
  // {
  //   id: 5,
  //   previewImage: 'img/room.jpg',
  //   title: 'Wood and stone place',
  //   premium: false,
  //   price: 80,
  //   type: 'Private room',
  //   rating: 4.8,
  //   goods: ['Wi-Fi', 'Washing machine', ' Towels', ' Heating', 'Coffee machine', 'Baby seat', 'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge'],
  //   images: [
  //     'img/room.jpg', 'img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg', 'img/studio-01.jpg', 'img/apartment-01.jpg'
  //   ],
  //   host: {
  //     avatarUrl: 'img/avatar-angelina.jpg',
  //     id: 20,
  //     isPro: true,
  //     name: 'Angelina',
  //   },
  // },
];

export const reviews = [
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
