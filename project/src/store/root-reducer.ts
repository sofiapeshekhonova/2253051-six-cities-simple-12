import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../constants';
import { appProcess } from './app/app-slice';
import { houtelsProsess } from './hotels/hotels-slice';
import { roomProcess } from './room/room';
import { userProcess } from './user-process/user-process';

export const rootReducer = combineReducers({
  [NameSpace.User]: userProcess.reducer,
  [NameSpace.Hotels]: houtelsProsess.reducer,
  [NameSpace.Room]: roomProcess.reducer,
  [NameSpace.App]: appProcess.reducer,
});
