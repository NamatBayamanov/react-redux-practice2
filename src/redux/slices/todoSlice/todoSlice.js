import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchTodo = createAsyncThunk(
  'todos/fetchTodo', async function ( _, {rejectWithValue}) {
  
    try {
      const responce = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10');
      if (!responce.ok) {
        throw new Error('Server does`t Work');
      }
      const data = responce.json();
      return data;
      
    } catch (error) {
      console.log(error.message);
      return rejectWithValue(error.message);
    }
  },  

);

export const deleteTodo = createAsyncThunk('todos/deleteTodo', async function(id, {dispatch, rejectWithValue}) {
  try {

    // console.log(id);
  
    const responce = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      method: 'DELETE',
    });
    console.log(responce);

    if (!responce.ok) {
      throw new Error('Can`t delete todo, Server Error');
    }

    dispatch(removeTodo({id}));
    
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const toggleStatus = createAsyncThunk('todos/toggleStatus', async function(id, {dispatch, rejectWithValue, getState}) {

  const todo = getState().todos.todos.find(todo => todo.id === id);

  console.log(todo);
  try {
    const responce = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        completed: !todo.completed,
      }),
    });

    if (!responce.ok) {
      throw new Error(`Does't change`);
    }

    // const thatEl = getState().todos.find(todo => todo.id === id);
    
    
    dispatch(toggleTodoCompleted({id}));

  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const addNewTodo = createAsyncThunk('todos/addNewTodo', async function(text, {dispatch, rejectWithValue}) {
  
  try {
    const todo = {
      title: text,
      userId: 1,
      completed: false,
    };
    const responce = await fetch(`https://jsonplaceholder.typicode.com/todos`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(todo),
  });
  if (!responce.ok) {
    throw new Error(`Can't add new task! Server Error`);
  }
  const data = await responce.json();
  console.log(data);
  dispatch(addTodo(data));
  } catch (error) {
    return rejectWithValue(error.message);
  }
});


const setError = (state, action) => {
  state.status = 'rejected';
  state.error = action.payload; 
};

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
    status: null,
    error: null,
  },
  reducers: {
    addTodo(state, action) {
      console.log(state);
      console.log(action);
      // state.todos.push({
      //   id: new Date().toISOString(),
      //   text: action.payload.text,
      //   completed: false,
      // }); тепер эту запис перепищу в другую форму для работы с фейковым сервером
      state.todos.push(action.payload);
    },
    removeTodo(state, action) {
      // console.log(state.todos);
      state.todos = state.todos.filter(todo => todo.id !== action.payload.id);
    },
    toggleTodoCompleted(state, action) {
      const toggledTodo = state.todos.find(todo => todo.id === action.payload.id);
      toggledTodo.completed = !toggledTodo.completed;
    },
  },
  extraReducers: {
    [fetchTodo.pending]: (state, action) => {
      state.status = 'pending...';
      state.error = null;
    },
    [fetchTodo.fulfilled]: (state, action) => {
      state.status = 'resolved';
      state.todos = action.payload;
    },
    [fetchTodo.rejected]: setError,
    [deleteTodo.rejected]: setError,
    [toggleStatus.rejected]: setError, 
    [addNewTodo.rejected]: setError,
  },
});

export const { addTodo, removeTodo, toggleTodoCompleted } = todoSlice.actions;
export default todoSlice.reducer;
