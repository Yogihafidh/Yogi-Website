import StarIcon from "@/assets/icons/star.svg";
const words = [
  "Dashboard",
  "SASS",
  "Fronend Development",
  "Backend Developent",
  "System Design",
  "Product Design",
  "Wireframe",
];

export const TapeSection = () => {
  return (
    <div className="py-16 lg:py-24 overflow-x-clip">
      <div className="bg-gradient-to-r from-emerald-300 to-sky-400  -rotate-3 -mx-1">
        <div className="flex  [mask-image:linear-gradient(to_right,transparant,black_10%,black_90%,transparant)]">
          <div className="flex flex-none gap-6 py-6 ">
            {words.map((word) => (
              <div key={word} className="inline-flex gap-6 items-center">
                <span className="uppercase text-gray-950 font-extrabold text-sm md:text-base">
                  {word}
                </span>
                <StarIcon className="size-6 text-gray-950 -rotate-12" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
