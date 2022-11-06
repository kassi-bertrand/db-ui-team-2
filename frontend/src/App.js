import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import { ErrorPage } from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";


function App() {

  return (
    <>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/register" element={<RegistrationPage/>} />
        <Route exact path="/login" element={<LoginPage/>} />
        <Route exact path="/*" element={<ErrorPage />} />
        <Route exact path="/home" element={<HomePage/>} />
      </Routes>
    </>
  );
}

export default App;
