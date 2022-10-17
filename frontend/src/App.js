import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <>
      <Routes>
        {/**TODO: Add a route for landing page */}
        {/**TODO: Add a route for register page */}
        <Route exact path="/login" element={<LoginPage />} />
        {/**TODO: Add a route for 404 page */}
      </Routes>
    </>
  );
}

export default App;
