import Project from "../../types/project";
import brokerlabScreenshot from "../../public/static/projects/brokerlab.png";
import germinoAssicuraScreenshot from "../../public/static/projects/germino-assicura.png";
import pixelWeatherScreenshot from "../../public/static/projects/pixel-weather.png";
import newHomesCaScreenshot from "../../public/static/projects/new-homes-ca.png";

const projectsData: Array<Project> = [
  {
    title: "newHomes.ca",
    technologies: ["Nextjs", "React", "Prisma"],
    image: newHomesCaScreenshot,
    colorClassName: "bg-pink-200",
  },
  {
    title: "Germino Assicura",
    technologies: ["Nextjs", "React", "Prisma"],
    image: germinoAssicuraScreenshot,
    colorClassName: "bg-blue-200",
  },
  {
    title: "Brokerlab",
    technologies: ["Nextjs", "React", "Prisma"],
    image: brokerlabScreenshot,
    colorClassName: "bg-blue-200",
  },
  {
    title: "Pixel Weather",
    technologies: ["Javascript", "HTML"],
    image: pixelWeatherScreenshot,
    colorClassName: "bg-purple-200",
  },
];

export default projectsData;
