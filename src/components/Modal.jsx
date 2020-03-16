import React, { useEffect, useState, useCallback } from "react";
import { createPortal } from "react-dom";
import { ReactComponent as Close } from "../assets/close.svg";
import { useSpring, animated } from "react-spring";

const modalRoot = document.getElementById("modal-root");

export function useModal() {
  const [isOpen, setIsOpen] = useState(false);

  return [isOpen, setIsOpen];
}

const Modal = ({ children, toggle }) => {
  const closeOnEsc = useCallback(
    e => {
      if (e.keyCode === 27) {
        toggle();
      }
    },
    [toggle]
  );

  useEffect(() => {
    const el = document.createElement("div");
    modalRoot.appendChild(el);
    document.addEventListener("keydown", closeOnEsc);

    return () => {
      modalRoot.removeChild(el);
      document.removeEventListener("keydown", closeOnEsc);
    };
  }, [closeOnEsc]);

  const animation = useSpring({
    to: { opacity: 1, transform: "scale(1)" },
    from: { opacity: 0, transform: "scale(0.2)" },
    config: { duration: 200 }
  });

  return createPortal(
    <div
      className="fixed inset-0 h-screen w-screen flex items-center"
      style={{ backgroundColor: "rgba(200, 200, 200, .3)" }}
      aria-modal="true"
    >
      <animated.div
        className="z-50 bg-white rounded-md py-6 px-4 shadow-xl mx-auto w-1/2"
        style={animation}
      >
        <div className="text-right">
          <button
            className="rounded-full bg-gray-300 hover:bg-gray-400"
            onClick={toggle}
          >
            <Close className="text-gray-800 w-6 h-6" />
          </button>
        </div>

        {children}
      </animated.div>

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
