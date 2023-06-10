import { Navigate, Link } from "react-router-dom";

export default function ProfilePage({ userInSession }) {
  if (!userInSession) {
    return <Navigate to="/" />;
  }
  return (
    <>
      <h1>Hola {userInSession.name}</h1>
      <Link to="/">
        Tirar <em>pa</em> casa
      </Link>
    </>
  );
}
