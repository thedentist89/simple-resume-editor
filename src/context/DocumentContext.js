import React, { createContext, useState, useReducer } from "react";
import { DocumentReducer } from "../reducers";
import { initialState } from "../data.json";

export const DocumentContext = createContext();

export const DocumentProvider = ({ children }) => {
  const [state, dispatch] = useReducer(DocumentReducer, initialState);

  const [selectedColor, setSelectedColor] = useState("purple");

  const selectColor = e => {
    setSelectedColor(e.target.value);
  };

  return (
    <DocumentContext.Provider
      value={{
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
