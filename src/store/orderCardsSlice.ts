import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IOrderingFormData } from '../types/types';

interface IOrderingState {
  dataList: IOrderingFormData[];
}

interface IOrderingAction {
  card: IOrderingFormData;
}

const initialState: IOrderingState = {
  dataList: [],
};

const orderCardsSlice = createSlice({
  name: 'orderCards',
  initialState,
  reducers: {
    addCard(state, action: PayloadAction<IOrderingAction>) {
      state.dataList.push(action.payload.card);
    },
  },
});
export const orderCardsActions = orderCardsSlice.actions;
export const orderCardsReducer = orderCardsSlice.reducer;
