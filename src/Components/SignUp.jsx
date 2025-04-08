import React, { useState } from 'react';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-10 font-sans">
      <div className="w-full max-w-md bg-white rounded-xl shadow-xl/20 p-8 space-y-6">
        <img
          src="src/assets/SignUp.png"
          alt="Signup Illustration"
          className="w-24 h-24 mx-auto rounded-full object-cover shadow-sm"
        />
        <h3 className="text-2xl font-bold text-center text-[#54402d]">Welcome to LuminaLife!</h3>

        <div className="space-y-4">
          <div>
            <label htmlFor="signName" className="block text-[#54402d] mb-1">Name</label>
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
            <label htmlFor="signEmail" className="block text-[#54402d] mb-1">Email</label>
            <input
              type="email"
              id="signEmail"
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-[#d8e2dc] rounded-md focus:outline-none focus:ring-2 focus:ring-[#bcd4cb]"
            />
          </div>

          <div>
            <label htmlFor="signPassword" className="block text-[#54402d] mb-1">Password</label>
            <input
              type="password"
              id="signPassword"
              placeholder="Enter a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-[#d8e2dc] rounded-md focus:outline-none focus:ring-2 focus:ring-[#bcd4cb]"
            />
          </div>

          <button className="w-full bg-[#d8e2dc] text-[#54402d] font-semibold py-2 rounded-md hover:bg-[#bcd4cb] transition-all">
            Sign Up
          </button>
        </div>

        <p className="text-sm text-center text-[#7c6f64]">
          By using this app, you agree to LuminaLife's <u>Privacy Policy</u> & <u>Terms of Use</u>.
        </p>

        <div className="text-center">
          <p className="text-[#54402d]">Already have an account?</p>
          <button className="mt-2 text-[#54402d] bg-[#f6cfcf] px-4 py-1 rounded-md hover:bg-[#eac3c3] transition-all">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
