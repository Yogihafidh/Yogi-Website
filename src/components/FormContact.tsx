"use client";
import React from "react";

const FormContact = () => {
  return (
    <form
      action="https://formspree.io/f/xrbpnena"
      method="POST"
      className="flex flex-col gap-4"
    >
      <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-8">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="border border-gray-100 rounded-xl px-8 py-4 w-full"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="border border-gray-100 rounded-xl px-8 py-4 w-full"
          required
        />
      </div>
      <textarea
        name="message"
        placeholder="Your Message"
        className="border border-gray-100 rounded-xl px-8 py-4 mb-4 md:mb-8 md:h-48"
      ></textarea>
      <div>
        <button
          type="submit"
          className="bg-gray-900 hover:bg-gray-700 text-white px-8 py-4 w-full md:w-auto rounded-xl font-semibold"
        >
          Contact me now!
        </button>
      </div>
    </form>
  );
};

export default FormContact;
