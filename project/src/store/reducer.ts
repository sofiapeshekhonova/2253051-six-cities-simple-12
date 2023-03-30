import {createReducer} from '@reduxjs/toolkit';
import { cards } from 'components/mocks/mocks';
import { CITIES, sortList } from '../constants';
import { changeCity, changeCardsSort } from './action';
import { Card } from 'types/offer';

type InitialState = {
  city: string;
  cards: Card[];
  sortOption: string;
};

const defaultState: InitialState = {
  city: CITIES[0],
  cards: cards,
  sortOption: sortList[0]
};

const reducer = createReducer(defaultState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(changeCardsSort, (state, action) => {
      state.sortOption = action.payload;
    });
});

export { reducer };
