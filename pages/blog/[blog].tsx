import moment from "moment";
import { GetStaticProps, GetStaticPaths } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Layout from "../../components/layout";
import useDarkmode from "../../hooks/darkmode";
import sanity from "../../utils/sanityClient";
import { urlForSanityImage } from "../../utils/sanityImageBuilder";
import PortableText from "react-portable-text";
import { ArrowLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import CommentsSection from "../../sections/blog/comments.blog.section";
import ScrollTopButton from "../../components/scrollTopButton.component";
import { getSinglePost } from "../../utils/sanityQueries";
import { Post } from "../../utils/interfaces";
import RelatedPosts from "../../components/blog/relatedPosts.blog.component";

type Props = {
  post: Post;
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const {
    // @ts-ignore
    params: { blog },
  } = ctx;
  const query = getSinglePost(blog);
  const posts = await sanity.fetch(query);
  return { props: { post: posts[0] } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await sanity.fetch(`*[_type== 'post']{slug}`);

  return {
    paths: paths.map((path: any) => ({
      params: {
        blog: path.slug.current,
      },
    })),
    fallback: false,
  };
};

function BlogDetailsPage(props: Props) {
  const { post } = props;
  const router = useRouter();
  const isDark = useDarkmode();
  console.log(post.categories);

  return (
    <>
      <Head>
        <title>Kenny Hoft -- {post.title}</title>
      </Head>
      <Layout>
        <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900 mx-auto max-w-4xl">
          <div className="flex flex-col px-4">
            <Link
              href={"/blog"}
              className="my-8 items-center flex font-semibold text-logo-shade1 hover:text-logo-shade4 transition"
            >
              <ArrowLeftIcon className="w-7 h-7" />
              <span className="ml-2"> Back to blog</span>
            </Link>

            <article className="w-full">
              <header className="flex items-center justify-between">
                <div className="mb-4 lg:mb-6 not-format flex justify-between flex-col">
                  <p className="flex items-center">
                    {post.categories.map((category) => (
                      <span className="text-logo-shade3 text-lg mr-2">
                        {category.title}
                      </span>
                    ))}
                  </p>
                  <h1 className="mb-2 text-6xl font-extrabold leading-tight text-gray-700 dark:text-gray-300">
                    {post.title}
                  </h1>
                  <address className="my-6 flex items-center not-italic">
                    <div className="inline-flex items-center mr-3 text-sm">
                      <Image
                        className="mr-4 rounded-sm"
                        width={45}
                        height={45}
                        src={urlForSanityImage(post.author.image.asset)
                          .width(150)
                          .url()}
                        alt={post.author.name}
                      />
                      <div>
                        <p className="text-2xl font-bold text-gray-700 dark:text-gray-300">
                          {post.author.name}
                        </p>
                        <p className="text-xl font-light text-gray-500 dark:text-gray-400">
                          Software Developer at Bits Please Technologies
                        </p>
                      </div>
                    </div>
                  </address>{" "}
                  <div className="">
                    <h3 className="dark:text-gray-400 text-lg text-gray-700 mb-1">
                      Share this article via:
                    </h3>
                    <div className="flex items-center space-x-2 w-3/4 flex-wrap">
                      {/*Facebook */}
                      <button
                        type="button"
                        className="mb-2 bg-[#1877f2] inline-block rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                        </svg>
                      </button>{" "}
                      {/*LinkedIn */}
                      <button
                        type="button"
                        className="mb-2 bg-[#0077b5] inline-block rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                        </svg>
                      </button>{" "}
                      {/*Pinterest */}
                      <button
                        type="button"
                        className="mb-2 bg-[#e60023] inline-block rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </button>{" "}
                      {/*Telegram */}
                      <button
                        type="button"
                        className="mb-2 bg-[#0088cc] inline-block rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
                      >
                        <svg
                          className="h-4 w-4"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          xmlSpace="preserve"

                          // style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"
                        >
                          <path
                            id="telegram-1"
                            d="M18.384,22.779c0.322,0.228 0.737,0.285 1.107,0.145c0.37,-0.141 0.642,-0.457 0.724,-0.84c0.869,-4.084 2.977,-14.421 3.768,-18.136c0.06,-0.28 -0.04,-0.571 -0.26,-0.758c-0.22,-0.187 -0.525,-0.241 -0.797,-0.14c-4.193,1.552 -17.106,6.397 -22.384,8.35c-0.335,0.124 -0.553,0.446 -0.542,0.799c0.012,0.354 0.25,0.661 0.593,0.764c2.367,0.708 5.474,1.693 5.474,1.693c0,0 1.452,4.385 2.209,6.615c0.095,0.28 0.314,0.5 0.603,0.576c0.288,0.075 0.596,-0.004 0.811,-0.207c1.216,-1.148 3.096,-2.923 3.096,-2.923c0,0 3.572,2.619 5.598,4.062Zm-11.01,-8.677l1.679,5.538l0.373,-3.507c0,0 6.487,-5.851 10.185,-9.186c0.108,-0.098 0.123,-0.262 0.033,-0.377c-0.089,-0.115 -0.253,-0.142 -0.376,-0.064c-4.286,2.737 -11.894,7.596 -11.894,7.596Z"
                          />
                        </svg>
                      </button>
                      {/*Reddit */}
                      <button
                        type="button"
                        className="mb-2 bg-[#ff4500] inline-block rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M24 11.779c0-1.459-1.192-2.645-2.657-2.645-.715 0-1.363.286-1.84.746-1.81-1.191-4.259-1.949-6.971-2.046l1.483-4.669 4.016.941-.006.058c0 1.193.975 2.163 2.174 2.163 1.198 0 2.172-.97 2.172-2.163s-.975-2.164-2.172-2.164c-.92 0-1.704.574-2.021 1.379l-4.329-1.015c-.189-.046-.381.063-.44.249l-1.654 5.207c-2.838.034-5.409.798-7.3 2.025-.474-.438-1.103-.712-1.799-.712-1.465 0-2.656 1.187-2.656 2.646 0 .97.533 1.811 1.317 2.271-.052.282-.086.567-.086.857 0 3.911 4.808 7.093 10.719 7.093s10.72-3.182 10.72-7.093c0-.274-.029-.544-.075-.81.832-.447 1.405-1.312 1.405-2.318zm-17.224 1.816c0-.868.71-1.575 1.582-1.575.872 0 1.581.707 1.581 1.575s-.709 1.574-1.581 1.574-1.582-.706-1.582-1.574zm9.061 4.669c-.797.793-2.048 1.179-3.824 1.179l-.013-.003-.013.003c-1.777 0-3.028-.386-3.824-1.179-.145-.144-.145-.379 0-.523.145-.145.381-.145.526 0 .65.647 1.729.961 3.298.961l.013.003.013-.003c1.569 0 2.648-.315 3.298-.962.145-.145.381-.144.526 0 .145.145.145.379 0 .524zm-.189-3.095c-.872 0-1.581-.706-1.581-1.574 0-.868.709-1.575 1.581-1.575s1.581.707 1.581 1.575-.709 1.574-1.581 1.574z" />
                        </svg>
                      </button>
                      {/*Twitter */}
                      <button
                        type="button"
                        className="mb-2 bg-[#1da1f2] inline-block rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                        </svg>
                      </button>
                      {/* Whatsapp */}
                      <button
                        type="button"
                        className="mb-2 bg-[#128c7e] inline-block rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <Image
                  width={400}
                  height={400}
                  className="rounded-md mx-auto w-max my-10"
                  src={urlForSanityImage(post.mainImage).width(400).url()}
                  alt={post.excerpt}
                />
              </header>{" "}
              <div className="justify-between flex items-center">
                <p className="text-xl text-center font-light text-gray-700 dark:text-gray-300">
                  <time title="February 8th, 2022">
                    {moment(new Date(post._createdAt)).format(
                      "MMMM DD YYYY, hh:mm a"
                    )}
                  </time>
                </p>
                <p className="text-gray-700 font-semibold dark:text-gray-300">
                  {Math.round(post.estimatedReadingTime)} Minute read
                </p>
              </div>
              <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-800"></hr>
              <PortableText
                className="max-w-none prose prose-zinc dark:prose-invert md:prose-lg lg:prose-xl"
                dataset="production"
                projectId="ylwllkb5"
                content={post.body}
                serializers={{
                  h1: (props: any) => (
                    <h1 className="text-2xl font-semibold" {...props} />
                  ),
                  h2: (props: any) => (
                    <h1 className="text-xl font-semibold" {...props} />
                  ),
                  li: ({ children }: any) => (
                    <li className="list-disc">{children}</li>
                  ),
                  link: ({ href, children }: any) => (
                    <a href={href} className="text-log-shade5 hover:underline">
                      {children}
                    </a>
                  ),
                }}
              />
              <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-800"></hr>
              <CommentsSection comments={post.comments} postId={post._id} />
            </article>
          </div>
        </main>

        <RelatedPosts postId={post._id} categories={post.categories} />

        {/* <section className="bg-white dark:bg-gray-900">
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div className="mx-auto max-w-screen-md sm:text-center">
              <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
                Sign up for our newsletter
              </h2>
              <p className="mx-auto mb-8 max-w-2xl font-light text-gray-500 md:mb-12 sm:text-xl dark:text-gray-400">
                Stay up to date with the roadmap progress, announcements and
                exclusive discounts feel free to sign up with your email.
              </p>
              <form action="#">
                <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
                  <div className="relative w-full">
                    <label
                      htmlFor="email"
                      className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Email address
                    </label>
                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                      <svg
                        className="w-5 h-5 text-gray-500 dark:text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                      </svg>
                    </div>
                    <input
                      className="block p-3 pl-10 w-full text-sm text-gray-900 bg-white rounded-sm border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Enter your email"
                      type="email"
                      id="email"
                      required
                    />
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="py-3 px-5 w-full text-sm font-medium text-center text-white rounded-sm border cursor-pointer bg-blue-700 border-blue-600 sm:rounded-none sm:rounded-r-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Subscribe
                    </button>
                  </div>
                </div>
                <div className="mx-auto max-w-screen-sm text-sm text-left text-gray-500 newsletter-form-footer dark:text-gray-300">
                  We care about the protection of your data.{" "}
                  <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Read our Privacy Policy
                  </a>
                  .
                </div>
              </form>
            </div>
          </div>
        </section> */}
      </Layout>{" "}
      <ScrollTopButton />
    </>
  );
}

export default BlogDetailsPage;
