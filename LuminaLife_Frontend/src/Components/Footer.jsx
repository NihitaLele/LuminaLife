import React from "react";
// import AboutUs from "./AboutUs";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-[#f8f9fa] mt-auto border-t border-[#e9ecef]">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="https://i.pinimg.com/736x/1f/fb/b4/1ffbb480db76df93b4cda630ca674c36.jpg"
                alt="LuminaLife Logo"
                className="w-10 h-10 rounded-full object-cover"
              />
              <span className="text-2xl font-bold text-[#54402d]">
                LuminaLife
              </span>
            </div>
            <p className="text-[#6c757d] mb-4">
            Mindful wellness made simple — <br/>for your mind, body, and lifestyle.
            </p>
            <div className="flex gap-4">
              <button className="text-[#54402d] hover:text-[#faedcd]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </button>
              <button className="text-[#54402d] hover:text-[#faedcd]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </button>
              <button className="text-[#54402d] hover:text-[#faedcd]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </button>
            </div>
          </div>

          <div className="col-span-1">
            <h3 className="text-lg font-semibold text-[#54402d] mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => navigate("/HeroSection")}
                  className="text-[#6c757d] hover:text-[#54402d] transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  className="text-[#6c757d] hover:text-[#54402d] transition-colors"
                  // onClick={() => navigate("/AboutUs")}
                >
                  About Us
                </button>
              </li>
              <li>
                <button className="text-[#6c757d] hover:text-[#54402d] transition-colors">
                  Services
                </button>
              </li>
              <li>
                <button className="text-[#6c757d] hover:text-[#54402d] transition-colors">
                  Blog
                </button>
              </li>
              <li>
                <button className="text-[#6c757d] hover:text-[#54402d] transition-colors">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-lg font-semibold text-[#54402d] mb-4">
              Our Services
            </h3>
            <ul className="space-y-2">
              <li>
                <button className="text-[#6c757d] hover:text-[#54402d] transition-colors">
                Mind & Mood Support
                </button>
              </li>
              <li>
                <button className="text-[#6c757d] hover:text-[#54402d] transition-colors">
                Fitness & Body Tracking
                </button>
              </li>
              <li>
                <button className="text-[#6c757d] hover:text-[#54402d] transition-colors">
                Lifestyle & Habit Coaching
                </button>
              </li>
              <li>
                <button className="text-[#6c757d] hover:text-[#54402d] transition-colors">
                Journaling & Reflection
                </button>
              </li>
              <li>
                <button className="text-[#6c757d] hover:text-[#54402d] transition-colors">
                Sleep, Water & Wellness Logs
                </button>
              </li>
              <li>
                <button className="text-[#6c757d] hover:text-[#54402d] transition-colors">
                Gamified Growth & Motivation
                </button>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-lg font-semibold text-[#54402d] mb-4">
              Stay Connected
            </h3>
            <p className="text-[#6c757d] mb-4">
              Subscribe to our newsletter for wellness tips and updates.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 bg-white border border-[#d8e2dc] rounded-l-md focus:outline-none focus:ring-1 focus:ring-[#54402d] flex-grow"
              />
              <button className="bg-[#d8e2dc] text-[#54402d] px-4 py-2 rounded-r-md hover:bg-[#bcd4cb] transition-all">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-[#e9ecef] mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-[#6c757d] text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} LuminaLife. All rights reserved.
          </p>
          <div className="flex gap-6">
            <button className="text-sm text-[#6c757d] hover:text-[#54402d] transition-colors">
              Privacy Policy
            </button>
            <button className="text-sm text-[#6c757d] hover:text-[#54402d] transition-colors">
              Terms of Service
            </button>
            <button className="text-sm text-[#6c757d] hover:text-[#54402d] transition-colors">
              Cookies
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


// import React from 'react';

// const Footer = () => {
//   return (
//     <footer className="bg-[#f8f9fa] border-t border-[#e9ecef] pt-12 pb-6">
//       <div className="max-w-7xl mx-auto px-6">
//         {/* Main Footer Content */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
//           {/* Column 1: About */}
//           <div className="lg:col-span-2">
//             <h3 className="text-xl font-semibold text-[#54402d] mb-4">LuminaLife</h3>
//             <p className="text-[#6c757d] mb-4">
//               Guiding you toward wellness, balance, and mindful living in every aspect of your journey.
//             </p>
//             <div className="flex space-x-4">
//               <a href="#" className="text-[#54402d] hover:text-[#bcd4cb] transition-colors">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
//                   <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
//                 </svg>
//               </a>
//               <a href="#" className="text-[#54402d] hover:text-[#bcd4cb] transition-colors">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
//                   <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
//                 </svg>
//               </a>
//               <a href="#" className="text-[#54402d] hover:text-[#bcd4cb] transition-colors">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
//                   <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
//                 </svg>
//               </a>
//             </div>
//           </div>
          
//           {/* Column 2: Mind */}
//           <div>
//             <h3 className="text-lg font-semibold text-[#54402d] mb-4 flex items-center">
//               <span className="mr-2">🧠</span> Mind
//             </h3>
//             <ul className="space-y-2">
//               <li className="text-[#6c757d] hover:text-[#54402d] transition-colors">
//                 <a href="/mind/mood-tracker">Mood Tracker</a>
//               </li>
//               <li className="text-[#6c757d] hover:text-[#54402d] transition-colors">
//                 <a href="/mind/daily-journal">Daily Journal</a>
//               </li>
//               <li className="text-[#6c757d] hover:text-[#54402d] transition-colors">
//                 <a href="/mind/meditation-timer">Meditation Timer</a>
//               </li>
//               <li className="text-[#6c757d] hover:text-[#54402d] transition-colors">
//                 <a href="/mind/daily-quote">Quote of the Day</a>
//               </li>
//             </ul>
//           </div>
          
//           {/* Column 3: Body */}
//           <div>
//             <h3 className="text-lg font-semibold text-[#54402d] mb-4 flex items-center">
//               <span className="mr-2">💪</span> Body
//             </h3>
//             <ul className="space-y-2">
//               <li className="text-[#6c757d] hover:text-[#54402d] transition-colors">
//                 <a href="/body/fitness-log">Fitness Log</a>
//               </li>
//               <li className="text-[#6c757d] hover:text-[#54402d] transition-colors">
//                 <a href="/body/water-intake">Water Intake Tracker</a>
//               </li>
//               <li className="text-[#6c757d] hover:text-[#54402d] transition-colors">
//                 <a href="/body/sleep-tracker">Sleep Tracker</a>
//               </li>
//               <li className="text-[#6c757d] hover:text-[#54402d] transition-colors">
//                 <a href="/body/health-summary">Weekly Health Summary</a>
//               </li>
//             </ul>
//           </div>
          
//           {/* Column 4: Lifestyle */}
//           <div>
//             <h3 className="text-lg font-semibold text-[#54402d] mb-4 flex items-center">
//               <span className="mr-2">🌱</span> Lifestyle
//             </h3>
//             <ul className="space-y-2">
//               <li className="text-[#6c757d] hover:text-[#54402d] transition-colors">
//                 <a href="/lifestyle/habit-tracker">Habit Tracker</a>
//               </li>
//               <li className="text-[#6c757d] hover:text-[#54402d] transition-colors">
//                 <a href="/lifestyle/gratitude-wall">Gratitude Wall</a>
//               </li>
//               <li className="text-[#6c757d] hover:text-[#54402d] transition-colors">
//                 <a href="/lifestyle/daily-todos">Daily To-Dos</a>
//               </li>
//               <li className="text-[#6c757d] hover:text-[#54402d] transition-colors">
//                 <a href="/lifestyle/weekly-reflection">Weekly Reflection</a>
//               </li>
//               <li className="text-[#6c757d] hover:text-[#54402d] transition-colors">
//                 <a href="/lifestyle/streaks">Streaks & XP Points</a>
//               </li>
//             </ul>
//           </div>
//         </div>
        
//         {/* Newsletter */}
//         <div className="bg-white p-6 rounded-lg shadow-sm mb-10">
//           <div className="grid md:grid-cols-3 gap-6 items-center">
//             <div className="md:col-span-2">
//               <h4 className="text-lg font-medium text-[#54402d] mb-2">Join Our Wellness Journey</h4>
//               <p className="text-[#6c757d]">Subscribe to receive wellness tips, mindfulness practices, and exclusive content.</p>
//             </div>
//             <div>
//               <form className="flex">
//                 <input 
//                   type="email" 
//                   placeholder="Your email address" 
//                   className="px-4 py-2 rounded-l-md border border-r-0 border-[#ced4da] w-full focus:outline-none focus:ring-2 focus:ring-[#faedcd]"
//                 />
//                 <button className="bg-[#54402d] text-white px-4 py-2 rounded-r-md hover:bg-[#3a2c1f] transition-colors">
//                   Subscribe
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
        
//         {/* Bottom Footer */}
//         <div className="pt-6 border-t border-[#e9ecef]">
//           <div className="flex flex-col md:flex-row md:justify-between items-center">
//             <p className="text-[#6c757d] text-sm mb-4 md:mb-0">
//               © {new Date().getFullYear()} LuminaLife. All rights reserved.
//             </p>
//             <div className="flex space-x-6">
//               <a href="/privacy-policy" className="text-sm text-[#6c757d] hover:text-[#54402d] transition-colors">
//                 Privacy Policy
//               </a>
//               <a href="/terms-of-service" className="text-sm text-[#6c757d] hover:text-[#54402d] transition-colors">
//                 Terms of Service
//               </a>
//               <a href="/contact-us" className="text-sm text-[#6c757d] hover:text-[#54402d] transition-colors">
//                 Contact Us
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;