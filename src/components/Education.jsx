import React, { useContext } from "react";
import { DocumentContext } from "../context/DocumentContext";

const Education = () => {
  const { education } = useContext(DocumentContext);

  return (
    <div className="my-6">
      {education.map((ed, idx) => (
        <div
          key={idx}
          className="flex justify-between items-center px-10 mb-10"
        >
          <div className="text-gray-600">
            {ed.start} - {ed.end}
          </div>
          <div className="relative">
            <div className="text-purple-600 text-4xl">&bull;</div>
            {idx !== education.length - 1 && (
              <div
                className="absolute bg-purple-600 h-24 w-px top-0 inset-x-0 mt-8"
                style={{ marginLeft: 7 }}
              ></div>
            )}
          </div>
          <div className="w-2/3">
            <h3>{ed.school}</h3>
            <p className="text-gray-600">{ed.degree}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Education;
