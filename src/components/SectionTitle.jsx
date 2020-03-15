import React from "react";

const SectionTitle = ({ children }) => {
  return (
    <div className="mt-6">
      <h1 className="text-2xl font-semibold bg-gray-100 inline-block pt-4 pr-4">
        <span className="text-purple-600 text-2xl mr-2">&bull;</span>
        {children}
      </h1>
      <div className="w-full h-px bg-purple-300 -mt-4" />
    </div>
  );
};

export default SectionTitle;
