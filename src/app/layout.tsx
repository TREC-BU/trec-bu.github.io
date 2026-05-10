import type { Metadata } from "next";
import Link from "next/link";
import { Raleway, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["700"],
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Terrier Ride Engineering Club",
  description: "Terrier Ride Engineering Club at Boston University",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${raleway.variable} ${sourceSans.variable} h-full`}>
      <body className="min-h-full flex flex-col font-source-sans">
        <nav className="flex items-center gap-6 px-8 py-2" style={{ backgroundColor: "rgb(187 39 26)" }}>
          <Link href="/" className="hover:opacity-70 transition-opacity">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.png" alt="TREC logo" width={80} height={80} className="rounded-full object-cover" />
          </Link>
          <Link href="/about" className="font-source-sans text-sm text-white hover:opacity-70 transition-opacity">
            About
          </Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
