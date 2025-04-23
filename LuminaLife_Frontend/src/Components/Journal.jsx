import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const affirmations = [
  "You are enough, just as you are.",
  "Every day is a fresh start.",
  "Gratitude unlocks the fullness of life.",
  "You are doing your best, and that’s enough.",
];

const pastelColors = [
  "#FFF8E7",
  "#FFEEF0",
  "#E6F7FF",
  "#F0FFF0",
  "#FDF6FF",
  "#FFF3EC",
];

const Journal = () => {
  const [gratitudeInput, setGratitudeInput] = useState("");
  const [gratitudeList, setGratitudeList] = useState([]);
  const [affirmation] = useState(
    affirmations[Math.floor(Math.random() * affirmations.length)]
  );
  const [editingIndex, setEditingIndex] = useState(null);
  const [editedText, setEditedText] = useState("");

  const addGratitude = () => {
    if (gratitudeInput.trim() !== "") {
      const newNote = {
        text: gratitudeInput.trim(),
        color: pastelColors[Math.floor(Math.random() * pastelColors.length)],
      };
      setGratitudeList([...gratitudeList, newNote]);
      setGratitudeInput("");
    }
  };

  const deleteGratitude = (index) => {
    const updatedList = gratitudeList.filter((_, i) => i !== index);
    setGratitudeList(updatedList);
  };

  return (
    <div className="bg-[#fdf8f3] rounded-2xl shadow-xl p-6 space-y-6 font-sans">
      <h3 className="text-3xl font-bold text-[#6b4f3b] text-center">
        🌟 My Personal Journal 🌟
      </h3>

      {/* Affirmation */}
      <div className="bg-[#fffaf0] p-4 rounded-xl border border-[#e5ded5] text-center shadow-sm">
        <p className="text-[#4f3e2a] italic">💬 {affirmation}</p>
      </div>

      {/* Input */}
      <div className="flex gap-9 justify-center">
        <textarea
          rows={3}
          value={gratitudeInput}
          onChange={(e) => setGratitudeInput(e.target.value)}
          placeholder="Write what you're grateful for... (you can use multiple lines)"
          className="w-full max-w-l p-3 rounded-lg border border-[#e0dad2] focus:outline-none focus:ring-2 focus:ring-[#d4bda0] bg-white text-[#5c4735] resize-none"
        />
        <button
          onClick={addGratitude}
          className="px-4 py-2 bg-[#d4bda0] hover:bg-[#c6ab90] text-white font-semibold rounded-lg"
        >
          + Add
        </button>
      </div>

      {/* Notes Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <AnimatePresence>
          {gratitudeList.length === 0 ? (
            <motion.p
              key="empty"
              className="col-span-full text-center text-[#a89c90] italic"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              🌱 No entries yet. Start your gratitude journey!
            </motion.p>
          ) : (
            gratitudeList.map((note, index) => (
              <motion.div
                key={index}
                className="relative p-4 rounded-xl shadow-md text-[#4b3e2a] break-words space-y-2"
                style={{
                  backgroundColor: note.color,
                  fontFamily: `'Indie Flower', cursive`,
                  minHeight: "100px",
                }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                {editingIndex === index ? (
                  <>
                    <textarea
                      value={editedText}
                      onChange={(e) => setEditedText(e.target.value)}
                      rows={3}
                      className="w-full p-2 rounded-lg border border-[#d4bda0] text-[#4b3b2e] resize-none"
                    />
                    <div className="flex gap-2 mt-2">
                      <button
                        onClick={() => {
                          const updated = [...gratitudeList];
                          updated[index].text = editedText.trim();
                          setGratitudeList(updated);
                          setEditingIndex(null);
                        }}
                        className="text-green-600 hover:text-green-800 font-semibold"
                      >
                        Save
                      </button>
                      <button
                        onClick={() => setEditingIndex(null)}
                        className="text-gray-500 hover:text-gray-700"
                      >
                        Cancel
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <p className="whitespace-pre-wrap">{note.text}</p>
                    <div className="absolute top-2 right-3 flex gap-2">
                      <button
                        onClick={() => {
                          setEditingIndex(index);
                          setEditedText(note.text);
                        }}
                        className="text-blue-500 hover:text-blue-700"
                      >
                        ✎
                      </button>
                      <button
                        onClick={() => deleteGratitude(index)}
                        className="text-red-400 hover:text-red-600"
                      >
                        ✖
                      </button>
                    </div>
                  </>
                )}
              </motion.div>
            ))
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Journal;
