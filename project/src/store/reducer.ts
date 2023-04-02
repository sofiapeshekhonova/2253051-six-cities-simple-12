// import {createReducer} from '@reduxjs/toolkit';
// import { Card } from 'types/offer';
// import { ReviewsType } from 'types/reviews';
// import { UserData } from 'types/user-data';
// import { CITIES, sortList } from '../constants';
// import { changeCardsSort, changeCity, getNearHotels, getRoomComments, getUserInformation, loadHotels, postRoomComments, setCardsDataLoadingStatus } from './action';

// type InitialState = {
//   city: string;
//   sortOption: string;
//   cards: Card[];
//   isCardsDataLoading: boolean;
//  // authorizationStatus: string;
//   userInformation: UserData | null;
//   roomComments: ReviewsType[];
//   nearHotels: Card[];
// };

// const defaultState: InitialState = {
//   cards: [],
//   city: CITIES[0],
//   sortOption: sortList[0],
//   isCardsDataLoading: false,
//   // authorizationStatus: AuthorizationStatus.Unknown,
//   userInformation: null,
//   roomComments: [],
//   nearHotels: []
// };

// const reducer = createReducer(defaultState, (builder) => {
//   builder
//     // .addCase(changeCity, (state, action) => {
//     //   state.city = action.payload;
//     // })
//     // .addCase(changeCardsSort, (state, action) => {
//     //   state.sortOption = action.payload;
//     })
//     // .addCase(loadHotels, (state, action) => {
//     //   state.cards = action.payload;
//     // })
//     .addCase(setCardsDataLoadingStatus, (state, action) => {
//       state.isCardsDataLoading = action.payload;
//     })
// .addCase(requireAuthorization, (state, action) => {
//   state.authorizationStatus = action.payload;
// })
// .addCase(getUserInformation, (state, action) => {
//   state.userInformation = action.payload;
// })
// .addCase(getRoomComments, (state, action) => {
//   state.roomComments = action.payload;
// })
// .addCase(postRoomComments, (state, action) => {
//   state.roomComments = action.payload;
// })
// .addCase(getNearHotels, (state, action) => {
//   state.nearHotels = action.payload;
// });
// });

// export { reducer };
