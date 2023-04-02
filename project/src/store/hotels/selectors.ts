import { Card } from 'types/offer';
import { State } from 'types/state';
import { NameSpace, Status } from '../../constants';

export const getOffers = (state: State): Card[] => state[NameSpace.Hotels].offers;
export const getStatus = (state: State): Status=> state[NameSpace.Hotels].status;
