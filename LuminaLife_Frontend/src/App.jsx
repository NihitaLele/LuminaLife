import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import HeroSection from "./Components/HeroSection";
import Loader from "./Components/Loader";
import DashBoardLayout from "./Components/DashBoardLayout";

const Login = React.lazy(() => import("./Components/Login"));
const SignUp = React.lazy(() => import("./Components/SignUp"));
const AboutUs = React.lazy(() => import("./Components/AboutUs"));
const Services = React.lazy(() => import("./Components/Services"));
const DashBoard = React.lazy(() => import("./Components/DashBoard"));
const Meditation = React.lazy(() => import("./Components/Meditation"));
const CreateProfile = React.lazy(() => import("./Components/CreateProfile"));
const Profile = React.lazy(() => import("./Components/Profile"));
const GratitudeWall = React.lazy(() => import("./Components/GratitudeWall"));



const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Suspense fallback={<Loader />}>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<HeroSection />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Services" element={<Services />} />
          <Route path="CreateProfile" element={<CreateProfile/>} />

          {/* Dashboard + Nested Layout */}
          <Route path="/DashBoardLayout" element={<DashBoardLayout />}>
            <Route index element={<DashBoard />} /> {/* Default subroute */}
            <Route path="DashBoard" element={<DashBoard />} />
            <Route path="Meditation" element={<Meditation />} />
            <Route path="Profile" element={<Profile />} />
            <Route path="GratitudeWall" element={<GratitudeWall />} />
          </Route>
        </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
