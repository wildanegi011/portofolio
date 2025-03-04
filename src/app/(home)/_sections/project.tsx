import Link from "next/link";
import { projects } from "@/app/mockdata";
import { Button } from "@/components/ui/button";
import ProjectLists from "@/components/project-lists";

const ProjectSection = () => {
  return (
    <section
      id="project"
      className="h-full lg:h-screen flex flex-col justify-start items-start mt-40 md:mt-10 scroll-mt-28 md:scroll-mt-28 px-6"
    >
      <h1 className="text-xl md:text-3xl font-bold mb-2">My Projects</h1>
      <p className="text-neutral-400 text-sm md:text-lg mb-5">
        Here are some of the projects I{"'"}ve worked on:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        <ProjectLists projects={projects.slice(0, 3)} />
      </div>
      <div className="flex items-center justify-center w-full mt-5">
        <Link href="/projects">
          <Button size="lg">See more</Button>
        </Link>
      </div>
    </section>
  );
};

export default ProjectSection;
