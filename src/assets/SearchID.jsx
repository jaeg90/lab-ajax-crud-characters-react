export default function SearchID(props) {
  return (
    <>
      <label>Search by ID </label>
      <input
        value={undefined}
        type="text"
        onChange={(event) => {
          props.handleChangeSearchId(event.target.value);
        }}
      />
    </>
  );
}
