import React, { createContext, useState, useReducer } from "react";
import { DocumentReducer } from "../reducers";
import { initialState } from "../data.json";

export const DocumentContext = createContext();

export const DocumentProvider = ({ children }) => {
  const [state, dispatch] = useReducer(DocumentReducer, initialState);

  const [education, setEducation] = useState([
    {
      id: "1",
      start: "2017",
      end: "2018",
      school: "FSJESK",
      degree: "Bachalor in Finance"
    },
    {
      id: "2",
      start: "2018",
      end: "2019",
      school: "FSJESK",
      degree: "Maters in Management"
    },
    {
      id: "3",
      start: "2019",
      end: "2020",
      school: "FSJESK",
      degree: "PHD in internet retardation"
    }
  ]);

  const addEducation = () => {
    setEducation(education => [
      ...education,
      {
        id: `${Math.floor(Math.random() * 100000)}`,
        start: "",
        end: "",
        school: "",
        degree: ""
      }
    ]);
  };

  const deleteEducation = id => {
    setEducation(education => education.filter(ed => ed.id !== id));
  };

  const editEducation = (e, id) => {
    const ed = education.find(education => education.id === id);
    ed[e.target.name] = e.target.value;
    const idx = education.indexOf(ed);
    const copy = [...education];
    copy.splice(idx, 1, ed);
    setEducation(copy);
  };

  const [selectedColor, setSelectedColor] = useState("purple");

  const selectColor = e => {
    setSelectedColor(e.target.value);
  };

  return (
    <DocumentContext.Provider
      value={{
        addEducation,
        editEducation,
        deleteEducation,
        education,
        setEducation,
        selectColor,
        selectedColor,
        state,
        dispatch
      }}
    >
      {children}
    </DocumentContext.Provider>
  );
};
