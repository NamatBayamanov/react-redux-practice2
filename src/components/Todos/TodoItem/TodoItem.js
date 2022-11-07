import classes from "./TodoItem.module.scss";
import { removeTodo, toggleTodoCompleted, deleteTodo, toggleStatus } from "../../../redux/slices/todoSlice/todoSlice";
import { useDispatch } from "react-redux";
function TodoItem({ completed, id, text, title }) {
  const dispatch = useDispatch();

  return (
    <li className={classes.TodoItem}>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => dispatch(toggleStatus(id))}
      />
      <span className={completed ? `${classes.line}` : null}>
        {title}
      </span>
      <span
        className={classes.color}
        onClick={() => dispatch(deleteTodo(id))}
      >
        &times;
      </span>
    </li>
  );
}

export default TodoItem;
