import React, { useEffect } from "react";

const Modal = ({ show, closeModal, children }) => {
  useEffect(() => {
    if (!show) return;
    const main = document.querySelector("main");
    main.style.overflow = "hidden";
    return () => {
      main.style.overflow = "auto";
    };
  }, [show]);

  const handleClose = ({ target, currentTarget }) => {
    const clickedIsFather = target == currentTarget;
    if (!clickedIsFather) return;
    closeModal();
  };

  if (!show) return null;

  return (
    <div
      onClick={handleClose}
      className="animate-dropDown h-screen w-full absolute top-0 left-0 z-10 flex items-center justify-center"
      style={{ backgroundColor: "rgba(17, 24, 39, 0.7)" }}
    >
      <div className="max-w-2xl w-full shadow-2xl rounded-lg p-4 mx-4 bg-blue-500">
        {children}
      </div>
    </div>
  );
};

export default Modal;
