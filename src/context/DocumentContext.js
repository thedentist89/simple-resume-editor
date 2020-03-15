import React, { createContext, useState, useReducer } from "react";
import { useForm } from "../hooks";
import { DocumentReducer } from "../reducers";
import { initialState } from "../data.json";

export const DocumentContext = createContext();

export const DocumentProvider = ({ children }) => {
  const [state, dispatch] = useReducer(DocumentReducer, initialState);

  const [languages, setLanguages] = useState([
    { id: "1", name: "French", level: 3 },
    { id: "2", name: "Arabic", level: 4 },
    { id: "3", name: "English", level: 1 }
  ]);

  const [work, setWork] = useState([
    {
      id: `1`,
      company: "United Remote",
      role: "Frontend developer",
      start: "2018",
      end: "2019",
      location: "kenitra, MOROCCO",
      description: "Blah blah blah you get the idea"
    }
  ]);

  const addWork = () => {
    setWork(work => [
      ...work,
      {
        id: `${Math.floor(Math.random() * 100000)}`,
        company: "",
        role: "",
        start: "",
        end: "",
        location: ""
      }
    ]);
  };

  const editWork = (e, id) => {
    const exp = work.find(work => work.id === id);
    exp[e.target.name] = e.target.value;
    const idx = work.indexOf(exp);
    const copy = [...work];
    copy.splice(idx, 1, exp);
    setWork(copy);
  };

  const deleteWork = id => {
    setWork(work => work.filter(w => w.id !== id));
  };

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
        work,
        setWork,
        addWork,
        editWork,
        deleteWork,
        addEducation,
        editEducation,
        deleteEducation,
        education,
        setEducation,
        languages,
        setLanguages,
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
