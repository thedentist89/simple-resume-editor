import React from "react";
import WorkExp from "./WorkExp";
import Education from "./Education";
import SectionTitle from "./SectionTitle";
import Profile from "./Profile";

const Document = () => {
  return (
    <div className="max-w-2xl mx-auto">
      <SectionTitle>Profile</SectionTitle>
      <Profile />
      <SectionTitle>Work Experience</SectionTitle>
      <WorkExp />
      <SectionTitle>Education</SectionTitle>
      <Education />
    </div>
  );
};

export default Document;
