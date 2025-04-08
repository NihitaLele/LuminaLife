import React from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import Footer from './Footer';

const Homepage = () => {
  return (
    <div className='bg-[#FFFFFF]'>
      <Navbar />
      <HeroSection />
      <Footer />
    </div>
  );
};

export default Homepage;
