import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Makai O'Neill | Designer + Developer",
    short_name: "Makai O'Neill",
    description:
      "Apps, websites, and tools designed to feel simple, useful, and genuinely finished.",
    start_url: "/",
    display: "standalone",
    background_color: "#f3f5f6",
    theme_color: "#f3f5f6",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
