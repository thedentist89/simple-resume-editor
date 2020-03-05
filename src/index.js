import React from "react";
import ReactDOM from "react-dom";
import { DocumentProvider } from "./context/DocumentContext";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <DocumentProvider>
      <App />
    </DocumentProvider>
  </React.StrictMode>,
  rootElement
);
