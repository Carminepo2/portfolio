import React, { useEffect, useRef } from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";

interface BackgroundBlobProps {
  color: "purple" | "yellow" | "pink" | "blue" | "indigo" | "green";
  sizeClasses: string;
  positionClasses: string;
}

const colorValues = {
  pink: "249,168,212",
  yellow: "252,211,77",
  purple: "196,181,253",
  blue: "147,197,253",
  indigo: "165,180,252",
  green: "110,231,183",
};

function BackgroundBlob({ color, sizeClasses, positionClasses }: BackgroundBlobProps) {
  const { scrollYProgress } = useViewportScroll();
  const translateY = useTransform(scrollYProgress, [0, 1], [0, -150]);

  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.style.height = "100%";
    canvas.style.width = "100%";

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = canvas.width / 2 - 40;

    const context = canvas.getContext("2d");

    let radgrad = context.createRadialGradient(centerX, centerY, 0, centerX, centerY, radius);
    radgrad.addColorStop(0, `rgba(${colorValues[color]},0.7)`);
    radgrad.addColorStop(0.8, `rgba(${colorValues[color]},0.4)`);
    radgrad.addColorStop(1, `rgba(${colorValues[color]},0)`);

    context.beginPath();
    context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
    context.fillStyle = radgrad;
    context.fill();
  }, [color]);

  return (
    <>
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
            duration: 20,
            delay: Math.random() * 10,
          }}
          className={`${sizeClasses}`}
        >
          <canvas ref={canvasRef} />
        </motion.div>
      </motion.div>
    </>
  );
}

export default BackgroundBlob;
