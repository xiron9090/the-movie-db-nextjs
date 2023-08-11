import { getDetailsMovieService, getPopularMoviesService } from "@/services";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getPopularMovie = createAsyncThunk(
  "GET_POPULAR_MOVIES",
  async (page: number, { fulfillWithValue, rejectWithValue }) => {
    try {
      const result = await getPopularMoviesService(page);
      if (result.status !== 200) {
        return rejectWithValue(null);
      } else {
        return fulfillWithValue(result.data);
      }
    } catch (error) {
      return rejectWithValue(null);
    }
  }
);

export const getDetailsMovie = createAsyncThunk(
  "GET_DETAILS_MOVIES",
  async (id: string, {  fulfillWithValue, rejectWithValue }) => {
    try {
      const result = await getDetailsMovieService(id);
      if (result.status !== 200) {
        return rejectWithValue(null);
      } else {
        return fulfillWithValue(result.data);
      }
    } catch (error) {
      return rejectWithValue(null);
    }
  }
);
