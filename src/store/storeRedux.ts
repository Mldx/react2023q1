import { configureStore } from '@reduxjs/toolkit';
import { orderCardsReducer } from './orderCardsSlice';
import { searchBarReducer } from './searchBarSlice';

export const store = configureStore({
  reducer: {
    orderCards: orderCardsReducer,
    searchBar: searchBarReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
