import type { Metadata } from "next";
import Image from "next/image";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import React from "react";
import Footer from "@/components/Footer";
import { personalData } from "@/data/personal";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `Portfolio | ${personalData.name}`,
  description: personalData.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <head>
      {/* Plausible analytics */}
      <Script
        defer
        data-domain="heapreaper.nl"
        src="https://analytics.heapreaper.nl/js/script.file-downloads.hash.outbound-links.js"
        strategy="afterInteractive"
      />
      <Script id="plausible-init" strategy="afterInteractive">
        {`
            window.plausible = window.plausible || function() {
              (window.plausible.q = window.plausible.q || []).push(arguments)
            }
          `}
      </Script>
    </head>

    <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
    {/* Background Image */}
    <div className="fixed inset-0 -z-10 bg-gray-900">
      <Image
        src="/hero-bg.svg"
        alt="Background"
        fill
        style={{ objectFit: "cover" }}
        priority
      />
    </div>

    {/* Main content */}
    <main className="px-4 py-4">
      {children}
    </main>

    <Footer />
    </body>
    </html>
  );
}