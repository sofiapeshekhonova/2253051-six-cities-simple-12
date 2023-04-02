import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state.js';
import { APIRoute } from '../constants';
import { Card } from 'types/offer.js';
import { dropToken, saveToken } from '../services/token';
import { UserData } from 'types/user-data.js';
import { AuthData } from 'types/auth-data.js';
import { ReviewsType } from 'types/reviews.js';
import { CommentType } from 'types/commentType.js';
import { toast } from 'react-toastify';

export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchHoutels',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<Card[]>(APIRoute.Hotels);
      return data;
    } catch (error) {
      toast.error('Error: get offers');
      throw error;
    }
  },
);

export const fetchRoomCommentsAction = createAsyncThunk<void, number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'room/fetchRoomCommentsAction',
  async (offerId, { dispatch, extra: api }) => {
    try {
      const { data } = await api.get<ReviewsType[]>(`${APIRoute.Comments}/${offerId}`);
      return data;
    } catch (error) {
      toast.error('Error: get comments');
      throw error;
    }
  }
);

export const postRoomCommentsAction = createAsyncThunk<void, CommentType, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'room/postRoomCommentsAction',
  async ({ cardId, rating, comment }, { dispatch, extra: api }) => {
    try {
      const { data } = await api.post<ReviewsType[]>(`${APIRoute.Comments}/${cardId}`, { rating, comment });
      return data;
    } catch (error) {
      toast.error('Error: post comment');
      throw error;
    }
  }
);

export const fetchNearOffersAction = createAsyncThunk<void, number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'room/fetchNearOffersAction',
  async (hotelId, { dispatch, extra: api }) => {
    try {
      const { data } = await api.get<Card[]>(`${APIRoute.Hotels}/${hotelId}/nearby`);
      return data;
    } catch (error) {
      toast.error('Error: get near hotels');
      throw error;
    }
  }
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, { dispatch, extra: api }) => {
    try {
      const { data } = await api.get<UserData>(APIRoute.Login);
      return data;
    } catch (error) {
      toast.error('failed to verify authorization');
      throw error;
    }
  }
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({ login: email, password }, { dispatch, extra: api }) => {
    const { data } = await api.post<UserData>(APIRoute.Login, { email, password });
    saveToken(data.token);
    return data;
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, { dispatch, extra: api }) => {
    await api.delete(APIRoute.Logout);
    dropToken();
  },
);

