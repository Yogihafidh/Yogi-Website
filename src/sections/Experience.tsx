"use client";

import { SectionHeader } from "@/components/SeactionHeader";
import { FaRegCalendarAlt } from "react-icons/fa";
import { CgWorkAlt } from "react-icons/cg";
import { IoSchoolOutline } from "react-icons/io5";
import { useState } from "react";

const experiencesList = [
  {
    name: "Telkom Indonesia",
    position: "Frontend Developer Intern",
    period: "Aug 2025 – Dec 2025 · On-site",
    text: "Contributed to the development and modernization of an internal chatbot platform used by 50+ administrative users, focusing on scalability, performance, and usability.",

    contributions: [
      "Implemented ACL-based dynamic sidebar for scalable role-based access across 50+ users",
      "Led migration from Nuxt 2 to Nuxt 3 to improve performance and maintainability",
      "Developed a visual dialog flow editor using Vue Flow for non-technical users",
      "Implemented Multi-Factor Authentication (MFA) and secure logout mechanisms",
      "Optimized performance using lazy loading and pagination strategies",
    ],

    techStack: ["Vue.js", "Nuxt 3", "TypeScript", "Tailwind CSS", "Vue Flow"],
    Image: "",
  },

  {
    name: "PT Cazh Teknologi Inovasi",
    position: "Fullstack Developer Intern",
    period: "Jul 2025 – Sep 2025 · On-site",
    text: "Developed a vehicle rental management platform with a dual-interface system (admin dashboard and user booking application), focusing on usability and operational efficiency.",

    contributions: [
      "Designed and implemented a full vehicle rental system with admin and user interfaces",
      "Built responsive frontend using Next.js and React for improved user experience",
      "Implemented backend services using Supabase with centralized data management",
      "Integrated booking flow with WhatsApp to align with existing business processes",
      "Created system and API documentation to support development and collaboration",
    ],

    techStack: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Supabase",
      "PostgreSQL",
      "TypeScript",
    ],
    Image: "",
  },

  {
    name: "Binar Academy",
    position: "Backend Developer Student (MSIB)",
    period: "Sep 2024 – Jan 2025 · Remote",
    text: "Developed backend services for an airline booking system, focusing on RESTful API design, database structure, and system reliability.",

    contributions: [
      "Designed and implemented RESTful APIs for airline booking workflows",
      "Built PostgreSQL database schema supporting transactional operations",
      "Documented APIs using Swagger/OpenAPI for better collaboration",
      "Implemented authentication and authorization mechanisms",
      "Collaborated with frontend team to define API contracts",
    ],

    techStack: ["Node.js", "Express.js", "PostgreSQL", "REST API", "JWT"],
    Image: "",
  },

  {
    name: "HMSE Telkom University Purwokerto",
    position: "Treasurer",
    period: "2023 – 2024 · On-site",
    text: "Managed financial planning and reporting for a student organization with 50+ members, ensuring transparency and structured financial tracking.",

    contributions: [
      "Managed budgeting and financial planning for multiple programs",
      "Developed Excel-based financial tracking system to improve reporting accuracy",
      "Prepared monthly financial reports for stakeholders",
      "Coordinated financial operations across organizational activities",
      "Maintained structured financial documentation for accountability",
    ],

    techStack: [
      "Financial Management",
      "Budget Planning",
      "MS Excel",
      "Reporting",
    ],
    Image: "",
  },
];

