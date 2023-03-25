import { Card } from 'types/offer';

export const CITIES: string[] = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

export enum AppRoute {
  Login = '/login',
  Root = '/',
  Room = '/offer/:id',
}

export const STARS: string[] = ['perfect', 'good','not bad','badly','terribly'];

export const URL_MARKER_DEFAULT = 'img/pin.svg';

export const URL_MARKER_CURRENT = 'img/pin-active.svg';

export const sortList = [
  'Popular',
  'Price: low to high',
  'Price: high to low',
  'Top rated first',
];

export function SortCards(cards: Card[], sortListItem: string) {
  if(sortListItem === sortList[1]) {
    return cards.sort((a, b) => a.price - b.price);
  } else if (sortListItem === sortList[2]) {
    return cards.sort((a, b) => b.price - a.price);
  } else if(sortListItem === sortList[3]) {
    return cards.sort((a, b) => b.rating - a.rating);
  } else {
    return cards;
  }
}
