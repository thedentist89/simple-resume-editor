import React, { useContext, useState } from "react";
import { useForm } from "../hooks";
import Modal, { useModal } from "./Modal";
import { DocumentContext } from "../context/DocumentContext";
import { ReactComponent as Plus } from "../assets/plus.svg";
import { ReactComponent as Trash } from "../assets/trash.svg";
import { ReactComponent as Circle } from "../assets/circle.svg";
import { ReactComponent as CircleSolid } from "../assets/circle-solid.svg";
import { v4 as uuid } from "uuid";
import { range } from "lodash";
import { ADD_LANGUAGE, DELETE_LANGUAGE } from "../actions";

const LanguageEditor = () => {
  const { state, dispatch } = useContext(DocumentContext);
  const [values, handleChange, setValues] = useForm({
    language: "",
    level: "1"
  });
  const [isOpen, setIsOpen] = useModal();
  const [languageID, setLanguageID] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);

  const { languages } = state;

  const handleAdd = () => {
    if (values.language === "") {
      return;
    }
    dispatch({
      type: ADD_LANGUAGE,
      payload: {
        language: {
          id: uuid(),
          name: values.language,
          level: parseInt(values.level)
        }
      }
    });
    setValues({ language: "", level: "1" });
  };

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const onDelete = id => {
    if (isDisabled === true) {
      dispatch({
        type: DELETE_LANGUAGE,
        payload: {
          id
        }
      });
      return;
    }
    toggle();
    setLanguageID(id);
  };

  const handleDelete = id => {
    dispatch({
      type: DELETE_LANGUAGE,
      payload: {
        id
      }
    });
    toggle();
  };

  return (
    <div className="mt-4">
      <div className="flex">
        <div>
          <label className="font-bold">Languages</label>
          <div className="my-4">
            {languages.map(l => (
              <div className="flex items-center my-2" key={l.id}>
                <p className="mr-2 w-1/3">{l.name}</p>
                <div className="flex w2/3">
                  {range(5).map((n, idx) =>
                    n < l.level ? (
                      <CircleSolid
                        key={idx}
                        className="h-5 w-5 fill-current text-purple-600 mr-2"
                      />
                    ) : (
                      <Circle
                        key={idx}
                        className="h-5 w-5 fill-current text-purple-600 mr-2"
                      />
                    )
                  )}
                </div>
                <button
                  className="text-red-600 text-sm font-semibold my-4 ml-4"
                  onClick={() => onDelete(l.id)}
                >
                  <div className="flex items-center">
                    <Trash className="w-4 h-4 mr-2" />
                    <span>Delete</span>
                  </div>
                </button>
              </div>
            ))}
          </div>
          <div className="flex items-center">
            <input
              type="text"
              className="rounded bg-gray-100 focus:outline-none border-b border-transparent caret-purple-600 focus:border-purple-600 block mt-2 p-1 w-full mr-4"
              name="language"
              onChange={handleChange}
              value={values.language}
              autoComplete="off"
              autoCapitalize="word"
            />
            <label className="mr-4">Level</label>
            <select
              onChange={handleChange}
              name="level"
              className="mr-4"
              value={values.level}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <button
              className="text-purple-600 text-sm font-semibold my-4"
              onClick={handleAdd}
            >
              <div className="flex items-center">
                <Plus className="w-4 h-4 mr-2" />
                <span>Add</span>
              </div>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <Modal toggle={toggle}>
          <div className="flex flex-col h-32">
            <div>
              <p>Are you sure you want to delete this language?</p>
              <label className="mt-4 block">
                <input
                  type="checkbox"
                  className="form-checkbox mr-2 text-purple-600"
                  checked={isDisabled}
                  onChange={() => setIsDisabled(true)}
                />
                <span className="text-sm">Don't show again</span>
              </label>
            </div>
            <div className="text-right mt-auto">
              <button
                className="mr-4 rounded bg-red-600 hover:bg-red-400 active:border-red-700 text-white px-2 py-1"
                onClick={() => handleDelete(languageID)}
              >
                Delete
              </button>
              <button
                className="rounded bg-gray-400 hover:bg-gray-300 px-2 py-1"
                onClick={toggle}
              >
                Cancel
              </button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default LanguageEditor;
