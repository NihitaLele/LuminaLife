import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import HeroSection from "./Components/HeroSection";
import Loader from "./Components/Loader";


const Login = React.lazy(() => import("./Components/Login"));
const SignUp = React.lazy(() => import("./Components/SignUp"));
const AboutUs = React.lazy(() => import("./Components/AboutUs"));
const Services = React.lazy(() => import("./Components/Services"));

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
       <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Services" element={<Services />} />
        </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
