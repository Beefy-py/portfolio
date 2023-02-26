import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Category, Post } from "../../utils/interfaces";
import sanity from "../../utils/sanityClient";
import moment from "moment";

const RelatedPosts = ({
  categories,
  postId,
}: {
  categories: Category[];
  postId: string;
}) => {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    async function getRelatedPosts() {
      const categoryStrings = categories.map(
        (item) => `"${item.slug.current}"`
      );
      const query = `*[_id != '${postId}' && count((categories[]->slug.current)[@ in [${categoryStrings}]]) > 0]{
        ...,
        categories[]->,
        "estimatedReadingTime": length(pt::text(body)) / 5 / 200,
        }`;
      const posts = await sanity.fetch(query);
      console.log(posts);
      setRelatedPosts(posts);
    }

    getRelatedPosts();
  }, [postId]);

  return (
    <>
      {relatedPosts.length ? (
        <section className="mx-auto max-w-4xl">
          <h2 className="text-lg lg:text-xl text-gray-700 dark:text-gray-200">
            Related Posts
          </h2>
          <div className="mt-4 grid grid-cols-2 gap-2">
            {relatedPosts.map((post: Post) => (
              <Link
                key={post._id}
                href={`/blog/${post.slug.current}`}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg p-5 hover:shadow-sm transition border dark:border-gray-700 hover:border-logo-shade4 dark:hover:border-logo-shade4"
              >
                <div className="flex items-center justify-between">
                  <p className="text-gray-500">
                    {moment(new Date(post._createdAt)).fromNow()}
                  </p>
                </div>{" "}
                <p className="text-lg text-soft-green">
                  {" "}
                  {post.categories.map((category) => (
                    <span className="text-gray-600 dark:text-gray-400 text-normal mr-2">
                      {category.title}
                    </span>
                  ))}
                </p>
                <h1 className="mt-2 mb-1 text-xl text-gray-800 font-light dark:text-gray-300">
                  {" "}
                  {post.title}
                </h1>{" "}
                <p className="text-logo-shade4">
                  {Math.round(post.estimatedReadingTime)} Minute read
                </p>
              </Link>
            ))}
          </div>
        </section>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default RelatedPosts;
