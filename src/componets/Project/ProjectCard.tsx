import { Project } from "../../lib/data/project";

const ProjectCard = ({ name, desc, link, Icon }: Project) => {
  return (
    <a href={link} target={"_blank"}>
      <div className="p-4 flex  transition transform duration-200 ease-in cursor-pointer items-center hover:bg-gray-200 dark:hover:bg-white/5 rounded-lg ">
        <div className="mr-6">
          <Icon lassName="text-5xl" />
        </div>
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold mb-3">{name}</h1>
          <p className="text-sm">{desc}</p>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
