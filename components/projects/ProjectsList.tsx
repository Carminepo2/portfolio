import React, { MutableRefObject, ReactNode, useEffect, useRef } from "react";
import { motion, useAnimation, Variants } from "framer-motion";
import Image from "next/image";
import Project from "../../types/project";
import projectsData from "../../utils/constants/projectsData";

const container: Variants = {
  show: {
    transition: {
      staggerChildren: 0.1,
      duration: 1,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, translateX: 500, scale: 0.6 },
  show: { opacity: 1, translateX: 0, scale: 1 },
};

function ProjectsList() {
  return (
    <div className="min-h-screen py-16">
      <h2 className="mb-8 sm:mb-16 text-4xl sm:text-6xl font-medium text-gray-700">Progetti</h2>
      <motion.div variants={container} initial="hidden" animate="show" className="flex flex-wrap gap-8">
        {projectsData.map((project) => (
          <ProjectsListItem key={project.title} project={project} />
        ))}
      </motion.div>
    </div>
  );
}

function ProjectsListItem({ project }: { project: Project }) {
  const { title, technologies, image, colorClassName } = project;
  const controls = useAnimation();

  const ref = useRef<HTMLButtonElement>(null);

  const handleClick = () => {
    controls.start({
      translateY: -9999,
    });
  };

  return (
    <motion.div
      variants={item}
      className={`${colorClassName} bg-opacity-20 rounded-xl backdrop-filter backdrop-blur-xl max-w-md h-72 py-4 pl-4 xs:py-8 xs:pl-8 w-80 overflow-hidden`}
    >
      <div className="text-gray-700 text-2xl sm:text-3xl font-semibold">{title}</div>
      <div className="text-gray-400/60 font-medium text-sm sm:text-lg">{technologies.join(", ")}</div>
      <motion.button
        ref={ref}
        onClick={handleClick}
        animate={controls}
        className="block transform transition-transform hover:-translate-y-6 translate-x-0 mt-8 shadow-projects"
      >
        <Image src={image} placeholder="blur" alt="brokerlab project site screenshot" />
      </motion.button>
    </motion.div>
  );
}

export default ProjectsList;
