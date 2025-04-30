import React from "react";
import { useNavigate, useLocation, Outlet } from "react-router-dom";
import { FaHome, FaHeart, FaSignOutAlt, FaUser, FaSpa } from "react-icons/fa";

const DashBoardLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="flex min-h-screen">
     <aside className="w-64 bg-white shadow-md p-6 flex flex-col justify-between">
        <div>
          <div className="mb-8 text-center">      
          </div>
          <nav className="space-y-4 text-gray-700">
            <button
              onClick={() => navigate("/DashBoardLayout/DashBoard")}
              className={`flex items-center gap-3 w-full text-left px-2 py-2 rounded-lg ${
                location.pathname === "/DashBoardLayout/DashBoard"
                  ? "bg-[#bcd4cb] text-[#54402d]"
                  : "hover:bg-[#a5c3b8] text-[#54402d]"
              }`}
            >
              <FaHome /> Dashboard
            </button>

            <button
              onClick={() => navigate("/DashBoardLayout/Meditation")}
              className={`flex items-center gap-3 w-full text-left px-2 py-2 rounded-lg ${
                location.pathname === "/DashBoardLayout/Meditation"
                  ? "bg-[#bcd4cb] text-[#54402d]"
                  : "hover:bg-[#a5c3b8] text-[#54402d]"
              }`}
            >
              <FaSpa /> Meditate & Ambient Sounds
            </button>

            <button
              onClick={() => navigate("/DashBoardLayout/Journal")}
              className={`flex items-center gap-3 w-full text-left px-2 py-2 rounded-lg ${
                location.pathname === "/DashBoardLayout/Insights"
                  ? "bg-[#bcd4cb] text-[#54402d]"
                  : "hover:bg-[#a5c3b8] text-[#54402d]"
              }`}
            >
              <FaHeart /> Journal
            </button>
            <button
              onClick={() => navigate("/DashBoardLayout/Profile")}
              className={`flex items-center gap-3 w-full text-left px-2 py-2 rounded-lg ${
                location.pathname === "/DashBoardLayout/Profile"
                  ? "bg-[#bcd4cb] text-[#54402d]"
                  : "hover:bg-[#a5c3b8] text-[#54402d]"
              }`}
            >
              <FaUser /> Profile
            </button>
          </nav>
        </div>

        <button className="flex items-center gap-2 text-red-500 hover:text-red-600">
          <FaSignOutAlt /> Logout
        </button>
      </aside>


      <main className="flex-1 bg-[#f5f5f5] p-6 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default DashBoardLayout;
