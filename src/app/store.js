import { configureStore } from '@reduxjs/toolkit';
import { tmdbAPI } from '../services/TMDB';
import genreOrCategoryReducer from '../features/currentGenreOrCategories';
import userReducer from '../features/auth';

export default configureStore({
  reducer: {
    [tmdbAPI.reducerPath]: tmdbAPI.reducer,
    currentGenreOrCategory: genreOrCategoryReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(tmdbAPI.middleware),
});
