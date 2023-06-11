import { useState } from "react";
import { Link } from "react-router-dom";

export default function Characters({ id, name, occupation, weapon, handleDelete, handleEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [data, setData] = useState({
    id,
    name,
    occupation,
    weapon,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    handleEdit(id, data);
    setIsEditing(false);
  };

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div style={{ border: "2px solid red", padding: "24px" }}>
      {isEditing ? (
        <form onSubmit={(e) => handleSubmit(e)}>
          <input type="text" name="name" value={data.name} onChange={handleChange} />
          <input type="text" name="occupation" value={data.occupation} onChange={handleChange} />
          <input type="text" name="weapon" value={data.weapon} onChange={handleChange} />

          <button type="submit">Editar</button>
        </form>
      ) : (
        <>
          <p>Name: {name}</p>
          <p>Occupation: {occupation}</p>
          <p>Weapon: {weapon}</p>
        </>
      )}
      <Link to={`/characters/${id}`}>Ver detalle</Link>
      <button onClick={() => handleDelete(id)}>🗑</button>
      <button onClick={() => setIsEditing(!isEditing)}>✏️</button>
    </div>
  );
}
