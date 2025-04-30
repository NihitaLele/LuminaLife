import React, { useState } from "react";
import axios from 'axios';


const CreateProfile = () => {

  const [profileData, setProfileData] = useState({
    name: "",
    age: "",
    dob: "",
    bio: "",
    gender: "",
    interests: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setProfileData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    
    Object.keys(profileData).forEach(key => {
      if (profileData[key] !== null && profileData[key] !== "") {
        console.log("appending data")
        formData.append(key, profileData[key]);
        console.log("data appended")
      }
    });
    
    try {
       axios.post('https://luminalife.onrender.com/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization : localStorage.getItem("token")
        },
      }).then((res)=>{
        console.log(res)
      }).catch((error)=>{
        console.log(error)
      });
      
      console.log(formData)  
      console.log(profileData)  
      console.log("Profile submitted:", profileData);
          
    } catch (error) {
      console.log("Error submitting profile:", error);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-8 bg-gradient-to-br from-[#fefaf6] to-[#e7eae8] shadow-xl rounded-3xl mt-12 border border-[#e0d6cb]">
      <h2 className="text-3xl font-bold text-center text-[#3c2f2f] mb-6">
        🌼 Create Your Profile
      </h2>

      <div className="mb-6 text-center">
        <p className="text-sm text-[#6d5c4f] mb-2">Profile Preview</p>
        <div className="flex justify-center">
          <img
            src={profileData.Profile ? URL.createObjectURL(profileData.Profile) : "https://via.placeholder.com/100"}
            alt="Profile Preview"
            className="h-24 w-24 rounded-full object-cover border-2 border-[#bcd4cb] shadow"
          />
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6" encType="multipart/form-data">
        <div>
          <label className="block text-sm font-medium text-[#6d5c4f] mb-1">
            Profile Picture
          </label>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
            className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-[#bcd4cb] file:text-[#54402d] hover:file:bg-[#a5c3b8]"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-[#6d5c4f] mb-1">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={profileData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-[#ddd] rounded-xl bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-[#bcd4cb]"
            placeholder="Enter your name"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-[#6d5c4f] mb-1">
            Age
          </label>
          <input
            type="number"
            name="age"
            value={profileData.age}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-[#ddd] rounded-xl bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-[#bcd4cb]"
            placeholder="Enter your age"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-[#6d5c4f] mb-1">
            Date of Birth
          </label>
          <input
            type="date"
            name="dob"
            value={profileData.dob}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-[#ddd] rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-[#bcd4cb]"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-[#6d5c4f] mb-1">
            Gender
          </label>
          <select
            name="gender"
            value={profileData.gender}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-[#ddd] rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-[#bcd4cb]"
          >
            <option value="">Select Gender</option>
            <option value="female">Female</option>
            <option value="male">Male</option>
            <option value="nonbinary">Non-binary</option>
            <option value="preferNot">Prefer not to say</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-[#6d5c4f] mb-1">
            Bio
          </label>
          <textarea
            name="bio"
            value={profileData.bio}
            onChange={handleChange}
            rows="4"
            className="w-full px-4 py-2 border border-[#ddd] rounded-xl bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-[#bcd4cb]"
            placeholder="Tell us something fun about you!"
          ></textarea>
        </div>

        <div>
          <label className="block text-sm font-medium text-[#6d5c4f] mb-1">
            Interests or Hobbies
          </label>
          <input
            type="text"
            name="interests"
            value={profileData.interests}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-[#ddd] rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-[#bcd4cb]"
            placeholder="e.g., Painting, Hiking, Coding"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 text-white font-semibold bg-[#54402d] rounded-xl hover:bg-[#3c2f2f] transition-all duration-200"
        >
          ✨ Create Profile
        </button>
      </form>
    </div>
  );
};

export default CreateProfile;