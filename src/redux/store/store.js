import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../slices/counterSlice/counterSlice";
import todoReducer from "../slices/todoSlice/todoSlice";
import calculatorReducer from "../slices/calculatorSlice/calculatorSlice";
import photosReducer from "../slices/photos/photosSlice";
import commentsReducer from "../slices/comments/comments";
const store = configureStore(
  {
    reducer: {
      counter: counterReducer,
      todos: todoReducer,
      calculator: calculatorReducer,
      photos: photosReducer,
      comments: commentsReducer,
    },
  },
);

export default store;