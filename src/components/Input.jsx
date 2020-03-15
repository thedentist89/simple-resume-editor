import React from "react";

const Input = ({ label, name, value, handleChange }) => {
  return (
    <label>
      <span className="font-bold">{label}</span>
      <input
        type="text"
        className="rounded bg-gray-100 focus:outline-none border-b border-transparent caret-purple-600 focus:border-purple-600 block my-2 p-2 w-full"
        value={value}
        name={name}
        onChange={handleChange}
      />
    </label>
  );
};

export default Input;
