import React, { useContext } from "react";
import WorkEditor from "./WorkEditor";
import EducationEditor from "./EducationEditor";
import { DocumentContext } from "../context/DocumentContext";
import LanguageEditor from "./LanguageEditor";

const Editor = () => {
  const { values, handleChange, img, changePhoto } = useContext(
    DocumentContext
  );

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mt-8">
        <h1 className="text-2xl font-semibold bg-gray-100 inline-block pt-4 pr-4">
          <span className="text-purple-600 text-2xl mr-2">&bull;</span>Personal
          Information
        </h1>
        <div className="w-full h-px bg-purple-300 -mt-4" />
      </div>
      <div className="mt-8 bg-white p-10 rounded shadow">
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
            <label className="font-bold">Full Name</label>
            <input
              type="text"
              className="rounded bg-gray-100 focus:outline-none border-b border-transparent caret-purple-600 focus:border-purple-600 block mt-2 p-2 w-full"
              value={values.name}
              name="name"
              onChange={handleChange}
            />
            <label className="font-bold mt-4 block">Job Title</label>
            <input
              type="text"
              className="rounded bg-gray-100 focus:outline-none border-b border-transparent caret-purple-600 focus:border-purple-600 block mt-2 p-2 w-full"
              value={values.title}
              name="title"
              onChange={handleChange}
            />
            <label className="font-bold mt-4 block">Email</label>
            <input
              type="text"
              className="rounded bg-gray-100 focus:outline-none border-b border-transparent caret-purple-600 focus:border-purple-600 block mt-2 p-2 w-full"
              value={values.email}
              name="email"
              onChange={handleChange}
            />
            <label className="font-bold mt-4 block">Phone</label>
            <input
              type="text"
              className="rounded bg-gray-100 focus:outline-none border-b border-transparent caret-purple-600 focus:border-purple-600 block mt-2 p-2 w-full"
              value={values.phone}
              name="phone"
              onChange={handleChange}
            />
            <label className="font-bold mt-4 block">Location</label>
            <input
              type="text"
              className="rounded bg-gray-100 focus:outline-none border-b border-transparent caret-purple-600 focus:border-purple-600 block mt-2 p-2 w-full"
              value={values.location}
              name="location"
              onChange={handleChange}
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
        </div>
        <h2 className="mt-4 font-bold">Skills</h2>
        <textarea
          value={values.skills}
          rows="2"
          className="rounded bg-gray-100 focus:outline-none border-b border-transparent caret-purple-600 focus:border-purple-600 block mt-2 p-2 w-full"
          name="skills"
          onChange={handleChange}
        />
        <LanguageEditor />
      </div>
      <WorkEditor />
      <EducationEditor />
    </div>
  );
};

export default Editor;
