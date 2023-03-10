import {
  EnvelopeIcon,
  InformationCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface FormInput {
  email: string;
}

const Newsletter = () => {
  const [state, setState] = useState(0); // 0 = initial , 1 = loading, 2 = success, 3 = failed
  const [errorMsg, setErrorMsg] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormInput>();

  const subscribe: SubmitHandler<FormInput> = async (data) => {
    setState(1);
    setErrorMsg("");
    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        body: data.email,
      });

      const responseData = await response.json();
      if (responseData.error !== null) {
        throw responseData.error;
      }
      setState(2);
      reset();
    } catch (error: any) {
      console.log(error);
      setErrorMsg(error);
      setState(3);
      reset();
    }
  };

  const getAlertMessage = () => {
    switch (state) {
      case 1:
        return "Processing. . .";
      case 2:
        return "You have successfully subscribed to our newsletter.";
      case 3:
        return errorMsg;
      default:
        break;
    }
  };
  const getAlertTextClasses = () => {
    switch (state) {
      case 1:
        return "text-gray-800 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-700";
      case 2:
        return "text-logo-shade2 bg-logo-shade5 border-logo-shade2 dark:logo-shade5";
      case 3:
        return "text-red-800 bg-red-50 border-red-200 dark:border-red-300";
      default:
        break;
    }
  };
  const getAlertButtonClasses = () => {
    switch (state) {
      case 1:
        return "bg-gray-300 hover:bg-gray-400 dark:bg-gray-700 text-gray-700 hover:dark:bg-gray-600 dark:text-gray-300";
      case 2:
        return "bg-logo-shade2 text-gray-200 hover:bg-logo-shade1";
      case 3:
        return "bg-red-100 text-red-500 hover:bg-red-200";
      default:
        break;
    }
  };

  return (
    <section className="mb-4 mx-auto max-w-screen-xl">
      {state !== 0 && (
        <div
          id="alert-2"
          className={`z-10 flex fixed top-3 p-6 left-0 right-0 border-2 border-dashed mx-auto items-center w-11/12 md:w-2/4 min-w-min rounded-sm ${getAlertTextClasses()}`}
          role="alert"
        >
          <InformationCircleIcon className="w-10 md:w-7" />
          <span className="sr-only">Info</span>
          <div className="ml-3 text-sm font-medium">{getAlertMessage()}</div>
          <button
            onClick={() => setState(0)}
            type="button"
            className={`ml-auto transition -mx-1.5 -my-1.5 rounded-md focus:ring-2 p-1.5 inline-flex h-8 w-8 ${getAlertButtonClasses()}`}
            data-dismiss-target="#alert-2"
            aria-label="Close"
          >
            <span className="sr-only">Close</span>
            <XMarkIcon className="w-10 md:w-7" />
          </button>
        </div>
      )}
      <div className="mx-auto max-w-screen-md sm:text-center">
        <p className="text-gray-700 dark:text-gray-400 mx-auto mb-2 max-w-2xl font-normal text-dm-grey sm:text-xl">
          Stay up to date with my progress progress, announcements and new
          articles feel free to sign up with your email.
        </p>
        <form action="#" onSubmit={handleSubmit(subscribe)}>
          <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
            <div className="relative w-full">
              <label
                htmlFor="email"
                className="hidden mb-2 font-medium text-gray-900"
              >
                Email address
              </label>
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <EnvelopeIcon className="w-6 text-gray-600 dark:text-gray-400" />
              </div>
              <input
                className="block p-3 pl-10 w-full focus:outline-none text-gray-800 dark:text-gray-300 bg-gray-50 dark:bg-gray-800 rounded-sm border border-gray-300 dark:border-gray-700 sm:rounded-none sm:rounded-l-sm focus:outline-logo-shade1"
                placeholder="Enter your email"
                type="email"
                id="email"
                {...register("email", { required: false })}
              />
            </div>
            <div className="m-0">
              <button
                type="submit"
                className="py-3 px-5 w-full font-medium text-center text-white rounded-sm border cursor-pointer bg-logo-shade1 border-logo-shade2 sm:rounded-none sm:rounded-r-sm hover:bg-logo-shade3"
              >
                Subscribe
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
