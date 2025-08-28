import React, { useEffect, useState } from "react";

export default function LoadingState({
  title = "Carregando...",
  description = "Aguarde um momento enquanto carregamos os dados.",
  icon,
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
      {icon && <div className="mb-6 animate-spin-slow">{icon}</div>}

      {/* Título e descrição */}
      <h2 className={`text-2xl font-semibold mb-2 ${textColor}`}>{title}</h2>
      <p className="text-gray-500">{description}</p>
    </div>
  );
}