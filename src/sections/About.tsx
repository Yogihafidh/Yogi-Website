import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SeactionHeader";
import Image from "next/image";

import MapImage from "@/assets/images/map.png";
import Memoji from "@/assets/images/memoji-computer.png";
import StartIcon from "@/assets/icons/star.svg";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";

const fronendToolbox = [
  "React.JS",
  "Next.JS",
  "Tailwind CSS",
  "TypeScript",
  "JavaScript",
  "Redux Toolkit",
  "React Query",
  "React Hook Form",
  "React Router",
  "Figma",
  "Canva",
];
const backendToolbox = [
  "Node.js",
  "PostgreSQL",
  "MySQL",
  "SQL",
  "Supabase",
  "Notion",
  "Jira",
];
const hobby = [
  { title: "Gym 💪", left: "50%", top: "80%" },
  { title: "Reading 📖", left: "45%", top: "20%" },
  { title: "Haiking 🏞️", left: "15%", top: "10%" },
  { title: "Watching K-Drama 📺", left: "10%", top: "40%" },
  { title: "Badminton 🏸", left: "30%", top: "70%" },
];

export const AboutSection = () => {
  return (
    <div className="container text-center py-12 md:py-24 lg:py-32">
      <SectionHeader
        eyebrow="let's get to know me at work"
        title="About Yogi"
        description="learn more about who I am, what I do, where I am, and what tools I use."
      />

      <div className="flex flex-col gap-6 md:grid md:grid-cols-5 md:gap-6">
        <Card className="p-0 h-[360px] md:col-span-3">
          <CardHeader
            title="Front-end Toolbox"
            description="Explore the technologies and tools I use to build interfaces website"
          />
          <ToolboxItems items={fronendToolbox} className="mb-6" />
          <ToolboxItems
            items={fronendToolbox}
            className="mb-6"
            itemsWrapperClassName="-translate-x-1/2"
          />
          <ToolboxItems
            items={fronendToolbox}
            itemsWrapperClassName="-translate-x-1/4"
          />
        </Card>

        <Card className="p-0 h-[360px] md:col-span-2">
          <CardHeader
            title="Back-end Toolbox"
            description="Explore the technologies and tools I use to build web server"
          />
          <ToolboxItems items={backendToolbox} className="mb-6" />
          <ToolboxItems
            items={backendToolbox}
            className="mb-6"
            itemsWrapperClassName="-translate-x-1/2"
          />
          <ToolboxItems
            items={backendToolbox}
            className="mb-6"
            itemsWrapperClassName="translate-x-1/4"
          />
        </Card>

        <Card className="h-[360px] p-0 relative outline outline-2 outline-gray-300 md:col-span-2">
          <Image
            className="h-full w-full object-cover"
            src={MapImage}
            alt="Purwokerto"
            fill
          />
          <div className="absolute top-1/2 right-3/4 translate-x-3/4 -translate-y-1/2 size-20 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 flex items-center justify-center after:content-[''] after:absolute after:-z-10 after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-100">
            <Image className="size-20" src={Memoji} alt="Yogi Memoji" />
          </div>
        </Card>

        <Card className="h-[360px] p-0 flex flex-col md:col-span-3">
          <CardHeader
            title="My Hobby"
            description="Explore my interests and hobbies"
          />
          <div className="relative flex-1">
            {hobby.map((item) => (
              <div
                key={item.title}
                className=" inline-flex gap-2 px-6 py-1.5 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full font-medium absolute"
                style={{
                  left: item.left,
                  top: item.top,
                }}
              >
                {item.title}
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};
