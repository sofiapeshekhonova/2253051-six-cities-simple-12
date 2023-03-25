import {createReducer} from '@reduxjs/toolkit';
import { cards } from 'components/mocks/mocks';
import { CITIES, sortList } from '../constants';
import { changeCity, changeCardsSort } from './action';

// Объект начального состояния
const defaultState = {
  city: CITIES[0], // город (используется для отбора списка предложений в определённом городе)
  cards: cards, // список предложений по аренде.
  sortOption: sortList[0] // список элементов сортировки
};

// Функцию-редьюсер. Она принимает в качестве параметров текущий state и действие (action).
// Результатом выполнения редьюсера станет новое состояние. Обратите внимание, для именования функций-редьюсеров применяются существительные.

//вся логика тут

const reducer = createReducer(defaultState, (builder) => {
  builder // addCase. Первым аргументом он ожидает функцию, с помощью которой создаётся действие.
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
      // const {city} = action.payload;
    })
    .addCase(changeCardsSort, (state, action) => {
      state.sortOption = action.payload;
    });

});

export { reducer };
