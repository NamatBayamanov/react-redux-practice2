import { useDispatch, useSelector } from "react-redux";
import { addNewTodo, addTodo, fetchTodo } from "../../redux/slices/todoSlice/todoSlice";
import { useState, useEffect } from "react";
import InputField from "./InputField/InputField";
import TodoList from "./TodoList.js/TodoList";
import classes from "./Todos.module.scss";

function Todos() {


  const dispatch = useDispatch();
  // const [todos, setTodos] = useState([]); тепер это мне не нужен потому что я создал массив уже в todoSlice
  const [text, setText] = useState("");

  // const addTodos = (event) => {
  //   if (text.trim().length) {
  //     setTodos([
  //       ...todos,
  //       {
  //         id: new Date().toISOString(),
  //         text: text,
  //         completed: false,
  //       },
  //     ]);
  //   }
  //   setText('');
  // }; я перенес этот метод в todoSlice к reducers

  const addTask = () => {
    // тепер addTodo стал addTask который связан c redux.js
    // if (text.trim().length) {
    //   dispatch(addTodo({ text }));
    //   setText("");
    // }
    switch (text.length > 0) {
      case true:
        dispatch(addNewTodo(text));
        setText("");
        break;
    }
  };

  // const removeTodos = (id) => {
  //   console.log(id);
  //   setTodos(todos.filter(todo => todo.id !== id));
  // }; я импортировал этод метод прямо в ItemTodo из redux.js из eго слайса(среза) в reducers

  // const toggleTodos = (id) => {
  //   setTodos(todos.map(todo => {
  //     console.log(todo);
  //     if(todo.id !== id) return todo;

  //     // console.log(...todo);
  //     return {
  //       ...todo,
  //       completed: !todo.completed,
  //     }
  //   }));
  // }; я этот метод создал в redux.js и на прямую использую этот метод в TodoItem component

  // асинхронные запросы начинаются здесь
  useEffect(() => {
    dispatch(fetchTodo());
  }, [dispatch]);

  const { status, error } = useSelector((store) => store.todos);
  // console.log(error);

  return (
    <div className={classes.Todos}>
      <InputField text={text} handleInput={setText} handleSubmit={addTask} />
      {status === "pending..." && <h2>Pending...</h2>}
      {error && <h2>An error occurred: {error}</h2>}

      <TodoList ///// todos={todos} // removeTodos={removeTodos}  toggleTodos={toggleTodos}
      />
    </div>
  );
}

export default Todos;
