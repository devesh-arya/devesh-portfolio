import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import { LangProvider } from "@/hooks/useLang";

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-figtree",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Devesh Arya — Front-End Developer",
  description:
    "Front-End Developer with 5+ years of experience building scalable, responsive web applications using React.js, Next.js, and TypeScript. Based in British Columbia, Canada.",
  keywords: [
    "Front-End Developer",
    "React.js",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "British Columbia",
    "Canada",
    "Web Developer",
  ],
  authors: [{ name: "Devesh Arya" }],
  openGraph: {
    title: "Devesh Arya — Front-End Developer",
    description:
      "Front-End Developer with 5+ years building scalable web apps with React, Next.js & TypeScript.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${figtree.variable} font-figtree`}>
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}
