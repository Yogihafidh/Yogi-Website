"use client";

import Image, { StaticImageData } from "next/image";
import { createPortal } from "react-dom";
import { useEffect, useState } from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { IoSchoolOutline } from "react-icons/io5";

import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import dokumentasiCazh1 from "@/assets/images/Dokumentasi_CAZH_1.jpg";
import dokumentasiCazh2 from "@/assets/images/Dokumentasi_CAZH_2.jpg";
import dokumentasiHmse1 from "@/assets/images/Dokumentasi_HMSE_1.jpg";
import dokumentasiTelkom1 from "@/assets/images/Dokumentasi_Telkom_1.jpg";
import dokumentasiTelkom2 from "@/assets/images/Dokumentasi_Telkom_2.jpg";
import dokumentasiTelkom3 from "@/assets/images/Dokumentasi_Telkom_3.jpg";
import dokumentasiTelkom4 from "@/assets/images/Dokumentasi_Telkom_4.jpg";
import paklaringBinar from "@/assets/images/Paklaring_Binar Academy.jpg";
import paklaringCazh from "@/assets/images/Paklaring_PT CAZH Teknologi Inovasi.png";
import paklaringTelkom from "@/assets/images/Paklaring_PT Telekomunikasi Indonesia.png";
import { ImageLightbox } from "@/components/ImageLightbox";
import { Overlay } from "@/components/Overlay";
import { SectionHeader } from "@/components/SeactionHeader";

type ExperienceGalleryItem = {
  label: string;
  caption?: string;
  src: StaticImageData | string;
};

type ExperienceDetail = {
  overview: string;
  role: string;
  challenges: string;
  process: string;
  impact: string[];
  skills?: string[];
  paklaring: ExperienceGalleryItem[];
  documentation: ExperienceGalleryItem[];
};

