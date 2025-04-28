import React, { useState, useEffect } from "react";
import axios from "axios";

const Dashboard = () => {
  const [todoInput, setTodoInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [waterIntake, setWaterIntake] = useState(0);
  const [sleepHours, setSleepHours] = useState(0);
  const [sleepGoal, setSleepGoal] = useState(0);
  const [thought, setThought] = useState("Loading...");

  const addTodo = () => {
    const updatedTodos = [...todos, todoInput]; // create updated array first

    setTodos(updatedTodos); // update React state

    const data = {
      todo: updatedTodos, // send the correct new array
    };

    axios
      .post("http://localhost:3000/addTodo", data, {
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

    console.log(updatedTodos); // this will show updated todos correctly
  };

  function setMood(item) {
    console.log(item.emoji);
    const data = {
      emoji: item.emoji,
    };
    axios
      .post("http://localhost:3000/addMood", data, {
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

  const deleteTodo = (index) => {
    const updated = todos.filter((_, i) => i !== index);
    setTodos(updated);
  };

  const startEditing = (index) => {
    setTodoInput(todos[index]);
    setEditingIndex(index);
  };

  useEffect(() => {
    async function fetchThought() {
      try {
        const response = await fetch("https://api.api-ninjas.com/v1/advice", {
          headers: {
            "X-Api-Key": "YOUR_API_KEY", //gotta add API key here, will add later
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
    const updatedWaterIntake = waterIntake + amount; // ✅ calculate manually

    setWaterIntake(updatedWaterIntake); // ✅ update React state

    const data = {
      ml: updatedWaterIntake,   // ✅ send correct value
    };

    axios.post("http://localhost:3000/addWater", data, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    }).then((res) => {
      console.log(res.data);
    }).catch((error) => {
      console.log(error);
    });
}


  const sleepData = [
    { day: "Mon", hours: 7 },
    { day: "Tue", hours: 6.5 },
    { day: "Wed", hours: 8 },
    { day: "Thu", hours: 7 },
    { day: "Fri", hours: 5.5 },
    { day: "Sat", hours: 9 },
    { day: "Sun", hours: 7.5 },
  ];

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-[#f9f7f3] to-[#e8f0ea]">
      <main className="flex-1 p-6 grid gap-6">
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-[#54402d]">Hey Nihita 🌸</h2>
          <p className="text-[#7c6f64] mt-1">
            Hope you’re feeling awesome today!
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
                  className="bg-[#fefce8] hover:bg-[#e8f0ea] text-[#54402d] p-3 rounded-lg flex flex-col items-center w-16"
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
              Your Weekly Mood
            </h3>
            <div className="w-full h-40 bg-[#e8f0ea] rounded-lg flex items-center justify-center text-[#7c6f64]">
              (For Graph, later will connect to chart library)
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
                  onClick={()=>waterData(amount)}
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
              Weekly Water Intake
            </h3>
            <div className="w-full h-40 bg-[#e8f0ea] rounded-lg flex items-center justify-center text-[#7c6f64]">
              (For Graph, later will connect to chart library)
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

          <div className="bg-white rounded-2xl shadow-md p-6">
            <h3 className="text-xl font-semibold text-[#54402d] mb-4">
              Weekly Sleep Hours
            </h3>
            <div className="w-full h-40 bg-[#e8f0ea] rounded-lg flex items-center justify-center text-[#7c6f64]">
              (For Graph, later will connect to chart library)
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
