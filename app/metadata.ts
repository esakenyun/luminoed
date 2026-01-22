import type { Metadata } from "next";

export const siteMetadata: Metadata = {
  metadataBase: new URL("https://luminoed.id"),
  title: {
    default: "Lumino ED",
    template: "%s | Lumino ED",
  },
  description: "Comprehensive education solutions for modern schools.",
  openGraph: {
    title: "Lumino ED",
    description: "Comprehensive education solutions for modern schools.",
    url: "https://luminoed.id",
    siteName: "Lumino ED",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Lumino ED",
    card: "summary_large_image",
  },
};