const experiencesList: Array<{
  name: string;
  position: string;
  period: string;
  text: string;
  contributions?: string[];
  techStack: string[];
  Image: string;
  detail: ExperienceDetail;
}> = [
  {
    name: "Telkom Indonesia",
    position: "Web Developer Intern",
    period: "Aug 2025 – Dec 2025 · On-site Bandung",
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
    detail: {
      overview:
        "During my internship at Telkom Indonesia, I contributed to the development and modernization of two internal platforms within the Netmonk ecosystem: an Analytics Dashboard and a Chatbot Builder Platform. These systems were used internally to support monitoring, administration, and workflow automation activities for operational teams.",
      role: "As a Frontend Developer Intern, I was responsible for implementing frontend features, improving system usability, modernizing application architecture, and enhancing platform security. My work focused on building scalable frontend solutions that could support multiple user roles while maintaining a smooth user experience.",
      challenges:
        "One of the main challenges was building a frontend architecture that could dynamically adapt to different user roles and permissions without requiring frequent UI modifications. Another challenge was improving the usability of a complex chatbot workflow editor for non-technical users while simultaneously modernizing legacy features built with older technologies.",
      process:
        "To improve scalability and maintainability, I designed an Access Control List (ACL)-based dynamic sidebar architecture powered by permission-driven rendering. This approach allowed menus and navigation structures to be generated dynamically based on user permissions, reducing hardcoded logic and simplifying future role management.\n\nOn the Chatbot Builder platform, I contributed to migrating core modules from Nuxt 2 to Nuxt 3, improving maintainability, performance, and long-term scalability. I also redesigned the dialog flow editor using Vue Flow, transforming it into a visual node-based interface inspired by workflow automation tools such as n8n, making it significantly easier for non-technical users to create and manage workflows.\n\nAdditionally, I implemented Multi-Factor Authentication (MFA) using OTP verification and optimized frontend performance through lazy loading and pagination strategies.",
      impact: [
        "Improved frontend scalability through dynamic role-based access control architecture",
        "Increased platform security by implementing Multi-Factor Authentication (MFA)",
        "Enhanced maintainability through migration from Nuxt 2 to Nuxt 3",
        "Improved usability by transforming complex workflows into a visual node-based experience",
        "Optimized application performance through lazy loading and pagination techniques",
      ],
      paklaring: [
        {
          label: "Paklaring Telkom Indonesia",
          src: paklaringTelkom,
        },
      ],
      documentation: [
        { label: "Dokumentasi Telkom 1", src: dokumentasiTelkom1 },
        { label: "Dokumentasi Telkom 2", src: dokumentasiTelkom2 },
        { label: "Dokumentasi Telkom 3", src: dokumentasiTelkom3 },
        { label: "Dokumentasi Telkom 4", src: dokumentasiTelkom4 },
      ],
    },
  },

  {
    name: "PT Cazh Teknologi Inovasi",
    position: "Fullstack Developer Intern",
    period: "Jul 2025 – Sep 2025 · On-site Purwokerto",
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
    detail: {
      overview:
        "During my internship at PT Cazh Teknologi Inovasi, I developed a Vehicle Rental Management Platform for PT Arbitrans. The project aimed to replace manual booking workflows based on WhatsApp communication and handwritten records with a centralized digital platform that improved operational visibility and booking efficiency.",
      role: "As a Fullstack Developer Intern, I was responsible for designing and developing both customer-facing and admin-facing applications. My work included frontend development, backend integration, workflow design, database management, and technical documentation.",
      challenges:
        "The existing rental process relied heavily on manual coordination through WhatsApp and paper-based record keeping, making booking management difficult and increasing the risk of inconsistent data. Another challenge was delivering a functional MVP within a limited internship timeline while maintaining data consistency between booking requests, vehicle availability, and reservation status updates.",
      process:
        "To accelerate development and reduce infrastructure complexity, I proposed using Supabase instead of the initially planned Laravel-based backend architecture. Supabase provided integrated authentication, PostgreSQL database management, storage, and API services, allowing faster implementation and simplified backend operations.\n\nI designed a dual-application architecture consisting of a customer booking platform and an internal admin dashboard. Structured booking workflows were implemented to maintain consistency across reservations, vehicle availability, and booking status changes.\n\nTo improve frontend performance and user experience, I utilized Next.js features such as Server-Side Rendering (SSR), optimized data fetching, and responsive interface design. React Query was used to manage asynchronous state and improve data synchronization across the application.",
      impact: [
        "Transformed manual booking workflows into a centralized digital platform",
        "Improved operational visibility through a dedicated admin dashboard",
        "Centralized vehicle, booking, and customer data management",
        "Reduced dependency on manual coordination between customers and staff",
        "Improved booking efficiency while maintaining alignment with existing business processes",
      ],
      paklaring: [
        {
          label: "Paklaring PT Cazh Teknologi Inovasi",
          src: paklaringCazh,
        },
      ],
      documentation: [
        { label: "Dokumentasi Cazh 1", src: dokumentasiCazh1 },
        { label: "Dokumentasi Cazh 2", src: dokumentasiCazh2 },
      ],
    },
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
    detail: {
      overview:
        "As part of the Binar Academy MSIB Program, I contributed to the development of backend services for an Airline Booking System. The project focused on building reliable APIs, designing database structures, and supporting frontend-backend integration for booking-related workflows.",
      role: "As a Backend Developer Student, I was responsible for designing API endpoints, implementing backend services, creating database schemas, and collaborating with frontend developers to ensure seamless integration.",
      challenges:
        "Building a booking platform requires structured data management, transactional consistency, and clear communication between frontend and backend systems. One of the key challenges was designing APIs and database structures that could support future scalability while remaining easy to integrate.",
      process:
        "I designed and implemented RESTful APIs using Express.js and PostgreSQL, following structured API contracts and consistent validation patterns. Database schemas were designed to support booking workflows and transactional operations while maintaining data integrity.\n\nTo improve collaboration and maintainability, I documented API endpoints using Swagger/OpenAPI and worked closely with frontend developers to align requirements, payload structures, and integration flows.",
      impact: [
        "Delivered reliable backend services for airline booking workflows",
        "Improved frontend-backend collaboration through structured API documentation",
        "Established scalable API and database foundations for future development",
        "Improved maintainability through consistent API design and documentation practices",
      ],
      paklaring: [
        {
          label: "Paklaring Binar Academy",
          src: paklaringBinar,
        },
      ],
      documentation: [],
    },
  },

  {
    name: "HMSE Telkom University Purwokerto",
    position: "Treasurer",
    period: "2023 – 2024 · On-site Purwokerto",
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
    detail: {
      overview:
        "During my time as Treasurer of the Software Engineering Student Association (HMSE), I was responsible for managing organizational finances, budgeting, and financial reporting. The role required coordination with multiple departments to ensure transparent and accountable financial operations.",
      role: "I managed budgeting, reimbursement processes, financial documentation, and monthly reporting activities. I also supported financial planning for organizational programs and ensured all financial records were properly documented.",
      challenges:
        "One of the main challenges was maintaining accurate financial records across multiple programs while ensuring transparency and accountability for all stakeholders.",
      process:
        "To improve consistency and reduce reporting errors, I developed structured Excel-based financial tracking and reporting templates. These templates standardized budget planning, expense tracking, and accountability reporting across different organizational activities.",
      impact: [
        "Managed financial operations for 5 organizational programs",
        "Improved transparency through structured financial reporting",
        "Reduced reporting inconsistencies using standardized tracking templates",
        "Maintained organized and auditable financial records",
        "Supported effective budget allocation and monitoring",
      ],
      skills: [
        "Financial Management",
        "Budget Planning",
        "Stakeholder Communication",
        "Reporting",
        "Microsoft Excel",
        "Leadership",
        "Time Management",
      ],
      paklaring: [],
      documentation: [{ label: "Dokumentasi HMSE", src: dokumentasiHmse1 }],
    },
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
  const [activeExperience, setActiveExperience] = useState<
    (typeof experiencesList)[number] | null
  >(null);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedImage, setSelectedImage] =
    useState<ExperienceGalleryItem | null>(null);

  useEffect(() => {
    if (activeExperience) {
      const timeout = setTimeout(() => setIsVisible(true), 20);
      return () => clearTimeout(timeout);
    }

    setIsVisible(false);
  }, [activeExperience]);
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
                <div className="mb-4">
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
                <button
                  onClick={() => setActiveExperience(experience)}
                  className="inline-flex items-center gap-2 rounded-full border border-gray-900 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-gray-900 transition hover:-translate-y-0.5 hover:bg-gray-900 hover:text-white"
                >
                  View Experience →
                </button>
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

      {activeExperience &&
        createPortal(
          <>
            <Overlay setIsOpen={() => setActiveExperience(null)} />

            <div
              className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-3xl shadow-lg p-8 md:p-16 transition-all duration-300 transform z-[90] w-11/12 max-w-4xl max-h-[90vh] overflow-y-auto ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
            >
              <IoMdClose
                onClick={() => setActiveExperience(null)}
                className="absolute top-5 right-5 size-8 md:top-10 md:right-10 md:size-10 cursor-pointer hover:text-red-500"
              />

              <div className="font-bold uppercase tracking-widest inline-flex flex-col md:flex-row gap-2 mb-4 md:mb-5 text-sm text-gray-700">
                <span>{activeExperience.name}</span>
                <span>•</span>
                <span>{activeExperience.position}</span>
              </div>

              <h3 className="mb-4 md:mb-5 font-serif text-3xl md:text-4xl">
                {activeExperience.name}
              </h3>

              <div className="mb-6">
                <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
                  Overview
                </h4>
                <p className="mt-2 text-gray-700 whitespace-pre-line">
                  {activeExperience.detail.overview}
                </p>
              </div>

              <div className="mb-6">
                <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
                  Role & Responsibilities
                </h4>
                <p className="mt-2 text-gray-700 whitespace-pre-line">
                  {activeExperience.detail.role}
                </p>
              </div>

              <div className="mb-6">
                <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
                  Challenges
                </h4>
                <p className="mt-2 text-gray-700 whitespace-pre-line">
                  {activeExperience.detail.challenges}
                </p>
              </div>

              <div className="mb-6">
                <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
                  Process & Decisions
                </h4>
                <p className="mt-2 text-gray-700 whitespace-pre-line">
                  {activeExperience.detail.process}
                </p>
              </div>

              <div className="mb-6">
                <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
                  Impact
                </h4>
                <ul className="mt-3 grid gap-3">
                  {activeExperience.detail.impact.map((imp) => (
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

              {activeExperience.detail.skills &&
                activeExperience.detail.skills.length > 0 && (
                  <div className="mb-6">
                    <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
                      Skills Developed
                    </h4>
                    <p className="inline-flex gap-4 flex-wrap mt-3">
                      {activeExperience.detail.skills.map((skill) => (
                        <span
                          className="px-2 py-1 bg-gray-100 border border-gray-200 rounded-2xl text-xs md:text-sm"
                          key={skill}
                        >
                          {skill}
                        </span>
                      ))}
                    </p>
                  </div>
                )}

              <div className="mb-6">
                <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
                  Tech Stack
                </h4>
                <p className="inline-flex gap-4 flex-wrap mt-3">
                  {activeExperience.techStack.map((stack) => (
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
                  Paklaring
                </h4>
                {activeExperience.detail.paklaring.length > 0 ? (
                  <div className="mt-4 grid gap-4 md:grid-cols-2">
                    {activeExperience.detail.paklaring.map((item) => (
                      <button
                        key={item.label}
                        className="text-left cursor-pointer"
                        onClick={() => setSelectedImage(item)}
                        aria-label={`View ${item.label}`}
                      >
                        <div className="relative w-full aspect-[16/10] overflow-hidden rounded-3xl bg-gray-100">
                          <Image
                            src={item.src}
                            alt={item.label}
                            className="w-full h-full object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                        </div>
                        <p className="mt-2 text-sm font-semibold text-gray-700">
                          {item.label}
                        </p>
                      </button>
                    ))}
                  </div>
                ) : (
                  <p className="mt-2 text-sm text-gray-600">
                    Paklaring belum tersedia.
                  </p>
                )}
              </div>

              <div className="mb-2">
                <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
                  Dokumentasi
                </h4>
                {activeExperience.detail.documentation.length > 0 ? (
                  <div className="mt-4 grid gap-4 md:grid-cols-2">
                    {activeExperience.detail.documentation.map((item) => (
                      <button
                        key={item.label}
                        className="text-left cursor-pointer"
                        onClick={() => setSelectedImage(item)}
                        aria-label={`View ${item.label}`}
                      >
                        <div className="relative w-full aspect-[16/10] overflow-hidden rounded-3xl bg-gray-100">
                          <Image
                            src={item.src}
                            alt={item.label}
                            className="w-full h-full object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                        </div>
                        <p className="mt-2 text-sm font-semibold text-gray-700">
                          {item.label}
                        </p>
                      </button>
                    ))}
                  </div>
                ) : (
                  <p className="mt-2 text-sm text-gray-600">
                    Dokumentasi belum tersedia.
                  </p>
                )}
              </div>
            </div>
          </>,
          document.body,
        )}

      <ImageLightbox
        item={selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </div>
  );
};
