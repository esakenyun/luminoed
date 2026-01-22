import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Streaming Services | LuminoED",
  description:
    "Layanan streaming profesional LuminoED untuk institusi pendidikan dan event. Meliputi live streaming acara, photography & videography, serta hybrid learning terintegrasi.",
  keywords: [
    "streaming sekolah",
    "live streaming pendidikan",
    "hybrid learning sekolah",
    "photography videography sekolah",
    "streaming event pendidikan",
    "luminoed streaming",
  ],
  openGraph: {
    title: "Streaming Services | LuminoED",
    description:
      "Solusi streaming profesional untuk acara sekolah, pembelajaran hybrid, dan dokumentasi visual institusi pendidikan.",
    url: "https://luminoed.id/services/streaming",
    siteName: "LuminoED",
    images: [
      {
        url: "/services/streaming.jpg",
        width: 1200,
        height: 630,
        alt: "Streaming Services LuminoED",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Streaming Services | LuminoED",
    description:
      "Live streaming, hybrid learning, dan dokumentasi visual profesional untuk pendidikan.",
    images: ["/services/streaming.jpg"],
  },
};
