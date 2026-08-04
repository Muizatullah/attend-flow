import "./App.css";
import { Routes, Route } from "react-router";
import {
  HomePage,
    About,
  Features,
  Pricing,
  Contact,
  Login,
  Register,
} from "./pages/index.jsx";
import react from "react";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" index element={<HomePage />} />
         <Route path="/about" element={<About />} />
        <Route path="/features" element={<div>test</div>} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
