import React, { useContext } from "react";
import WorkEditor from "./WorkEditor";
import EducationEditor from "./EducationEditor";
import LanguageEditor from "./LanguageEditor";
import ColorSelector from "./ColorSelector";
import SectionTitle from "./SectionTitle";
import ProfileEditor from "./ProfileEditor";

const Editor = () => {
  return (
    <div className="max-w-2xl mx-auto">
      <SectionTitle>Profile</SectionTitle>
      <div className="mt-8 bg-white p-10 rounded shadow">
        <ColorSelector />
        <ProfileEditor />
        <LanguageEditor />
      </div>
      <WorkEditor />
      <EducationEditor />
    </div>
  );
};

export default Editor;
