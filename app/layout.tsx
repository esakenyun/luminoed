import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import NavbarWrapper from "@/components/layout/NavbarWrapper";
import { sitemetadata } from "./metadata";

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
        <NavbarWrapper />
        {/* <NavbarMobile />*/}
        {children}
        <Footer />
      </body>
    </html>
  );
}
