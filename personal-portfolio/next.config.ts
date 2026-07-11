import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export so the site can be hosted on GitHub Pages.
  output: "export",
  // Set by the deploy workflow to "/<repo-name>" for project pages;
  // empty for local dev and <user>.github.io repos.
  basePath: process.env.NEXT_PUBLIC_BASE_PATH ?? "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
