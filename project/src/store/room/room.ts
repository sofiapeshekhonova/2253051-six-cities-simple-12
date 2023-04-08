
import { NameSpace, Status } from '../../constants';
import { Card } from 'types/offer';
import { ReviewsType } from '../../types/reviews';
import { fetchNearOffersAction, fetchRoomCommentsAction, postRoomCommentsAction } from '../api-actions';
import { createSlice } from '@reduxjs/toolkit';

type InitialState = {
  roomComments: ReviewsType[];
  nearHotels: Card[];
  status: Status;
};

const initialState: InitialState = {
  roomComments: [],
  nearHotels: [],
  status: Status.Idle,
};

export const roomProcess = createSlice({
  name: NameSpace.Room,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchRoomCommentsAction.fulfilled, (state, action) => {
        state.roomComments = action.payload;
      })
      .addCase(postRoomCommentsAction.pending, (state) => {
        state.status = Status.Loading;
      })
      .addCase(postRoomCommentsAction.fulfilled, (state, action) => {
        state.status = Status.Success;
        state.roomComments = action.payload;
      })
      .addCase(postRoomCommentsAction.rejected, (state) => {
        state.status = Status.Failed;
      })
      .addCase(fetchNearOffersAction.fulfilled, (state, action) => {
        state.nearHotels = action.payload;
      });
  }
});
