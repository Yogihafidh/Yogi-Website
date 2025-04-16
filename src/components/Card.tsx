import grainImage from "@/assets/images/grain.jpg";
import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

export const Card = ({
  className,
  children,
}: PropsWithChildren<{ className?: string }>) => {
  return (
    <div
      className={twMerge(
        "bg-gray-100/50 rounded-3xl relative z-0 overflow-hidden after:content-[''] after:-z-10 after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-3xl after:outline-gray-900/20  text-left",
        className
      )}
    >
      <div
        style={{ backgroundImage: `url(${grainImage.src})` }}
        className="inset-0 absolute -z-10 opacity-10"
      ></div>

      {children}
    </div>
  );
};
