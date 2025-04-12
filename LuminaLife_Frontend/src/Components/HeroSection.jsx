import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

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
            <span className="text-[#7c6f64]">Illuminate</span> Your Wellness
            Journey
          </h1>
          <p className="text-gray-600 text-lg mb-8">
            Track your mood, habits, fitness, and reflections — all in one
            beautiful, intuitive dashboard designed to bring clarity to your
            well-being.
          </p>
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            <motion.button
              onClick={() => navigate("/SignUp")}
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

      <div className="max-w-7xl mx-auto px-6 mt-20">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-semibold text-[#54402d] mb-4">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-amber-100 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive tools to nurture your mind, strengthen your body, and
            enhance your daily lifestyle.
          </p>
        </div>

        {/* Categories Grid - Condensed Version */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Mind Category */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden transition-transform duration-300 hover:shadow-md hover:-translate-y-1">
            <div className="bg-[#d8e2dc] p-4 flex items-center justify-center">
              <div className="text-4xl mb-2">🧠</div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-[#54402d] mb-4 flex items-center">
                Mind
                <div className="w-12 h-1 bg-amber-100 ml-3"></div>
              </h3>
              <p className="text-gray-600 mb-4">
                Tools to nurture mental clarity, emotional balance, and mindful
                awareness.
              </p>

              <ul className="space-y-2 mb-2">
                <li className="flex items-start">
                  <div className="bg-green-100 rounded-full p-1 mr-3 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-[#54402d]"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <strong className="text-[#54402d]">Mood Tracker</strong>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 rounded-full p-1 mr-3 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-[#54402d]"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <strong className="text-[#54402d]">Daily Journal</strong>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Body Category */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden transition-transform duration-300 hover:shadow-md hover:-translate-y-1">
            <div className="bg-[#d8e2dc] p-4 flex items-center justify-center">
              <div className="text-4xl mb-2">💪</div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-[#54402d] mb-4 flex items-center">
                Body
                <div className="w-12 h-1 bg-amber-100 ml-3"></div>
              </h3>
              <p className="text-gray-600 mb-4">
                Resources to track, improve, and maintain your physical
                wellbeing.
              </p>

              <ul className="space-y-2 mb-2">
                <li className="flex items-start">
                  <div className="bg-green-100 rounded-full p-1 mr-3 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-[#54402d]"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <strong className="text-[#54402d]">Fitness Log</strong>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 rounded-full p-1 mr-3 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-[#54402d]"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <strong className="text-[#54402d]">Sleep Tracker</strong>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Lifestyle Category */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden transition-transform duration-300 hover:shadow-md hover:-translate-y-1">
            <div className="bg-[#d8e2dc] p-4 flex items-center justify-center">
              <div className="text-4xl mb-2">🌱</div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-[#54402d] mb-4 flex items-center">
                Lifestyle
                <div className="w-12 h-1 bg-amber-100 ml-3"></div>
              </h3>
              <p className="text-gray-600 mb-4">
                Systems to build positive habits and create meaningful daily
                routines.
              </p>

              <ul className="space-y-2 mb-2">
                <li className="flex items-start">
                  <div className="bg-green-100 rounded-full p-1 mr-3 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-[#54402d]"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <strong className="text-[#54402d]">Habit Tracker</strong>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 rounded-full p-1 mr-3 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-[#54402d]"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <strong className="text-[#54402d]">Gratitude Wall</strong>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* See All Services Button */}
        <div className="text-center mb-16">
          <button
            onClick={() => navigate("/Services")}
            className="bg-[#d8e2dc] border border-amber-900 text-[#54402d] px-6 py-2 rounded-lg font-medium hover:bg-[#bcd4cb] transition-colors"
          >
            See All Services
          </button>
        </div>
      </div>

      {/* Feature Highlight */}
      <div className="bg-white rounded-xl p-8 shadow-sm mb-16">
        <div className="text-center mb-10">
          <h3 className="text-2xl font-semibold text-[#54402d] mb-3">
            How LuminaLife Works
          </h3>
          <div className="w-24 h-1 bg-amber-100 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our holistic approach seamlessly integrates mind, body, and
            lifestyle tools to create a complete wellness ecosystem.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="p-4">
            <div className="bg-amber-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-[#54402d]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            </div>
            <h4 className="text-lg font-medium text-[#54402d] mb-2">
              1. Create Your Profile
            </h4>
            <p className="text-gray-600">
              Set up your personal wellness goals and preferences to customize
              your experience.
            </p>
          </div>

          <div className="p-4">
            <div className="bg-amber-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-[#54402d]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                />
              </svg>
            </div>
            <h4 className="text-lg font-medium text-[#54402d] mb-2">
              2. Track Daily Activities
            </h4>
            <p className="text-gray-600">
              Use our intuitive tools to monitor your habits, moods, and
              physical activities.
            </p>
          </div>

          <div className="p-4">
            <div className="bg-amber-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-[#54402d]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                />
              </svg>
            </div>
            <h4 className="text-lg font-medium text-[#54402d] mb-2">
              3. See Your Progress
            </h4>
            <p className="text-gray-600">
              Gain insights from personalized analytics that help you understand
              your wellness journey.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-amber-50 rounded-xl p-10 text-center">
        <h3 className="text-2xl font-semibold text-[#54402d] mb-4">
          Ready to Begin Your Wellness Journey?
        </h3>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          Join thousands of others who are experiencing the benefits of a
          balanced, mindful approach to wellbeing with LuminaLife.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={() => navigate("/SignUp")}
            className="bg-[#d8e2dc] border border-amber-900 text-[#54402d] px-8 py-3 rounded-lg font-medium hover:bg-[#bcd4cb] transition-colors"
          >
            Start Free Trial
          </button>
          <button
            onClick={() => navigate("/AboutUs")}
            className="bg-[#d8e2dc] border border-amber-900 text-[#54402d] px-8 py-3 rounded-lg font-medium hover:bg-[#bcd4cb] transition-colors"
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
