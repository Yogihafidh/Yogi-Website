"use client";
import Image, { StaticImageData } from "next/image";
import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

import { Card } from "./Card";
import { Overlay } from "./Overlay";

import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import { IoMdClose } from "react-icons/io";

export type ProjectGalleryItem = {
  label: string;
  caption: string;
  src: StaticImageData | string;
};

export type Project = {
  title: string;
  organization: string;
  period: string;
  role: string;
  context: string;
  problem?: string;
  approach: string;
  architecture: string;
  features: string[];
  impact: string[];
  keyImpact: string[];
  techStack: string[];
  links: { label: string; url: string }[];
  architectureMedia?: ProjectGalleryItem[];
  uiPreview?: ProjectGalleryItem[];
  media: any[];
};

type ProjectCardProps = {
  project: Project;
  projectIndex: number;
};

export const ProjectCard = ({ project, projectIndex }: ProjectCardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false); // for modal entrance animation
  const [selectedImage, setSelectedImage] = useState<ProjectGalleryItem | null>(
    null,
  );
  const uiPreviewRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      // slight delay to allow portal mount then animate
      const t = setTimeout(() => setIsVisible(true), 20);
      return () => clearTimeout(t);
    } else {
      setIsVisible(false);
    }
  }, [isOpen]);

  const truncate = (text: string, words = 40) =>
    text.split(" ").slice(0, words).join(" ") +
    (text.split(" ").length > words ? "..." : "");

  const scrollUiPreview = (direction: number) => {
    if (!uiPreviewRef.current) return;

    uiPreviewRef.current.scrollBy({
      left: direction * 420,
      behavior: "smooth",
    });
  };

  return (
    <Card
      key={project.title}
      className="px-8 pt-8 pb-0 mb-20 md:px-10 md:pt-12 lg:pt-16 lg:px-20 sticky top-16"
      style={{ top: `calc(64px + ${projectIndex * 60}px)` }}
    >
      <div className="lg:grid lg:grid-cols-2 lg:gap-16">
        <div className="lg:pb-16">
          <h3 className="mb-4 md:mb-5 font-serif text-3xl md:text-4xl">
            {project.title}
          </h3>
          <p className="font-bold uppercase tracking-widest text-gray-950/50 mb-4">
            {project.organization}
          </p>

          <p className="mb-6 text-gray-700">{truncate(project.context, 40)}</p>

          {project.impact && project.impact.length > 0 && (
            <div className="mb-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-600 mb-3">
                Key Impact
              </p>
              <ul className="space-y-2">
                {project.keyImpact.map((imp) => (
                  <li
                    key={imp}
                    className="flex items-start gap-3 text-sm text-gray-700"
                  >
                    <span
                      className="w-2 h-2 bg-gray-400 rounded-full mt-1.5 shrink-0"
                      aria-hidden="true"
                    />
                    <span className="leading-relaxed">{imp}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <button
            onClick={() => setIsOpen(true)}
            className="mb-6 lg:mb-0 bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 h-12 w-full md:w-auto px-8 rounded-full font-semibold inline-flex gap-2 items-center justify-center"
          >
            View Case Study!
          </button>
        </div>

        <div className="relative">
          <Image
            src={project.media[0]}
            alt={project.title}
            className="-mb-4 md:mb-0 lg:absolute lg:w-auto lg:h-full lg:max-w-none"
          />
        </div>
      </div>

      {isOpen &&
        createPortal(
          <>
            <Overlay setIsOpen={setIsOpen} />

            <div
              className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-3xl shadow-lg p-8 md:p-16 transition-all duration-300 transform z-[90] w-3/4 max-w-4xl max-h-[90vh] overflow-y-auto ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
            >
              <IoMdClose
                onClick={() => setIsOpen(false)}
                className="absolute top-5 right-5 size-8 md:top-10 md:right-10 md:size-10 cursor-pointer hover:text-red-500"
              />

              <div className="font-bold uppercase tracking-widest inline-flex flex-col md:flex-row gap-2 mb-4 md:mb-5 text-sm text-gray-700">
                <span>{project.organization}</span>
                <span>•</span>
                <span>{project.period}</span>
                <span>•</span>
                <span>{project.role}</span>
              </div>

              <h3 className="mb-4 md:mb-5 font-serif text-3xl md:text-4xl">
                {project.title}
              </h3>

              {project.impact && project.impact.length > 0 && (
                <div className="mb-6">
                  <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
                    Impact
                  </h4>
                  <ul className="mt-3 grid gap-3">
                    {project.impact.map((imp) => (
                      <li
                        key={imp}
                        className="flex items-start gap-2 text-sm text-emerald-900"
                      >
                        <CheckCircleIcon className="mt-0.5 size-5 shrink-0 text-emerald-600" />
                        <span>{imp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="mb-6">
                <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
                  Problem
                </h4>
                <p className="mt-2 text-gray-700">
                  {project.problem ?? project.context}
                </p>
              </div>

              <div className="mb-6">
                <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
                  Approach
                </h4>
                <p className="mt-2 text-gray-700">{project.approach}</p>
              </div>

              <div className="mb-6">
                <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
                  Architecture
                </h4>
                <p className="mt-2 text-gray-700">{project.architecture}</p>
                {project.architectureMedia &&
                  project.architectureMedia.length > 0 && (
                    <div className="mt-5 space-y-8">
                      {project.architectureMedia.map((item) => (
                        <button
                          key={item.label}
                          className="w-full text-left bg-none border-none p-0 cursor-pointer"
                          onClick={() => setSelectedImage(item)}
                          aria-label={`View ${item.label}`}
                        >
                          <figure className="w-full">
                            <div className="relative w-full aspect-[16/9] overflow-hidden rounded-3xl bg-gray-100 hover:opacity-90 transition-opacity flex items-center justify-center">
                              <Image
                                src={item.src}
                                alt={item.label}
                                className="w-full h-full object-cover"
                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 50vw"
                              />
                            </div>
                            <figcaption className="mt-3">
                              <p className="text-sm font-semibold text-gray-400">
                                {item.label}
                              </p>
                              <p className="mt-1 text-sm leading-relaxed text-gray-600">
                                {item.caption}
                              </p>
                            </figcaption>
                          </figure>
                        </button>
                      ))}
                    </div>
                  )}
              </div>

              <div className="mb-6">
                <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
                  Key Features
                </h4>
                <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                  {project.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2 text-sm text-gray-700"
                    >
                      <CheckCircleIcon className="mt-0.5 size-4 shrink-0 text-gray-400" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {project.uiPreview && project.uiPreview.length > 0 && (
                <div className="mb-6">
                  <div className="flex items-end justify-between gap-4">
                    <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
                      UI Preview
                    </h4>
                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={() => scrollUiPreview(-1)}
                        className="rounded-full border border-gray-300 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-gray-700 transition hover:border-gray-900 hover:text-gray-900"
                      >
                        Prev
                      </button>
                      <button
                        type="button"
                        onClick={() => scrollUiPreview(1)}
                        className="rounded-full border border-gray-300 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-gray-700 transition hover:border-gray-900 hover:text-gray-900"
                      >
                        Next
                      </button>
                    </div>
                  </div>

                  <div
                    ref={uiPreviewRef}
                    className="mt-3 flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2"
                  >
                    {project.uiPreview.map((item) => (
                      <button
                        key={item.label}
                        className="min-w-[85%] sm:min-w-[68%] lg:min-w-[56%] snap-start overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm cursor-pointer hover:shadow-lg transition-shadow text-left p-0"
                        onClick={() => setSelectedImage(item)}
                        aria-label={`View ${item.label}`}
                      >
                        <figure className="m-0">
                          <div className="relative w-full aspect-[16/10] overflow-hidden rounded-3xl bg-gray-100 flex items-center justify-center">
                            <Image
                              src={item.src}
                              alt={item.label}
                              className="w-full h-full object-cover"
                              sizes="(max-width: 768px) 85vw, (max-width: 1024px) 68vw, 56vw"
                            />
                          </div>
                          <figcaption className="p-4">
                            <p className="text-sm font-semibold text-gray-900">
                              {item.label}
                            </p>
                            <p className="mt-1 text-sm leading-relaxed text-gray-600">
                              {item.caption}
                            </p>
                          </figcaption>
                        </figure>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="mb-6">
                <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
                  Tech Stack
                </h4>
                <p className="inline-flex gap-4 flex-wrap mt-3">
                  {project.techStack.map((stack) => (
                    <span
                      className="px-2 py-1 bg-gray-100 border border-gray-200 rounded-2xl text-xs md:text-sm"
                      key={stack}
                    >
                      {stack}
                    </span>
                  ))}
                </p>
              </div>

              <div className="mb-6">
                <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
                  Links
                </h4>
                <div className="flex flex-wrap gap-3 mt-3">
                  {project.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-gray-900 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-gray-900 transition hover:-translate-y-0.5 hover:bg-gray-900 hover:text-white"
                    >
                      <span>{link.label}</span>
                      <ArrowUpRightIcon className="size-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </>,
          document.body,
        )}

      {selectedImage &&
        createPortal(
          <>
            <button
              className="fixed inset-0 bg-black/80 z-[100] flex items-center justify-center p-4 border-none cursor-default"
              onClick={() => setSelectedImage(null)}
              aria-label="Close image"
            >
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(null);
                }}
                className="absolute top-5 right-5 size-10 flex items-center justify-center bg-white rounded-full hover:bg-gray-100 transition z-10"
                aria-label="Close image"
              >
                <IoMdClose className="size-6 text-gray-900" />
              </button>
              <div className="w-full h-auto max-h-[75vh] flex items-center justify-center pointer-events-none">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.label}
                  width={1200}
                  height={800}
                  priority
                  className="w-auto h-auto max-w-full max-h-[75vh] object-contain"
                />
              </div>
            </button>
            <div
              className="fixed bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-black/0 p-6 z-[101] text-white"
              style={{
                maxWidth: "80rem",
                left: "50%",
                transform: "translateX(-50%)",
                width: "calc(100% - 3rem)",
              }}
            >
              <p className="text-lg font-semibold">{selectedImage.label}</p>
              <p className="text-sm text-gray-300 mt-2">
                {selectedImage.caption}
              </p>
            </div>
          </>,
          document.body,
        )}
    </Card>
  );
};
