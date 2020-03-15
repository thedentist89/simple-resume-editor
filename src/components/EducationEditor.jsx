import React, { useContext, useState, useEffect } from "react";
import { v4 as id } from "uuid";
import { DocumentContext } from "../context/DocumentContext";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { ReactComponent as Grip } from "../assets/grip-vertical-solid.svg";
import { ReactComponent as Trash } from "../assets/trash.svg";
import { ReactComponent as Plus } from "../assets/plus.svg";
import {
  REORDER_EDUCATION,
  EDIT_EDUCATION,
  ADD_EDUCATION,
  DELETE_EDUCATION
} from "../actions";

const EducationEditor = () => {
  const { state, dispatch } = useContext(DocumentContext);
  const { education } = state;

  const [localState, setState] = useState({ educationList: education });

  useEffect(() => {
    setState({ educationList: education });
  }, [education]);

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  function onDragEnd(result) {
    if (!result.destination) {
      return;
    }

    if (result.destination.index === result.source.index) {
      return;
    }

    const educationList = reorder(
      localState.educationList,
      result.source.index,
      result.destination.index
    );

    setState({ educationList });
    dispatch({
      type: REORDER_EDUCATION,
      payload: {
        education: educationList
      }
    });
  }

  const editEducation = (e, id) => {
    dispatch({
      type: EDIT_EDUCATION,
      payload: {
        id,
        name: e.target.name,
        value: e.target.value
      }
    });
  };

  const addEducation = () => {
    dispatch({
      type: ADD_EDUCATION,
      payload: {
        education: {
          id: id(),
          start: "",
          end: "",
          school: "",
          degree: ""
        }
      }
    });
  };

  const deleteEducation = id => {
    dispatch({
      type: DELETE_EDUCATION,
      payload: {
        id
      }
    });
  };

  return (
    <>
      <div className="mt-6">
        <h1 className="text-2xl font-semibold bg-gray-100 inline-block pt-4 pr-4">
          <span className="text-purple-600 text-2xl mr-2">&bull;</span>Education
        </h1>
        <div className="w-full h-px bg-purple-300 -mt-4" />
      </div>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="education">
          {provided => (
            <div
              className="px-4 py-5 mt-6 rounded bg-white shadow"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {localState.educationList.map((ed, index) => (
                <Draggable draggableId={`${ed.id}`} index={index} key={ed.id}>
                  {provided => (
                    <div
                      key={ed.id}
                      className="mb-6 bg-white"
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                    >
                      <div className="flex px-4 py-2 justify-between items-center bg-gray-200 rounded">
                        <div
                          className="hover:bg-gray-400 p-1 rounded-full"
                          {...provided.dragHandleProps}
                        >
                          <Grip className="h-5 w-5 fill-current text-gray-700" />
                        </div>
                        <button
                          className="text-red-500 font-semibold flex items-center"
                          onClick={() => deleteEducation(ed.id)}
                        >
                          <Trash className="h-4 w-4 mr-2" />
                          <span>Delete</span>
                        </button>
                      </div>
                      <div className="mt-4">
                        <div>
                          <label className="font-bold block">School</label>
                          <input
                            type="text"
                            className="rounded border-b border-transparent caret-purple-600 focus:border-purple-600 bg-gray-100 focus:outline-none p-2 w-full mt-1"
                            value={ed.school}
                            name="school"
                            onChange={e => editEducation(e, ed.id)}
                          />
                        </div>
                        <div className="mt-3">
                          <label className="font-bold block">Degree</label>
                          <input
                            type="text"
                            className="rounded border-b border-transparent caret-purple-600 focus:border-purple-600 bg-gray-100 focus:outline-none p-2 w-full mt-1"
                            value={ed.degree}
                            name="degree"
                            onChange={e => editEducation(e, ed.id)}
                          />
                        </div>
                        <div className="mt-3">
                          <label className="font-bold block">
                            Start & End Date
                          </label>
                          <div className="mt-1">
                            <input
                              type="text"
                              className="rounded border-b border-transparent caret-purple-600 focus:border-purple-600 bg-gray-100 focus:outline-none p-2 w-24 mr-2"
                              value={ed.start}
                              name="start"
                              onChange={e => editEducation(e, ed.id)}
                            />
                            <input
                              type="text"
                              className="rounded border-b border-transparent caret-purple-600 focus:border-purple-600 bg-gray-100 focus:outline-none p-2 w-24"
                              value={ed.end}
                              name="end"
                              onChange={e => editEducation(e, ed.id)}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
              <button
                className="text-purple-600 text-lg font-semibold my-4"
                onClick={addEducation}
              >
                <div className="flex items-center">
                  <Plus className="w-4 h-4 mr-2" />
                  <span>Add new education</span>
                </div>
              </button>
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </>
  );
};

export default EducationEditor;
