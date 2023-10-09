import { configureStore } from '@reduxjs/toolkit';
import { tmdbAPI } from '../services/TMDB';
import genreOrCategoryReducer from '../features/currentGenreOrCategories';

export default configureStore({
  reducer: {
    [tmdbAPI.reducerPath]: tmdbAPI.reducer,
    currentGenreOrCategory: genreOrCategoryReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(tmdbAPI.middleware),
});
