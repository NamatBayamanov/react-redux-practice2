import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../slices/counterSlice/counterSlice";
import todoReducer from "../slices/todoSlice/todoSlice";
import calculatorReducer from "../slices/calculatorSlice/calculatorSlice";
const store = configureStore(
  {
    reducer: {
      counter: counterReducer,
      todos: todoReducer,
      calculator: calculatorReducer,
    },
  },
);

export default store;