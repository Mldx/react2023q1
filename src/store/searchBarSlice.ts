import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ISearchBarState {
  queryText: string;
}

interface ISearchBarAction {
  queryText: string;
}

const initialState: ISearchBarState = {
  queryText: '',
};

const searchBarSlice = createSlice({
  name: 'searchBar',
  initialState,
  reducers: {
    setValue(state, action: PayloadAction<ISearchBarAction>) {
      state.queryText = action.payload.queryText;
    },
  },
});

export const searchBarAction = searchBarSlice.actions;
export const searchBarReducer = searchBarSlice.reducer;
