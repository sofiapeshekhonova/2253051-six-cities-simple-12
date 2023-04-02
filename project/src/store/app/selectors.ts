import { NameSpace } from '../../constants';
import { State } from 'types/state';

export const selectCity = (state: State): string => state[NameSpace.App].changeCity;

export const getHotels = (state: State): string => state[NameSpace.App].changeHotelsSort;

export const selectOffersCity = (state) => state[NameSpace.App].city;

export const selectHotels = (state) => state[NameSpace.App].sortOption;
