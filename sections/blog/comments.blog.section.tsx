import React, { useState, useEffect } from "react";
import {
  ChatBubbleBottomCenterIcon,
  ChatBubbleBottomCenterTextIcon,
  ChatBubbleLeftRightIcon,
  EllipsisHorizontalIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/outline";

interface FormInput {
  name: string;
  email: string;
  comment: string;
}

import { useForm, SubmitHandler } from "react-hook-form";
import LoadingSpinner from "../../components/loadingSpinner.component";

const initialState = {
  displayToast: { display: false, type: "", message: "" },
  isLoading: false,
};

function CommentsSection({ postId }: { postId: string }) {
  const [state, setState] = useState(initialState);

  const { isLoading, displayToast } = state;

  useEffect(() => {
    setTimeout(() => {
      if (displayToast.display) {
        setState((prev) => ({
          ...prev,
          displayToast: { display: false, type: "", message: "" },
        }));
      }
    }, 4000);
  }, [displayToast]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormInput>();

  const formInputStyle = `focus:outline-2 outline-offset-3 focus:outline-logo-shade1 py-2 px-4 bg-white rounded-sm border border-gray-200 dark:bg-gray-800 dark:border-gray-700 w-full text-md text-gray-700 outline-none focus:ring-0 dark:text-gray-300 dark:placeholder-gray-500`;
  const formLableStle = `block mb-2 text-sm font-medium text-gray-900 dark:text-white`;

  const placeComment: SubmitHandler<FormInput> = async (data) => {
    setState((prev) => ({ ...prev, isLoading: true }));
    try {
      const response = await fetch("/api/placeComment", {
        method: "POST",
        body: JSON.stringify({ ...data, postId }),
      });
      const responseBody = await response.json();
      setState((prev) => ({
        ...prev,
        displayToast: {
          display: true,
          type: "success",
          message: responseBody.message,
        },
        isLoading: false,
      }));
      reset();
    } catch (err: any) {
      console.log(err);
      setState((prev) => ({
        ...prev,
        displayToast: { display: true, type: "error", message: err.message },
        isLoading: false,
      }));
    }
  };

  return (
    <section className="">
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-lg lg:text-xl text-gray-700 dark:text-gray-200">
          Discussion (20)
        </h2>
      </div>

      <div
        id="toast-message"
        className={`fixed transition-all ease-[cubic-bezier(0.95,0.05,0.795,0.035)] ${
          displayToast.display ? "top-3 scale-100 w-full" : "top-0 scale-0 w-0"
        } left-0 right-0 mx-auto flex items-center w-2/4 min-w-min md:max-w-xs p-4 space-x-4 border-2 border-dashed ${
          displayToast.type === "error"
            ? "border-red-600 dark:border-red-500"
            : "border-logo-shade1"
        } ${
          displayToast.type === "error"
            ? "text-red-600 dark:text-red-500"
            : "text-logo-shade1"
        } bg-white divide-x divide-gray-200 rounded-sm shadow dark:divide-gray-700 space-x dark:bg-gray-800`}
        role="alert"
      >
        {displayToast.type === "error" ? (
          <ExclamationTriangleIcon className="w-6 h-6 mr-2" />
        ) : (
          <ChatBubbleBottomCenterIcon className="w-8 h-8 md:h-6 md:w-6" />
        )}
        <div className="pl-4 text-sm font-normal">{displayToast.message}</div>
      </div>

      <form className="mb-6" onSubmit={handleSubmit(placeComment)}>
        <div className="mb-6">
          <label htmlFor="email" className={formLableStle}>
            Your Email
          </label>
          <input
            {...register("email", { required: true })}
            type="email"
            id="email"
            className={formInputStyle}
            placeholder="name@flowbite.com"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="name" className={formLableStle}>
            Your Name
          </label>
          <input
            {...register("name", { required: true })}
            type="text"
            id="name"
            className={formInputStyle}
            placeholder="Jane Doe"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="comment" className={formLableStle}>
            Your Comment
          </label>
          <textarea
            {...register("comment", { required: true })}
            id="comment"
            rows={6}
            className={formInputStyle}
            placeholder="Write a comment..."
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="transition inline-flex items-center py-2.5 px-4 text-sm md:text-normal font-medium text-center text-white bg-logo-shade2 rounded-sm focus:ring-4 focus:ring-logo-shade5 hover:bg-logo-shade1"
        >
          Post comment
          {isLoading ? (
            <LoadingSpinner />
          ) : (
            <ChatBubbleBottomCenterTextIcon className="ml-2 w-5" />
          )}
        </button>
      </form>
      <article className="comment p-6 border-t first:border-none border-gray-200 dark:border-gray-700 mb-6 text-md md:text-lg">
        <header className="flex justify-between items-center mb-2">
          <div className="flex items-center">
            <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
              <img
                className="mr-2 w-6 h-6 rounded-full"
                src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                alt="Michael Gough"
              />
              Michael Gough
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              <time title="February 8th, 2022">Feb. 8, 2022</time>
            </p>
          </div>
          <button
            id="dropdownComment1Button"
            data-dropdown-toggle="dropdownComment1"
            className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-400 bg-white rounded-sm hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            type="button"
          >
            <EllipsisHorizontalIcon className="w-6" />
            <span className="sr-only">Comment settings</span>
          </button>

          <div
            id="dropdownComment1"
            className="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
          >
            <ul
              className="py-1 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownMenuIconHorizontalButton"
            >
              <li>
                <a
                  href="#"
                  className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Edit
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Remove
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Report
                </a>
              </li>
            </ul>
          </div>
        </header>
        <p className="text-gray-700 dark:text-gray-300">
          Very straight-to-point article. Really worth time reading. Thank you!
          But tools are just the instruments for the UX designers. The knowledge
          of the design tools are as important as the creation of the design
          strategy.
        </p>
        <div className="flex items-center mt-4 space-x-4">
          <button
            type="button"
            className="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400"
          >
            <ChatBubbleLeftRightIcon className="w-6 mr-2" />
            Reply
          </button>
        </div>
      </article>
      <article className="reply p-6 mb-6 ml-6 lg:ml-12 text-md md:text-lg border-l-2 border-gray-200 dark:border-gray-800">
        <header className="flex justify-between items-center mb-2">
          <div className="flex items-center">
            <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
              <img
                className="mr-2 w-6 h-6 rounded-full"
                src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                alt="Jese Leos"
              />
              Jese Leos
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              <time title="February 12th, 2022">Feb. 12, 2022</time>
            </p>
          </div>
          <button
            id="dropdownComment2Button"
            data-dropdown-toggle="dropdownComment2"
            className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-400 bg-white rounded-md hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            type="button"
          >
            <EllipsisHorizontalIcon className="w-6" />
            <span className="sr-only">Comment settings</span>
          </button>

          <div
            id="dropdownComment2"
            className="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
          >
            <ul
              className="py-1 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownMenuIconHorizontalButton"
            >
              <li>
                <a
                  href="#"
                  className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Edit
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Remove
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Report
                </a>
              </li>
            </ul>
          </div>
        </header>
        <p className="text-gray-700 dark:text-gray-300">
          Much appreciated! Glad you liked it ☺️
        </p>
        <div className="flex items-center mt-4 space-x-4">
          <button
            type="button"
            className="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400"
          >
            <ChatBubbleLeftRightIcon className="w-6 mr-2" />
            Reply
          </button>
        </div>
      </article>
    </section>
  );
}

export default CommentsSection;
