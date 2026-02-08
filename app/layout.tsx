// app/layout.tsx
import type { Metadata } from "next";
import { Noto_Sans_JP, Noto_Serif_JP } from "next/font/google";
import "./globals.css";

const notoSerif = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-serif",
});

const notoSans = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
});

/**
 * 🔧 本番ドメインに必ず変更すること
 * 例: https://healing-studio.jp
 */
const siteUrl = "https://YOUR-DOMAIN.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: "HEALING STUDIO | 株式会社tweedia",
  description:
    "株式会社tweediaが提供するヒーリング／ボディワーク。静かな空間で、からだの声に寄り添う時間を。",

  openGraph: {
    title: "HEALING STUDIO | 株式会社tweedia",
    description:
      "ヒーリング／ボディワーク。静かな空間で、からだの声に寄り添う時間を。",
    url: siteUrl,
    siteName: "HEALING STUDIO",
    locale: "ja_JP",
    type: "website",
    // OGP画像を用意したら有効化
    // images: [
    //   {
    //     url: "/og.png",
    //     width: 1200,
    //     height: 630,
    //     alt: "HEALING STUDIO",
    //   },
    // ],
  },

  twitter: {
    card: "summary_large_image",
    title: "HEALING STUDIO | 株式会社tweedia",
    description:
      "株式会社tweediaが提供するヒーリング／ボディワーク。",
    // images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body
        className={`${notoSerif.variable} ${notoSans.variable} antialiased`}
        style={{
          fontFamily:
            'var(--font-serif), "Hiragino Mincho ProN", "Yu Mincho", serif',
        }}
      >
        {children}
      </body>
    </html>
  );
}