const EducationList = [
  {
    school: "Telkom University",
    position: "S1 Software Engineering",
    year: "Oct 2022 – Jul 2026",
    gpa: "3.91",
    track: "Web Development",
    activities: "Software Engineering Student Association (HMSE) as Treasurer",
    description:
      "Graduated with a strong foundation in software engineering, focusing on web development, system design, and backend architecture.",

    relevantCourses: [
      "Software Engineering",
      "Software Requirements Engineering",
      "Software Design and Architecture",
      "Software Construction",
      "Software Testing",
      "Software Quality Assurance",
      "Database Systems",
      "Data Structures",
      "Operating Systems",
      "Web Development",
      "User Experience (UX)",
      "Design Thinking",
      "Interaction Design",
    ],
  },

  {
    school: "SMA Negeri 1 Bawang",
    position: "MIPA",
    year: "Jul 2018 – May 2021",
    activities: "Majelis Perwakilan Kelas (MPK)",
  },
];

export const ExperiencesSection = () => {
  const [activeTab, setActiveTab] = useState("experience");
  return (
    <div id="experience" className="container text-center section-rhythm">
      <SectionHeader
        title="Experience"
        eyebrow="Professional Proof"
        description="Professional track record and education that validate execution quality"
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
                <div className="mb-2">
                  <h4 className="text-lg font-serif">{experience.position}</h4>
                  <p className="text-sm font-semibold text-gray-800/70 mb-1">
                    {experience.name} · {experience.period}
                  </p>
                </div>
                <p className="text-sm md:text-base mb-4 leading-relaxed text-gray-700">
                  {experience.text}
                </p>
                {experience.contributions && (
                  <div className="mb-4">
                    <p className="text-xs font-semibold uppercase tracking-widest text-gray-600 mb-3">
                      Key Contributions
                    </p>
                    <ul className="space-y-2">
                      {experience.contributions.map((contrib) => (
                        <li
                          key={contrib}
                          className="text-sm text-gray-700 flex gap-3"
                        >
                          <span className="text-emerald-500 font-bold">•</span>
                          <span>{contrib}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-gray-600 mb-2">
                    Tech Stack
                  </p>
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
            </div>
          ))}
        </div>
      )}

      {activeTab === "education" && (
        <div className="flex flex-col text-left ">
          {EducationList.map((education) => (
            <div key={education.school} className="flex gap-4 md:gap-8">
              <div className=" flex flex-col items-center translate-y-2 ">
                <div className="size-3 md:size-4 rounded-full bg-gray-400/50 relative">
                  <div className="bg-gray-400 absolute inset-0 animate-ping-large duration-1000 rounded-full"></div>
                </div>
                <span className="border-l border-gray-200 h-full"></span>
              </div>

              <div className="flex-1 pb-16">
                <h4 className="text-lg font-serif">{education.school}</h4>
                <p className="text-sm font-semibold text-gray-800/70 mb-2">
                  {education.position}
                </p>
                <p className="text-sm flex gap-2 items-center mb-3">
                  <FaRegCalendarAlt className="text-gray-800/70" />
                  <span className="text-gray-800/70">{education.year}</span>
                </p>

                {education.gpa && (
                  <div className="mb-3">
                    <p className="text-xs font-semibold uppercase tracking-widest text-gray-600 mb-1">
                      GPA
                    </p>
                    <p className="text-sm text-gray-700">{education.gpa}</p>
                  </div>
                )}

                {education.track && (
                  <div className="mb-3">
                    <p className="text-xs font-semibold uppercase tracking-widest text-gray-600 mb-1">
                      Discipline Track
                    </p>
                    <p className="text-sm text-gray-700">{education.track}</p>
                  </div>
                )}

                {education.activities && (
                  <div className="mb-3">
                    <p className="text-xs font-semibold uppercase tracking-widest text-gray-600 mb-1">
                      Activities & Organizations
                    </p>
                    <p className="text-sm text-gray-700">
                      {education.activities}
                    </p>
                  </div>
                )}

                {education.relevantCourses && (
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-gray-600 mb-2">
                      Relevant Courses
                    </p>
                    <div className="inline-flex gap-2 flex-wrap">
                      {education.relevantCourses.map((skill) => (
                        <span
                          className="px-2 py-1 bg-gray-100 border border-gray-200 rounded-2xl text-xs"
                          key={skill}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
