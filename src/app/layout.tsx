import clsx from "clsx";
import type { Metadata } from "next";
import { Geist } from "next/font/google";

import "./globals.css";
import Navbar from "@/components/layouts/Navbar";

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
  fallback: [
    "Inter",
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Roboto",
    "Oxygen",
    "Ubuntu",
    "Cantarell",
    "Fira Sans",
    "Droid Sans",
    "Helvetica Neue",
    "sans-serif",
  ],
});


export const metadata: Metadata = {
  title: "LiquidChatar - Real-time AI Chat Workspace",
  description:
    "Real-time AI chat workspace built for fluid, intelligent team collaboration.",
  icons: ["/favicon.webp"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(geist.className, "antialiased")}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
