import React from "react";
import "./modal.css";
import "../../assets/styles/global.css";

interface ModalProps {
  children: JSX.Element;
}

const Modal: React.FC<ModalProps> = (props: ModalProps) => {
  return (
    <div className="modal-overlay">
      <div className="modal-container bg-color">{props.children}</div>
    </div>
  );
};

export default Modal;
