import axios from "axios";
import { useEffect, useState } from "react";
import Characters from "./Characters";

const API_URL = "http://localhost:8000/characters";
export default function CharactersList() {
  const [characters, setCharacters] = useState([]);
  const [data, setData] = useState({
    name: "",
    occupation: "",
    weapon: "",
  });

  const getData = async () => {
    try {
      const response = await axios.get(API_URL);
      setCharacters(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const displayCharacters = () => {
    return characters.map((character) => (
      <Characters key={character.id} handleDelete={handleDelete} handleEdit={handleEdit} {...character} />
    ));
  };

  const cleanInputs = () => {
    setData({
      name: "",
      occupation: "",
      weapon: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(API_URL, { name, occupation, weapon });
      getData();
      cleanInputs();
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      getData();
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = async (id, data) => {
    try {
      await axios.put(`${API_URL}/${id}`, data);
      getData();
    } catch (error) {
      console.log(error);
    }
  };

  const { name, occupation, weapon } = data;

  return (
    <>
      <h1>characters</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" name="name" value={name} onChange={handleChange} />
        <input type="text" name="occupation" value={occupation} onChange={handleChange} />
        <input type="text" name="weapon" value={weapon} onChange={handleChange} />

        <button type="submit">Create</button>
      </form>
      {characters.length ? displayCharacters() : <p>No hay datos</p>}
    </>
  );
}
