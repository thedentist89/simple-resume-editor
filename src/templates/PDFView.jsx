import React, { useContext } from "react";
import { PDFViewer } from "@react-pdf/renderer";
import ModernPDF from "./ModernPDF";
import { DocumentContext } from "../context/DocumentContext";

const PDFView = () => {
  const data = useContext(DocumentContext);
  return (
    <PDFViewer className="w-full h-screen" data={data}>
      <ModernPDF />
    </PDFViewer>
  );
};

export default PDFView;
