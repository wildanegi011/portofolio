import { cn } from "@/lib/utils";

interface DescriptionProps {
  description: string;
  className?: string;
}

const Description = ({ description, className }: DescriptionProps) => {
  return (
    <div className={cn("text-neutral-300 lg:text-base", className)}>
      {description}
    </div>
  );
};

export default Description;
