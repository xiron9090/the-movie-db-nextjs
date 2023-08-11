import {  TypedUseSelectorHook, useDispatch, useSelector, } from "react-redux";
import { movieReducer } from './movie.slide';
import {
  combineReducers,
  configureStore,
  ThunkDispatch,
} from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  movieReducer
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = (): ThunkDispatch<any, any, any> =>
  useDispatch<AppDispatch>();
  export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export default store;
