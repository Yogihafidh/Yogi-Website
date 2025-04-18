import Image from "next/image";
import YogiImage from "@/assets/images/logo.png";
import grainImage from "@/assets/images/grain.jpg";
import { FaReact } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import { SectionHeader } from "@/components/SeactionHeader";

export const HeroSection = () => {
  return (
    <div className="relative z-0 overflow-x-clip">
      {/* Background */}
      <div className="absolute -z-20 inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_5%,black_80%,transparent)]">
        <div
          className="absolute inset-0  opacity-5"
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

      {/* Hero */}
      <div className="container pt-32 md:pt-40 text-gray-900">
        <div className="text-center flex flex-col items-center">
          <p className=" text-xl">Hello!</p>
          <div className="max-w-7xl mx-auto">
            <h1 className="md:text-7xl text-5xl font-bold space-y-4 mb-8">
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
        </div>
      </div>

      {/* Hero CTA */}
      <div className="text-center -mt-28 sm:-mt-32 md:-mt-40 ">
        <div className="relative ">
          <div className="bg-gray-100 border w-max border-gray-300 p-1.5 rounded-full flex justify-center items-center gap-3 absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-10 sm:translate-y-1/2 md:translate-y-32 z-20">
            <a href="https://github.com/Yogihafidh">
              <button className="w-fit font-semibold border-2 border-gray-500 hover:bg-gray-200 px-3 py-1 md:px-6 md:py-3 rounded-full  cursor-pointer">
                Explore all my Project
              </button>
            </a>
            <a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile">
              <button className="w-fit border border-gray-500 bg-gray-950 hover:bg-gray-700 text-white px-3 py-1 md:px-6 md:py-3 rounded-full cursor-pointer">
                Lets Connect
              </button>
            </a>
          </div>

          <Image
            src={YogiImage}
            alt="Yogi Photo"
            className="scale-75 -mb-10 sm:-mb-20 md:-mb-28 lg:-mb-28 mx-auto"
          />
        </div>

        <div className="bg-gray-950 text-white w-full px-10  rounded-[32px] py-20 relative z-10 ">
          <div>
            <p className="uppercase font-semibold text-sm tracking-widest md:mb-4">
              SKILL SET
            </p>
            <h1 className="font-serif text-3xl md:text-5xl mb-8 md:h-24">
              Services I Provide
            </h1>

            <div className="container flex flex-col md:flex-row gap-6 lg:gap-10 items-center justify-center ">
              <div className="bg-gray-200/10 rounded-full h-[450px] md:h-[500px]  backdrop-blur mx-auto w-full p-10">
                <div className="bg-gray-300/20 p-5 rounded-full size-fit mx-auto mb-10">
                  <FaFigma className="text-8xl text-white" />
                </div>

                <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                  UI Design
                </h2>
                <p className="text-sm md:text-base">
                  I create clean and user-friendly designs based on
                  requirements, starting from wireframes to interactive
                  prototypes for web and mobile apps.
                </p>
              </div>

              <div className="bg-white rounded-full h-[450px] md:h-[500px] backdrop-blur mx-auto p-10 w-full text-gray-900">
                <div className="bg-gray-500/20 p-5 rounded-full size-fit mx-auto mb-10">
                  <FaReact className="text-8xl " />
                </div>

                <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                  Frontend Development
                </h2>
                <p className="text-sm md:text-base">
                  I build fast and responsive websites using React and Next.js,
                  focusing on clean code, performance, and great user
                  experience.
                </p>
              </div>

              <div className="bg-gray-200/10 rounded-full h-[500px] backdrop-blur w-full  mx-auto p-10">
                <div className="bg-gray-300/20 p-5 rounded-full size-fit mx-auto mb-10">
                  <FaGolang className="text-8xl text-white" />
                </div>

                <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                  Backend Development
                </h2>
                <p className="text-sm md:text-base">
                  I develop reliable and scalable server-side applications using
                  Go (Golang), focusing on performance, security, and clean
                  architecture. (COOMING SOON)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
