import classes from './CommentsItem.module.scss';
function CommentsItem({completed, id, text, toggleCompleted, removeComment}) {
  return (
    <li>
      <input
        type="checkbox"
        checked={completed}
        onClick={() => toggleCompleted(id)}
        onChange={() => {}}
      />
      <span className={`${completed ? classes.through : null}`}>
        {text}
      </span>
      <span
        className={classes.delete}
        onClick={() => removeComment(id)}
      >
        &times;
      </span>
    </li>
  );
}

export default CommentsItem;
