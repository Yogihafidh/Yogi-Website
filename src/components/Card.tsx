import grainImage from "@/assets/images/grain.jpg";
import { ComponentPropsWithoutRef, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

export const Card = ({
  className,
  children,
  ...other
}: ComponentPropsWithoutRef<"div">) => {
  return (
    <div
      className={twMerge(
        "bg-gray-100 rounded-3xl relative z-0 overflow-hidden after:content-[''] after:-z-10 after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-3xl after:outline-gray-900/20  text-left",
        className
      )}
      {...other}
    >
      <div
        style={{ backgroundImage: `url(${grainImage.src})` }}
        className="inset-0 absolute -z-10 opacity-10"
      ></div>

      {children}
    </div>
  );
};
