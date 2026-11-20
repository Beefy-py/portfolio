import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { sendContactForm } from "../lib/api";
import { contactEmail, socialLinks } from "../utils/resources";
import useLocalTime from "../hooks/localTime";
import SectionWrapper from "./sectionWrapper";
import {
  ArrowUpRightIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/outline";
import { fadeIn, fadeInViewport } from "../utils/motion";

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

type FieldName = keyof typeof initialState.values;

const fields: {
  name: FieldName;
  label: string;
  type: string;
  placeholder: string;
  half?: boolean;
}[] = [
  { name: "name", label: "Your name", type: "text", placeholder: "Jane Doe", half: true },
  { name: "email", label: "Your email", type: "email", placeholder: "jane@company.com", half: true },
  { name: "subject", label: "Subject", type: "text", placeholder: "A new mobile app, a dashboard…" },
  { name: "message", label: "Message", type: "textarea", placeholder: "Tell me a bit about the project" },
];

function ContactSection() {
  const [state, setState] = useState(initialState);
  const time = useLocalTime();

  const { values, touched, isLoading, error, displayToast } = state;

  useEffect(() => {
    if (!displayToast) return;
    const id = setTimeout(
      () => setState((prev) => ({ ...prev, displayToast: false })),
      4000
    );
    return () => clearTimeout(id);
  }, [displayToast]);

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name } = e.target;
    setState((prev) => ({
      ...prev,
      touched: { ...prev.touched, [name]: true },
    }));
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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
      setState({ ...initialState, displayToast: true });
    } catch (error: any) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: error.message,
        displayToast: true,
      }));
    }
  };

  const inputStyling =
    "block w-full border-0 border-b hairline bg-transparent px-0 py-3 text-lg text-ink placeholder:text-muted/60 transition-colors focus:border-accent focus:outline-none focus:ring-0";

  return (
    <SectionWrapper
      name="contact"
      index="04"
      label="Contact"
      title={
        <>
          Got an idea?{" "}
          <span className="text-accent">Let&apos;s build it together.</span>
        </>
      }
    >
      <div
        role="status"
        aria-live="polite"
        className={`fixed left-1/2 top-24 z-50 flex -translate-x-1/2 items-center gap-3 whitespace-nowrap rounded-full px-5 py-3 text-sm font-medium shadow-2xl transition-all duration-500 ${
          displayToast
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-4 opacity-0"
        } ${error ? "bg-red-600 text-white" : "bg-accent text-accent-ink"}`}
      >
        {error ? (
          <ExclamationTriangleIcon className="h-5 w-5" />
        ) : (
          <CheckCircleIcon className="h-5 w-5" />
        )}
        {error ? error : "Message sent — I'll get back to you soon."}
      </div>

      <div className="grid gap-16 lg:grid-cols-4 lg:gap-8">
        <div className="space-y-10">
          <div>
            <p className="label mb-3">Email</p>
            <a
              href={`mailto:${contactEmail}`}
              className="link-underline break-all text-lg"
            >
              {contactEmail}
            </a>
          </div>
          <div>
            <p className="label mb-3">Based in</p>
            <p className="text-lg">Commewijne, Suriname</p>
            <p className="text-muted">Local time {time} (UTC−3)</p>
          </div>
          <div>
            <p className="label mb-3">Socials</p>
            <ul className="space-y-1">
              {socialLinks.map((link) => (
                <li key={link.url}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-1 text-lg hover:text-accent"
                  >
                    {link.name}
                    <ArrowUpRightIcon className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <motion.form
          initial="hidden"
          whileInView="show"
          viewport={fadeInViewport}
          variants={fadeIn("up")}
          onSubmit={sendEmail}
          className="grid gap-x-8 gap-y-10 rounded-[1.75rem] bg-surface p-6 sm:grid-cols-2 sm:p-10 lg:col-span-3"
        >
          {fields.map((field) => {
            const invalid = touched[field.name] && !values[field.name];
            const shared = {
              id: field.name,
              name: field.name,
              required: true,
              placeholder: field.placeholder,
              value: values[field.name],
              onChange: handleChange,
              onBlur: handleBlur,
            };
            return (
              <div
                key={field.name}
                className={field.half ? "" : "sm:col-span-2"}
              >
                <label
                  htmlFor={field.name}
                  className={`label flex justify-between ${
                    invalid ? "!text-sun" : ""
                  }`}
                >
                  {field.label}
                  {invalid && <span>Required</span>}
                </label>
                {field.type === "textarea" ? (
                  <textarea
                    {...shared}
                    rows={4}
                    className={`${inputStyling} resize-none ${
                      invalid ? "!border-sun" : ""
                    }`}
                  />
                ) : (
                  <input
                    {...shared}
                    type={field.type}
                    className={`${inputStyling} ${
                      invalid ? "!border-sun" : ""
                    }`}
                  />
                )}
              </div>
            );
          })}

          <div className="flex flex-wrap items-center justify-between gap-4 sm:col-span-2">
            <p className="text-sm text-muted">
              All fields are required.
            </p>
            <button
              type="submit"
              disabled={
                isLoading || Object.values(values).some((val) => val === "")
              }
              className="group flex items-center gap-4 rounded-full bg-accent py-2 pl-7 pr-2 text-lg font-medium text-accent-ink transition-all enabled:hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-40"
            >
              {isLoading ? "Sending…" : "Send message"}
              <span className="grid h-11 w-11 place-items-center rounded-full bg-accent-ink text-accent transition-transform duration-300 group-enabled:group-hover:rotate-45">
                <ArrowUpRightIcon className="h-5 w-5" strokeWidth={2} />
              </span>
            </button>
          </div>
        </motion.form>
      </div>
    </SectionWrapper>
  );
}

export default ContactSection;
