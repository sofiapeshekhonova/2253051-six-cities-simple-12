import { createSlice } from '@reduxjs/toolkit';
import { Card } from 'types/offer';
import { NameSpace, Status } from '../../constants';
import { fetchHotelsAction } from '../api-actions';

export type OffersData = {
  hotels: Card[];
  status: Status;
};

const initialState: OffersData = {
  hotels: [],
  status: Status.Idle,
};

export const houtelsProsess = createSlice({
  name: NameSpace.Hotels,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchHotelsAction.pending, (state) => {
        state.status = Status.Loading;
      })
      .addCase(fetchHotelsAction.fulfilled, (state, action) => {
        state.status = Status.Success;
        state.hotels = action.payload;
      })
      .addCase(fetchHotelsAction.rejected, (state) => {
        state.status = Status.Failed;
      });
  }
});
