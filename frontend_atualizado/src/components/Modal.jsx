import React from "react";

// Botão de fechar genérico
const ModalCloseButton = ({ onClick, className = "" }) => (
  <button
    onClick={onClick}
    className={`absolute top-4 right-4 text-gray-500 hover:text-gray-700 ${className}`}
  >
    ✕
  </button>
);

const Modal = ({
  isOpen,
  onClose,
  children,
  backdropClassName = "bg-black opacity-50",
  modalClassName = "relative bg-white rounded-xl shadow-lg z-50 w-full max-w-3xl max-h-[90vh] overflow-y-auto p-6",
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-auto p-4">
      {/* Backdrop */}
      <div className={`fixed inset-0 ${backdropClassName}`} onClick={onClose}></div>

      {/* Conteúdo do modal */}
      <div className={modalClassName} style={{ minWidth: "320px" }}>
        <ModalCloseButton onClick={onClose} />
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
