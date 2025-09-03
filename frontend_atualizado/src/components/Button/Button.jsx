import React from "react";

const Button = ({
  children,
  onClick,
  type = "button",
  variant = "primary",
  size = "md",
  icon: Icon,      // Componente do ícone (React component)
  iconPosition = "left", // "left" ou "right"
  className = "",
  disabled = false,
}) => {
  const baseStyles = "rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary: "bg-indigo-600 text-white hover:bg-indigo-500 focus:ring-indigo-500",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-300",
    danger: "bg-red-600 text-white hover:bg-red-500 focus:ring-red-500",
  };

  const sizes = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${className} ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
    >
      {Icon && iconPosition === "left" && <Icon />}
      {children}
      {Icon && iconPosition === "right" && <Icon />}
    </button>
  );
};

export default Button;
