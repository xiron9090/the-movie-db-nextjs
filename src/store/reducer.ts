import { PayloadAction } from "@reduxjs/toolkit";
import { IMoviesState } from "./interface";
import { IPopularMovie } from "@/types";

export const reducers = {
  setPopularMovies: (
    state: IMoviesState,
    action: PayloadAction<IPopularMovie>
  ) => {
    state.popular =action.payload.results;
  },
  setDetailsMovie: (state: IMoviesState, action: PayloadAction<any>) => {
    state.popular = action.payload;
  },
};
