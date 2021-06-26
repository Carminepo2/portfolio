import React from "react";

interface BackgroundBlobProps {
  color: "purple" | "yellow" | "pink";
  className?: string;
}

function BackgroundBlob({ color, className }: BackgroundBlobProps) {
  return (
    <div className={`animate-blob absolute rounded-full bg-${color}-300 bg-opacity-70 filter blur-xl ${className}`} />
  );
}

export default BackgroundBlob;
