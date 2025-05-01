import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";
import SignUpPic from "../assets/SignUpPic.png";

const SignUp = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/;
    return passwordRegex.test(password);
  };

  const userRegister = () => {
    let valid = true;
    setEmailError("");
    setPasswordError("");

    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address (e.g., xyz@gmail.com).");
      valid = false;
    }

    if (!validatePassword(password)) {
      setPasswordError(
        "Password must be at least 6 characters, include a number and a special character."
      );
      valid = false;
    }

    if (!valid) return;

    const userData = {
      userName: name,
      userEmail: email,
      userPassword: password,
    };

    axios
      .post("https://luminalife.onrender.com/registerUser", userData)
      .then((response) => {
        console.log(response);
        alert("User registered");
        navigate("/Login");
      })
      .catch((error) => {
        console.log(error);
        alert("Something went wrong during registration.");
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f8f9fa] px-4 py-10 font-sans">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-md bg-white rounded-xl shadow-lg p-8 space-y-6"
      >
        <img
          src={SignUpPic}
          alt="Signup Illustration"
          className="w-24 h-24 mx-auto rounded-full object-cover shadow-sm"
        />
        <h3 className="text-2xl font-bold text-center text-[#54402d]">
          Welcome to LuminaLife!
        </h3>

        <div className="space-y-4">
          <div>
            <label htmlFor="signName" className="block text-[#54402d] mb-1">
              Name
            </label>
            <input
              type="text"
              id="signName"
              placeholder="Enter Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border border-[#d8e2dc] rounded-md focus:outline-none focus:ring-2 focus:ring-[#bcd4cb]"
            />
          </div>

          <div>
            <label htmlFor="signEmail" className="block text-[#54402d] mb-1">
              Email
            </label>
            <input
              type="email"
              id="signEmail"
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-[#d8e2dc] rounded-md focus:outline-none focus:ring-2 focus:ring-[#bcd4cb]"
            />
            {emailError && (
              <p className="text-sm text-red-500 mt-1">{emailError}</p>
            )}
          </div>

          <div>
            <label htmlFor="signPassword" className="block text-[#54402d] mb-1">
              Password
            </label>
            <input
              type="password"
              id="signPassword"
              placeholder="Enter a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-[#d8e2dc] rounded-md focus:outline-none focus:ring-2 focus:ring-[#bcd4cb]"
            />
            {passwordError && (
              <p className="text-sm text-red-500 mt-1">{passwordError}</p>
            )}
          </div>

          <button
            onClick={userRegister}
            className="w-full bg-[#d8e2dc] text-[#54402d] font-semibold py-2 rounded-md hover:bg-[#bcd4cb] transition-all"
          >
            Sign Up
          </button>
        </div>

        <p className="text-sm text-center text-[#7c6f64]">
          By using this app, you agree to LuminaLife's <u>Privacy Policy</u> &{" "}
          <u>Terms of Use</u>.
        </p>

        <div className="text-center">
          <p className="text-[#54402d]">Already have an account?</p>
          <button
            onClick={() => navigate("/Login")}
            className="mt-2 text-[#54402d] bg-[#f6cfcf] px-4 py-1 rounded-md hover:bg-[#eac3c3] transition-all"
          >
            Login
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default SignUp;
