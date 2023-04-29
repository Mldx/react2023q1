import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { orderCardsReducer } from './orderCardsSlice';
import { searchBarReducer } from './searchBarSlice';
import { imageCardsReducer } from './imageCardsSlice';
import { imageCardReducer } from './imageCardSlice';

const rootReducer = combineReducers({
  orderCards: orderCardsReducer,
  searchBar: searchBarReducer,
  imageCards: imageCardsReducer,
  imageCard: imageCardReducer,
});
export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppState = ReturnType<typeof setupStore>;
export type AppDispatch = AppState['dispatch'];
