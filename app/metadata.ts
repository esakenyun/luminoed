import type { Metadata } from "next";

export const sitemetadata: Metadata = {
  metadataBase: new URL("https://luminoed.id"),

  title: {
    default: "LuminoED",
    template: "%s | LuminoED",
  },

  description:
    "LuminoED provides integrated smart education solutions including Smart School systems, AI-powered learning, digital school management, training, and educational technology services.",

  applicationName: "LuminoED",
  generator: "Next.js",
  creator: "LuminoED",
  publisher: "LuminoED",

  keywords: [
    "LuminoED",
    "Smart School",
    "Education Technology Indonesia",
    "Digital School Management",
    "AI Education",
    "Smart Class",
    "Google for Education Partner",
    "School Information System",
    "EdTech Indonesia",
  ],

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "LuminoED",
    description:
      "Integrated digital solutions for modern schools. Smart School, Smart Class, AI-powered learning, and school management systems.",
    url: "https://luminoed.id",
    siteName: "LuminoED",
    images: [
      {
        url: "/logo/logo-color.png",
        width: 1200,
        height: 630,
        alt: "LuminoED",
      },
    ],
    locale: "id_ID",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "LuminoED",
    description:
      "Smart digital solutions for schools: AI learning, school management systems, and education technology.",
    images: ["/logo/logo-color.png"],
    creator: "@luminoed",
  },

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/logo/logo-color.png", type: "image/png" },
    ],
    apple: "/logo/logo-color.png",
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
};
