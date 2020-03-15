import React, { useContext } from "react";
import { DocumentContext } from "../context/DocumentContext";
import Input from "./Input";
import { EDIT_PROFILE, CHANGE_PHOTO } from "../actions";

const ProfileEditor = () => {
  const { state, dispatch } = useContext(DocumentContext);

  const { personalInfo } = state;

  const handleChange = e => {
    dispatch({
      type: EDIT_PROFILE,
      payload: { name: e.target.name, value: e.target.value }
    });
  };

  const handleImageChange = e => {
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onloadend = function() {
      dispatch({
        type: CHANGE_PHOTO,
        payload: {
          image: reader.result
        }
      });
    };
  };

  return (
    <div className="flex justify-between flex-col">
      <div className="flex items-center">
        <div className="flex flex-col items-center mx-auto">
          <img
            src={personalInfo.image}
            alt="Mourad Aouinat"
            className="rounded-full h-40 w-40"
          />
          <label>
            <span
              className="px-2 py-1 rounded text-white bg-purple-600 my-4 inline-block cursor-pointer hover:bg-purple-500"
              role="button"
            >
              Change Photo
            </span>
            <input
              type="file"
              className="hidden"
              onChange={handleImageChange}
              accept="image/x-png,image/jpeg"
            />
          </label>
        </div>
      </div>
      <div>
        <Input
          label="Full Name"
          value={personalInfo.name}
          name="name"
          handleChange={handleChange}
        />
        <Input
          label="Job Title"
          value={personalInfo.title}
          name="title"
          handleChange={handleChange}
        />
        <Input
          label="Email"
          value={personalInfo.email}
          name="email"
          handleChange={handleChange}
        />
        <Input
          label="Phone"
          value={personalInfo.phone}
          name="phone"
          handleChange={handleChange}
        />
        <Input
          label="Location"
          value={personalInfo.location}
          name="location"
          handleChange={handleChange}
        />
        <label className="mt-4 font-bold block">Bio</label>
        <textarea
          value={personalInfo.bio}
          rows="2"
          className="rounded bg-gray-100 focus:outline-none border-b border-transparent caret-purple-600 focus:border-purple-600 block mt-2 p-2 w-full"
          name="bio"
          onChange={handleChange}
        />
      </div>
      <h2 className="mt-4 font-bold">Skills</h2>
      <textarea
        value={personalInfo.skills}
        rows="2"
        className="rounded bg-gray-100 focus:outline-none border-b border-transparent caret-purple-600 focus:border-purple-600 block mt-2 p-2 w-full"
        name="skills"
        onChange={handleChange}
      />
    </div>
  );
};

export default ProfileEditor;
