import React, { useState } from "react";

const CreateProfile = () => {
  const [profileData, setProfileData] = useState({
    name: "",
    age: "",
    bio: "",
    photo: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setProfileData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Profile submitted:", profileData);
    // Later: Submit to backend or store in context/state
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-2xl shadow-md mt-8">
      <h2 className="text-2xl font-semibold text-center mb-4 text-[#54402d]">
        Create Your Profile ✨
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 text-[#54402d]">Name</label>
          <input
            type="text"
            name="name"
            value={profileData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md bg-[#f4f4f4]"
            required
          />
        </div>

        <div>
          <label className="block mb-1 text-[#54402d]">Age</label>
          <input
            type="number"
            name="age"
            value={profileData.age}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md bg-[#f4f4f4]"
            required
          />
        </div>

        <div>
          <label className="block mb-1 text-[#54402d]">Bio</label>
          <textarea
            name="bio"
            value={profileData.bio}
            onChange={handleChange}
            rows="3"
            className="w-full px-3 py-2 border rounded-md bg-[#f4f4f4]"
          ></textarea>
        </div>

        <div>
          <label className="block mb-1 text-[#54402d]">Profile Picture</label>
          <input
            type="file"
            name="photo"
            accept="image/*"
            onChange={handleChange}
            className="w-full"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#bcd4cb] text-[#54402d] font-semibold py-2 rounded-lg hover:bg-[#a5c3b8] transition"
        >
          Save Profile
        </button>
      </form>
    </div>
  );
};

export default CreateProfile;
