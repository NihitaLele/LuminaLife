import React, { useState, useEffect } from "react";
import axios from "axios";

const Dashboard = () => {
  const [todoInput, setTodoInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [waterIntake, setWaterIntake] = useState(0);
  const [sleepHours, setSleepHours] = useState(0);
  const [thought, setThought] = useState("Loading...");
  const [dashboardData, setDashboardData] = useState({});
  const [selectedMood, setSelectedMood] = useState(null);
  const [name, setName] = useState("")

  useEffect(()=>{
    axios
    .get("https://luminalife.onrender.com/showProfile", {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    }).then((res)=>{
      setName(res.data.Name)
    }).catch((error)=>{
      console.log(error)
    })
  }, [])

  useEffect(() => {
    axios
      .get("https://luminalife.onrender.com/showDashboard", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log(res.data);

        const dashboard = res.data.dashboard;

        setTodos(dashboard.Todo); 
        setMood(dashboard.CheckIn);
        setWaterIntake(dashboard.WaterIntake);
        setSleepHours(dashboard.SleepTracker);
        setDashboardData(dashboard);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const addTodo = () => {
    let updatedTodos;
    
    if (editingIndex !== null) {
      updatedTodos = [...todos];
      updatedTodos[editingIndex] = todoInput;
    } else {
      updatedTodos = [...todos, todoInput];
    }

    setTodos(updatedTodos);
    setTodoInput("");
    setEditingIndex(null); 

    const data = {
      todo: updatedTodos, 
    };

    axios
      .post("https://luminalife.onrender.com/addTodo", data, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteTodo = (index) => {
    const updated = todos.filter((_, i) => i !== index);
    setTodos(updated);
    const data = {
      todo: updated,
    };
    
    axios
      .post("https://luminalife.onrender.com/addTodo", data, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const startEditing = (index) => {
    setTodoInput(todos[index]);
    setEditingIndex(index);
  };

  const cancelEditing = () => {
    setTodoInput("");
    setEditingIndex(null);
  };

  function setMood(item) {
    console.log(item.emoji);
    setSelectedMood(item);
    const data = {
      emoji: item.emoji,
    };
    axios
      .post("https://luminalife.onrender.com/addMood", data, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }


  useEffect(() => {
    async function fetchThought() {
      try {
        const response = await fetch("https://api.api-ninjas.com/v1/advice", {
          headers: {
            "X-Api-Key": "YOUR_API_KEY", 
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

  function waterData(amount) {
    const updatedWaterIntake = waterIntake + amount; 

    setWaterIntake(updatedWaterIntake); 

    const data = {
      ml: updatedWaterIntake, 
    };

    axios
      .post("https://luminalife.onrender.com/addWater", data, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function sleepData() {
    const data = {
      hrs: sleepHours,
    };

    axios
      .post("https://luminalife.onrender.com/addSleep", data, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const getSleepStatus = () => {
    const diff = sleepHours - 8;
    if (diff >= 0) return { text: "Great! You met your goal", color: "text-green-600" };
    if (diff >= -2) return { text: "Almost there!", color: "text-yellow-600" };
    return { text: "Try to get more sleep", color: "text-red-500" };
  };

  const getWaterStatus = () => {
    if (waterIntake >= 2000) return { text: "Excellent hydration!", color: "text-green-600" };
    if (waterIntake >= 1000) return { text: "Getting there!", color: "text-yellow-600" };
    return { text: "Drink more water", color: "text-red-500" };
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-[#f9f7f3] to-[#e8f0ea]">
      <main className="flex-1 p-6 grid gap-6">
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-[#54402d]"> {`Hey ${name}`}🌸</h2>
          <p className="text-[#7c6f64] mt-1">
            Hope you're feeling awesome today!
          </p>
        </div>

        <div className="bg-[#fef3c7] border-l-4 border-amber-400 text-[#6d5d4c] p-4 rounded-xl shadow-sm">
          <p className="italic font-medium">{thought} 💫</p>
        </div>

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
            {editingIndex !== null && (
              <button
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded-lg font-medium"
                onClick={cancelEditing}
              >
                Cancel
              </button>
            )}
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white from-teal-50 to-cyan-50 p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-medium text-gray-800 mb-3">
              Daily Check-in❤️
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
                  className={`${
                    selectedMood?.label === item.label 
                      ? "bg-[#e8f0ea] ring-2 ring-[#bcd4cb]" 
                      : "bg-[#fefce8] hover:bg-[#e8f0ea]"
                  } text-[#54402d] p-3 rounded-lg flex flex-col items-center w-16 transition-all`}
                  onClick={() => setMood(item)}
                >
                  <span className="text-xl">{item.emoji}</span>
                  <span className="text-sm mt-1">{item.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6">
            <h3 className="text-xl font-semibold text-[#54402d] mb-4">
              Today's Mood
            </h3>
            <div className="bg-[#f8f8f2] rounded-lg p-6 flex flex-col items-center justify-center min-h-40 border-2 border-[#e8f0ea]">
              {selectedMood ? (
                <>
                  <span className="text-5xl mb-2">{selectedMood.emoji}</span>
                  <h4 className="text-xl font-medium text-[#54402d]">
                    {selectedMood.label}
                  </h4>
                  <p className="text-[#7c6f64] mt-2 text-center">
                    {selectedMood.label === "Great" && "What an amazing day!"}
                    {selectedMood.label === "Good" && "You're doing well today!"}
                    {selectedMood.label === "Okay" && "Hanging in there!"}
                    {selectedMood.label === "Low" && "Take it easy today."}
                    {selectedMood.label === "Poor" && "Be gentle with yourself today."}
                  </p>
                </>
              ) : (
                <p className="text-[#7c6f64] text-center">
                  Click on a mood button to see your selection here! 💭
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl shadow-md p-6">
            <h3 className="text-xl font-semibold text-[#54402d] mb-4">
              Water Intake Tracker 💧
            </h3>
            <p className="text-[#7c6f64] mb-2">Quick Add (ml):</p>
            <div className="flex gap-2 mb-4">
              {[100, 150, 200, 250, 500].map((amount) => (
                <button
                  key={amount}
                  onClick={() => waterData(amount)}
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

          <div className="bg-white rounded-2xl shadow-md p-6">
            <h3 className="text-xl font-semibold text-[#54402d] mb-4">
              Water Intake Status
            </h3>
            <div className="bg-[#edf6f9] rounded-lg p-6 flex flex-col items-center justify-center min-h-40 border-2 border-[#d0e8f2]">
              <div className="w-full max-w-xs">
                <div className="relative h-8 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className="absolute top-0 left-0 h-full bg-blue-400 rounded-full transition-all"
                    style={{ width: `${Math.min(100, (waterIntake / 2000) * 100)}%` }}
                  ></div>
                </div>
                <div className="flex justify-between mt-1 text-xs text-gray-600">
                  <span>0ml</span>
                  <span>2000ml (daily goal)</span>
                </div>
              </div>
              
              <div className="flex items-center mt-4">
                <span className="text-4xl mr-3">💧</span>
                <div>
                  <p className="font-medium text-lg text-[#54402d]">
                    {waterIntake}ml / 2000ml
                  </p>
                  <p className={`${getWaterStatus().color}`}>
                    {getWaterStatus().text}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
              <p className="text-[#54402d] font-medium">8</p>
            </div>

            <p className="text-[#54402d] font-medium text-lg mb-4">
              Difference: {sleepHours - 8} hrs
            </p>

            <button
              onClick={sleepData}
              className="bg-[#bcd4cb] text-[#54402d] font-semibold px-6 py-2 rounded-lg hover:bg-[#a8c4b8] transition duration-300"
            >
              Add
            </button>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6">
            <h3 className="text-xl font-semibold text-[#54402d] mb-4">
              Sleep Status
            </h3>
            <div className="bg-[#f5f0fe] rounded-lg p-6 flex flex-col items-center justify-center min-h-40 border-2 border-[#e6dbfc]">
              <div className="flex items-center">
                <span className="text-4xl mr-3">😴</span>
                <div>
                  <p className="font-medium text-lg text-[#54402d]">
                    You slept {sleepHours} hours
                  </p>
                  <p className={`${getSleepStatus().color} font-medium`}>
                    {getSleepStatus().text}
                  </p>
                </div>
              </div>

              <div className="mt-4 w-full max-w-xs">
                <div className="relative pt-1">
                  <div className="flex mb-2 items-center justify-between">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-purple-600 bg-purple-200">
                        Sleep quality
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span 
                        key={star}
                        className={`text-xl ${
                          sleepHours >= 7 && star <= 5 ? "text-yellow-500" :
                          sleepHours >= 6 && star <= 4 ? "text-yellow-500" :
                          sleepHours >= 5 && star <= 3 ? "text-yellow-500" :
                          sleepHours >= 4 && star <= 2 ? "text-yellow-500" :
                          sleepHours >= 1 && star <= 1 ? "text-yellow-500" :
                          "text-gray-300"
                        }`}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;