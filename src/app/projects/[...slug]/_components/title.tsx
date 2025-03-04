import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

interface TitleProps {
  title: string;
  className?: string;
  separator?: boolean;
}

const Title = ({ title, className, separator = false }: TitleProps) => {
  if (separator) {
    return (
      <div className={cn("flex items-center gap-x-3 mb-3")}>
        <Separator className="h-9 w-1 bg-emerald-500" />
        <div className={cn("text-2xl lg:text-3xl font-semibold", className)}>
          {title}
        </div>
      </div>
    );
  }

  return (
    <div className={cn("text-2xl lg:text-3xl font-semibold", className)}>
      {title}
    </div>
  );
};

export default Title;
