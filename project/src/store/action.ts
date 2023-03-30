// действие что нужно сделать
import { createAction } from '@reduxjs/toolkit';
import { AppRoute } from '../constants';
import { Card } from 'types/offer';
import { UserData } from 'types/user-data';
import { ReviewsType } from 'types/reviews';

export const changeCity = createAction('changeCity',
  (city: string) => ({
    payload: city,
  }));

export const loadHotels = createAction('data/loadHotels',
  (cards: Card[]) => ({
    payload: cards
  })
);

export const changeCardsSort = createAction('cards/changeCardsSort',
  (sort: string) => ({
    payload: sort
  }));

export const setCardsDataLoadingStatus = createAction('data/setCardsDataLoadingStatus',
  (isCardsDataLoading: boolean) => ({
    payload: isCardsDataLoading
  })
);

export const requireAuthorization = createAction('user/requireAuthorization',
  (authorizationStatus: string) => ({
    payload: authorizationStatus,
  })
);

export const getUserInformation = createAction('user/getUserInformation',
  (userInformation: UserData | null) => ({
    payload: userInformation
  })
);

export const getRoomComments = createAction('room/getRoomcomments',
  (roomComments: ReviewsType[]) => ({
    payload: roomComments
  })
);

export const getNearHotels = createAction('card/getNearHotels',
  (nearHotels: Card[]) => ({
    payload: nearHotels
  })
);

export const redirectToRoute = createAction('data/redirectToRoute',
  (redirect: AppRoute) => ({ payload: redirect })
);
