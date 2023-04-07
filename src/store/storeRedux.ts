import { configureStore } from '@reduxjs/toolkit';
import { orderCardsReducer } from './orderCardsSlice';

export const store = configureStore({
  reducer: {
    orderCards: orderCardsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
