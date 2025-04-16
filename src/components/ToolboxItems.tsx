import { twMerge } from "tailwind-merge";

type ToolboxProps = {
  items: string[];
  className?: string;
  itemsWrapperClassName?: string;
};
export const ToolboxItems = ({
  items,
  className,
  itemsWrapperClassName,
}: ToolboxProps) => {
  return (
    <div
      className={twMerge(
        "flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
        className
      )}
    >
      <div
        className={twMerge(
          "flex flex-none gap-6 py-0.5 pr-6",
          itemsWrapperClassName
        )}
      >
        {items.map((tool) => (
          <div
            key={tool}
            className="py-2 px-4 outline outline-2 outline-gray-400/50 rounded-lg"
          >
            {tool}
          </div>
        ))}
      </div>
    </div>
  );
};
