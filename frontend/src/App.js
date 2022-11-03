import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import { ErrorPage } from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import { useState } from "react";


function App() {
  
  /**
   * NOTE: "User" state to be passed
   * to the page components, so user
   * infos persist across them.
   * 
   * This state must set in the Login or
   * register page, after user successfully
   * authenticate; otherwise should remain "null".
   * 
   * Visitors will be redirected to login page
   * as long as the state is "null"
   */
  const [user, setUser] = useState(null);

  return (
    <>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/register" element={<RegistrationPage setUser={setUser} />} />
        <Route exact path="/login" element={<LoginPage setUser={setUser} />} />
        <Route exact path="/*" element={<ErrorPage />} />
        <Route exact path="/home" element={<HomePage/>} />
      </Routes>
    </>
  );
}

export default App;
