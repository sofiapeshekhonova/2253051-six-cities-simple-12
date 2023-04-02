import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { sortList, CITIES, NameSpace } from '../../constants';

type InitialState = {
  city: string;
  sortOption: string;
};

const initialState: InitialState = {
  city: CITIES[0],
  sortOption: sortList[0],
};

export const appProcess = createSlice({
  name: NameSpace.App,
  initialState,
  reducers: {
    changeCity: (state, action: PayloadAction<string>) => {
      state.city = action.payload;
    },
    changeOffersSort: (state, action: PayloadAction<string>) => {
      state.sortOption = action.payload;
    },
  }
});

export const { changeCity, changeOffersSort } = appProcess.actions;
