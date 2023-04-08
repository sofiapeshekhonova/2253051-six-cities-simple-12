import { Card } from 'types/offer';

export const CITIES: string[] = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

export enum AppRoute {
  Login = '/login',
  Root = '/',
  Room = '/offer/:id',
  NotFoundPage = '*'
}

export const STARS = [
  { id: 5, name: 'perfect' },
  { id: 4, name: 'good' },
  { id: 3, name: 'not bad' },
  { id: 2, name: 'terribly' },
  { id: 1, name: 'badly' },
];

export const URL_MARKER_DEFAULT = 'img/pin.svg';
export const URL_MARKER_CURRENT = 'img/pin-active.svg';

export const sortList = [
  'Popular',
  'Price: low to high',
  'Price: high to low',
  'Top rated first',
];

export function SortCards(cards: Card[], sortListItem: string) {
  switch (sortListItem) {
    case sortList[1]:
      return cards.sort((a, b) => a.price - b.price);
    case sortList[2]:
      return cards.sort((b, a) => a.price - b.price);
    case sortList[3]:
      return cards.sort((b, a) => a.rating - b.rating);
    default:
      return cards;
  }
}

export enum APIRoute {
  Hotels = '/hotels',
  Login = '/login',
  Logout = '/logout',
  Comments = '/comments',
  Room = '/offer'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum NameSpace {
  Room = 'ROOM',
  Hotels = 'HOTELS',
  User = 'USER',
  App = 'APP'
}

export enum Status {
  Idle = 'Idle',
  Loading = 'Loading',
  Success = 'Success',
  Failed = 'Failed',
}
