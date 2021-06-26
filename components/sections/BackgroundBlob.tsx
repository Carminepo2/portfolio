import React from "react";

interface BackgroundBlobProps {
  color: "purple" | "yellow" | "pink";
  className?: string;
}

const colorsClasses = {
  pink: "bg-pink-300",
  yellow: "bg-yellow-300",
  purple: "bg-purple-300",
};

function BackgroundBlob({ color, className }: BackgroundBlobProps) {
  return (
    <div
      className={`animate-blob absolute rounded-full ${colorsClasses[color]} bg-opacity-70 filter blur-xl ${className}`}
    />
  );
}

export default BackgroundBlob;
