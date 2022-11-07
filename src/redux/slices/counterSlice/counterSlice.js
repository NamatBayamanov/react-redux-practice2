import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice(
  {
    name: 'counter',
    initialState: {
      number: 0,
      
    },
    reducers: {
      increment: (state, action) => {
        state.number++;
      },
      decrement: (state, action) => {
        state.number = state.number - 1;
      },
      set: (state, action) => {
        state.number = action.payload;
      },
    },
    extraReducers: {},
    
  }
);

export default counterSlice.reducer;