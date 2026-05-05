"use client";

import { motion } from "framer-motion";
import { FaReact, FaFigma, FaProjectDiagram } from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import { SectionHeader } from "@/components/SeactionHeader";

export const EngineeringExpertiseSection = () => {
  return (
    <section id="expertise" className="container section-rhythm">
      <SectionHeader
        eyebrow="Skill"
        title="Engineering Expertise"
        description="Core capabilities I apply to design, build, and ship reliable products"
      />

      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.1, stiffness: 100 }}
        className="grid gap-6 md:grid-cols-2 xl:grid-cols-4 items-stretch"
      >
        <div className="bg-gray-950 text-white rounded-[32px] min-h-[360px] backdrop-blur w-full p-10">
          <div className="bg-white/10 p-5 rounded-full size-fit mx-auto mb-10">
            <FaReact className="text-8xl text-white" />
          </div>

          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-center">
            Full Stack Engineering
          </h2>
          <p className="text-sm md:text-base text-center text-white/80">
            I build scalable web applications end-to-end, from frontend
            interfaces to backend systems, using modern technologies such as
            React, Next.js, Node.js, and Golang.
          </p>
        </div>

        <div className="bg-white rounded-[32px] min-h-[360px] backdrop-blur p-10 w-full text-gray-900 border border-gray-200">
          <div className="bg-gray-500/20 p-5 rounded-full size-fit mx-auto mb-10">
            <FaGolang className="text-8xl" />
          </div>

          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-center">
            Backend Systems & API Development
          </h2>
          <p className="text-sm md:text-base text-center text-gray-700">
            I design and develop robust backend services with clean
            architecture, secure authentication, and efficient data management
            to support reliable and scalable applications.
          </p>
        </div>

        <div className="bg-gray-950 text-white rounded-[32px] min-h-[360px] backdrop-blur w-full p-10">
          <div className="bg-white/10 p-5 rounded-full size-fit mx-auto mb-10">
            <FaProjectDiagram className="text-8xl text-white" />
          </div>

          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-center">
            System Design & Software Engineering
          </h2>
          <p className="text-sm md:text-base text-center text-white/80">
            I translate business requirements into structured system designs,
            applying software engineering principles such as requirement
            analysis, UML modeling, database design, and modular architecture.
          </p>
        </div>

        <div className="bg-gray-950 text-white rounded-[32px] min-h-[360px] backdrop-blur w-full p-10">
          <div className="bg-white/10 p-5 rounded-full size-fit mx-auto mb-10">
            <FaFigma className="text-8xl text-white" />
          </div>

          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-center">
            User Experience & Product Thinking
          </h2>
          <p className="text-sm md:text-base text-center text-white/80">
            With a foundation in design thinking and UX, I build systems that
            are not only functional but also intuitive, ensuring seamless
            interaction between users and technology.
          </p>
        </div>
      </motion.div>
    </section>
  );
};
