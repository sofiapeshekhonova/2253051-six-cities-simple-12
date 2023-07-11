import { Namespace } from '../../constants';
import { State } from 'types/state';

export const getOffersCity = (state: State) => state[Namespace.App].city;

export const getSortOffers = (state: State) => state[Namespace.App].sortOption;
