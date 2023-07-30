import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';
import {DropDownConstants, DropDownList} from '../../constants';

interface initialStateInterface {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

const initialState: initialStateInterface[] = [];

const AppReducer = createSlice({
  name: 'appSlice',
  initialState,
  reducers: {
    upComingMoviesList: (
      state,
      action: PayloadAction<initialStateInterface>,
    ) => {
      state.push(action.payload);
    },
  },
});

export const {upComingMoviesList} = AppReducer.actions;

export const RootReducers = combineReducers({
  appSlice: AppReducer.reducer,
});
