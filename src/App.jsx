import { useState, useEffect } from "react";
import axios from "axios";

const apiURL = "http://localhost:8000/characters";

import CharacterList from "./assets/CharacterList";
import SeachID from "./assets/SearchID";
import DeleteCharacter from "./assets/DeleteCharacter";

function App() {
  const [fetching, setFetching] = useState(true);
  const [characters, setCharacters] = useState([]);
  const [allCharacter, setAllCharacter] = useState([]);

  useEffect(() => {
    console.log("useEffect - Initial render (Mounting)");
    axios.get(apiURL).then((response) => {
      setCharacters(response.data);
      setAllCharacter(response.data);
      setFetching(false);
    });
  }, []);

  const handleChangeSearchId = (id) => {
    let copy = [...allCharacter];
    if (id.length > 0) {
      copy = copy.filter((char) => char.id === Number(id));
    }
    setCharacters(copy);
  };

  const deleteCharacter = (id) => {
    console.log(id);
    console.log(apiURL + `/${id}`);
    axios.delete(apiURL + `/${id}`);
    // useEffect(() => {
    //   axios.delete(apiURL + `/${id}`);
    // });
  };

  return (
    <>
      {" "}
      <h3>List of characters</h3>
      {fetching && <p>Loading ...</p>}
      {characters.map((char) => {
        return (
          <div key={char.id}>
            <CharacterList character={char} />
          </div>
        );
      })}
      <SeachID handleChangeSearchId={handleChangeSearchId} />
      <DeleteCharacter deleteCharacter={deleteCharacter} />
    </>
  );
}

export default App;
