import { combineReducers } from '@reduxjs/toolkit';
import { Namespace } from '../constants';
import { app } from './app/app';
import { hotels } from './hotels/hotels';
import { currentOffer } from './currentOffer/currentOffer';
import { user } from './user/user';

export const rootReducer = combineReducers({
  [Namespace.User]: user.reducer,
  [Namespace.Hotels]: hotels.reducer,
  [Namespace.Room]: currentOffer.reducer,
  [Namespace.App]: app.reducer,
});
