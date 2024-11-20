import React from "react";

function Button({
  children,
  type = "button",
  bgColor = "bg-blue-600",
  color = "text-white",
  className = "",
  ...props
}) {
  return (
    <button
      type={type}
      className={`px-4 py-2 rounded-lg ${bgColor} ${color} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
