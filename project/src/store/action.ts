// действие что нужно сделать
import { createAction } from '@reduxjs/toolkit';
import { Card } from 'types/offer';

export const changeCity = createAction('changeCity',
  (city: string) => ({
    payload: city,
  }));

export const loadHotels = createAction<Card>('data/loadHotels');
