"use client";

import { SectionHeader } from "@/components/SeactionHeader";
import { FaRegCalendarAlt } from "react-icons/fa";
import { CgWorkAlt } from "react-icons/cg";
import { IoSchoolOutline } from "react-icons/io5";
import { useState } from "react";

const experiencesList = [
  {
    name: "KSP Cihonje Koprasi System Project",
    position: "Full-Stack Developer",
    text: "In this 4th semester project, I was responsible for designing and developing the system as a whole, starting from creating a Software Requirements Specification (SRS) document to define system requirements, to designing and implementing a database using MySQL and creating an Entity Relationship Diagram (ERD). I also developed the user interface based on Figma's design using HTML, CSS, and JavaScript, and implemented CRUD features for user and transaction data. In addition, I ensured that the application is responsive and compatible across devices through the use of media queries.",
    techStack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    Image: "",
  },
  {
    name: "Rumah Angsa booking system",
    position: "Full-Stack Developer",
    text: "In this Software Construction course project, I was responsible as a full-stack developer, building application systems for both users and admins. I used Supabase for the backend, React.js for the admin dashboard to manage glamping bookings, and Next.js for the user-facing frontend where users can make reservations.",
    techStack: [
      "React.JS",
      "Next.JS",
      "Tailwind CSS",
      "React Router",
      "TanStack Query",
      "Supabase",
    ],
    Image: "",
  },
  {
    name: "Airfly - Airline Booking System",
    position: "Backend Developer",
    text: "In this Binar Academy Independent Study project, I was responsible as a backend developer, building the backend application for the airline module using Express.js and PostgreSQL as the tech stack.",
    techStack: ["Node.js", "Express.js", "PostgreSQL"],
    Image: "",
  },
];

const EducationList = [
  {
    school: "SMAN 1 Bawang",
    position: "MIPA",
    year: "2018 - 2021",
  },
  {
    school: "Telkom University",
    position: "S1 Software Engineering",
    year: "2022 - 2026",
  },
];

export const ExperiencesSection = () => {
  const [activeTab, setActiveTab] = useState("experience");
  return (
    <div className="container text-center py-12 md:py-24 lg:py-32 ">
      <SectionHeader
        title="Experience and Education"
        eyebrow="My Personel Journey"
        description="See more about my experience and education"
      />

      <div className="flex gap-8 justify-center mb-16">
        <button
          onClick={() => setActiveTab("education")}
          className={`inline-flex gap-2 items-center font-semibold text-lg ${
            activeTab === "education" ? "text-gray-950" : "text-gray-300"
          }`}
        >
          <IoSchoolOutline className="size-6" />
          <span>Education</span>
        </button>
        <button
          onClick={() => setActiveTab("experience")}
          className={`inline-flex gap-2 items-center font-semibold text-lg ${
            activeTab === "experience" ? "text-gray-950" : "text-gray-300"
          }`}
        >
          <CgWorkAlt className="size-6" />
          <span>Experience</span>
        </button>
      </div>

      {activeTab === "experience" && (
        <div className="flex flex-col text-left ">
          {experiencesList.map((experience) => (
            <div key={experience.name} className="flex gap-4 md:gap-8 ">
              <div className=" flex flex-col items-center translate-y-2 ">
                <div className="size-3 md:size-4 rounded-full bg-gray-400/50 relative">
                  <div className="bg-gray-400 absolute inset-0 animate-ping-large duration-1000 rounded-full"></div>
                </div>
                <span className="border-l border-gray-200 h-full"></span>
              </div>

              <div className="pb-16">
                <h4 className="text-lg font-serif">{experience.name}</h4>
                <p className="text-sm text-gray-800/70 mb-4">
                  {experience.position}
                </p>
                <p className="text-sm md:text-base mb-4">{experience.text}</p>
                <p className="inline-flex gap-4 flex-wrap">
                  {experience.techStack.map((stack) => (
                    <span
                      className="px-2 py-1 bg-gray-100 border border-gray-200 rounded-2xl text-xs md:text-sm"
                      key={stack}
                    >
                      {stack}
                    </span>
                  ))}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === "education" && (
        <div className="flex flex-col text-left ">
          {EducationList.map((education) => (
            <div key={education.school} className="flex gap-4 md:gap-8 ">
              <div className=" flex flex-col items-center translate-y-2 ">
                <div className="size-3 md:size-4 rounded-full bg-gray-400/50 relative">
                  <div className="bg-gray-400 absolute inset-0 animate-ping-large duration-1000 rounded-full"></div>
                </div>
                <span className="border-l border-gray-200 h-full"></span>
              </div>

              <div>
                <h4 className="text-lg font-serif">{education.school}</h4>
                <p className="text-sm text-gray-800/70 mb-2">
                  {education.position}
                </p>
                <p className="text-sm flex gap-2 items-center pb-8">
                  <FaRegCalendarAlt className="text-gray-800/70" />
                  <span className="text-gray-800/70">{education.year}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
