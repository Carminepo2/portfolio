import clsx from "clsx";
import React, { forwardRef, ReactChild } from "react";

interface ButtonProps {
  buttonType: "primary" | "secondary";
  children: ReactChild;
  className?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(ButtonRef);

function ButtonRef({ buttonType, children, className, ...props }, ref) {
  return (
    <button
      ref={ref}
      className={clsx(`py-2 px-6 sm:py-2 sm:px-8 rounded-md transition-colors ${className}`, {
        "bg-yellow-300 font-medium hover:bg-yellow-400 text-white shadow-primary-btn": buttonType === "primary",

        "bg-white hover:bg-gray-50 text-gray-400 hover:text-gray-500 shadow-secondary-btn": buttonType === "secondary",
      })}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
