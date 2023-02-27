import React, { useState, useRef, useEffect } from "react";
import sanity from "../../utils/sanityClient";
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";
import Layout from "../../components/layout";
import Link from "next/link";
import {
  ArrowRightIcon,
  ExclamationTriangleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import SearchComponent from "../../components/search.component";
import useDarkmode from "../../hooks/darkmode";
import { pick } from "lodash";
import Image from "next/image";
import { urlForSanityImage } from "../../utils/sanityImageBuilder";
import ScrollTopButton from "../../components/scrollTopButton.component";
import { getAllCategories, getAllPosts } from "../../utils/sanityQueries";
import RecentPosts from "../../components/blog/recentPosts.blog.component";
import { Category, Post } from "../../utils/interfaces";
import moment from "moment";

type Props = {
  posts: [Post];
  categories: [Category];
};

export const getStaticProps: GetStaticProps = async () => {
  const queryPosts = getAllPosts();
  const posts = await sanity.fetch(queryPosts);

  const queryCategories = getAllCategories();
  const categories = await sanity.fetch(queryCategories);

  return {
    props: { posts, categories },
  };
};

function BlogPage(props: Props) {
  const [showNews, setShowNews] = useState(true);
  const isDark = useDarkmode();
  const { posts, categories } = props;

  return (
    <>
      <Layout>
        <div className="grid grid-cols-12 gap-4 p-4 relative max-w-screen-2xl mx-auto">
          {showNews && (
            <div
              id="toast-default"
              className="col-span-full border border-gray-200 dark:border-gray-700 flex md:flex-row flex-col items-center w-full p-4 text-gray-500 bg-white rounded-sm shadow dark:text-gray-400 dark:bg-gray-800"
              role="alert"
            >
              <div className="flex-shrink-0 text-orange-500">
                <ExclamationTriangleIcon className="w-8" />
              </div>
              <h1 className="ml-3 text-sm font-normal lg:text-md text-orange-500 uppercase">
                Disclaimer:
              </h1>
              <h1 className="ml-3 text-sm font-normal lg:text-md">
                All the blog posts are dummy posts at the moment. Including the
                comments and replies.
              </h1>
              <button
                type="button"
                onClick={() => setShowNews(false)}
                className="ml-auto outline-none -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
                data-dismiss-target="#toast-default"
                aria-label="Close"
              >
                <XMarkIcon className="w-8" />
              </button>
            </div>
          )}

          <aside className="col-span-3 hidden lg:block" aria-label="Sidenav">
            <div className="sticky top-3 rounded-sm overflow-y-auto py-5 px-3 h-max bg-white border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
              <h1 className="text-gray-500 dark:text-gray-400">
                Blog by Kenny Hoft
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                Blog posts and articles
              </p>
            </div>
          </aside>
          <section className="col-span-full md:col-span-8 lg:col-span-6">
            <SearchComponent />
            <p className="text-gray-800 dark:text-gray-200 py-3 border-y-2 border-gray-200 dark:border-gray-700 my-2">
              {posts.length} Posts in total
            </p>
            {posts.map((post) => (
              <div
                key={post._id}
                className="rounded-sm flex w-full p-6 bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700"
              >
                <div className="post-image">
                  <Image
                    width={200}
                    height={200}
                    className="rounded-md"
                    src={urlForSanityImage(post.mainImage).width(200).url()}
                    alt={post.excerpt}
                  />
                </div>
                <div className="post-content ml-3">
                  {post.categories.map((category) => (
                    <span className="text-logo-shade2 text-normal mr-2">
                      {category.title}
                    </span>
                  ))}
                  <Link href={`/blog/${post.slug.current}`}>
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white hover:text-logo-shade4 dark:hover:text-logo-shade4 transition w-max">
                      {post.title}
                    </h5>
                  </Link>
                  <p className="my-1 italic dark:text-gray-400 text-gray-600">
                    {moment(new Date(post._createdAt)).format("MMMM DD YYYY")}
                  </p>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <Link
                      href={`/blog/${post.slug.current}`}
                      className="inline-flex items-center text-normal font-medium text-center transititon text-logo-shade1 hover:text-logo-shade4 hover:animate-pulse"
                    >
                      Read more
                      <ArrowRightIcon className="ml-2 w-6" />
                    </Link>
                    <p className="text-gray-500 font-semibold">
                      {Math.round(post.estimatedReadingTime)} Minute read
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </section>
          <aside className=" md:col-span-4 lg:col-span-3 hidden md:block">
            <div className="sticky top-3">
              <div className="rounded-sm shadow-sm overflow-y-auto py-5 px-3 h-full bg-white border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                <h2 className="text-lg text-gray-700 dark:text-gray-400">
                  Recommended Topics
                </h2>
                <p className="inline-flex flex-wrap items-center">
                  {categories.map((category) => (
                    <Link
                      href={`blog/category/${category.title}`}
                      className="text-gray-800 mt-1 mr-1 rounded-md px-3 py-.0.5 bg-logo-shade3 border-logo-shade4 border-2"
                    >
                      {category.title}
                    </Link>
                  ))}
                </p>
              </div>
              <div
                className={`mt-3 rounded-sm shadow-sm overflow-y-auto py-5 px-3 h-full bg-white border border-gray-200 dark:bg-gray-800 dark:border-gray-700`}
              >
                <h2 className="mb-2 text-lg text-gray-700 dark:text-gray-400">
                  Recent blog posts
                </h2>{" "}
                <RecentPosts />
              </div>
            </div>
          </aside>
        </div>
      </Layout>
      <ScrollTopButton />
    </>
  );
}

export default BlogPage;
