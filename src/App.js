import React from "react";
import Document from "./components/Document";
import Editor from "./components/Editor";
import { Router } from "@reach/router";
import Banner from "./components/Banner";
import "./styles/index.css";
import ModernPDF from "./templates/ModernPDF";

export default function App() {
  return (
    <div className="border-t-4 border-purple-600 py-10 px-6 bg-gray-100 h-full">
      <Banner />
      <div className="mx-auto">
        <Router>
          <Document path="/" />
          <Editor path="/editor" />
          <ModernPDF path="/pdf" />
        </Router>
      </div>
    </div>
  );
}
