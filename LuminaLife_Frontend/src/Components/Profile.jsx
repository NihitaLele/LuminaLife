import React, { useState, useEffect } from "react";
import axios from "axios";

const Profile = () => {
  const [profileData, setProfileData] = useState({});

  useEffect(() => {
    axios.get("https://luminalife.onrender.com/showProfile", {
      headers: {
        Authorization: localStorage.getItem("token")
      },
    })
    .then((res) => {
      setProfileData(res.data);
      console.log(res.data);
    })
    .catch((error) => {
      console.log(error);
    });
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-10 bg-gradient-to-br from-[#fefaf6] to-[#e9f0eb] rounded-3xl shadow-2xl mt-16 border border-[#e0d6cb] transition-all duration-500">
      <h2 className="text-4xl font-bold text-center text-[#3c2f2f] mb-10">
        🌟 Your Profile
      </h2>

      <div className="flex flex-col items-center mb-10">
        <img
          src={profileData.Profile}
          alt="Profile"
          className="h-32 w-32 rounded-full object-cover border-4 border-[#bcd4cb] shadow-lg mb-4 transition-transform duration-300 hover:scale-105"
        />

        <h3 className="text-2xl font-bold text-[#54402d]">
          {profileData.Name || "Unnamed"}
        </h3>
        <p className="text-base text-[#7a6c5d] mt-2 italic">
          {profileData.Bio || "No bio added yet"}
        </p>
      </div>

      <div className="space-y-6 text-[#54402d]">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {[
            { label: "Age", field: "Age" },
            { label: "Date of Birth", field: "DOB" },
            { label: "Gender", field: "Gender" },
            { label: "Interests", field: "Interests" },
          ].map((item) => (
            <div key={item.field} className="bg-white p-4 rounded-lg shadow-md">
              <p className="font-semibold mb-1">{item.label}:</p>
              <p className="text-[#7a6c5d]">{profileData[item.field] || "Not specified"}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;