import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SeactionHeader";
import Image from "next/image";

import MapImage from "@/assets/images/map.png";
import Memoji from "@/assets/images/memoji-computer.png";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";
import { DragCard } from "@/components/DragCard";

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
  { title: "Ngrumpi & Nggosip 🤷‍♂️", left: "60%", top: "25%" },
];

export const AboutSection = () => {
  return (
    <section id="about" className="container text-center py-12 md:py-24 lg:py-32">
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
          <ToolboxItems
            items={fronendToolbox}
            className="mb-6"
            itemsWrapperClassName="animate-move-left [animation-duration:30s]"
          />
          <ToolboxItems
            items={fronendToolbox}
            className="mb-6 "
            itemsWrapperClassName="-translate-x-1/2 animate-move-right [animation-duration:20s]"
          />
          <ToolboxItems
            items={fronendToolbox}
            itemsWrapperClassName="-translate-x-1/4 animate-move-left [animation-duration:40s]"
          />
        </Card>

        <Card className="p-0 h-[360px] md:col-span-2">
          <CardHeader
            title="Back-end Toolbox"
            description="Explore the technologies and tools I use to build web server"
          />
          <ToolboxItems
            items={backendToolbox}
            className="mb-6"
            itemsWrapperClassName="-translate-x-1/2 animate-move-right [animation-duration:40s]"
          />
          <ToolboxItems
            items={backendToolbox}
            className="mb-6"
            itemsWrapperClassName="-translate-x-1/2 animate-move-left [animation-duration:15s]"
          />
          <ToolboxItems
            items={backendToolbox}
            className="mb-6"
            itemsWrapperClassName="translate-x-1/4 animate-move-right [animation-duration:20s]"
          />
        </Card>

        <Card className="h-[360px] p-0 relative outline outline-2 outline-gray-300 md:col-span-2">
          <Image
            className="h-full w-full object-cover"
            src={MapImage}
            alt="Purwokerto"
            fill
          />
          <div className="absolute top-1/2 right-3/4 translate-x-3/4 -translate-y-1/2 size-20 rounded-full flex items-center justify-center after:content-[''] after:absolute after:-z-10 after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-100">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping-large [animation-duration:2s]"></div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>
            <Image className="size-20" src={Memoji} alt="Yogi Memoji" />
          </div>
        </Card>

        <Card className="h-[360px] p-0 flex flex-col md:col-span-3">
          <CardHeader
            title="My Hobby"
            description="Explore my interests and hobbies"
          />
          <DragCard hobby={hobby} />
        </Card>
      </div>
    </section>
  );
};
