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
    <section
      id="about"
      className="container text-center py-12 md:py-24 lg:py-32"
    >
      <SectionHeader
        eyebrow="let's get to know me at work"
        title="About Yogi"
        description="Software Engineer focused on system design, backend development, and building scalable solutions from real-world problems."
      />

      <div className="grid md:grid-cols-[2fr_1fr] gap-10 items-center mb-20">
        {/* LEFT SIDE */}
        <div className="text-left">
          <h3 className="text-3xl md:text-4xl font-semibold leading-tight mb-6">
            Building Scalable Systems from Real-World Problems
          </h3>

          <p className="text-gray-600 leading-relaxed mb-4">
            I am a Software Engineer with a strong foundation in system design
            and backend development, focused on transforming real-world problems
            into structured and scalable systems.
          </p>

          <p className="text-gray-600 leading-relaxed mb-4">
            My approach starts from understanding business workflows and
            translating them into clear requirements, followed by designing
            system architecture using principles such as modular design, clean
            architecture, and efficient data modeling.
          </p>

          <p className="text-gray-600 leading-relaxed mb-4">
            I have experience building financial systems and operational
            platforms, where I applied API design, authentication, and
            performance optimization to deliver reliable and maintainable
            solutions.
          </p>

          <p className="text-gray-600 leading-relaxed mb-6">
            Beyond implementation, I value clarity in thinking—ensuring that
            every system I build is not only functional, but also aligned with
            user needs and business goals.
          </p>

          <p className="italic text-gray-500">
            I don’t just build applications—I design systems that solve real
            problems.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="bg-gradient-to-br from-emerald-50 to-sky-50 rounded-2xl p-6 shadow-sm border border-white/40 backdrop-blur-sm">
          <p className="text-sm uppercase tracking-wide text-gray-500 mb-4">
            What I Focus On
          </p>

          <div className="space-y-3">
            {["System Design", "Backend Development", "Full-stack Development", "Product Thinking"].map(
              (item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                  <span className="text-gray-700">{item}</span>
                </div>
              ),
            )}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-6 md:grid md:grid-cols-5 md:gap-6">
        <Card className="p-0 h-[360px] md:col-span-3">
          <CardHeader
            title="Front-end Toolbox"
            description="Tools and technologies I use to build responsive and user-friendly interfaces."
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
            description="Technologies I use to build scalable and reliable backend systems."
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
            description="A glimpse into activities I enjoy outside of engineering."
          />
          <DragCard hobby={hobby} />
        </Card>
      </div>
    </section>
  );
};
