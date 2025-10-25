import type { Metadata } from "next";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import React from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio | HeapReaper",
  description: "My portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
    <main className="relative z-10">
      {children}
    </main>
    </body>
    </html>
  );
}
