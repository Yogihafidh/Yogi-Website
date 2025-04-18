"use client";
import Image from "next/image";

import { Card } from "./Card";
import { TextExpander } from "./TextExpander";

import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import { IoMdClose } from "react-icons/io";
import { FaGithub } from "react-icons/fa";

import { useState } from "react";
import { Overlay } from "./Overlay";
import { createPortal } from "react-dom";

type Project = {
  company: string;
  year: string;
  title: string;
  description: string;
  results: { title: string }[];
  link: { title: string; url: string; github: string }[];
  image: any;
  techStack: string[];
};

type ProjectCardProps = {
  project: Project;
};

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Card
      key={project.title}
      className="px-8 pt-8 pb-0 mb-20 md:px-10 md:pt-12 lg:pt-16 lg:px-20"
    >
      <div className="lg:grid lg:grid-cols-2 lg:gap-16">
        <div className="lg:pb-16">
          <h3 className="mb-4 md:mb-5 font-serif text-3xl md:text-4xl">
            {project.title}
          </h3>
          <p className="font-bold uppercase tracking-widest text-gray-950/50 mb-4">
            {project.company}
          </p>
          <p className="mb-8">
            <TextExpander>{project.description}</TextExpander>
          </p>

          <button
            onClick={() => setIsOpen(true)}
            className="mb-6 lg:mb-0 bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 h-12 w-full md:w-auto px-8 rounded-full font-semibold inline-flex gap-2 items-center justify-center"
          >
            See more details!
          </button>
        </div>

        <div className="relative">
          <Image
            src={project.image}
            alt={project.title}
            className="-mb-4 md:mb-0 lg:absolute lg:w-auto lg:h-full lg:max-w-none"
          />
        </div>
      </div>

      {isOpen &&
        createPortal(
          <>
            <Overlay setIsOpen={setIsOpen} />
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-3xl shadow-lg p-8 md:p-16  transition-all z-[90] w-3/4 h-3/4  overflow-x-auto">
              <IoMdClose
                onClick={() => setIsOpen(false)}
                className="absolute top-5 right-5 size-8 md:top-10 md:right-10 md:size-10 cursor-pointer hover:text-red-500"
              />
              <div className="font-bold uppercase tracking-widest inline-flex flex-col md:flex-row gap-2 mb-4 md:mb-5">
                <span>{project.company}</span>
                <span>&bull;</span>
                <span>{project.year}</span>
              </div>
              <h3 className="mb-4 md:mb-5 font-serif text-3xl md:text-4xl">
                {project.title}
              </h3>
              <p className="mb-4">
                <TextExpander>{project.description}</TextExpander>
              </p>
              <p className="inline-flex gap-4 flex-wrap mb-16">
                {project.techStack.map((stack) => (
                  <span
                    className="px-2 py-1 bg-gray-100 border border-gray-200 rounded-2xl text-xs md:text-sm"
                    key={stack}
                  >
                    {stack}
                  </span>
                ))}
              </p>
              <hr className="border-t-2 border-gray-900/50 mb-4 md:mb-5" />
              <ul className="flex flex-col justify-center gap-4 mb-8 md:mb-10">
                {project.results.map((result) => (
                  <li
                    key={result.title}
                    className="flex gap-2 text-sm md:text-base text-gray-950/80"
                  >
                    <CheckCircleIcon className="size-5 md:size-6 lg:size-7 shrink-0" />
                    <span className="">{result.title}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col md:flex-row gap-8 md:gap-16">
                {project.link.map((link) => (
                  <div key={link.title}>
                    <p className=" mb-4">{link.title}</p>
                    <div className="flex gap-4 items-center ">
                      <div>
                        <a href={link.url}>
                          <button className=" bg-gray-800 text-white  w-full md:w-auto px-8 py-2 rounded-xl font-semibold inline-flex gap-2 items-center justify-center">
                            <span>Visit Live Site</span>
                            <ArrowUpRightIcon className="size-5 shrink-0" />
                          </button>
                        </a>
                      </div>
                      <div className="size-10 rounded-full border-2 border-gray-500 flex items-center justify-center">
                        <a href={link.github}>
                          <FaGithub className="size-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>,
          document.body
        )}
    </Card>
  );
};
