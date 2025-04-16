// Dashboard.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaHome,
  FaChartBar,
  FaSignOutAlt,
  FaUser,
  FaSpa,
} from "react-icons/fa";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Dashboard = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("");
  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);
  const [waterIntake, setWaterIntake] = useState(0);
  const [sleepHours, setSleepHours] = useState(7);
  const [sleepGoal, setSleepGoal] = useState(8);

  const addTodo = () => {
    if (todoInput.trim() !== "") {
      if (editingIndex !== null) {
        const updatedTodos = [...todos];
        updatedTodos[editingIndex] = todoInput.trim();
        setTodos(updatedTodos);
        setEditingIndex(null);
      } else {
        setTodos([...todos, todoInput.trim()]);
      }
      setTodoInput("");
    }
  };

  const deleteTodo = (index) => {
    const updated = todos.filter((_, i) => i !== index);
    setTodos(updated);
  };

  const startEditing = (index) => {
    setTodoInput(todos[index]);
    setEditingIndex(index);
  };

  const [thought, setThought] = useState("Loading...");

  const waterData = [
    { day: "Mon", ml: 1500 },
    { day: "Tue", ml: 1800 },
    { day: "Wed", ml: 1200 },
    { day: "Thu", ml: 2000 },
    { day: "Fri", ml: 1700 },
    { day: "Sat", ml: 2100 },
    { day: "Sun", ml: 1900 },
  ];

  const sleepData = [
    { day: "Mon", hours: 7 },
    { day: "Tue", hours: 6.5 },
    { day: "Wed", hours: 8 },
    { day: "Thu", hours: 7 },
    { day: "Fri", hours: 5.5 },
    { day: "Sat", hours: 9 },
    { day: "Sun", hours: 7.5 },
  ];

  useEffect(() => {
    async function fetchThought() {
      try {
        const response = await fetch("https://api.api-ninjas.com/v1/advice", {
          headers: {
            "X-Api-Key": "YOUR_API_KEY", // Replace with your own API key
          },
        });
        const data = await response.json();
        if (data && data.advice) {
          setThought(data.advice);
        }
      } catch (error) {
        console.error("Error fetching thought:", error);
        setThought("Stay positive and productive! 💪");
      }
    }
    fetchThought();
  }, []);

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-[#f9f7f3] to-[#e8f0ea]">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md p-6 flex flex-col justify-between">
        <div>
          <div className="mb-8 text-center">
            <div className="w-20 h-20 bg-[#bcd4cb] rounded-full mx-auto mb-2"></div>
            <h2 className="text-lg font-semibold text-[#54402d]">Nihita 💖</h2>
          </div>
          <nav className="space-y-4 text-gray-700">
            <button
              onClick={() => setActiveSection("")}
              className={`flex items-center gap-3 w-full text-left px-2 py-2 rounded-lg ${
                activeSection === ""
                  ? "bg-[#bcd4cb] text-[#54402d]"
                  : "hover:bg-[#a5c3b8] text-[#54402d]"
              }`}
            >
              <FaHome /> Dashboard
            </button>
            <button className="flex items-center gap-3 w-full text-left px-2 py-2 rounded-lg hover:bg-[#a5c3b8] text-[#54402d]">
              <FaUser /> Profile
            </button>
            <button className="flex items-center gap-3 w-full text-left px-2 py-2 rounded-lg hover:bg-[#a5c3b8] text-[#54402d]">
              <FaChartBar /> Insights
            </button>
            <button
              onClick={() => navigate("/Dashboard/Meditation")}
              className="flex items-center gap-3 w-full text-left px-2 py-2 rounded-lg hover:bg-[#a5c3b8] text-[#54402d]"
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
      <main className="flex-1 p-6 grid gap-6">
        {/* Welcome Section */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-[#54402d]">Hey Nihita 🌸</h2>
          <p className="text-[#7c6f64] mt-1">
            Hope you’re feeling awesome today! Let’s make it productive 💪✨
          </p>
        </div>

        {/* Thought of the Day */}
        <div className="bg-[#fef3c7] border-l-4 border-amber-400 text-[#6d5d4c] p-4 rounded-xl shadow-sm">
          <p className="italic font-medium">{thought} 💫</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {["To-Do Tasks", "Mood Logs"].map((item) => (
            <div key={item} className="bg-white rounded-2xl shadow-md p-4">
              <h3 className="text-[#7c6f64]">{item}</h3>
              <p className="text-2xl font-semibold text-[#54402d]">12</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Daily Check-in */}
          <div className="bg-white from-teal-50 to-cyan-50 p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-medium text-gray-800 mb-3">
              Daily Check-in
            </h3>
            <p className="text-gray-600 mb-4">How are you feeling today?</p>
            <div className="flex space-x-4 mb-4 flex-wrap">
              {[
                { emoji: "😊", label: "Great" },
                { emoji: "🙂", label: "Good" },
                { emoji: "😐", label: "Okay" },
                { emoji: "😕", label: "Low" },
                { emoji: "😔", label: "Poor" },
              ].map((item) => (
                <button
                  key={item.label}
                  className="bg-[#fefce8] hover:bg-[#e8f0ea] text-[#54402d] p-3 rounded-lg flex flex-col items-center w-16"
                >
                  <span className="text-xl">{item.emoji}</span>
                  <span className="text-sm mt-1">{item.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Charts/Tracking */}
          <div className="bg-white rounded-2xl shadow-md p-6">
            <h3 className="text-xl font-semibold text-[#54402d] mb-4">
              Your Weekly Mood
            </h3>
            <div className="w-full h-40 bg-[#e8f0ea] rounded-lg flex items-center justify-center text-[#7c6f64]">
              (Graph Placeholder - Connect to chart library later)
            </div>
          </div>
        </div>

        {/* Todo Section */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h3 className="text-xl font-semibold text-[#54402d] mb-4">
            Your To-Do List
          </h3>
          <div className="flex gap-2 mb-4">
            <input
              type="text"
              placeholder="Add a new task..."
              className="flex-1 px-4 py-2 rounded-lg border border-[#d6d3cc] focus:outline-none focus:ring-2 focus:ring-[#bcd4cb]"
              value={todoInput}
              onChange={(e) => setTodoInput(e.target.value)}
            />
            <button
              className="bg-[#bcd4cb] hover:bg-[#a5c3b8] text-[#54402d] px-4 py-2 rounded-lg font-medium"
              onClick={addTodo}
            >
              {editingIndex !== null ? "Update" : "Add"}
            </button>
          </div>
          <ul className="space-y-2">
            {todos.length === 0 && (
              <li className="text-[#7c6f64] italic">No tasks yet 🌱</li>
            )}
            {todos.map((todo, index) => (
              <li key={index} className="flex items-center justify-between">
                <span className="text-[#54402d]">{todo}</span>
                <div className="flex space-x-2">
                  <button
                    onClick={() => startEditing(index)}
                    className="text-[#bcd4cb] hover:text-[#a5c3b8]"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteTodo(index)}
                    className="text-red-500 hover:text-red-600"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Water Intake Tracker + Graph */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Water Intake Tracker */}
          <div className="bg-white rounded-2xl shadow-md p-6">
            <h3 className="text-xl font-semibold text-[#54402d] mb-4">
              Water Intake Tracker 💧
            </h3>
            <p className="text-[#7c6f64] mb-2">Quick Add (ml):</p>
            <div className="flex gap-2 mb-4 flex-wrap">
              {[200, 250, 500].map((amount) => (
                <button
                  key={amount}
                  onClick={() => setWaterIntake((prev) => prev + amount)}
                  className="bg-[#dbe7e3] hover:bg-[#c6d9d3] text-[#3d2e22] px-4 py-2 rounded-full"
                >
                  +{amount}ml
                </button>
              ))}
            </div>
            <p className="text-[#54402d] font-medium text-lg">
              Total Today: {waterIntake}ml
            </p>
          </div>

          {/* Water Intake Chart */}
          <div className="bg-white rounded-2xl shadow-md p-6">
            <h3 className="text-xl font-semibold text-[#54402d] mb-4">
              Weekly Water Intake
            </h3>
            <div className="w-full h-60">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={waterData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="ml" fill="#bcd4cb" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Sleep Tracker + Chart */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Sleep Tracker */}
          <div className="bg-white rounded-2xl shadow-md p-6">
            <h3 className="text-xl font-semibold text-[#54402d] mb-4">
              Sleep Tracker 🛌
            </h3>

            <div className="mb-4">
              <label className="block text-[#7c6f64] mb-1">
                Last Night's Sleep (hrs)
              </label>
              <input
                type="number"
                min="0"
                max="24"
                step="0.1"
                value={sleepHours}
                onChange={(e) => setSleepHours(parseFloat(e.target.value))}
                className="w-full px-4 py-2 rounded-lg border border-[#d6d3cc] focus:outline-none focus:ring-2 focus:ring-[#bcd4cb]"
              />
            </div>

            <div className="mb-4">
              <label className="block text-[#7c6f64] mb-1">
                Sleep Goal (hrs)
              </label>
              <input
                type="number"
                min="0"
                max="24"
                step="0.1"
                value={sleepGoal}
                onChange={(e) => setSleepGoal(parseFloat(e.target.value))}
                className="w-full px-4 py-2 rounded-lg border border-[#d6d3cc] focus:outline-none focus:ring-2 focus:ring-[#bcd4cb]"
              />
            </div>

            <p className="text-[#54402d] font-medium text-lg">
              Difference: {sleepHours - sleepGoal} hrs
            </p>
          </div>

          {/* Sleep Chart */}
          <div className="bg-white rounded-2xl shadow-md p-6">
            <h3 className="text-xl font-semibold text-[#54402d] mb-4">
              Weekly Sleep Hours
            </h3>
            <div className="w-full h-60">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={sleepData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="hours" fill="#bcd4cb" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Calendar */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4 text-[#54402d]">
            Calendar
          </h3>
          <div className="grid grid-cols-7 gap-2 text-center text-sm text-[#6d5d4c]">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <div key={day} className="font-medium">
                {day}
              </div>
            ))}
            {Array.from({ length: 30 }, (_, i) => (
              <div
                key={i}
                className="bg-[#fefce8] hover:bg-[#edebd3] rounded-lg py-2"
              >
                {i + 1}
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
