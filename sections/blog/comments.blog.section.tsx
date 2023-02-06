import React, { useState, useEffect } from "react";
import {
  ChatBubbleBottomCenterIcon,
  ChatBubbleBottomCenterTextIcon,
  ChatBubbleLeftRightIcon,
  EllipsisHorizontalIcon,
  ExclamationTriangleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

interface FormInput {
  name: string;
  email: string;
  comment: string;
}

interface Comment {
  _createdAt: string;
  _id: string;
  body: string;
  commenterEmail: string;
  commenterName: string;
  post: [Object];
  replys: [Reply];
}

interface Reply {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
  body: string;
  comment: {
    _ref: string;
    _type: string;
  };
  replierEmail: string;
  replierName: string;
}

import { useForm, SubmitHandler } from "react-hook-form";
import LoadingSpinner from "../../components/loadingSpinner.component";
import moment from "moment";

const initialState = {
  displayToast: { display: false, type: "", message: "" },
  isLoading: false,
};

function CommentsSection({
  postId,
  comments,
}: {
  postId: string;
  comments: Array<Comment>;
}) {
  const [state, setState] = useState(initialState);
  const [replying, setReplying] = useState(false);

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
  const formLableStyle = `block mb-2 text-sm font-medium text-gray-900 dark:text-white`;

  const placeComment: SubmitHandler<FormInput> = async (data) => {
    setState((prev) => ({ ...prev, isLoading: true }));
    try {
      const response = await fetch("/api/comment", {
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
          Discussion ({comments.length})
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
          <label htmlFor="email" className={formLableStyle}>
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
          <label htmlFor="name" className={formLableStyle}>
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
          <label htmlFor="comment" className={formLableStyle}>
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

      {comments.map((comment) => {
        return (
          <>
            <article className="comment p-6 border-t-2 first:border-none border-gray-200 dark:border-gray-700 mb-6 text-md md:text-lg">
              <header className="flex justify-between items-center mb-2">
                <div className="flex items-center">
                  <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                    <img
                      className="mr-2 w-6 h-6 rounded-full"
                      src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                      alt="Michael Gough"
                    />
                    {comment.commenterName}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    <time title="February 8th, 2022">
                      {moment(new Date(comment._createdAt)).format(
                        "MMM, DD YYYY"
                      )}
                    </time>
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
              <p className="text-gray-700 dark:text-gray-300">{comment.body}</p>
              <div className="flex items-center mt-4 space-x-4">
                <button
                  type="button"
                  onClick={() => {
                    setReplying(true);
                  }}
                  className="outline-none flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400"
                >
                  <ChatBubbleLeftRightIcon className="w-6 mr-2" />
                  Reply
                </button>
              </div>
              {replying && (
                <ReplyComponent
                  commentId={"y9vPMxf9gLnmeHqtzCEErL"}
                  commenter={comment.commenterName}
                  show={replying}
                  setShow={setReplying}
                />
              )}
            </article>
            {comment.replys.map((reply) => {
              return (
                <article className="reply p-6 py-3 mb-6 ml-6 lg:ml-12 text-md md:text-lg border-l-2 border-gray-200 dark:border-gray-800">
                  <header className="flex justify-between items-center mb-2">
                    <div className="flex items-center">
                      <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                        <img
                          className="mr-2 w-6 h-6 rounded-full"
                          src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                          alt="Jese Leos"
                        />
                        {reply.replierName}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        <time title="February 12th, 2022">
                          {moment(new Date(reply._createdAt)).fromNow()}
                        </time>
                      </p>
                    </div>
                    <button
                      id="dropdownComment2Button"
                      data-dropdown-toggle="dropdownComment2"
                      className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-400 bg-white rounded-md hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                      type="button"
                    >
                      <EllipsisHorizontalIcon className="w-6" />
                      <span className="sr-only">Reply settings</span>
                    </button>

                    <div
                      id="dropdownReply"
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
                    {reply.body}
                  </p>
                </article>
              );
            })}
          </>
        );
      })}
    </section>
  );
}

const ReplyComponent = ({
  show,
  setShow,
  commentId,
  commenter,
}: {
  show: boolean;
  setShow: Function;
  commentId: string;
  commenter: string;
}) => {
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

  const formInputStyle = `focus:outline-2 outline-offset-3 focus:outline-logo-shade1 py-2 px-4 bg-white rounded-sm border border-gray-200 dark:bg-gray-700 dark:border-gray-600 w-full text-md text-gray-700 outline-none focus:ring-0 dark:text-gray-300 dark:placeholder-gray-500`;
  const formLableStyle = `block mb-2 text-sm font-medium text-gray-900 dark:text-white`;

  const placeReply: SubmitHandler<FormInput> = async (data) => {
    setState((prev) => ({ ...prev, isLoading: true }));
    try {
      const response = await fetch("/api/reply", {
        method: "POST",
        body: JSON.stringify({ ...data, commentId }),
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
    <section className="mt-2 bg-gray-100 dark:bg-gray-800 p-3 border-2 border-gray-300 dark:border-gray-700 rounded-md rounded-tl-none">
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
      <header className="flex items-center justify-between text-gray-700 dark:text-gray-300 my-2">
        <h3>Replying to [{commenter}]'s comment</h3>
        <button
          onClick={() => setShow(false)}
          className="bg-red-200 dark:bg-red-600 border-2 border-red-300 dark:border-red-500 rounded-md"
        >
          <XMarkIcon className="w-7" />
        </button>
      </header>
      <form onSubmit={handleSubmit(placeReply)}>
        <div className="mb-6">
          <label htmlFor="email" className={formLableStyle}>
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
          <label htmlFor="name" className={formLableStyle}>
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
          <label htmlFor="comment" className={formLableStyle}>
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
          Reply
          {isLoading ? (
            <LoadingSpinner />
          ) : (
            <ChatBubbleBottomCenterTextIcon className="ml-2 w-5" />
          )}
        </button>
      </form>
    </section>
  );
};

export default CommentsSection;
