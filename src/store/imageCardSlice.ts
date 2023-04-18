import { createAsyncThunk, createSlice, SerializedError } from '@reduxjs/toolkit';
import { Status } from '../types/types';
import { api } from '../api/api';
import limitErrorMessage from '../utils/limitErrorMessage';
import { Full } from 'unsplash-js/dist/methods/photos/types';

export const getPhotoById = createAsyncThunk('imageCard/getPhotoById', async (id: string) => {
  const response = await api.photos.get({ photoId: id });

  if (!response.response) {
    throw Error(response.errors[0]);
  }

  return response.response;
});

interface IImageCardState {
  card: Full | null;
  status: Status;
  error: SerializedError | null;
}

const initialState: IImageCardState = {
  card: null,
  status: Status.INITIAL,
  error: null,
};

const imageCardsSlice = createSlice({
  name: 'imageCard',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPhotoById.pending, (state) => {
        state.status = Status.PENDING;
        state.error = null;
        state.card = null;
      })
      .addCase(getPhotoById.fulfilled, (state, action) => {
        state.card = action.payload;
        state.status = Status.FULFILLED;
      })
      .addCase(getPhotoById.rejected, (state, action) => {
        state.status = Status.REJECT;
        state.error = {
          ...action.error,
          message: limitErrorMessage(action.error.message),
        };
      });
  },
});
export const imageCardReducer = imageCardsSlice.reducer;
