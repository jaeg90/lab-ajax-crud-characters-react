export default function DeleteCharacter(props) {
  const handleSubmit = (e) => {
    e.preventDefault();
    props.deleteCharacter(e.target[0].value);
  };

  return (
    <form onSubmit={(event) => handleSubmit(event)}>
      <label>Delete Character </label>
      <input name="deleteID"></input>
      <button type="submit">Delete</button>
    </form>
  );
}
