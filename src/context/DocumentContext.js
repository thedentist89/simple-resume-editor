import React, { createContext, useState, useReducer } from "react";
import { DocumentReducer } from "../reducers";
import { initialState } from "../data.json";

export const DocumentContext = createContext();

export const DocumentProvider = ({ children }) => {
  const [state, dispatch] = useReducer(DocumentReducer, initialState);

  return (
    <DocumentContext.Provider
      value={{
        state,
        dispatch
      }}
    >
      {children}
    </DocumentContext.Provider>
  );
};
