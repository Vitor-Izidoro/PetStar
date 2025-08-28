import React, { useEffect, useState } from "react";

export default function EmptyState({
  title = "Nenhum conteúdo disponível",
  description = "Tudo parece estar em ordem por enquanto.",
  icon,
  actionLabel = null,
  onAction = null,
  delay = 0,
  backgroundColor = "bg-white",
  textColor = "text-gray-800",
  shadow = "shadow-xl",
  rounded = "rounded-xl"
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`
        flex flex-col items-center justify-center py-12 px-6 ${backgroundColor} ${rounded} ${shadow} border border-gray-200 text-center max-w-sm mx-auto
        transition-all duration-700 ease-out transform
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}
        hover:shadow-2xl hover:-translate-y-1 hover:scale-105
      `}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Ícone animado */}
      {icon && <div className="mb-6 animate-bounce-slow">{icon}</div>}

      {/* Título e descrição */}
      <h2 className={`text-2xl font-semibold mb-2 ${textColor}`}>{title}</h2>
      <p className="text-gray-500 mb-6">{description}</p>

      {/* Botão de ação opcional */}
      {actionLabel && onAction && (
        <button
          onClick={onAction}
          className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 hover:scale-105 transition-transform duration-300 transform"
        >
          {actionLabel}
        </button>
      )}
    </div>
  );
}