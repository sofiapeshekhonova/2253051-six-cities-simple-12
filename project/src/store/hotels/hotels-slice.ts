import { createSlice } from '@reduxjs/toolkit';
import { Card } from 'types/offer';
import { NameSpace, Status } from '../../constants';
import { fetchOffersAction } from '../api-actions';

export type OffersData = {
  offers: Card[];
  status: Status;
};

const initialState: OffersData = {
  offers: [],
  status: Status.Idle,
};

export const houtelsProsess = createSlice({
  name: NameSpace.Hotels,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.status = Status.Loading;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.status = Status.Success;
        state.offers = action.payload;
      })
      .addCase(fetchOffersAction.rejected, (state) => {
        state.status = Status.Failed;
      });
  }
});
