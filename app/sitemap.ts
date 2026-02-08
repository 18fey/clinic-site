// app/sitemap.ts
import type { MetadataRoute } from "next";

const siteUrl = "https://clinic-site-ebon.vercel.app"; // ←本番ドメインに変更

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    { url: `${siteUrl}/`, lastModified },
    { url: `${siteUrl}/privacy`, lastModified },
    { url: `${siteUrl}/terms`, lastModified },
    { url: `${siteUrl}/law`, lastModified },

    // メニュー詳細ページがあるなら
    { url: `${siteUrl}/phonon-reverence`, lastModified },
  ];
}
