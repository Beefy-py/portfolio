import React from "react";
import sanity from "../../utils/sanityClient";
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";
import Layout from "../../components/layout";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import SearchComponent from "../../components/search.component";
import useDarkmode from "../../hooks/darkmode";
import { pick } from "lodash";

type Props = {
  posts: [
    {
      _createdAt: Date;
      _id: string;
      _rev: string;
      _type: string;
      _updatedAt: Date;
      author: {
        _ref: string;
        _type: string;
      };
      body: [[Object], [Object]];
      categories: [[Object]];
      mainImage: { _type: string; asset: [Object] };
      slug: { _type: string; current: string };
      title: string;
    }
  ];
  categories: [
    {
      _createdAt: string;
      _id: string;
      _rev: string;
      _type: string;
      _updatedAt: string;
      description: string;
      title: string;
    }
  ];
};

function BlogPage(props: Props) {
  const isDark = useDarkmode();
  const { posts, categories } = props;

  return (
    <Layout>
      <div className="grid grid-cols-12 gap-4 p-4 relative">
        {" "}
        <aside
          className="col-span-3 hidden lg:grid grid-rows-6"
          aria-label="Sidenav"
        >
          <div className="sticky top-3 rounded-sm overflow-y-auto py-5 px-3 h-full bg-white border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
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
              className="rounded-sm w-full p-6 bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700"
            >
              <Link href={`/blog/${post.slug.current}`}>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white hover:text-logo-shade4 dark:hover:text-logo-shade4 transition w-max">
                  {post.title}
                </h5>
              </Link>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              <Link
                href={`/blog/${post.slug.current}`}
                className="inline-flex items-center text-sm font-medium text-center transititon text-logo-shade1 hover:text-logo-shade4 hover:animate-pulse"
              >
                Read more
                <ArrowRightIcon className="ml-2 w-6" />
              </Link>
            </div>
          ))}
        </section>
        <aside className="md:col-span-4 lg:col-span-3 hidden md:grid grid-rows-6">
          <div className=" sticky top-3 rounded-sm overflow-y-auto py-5 px-3 h-full bg-white border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <h1 className="text-gray-700 dark:text-gray-400">
              Recommended Topics
            </h1>
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
          <div className=" sticky top-[8.5rem] mt-3 rounded-sm overflow-y-auto py-5 px-3 h-full bg-white border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
              Recent blog posts
            </h2>
            <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
              {posts.map((post) => (
                <li key={post._id}>
                  <Link
                    href={`blog/${post.slug.current}`}
                    className="hover:underline underline-offset-1 decoration-logo-shade5"
                  >
                    {post.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await sanity.fetch(`*[_type == "post"]`);
  const categories = await sanity.fetch(`*[_type == "category"]`);

  console.log(categories);

  return {
    props: { posts, categories },
  };
};

export default BlogPage;
