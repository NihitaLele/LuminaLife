import React, { useState, useEffect, useRef } from "react";

const Meditation = () => {
  const [selectedTime, setSelectedTime] = useState(5);
  const [timeLeft, setTimeLeft] = useState(5 * 60); 
  const [isRunning, setIsRunning] = useState(false);
  const [showComplete, setShowComplete] = useState(false);
  const [selectedSound, setSelectedSound] = useState(null);
  const [isSoundPlaying, setIsSoundPlaying] = useState(false);
  const audioRef = useRef(null);
  const timerRef = useRef(null);

  const formatTime = (seconds) => {
    const mins = String(Math.floor(seconds / 60)).padStart(2, "0");
    const secs = String(seconds % 60).padStart(2, "0");
    return `${mins}:${secs}`;
  };

  // Timer countdown
  useEffect(() => {
    if (isRunning && timeLeft > 0) {
      timerRef.current = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    } else if (timeLeft === 0 && isRunning) {
      setIsRunning(false);
      setShowComplete(true);
    }
    return () => clearTimeout(timerRef.current);
  }, [isRunning, timeLeft]);

  // Update timer on time change
  useEffect(() => {
    setTimeLeft(selectedTime * 60);
    setIsRunning(false);
    setShowComplete(false);
  }, [selectedTime]);

  // Sound switching
  useEffect(() => {
    if (selectedSound) {
      // Stop any existing sound
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
  
      const audio = new Audio(`/sounds/${selectedSound.toLowerCase().replace(/\s/g, "")}.mp3`);
      audio.loop = true;
      audioRef.current = audio;
  
      if (isSoundPlaying) {
        audio.play().catch((err) => console.error("Audio playback error:", err));
      }
    }
  
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
  }, [selectedSound, isSoundPlaying]);
  
  // Play or pause ambient sound
  const toggleSound = () => {
    if (!audioRef.current) return;
    if (isSoundPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsSoundPlaying(!isSoundPlaying);
  };

  const toggleTimer = () => {
    setIsRunning((prev) => !prev);
    setShowComplete(false);
  };

  const resetTimer = () => {
    setTimeLeft(selectedTime * 60);
    setIsRunning(false);
    setShowComplete(false);
  };

  return (
    <div className=" flex items-center">
      <div className="bg-white/90 backdrop-blur-md shadow-xl rounded-3xl p-10 w-full  transition-all duration-300">
        <h2 className="text-3xl font-bold text-[#3b3b3b] mb-3 text-center">
          🧘‍♀️ Meditation & Ambient Sounds 🎵
        </h2>
        <p className="text-center text-[#666] text-base mb-8">
          Select a duration and sound, then start your session.
        </p>

        {/* Timer Block */}
        <div className="flex flex-col md:flex-row items-center justify-between bg-[#fefae0] px-8 py-6 rounded-2xl mb-8 shadow-xl gap-6">
          <div className="text-center">
            <span className="text-5xl font-semibold text-[#5e503f]">
              {formatTime(timeLeft)}
            </span>
            <p className="text-sm text-[#6b705c] mt-2">
              {isRunning ? "Meditating..." : "Paused"}
            </p>
          </div>

          <div className="flex flex-col items-center">
            <label
              htmlFor="duration"
              className="mb-2 text-[#5e503f] font-medium"
            >
              Choose Duration
            </label>
            <select
              id="duration"
              value={selectedTime}
              onChange={(e) => setSelectedTime(parseInt(e.target.value))}
              className="rounded-xl px-4 py-2 bg-[#ccd5ae] text-[#3e3e3e] font-medium text-lg focus:outline-none"
            >
              {[5, 10, 15, 20, 30, 60].map((min) => (
                <option key={min} value={min}>
                  {min} minutes
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-2 items-center">
            <button
              onClick={toggleTimer}
              className="bg-[#ccd5ae] hover:bg-[#b6c49d] text-[#3e3e3e] px-6 py-3 rounded-2xl text-lg font-medium transition"
            >
              {isRunning ? "Pause Timer" : "Start Timer"}
            </button>
            <button
              onClick={resetTimer}
              className="text-sm text-[#6b705c] underline hover:text-[#5e503f]"
            >
              Reset Timer
            </button>
          </div>
        </div>

{/* Ambient Sound Categories */}
<div className="mb-8 space-y-6">
  {/* Nature Sounds */}
  <div>
    <h3 className="text-xl font-semibold text-[#3e3e3e] mb-2">🌿 Nature Sounds</h3>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {["Rain", "Forest", "Waves", "Fireplace", "Birdsong", "River"].map((sound) => (
        <button
          key={sound}
          onClick={() => {
            if (selectedSound === sound && isSoundPlaying) {
              audioRef.current?.pause();
              setIsSoundPlaying(false);
              setSelectedSound(null);
            } else {
              setSelectedSound(sound);
              setIsSoundPlaying(true);
            }
          }}
          className={`relative overflow-hidden py-12 px-4 rounded-xl text-base font-semibold shadow-md transition group ${
            selectedSound === sound
              ? "ring-2 ring-[#d9ed92]"
              : "hover:ring-2 hover:ring-[#f1efc7]"
          }`}
          style={{
            backgroundImage: `url(/images/sounds/${sound.toLowerCase().replace(/\s/g, "")}.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            color: "white",
          }}
        >
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition"></div>
          <span className="relative z-10">🔊 {sound}</span>
        </button>
      ))}
    </div>
  </div>

  {/* Musical Sounds */}
  <div>
    <h3 className="text-xl font-semibold text-[#3e3e3e] mb-2">🎵 Musical & Tonal Sounds</h3>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {["Chimes", "Soft Piano", "Binaural Beats"].map((sound) => (
        <button
          key={sound}
          onClick={() => {
            if (selectedSound === sound && isSoundPlaying) {
              audioRef.current?.pause();
              setIsSoundPlaying(false);
              setSelectedSound(null);
            } else {
              setSelectedSound(sound);
              setIsSoundPlaying(true);
            }
          }}
          className={`relative overflow-hidden py-12 px-4 rounded-xl text-base font-semibold shadow-md transition group ${
            selectedSound === sound
              ? "ring-2 ring-[#d9ed92]"
              : "hover:ring-2 hover:ring-[#f1efc7]"
          }`}
          style={{
            backgroundImage: `url(/images/sounds/${sound.toLowerCase().replace(/\s/g, "")}.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            color: "white",
          }}
        >
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition"></div>
          <span className="relative z-10">🔊 {sound}</span>
        </button>
      ))}
    </div>
  </div>

  {/* Atmospheric Sounds */}
  <div>
    <h3 className="text-xl font-semibold text-[#3e3e3e] mb-2">🏙️ Urban & Cozy Sounds</h3>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {["Coffee Shop", "Library", "Train Ride", "City Rain", "Campfire"].map((sound) => (
        <button
          key={sound}
          onClick={() => {
            if (selectedSound === sound && isSoundPlaying) {
              audioRef.current?.pause();
              setIsSoundPlaying(false);
              setSelectedSound(null);
            } else {
              setSelectedSound(sound);
              setIsSoundPlaying(true);
            }
          }}
          className={`relative overflow-hidden py-12 px-4 rounded-xl text-base font-semibold shadow-md transition group ${
            selectedSound === sound
              ? "ring-2 ring-[#d9ed92]"
              : "hover:ring-2 hover:ring-[#f1efc7]"
          }`}
          style={{
            backgroundImage: `url(/images/sounds/${sound.toLowerCase().replace(/\s/g, "")}.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            color: "white",
          }}
        >
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition"></div>
          <span className="relative z-10">🔊 {sound}</span>
        </button>
      ))}
    </div>
  </div>
</div>
        {/* Completion */}
        {showComplete && (
          <div className="text-center text-[#4a4a4a] mt-4 text-lg font-medium">
            ✅ Meditation complete! Great job 🌟
          </div>
        )}
      </div>
    </div>
  );
};

export default Meditation;
