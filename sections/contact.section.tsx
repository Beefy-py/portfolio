import React from "react";
import { additionalInfo } from "../utils/resources";
import SectionWrapper from "./sectionWrapper";

function ContactSection() {
  return (
    <SectionWrapper name="contact">
      <div className="col-span-full px-4 mx-auto max-w-screen-md">
        <h2
          data-aos="fade-up"
          className="mb-4 text-xl md:text-2xl tracking-tight font-bold lg:text-center text-gray-700 dark:text-gray-300"
        >
          Contact Me
        </h2>
        <p
          data-aos="fade-up"
          data-aos-delay="150"
          className="mb-8 lg:mb-16 font-light lg:text-center text-gray-500 dark:text-gray-400 sm:text-lg"
        >
          Do you have any questions for me or suggestions? Then please don't
          hesitate to contact me.
        </p>
        <form action="#" className="space-y-8">
          <div data-aos="fade-up" data-aos-delay="200">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:outline-2 focus:outline-offset-4 focus:outline-logo-shade3 outline-none ring-none focus:ring-none block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:shadow-sm-light"
              placeholder="name@email.com"
              required
            />
          </div>
          <div data-aos="fade-up" data-aos-delay="250">
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:outline-2 focus:outline-offset-4 focus:outline-logo-shade3 outline-none ring-none focus:ring-none block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:shadow-sm-light"
              placeholder="What is it about?"
              required
            />
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-offset="100"
            className="sm:col-span-2"
          >
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Your message
            </label>
            <textarea
              id="message"
              rows={6}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:outline-2 focus:outline-offset-4 focus:outline-logo-shade3 outline-none ring-none focus:ring-none block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:shadow-sm-light"
              placeholder="Leave a comment..."
            ></textarea>
          </div>
          <button
            data-aos="fade-up"
            data-aos-delay="400"
            type="submit"
            className="py-3 px-5 text-sm font-medium text-center text-gray-200 hover:text-gray-900 rounded-sm bg-logo-shade2 sm:w-fit hover:bg-logo-shade3 transition"
          >
            Send message
          </button>
        </form>
      </div>
    </SectionWrapper>
  );
}

export default ContactSection;
