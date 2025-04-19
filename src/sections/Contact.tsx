import grainImage from "@/assets/images/grain.jpg";
import FormContact from "@/components/FormContact";

export const ContactSection = () => {
  return (
    <div className="container py-16 pt-8 ">
      <div className="bg-gradient-to-r from-emerald-300 to-sky-400 rounded-3xl px-8 md:px-16 py-8 flex flex-col gap-8">
        <div>
          <h2 className="text-2xl md:text-3xl font-serif mb-4">
            Lets realize that idea together
          </h2>
          <p className="text-sm md:text-base md:mb-8">
            Are you ready to bring your project ideas to life? Lets connect and
            discuss how I can help you realize the project ideas in your head.
            Contact me by filling out the form below!
          </p>
        </div>

        <FormContact />
      </div>
    </div>
  );
};
