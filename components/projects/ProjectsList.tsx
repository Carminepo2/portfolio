import React from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import brokerlabScreenshot from "../../public/static/projects/brokerlab.png";
import Project from "../../types/project";
import projectsData from "../../utils/constants/projectsData";

const container = {
  show: {
    transition: {
      staggerChildren: 0.1,
      duration: 1,
    },
  },
};

const item = {
  hidden: { opacity: 0, translateX: 500 },
  show: { opacity: 1, translateX: 0 },
};

function ProjectsList() {
  return (
    <div>
      <h2 className="mb-16 text-4xl sm:text-6xl font-medium text-gray-700">Progetti</h2>
      <motion.div variants={container} initial="hidden" animate="show" className="flex flex-wrap gap-4">
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

  const handleClick = () => {
    controls.start({
      translateY: -9999,
    });
  };

  return (
    <motion.div
      variants={item}
      className={`group ${colorClassName} bg-opacity-80 max-w-md h-72 xs:h-96 py-4 pl-4 xs:py-8 xs:pl-8 w-80 overflow-hidden`}
    >
      <div className="text-gray-700 text-2xl sm:text-3xl font-semibold">{title}</div>
      <div className="text-gray-400 text-sm sm:text-base">{technologies.join(", ")}</div>
      <motion.button
        onClick={handleClick}
        animate={controls}
        className="block transform transition-transform group-hover:-translate-y-6 mt-8 shadow-2xl"
      >
        <Image src={image} placeholder="blur" alt="brokerlab project site screenshot" />
      </motion.button>
    </motion.div>
  );
}

export default ProjectsList;
