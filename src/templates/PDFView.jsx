import React from "react";
import { PDFViewer } from "@react-pdf/renderer";
import ModernPDF from "./ModernPDF";

const PDFView = () => {
  return (
    <PDFViewer className="w-full h-screen">
      <ModernPDF />
    </PDFViewer>
  );
};

export default PDFView;
