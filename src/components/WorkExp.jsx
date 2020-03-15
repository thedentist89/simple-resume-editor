import React, { useContext } from "react";
import { DocumentContext } from "../context/DocumentContext";

const WorkExp = () => {
  const { state } = useContext(DocumentContext);
  const { workExperience: work } = state;

  return (
    <div className="mt-8 bg-white rounded shadow">
      {work.map(w => (
        <div key={w.id} className="p-10 border-b border-gray-400">
          <h1 className="font-bold text-2xl">{w.role}</h1>
          <h2 className="uppercase font-semibold text-purple-600">
            {w.company}
          </h2>
          <div className="flex justify-between mt-4">
            <p className="text-gray-600">
              {w.start} - {w.end} &bull; 1 yrs 2 mo
            </p>
            <p>{w.location}</p>
          </div>
          <p className="mt-4 text-gray-600">{w.description}</p>
        </div>
      ))}
    </div>
  );
};

export default WorkExp;
