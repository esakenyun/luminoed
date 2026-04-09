import type { Metadata } from "next";
import React, { Suspense } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import { sitemetadata } from "./metadata";
import { Toaster } from "sonner";
import NavbarWrapper from "@/components/layout/NavbarWrapper";
import { AuthProvider } from "@/components/providers/session-provider";
import NavbarMobile from "@/components/layout/NavbarMobile";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = sitemetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={`${inter.variable} antialiased`}>
        <AuthProvider>
          <Toaster position="top-right" richColors />
          {/* <Navbar /> */}
          <NavbarWrapper />
          <Suspense fallback={null}>
            <NavbarMobile />
          </Suspense>
          {children}
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
