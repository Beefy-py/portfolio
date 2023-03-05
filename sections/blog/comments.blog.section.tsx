import React, { useState, useEffect } from "react";
import {
  ChatBubbleBottomCenterIcon,
  ChatBubbleBottomCenterTextIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/outline";

interface FormInput {
  name: string;
  email: string;
  comment: string;
}

import { useForm, SubmitHandler } from "react-hook-form";
import LoadingSpinner from "../../components/loadingSpinner.component";
import CommentComponent from "../../components/blog/comment.blog.component";
import { Comment } from "../../utils/interfaces";

const initialState = {
  displayToast: { display: false, type: "", message: "" },
  isLoading: false,
};

function CommentsSection({
  postId,
  postSlug,
  comments,
}: {
  postId: string;
  postSlug: string;
  comments: Array<Comment>;
}) {
  const [state, setState] = useState(initialState);
  const [stateComments, setStateComments] = useState<any[]>([]);

  const { isLoading, displayToast } = state;

  useEffect(() => {
    setStateComments(comments);
  }, []);

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
      const response = await fetch(
        `/api/comment?secret=${process.env.MY_SECRET_TOKEN!}`,
        {
          method: "POST",
          body: JSON.stringify({ ...data, postId, postSlug }),
        }
      );
      const responseBody = await response.json();

      if (!response.ok) throw Error(responseBody.message);

      setState((prev) => ({
        ...prev,
        displayToast: {
          display: true,
          type: "success",
          message: responseBody.message,
        },
        isLoading: false,
      }));

      setStateComments((prev) => [
        {
          _createdAt: new Date(),
          _id: "id",
          commenterEmail: data.email, //session?.user?.email,
          commenterImage: "", //session?.user?.image,
          commenterName: data.name, //session?.user?.name,
          body: data["comment"],
          replys: [],
        },
        ...prev,
      ]);
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
    <section className="mx-auto px-4 max-w-4xl">
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
          className="transition inline-flex items-center py-2.5 px-4 text-sm md:text-md font-medium text-center text-white bg-logo-shade2 ring-0 rounded-sm outline-offset-2 focus:outline-2 focus:outline-logo-shade1 hover:bg-logo-shade1"
        >
          Post comment
          {isLoading ? (
            <LoadingSpinner />
          ) : (
            <ChatBubbleBottomCenterTextIcon className="ml-2 w-5" />
          )}
        </button>
      </form>

      {stateComments.map((comment) => {
        return (
          <CommentComponent stateComments={stateComments} comment={comment} />
        );
      })}
    </section>
  );
}

export default CommentsSection;
