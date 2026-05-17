import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "lxlnvkv63w.ufs.sh",
      },
      {
        protocol: "https",
        hostname: "utfs.io",
      },
    ],
  },
};

export default withNextIntl(nextConfig);
