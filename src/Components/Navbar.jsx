import React from "react";
import Login from "./Login";
import SignUp from "./SignUp";
import Homepage from "./Homepage";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

const Navbar = () => {
  return (
    <BrowserRouter>
      <nav className="flex items-center justify-between px-6 py-4 rounded-xl shadow-md font-sans"> 
        <div className="flex items-center gap-3">
          <img
            src="https://i.pinimg.com/736x/1f/fb/b4/1ffbb480db76df93b4cda630ca674c36.jpg"
            alt="LuminaLife Logo"
            className="w-11 h-11 rounded-full object-cover"
          />
          <h1 className="text-3xl font-bold text-[#54402d] ">LuminaLife</h1>
        </div>

        <div className="flex items-center gap-4">
          <NavApp />
          <button className="bg-[#faedcd] text-xl p-2 rounded-full hover:bg-[#f6cfcf] transition-all">
            🌜
          </button>
        </div>
      </nav>

      <Routes> 
        <Route path="/" element={<Homepage />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

const NavApp = () => {
  const navigate = useNavigate();
  return (
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
  );
};

export default Navbar;
