import React, { useContext } from "react";
import { DocumentContext } from "../context/DocumentContext";
import { colors } from "../config.json";

const ColorSelector = () => {
  const { selectColor, selectedColor } = useContext(DocumentContext);

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
              onChange={selectColor}
            />
          </label>
        ))}
      </div>
    </div>
  );
};

export default ColorSelector;
