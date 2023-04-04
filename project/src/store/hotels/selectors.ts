import { Card } from 'types/offer';
import { State } from 'types/state';
import { NameSpace, Status } from '../../constants';

export const getOffers = (state: State): Card[] => state[NameSpace.Hotels].offers;
export const getStatus = (state: State): Status=> state[NameSpace.Hotels].status;

export const getActiveOffer = (state: State): Card | null => state[NameSpace.Hotels].activeOffer;
export const getStatusOffer = (state: State): Status => state[NameSpace.Hotels].statusOffer;
