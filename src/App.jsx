import "./App.css";
import {Routes, Route} from "react-router";
import {HomePage, Features, About, Contact, Login, Register,} from "./pages/index.jsx";
import react from "react"
function App() {
  return (
    <>
      
      <Routes>
         <Route path="/" index element={<HomePage />} />
         {/* <Route path="/features" element={<Features />} /> */}
         <Route path="/features" element={<div>test</div>} />
         <Route path="/about" element={<About/>} />
         <Route path="/contact" element={<Contact/>} />
         <Route path="/login" element={<Login/>} />
         <Route path="/register" element={<Register/>} />


      </Routes>
    </>
  );
}

export default App;