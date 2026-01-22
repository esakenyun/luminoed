import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Artikel, insight, dan strategi transformasi digital pendidikan dari LuminoED. Membahas Smart School, EdTech, AI, dan masa depan pendidikan Indonesia.",
  keywords: [
    "blog pendidikan",
    "edtech indonesia",
    "smart school",
    "transformasi digital pendidikan",
    "luminoed blog",
  ],
  openGraph: {
    title: "Blog",
    description:
      "Baca artikel terbaru LuminoED tentang inovasi pendidikan, teknologi sekolah, AI, dan strategi manajemen pendidikan modern.",
    url: "https://luminoed.id/blog",
    siteName: "LuminoED",
    images: [
      {
        url: "/abouts.webp",
        width: 1200,
        height: 630,
        alt: "Blog LuminoED",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog LuminoED",
    description:
      "Insight dan strategi transformasi digital pendidikan dari LuminoED.",
    images: ["/abouts.webp"],
  },
};
