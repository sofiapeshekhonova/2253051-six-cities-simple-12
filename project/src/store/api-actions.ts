import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state.js';
import { APIRoute } from '../constants';
import { Card } from 'types/offer.js';
import { loadHotels } from './action';

export const fetchHotelsAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchHoutels',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Card>(APIRoute.Hotels);
    dispatch(loadHotels(data));
  },
);

// export const checkAuthAction = createAsyncThunk<void, undefined, {
//   dispatch: AppDispatch;
//   state: State;
//   extra: AxiosInstance;
// }>(
//   'user/checkAuth',
//   async (_arg, {dispatch, extra: api}) => {
//     try {
//       await api.get(APIRoute.Login);
//       dispatch(requireAuthorization(AuthorizationStatus.Auth));
//     } catch {
//       dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
//     }
//   },
// );

// export const loginAction = createAsyncThunk<void, AuthData, {
//   dispatch: AppDispatch;
//   state: State;
//   extra: AxiosInstance;
// }>(
//   'user/login',
//   async ({login: email, password}, {dispatch, extra: api}) => {
//     const {data: {token}} = await api.post<UserData>(APIRoute.Login, {email, password});
//     saveToken(token);
//     dispatch(requireAuthorization(AuthorizationStatus.Auth));
//   },
// );

// export const logoutAction = createAsyncThunk<void, undefined, {
//   dispatch: AppDispatch;
//   state: State;
//   extra: AxiosInstance;
// }>(
//   'user/logout',
//   async (_arg, {dispatch, extra: api}) => {
//     await api.delete(APIRoute.Logout);
//     dropToken();
//     dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
//   },
// );
