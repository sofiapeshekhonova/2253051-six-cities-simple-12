// действие что нужно сделать
import { createAction } from '@reduxjs/toolkit';

export const changeCity = createAction('changeCity',
  (city: string) => ({
    payload: city,
  }));

export const changeCardsSort = createAction('cards/changeCardsSort',
  (sort: string) => ({
    payload: sort
  }));
