import { ProjectSection } from "../../componets";

const Index = () => {
  return (
    <div className="">
      <div className="space-y-5 mb-10">
        <h1 className="text-4xl dark:text-white font-extrabold">Projects</h1>
        <p>list of all of my projects that i am proud of </p>
      </div>
      <div>
        <ProjectSection />
      </div>
    </div>
  );
};

export default Index;
