import {createReducer} from '@reduxjs/toolkit';
import { Card } from 'types/offer';
import { AuthorizationStatus, CITIES } from '../constants';
import { changeCity, loadHotels, requireAuthorization, setCardsDataLoadingStatus, setError } from './action';

type InitialState = {
  city: string;
  cards: Card[];
  error: string | null;
  isCardsDataLoading: boolean;
  authorizationStatus: AuthorizationStatus;
};

const defaultState: InitialState = {
  cards: [],
  city: CITIES[0],
  error: null,
  isCardsDataLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown,
};

const reducer = createReducer(defaultState, (builder) => {
  builder // addCase. Первым аргументом он ожидает функцию, с помощью которой создаётся действие.
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(loadHotels, (state, action) => {
      state.cards = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(setCardsDataLoadingStatus, (state, action) => {
      state.isCardsDataLoading = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});

export { reducer };
