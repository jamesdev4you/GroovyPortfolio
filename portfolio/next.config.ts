import type { NextConfig } from "next";

{/* Revisit https://nextjs.org/docs/app/api-reference/config/next-config-js/turbopack#configuring-webpack-loaders */}

const nextConfig: NextConfig = {
  /*config*/
  turbopack: {
    rules: {
      "*.svg": {
        loaders: ["@svgr/webpack"],
        as: "*.js",
      },
    },
  },
};

export default nextConfig;
