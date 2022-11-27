import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPhotos = createAsyncThunk('photos/fetchPhotos', async function(_, {rejectWithValue}) {
  try {
    const responce = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=10');

    if (!responce.ok) {
      throw new Error('Server Error...');
    }

    const data = await responce.json();

    return data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

const photosSlice = createSlice(
  {
    name: 'photos',
    initialState: {
      photos: [],
      status: null,
      error: null,
    },
    reducers: {},
    extraReducers: {
      [fetchPhotos.pending]: (state, action) => {
        state.status = 'pending...';
        state.error = null; 
      },
      [fetchPhotos.fulfilled]: (state, action) => {
        state.status = 'resolved';
        state.photos = action.payload;
      },
      [fetchPhotos.rejected]: (state, action) => {
        state.status = 'rejected';
        state.error = action.error;
      },
    },
  },
);

export default photosSlice.reducer;