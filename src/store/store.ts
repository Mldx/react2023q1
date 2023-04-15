import { configureStore } from '@reduxjs/toolkit';
import { orderCardsReducer } from './orderCardsSlice';
import { searchBarReducer } from './searchBarSlice';
import { imageCardsReducer } from './imageCardsSlice';
import { imageCardReducer } from './imageCardSlice';

export const store = configureStore({
  reducer: {
    orderCards: orderCardsReducer,
    searchBar: searchBarReducer,
    imageCards: imageCardsReducer,
    imageCard: imageCardReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
