import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state.js';
import { APIRoute, AppRoute } from '../constants';
import { Card } from 'types/offer.js';
import { dropToken, saveToken } from '../services/token';
import { UserData } from 'types/user-data.js';
import { AuthData } from 'types/auth-data.js';
import { ReviewsType } from 'types/reviews.js';
import { CommentType } from 'types/commentType.js';
import { redirectToRoute } from './action';

export const fetchOffersAction = createAsyncThunk<Card[], undefined, {
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchHoutels',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<Card[]>(APIRoute.Hotels);
    return data;
  },
);

export const fetchActiveOfferAction = createAsyncThunk<Card, number, {
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchActiveOffer',
  async (offerId, { extra: api }) => {
    const { data } = await api.get<Card>(`${APIRoute.Hotels}/${offerId}`);
    return data;
  },
);

export const fetchRoomCommentsAction = createAsyncThunk<ReviewsType[], number, {
  state: State;
  extra: AxiosInstance;
}>(
  'room/fetchRoomCommentsAction',
  async (offerId, { extra: api }) => {
    const { data } = await api.get<ReviewsType[]>(`${APIRoute.Comments}/${offerId}`);
    return data;
  }
);

export const postRoomCommentsAction = createAsyncThunk<ReviewsType[], CommentType, {
  state: State;
  extra: AxiosInstance;
}>(
  'room/postRoomCommentsAction',
  async ({ cardId, rating, comment }, { extra: api }) => {
    const { data } = await api.post<ReviewsType[]>(`${APIRoute.Comments}/${cardId}`, { rating, comment });
    return data;
  }
);

export const fetchNearOffersAction = createAsyncThunk<Card[], number, {
  state: State;
  extra: AxiosInstance;
}>(
  'room/fetchNearOffersAction',
  async (hotelId, { extra: api }) => {
    const { data } = await api.get<Card[]>(`${APIRoute.Hotels}/${hotelId}/nearby`);
    return data;
  }
);

export const checkAuthAction = createAsyncThunk<UserData, undefined, {
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<UserData>(APIRoute.Login);
    return data;
  }
);

export const loginAction = createAsyncThunk<UserData, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({ login: email, password }, {dispatch, extra: api }) => {
    const { data } = await api.post<UserData>(APIRoute.Login, { email, password });
    saveToken(data.token);
    dispatch(redirectToRoute(AppRoute.Root));
    return data;
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, { extra: api }) => {
    await api.delete(APIRoute.Logout);
    dropToken();
  },
);

