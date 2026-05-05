import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaThreads } from "react-icons/fa6";
import { FaMedium } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { FaHackerrank } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaBehance } from "react-icons/fa6";
import { FaDribbble } from "react-icons/fa6";

const footerLinks = [
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/yogihafidhmaulana?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    icon: FaLinkedin,
  },
  {
    title: "Medium",
    href: "https://medium.com/@hafidhyogi",
    icon: FaMedium,
  },
  {
    title: "Leet Code",
    href: "https://leetcode.com/u/YogiHafidh/",
    icon: SiLeetcode,
  },
  {
    title: "Github",
    href: "https://github.com/Yogihafidh",
    icon: FaGithub,
  },
  {
    title: "Behance",
    href: "https://www.behance.net/yogihafidh",
    icon: FaBehance,
  },
];

export const Footer = () => {
  return (
    <footer>
      <div className="container border-t border-gray-950/15 flex flex-col md:flex-row gap-4 md:gap-0 md:justify-between items-center py-8 ">
        <div className="w-full">
          <p>&copy; Yogi Hafidh Maulana</p>
          <p className="text-gray-500">
            Open to opportunities, collaboration, and meaningful discussions.
          </p>
        </div>

        <div className="w-full flex flex-col gap-2 md:items-end">
          <p className="mb-2 text-sm md:text-base">Let’s Connect</p>
          <nav className="flex gap-4 items-center md:gap-6 flex-wrap">
            {footerLinks.map((link) => (
              <a key={link.title} href={link.href}>
                <link.icon className="size-6 hover:text-emerald-400 text-gray-950/70" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
