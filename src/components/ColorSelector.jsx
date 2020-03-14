import React, { useState } from "react";

const ColorSelector = () => {
  const [selectedColor, setSelectedColor] = useState("purple");

  const colors = [
    {
      color: "blue",
      className: "bg-blue-600"
    },
    {
      color: "green",
      className: "bg-green-600"
    },
    {
      color: "purple",
      className: "bg-purple-600"
    },
    {
      color: "yellow",
      className: "bg-yellow-600"
    },
    {
      color: "red",
      className: "bg-red-600"
    }
  ];

  const handleSelect = e => {
    setSelectedColor(e.target.value);
  };

  return (
    <div className="flex my-4">
      <div className="flex mx-auto items-center">
        {colors.map((color, index) => (
          <label key={index}>
            <span
              className={`block h-8 w-8 rounded-full ${
                color.className
              } mx-4 flex items-center ${
                selectedColor === color.color ? "border-2 border-gray-800" : ""
              }`}
            >
              <span
                className={`h-2 w-2 bg-gray-700 rounded-full mx-auto ${
                  selectedColor === color.color ? "" : "hidden"
                }`}
              ></span>
            </span>
            <input
              type="radio"
              name="color"
              value={color.color}
              className="hidden"
              onChange={handleSelect}
            />
          </label>
        ))}
      </div>
    </div>
  );
};

export default ColorSelector;
