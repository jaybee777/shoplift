import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <div className="px-6 md:max-h-[900px] sm:max-h-[900px] lg:max-h-[800px] overflow-y-scroll  ">
          <div className="flex items-center">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/:id" element={<h1>sorry page not found</h1>} />
            </Routes>
          </div>
          <SignupPage />
          <SignupPage />
          <SignupPage />
          <SignupPage />
          <SignupPage />
          <SignupPage />
          <SignupPage />
        </div>
      </div>
    </>
  );
}

export default App;
