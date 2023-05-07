import React from "react";
import {BrowserRouter,Navigate,Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar'
import Home from './pages/Home'
import Form from "./pages/Form";
import Footer from "./Components/Footer";
import Login from "./pages/login";
import Signup from "./pages/Signup"
import Services from "./pages/Services"
import { useSelector } from "react-redux";
import Contact from './pages/contact'

function App() {
  const isAuth =Boolean(useSelector((state)=>state.token));
  return (
      <BrowserRouter>
        {isAuth && <Navbar/>} 
        <div className="">
          <Routes>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/services" element={<Services />} />
            <Route path="/" element={isAuth ? <Home/> : <Navigate to ="/login"/>}/>
            <Route path="/form" element={<Form />}/>
            <Route path="/contact" element={<Contact />}/>
          </Routes>
        </div>
        {isAuth && <Footer/>}  
      </BrowserRouter>
  );
}

export default App;