import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div>
      <h1>Ups... parece que este enlace no existe, Andrés</h1>
      <Link to="/">
        Tirar <em>pa</em> casa
      </Link>
    </div>
  );
}
