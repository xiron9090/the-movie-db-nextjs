import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IMoviesState } from "./interface";
import { reducers } from "./reducer";
import { extraReducers } from "./extraReducer";
import { RootState } from ".";
import { getPopularMoviesService } from "@/services";
const initialState: IMoviesState = {
  details: {
    adult: false,
    backdrop_path: "",
    belongs_to_collection: {
      backdrop_path: "",
      id: 0,
      name: "",
      poster_path: "",
    },
    budget: 0,
    genres: [],
    homepage: "",
    id: 0,
    imdb_id: "",
    original_language: "",
    original_title: "",
    overview: "",
    popularity: 0,
    poster_path: "",
    production_companies: [],
    production_countries: [],
    release_date: "",
    revenue: 0,
    runtime: 0,
    spoken_languages: [],
    status: "",
    tagline: "",
    title: "",
    video: false,
    vote_average: 0,
    vote_count: 0,
  },
  popular: [],
};

export const getPopularMovie = createAsyncThunk(
  "GET_POPULAR_MOVIES",
  async (page:number) => {
    try {
      const result = await getPopularMoviesService(page);
      if (result.status !== 200) {
        return [];
      } else {
        return result.data;
      }
    } catch (error) {
      return error;
    }
  }
);
const movieSlide = createSlice({
  name: "Movies",
  initialState,
  reducers,
  extraReducers,
});
export const { setDetailsMovie, setPopularMovies } = movieSlide.actions;
export const movieReducer = movieSlide.reducer;
export const movieSelector = (state: RootState) => state.movieReducer;
