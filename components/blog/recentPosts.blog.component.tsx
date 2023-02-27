import moment from "moment";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Post } from "../../utils/interfaces";
import sanity from "../../utils/sanityClient";

const RecentPosts = () => {
  const [recentPosts, setRecentPosts] = useState([]);
  useEffect(() => {
    async function getRecentPosts() {
      const oneMonth = 2592000000; // in milliseconds
      const dateOneMonthAgo = new Date(Date.now() - oneMonth);
      const formattedDateOneMonthAgo =
        moment(dateOneMonthAgo).format("YYYY-MM-DD");

      const query = `*[_type=='post' && _createdAt > '${formattedDateOneMonthAgo}']{
        _createdAt,
        title,
        slug
        }`;
      const posts = await sanity.fetch(query);
      setRecentPosts(posts);
    }

    getRecentPosts();
  }, []);

  return (
    <>
      {recentPosts.length ? (
        <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
          {recentPosts.map((post: Post) => (
            <li key={post._id}>
              <Link
                href={`blog/${post.slug.current}`}
                className="hover:underline underline-offset-1 text-lg decoration-logo-shade5"
              >
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-700 dark:text-gray-300">
          There are no recent posts
        </p>
      )}
    </>
  );
};

export default RecentPosts;
