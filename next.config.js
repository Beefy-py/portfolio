/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    MY_SECRET_TOKEN: process.env.MY_SECRET_TOKEN,
  },
  images: {
    domains: ["cdn.sanity.io"],
  },
};
