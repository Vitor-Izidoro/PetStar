import React from "react";
import { Link } from "react-router-dom";

const NavLinkButton = ({
  to,
  state,
  children,
  variant = "primary", // primary, secondary, danger
  size = "md",         // sm, md, lg
  className = "",
}) => {
  const baseStyles = "block text-center rounded-lg font-semibold transition-colors duration-200";

  const variants = {
    primary: "bg-indigo-600 text-white hover:bg-indigo-700",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    danger: "bg-red-600 text-white hover:bg-red-500",
  };

  const sizes = {
    sm: "py-1 px-3 text-sm",
    md: "py-2 px-4 text-base",
    lg: "py-3 px-6 text-lg",
  };

  return (
    <Link
      to={to}
      state={state}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </Link>
  );
};

export default NavLinkButton;
