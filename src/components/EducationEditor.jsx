import React, { useContext } from "react";
import { DocumentContext } from "../context/DocumentContext";

const EducationEditor = () => {
  const {
    education,
    editEducation,
    addEducation,
    deleteEducation
  } = useContext(DocumentContext);

  return (
    <>
      <div className="mt-6">
        <h1 className="text-4xl font-semibold bg-gray-100 inline-block pt-4 pr-4">
          <span className="text-purple-600 text-4xl mr-2">&bull;</span>Education
        </h1>
        <div className="w-full h-px bg-purple-300 -mt-4" />
      </div>
      {education.map(ed => (
        <div key={ed.id} className="p-4 rounded bg-white shadow mt-6">
          <div className="text-right">
            <button
              className="text-red-500 font-semibold"
              onClick={() => deleteEducation(ed.id)}
            >
              delete
            </button>
          </div>
          <div>
            <div>
              <label className="block">School</label>
              <input
                type="text"
                className="rounded border p-2 w-full mt-1"
                value={ed.school}
                name="school"
                onChange={e => editEducation(e, ed.id)}
              />
            </div>
            <div className="mt-3">
              <label className="block">Degree</label>
              <input
                type="text"
                className="rounded border p-2 w-full mt-1"
                value={ed.degree}
                name="degree"
                onChange={e => editEducation(e, ed.id)}
              />
            </div>
            <div className="mt-3">
              <label className="block">Start & End Date</label>
              <div className="mt-1">
                <input
                  type="text"
                  className="rounded border p-2 w-24 mr-2"
                  value={ed.start}
                  name="start"
                  onChange={e => editEducation(e, ed.id)}
                />
                <input
                  type="text"
                  className="rounded border p-2 w-24"
                  value={ed.end}
                  name="end"
                  onChange={e => editEducation(e, ed.id)}
                />
              </div>
            </div>
          </div>
        </div>
      ))}

      <button
        className="text-purple-900 text-lg font-semibold my-4"
        onClick={addEducation}
      >
        &#43; Add new Education
      </button>
    </>
  );
};

export default EducationEditor;
