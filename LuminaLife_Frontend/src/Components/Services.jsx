import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Services = () => {
  const navigate = useNavigate();
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#54402d] mb-4">
              Our Services
            </h2>
            <div className="w-24 h-1 bg-amber-100 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive tools to nurture your mind, strengthen your body,
              and enhance your daily lifestyle.
            </p>
          </div>

          {/* Categories Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
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
                <p className="text-gray-600 mb-6">
                  Tools to nurture mental clarity, emotional balance, and
                  mindful awareness in your daily life.
                </p>

                <ul className="space-y-3">
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
                      <p className="text-gray-600">
                        Express your emotions with emojis and sliders for easy
                        daily check-ins
                      </p>
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
                      <strong className="text-[#54402d]">
                        Meditation Timer
                      </strong>
                      <p className="text-gray-600">
                        Focus your mind with customizable timers and soothing
                        ambient sounds
                      </p>
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
                      <strong className="text-[#54402d]">
                        Quote of the Day
                      </strong>
                      <p className="text-gray-600">
                        Begin each day with inspiring wisdom to set a positive
                        tone
                      </p>
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
                <p className="text-gray-600 mb-6">
                  Resources to track, improve, and maintain your physical
                  wellbeing and vitality.
                </p>

                <ul className="space-y-3">
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
                      <strong className="text-[#54402d]">
                        Water Intake Tracker
                      </strong>
                      <p className="text-gray-600">
                        Stay hydrated with convenient quick-add buttons for
                        water consumption
                      </p>
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
                      <p className="text-gray-600">
                        Record sleep patterns and set goals for better rest
                        quality
                      </p>
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
                <p className="text-gray-600 mb-6">
                  Systems to build positive habits and create meaningful daily
                  routines.
                </p>

                <ul className="space-y-3">
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
                      <p className="text-gray-600">
                        Capture moments of appreciation with beautiful visual
                        cards
                      </p>
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
                      <strong className="text-[#54402d]">Daily To-Dos</strong>
                      <p className="text-gray-600">
                        Organize your wellness routines with simple task
                        management
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
