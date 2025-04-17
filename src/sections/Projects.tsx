import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import { SectionHeader } from "@/components/SeactionHeader";
import { Card } from "@/components/Card";
import { TextExpander } from "@/components/TextExpander";

const portfolioProjects = [
  {
    company: "Rumah Angsa Glamping",
    description:
      "Rumah Angsa Glamping Management System is a digital solution built for Rumah Angsa, a glamping destination located in the scenic area of Gucci, Bumijawa, on the slopes of Mount Slamet. The system consists of two integrated applications: a guest-facing app that allows users to browse available cabins and make reservations easily, and an admin dashboard that enables the glamping team to manage bookings, update cabin descriptions, maintain guest data, and monitor performance through a visually appealing interface. This project was developed as part of a Software Construction course, aiming to enhance both the guest experience and operational efficiency for Rumah Angsa Glamping.",
    year: "2025",
    title: "Glamping Booking System",
    results: [
      {
        title:
          "Designed and developed the app system as a Full-Stack Developer",
      },
      {
        title:
          "Implemented Supabase for authentication, data storage, and backend management",
      },
      {
        title:
          "Built an admin dashboard using React.js to manage glamping bookings (CRUD)",
      },
      {
        title:
          "Developed the user-facing frontend with Next.js for browsing and making reservations",
      },
      {
        title: "Integrated frontend and backend using APIs and Supabase SDK",
      },
      {
        title: "Applied a responsive and user-friendly interface design",
      },
      {
        title:
          "Conducted functionality testing to ensure system stability and performance",
      },
    ],
    link: "https://youtu.be/7hi5zwO75yc",
    image: lightSaasLandingPage,
  },
  {
    company: "Koprasi KSP Cihonje",
    year: "2023",
    title: "Koprasi System for admin and User",
    description:
      "KSP Website is a financial transaction recording platform designed for members, staff, cashiers, and cooperative leaders. The system aims to improve transparency and streamline cooperative financial activities, allowing easy management of financial transactions and user data. The platform includes an admin interface for managing transactions and a user-facing system for cooperative members. This project was developed as part of a Website Programming course, focusing on enhancing both financial management and organizational efficiency within the cooperative.",
    results: [
      {
        title:
          "Created the Software Requirements Specification (SRS) document to outline detailed system functionality.",
      },
      {
        title:
          "Developed CRUD features for managing user and transaction data.",
      },
      {
        title:
          "Built the frontend interface using HTML, CSS, and JavaScript, based on UI designs created in Figma.",
      },
      { title: "Designed and implemented the MySQL database structure." },
      {
        title:
          "Created an Entity Relationship Diagram (ERD) to visualize and organize the database schema.",
      },
      { title: "Ensured cross-device responsiveness using media queries." },
    ],
    link: "https://youtu.be/4k7IdSLxh6w",
    image: darkSaasLandingPage,
  },
  {
    company: "Forkify Apps",
    year: "2022",
    title: "Recipes Web Apps (Personal Project)",
    description:
      "Forkify is a JavaScript-based web application that allows users to search, view, bookmark, and upload recipes using the Forkify API. The app is built with a focus on dynamic data handling, user customization, and clean architecture, following the MVC design pattern. This project was developed as part of a Javascript Course from Jonas.io Academy.",
    results: [
      {
        title:
          "Developed the entire web application using Vanilla JavaScript and applied the MVC design pattern for modular, maintainable code.",
      },
      {
        title:
          "Integrated the Forkify API to enable dynamic recipe searching and detailed viewing.",
      },
      {
        title:
          "Built the frontend interface using HTML, CSS, and JavaScript, based on UI designs created in Figma.",
      },
      {
        title:
          "Built features like portion adjustment (using the Fracty library), bookmarking (using local storage), and recipe upload functionality, allowing users to adjust servings, save favorite recipes, and submit their own.",
      },
      {
        title:
          "Applied Object-Oriented Programming (OOP) principles to structure the app's interface and logic effectively.",
      },
    ],
    link: "https://youtu.be/Z7I5uSRHMHg",
    image: aiStartupLandingPage,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="container text-center pt-28 md:pt-40">
      <SectionHeader
        eyebrow="Real-world Result"
        title="Featured Project"
        description="See what I have been working on as a software engineer"
      />

      <div className="flex flex-col text-left">
        {portfolioProjects.map((project) => (
          <Card
            key={project.title}
            className="px-8 pt-8 pb-0 mb-20 md:px-10 md:pt-12 lg:pt-16 lg:px-20"
          >
            <div className="lg:grid lg:grid-cols-2 lg:gap-16">
              <div className="lg:pb-16">
                <h3 className="mb-4 md:mb-5 font-serif text-3xl md:text-4xl">
                  {project.title}
                </h3>
                <p className="mb-8">
                  <TextExpander>{project.description}</TextExpander>
                </p>

                <button className="mb-6 lg:mb-0 bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 h-12 w-full md:w-auto px-8 rounded-full font-semibold inline-flex gap-2 items-center justify-center">
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

            <div className="lg:pb-16 hidden">
              <div className="font-bold uppercase tracking-widest inline-flex gap-2 mb-2 md:mb-5">
                <span>{project.company}</span>
                <span>&bull;</span>
                <span>{project.year}</span>
              </div>
              <h3 className="mb-4 md:mb-5 font-serif text-3xl md:text-4xl">
                {project.title}
              </h3>
              <hr className="border-t-2 border-gray-900/50 mb-4 md:mb-5" />
              <ul className="flex flex-col justify-center gap-4 mb-8 md:mb-10">
                {project.results.map((result) => (
                  <li
                    key={result.title}
                    className="flex gap-2 text-sm md:text-base text-gray-950/80"
                  >
                    <CheckCircleIcon className="size-5 md:size-6 lg:size-7" />
                    <span>{result.title}</span>
                  </li>
                ))}
              </ul>
              <div className="md:flex gap-6 items-center">
                <a href={project.link}>
                  <button className="mb-6 lg:mb-0 bg-gray-800 text-white h-12 lg:h-16 w-full md:w-auto px-8 rounded-xl font-semibold inline-flex gap-2 items-center justify-center">
                    <span>Visit Live Site</span>
                    <ArrowUpRightIcon className="size-5" />
                  </button>
                </a>
                <a href={project.link}>
                  <button className="mb-8 lg:mb-0 md:mb-12 text-gray-800 border border-gray-800 hover:bg-gray-200 h-12 lg:h-16 w-full md:w-auto px-4 rounded-xl font-semibold inline-flex gap-2 items-center justify-center">
                    <span>Github Repositori</span>
                  </button>
                </a>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};
