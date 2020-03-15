import React, { useContext } from "react";
import { DocumentContext } from "../context/DocumentContext";
import Input from "./Input";

const ProfileEditor = () => {
  const { values, handleChange, img, changePhoto } = useContext(
    DocumentContext
  );

  return (
    <div className="flex justify-between flex-col">
      <div className="flex items-center">
        <div className="flex flex-col items-center mx-auto">
          <img
            src={img}
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
              onChange={changePhoto}
              accept="image/x-png,image/jpeg"
            />
          </label>
        </div>
      </div>
      <div>
        <Input
          label="Full Name"
          value={values.name}
          name="name"
          handleChange={handleChange}
        />
        <Input
          label="Job Title"
          value={values.title}
          name="title"
          handleChange={handleChange}
        />
        <Input
          label="Email"
          value={values.email}
          name="email"
          handleChange={handleChange}
        />
        <Input
          label="Phone"
          value={values.phone}
          name="phone"
          handleChange={handleChange}
        />
        <Input
          label="Location"
          value={values.location}
          name="location"
          handleChange={handleChange}
        />
        <label className="mt-4 font-bold block">Bio</label>
        <textarea
          value={values.bio}
          rows="2"
          className="rounded bg-gray-100 focus:outline-none border-b border-transparent caret-purple-600 focus:border-purple-600 block mt-2 p-2 w-full"
          name="bio"
          onChange={handleChange}
        />
      </div>
      <h2 className="mt-4 font-bold">Skills</h2>
      <textarea
        value={values.skills}
        rows="2"
        className="rounded bg-gray-100 focus:outline-none border-b border-transparent caret-purple-600 focus:border-purple-600 block mt-2 p-2 w-full"
        name="skills"
        onChange={handleChange}
      />
    </div>
  );
};

export default ProfileEditor;
