type DataList = { name?: string; desc: string };

interface DescriptionListsProps {
  title: string;
  data: DataList[];
  className?: string;
}

const DescriptionLists = ({ title, data }: DescriptionListsProps) => {
  return (
    <div className="text-neutral-300 lg:text-base">
      {title}
      <div className="px-5 lg:px-10 py-2">
        <ul className="list-disc">
          {data?.map((feature, index) => (
            <li className="py-0.5" key={index}>
              {feature.name && (
                <span className="font-bold">{feature.name}: </span>
              )}
              <span>{feature.desc}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DescriptionLists;
