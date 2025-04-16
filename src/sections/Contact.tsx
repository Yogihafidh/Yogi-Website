export const ContactSection = () => {
  return (
    <div className="container py-16 ">
      <div className="bg-gradient-to-r from-emerald-300 to-sky-400 rounded-3xl px-12 py-8">
        <h2>Lets realize that idea together</h2>
        <p>
          Are you ready to bring your project ideas to life? Lets connect and
          discuss how I can help you realize the project ideas in your head.
          Contact me by filling out the form below!
        </p>

        <form className="flex flex-col gap-4 mt-8">
          <input
            type="text"
            placeholder="Your Name"
            className="border border-gray-100 rounded-xl px-8 py-4"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="border border-gray-100 rounded-xl px-8 py-4"
          />
          <textarea
            placeholder="Your Message"
            className="border border-gray-100 rounded-xl px-8 py-4"
          ></textarea>
          <button className="bg-blue-500 text-white rounded-lg p-2">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};
