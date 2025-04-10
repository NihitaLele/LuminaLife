import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate()
  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-6">
        
        <motion.div
          className="text-center lg:text-left w-full lg:w-[52%]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#54402d] mb-6 leading-tight">
            <span className="text-[#7c6f64]">Illuminate</span> Your Wellness Journey
          </h1>
          <p className="text-gray-600 text-lg mb-8">
          Track your mood, habits, fitness, and reflections — all in one beautiful, intuitive dashboard designed to bring clarity to your well-being.
          </p>
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            <motion.button
              onClick={()=>navigate("/SignUp")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#d8e2dc] font-bold text-[#54402d] px-4 py-2 rounded-md hover:bg-[#bcd4cb] transition-all"
            >
              Start Your Journey
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#d8e2dc] font-bold text-[#54402d] px-4 py-2 rounded-md hover:bg-[#bcd4cb] transition-all"
            >
              Take a Tour
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          className="w-full lg:w-[46%] flex-shrink-0"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        >
          <img
            src="src/assets/HeroSectionPicture.jpg"
            alt="Wellness Illustration"
            className="w-full max-w-sm mx-auto"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
