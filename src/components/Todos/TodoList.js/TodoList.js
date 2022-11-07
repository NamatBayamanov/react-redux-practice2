import TodoItem from "../TodoItem/TodoItem";
import { useSelector } from "react-redux";

function TodoList() {
  const todos = useSelector((store) => {
    return store.todos.todos;
  });
  return ( 
    <ul>
      {todos.map((todo) => <TodoItem key={todo.id} {...todo}  />)} 
    </ul>
    // removeTodos={removeTodos} toggleTodos={toggleTodos} их я удалил в TodoItem component и импортировал прямо TodoItem component и redux.js из todoSlice
  );
}

export default TodoList;