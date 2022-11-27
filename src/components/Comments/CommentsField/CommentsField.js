function CommentsField({handleInput, addComment, text }) {
  return (
    <div>
      <label>
        <input
          type="text"
          value={text}
          onChange={({ target }) => handleInput(target.value)}
        />
      </label>
      <button onClick={addComment}>Add comment</button>
    </div>
  );
}

export default CommentsField;
