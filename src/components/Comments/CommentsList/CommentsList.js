import { useSelector } from "react-redux";
import CommentsItem from "../CommentsItem/CommentsItem";

function CommentsList({ toggleCompleted, removeComment }) {
  const comments = useSelector(store => store.comments.comments);
  return (
    <ul>
      {comments.map((currentValue, index, arr) => {
        return (
          <CommentsItem key={currentValue.id} {...currentValue} toggleCompleted={toggleCompleted} removeComment={removeComment} />
        );
      })}
    </ul>
  );
}

export default CommentsList;
