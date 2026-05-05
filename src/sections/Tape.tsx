import StarIcon from "@/assets/icons/star.svg";
import { Fragment } from "react";

const words = [
  "Scalable Systems",
  "Full Stack Engineering",
  "Backend Architecture",
  "API Design",
  "System Design",
  "Performance Optimization",
  "Clean Architecture",
  "Real-World Impact",
];

type TapeSectionProps = {
  straight?: boolean;
  compact?: boolean;
};

export const TapeSection = ({
  straight = false,
  compact = false,
}: TapeSectionProps) => {
  const containerClass = compact
    ? "overflow-x-clip -ml-1"
    : "py-16 lg:py-24 overflow-x-clip -ml-1";
  const stripClass = straight
    ? "bg-gradient-to-r from-emerald-300 to-sky-400 rotate-0"
    : "bg-gradient-to-r from-emerald-300 to-sky-400 -rotate-3";

  return (
    <div className={containerClass}>
      <div className={stripClass}>
        <div className="flex  [mask-image:linear-gradient(to_right,transparent,black_5%,black_90%,transparent)]">
          <div className="flex flex-none gap-6 py-6 m-auto  animate-move-left [animation-duration:30s]">
            {[...new Array(2)].fill(0).map((_, idx) => (
              <Fragment key={idx}>
                {words.map((word) => (
                  <div key={word} className="inline-flex gap-6 items-center">
                    <span className="uppercase text-gray-950 font-extrabold text-sm md:text-base">
                      {word}
                    </span>
                    <StarIcon className="size-6 text-gray-950 -rotate-12" />
                  </div>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
