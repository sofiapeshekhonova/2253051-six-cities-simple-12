import { createSlice } from '@reduxjs/toolkit';
import { Card } from 'types/offer';
import { NameSpace, Status } from '../../constants';
import { fetchActiveOfferAction, fetchOffersAction } from '../api-actions';

export type OffersData = {
  offers: Card[];
  status: Status;
  statusOffer: Status;
  activeOffer: Card | null;
};

const initialState: OffersData = {
  offers: [],
  status: Status.Idle,
  statusOffer: Status.Idle,
  activeOffer: null,
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
      })
      .addCase(fetchActiveOfferAction.pending, (state) => {
        state.statusOffer = Status.Loading;
      })
      .addCase(fetchActiveOfferAction.fulfilled, (state, action) => {
        state.activeOffer = action.payload;
        state.statusOffer = Status.Success;
      })
      .addCase(fetchActiveOfferAction.rejected, (state) => {
        state.statusOffer = Status.Failed;
      });
  }
});
