// app/robots.ts
import type { MetadataRoute } from "next";

const siteUrl = "https://clinic-site-ebon.vercel.app"; // ←本番ドメインに変更

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
