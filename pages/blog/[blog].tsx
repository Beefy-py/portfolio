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
import {
  ChatBubbleBottomCenterTextIcon,
  ChatBubbleLeftRightIcon,
  ChevronRightIcon,
  EllipsisHorizontalIcon,
} from "@heroicons/react/24/outline";

type Props = {
  post: {
    _createdAt: string;
    _id: string;
    _rev: string;
    _type: string;
    _updatedAt: string;
    author: { image: { _type: string; asset: [Object] }; name: string };
    body: [
      {
        _key: string;
        _type: string;
        children: [[Object]];
        markDefs: [];
        style: string;
      }
    ];
    categories: [[Object]];
    excerpt: string;
    mainImage: { _type: string; asset: [Object] };
    slug: { _type: string; current: string };
    title: string;
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const {
    // @ts-ignore
    params: { blog },
  } = ctx;
  const query = `*[_type=='post' && slug.current=='${blog}']{
    author->{name,image},
    _createdAt,
    _updatedAt,
    excerpt
    ,categories,
    body,
    mainImage,
    slug,
    title}`;
  const posts = await sanity.fetch(query);
  console.log(posts[0]);
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
  console.log(post);
  const router = useRouter();
  const isDark = useDarkmode();

  let breadCrumbItems: any = router.asPath.split("/").slice(1);
  breadCrumbItems = breadCrumbItems.map((item: any, index: number) => {
    if (index + 1 === breadCrumbItems.length) {
      return { name: post.title, path: `#` };
    }
    return { name: item, path: `/${item}` };
  });

  return (
    <>
      <Head>
        <title>Kenny Hoft -- {post.title}</title>
      </Head>
      <Layout>
        <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900">
          <div className="flex flex-col px-4 mx-auto max-w-screen-xl">
            <nav className="flex mb-10 max-w mx-auto" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 md:space-x-2">
                {breadCrumbItems.map((item: any, index: number) => (
                  <li key={item.name + index}>
                    <div className="flex items-center">
                      <Link
                        href={`${item.path}`}
                        className={`mr-1 text-md md:text-lg font-medium text-gray-700 hover:text-logo-shade4 dark:text-gray-400 dark:hover:text-logo-shade4`}
                      >
                        {item.name === "blog" ? "Home" : item.name}
                      </Link>{" "}
                      {index + 1 !== breadCrumbItems.length && (
                        <ChevronRightIcon className="w-5 h-5 text-gray-500" />
                      )}
                    </div>
                  </li>
                ))}
              </ol>
            </nav>
            <article className="mx-auto w-full max-w-2xl">
              {/* <Image
                width={400}
                height={400}
                className="rounded-md mx-auto w-max my-10"
                src={urlForSanityImage(post.mainImage).width(400).url()}
                alt={post.excerpt}
              /> */}
              <header className="mb-4 lg:mb-6 not-format">
                <address className="flex items-center not-italic">
                  <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
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
                      <a
                        href="#"
                        rel="author"
                        className="text-xl font-bold text-gray-700 dark:text-gray-200"
                      >
                        {post.author.name}
                      </a>
                      <p className="text-base font-light text-gray-500 dark:text-gray-400">
                        Software Developer at Bits Please Technologies
                      </p>
                      <p className="text-base font-light text-gray-500 dark:text-gray-400">
                        <time title="February 8th, 2022">
                          {moment(new Date(post._createdAt)).format(
                            "MMMM DD YYYY"
                          )}
                        </time>
                      </p>
                    </div>
                  </div>
                </address>
                <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-800"></hr>
                <h1 className="mb-2 text-3xl font-extrabold leading-tight text-gray-600 lg:mb-6 lg:text-4xl dark:text-gray-400">
                  {post.title}
                </h1>
              </header>
              <PortableText
                className="prose prose-zinc dark:prose-invert md:prose-lg lg:prose-xl"
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
              <section className="">
                <div className="flex justify-between items-center mb-3">
                  <h2 className="text-lg lg:text-xl text-gray-700 dark:text-gray-200">
                    Discussion (20)
                  </h2>
                </div>
                <form className="mb-6">
                  <div className="py-2 px-4 mb-4 bg-white rounded-sm border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                    <label htmlFor="comment" className="sr-only">
                      Your comment
                    </label>
                    <textarea
                      id="comment"
                      rows={6}
                      className="px-0 w-full text-md text-gray-900 border-0 outline-none focus:ring-0 dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                      placeholder="Write a comment..."
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center py-2.5 px-4 text-sm md:text-normal font-medium text-center text-white bg-logo-shade2 rounded-sm focus:ring-4 focus:ring-logo-shade5 hover:bg-logo-shade1"
                  >
                    Post comment
                    <ChatBubbleBottomCenterTextIcon className="ml-2 w-5" />
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
                    Very straight-to-point article. Really worth time reading.
                    Thank you! But tools are just the instruments for the UX
                    designers. The knowledge of the design tools are as
                    important as the creation of the design strategy.
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
            </article>
          </div>
        </main>

        <aside
          aria-label="Related articles"
          className="py-8 lg:py-24 bg-gray-50 dark:bg-gray-800"
        >
          <div className="px-4 mx-auto max-w-screen-xl">
            <h2 className="mb-8 text-2xl font-bold text-gray-900 dark:text-white">
              Related articles
            </h2>
            <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
              <article className="max-w-xs">
                <a href="#">
                  <img
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-1.png"
                    className="mb-5 rounded-sm"
                    alt="Image 1"
                  />
                </a>
                <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                  <a href="#">Our first office</a>
                </h2>
                <p className="mb-4 font-light text-gray-500 dark:text-gray-400">
                  Over the past year, Volosoft has undergone many changes! After
                  months of preparation.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center font-medium underline underline-offset-4 text-blue-600 dark:text-blue-500 hover:no-underline"
                >
                  Read in 2 minutes
                </a>
              </article>
              <article className="max-w-xs">
                <a href="#">
                  <img
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-2.png"
                    className="mb-5 rounded-sm"
                    alt="Image 2"
                  />
                </a>
                <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                  <a href="#">Enterprise design tips</a>
                </h2>
                <p className="mb-4 font-light text-gray-500 dark:text-gray-400">
                  Over the past year, Volosoft has undergone many changes! After
                  months of preparation.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center font-medium underline underline-offset-4 text-blue-600 dark:text-blue-500 hover:no-underline"
                >
                  Read in 12 minutes
                </a>
              </article>
              <article className="max-w-xs">
                <a href="#">
                  <img
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-3.png"
                    className="mb-5 rounded-sm"
                    alt="Image 3"
                  />
                </a>
                <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                  <a href="#">We partnered with Google</a>
                </h2>
                <p className="mb-4 font-light text-gray-500 dark:text-gray-400">
                  Over the past year, Volosoft has undergone many changes! After
                  months of preparation.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center font-medium underline underline-offset-4 text-blue-600 dark:text-blue-500 hover:no-underline"
                >
                  Read in 8 minutes
                </a>
              </article>
              <article className="max-w-xs">
                <a href="#">
                  <img
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-4.png"
                    className="mb-5 rounded-sm"
                    alt="Image 4"
                  />
                </a>
                <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                  <a href="#">Our first project with React</a>
                </h2>
                <p className="mb-4 font-light text-gray-500 dark:text-gray-400">
                  Over the past year, Volosoft has undergone many changes! After
                  months of preparation.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center font-medium underline underline-offset-4 text-blue-600 dark:text-blue-500 hover:no-underline"
                >
                  Read in 4 minutes
                </a>
              </article>
            </div>
          </div>
        </aside>

        <section className="bg-white dark:bg-gray-900">
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
        </section>
      </Layout>
    </>
  );
}

export default BlogDetailsPage;
