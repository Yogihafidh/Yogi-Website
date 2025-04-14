import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";

const portfolioProjects = [
  {
    company: "Koprasi KSP Cihonje",
    year: "2023",
    title: "Koprasi System for admin and User",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/4k7IdSLxh6w",
    image: darkSaasLandingPage,
  },
  {
    company: "Rumah Angsa Glambing",
    year: "2025",
    title: "Glamping Booking System",
    results: [
      { title: "Boosted sales by 20%" },
      { title: "Expanded customer reach by 35%" },
      { title: "Increased brand awareness by 15%" },
    ],
    link: "https://youtu.be/7hi5zwO75yc",
    image: lightSaasLandingPage,
  },
  {
    company: "World Wise",
    year: "2024",
    title: "Traveling Note (Personal Project)",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/Z7I5uSRHMHg",
    image: aiStartupLandingPage,
  },
  {
    company: "Forkify Apps",
    year: "2022",
    title: "Recipes Web Apps (Personal Website)",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/Z7I5uSRHMHg",
    image: aiStartupLandingPage,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="container text-center pt-28 md:pt-40">
      <p className="uppercase font-semibold tracking-widest  mb-4">
        Real-world Result
      </p>
      <h1 className="font-serif text-3xl md:text-5xl mb-4">Featured Project</h1>
      <p className="mb-10 md:mb-20 md:text-lg">
        See what I have been working on as a software engineer
      </p>

      <div className="flex flex-col text-left">
        {portfolioProjects.map((project) => (
          <div
            key={project.title}
            className="bg-gray-100/50 rounded-3xl relative z-0 overflow-hidden after:content-[''] after:-z-10 after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-3xl after:outline-gray-900/20 px-8 pt-8 mb-20 md:px-10 md:pt-12 lg:pt-16 lg:px-20"
          >
            <div
              style={{ backgroundImage: `url(${grainImage.src})` }}
              className="inset-0 absolute -z-10 opacity-10"
            ></div>

            <div className="lg:grid lg:grid-cols-2 lg:gap-16">
              <div className="lg:pb-16">
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
                <a href={project.link}>
                  <button className="mb-8 lg:mb-0 md:mb-12 bg-gray-800 text-white h-12 w-full md:w-auto px-8 rounded-xl font-semibold inline-flex gap-2 items-center justify-center">
                    <span>Visit Live Site</span>
                    <ArrowUpRightIcon className="size-5" />
                  </button>
                </a>
              </div>

              <div className="relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="-mb-4 md:mb-0 lg:absolute lg:w-auto lg:h-full lg:max-w-none"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
