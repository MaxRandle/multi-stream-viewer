import "@styles/globals.scss";
import "@styles/tailwind-directives.scss";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cross-platform multiple stream viewer",
  description: "Watch multiple streams at once from different platforms",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Script src="https://embed.twitch.tv/embed/v1.js" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
