import React, { useState } from "react";

const Profile = ({ profile }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: profile?.name || "",
    age: profile?.age || "1",
    dob: profile?.dob || "",
    bio: profile?.bio || "",
    gender: profile?.gender || "",
    interests: profile?.interests || "",
    photo: profile?.photo || null,
  });

  const handleEdit = () => setIsEditing(true);

  const handleSave = () => {
    setIsEditing(false);
    console.log("Profile updated:", profileData);
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;


    setProfileData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  return (
    <div className="max-w-4xl mx-auto p-10 bg-gradient-to-br from-[#fefaf6] to-[#e9f0eb] rounded-3xl shadow-2xl mt-16 border border-[#e0d6cb] transition-all duration-500">
      <h2 className="text-4xl font-bold text-center text-[#3c2f2f] mb-10">
        🌟 Your Profile
      </h2>

      <div className="flex flex-col items-center mb-10">
        <img
          src={
            profileData.photo
              ? URL.createObjectURL(profileData.photo)
              : "https://via.placeholder.com/120"
          }
          alt="Profile"
          className="h-32 w-32 rounded-full object-cover border-4 border-[#bcd4cb] shadow-lg mb-4 transition-transform duration-300 hover:scale-105"
        />

        {isEditing && (
          <div className="flex flex-col items-center mb-4">
            <label className="text-sm text-[#6d5c4f] mb-2">
              Change Profile Picture
            </label>
            <input
              type="file"
              name="photo"
              accept="image/*"
              onChange={handleChange}
              className="py-2 px-4 border border-[#ccc] rounded-md bg-white shadow-sm text-sm"
            />
          </div>
        )}

        <h3 className="text-2xl font-bold text-[#54402d]">
          {profileData.name || "Unnamed"}
        </h3>
        <p className="text-base text-[#7a6c5d] mt-2 italic">
          {profileData.bio || "No bio added yet"}
        </p>
      </div>

      <div className="space-y-6 text-[#54402d]">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {[
            { label: "Age", name: "age", type: "number", placeholder: "Enter your age", min: 1 },
            { label: "Date of Birth", name: "dob", type: "date" },
            {
              label: "Gender",
              name: "gender",
              type: "select",
              options: [
                { value: "", label: "Select gender" },
                { value: "female", label: "Female" },
                { value: "male", label: "Male" },
                { value: "nonbinary", label: "Non-binary" },
                { value: "preferNot", label: "Prefer not to say" },
              ],
            },
            {
              label: "Interests",
              name: "interests",
              type: "text",
              placeholder: "e.g. coding, yoga, painting",
            },
          ].map((field) => (
            <div key={field.name}>
              <p className="font-semibold mb-1">{field.label}:</p>
              {field.type === "select" ? (
                <select
                  name={field.name}
                  value={profileData[field.name]}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className={`w-full px-4 py-3 border border-[#ddd] rounded-lg bg-white shadow-md focus:outline-none ${
                    isEditing ? "focus:ring-2 focus:ring-[#bcd4cb]" : "opacity-70 cursor-not-allowed"
                  }`}
                >
                  {field.options.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  type={field.type}
                  name={field.name}
                  value={profileData[field.name]}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                  min={field.min}
                  disabled={!isEditing}
                  className={`w-full px-4 py-3 border border-[#ddd] rounded-lg bg-white shadow-md focus:outline-none ${
                    isEditing ? "focus:ring-2 focus:ring-[#bcd4cb]" : "opacity-70 cursor-not-allowed"
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          {isEditing ? (
            <button
              onClick={handleSave}
              className="w-full sm:w-1/2 py-3 text-white font-semibold bg-[#54402d] rounded-xl hover:bg-[#3c2f2f] transition duration-300"
            >
              ✅ Save Changes
            </button>
          ) : (
            <button
              onClick={handleEdit}
              className="w-full sm:w-1/2 py-3 font-semibold bg-[#bcd4cb] text-[#54402d] rounded-xl hover:bg-[#a5c3b8] transition duration-300"
            >
              ✏️ Edit Profile
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
