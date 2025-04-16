import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userData = {
    userEmail: email,
    userPassword: password,
  };

  function loginAPI() {
    axios
      .post("http://localhost:3000/loginUser", userData)
      .then((response) => {
        console.log(response);
        alert("User Logged in");
        navigate("/Dashboard");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-10 font-sans bg-[#f8f9fa]">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-md bg-white rounded-xl shadow-lg p-8 space-y-6"
      >
        <img
          src="/src/assets/Login.png" 
          alt="Login Illustration"
          className="w-24 h-24 mx-auto rounded-full object-cover shadow-sm"
        />
        <h3 className="text-2xl font-bold text-center text-[#54402d]">
          Welcome Back to LuminaLife!
        </h3>

        <div className="space-y-4">
          <div>
            <label htmlFor="logEmail" className="block text-[#54402d] mb-1">
              Email
            </label>
            <input
              type="email"
              id="logEmail"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-[#d8e2dc] rounded-md focus:outline-none focus:ring-2 focus:ring-[#bcd4cb]"
            />
          </div>

          <div>
            <label htmlFor="logPassword" className="block text-[#54402d] mb-1">
              Password
            </label>
            <input
              type="password"
              id="logPassword"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-[#d8e2dc] rounded-md focus:outline-none focus:ring-2 focus:ring-[#bcd4cb]"
            />
          </div>

          <button
            onClick={loginAPI}
            className="w-full bg-[#d8e2dc] text-[#54402d] font-semibold py-2 rounded-md hover:bg-[#bcd4cb] transition-all"
          >
            Login
          </button>
        </div>

        <div className="text-center">
          <button className="text-sm text-[#7c6f64] hover:underline">
            Forgot Password?
          </button>
        </div>

        <div className="text-center">
          <p className="text-[#54402d]">Haven't signed up yet?</p>
          <button
            onClick={() => navigate("/SignUp")}
            className="mt-2 text-[#54402d] bg-[#f6cfcf] px-4 py-1 rounded-md hover:bg-[#eac3c3] transition-all"
          >
            Sign Up
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
