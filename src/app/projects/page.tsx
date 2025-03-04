import { projects } from "../mockdata";
import ProjectLists from "@/components/project-lists";

const Page = () => {
  return (
    <div className="mx-8 my-5 animate-slide-in">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        <ProjectLists projects={projects} />
      </div>
    </div>
  );
};

export default Page;
