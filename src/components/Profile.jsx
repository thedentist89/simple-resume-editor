import React, { useContext } from "react";
import { DocumentContext } from "../context/DocumentContext";

const Profile = () => {
  const { values, img } = useContext(DocumentContext);

  const { skills } = values;

  const skillsArray = skills.split(",");

  return (
    <div className="mt-8 bg-white p-10 rounded shadow">
      <div className="flex justify-between">
        <div className="w-2/3">
          <h1 className="text-3xl font-semibold">{values.name}</h1>
          <h3 className="text-gray-600 mt-2">{values.title}</h3>
        </div>
        <img
          src={img}
          alt="Mourad Aouinat"
          className="rounded-full h-20 w-20 border-2 border-purple-600"
        />
      </div>
      <h2 className="mt-4 font-semibold uppercase">Bio</h2>
      <p>{values.bio}</p>
      <h2 className="mt-4 font-semibold uppercase">Skills</h2>
      <ul className="mt-2">
        {skillsArray.map((skill, idx) => (
          <li
            key={idx}
            className="inline-block mr-2 px-3 rounded bg-purple-200 text-purple-900 font-semibold py-1"
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Profile;
