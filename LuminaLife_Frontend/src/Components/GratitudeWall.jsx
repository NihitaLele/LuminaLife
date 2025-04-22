import React, { useState } from "react";

const GratitudeWall = () => {
  const [gratitudeInput, setGratitudeInput] = useState("");
  const [gratitudeList, setGratitudeList] = useState([]);

  const addGratitude = () => {
    if (gratitudeInput.trim() !== "") {
      setGratitudeList([...gratitudeList, gratitudeInput.trim()]);
      setGratitudeInput(""); // Clear the input after adding
    }
  };

  const deleteGratitude = (index) => {
    const updatedList = gratitudeList.filter((_, i) => i !== index);
    setGratitudeList(updatedList);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 ">
      <h3 className="text-xl font-semibold text-[#54402d] mb-4">Gratitude Wall 🌟</h3>

      {/* Input for new gratitude */}
      <div className="flex mb-4">
        <input
          type="text"
          value={gratitudeInput}
          onChange={(e) => setGratitudeInput(e.target.value)}
          placeholder="What are you grateful for today?"
          className="flex-1 p-3 rounded-lg border border-[#d6d3cc] focus:outline-none focus:ring-2 focus:ring-[#bcd4cb]"
        />
        <button
          onClick={addGratitude}
          className="ml-3 px-4 py-2 bg-[#bcd4cb] hover:bg-[#a5c3b8] text-[#54402d] rounded-lg"
        >
          Add
        </button>
      </div>

      {/* Display gratitude entries */}
      {gratitudeList.length === 0 ? (
        <p className="italic text-[#7c6f64]">No gratitude entries yet 🌱</p>
      ) : (
        <ul className="space-y-4">
          {gratitudeList.map((item, index) => (
            <li key={index} className="flex justify-between items-center">
              <p className="text-[#54402d]">{item}</p>
              <button
                onClick={() => deleteGratitude(index)}
                className="text-red-500 hover:text-red-600"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default GratitudeWall;
