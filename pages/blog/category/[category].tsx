import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import useDarkmode from "../../../hooks/darkmode";
import { getPostsByCategories } from "../../../utils/sanityQueries";
import sanity from "../../../utils/sanityClient";
import { Post } from "../../../utils/interfaces";
import { useRouter } from "next/router";
import Layout from "../../../components/layout";
import Head from "next/head";
import Link from "next/link";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import moment from "moment";
import Image from "next/image";
import { urlForSanityImage } from "../../../utils/sanityImageBuilder";

type Props = {
  posts: [Post];
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await sanity.fetch(`*[_type== 'category']{slug}`);
  return {
    paths: paths.map((path: any) => ({
      params: {
        category: path.slug.current,
      },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const {
    // @ts-ignore
    params: { category },
  } = ctx;
  console.log(category);
  const query = getPostsByCategories(category);
  const posts = await sanity.fetch(query);
  return { props: { posts: posts } };
};

function CategoryPostsPage(props: Props) {
  const { posts } = props;
  const { query } = useRouter();
  const isDark = useDarkmode();
  return (
    <>
      <Head>
        <title>Blog - Posts in {query.category}</title>
      </Head>
      <Layout>
        <main className=" bg-white dark:bg-gray-900 mx-auto max-w-4xl">
          <div className="flex flex-col px-4">
            <Link
              href={"/blog"}
              className="my-8 items-center flex font-semibold text-logo-shade1 hover:text-logo-shade4 transition"
            >
              <ArrowLeftIcon className="w-7 h-7" />
              <span className="ml-2"> All Articles</span>
            </Link>
          </div>
          <h1 className="text-2xl text-center my-1 text-gray-700 dark:text-gray-300">
            Explore all my articles in category:{" "}
            <span className="text-logo-shade1">{query.category}</span>
          </h1>
          <section className="my-4 divide-y-2 space-y-4 dark:divide-gray-700">
            {posts.length ? (
              posts.map((post) => (
                <div key={post._id} className="rounded-sm flex w-full p-6">
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
              ))
            ) : (
              <h2>There are no posts in this category</h2>
            )}
          </section>
        </main>
      </Layout>
    </>
  );
}

export default CategoryPostsPage;
