import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <div className="px-6">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signup" element={<h2>signup</h2>} />
            <Route path="/login" element={<h2>login page</h2>} />
            <Route path="/:id" element={<h1>sorry page not found</h1>} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
