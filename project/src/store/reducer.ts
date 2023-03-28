import {createReducer} from '@reduxjs/toolkit';
import { cards } from 'components/mocks/mocks';
import { Card } from 'types/offer';
import { CITIES } from '../constants';
import { changeCity } from './action';

type InitialState = {
  city: string;
  cards: Card[];
};

// Объект начального состояния
const defaultState: InitialState = {
  city: CITIES[0],
  cards: cards
};


const reducer = createReducer(defaultState, (builder) => {
  builder // addCase. Первым аргументом он ожидает функцию, с помощью которой создаётся действие.
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    });
});

export { reducer };
