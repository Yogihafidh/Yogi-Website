import grainImage from "@/assets/images/grain.jpg";
import FormContact from "@/components/FormContact";

export const ContactSection = () => {
  return (
    <section id="contact" className="container section-rhythm pt-10 md:pt-12">
      <div className="bg-gradient-to-r from-emerald-300 to-sky-400 rounded-3xl px-8 md:px-16 py-8 flex flex-col gap-8">
        <div>
          <p className="uppercase text-xs tracking-[0.2em] font-semibold mb-3">
            Contact / Hire Me
          </p>
          <h2 className="text-2xl md:text-3xl font-serif mb-4">
            Let’s Turn Your Ideas Into Reliable Systems
          </h2>
          <p className="text-sm md:text-base md:mb-8">
            I help transform real-world problems into scalable and reliable
            systems. Whether you're building a new product or improving an
            existing one, I can contribute through system design, backend
            development, and fullstack implementation.
          </p>
          <p className="text-sm md:text-base">
            Available for full-time roles, freelance projects, and
            collaboration.
          </p>
        </div>

        <FormContact />
      </div>
    </section>
  );
};
