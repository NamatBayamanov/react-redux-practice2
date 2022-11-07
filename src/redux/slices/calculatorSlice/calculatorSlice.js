import { createSlice } from "@reduxjs/toolkit";

const calculatorSlice = createSlice({
  name: "calculator",
  initialState: {
    a: +" ",
    b: +" ",
    conclution: 0,
    symbol: null,
  },
  reducers: {
    helper(state, action) {
      state.a = action.payload.v1;
    },
    helper2(state, action) {
      state.b = action.payload.v2;
    },
    addingNum(state, action) {
      state.symbol = "+";
    },
    minusNum(state, action) {
      state.symbol = '-';
    },
    multiplicationNum(state, action) {
      state.symbol = '*';
    },
    divisionNum(state, action) {
      state.symbol = '/';
    },

    equationMethod(state, action) {
      switch (action.payload.symbol) {
        case "+":
          state.conclution = state.a + state.b;
          state.a = +' ';
          state.b = +" ";
          break;
        case "-":
          state.conclution = state.a - state.b;
          state.a = +' ';
          state.b = +" ";
          break;
        case "*":
          state.conclution = state.a * state.b;
          state.a = +' ';
          state.b = +" ";
          break;
        case "/":
          state.conclution = state.a / state.b;
          state.a = +' ';
          state.b = +" ";
          break;
      }
    },
    cleanBut(state, action) {
      state.conclution = 0;
    },
  },
  extraReducers: {},
});
export const {
  addingNum,
  minusNum,
  multiplicationNum,
  divisionNum,
  equationMethod,
  cleanBut,
  helper,
  helper2,
} = calculatorSlice.actions;

export default calculatorSlice.reducer;
