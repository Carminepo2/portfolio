import clsx from "clsx";
import React, { forwardRef, ReactChild } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  buttonType: "primary" | "secondary";
  children: ReactChild;
  className?: string;
}

function Button({ buttonType, children, className, ...props }: ButtonProps) {
  return (
    <button
      className={clsx(`py-2 px-6 sm:py-2 sm:px-8 rounded-md transition-colors ${className}`, {
        "bg-yellow-300 font-medium hover:bg-yellow-400 text-white shadow-primary-btn": buttonType === "primary",

        "bg-white hover:bg-gray-50 text-gray-500 hover:text-gray-600 shadow-secondary-btn": buttonType === "secondary",
      })}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
