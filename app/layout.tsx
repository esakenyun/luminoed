import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import { sitemetadata } from "./metadata";
import { Toaster } from "sonner";
import NavbarWrapper from "@/components/layout/NavbarWrapper";
import { AuthProvider } from "@/components/providers/session-provider";
import Script from "next/script";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = sitemetadata;
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="gtag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', '${GA_ID}');
            `}
        </Script>
      </head>
      <body className={`${inter.variable} antialiased`}>
        <AuthProvider>
          <Toaster position="top-right" richColors />
          {/* <Navbar /> */}
          <NavbarWrapper />
          {/* <NavbarMobile /> */}
          {children}
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
