import { createSlice } from '@reduxjs/toolkit';

export const genreOrCategory = createSlice({
  name: 'genreOrCategory',
  initialState: {
    genreOrCategory: '',
    page: 1,
    searchQuery: '',
  },
  reducers: {
    selectGenreOrCategory: (state, action) => {
    //   state.genreOrCategory = action.payload;
      console.log(action.payload);
    },
    // setPage: (state, action) => {
    //   state.page = action.payload;
    // },
    // setSearchQuery: (state, action) => {
    //   state.searchQuery = action.payload;
    // },
  },
});

export const { selectGenreOrCategory } = genreOrCategory.actions;

export default genreOrCategory.reducer;
