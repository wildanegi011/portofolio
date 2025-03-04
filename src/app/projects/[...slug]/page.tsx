import { projects } from "@/app/mockdata";
import { cn } from "@/lib/utils";
import { GlobeIcon, Lock, SquareArrowOutUpRightIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ImageCarousel from "@/components/image-carousel";
import { Separator } from "@/components/ui/separator";
import Description from "./_components/description";
import Title from "./_components/title";
import DescriptionLists from "./_components/description-lists";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const Page = async ({ params }: PageProps) => {
  const slug = await (await params).slug;
  const [data] = projects.filter((project) => project.slug == slug);

  return (
    <div className="mx-8 lg:mx-48 my-5 animate-slide-in">
      <div className="mb-5 flex items-center gap-x-1">
        <Button
          size="sm"
          className={cn(
            "font-semibold",
            data.status === "public" ? "text-emerald-500" : "text-red-500"
          )}
        >
          {data.status === "public" ? <GlobeIcon /> : <Lock />}
          {data.status}
        </Button>
        {data.status === "public" && (
          <Link href={data.deployment_link} target="_blank">
            <Button size="sm" className="font-semibold">
              <SquareArrowOutUpRightIcon className="size-2" />
              Preview site
            </Button>
          </Link>
        )}
      </div>
      <div className="flex flex-col items-start gap-y-2">
        <Title title={data.title} />
        <Description description={data.description} />
        <Separator className="my-2 bg-gray-900" />

        <div className="flex flex-col gap-y-2">
          {/* Overview */}
          <div className="py-3">
            <Title title="Overview" separator />
            <Description description={data.description} />
            <div className="mt-5">
              <ImageCarousel images={data.images} />
            </div>
          </div>

          {/* features */}
          <div className="py-3">
            <Title title="Features ✨" separator />
            <DescriptionLists
              title="To achieve this, the following features were used:"
              data={data.features}
            />
          </div>

          {/* technologies */}
          <div className="py-3">
            <Title title="Technologies 🚀" separator />
            <DescriptionLists
              title="To achieve this, the following technologies were used:"
              data={data.technologies}
            />
          </div>

          {/* my task */}
          {data.tasks && (
            <div className="py-3">
              <Title title="My Task 📌" separator />
              <DescriptionLists
                title="Frontend Development:"
                data={data.tasks?.[0].frontend}
              />
              <DescriptionLists
                title="Backend Development:"
                data={data.tasks?.[0].backend}
              />
            </div>
          )}

          {data.tech_stacks && (
            <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-9 gap-1">
              {data.tech_stacks.map((hastag, index) => (
                <Button key={index}>{hastag}</Button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
