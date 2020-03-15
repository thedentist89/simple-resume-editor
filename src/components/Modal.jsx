import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { ReactComponent as Close } from "../assets/close.svg";

const modalRoot = document.getElementById("modal-root");

export function useModal() {
  const [isOpen, setIsOpen] = useState(false);

  return [isOpen, setIsOpen];
}

const Modal = ({ children, toggle }) => {
  const closeOnEsc = e => {
    if (e.keyCode === 27) {
      toggle();
    }
  };

  useEffect(() => {
    const el = document.createElement("div");
    modalRoot.appendChild(el);
    document.addEventListener("keydown", closeOnEsc);

    return () => {
      modalRoot.removeChild(el);
      document.removeEventListener("keydown", closeOnEsc);
    };
  }, []);

  return createPortal(
    <div
      className="fixed inset-0 h-screen w-screen flex items-center"
      style={{ backgroundColor: "rgba(200, 200, 200, .3)" }}
      aria-modal="true"
    >
      <div className="z-50 bg-white rounded-md py-6 px-4 shadow-xl mx-auto w-1/2">
        <div className="text-right">
          <button
            className="rounded-full bg-gray-300 hover:bg-gray-400"
            onClick={toggle}
          >
            <Close className="text-gray-800 w-6 h-6" />
          </button>
        </div>
        {children}
      </div>
      <div
        role="button"
        className="absolute inset-0 h-full w-full cursor-default"
        onClick={toggle}
      ></div>
    </div>,
    modalRoot
  );
};

export default Modal;
