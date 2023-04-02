import { NameSpace } from '../../constants';
import { State } from 'types/state';

//export const selectCity = (state: State): string => state[NameSpace.App].changeCity;

//export const getOffers = (state: State): string => state[NameSpace.App].changeOffersSort;

export const selectOffersCity = (state: State) => state[NameSpace.App].city;

export const selectOffers = (state: State) => state[NameSpace.App].sortOption;
