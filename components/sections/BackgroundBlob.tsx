import React from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";

interface BackgroundBlobProps {
  color: "purple" | "yellow" | "pink";
  sizeClasses: string;
  positionClasses: string;
}

const colorsClasses = {
  pink: "bg-pink-300",
  yellow: "bg-yellow-300",
  purple: "bg-purple-300",
};

function BackgroundBlob({ color, sizeClasses, positionClasses }: BackgroundBlobProps) {
  const { scrollYProgress } = useViewportScroll();
  const translateY = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <motion.div className={`absolute ${positionClasses}`} style={{ translateY }}>
      <motion.div
        animate={{
          scale: [1, 1.2, 1.4, 1],
          translateX: [0, 80, -10, 0],
          translateY: [0, -30, 30, 0],
        }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 10,
          delay: Math.random(),
        }}
        className={`absolute rounded-full ${colorsClasses[color]} bg-opacity-70 filter blur-xl ${sizeClasses}`}
      />
    </motion.div>
  );
}

export default BackgroundBlob;
