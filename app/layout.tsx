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

export const metadata: Metadata = {
  title: "CLINIC NAME",
  description: "Clinic site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
