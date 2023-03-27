import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state.js';
import { APIRoute, TIMEOUT_SHOW_ERROR } from '../constants';
import { Card } from 'types/offer.js';
import { loadHotels, setError, setCardsDataLoadingStatus } from './action';
import { store } from './index';

export const fetchHotelsAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchHoutels',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setCardsDataLoadingStatus(true));
    const {data} = await api.get<Card[]>(APIRoute.Hotels);
    dispatch(setCardsDataLoadingStatus(false));
    dispatch(loadHotels(data));
  },
);

export const clearErrorAction = createAsyncThunk(
  'game/clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError(null)),
      TIMEOUT_SHOW_ERROR,
    );
  },
);
