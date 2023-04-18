import { createAsyncThunk, createSlice, SerializedError } from '@reduxjs/toolkit';
import { Status } from '../types/types';
import { Basic } from 'unsplash-js/dist/methods/photos/types';
import { api } from '../api/api';
import limitErrorMessage from '../utils/limitErrorMessage';

export const getPhotos = createAsyncThunk('imageCards/getPhotos', async (query: string) => {
  const response = await api.search.getPhotos({
    query: query,
    orientation: 'portrait',
    perPage: 9,
    page: 1,
  });

  if (!response.response) {
    throw Error(response.errors[0]);
  }

  return response.response.results;
});

interface IImageCardsState {
  cards: Basic[] | null;
  status: Status;
  error: SerializedError | null;
}

const initialState: IImageCardsState = {
  cards: null,
  status: Status.INITIAL,
  error: null,
};

const imageCardsSlice = createSlice({
  name: 'imageCards',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPhotos.pending, (state) => {
        state.status = Status.PENDING;
        state.error = null;
      })
      .addCase(getPhotos.fulfilled, (state, action) => {
        state.status = Status.FULFILLED;
        state.cards = action.payload;
      })
      .addCase(getPhotos.rejected, (state, action) => {
        state.status = Status.REJECT;
        state.error = {
          ...action.error,
          message: limitErrorMessage(action.error.message),
        };
      });
  },
});
export const imageCardsReducer = imageCardsSlice.reducer;
