/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    MY_SECRET_TOKEN: process.env.MY_SECRET_TOKEN,
    BASE_URL: process.env.BASE_URL,
  },
  images: {
    domains: ["cdn.sanity.io"],
  },
};
