import { AiOutlinePound } from "react-icons/ai";
import { Projects } from "../../lib/data/project";
import ProjectCard from "./ProjectCard";

const ProjectSection = () => {
  return (
    <div className="">
      <div className="mr-6 my-12">
        <h1 className="text-xl font-bold ">Recent</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {Projects.map(({ name, link, desc, Icon }, index: number) => {
          return (
            <ProjectCard
              name={name}
              desc={desc}
              Icon={Icon}
              link={link}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectSection;
