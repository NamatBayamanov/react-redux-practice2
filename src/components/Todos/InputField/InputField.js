function InputField({ text, handleInput, handleSubmit, }) {

  // console.log(handleInput);
  return (
    <label>
      <input value={text} onChange={(event) => handleInput(event.target.value)} />
      <button onClick={handleSubmit}>Add ToDo</button>
    </label>
  );
}

export default InputField;
