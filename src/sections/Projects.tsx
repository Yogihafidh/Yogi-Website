import rumahAngsa from "@/assets/images/rumah-angsa.png";
import forkifyApp from "@/assets/images/forkify-app.png";
import koprasiKspCihonje from "@/assets/images/koprasi-KSP.png";
import { SectionHeader } from "@/components/SeactionHeader";
import { ProjectCard } from "@/components/ProjectCard";

const portfolioProjects = [
  {
    company: "Rumah Angsa Glamping",
    description:
      "Rumah Angsa Glamping Management System is a digital solution built for Rumah Angsa, a glamping destination located in the scenic area of Gucci, Bumijawa, on the slopes of Mount Slamet. The system consists of two integrated applications: a guest-facing app that allows users to browse available cabins and make reservations easily, and an admin dashboard that enables the glamping team to manage bookings, update cabin descriptions, maintain guest data, and monitor performance through a visually appealing interface. This project was developed as part of a Software Construction course, aiming to enhance both the guest experience and operational efficiency for Rumah Angsa Glamping.",
    year: "2025",
    title: "Glamping Booking System",
    techStack: [
      "React.JS",
      "Next.JS",
      "Tailwind CSS",
      "React Router",
      "TanStack Query",
      "Supabase",
    ],
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
    link: [
      {
        title: "Rumah Angsa Reservation Website",
        url: "https://rumah-angsa-website-app.vercel.app/",
        github: "https://github.com/Yogihafidh/rumah-angsa-website.git",
      },
      {
        title: "Rumah Angsa Admin Website (Desktop Only)",
        url: "https://the-wild-oasis-yogi.netlify.app/login",
        github: "https://github.com/Yogihafidh/rumah-angsa-admin.git",
      },
    ],
    image: rumahAngsa,
  },
  {
    company: "Koprasi KSP Cihonje",
    year: "2023",
    title: "Koprasi System for admin and User",
    techStack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],

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
    link: [
      {
        title: "Koprasi KSP Admin",
        url: "https://koperasiprimkoppabri.online/Koprasi/logout",
        github: "https://github.com/Yogihafidh/Koperasi-Primkoppabri-.git",
      },
    ],
    image: koprasiKspCihonje,
  },
  {
    company: "Forkify Apps",
    year: "2022",
    title: "Recipes Web Apps (Personal Project)",
    techStack: ["Javascript", "HTML5", "CSS3", "Forkify API"],
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
    link: [
      {
        title: "Forkify Recipe App",
        url: "https://forkifyapps-v2.netlify.app/",
        github: "https://github.com/Yogihafidh/Forkify-Apps.git",
      },
    ],
    image: forkifyApp,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="container text-center pt-28 md:pt-40">
      <SectionHeader
        eyebrow="Apps Result"
        title="Featured Project"
        description="See what I have been working on as a software engineer"
      />

      <div className="flex flex-col text-left">
        {portfolioProjects.map((project, projectIndex) => (
          <ProjectCard
            project={project}
            projectIndex={projectIndex}
            key={project.title}
          />
        ))}
      </div>
      <div className="flex justify-center items-center gap-3">
        <a href="https://github.com/Yogihafidh">
          <button className="w-fit font-semibold bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-950 px-3 md:px-6 py-2 md:py-3 rounded-full  cursor-pointer">
            See all my Project
          </button>
        </a>
        <a href="https://www.behance.net/yogihafidh">
          <button className="w-fit font-semibold border-2 border-gray-300 hover:bg-gray-200 px-3 md:px-6 py-2 md:py-3 rounded-full  cursor-pointer">
            See all my design
          </button>
        </a>
      </div>
    </section>
  );
};
