import React, { useState } from "react";
import { IconType } from "react-icons";

interface LinkIconProps {
  Icon: IconType;
  href: string;
  className?: string;
}

function LinkIcon({ Icon, href, className }: LinkIconProps) {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <a href={href}>
      <svg width="0" height="0">
        <linearGradient id="blue-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
          <stop stopColor="#fcd34d" offset="0%" />
          <stop stopColor="#f9a8d4" offset="50%" />
          <stop stopColor="#c4b5fd" offset="100%" />
        </linearGradient>
      </svg>

      <Icon
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`text-gray-700 ${className}`}
        size={40}
        style={isHovered ? { fill: "url(#blue-gradient)" } : {}}
      />
    </a>
  );
}

export default LinkIcon;
