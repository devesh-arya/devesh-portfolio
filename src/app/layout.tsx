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
  metadataBase: new URL("https://devesharya.vercel.app"),

  title: "Devesh Arya — Front-End Developer",

  description:
    "Front-End Developer with 5+ years of experience building scalable, responsive web applications using React.js, Next.js, and TypeScript. Based in British Columbia, Canada.",

  alternates: {
    canonical: "/",
  },

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },

  openGraph: {
    title: "Devesh Arya — Front-End Developer",
  description:
    "Front-End Developer with 5+ years of experience building scalable, responsive, and high-performance web applications using React.js, Next.js, TypeScript, and modern frontend technologies. Based in British Columbia, Canada.",
    url: "https://devesharya.vercel.app",
    siteName: "Devesh Arya Portfolio",

    images: [
      {
        url: "https://devesharya.vercel.app/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Devesh Arya - Front-End Developer",
      },
    ],

    locale: "en_CA",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Devesh Arya — Front-End Developer",
    description:
      "Front-End Developer with 5+ years building scalable web applications.",
    images: [
      "https://devesharya.vercel.app/images/og-image.png",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${figtree.variable} font-figtree`}>
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}