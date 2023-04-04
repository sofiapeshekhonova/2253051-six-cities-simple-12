import { NameSpace } from '../../constants';
import { State } from 'types/state';

export const getOffersCity = (state: State) => state[NameSpace.App].city;

export const getSortOffers = (state: State) => state[NameSpace.App].sortOption;
