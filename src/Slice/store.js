import { configureStore } from '@reduxjs/toolkit';
import movieReducer from './movieListSlice';
import { moviesApi } from './moviesApi';
import userReducer from './userSlice';

export const store = configureStore({
  reducer: {
    movies: movieReducer,
    user: userReducer,

    [moviesApi.reducerPath]: moviesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(moviesApi.middleware),
});