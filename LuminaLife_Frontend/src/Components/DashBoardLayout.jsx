import React from "react";
import { useNavigate, useLocation, Outlet } from "react-router-dom";
import {
  FaHome,
  FaChartBar,
  FaSignOutAlt,
  FaUser,
  FaSpa,
} from "react-icons/fa";

const DashBoardLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md p-6 flex flex-col justify-between">
        <div>
          <div className="mb-8 text-center">
            <div className="w-20 h-20 bg-[#bcd4cb] rounded-full mx-auto mb-2 border-4 border-[#a5c3b8]"></div>
            <h2 className="text-lg font-semibold text-[#54402d]">Nihita 💖</h2>
            <p className="text-sm text-gray-500">Welcome back!</p>
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
              onClick={() => navigate("/DashBoardLayout/CreateProfile")}
              className={`flex items-center gap-3 w-full text-left px-2 py-2 rounded-lg ${
                location.pathname === "/DashBoardLayout/Profile"
                  ? "bg-[#bcd4cb] text-[#54402d]"
                  : "hover:bg-[#a5c3b8] text-[#54402d]"
              }`}
            >
              <FaUser /> Profile
            </button>

            <button
              onClick={() => navigate("/DashBoardLayout/Insights")}
              className={`flex items-center gap-3 w-full text-left px-2 py-2 rounded-lg ${
                location.pathname === "/DashBoardLayout/Insights"
                  ? "bg-[#bcd4cb] text-[#54402d]"
                  : "hover:bg-[#a5c3b8] text-[#54402d]"
              }`}
            >
              <FaChartBar /> Insights
            </button>

            <button
              onClick={() => navigate("/DashBoardLayout/Meditation")}
              className={`flex items-center gap-3 w-full text-left px-2 py-2 rounded-lg ${
                location.pathname === "/DashBoardLayout/Meditation"
                  ? "bg-[#bcd4cb] text-[#54402d]"
                  : "hover:bg-[#a5c3b8] text-[#54402d]"
              }`}
            >
              <FaSpa /> Meditate
            </button>
          </nav>
        </div>

        <button className="flex items-center gap-2 text-red-500 hover:text-red-600">
          <FaSignOutAlt /> Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-[#f5f5f5] p-6 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default DashBoardLayout;
