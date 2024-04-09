/** @type {import('next').NextConfig} */
const { withNextVideo } = require("next-video/process");
const { hostname } = require("os");

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337",
        pathname: "/uploads/**/*",
      },
      {
        protocol: "https",
        hostname: "placehold.co",
      },
      {
        protocol: "https",
        hostname: "light-blessing-0333ae3113.media.strapiapp.com",
      },
    ],
  },
};

module.exports = withNextVideo(nextConfig);
