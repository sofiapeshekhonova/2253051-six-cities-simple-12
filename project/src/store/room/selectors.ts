import { NameSpace } from '../../constants';
import { Card } from 'types/offer';
import { State } from 'types/state';

export const getNearOffers = (state: State): Card[] =>
  state[NameSpace.Room].nearHotels;

export const getroomComments = (state: State) => state[NameSpace.Room].roomComments;

export const getPost = (state: State) => state[NameSpace.Room].status;
