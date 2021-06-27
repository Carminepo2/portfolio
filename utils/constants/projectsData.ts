import Project from "../../types/project";
import brokerlabScreenshot from "../../public/static/projects/brokerlab.png";
import germinoAssicuraScreenshot from "../../public/static/projects/germino-assicura.png";

const projectsData: Array<Project> = [
  {
    title: "Brokerlab",
    technologies: ["Nextjs", "React", "Prisma"],
    image: brokerlabScreenshot,
    colorClassName: "bg-blue-100",
  },
  {
    title: "Germino Assicura",
    technologies: ["Nextjs", "React", "Prisma"],
    image: germinoAssicuraScreenshot,
    colorClassName: "bg-pink-100",
  },
  {
    title: "Brokerlab",
    technologies: ["Nextjs", "React", "Prisma"],
    image: brokerlabScreenshot,
    colorClassName: "bg-purple-100",
  },
];

export default projectsData;
