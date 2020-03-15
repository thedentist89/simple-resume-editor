import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const modalRoot = document.getElementById("modal-root");

export function useModal() {
  const [isOpen, setIsOpen] = useState(false);

  return [isOpen, setIsOpen];
}

const Modal = ({ children }) => {
  const el = document.createElement("div");

  useEffect(() => {
    document.appendChild(el);

    return () => {
      document.removeChild(el);
    };
  });

  return createPortal(
    <div className="absolute inset-0 bg-red-700">{children}</div>,
    modalRoot
  );
};

export default Modal;
