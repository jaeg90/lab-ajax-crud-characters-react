import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import ErrorPage from "./pages/ErrorPage";
import CharacterDetails from "./pages/CharacterDetails";

function App() {
  const userInSession = { name: "Fulano" };

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/characters/:id" element={<CharacterDetails />} />
        <Route path="/profile" element={<ProfilePage userInSession={userInSession} />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
