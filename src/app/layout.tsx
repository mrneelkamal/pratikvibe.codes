import type { Metadata } from "next";
import { spaceGrotesk, inter, jetbrainsMono } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pratik | From Average Engineer to 10x Builder",
  description:
    "I'm Pratik, an engineering student from India turning my last semester into a launchpad. Follow my journey of vibe coding, building in public, and becoming an AdmaX engineer.",
  keywords: [
    "Pratik",
    "vibe coding",
    "engineering student",
    "India",
    "10x engineer",
    "portfolio",
    "building in public",
  ],
  openGraph: {
    title: "Pratik | From Average Engineer to 10x Builder",
    description:
      "Follow my journey of vibe coding my way from an average engineering student to a 10x builder.",
    type: "website",
    url: "https://pratikvibe.codes",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pratik | From Average Engineer to 10x Builder",
    description:
      "Follow my journey of vibe coding my way from an average engineering student to a 10x builder.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
