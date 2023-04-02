import { NameSpace, Status } from '../../constants';
import { Card } from 'types/offer';
import { State } from 'types/state';
import { createSelector } from '@reduxjs/toolkit';


// const getOfferStatus = (state: State): Status =>
//   state[NameSpace.Room].isRoomStatus;

export const getNearOffers = (state: State): Card[] =>
  state[NameSpace.Room].nearHotels;

export const getReviews = (state: State): Reviews =>
  state[NameSpace.Room].roomComments;

// export const getReviewFormBlockedStatus = (state: State): FetchStatus =>
//   state[NameSpace.Room].status;

// export const getRoomStatus = createSelector([getOfferStatus], (status) => ({
//   isLoading: [Status.Idle, Status.Loading].includes(status),
//   isSuccess: status === Status.Success,
//   isError: status === Status.Failed,
// }));
