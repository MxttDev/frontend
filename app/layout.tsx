import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../public/globals.css";

const inter = Inter({ subsets: ["latin"] });

type lol = {
  rel: string;
  href: string;
  precedence: string;
};

export const metadata: Metadata = {
  title: "Free Minecraft Server Hosting",
  description: "Pyron",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" date-theme="winter">
      <head><link rel="stylesheet" href="/globals.css"/></head>
      <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=9" />
      <body className={inter.className}>{children}</body>
      <link rel="icon" type="x-icon" href="/favicon.ico"></link>

    </html>
  );
}
