import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Additional Services | LuminoED",
  description:
    "Layanan tambahan LuminoED untuk mendukung administrasi sekolah digital, termasuk Lesson Plan Digital dan eRapor terintegrasi.",
  keywords: [
    "luminoed",
    "additional services",
    "administrasi sekolah digital",
    "lesson plan digital",
    "erapor sekolah",
    "smart education",
    "software sekolah",
  ],
  openGraph: {
    title: "Additional Services | LuminoED",
    description:
      "Solusi layanan tambahan LuminoED untuk administrasi pembelajaran yang lebih efektif, akurat, dan terintegrasi.",
    url: "https://luminoed.id/services/additional",
    siteName: "LuminoED",
    images: [
      {
        url: "/services/additionalservice.webp",
        width: 1200,
        height: 630,
        alt: "LuminoED Additional Services",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Additional Services | LuminoED",
    description:
      "Lesson Plan Digital dan eRapor terintegrasi untuk administrasi sekolah modern.",
    images: ["/services/additionalservice.webp"],
  },
};
