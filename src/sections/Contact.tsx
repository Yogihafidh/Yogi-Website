import grainImage from "@/assets/images/grain.jpg";

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

        <form className="flex flex-col gap-4">
          <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-8">
            <input
              type="text"
              placeholder="Your Name"
              className="border border-gray-100 rounded-xl px-8 py-4 w-full"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="border border-gray-100 rounded-xl px-8 py-4 w-full"
              required
            />
          </div>
          <textarea
            placeholder="Your Message"
            className="border border-gray-100 rounded-xl px-8 py-4 mb-4 md:mb-8 md:h-48"
          ></textarea>
          <div>
            <button className=" bg-gray-900 hover:bg-gray-700 text-white px-8 py-4 w-full md:w-auto  rounded-xl font-semibold ">
              Contact me now!
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
