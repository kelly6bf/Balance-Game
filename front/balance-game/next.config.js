const withTwin = require("./withTwin.js");

const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/server/:path*",
        destination: "http://3.38.88.17:8080/:path*",
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "spadeworker-storage.s3.ap-northeast-2.amazonaws.com",
        port: "",
        pathname: "/balance-game/*",
      },
    ],
  },
};

module.exports = withTwin(nextConfig);
