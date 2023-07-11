import { Card } from 'types/offer';
import { State } from 'types/state';
import { Namespace, Status } from '../../constants';

export const getOffers = (state: State): Card[] => state[Namespace.Hotels].offers;
export const getStatus = (state: State): Status=> state[Namespace.Hotels].status;

export const getActiveOffer = (state: State): Card | null => state[Namespace.Hotels].activeOffer;
export const getStatusOffer = (state: State): Status => state[Namespace.Hotels].statusOffer;
