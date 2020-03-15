import React, { useContext } from "react";
import { DocumentContext } from "../context/DocumentContext";
import { colors } from "../data.json";
import { SELECT_COLOR } from "../actions";

const ColorSelector = () => {
  const { state, dispatch } = useContext(DocumentContext);
  const { currentColor } = state;

  const selectColor = e => {
    dispatch({
      type: SELECT_COLOR,
      payload: { color: e.target.value }
    });
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
                currentColor === color.color ? "border-2 border-gray-800" : ""
              }`}
            >
              <span
                className={`h-2 w-2 bg-gray-700 rounded-full mx-auto ${
                  currentColor === color.color ? "" : "hidden"
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
