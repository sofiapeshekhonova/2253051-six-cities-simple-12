import {createReducer} from '@reduxjs/toolkit';
import { Card } from 'types/offer';
import { CITIES } from '../constants';
import { changeCity, loadHotels, setCardsDataLoadingStatus, setError } from './action';

type InitialState = {
  city: string;
  cards: Card[];
  error: string | null;
  isCardsDataLoading: boolean;
};

const defaultState: InitialState = {
  cards: [],
  city: CITIES[0],
  error: null,
  isCardsDataLoading: false,
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
    });
});

export { reducer };
