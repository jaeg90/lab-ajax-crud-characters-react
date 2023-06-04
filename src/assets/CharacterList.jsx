export default function CharacterList(props) {
  const { character } = props;

  return (
    <>
      <div>
        <p>
          <span>Character Name: </span>
          {character.name}
        </p>
        <p>
          <span>Character Occupation: </span>
          {character.occupation}
        </p>
        <p>
          <span>Is a Cartoon? </span>
          {character.cartoon ? "✅" : "❌"}
        </p>
        <p>
          <span>Character Weapon: </span>
          {character.weapon}
        </p>
      </div>
    </>
  );
}
