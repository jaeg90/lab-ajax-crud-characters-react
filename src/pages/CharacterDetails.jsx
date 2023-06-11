import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:8000/characters";

export default function CharacterDetails() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(`${API_URL}/${id}`);
      setCharacter(res.data);
    };
    getData();
  }, [id]);

  return (
    <div>
      {character ? (
        <>
          <h1>Detalle de {character.name}</h1>
          <p>Ocupación: {character.occupation}</p>
          <p>Arma: {character.weapon}</p>
        </>
      ) : (
        <div>
          <h1>¿Por qué pones un personaje que no existe?</h1>
        </div>
      )}
    </div>
  );
}
