import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ExternalLinkIcon, GlobeIcon, Lock } from "lucide-react";
import Link from "next/link";
import { projects } from "@/app/mockdata";

export type Project = (typeof projects)[number];

interface ProjectListsProps {
  projects: Project[];
}

const ProjectLists = ({ projects }: ProjectListsProps) => {
  return (
    <>
      {projects.map((project) => (
        <Card
          key={project.id}
          className="bg-black border-gray-800 hover:shadow-emerald-900"
        >
          <CardContent className="p-2">
            <div className="relative w-full min-h-56">
              <Image
                src={project.banner_image}
                alt={`${project.title} banner`}
                fill
                quality={100} // Highest quality
                placeholder="blur" // Smooth loading effect
                blurDataURL={project.banner_image}
                className="bg-cover rounded-lg"
                priority // Ensures fast loading for first images
              />
            </div>
            <div className="flex items-center justify-between mt-4 px-4">
              <div className="flex flex-col gap-y-1">
                <div className="text-white flex items-center gap-x-2">
                  <div>
                    <p className="text-lg lg:text-xl font-semibold">
                      {project.title}
                    </p>
                    <Badge
                      className={cn(
                        "text-xs animate-pulse h-5",
                        project.status === "public"
                          ? "bg-emerald-500"
                          : "bg-red-500"
                      )}
                    >
                      {project.status === "public" ? (
                        <GlobeIcon className="size-2.5 mx-0.5" />
                      ) : (
                        <Lock className="size-2.5 mx-0.5" />
                      )}
                      {project.status}
                    </Badge>
                  </div>
                </div>
              </div>
              <Link href={project.link}>
                <ExternalLinkIcon color="white" className="size-5" />
              </Link>
            </div>
          </CardContent>
          <CardFooter className="mt-2 flex flex-col items-center gap-y-3">
            <p className="text-neutral-400 line-clamp-2 text-sm lg:text-sm">
              {project.description}
            </p>
            <div className="flex items-center gap-2 w-full">
              {project.tech_stacks.slice(0, 3).map((tech_stack, index) => (
                <Button key={index} size="sm">
                  {tech_stack}
                </Button>
              ))}
            </div>
          </CardFooter>
        </Card>
      ))}
    </>
  );
};

export default ProjectLists;
