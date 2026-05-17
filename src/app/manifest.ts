import type { MetadataRoute } from "next";
import { templateConfig } from "@/template-config";

export default function manifest(): MetadataRoute.Manifest {
  const name = templateConfig.productName;

  return {
    name,
    short_name: templateConfig.appName,
    description: templateConfig.description,
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
