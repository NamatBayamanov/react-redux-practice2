import { createSlice } from "@reduxjs/toolkit";

const comments = createSlice(
  {
    name: 'comments',
    initialState: {
      comments: [],
      status: null,
      error: null,
    },
    reducers: {
      addComments(state, action) {
        state.comments.push({
          id: new Date().toISOString(),
          text: action.payload.text,
          completed: false,
        });
      },
      removeComments(state, action) {
        state.comments = state.comments.filter(comment => comment.id !== action.payload.id);
      },
      toggleCompleteds(state, action) {
        const toggleComment = state.comments.find(comment => comment.id === action.payload.id);
        toggleComment.completed = !toggleComment.completed;
      },
    },
    extraReducers: {},
  },
);

export const {addComments, removeComments, toggleCompleteds} = comments.actions;
export default comments.reducer;