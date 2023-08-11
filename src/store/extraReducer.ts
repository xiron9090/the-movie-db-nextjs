import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { IMoviesState } from "./interface";
import { getDetailsMovie, getPopularMovie } from "./movies.thunks";

export const extraReducers = (
  builder: ActionReducerMapBuilder<IMoviesState>
) => {
  builder.addCase(getPopularMovie.fulfilled, (state, action) => {
    state.popular = state.popular.concat(action?.payload?.results);
  });
  builder.addCase(getDetailsMovie.fulfilled, (state, action) => {
    state.details = action?.payload;
  });
};
