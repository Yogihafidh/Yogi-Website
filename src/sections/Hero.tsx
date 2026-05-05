"use client";
import Image from "next/image";
import YogiImage from "@/assets/images/logo.png";
import grainImage from "@/assets/images/grain.jpg";
import { TapeSection } from "./Tape";

import { motion } from "framer-motion";

export const HeroSection = () => {
  return (
    <div className="relative z-0 overflow-x-clip">
      {/* Background */}
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="absolute -z-20 inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_5%,black_90%,transparent)]"
      >
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
        <div className="size-[1680px] hero-ring "></div>
      </motion.div>

      {/* Hero */}
      <div className="container pt-32 md:pt-40 text-gray-900">
        <motion.div
          className="text-center flex flex-col items-center"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
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
              Software Engineering graduate (GPA 3.91) with 3 industry
              internships, delivering real-world systems that reduce
              inefficiencies and improve performance. Experienced in building
              scalable applications using React, Next.js, Node.js, and Golang,
              focusing on system design, backend architecture, and clean code.
              Ready to solve real problems and create measurable impact through
              software.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Hero CTA */}
      <div className="text-center -mt-28 sm:-mt-32 md:-mt-40">
        <motion.div
          className="relative "
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6, stiffness: 100 }}
        >
          <div className="bg-gray-100 border w-max border-gray-300 p-1.5 rounded-full flex justify-center items-center gap-3 absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-10 sm:translate-y-1/2 md:translate-y-32 z-20">
            <a
              href="https://github.com/Yogihafidh?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="w-fit font-semibold border-2 border-gray-500 hover:bg-gray-200 px-3 py-1 md:px-6 md:py-3 rounded-full  cursor-pointer">
                Explore My Work
              </button>
            </a>
            <a
              href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="w-fit border border-gray-500 bg-gray-950 hover:bg-gray-700 text-white px-3 py-1 md:px-6 md:py-3 rounded-full cursor-pointer">
                Hire Me!
              </button>
            </a>
          </div>

          <Image
            src={YogiImage}
            alt="Yogi Photo"
            className="scale-75 -mb-10 sm:-mb-20 md:-mb-28 lg:-mb-28 mx-auto"
          />
        </motion.div>

        <div className="-mt-8 sm:-mt-10 md:-mt-14 lg:-mt-16 relative z-10">
          <TapeSection straight compact />
        </div>
      </div>
    </div>
  );
};
