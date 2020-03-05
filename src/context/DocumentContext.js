import React, { createContext, useState } from "react";
import { useForm } from "../hooks";

export const DocumentContext = createContext();

export const DocumentProvider = ({ children }) => {
  const [values, handleChange] = useForm({
    name: "Mourad Aouinat",
    title: "Frontend developer",
    bio:
      "JavaScript Enthusiast, life long learner and passionate about everything Tech",
    skills: "HTML, CSS, JavaScript, ReactJs",
    languages: "French, English, Arabic"
  });

  const [work, setWork] = useState([
    {
      id: 1,
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
        id: Math.floor(Math.random() * 100000),
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
      id: 1,
      start: "2017",
      end: "2018",
      school: "FSJESK",
      degree: "Bachalor in Finance"
    },
    {
      id: 2,
      start: "2018",
      end: "2019",
      school: "FSJESK",
      degree: "Maters in Management"
    },
    {
      id: 3,
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
        id: Math.floor(Math.random() * 100000),
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

  return (
    <DocumentContext.Provider
      value={{
        values,
        handleChange,
        work,
        addWork,
        editWork,
        deleteWork,
        addEducation,
        editEducation,
        deleteEducation,
        education
      }}
    >
      {children}
    </DocumentContext.Provider>
  );
};
