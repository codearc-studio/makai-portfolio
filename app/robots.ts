import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://makai.codearc.studio/sitemap.xml",
    host: "https://makai.codearc.studio",
  };
}
