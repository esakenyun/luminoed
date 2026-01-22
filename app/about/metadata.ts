import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About LuminoED",
  description:
    "Kenali LuminoED lebih dekat. Kami adalah perusahaan teknologi pendidikan yang menghadirkan solusi Smart School, pelatihan IT, hybrid learning, dan transformasi digital untuk masa depan pendidikan Indonesia.",
  keywords: [
    "luminoed",
    "about luminoed",
    "edtech indonesia",
    "teknologi pendidikan",
    "smart school indonesia",
    "transformasi digital pendidikan",
  ],
  openGraph: {
    title: "About LuminoED",
    description:
      "LuminoED adalah mitra transformasi digital pendidikan yang mengintegrasikan teknologi, manajemen sekolah, dan pembelajaran modern dalam satu ekosistem.",
    url: "https://luminoed.id/about",
    siteName: "LuminoED",
    images: [
      {
        url: "/abouts.jpg",
        width: 1200,
        height: 630,
        alt: "About LuminoED",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About LuminoED",
    description:
      "Mengenal LuminoED, perusahaan teknologi pendidikan yang berfokus pada Smart School dan transformasi digital.",
    images: ["/abouts.jpg"],
  },
};
