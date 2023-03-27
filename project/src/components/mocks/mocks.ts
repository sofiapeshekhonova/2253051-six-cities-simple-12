import { ReviewsType } from 'types/reviews';
import { Card } from 'types/offer';
import { CityType } from 'types/offer';

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
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 8
    },
    city: {
      location: {
        latitude: 52.377956,
        longitude: 4.897070,
        zoom: 12,
      },
      name: 'Amsterdam',
    }
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
    location: {
      latitude: 52.3609553943508,
      longitude: 4.85309666406198,
      zoom: 8
    },
    city: {
      location: {
        latitude: 52.377956,
        longitude: 4.897070,
        zoom: 12,
      },
      name: 'Amsterdam',
    }
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
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 8
    },
    city: {
      location: {
        latitude: 52.377956,
        longitude: 4.897070,
        zoom: 12,
      },
      name: 'Amsterdam',
    }
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
      id: 8,
      isPro: true,
      name: 'Angelina',
    },
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 8
    },
    city: {
      location: {
        latitude: 52.377956,
        longitude: 4.897070,
        zoom: 12,
      },
      name: 'Amsterdam',
    }
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
    location: {
      latitude: 52.372764,
      longitude: 4.881209,
      zoom: 8
    },
    city: {
      location: {
        latitude: 52.377956,
        longitude: 4.897070,
        zoom: 12,
      },
      name: 'Amsterdam',
    }
  },
  {
    id: 8,
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
    location: {
      latitude: 48.85837,
      longitude: 2.29448,
      zoom: 16
    },
    city: {
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 11
      },
      name: 'Paris'
    }
  },
  {
    id: 9,
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
    location: {
      latitude: 53.55022,
      longitude: 9.99277,
      zoom: 16
    },
    city: {
      location: {
        latitude: 53.550341,
        longitude: 10.000654,
        zoom: 13
      },
      name: 'Hamburg'
    }
  },
  {
    id: 10,
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
    location: {
      latitude: 50.8465,
      longitude: 4.3518,
      zoom: 16
    },
    city: {
      name: 'Brussels',
      location: {
        latitude: 50.846557,
        longitude: 4.351697,
        zoom: 13
      }
    }
  },
  {
    id: 11,
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
    location: {
      latitude: 50.941111,
      longitude: 6.956667,
      zoom: 16
    },
    city: {
      name: 'Cologne',
      location: {
        latitude: 50.938361,
        longitude: 6.959974,
        zoom: 13
      }
    }
  },
  {
    id: 12,
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
    location: {
      latitude: 51.228333,
      longitude: 6.771667,
      zoom: 16
    },
    city: {
      name: 'Dusseldorf',
      location: {
        latitude: 51.225402,
        longitude: 6.776314,
        zoom: 13
      }
    }
  },
  {
    id: 20,
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
    location: {
      latitude: 48.85437,
      longitude: 2.29448,
      zoom: 16
    },
    city: {
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 11
      },
      name: 'Paris'
    }
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
  location: {
    latitude: 52.377956,
    longitude: 4.897070,
    zoom: 12,
  },
  name: 'Amsterdam',
};

export const nearPlaceCards: Card[] = [
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
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 8
    },
    city: {
      location: {
        latitude: 52.377956,
        longitude: 4.897070,
        zoom: 12,
      },
      name: 'Amsterdam',
    }
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
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 8
    },
    city: {
      location: {
        latitude: 52.377956,
        longitude: 4.897070,
        zoom: 12,
      },
      name: 'Amsterdam',
    }
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
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 8
    },
    city: {
      location: {
        latitude: 52.377956,
        longitude: 4.897070,
        zoom: 12,
      },
      name: 'Amsterdam',
    }
  },
];
