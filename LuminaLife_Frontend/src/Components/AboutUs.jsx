import React from "react";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <section className="py-16 bg-[#f8f9fa]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#54402d] mb-4">
              About LuminaLife
            </h2>
            <div className="w-24 h-1 bg-[#faedcd] mx-auto mb-6"></div>
            <p className="text-[#6c757d] max-w-2xl mx-auto">
              Guiding you toward wellness, balance, and mindful living in every
              aspect of your journey.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
            <div className="lg:w-1/2">
              <img
                src="https://media.licdn.com/dms/image/D4D12AQEDl8RzVI5fng/article-cover_image-shrink_720_1280/0/1685531451448?e=2147483647&v=beta&t=a8OMlDKrZfOaZv1Bdjh5mCAOawDKe9KsF-O98Cbr2JQ"
                alt="Our Journey"
                className="rounded-lg shadow-md object-cover w-150 h-100"
              />
            </div>
            <div className="lg:w-1/2">
              <h3 className="text-2xl font-semibold text-[#54402d] mb-4">
                Our Story
              </h3>
              <p className="text-[#6c757d] mb-4">
                In 2025, LuminaLife began as a simple idea: wellness shouldn't
                be complicated. Born out of a vision to make wellness a seamless
                part of daily life. Tired of fragmented solutions, we build a
                single, unified platform for holistic wellbeing.
              </p>
              <p className="text-[#6c757d] mb-4">
                From mental clarity to physical vitality and mindful routines,
                we crafted tools to support every aspect of self-care. With
                features like mood tracking, meditation, fitness logs, water
                intake reminders, habit tracking, and even gamified wellness
                streaks — LuminaLife makes healthy living intuitive, personal,
                and fun.
              </p>
              <p className="text-[#6c757d]">
                Today, LuminaLife empowers a growing community to nurture their{" "}
                <strong>🧠 Mind</strong>, <strong>💪 Body</strong>, and{" "}
                <strong>🌱 Lifestyle</strong> — all in one place. We're not just
                an app — we're a movement for mindful living, driven by
                meaningful habits and positive daily actions.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm mb-20">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold text-[#54402d] mb-4">
                  Our Mission
                </h3>
                <p className="text-[#6c757d] mb-6">
                  At LuminaLife, we're committed to illuminating the path to
                  holistic wellness by providing accessible resources,
                  supportive community, and evidence-based practices that
                  empower individuals to thrive physically, mentally, and
                  emotionally.
                </p>
                <div className="bg-[#faedcd] p-6 rounded-lg">
                  <p className="italic text-[#54402d]">
                    "We believe true wellness comes from balance—honoring the
                    connection between mind, body, and spirit in everyday
                    living."
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-[#54402d] mb-4">
                  Our Values
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-[#d8e2dc] rounded-full p-1 mr-3 mt-1">
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
                        Holistic Approach
                      </strong>
                      <p className="text-[#6c757d]">
                        We embrace the interconnectedness of physical, mental,
                        and emotional wellbeing.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-[#d8e2dc] rounded-full p-1 mr-3 mt-1">
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
                      <strong className="text-[#54402d]">Authenticity</strong>
                      <p className="text-[#6c757d]">
                        We champion genuine self-discovery and celebrate each
                        individual's unique wellness journey.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-[#d8e2dc] rounded-full p-1 mr-3 mt-1">
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
                      <strong className="text-[#54402d]">Inclusivity</strong>
                      <p className="text-[#6c757d]">
                        We create spaces where everyone feels welcome,
                        respected, and supported.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-[#d8e2dc] rounded-full p-1 mr-3 mt-1">
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
                        Evidence-Based Practice
                      </strong>
                      <p className="text-[#6c757d]">
                        We combine traditional wisdom with modern research to
                        provide reliable guidance.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

     
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-[#54402d] text-center mb-12">
              What Our Community Says
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
          
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img
                      src="https://i.pinimg.com/236x/36/32/39/363239ad815ea1bc2c059cfcd124437d.jpg"
                      alt="User"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium text-[#54402d]">Bunny B.</h4>
                    <p className="text-sm text-[#6c757d]">User since 2025</p>
                  </div>
                </div>
                <div className="mb-3 text-yellow-500 flex">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                {/* <div className="mb-3 text-yellow-500 text-lg">⭐⭐⭐⭐⭐</div> */}
                <p className="text-[#6c757d] italic">
                  "LuminaLife transformed how I approach self-care. Their
                  holistic program helped me establish sustainable habits that
                  fit perfectly into my busy schedule. I've never felt more
                  balanced!"
                </p>
              </div>

          
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img
                      src="https://i.pinimg.com/236x/3c/e1/4a/3ce14ac1ee8ca62c7e10231c9e003457.jpg"
                      alt="User"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium text-[#54402d]">Mewjin M.</h4>
                    <p className="text-sm text-[#6c757d]">User since 2025</p>
                  </div>
                </div>
                <div className="mb-3 text-yellow-500 flex">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                {/* <div className="mb-3 text-yellow-500 text-lg">⭐⭐⭐⭐⭐</div> */}
                <p className="text-[#6c757d] italic">
                  "The meditation sessions have been life-changing for my
                  anxiety. I've learned techniques that actually work, and the
                  community support makes all the difference. Couldn't recommend
                  it more highly."
                </p>
              </div>

       
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img
                      src="https://i.pinimg.com/236x/39/d7/ff/39d7ffdb4f4055d3efad912a52f178e3.jpg"
                      alt="User"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium text-[#54402d]">CapyBara R.</h4>
                    <p className="text-sm text-[#6c757d]">User since 2025</p>
                  </div>
                </div>
                <div className="mb-3 text-yellow-500 flex">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                {/* <div className="mb-3 text-yellow-500 text-lg">⭐⭐⭐⭐⭐</div> */}
                <p className="text-[#6c757d] italic">
                  "What sets LuminaLife apart is how personalized their approach
                  is. The nutrition plan was tailored perfectly to my needs, and
                  I've seen incredible improvements in my energy levels and
                  overall wellbeing."
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
