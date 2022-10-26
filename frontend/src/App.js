import { findRenderedComponentWithType } from "react-dom/test-utils";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import PageNotFound, { ErrorPage } from "./pages/ErrorPage";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/register" element={<RegistrationPage />} />
        <Route exact path="/login" element={<LoginPage />} />
        {/**TODO: Add a route for 404 page */}
        <Route exact path="/404errorpage" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
