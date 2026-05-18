import type { MetadataRoute } from "next";
import { appConfig } from "@/app-config";

export default function manifest(): MetadataRoute.Manifest {
  const name = appConfig.productName;

  return {
    name,
    short_name: appConfig.appName,
    description: appConfig.description,
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#F2F6F9",
    theme_color: "#011B5A",
    icons: [
      {
        src: "/app-icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/app-icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/app-icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
