import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-auto p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>

      {/* Conteúdo do modal */}
      <div
        className="relative bg-white rounded-xl shadow-lg z-50 w-full max-w-3xl max-h-[90vh] overflow-y-auto p-6"
        style={{ minWidth: "320px" }}
      >
        {/* Botão de fechar */}
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          ✕
        </button>

        {/* Conteúdo */}
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
