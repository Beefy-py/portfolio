import React, { useEffect, useRef, useState } from "react";
import { sendContactForm } from "../lib/api";
import { additionalInfo } from "../utils/resources";
import SectionWrapper from "./sectionWrapper";
import {
  ExclamationTriangleIcon,
  PaperAirplaneIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/24/outline";

const initialState = {
  values: {
    email: "",
    name: "",
    subject: "",
    message: "",
  },
  touched: {
    email: false,
    name: false,
    subject: false,
    message: false,
  },
  isLoading: false,
  displayToast: false,
  error: "",
};

function ContactSection() {
  const [state, setState] = useState(initialState);

  const { values, touched, isLoading, error, displayToast } = state;

  useEffect(() => {
    setTimeout(() => {
      if (displayToast) setState((prev) => ({ ...prev, displayToast: false }));
    }, 4000);
  }, [displayToast]);

  const handleBlur = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { value, name } = e.target;
    setState((prev) => ({
      ...prev,
      touched: { ...prev.touched, [name]: true },
    }));
  };

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { value, name } = e.target;
    setState((prev) => ({
      ...prev,
      values: { ...prev.values, [name]: value },
    }));
  };

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setState((prev) => ({ ...prev, isLoading: true, error: "" }));

    try {
      await sendContactForm(values);
      setState((prev) => ({ ...initialState, displayToast: true }));
    } catch (error: any) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: error.message,
        displayToast: true,
      }));
    }
  };

  console.log(touched);

  const inputStyling = `
shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:outline-2 focus:outline-offset-4 focus:outline-logo-shade3 outline-none ring-none focus:ring-none block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:shadow-sm-light`;

  const inputLabelStyling = `flex items-center mb-2 text-sm font-medium text-gray-900 dark:text-gray-300`;

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
          data-aos-delay="50"
          className="mb-8 lg:mb-16 font-light lg:text-center text-gray-500 dark:text-gray-400 sm:text-lg"
        >
          Do you have any questions for me or suggestions? Then please don't
          hesitate to contact me.
        </p>

        <div
          id="toast-message"
          className={`fixed transition-all ease-[cubic-bezier(0.95,0.05,0.795,0.035)] ${
            displayToast ? "top-3 scale-100 w-full" : "top-0 scale-0 w-0"
          } left-0 right-0 mx-auto flex items-center w-2/4 min-w-min md:max-w-xs p-4 space-x-4 border-2 border-dashed ${
            error ? "border-red-600 dark:border-red-500" : "border-logo-shade1"
          } ${
            error ? "text-red-600 dark:text-red-500" : "text-logo-shade1"
          } bg-white divide-x divide-gray-200 rounded-sm shadow dark:divide-gray-700 space-x dark:bg-gray-800`}
          role="alert"
        >
          {error ? (
            <ExclamationTriangleIcon className="w-6 h-6 mr-2" />
          ) : (
            <PaperAirplaneIcon className="w-8 h-8 md:h-6 md:w-6 -rotate-45" />
          )}
          <div className="pl-4 text-sm font-normal">
            {error ? error : " Message sent successfully."}
          </div>
        </div>

        <form onSubmit={sendEmail} className="space-y-8">
          <div className="grid grid-cols-6 space-y-8 md:space-y-0 md:space-x-2">
            <div
              className="col-span-full md:col-span-3"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <label
                htmlFor="email"
                className={`${inputLabelStyling} ${
                  touched.email && !values.email
                    ? "text-orange-600 dark:text-orange-500"
                    : ""
                }`}
              >
                Your email
                {touched.email && !values.email && (
                  <>
                    <ExclamationCircleIcon className="w-5 h-5 ml-2" />
                    {"*required"}
                  </>
                )}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className={`${inputStyling} ${
                  touched.email && !values.email
                    ? "border-orange-600 dark:border-orange-500"
                    : ""
                }`}
                placeholder="eg. name@email.com"
                required
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <div
              className="col-span-full md:col-span-3"
              data-aos="fade-left"
              data-aos-delay="100"
            >
              <label
                htmlFor="name"
                className={`${inputLabelStyling} ${
                  touched.name && !values.name
                    ? "text-orange-600 dark:text-orange-500"
                    : ""
                }`}
              >
                Your name
                {touched.name && !values.name && (
                  <>
                    <ExclamationCircleIcon className="w-5 h-5 ml-2" />
                    {"*required"}
                  </>
                )}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className={`${inputStyling} ${
                  touched.name && !values.name
                    ? "border-orange-600 dark:border-orange-500"
                    : ""
                }`}
                placeholder="eg. John Doe"
                required
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
          </div>
          <div data-aos="fade-up" data-aos-delay="150">
            <label
              htmlFor="subject"
              className={`${inputLabelStyling} ${
                touched.subject && !values.subject
                  ? "text-orange-600 dark:text-orange-500"
                  : ""
              }`}
            >
              Subject
              {touched.subject && !values.subject && (
                <>
                  <ExclamationCircleIcon className="w-5 h-5 ml-2" />
                  {"*required"}
                </>
              )}
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              className={`${inputStyling} ${
                touched.subject && !values.subject
                  ? "border-orange-600 dark:border-orange-500"
                  : ""
              }`}
              placeholder="What is it about?"
              required
              value={values.subject}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="150"
            data-aos-offset="100"
            className="sm:col-span-2"
          >
            <label
              htmlFor="message"
              className={`${inputLabelStyling} ${
                touched.message && !values.message
                  ? "text-orange-600 dark:text-orange-500"
                  : ""
              }`}
            >
              Your message
              {touched.message && !values.message && (
                <>
                  <ExclamationCircleIcon className="w-5 h-5 ml-2" />
                  {"*required"}
                </>
              )}
            </label>
            <textarea
              id="message"
              rows={6}
              name="message"
              className={`${inputStyling} ${
                touched.message && !values.message
                  ? "border-orange-600 dark:border-orange-500"
                  : ""
              }`}
              placeholder="Leave a comment..."
              required
              value={values.message}
              // onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
              //   setState((prev) => ({
              //     ...prev,
              //     values: { ...prev.values, message: e.target.value },
              //   }));
              // }}
              onChange={handleChange}
              onBlur={handleBlur}
            ></textarea>
          </div>
          <button
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-offset="-10"
            disabled={Object.values(values).some((val) => val === "")}
            type="submit"
            className="py-3 px-5 text-sm font-medium text-center text-gray-200 hover:text-gray-900 rounded-sm bg-logo-shade2 sm:w-fit hover:bg-logo-shade3 transition disabled:cursor-not-allowed disabled:hover:bg-gray-400 disabled:bg-gray-300 disabled:text-gray-900"
          >
            {isLoading ? "Sending. . ." : "Send message"}
          </button>
        </form>
      </div>
    </SectionWrapper>
  );
}

export default ContactSection;
