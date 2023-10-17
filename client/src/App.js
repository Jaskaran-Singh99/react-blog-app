import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { BlogBar } from "./components/blogBar";
import { Login } from "./components/login";
import { Register } from "./components/register";
function App() {
  return (
    <>
    <Router>
    <Navbar></Navbar>
      <Routes>
        <Route path="/login" element={<Login></Login>} ></Route>
        <Route  path="/register" element={<Register></Register>} ></Route>
        <Route path="/" element={<BlogBar></BlogBar>}></Route>
      </Routes>
      
    
    </Router>
    
    </>
     

  );
}

export default App;
