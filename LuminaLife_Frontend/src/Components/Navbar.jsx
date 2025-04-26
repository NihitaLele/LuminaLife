import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <>
    <nav className="flex items-center justify-between px-6 py-4 shadow-md font-sans">
      <div className="flex items-center gap-3">
        <img
          src="https://i.pinimg.com/736x/1f/fb/b4/1ffbb480db76df93b4cda630ca674c36.jpg"
          alt="LuminaLife Logo"
          className="w-11 h-11 rounded-full object-cover"
        />
        <button
          className="text-3xl font-bold text-[#54402d]"
          onClick={() => navigate("/")}
        >
          LuminaLife
        </button>
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

</>
  );
};

export default Navbar;
