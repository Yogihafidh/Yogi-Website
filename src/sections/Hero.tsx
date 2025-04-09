import Image from "next/image";
import YogiImage from "@/assets/images/logo.png";
import grainImage from "@/assets/images/grain.jpg";
import { HeroOrbit } from "@/components/HeroOrbit";

export const HeroSection = () => {
  return (
    <div className="relative z-0 overflow-x-clip">
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_80%,transparent)]">
        <div
          className="absolute inset-0 -z-20 opacity-5"
          style={{ backgroundImage: `url(${grainImage.src})` }}
        ></div>
        <div className="size-[20px] hero-ring "></div>
        <div className="size-[240px] hero-ring "></div>
        <div className="size-[480px] hero-ring "></div>
        <div className="size-[720px] hero-ring "></div>
        <div className="size-[960px] hero-ring "></div>
        <div className="size-[1200px] hero-ring "></div>
        <div className="size-[1440px] hero-ring "></div>
      </div>

      <div className="container py-32 md:py-40 text-gray-900">
        <div className="text-center flex flex-col items-center">
          <Image
            src={YogiImage}
            alt="Yogi Photo"
            className="size-[250px] sm:size-[300px] mb-10"
          />
          <p className=" text-xl">Hello!</p>
          <div className="max-w-7xl mx-auto">
            <h1 className="md:text-7xl text-5xl font-bold  space-y-4 mb-8">
              <span>I am </span>
              <span className="text-red-600 border-b-8 border-red-600">
                Yogi Hafidh,
              </span>{" "}
              <span className="block">Full Stack Developer</span>
            </h1>
            <p className="text-base sm:text-lg mb-10">
              I am Yogi, a Software Engineering student at Telkom University
              with a passion for full-stack web development. I work with
              React.js and Next.js on the frontend, and Node.js and Golang on
              the backend. I’ve built several web projects, and I am actively
              sharpening my skills to become a professional full-stack
              developer.
            </p>
          </div>

          <div className="flex flex-col md:flex-row  justify-center items-center gap-5 ">
            <button className="font-semibold border-2 border-gray-200 hover:bg-gray-200 px-6 py-3 rounded-xl cursor-pointer">
              Explore My Project
            </button>
            <button className="border border-gray-500 bg-gray-950 hover:bg-gray-700 text-white px-6 py-3 rounded-xl cursor-pointer">
              Lets Connect
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
