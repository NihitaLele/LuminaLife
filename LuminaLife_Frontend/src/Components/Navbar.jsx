import React from "react";
import Login from "./Login";
import SignUp from "./SignUp";
import Footer from "./Footer";
import AboutUs from "./AboutUs";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import HeroSection from "./HeroSection";

const Navbar = () => {
  return (
    <BrowserRouter>
    <AppBar/>
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/HeroSection" element={<HeroSection/>}/>
        <Route path="/AboutUs" element={<AboutUs/>} />
      </Routes>
    <Footer />
    </BrowserRouter>
  );
};

const AppBar=()=>{
const navigate = useNavigate()
  return <nav className="flex items-center justify-between px-6 py-4 rounded-xl shadow-md font-sans">
        <div className="flex items-center gap-3">
          <img
            src="https://i.pinimg.com/736x/1f/fb/b4/1ffbb480db76df93b4cda630ca674c36.jpg"
            alt="LuminaLife Logo"
            className="w-11 h-11 rounded-full object-cover"
          />
          <button className="text-3xl font-bold text-[#54402d] " onClick={()=>navigate("/HeroSection")}>LuminaLife</button>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex gap-4">
            <button
              onClick={() => navigate("/SignUp")}
              className="bg-[#d8e2dc] text-[#54402d] px-4 py-2 rounded-md hover:bg-[#bcd4cb] transition-all"
            >
              Sign Up
            </button>
            <button
              onClick={() => navigate("/Login")}
              className="bg-[#d8e2dc] text-[#54402d] px-4 py-2 rounded-md hover:bg-[#bcd4cb] transition-all"
            >
              Log In
            </button>
          </div>
          <button className="bg-[#faedcd] text-xl p-2 rounded-full hover:bg-[#f6cfcf] transition-all">
            🌜
          </button>
        </div>
      </nav>
}

export default Navbar;
