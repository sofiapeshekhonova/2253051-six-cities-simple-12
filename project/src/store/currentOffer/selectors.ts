import { Namespace } from '../../constants';
import { Card } from 'types/offer';
import { State } from 'types/state';

export const getNearOffers = (state: State): Card[] =>
  state[Namespace.Room].nearHotels;

export const getroomComments = (state: State) => state[Namespace.Room].roomComments;

export const getPost = (state: State) => state[Namespace.Room].status;
