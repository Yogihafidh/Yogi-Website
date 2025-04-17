import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaThreads } from "react-icons/fa6";
import { FaMedium } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { FaHackerrank } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";

const footerLinks = [
  {
    title: "Instagram",
    href: "https://www.instagram.com/h.mlna?igsh=cmhncmhidzA1bGw5",
    icon: FaInstagram,
  },
  {
    title: "Linkedin",
    href: "https://www.linkedin.com/in/yogihafidhmaulana?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    icon: FaLinkedin,
  },
  {
    title: "X",
    href: "https://x.com/hafidhmaulanaa?t=aeJq3kQQjo8K-IU2YJONWg&s=09",
    icon: FaSquareTwitter,
  },
  {
    title: "Threads",
    href: "https://www.threads.net/@h.mlna",
    icon: FaThreads,
  },
  {
    title: "Medium",
    href: "https://medium.com/@hafidhyogi",
    icon: FaMedium,
  },
  {
    title: "Facebook",
    href: "https://www.facebook.com/share/1BZaTc3x3F/",
    icon: FaFacebook,
  },
  {
    title: "Leet Code",
    href: "https://leetcode.com/u/YogiHafidh/",
    icon: SiLeetcode,
  },
  {
    title: "HackerRank",
    href: "https://www.hackerrank.com/profile/hafidhyogi",
    icon: FaHackerrank,
  },
  {
    title: "Github",
    href: "https://github.com/Yogihafidh",
    icon: FaGithub,
  },
];

export const Footer = () => {
  return (
    <footer>
      <div className="container border-t border-gray-950/15 flex flex-col md:flex-row gap-4 md:gap-0 md:justify-between items-center py-8 ">
        <div className="w-full">&copy; Yogi Hafidh Maulana</div>

        <div className="w-full flex flex-col gap-2 md:items-end">
          <p className="mb-2 text-sm md:text-base">My Social Media</p>
          <nav className="flex gap-4 items-center md:gap-6">
            {footerLinks.map((link) => (
              <a key={link.title} href={link.href}>
                <link.icon className="size-6 hover:text-emerald-400" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
