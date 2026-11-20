import React from "react";
import Head from "next/head";
import Link from "next/link";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

const ErrorPage = ({
  code,
  title,
  message,
}: {
  code: string;
  title: string;
  message: string;
}) => (
  <>
    <Head>
      <title>{`${title} -- Kenny Hoft`}</title>
      <meta name="robots" content="noindex" />
    </Head>
    <main className="relative flex min-h-screen flex-col overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 top-0 -z-10 h-[800px] w-[800px] bg-[radial-gradient(closest-side,rgb(var(--sun)/0.2),transparent)]"
      />
      <div className="container-site flex flex-1 flex-col justify-center py-24">
        <p className="label mb-6">
          <span className="text-accent">(Error {code})</span> {title}
        </p>
        <h1 className="text-[clamp(7rem,30vw,22rem)] font-semibold leading-[0.8] tracking-[-0.07em]">
          {code}
          <span className="text-accent">.</span>
        </h1>
        <div className="mt-12 flex flex-wrap items-end justify-between gap-8 border-t hairline pt-8">
          <p className="max-w-md text-xl text-muted">{message}</p>
          <Link
            href="/"
            className="group flex items-center gap-4 rounded-full bg-accent py-2 pl-7 pr-2 text-lg font-medium text-accent-ink"
          >
            Back to homepage
            <span className="grid h-11 w-11 place-items-center rounded-full bg-accent-ink text-accent transition-transform duration-300 group-hover:rotate-45">
              <ArrowUpRightIcon className="h-5 w-5" strokeWidth={2} />
            </span>
          </Link>
        </div>
      </div>
    </main>
  </>
);

export default ErrorPage;
