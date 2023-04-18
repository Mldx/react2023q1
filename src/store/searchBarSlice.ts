import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ISearchBarState {
  searchQuery: string;
}

interface ISearchBarAction {
  queryText: string;
}

const initialState: ISearchBarState = {
  searchQuery: '',
};

const searchBarSlice = createSlice({
  name: 'searchBar',
  initialState,
  reducers: {
    setValue(state, action: PayloadAction<ISearchBarAction>) {
      state.searchQuery = action.payload.queryText;
    },
  },
});

export const searchBarAction = searchBarSlice.actions;
export const searchBarReducer = searchBarSlice.reducer;
