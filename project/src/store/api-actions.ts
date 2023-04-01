import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state.js';
import { APIRoute, AppRoute, AuthorizationStatus} from '../constants';
import { Card } from 'types/offer.js';
import { loadHotels, setCardsDataLoadingStatus, requireAuthorization, getUserInformation, redirectToRoute, getRoomComments, getNearHotels, postRoomComments } from './action';
import { dropToken, saveToken } from '../services/token';
import { UserData } from 'types/user-data.js';
import { AuthData } from 'types/auth-data.js';
import { ReviewsType } from 'types/reviews.js';
import { CommentType } from 'types/commentType.js';

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

export const fetchRoomCommentsAction = createAsyncThunk<void, number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchRoomCommentsAction',
  async (offerId, {dispatch, extra: api}) => {
    const {data} = await api.get<ReviewsType[]>(`${APIRoute.Comments}/${offerId}`);
    dispatch(getRoomComments(data));
  }
);

export const postRoomCommentsAction = createAsyncThunk<void, CommentType, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/postRoomCommentsAction',
  async ({cardId, rating, comment}, {dispatch, extra: api}) => {
    const {data} = await api.post<ReviewsType[]>(`${APIRoute.Comments}/${cardId}`, {rating, comment});
    dispatch(postRoomComments(data));

  }
);

export const fetchNearOffersAction = createAsyncThunk<void, number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchNearOffersAction',
  async (hotelId, {dispatch, extra: api}) => {
    const {data} = await api.get<Card[]>(`${APIRoute.Hotels}/${hotelId}/nearby`);
    dispatch(getNearHotels(data));
  }
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.get(APIRoute.Login);
      const { data } = await api.get<UserData>(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
      dispatch(getUserInformation(data));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const { data } = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(data.token);
    dispatch(getUserInformation(data));
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(redirectToRoute(AppRoute.Root));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(getUserInformation(null));
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  },
);

