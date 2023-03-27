// действие что нужно сделать
import { createAction } from '@reduxjs/toolkit';
import { Card } from 'types/offer';

export const changeCity = createAction('changeCity',
  (city: string) => ({
    payload: city,
  }));

export const changeCardsSort = createAction('cards/changeCardsSort',
  (sort: string) => ({
    payload: sort
  }));

export const loadHotels = createAction('data/loadHotels',
  (cards: Card[]) => ({
    payload: cards
  })
);

export const setError = createAction('cards/setError',
  (error: string | null) => ({
    payload: error
  })
);

export const setCardsDataLoadingStatus = createAction('data/setCardsDataLoadingStatus',
  (isCardsDataLoading: boolean) => ({
    payload: isCardsDataLoading
  })
);

