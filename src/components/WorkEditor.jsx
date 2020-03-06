import React, { useContext, useState, useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { DocumentContext } from "../context/DocumentContext";
import { ReactComponent as Grip } from "../assets/grip-vertical-solid.svg";
import { ReactComponent as Trash } from "../assets/trash.svg";
import { ReactComponent as Plus } from "../assets/plus.svg";

const WorkEditor = () => {
  const { work, editWork, addWork, deleteWork, setWork } = useContext(
    DocumentContext
  );

  const [state, setState] = useState({ workList: work });

  useEffect(() => {
    setState({ workList: work });
  }, [work]);

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

    const workList = reorder(
      state.workList,
      result.source.index,
      result.destination.index
    );

    setState({ workList });
    setWork(workList);
  }

  return (
    <>
      <div className="mt-6">
        <h1 className="text-2xl font-semibold bg-gray-100 inline-block pt-4 pr-4">
          <span className="text-purple-600 text-2xl mr-2">&bull;</span>Work
          Experience
        </h1>
        <div className="w-full h-px bg-purple-300 -mt-4" />
      </div>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="work">
          {provided => (
            <div
              className="mt-8 bg-white rounded shadow"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {state.workList.map((w, index) => (
                <Draggable draggableId={`${w.id}`} index={index} key={w.id}>
                  {provided => (
                    <div
                      className="p-5 bg-white rounded"
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                    >
                      <div className="flex px-4 py-2 justify-between items-center bg-gray-200 rounded">
                        <div
                          {...provided.dragHandleProps}
                          className="hover:bg-gray-400 p-1 rounded-full"
                        >
                          <Grip className="h-5 w-5 fill-current text-gray-700" />
                        </div>
                        <button
                          className="text-red-500 font-semibold flex items-center"
                          onClick={() => deleteWork(w.id)}
                        >
                          <Trash className="h-4 w-4 mr-2" />
                          <span>Delete</span>
                        </button>
                      </div>
                      <div className="mt-4 flex">
                        <div className="w-1/2 mr-4">
                          <label className="font-bold">Company</label>
                          <input
                            type="text"
                            className="rounded bg-gray-100 focus:outline-none border-b border-transparent focus:border-purple-600 block mt-2 p-2 w-full"
                            value={w.company}
                            name="company"
                            onChange={e => editWork(e, w.id)}
                            style={{ caretColor: "#805ad5" }}
                          />
                        </div>
                        <div className="w-1/2">
                          <label className="font-bold">Role</label>
                          <input
                            type="text"
                            className="rounded bg-gray-100 focus:outline-none border-b border-transparent focus:border-purple-600 block mt-2 p-2 w-full"
                            value={w.role}
                            name="role"
                            onChange={e => editWork(e, w.id)}
                            style={{ caretColor: "#805ad5" }}
                          />
                        </div>
                      </div>
                      <div className="mt-4 flex">
                        <div className="w-1/2 mr-4">
                          <label className="font-bold block">
                            Start & end date
                          </label>
                          <div className="flex mt-2">
                            <input
                              type="text"
                              className="rounded bg-gray-100 focus:outline-none border-b border-transparent focus:border-purple-600 inline-block p-2 w-1/2 mr-3"
                              value={w.start}
                              name="start"
                              onChange={e => editWork(e, w.id)}
                              style={{ caretColor: "#805ad5" }}
                            />
                            <input
                              type="text"
                              className="rounded bg-gray-100 focus:outline-none border-b border-transparent focus:border-purple-600 inline-block p-2 w-1/2"
                              value={w.end}
                              name="end"
                              onChange={e => editWork(e, w.id)}
                              style={{ caretColor: "#805ad5" }}
                            />
                          </div>
                        </div>
                        <div className="w-1/2">
                          <label className="font-bold">Location</label>
                          <input
                            type="text"
                            className="rounded bg-gray-100 focus:outline-none border-b border-transparent focus:border-purple-600 block mt-2 p-2 w-full"
                            value={w.location}
                            name="location"
                            onChange={e => editWork(e, w.id)}
                            style={{ caretColor: "#805ad5" }}
                          />
                        </div>
                      </div>
                      <div className="mt-4">
                        <textarea
                          rows="5"
                          className="w-full bg-gray-100 focus:outline-none border-b border-transparent focus:border-purple-600 rounded p-1"
                          value={w.description}
                          name="description"
                          onChange={e => editWork(e, w.id)}
                          style={{ caretColor: "#805ad5" }}
                        />
                      </div>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
              <button
                className="text-purple-600 text-lg font-semibold my-4 ml-5"
                onClick={addWork}
              >
                <div className="flex items-center">
                  <Plus className="w-4 h-4 mr-2" />
                  <span>Add new experience</span>
                </div>
              </button>
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </>
  );
};

export default WorkEditor;
