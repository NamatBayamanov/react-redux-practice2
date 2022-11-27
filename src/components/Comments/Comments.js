import { useState } from "react";
import classes from "./Comments.module.scss";
import CommentsField from "./CommentsField/CommentsField";
import CommentsList from "./CommentsList/CommentsList";
import { useDispatch, useSelector } from 'react-redux';
import { addComments, removeComments, toggleCompleteds } from "../../redux/slices/comments/comments";

function Comments() {
  // const [comments, setComments] = useState([]);

  const [text, setText] = useState("");

  const dispatch = useDispatch();

  // const addComment = (event) => {
  //   switch (text.length > 0) {
  //     case true:
  //       setComments([
  //         ...comments,
  //         {
  //           id: new Date().toISOString(),
  //           text: text,
  //           completed: false,
  //         },
  //       ]);
  //       setText("");
  //       break;
  //   }
  // }; я отключил эту функцию и пишу новую только связанную с redux addComments();
  const addComment = (event) => {
    switch (text.length > 0) {
      case true:
        dispatch(addComments({text}));
        setText('');
      break;
    }
  };

  // const removeComment = (id) => {
  //   setComments(comments.filter(comment => comment.id !== id));
  // }; я отключил эту функцию и пишу новую только связанную с redux removeComments();

  const removeComment = (id) => {
    dispatch(removeComments({id}));
  };


  // const toggleCompleted = (id) => {
  //   setComments(comments.map(comment => {
  //     console.log(comment);
  //     // if (comment.id !== id) {
  //     //   return comment;
  //     // }
  //     // return {
  //     //   ...comment,
  //     //   completed: !comment.completed,
  //     // };
  //     switch (comment.id !== id) {
  //       case true:
  //         return comment;
      
  //       default:
  //         return {...comment, completed: !comment.completed};
  //     }
  //   }));
  // }; я отключил эту функцию и пишу новую только связанную с redux toggleCompleted();

  const toggleCompleted = (id) => {
    dispatch(toggleCompleteds({id}));
  };


  return (
    <div className={classes.Comments}>
      <CommentsField addComment={addComment} handleInput={setText} text={text} />
      <CommentsList toggleCompleted={toggleCompleted} removeComment={removeComment} />
    </div>
  );
}

export default Comments;
