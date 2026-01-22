import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Training Services | LuminoED",
  description:
    "Program training LuminoED untuk guru, institusi pendidikan, dan profesional. Meliputi Training IT, Google Workspace for Education, dan Artificial Intelligence berbasis praktik.",
  keywords: [
    "training pendidikan",
    "pelatihan guru",
    "training IT sekolah",
    "google workspace for education training",
    "training ai pendidikan",
    "pelatihan teknologi pendidikan",
    "luminoed training",
  ],
  openGraph: {
    title: "Training Services | LuminoED",
    description:
      "Pelatihan teknologi berbasis praktik untuk meningkatkan kompetensi digital di dunia pendidikan dan industri.",
    url: "https://luminoed.id/services/training",
    siteName: "LuminoED",
    images: [
      {
        url: "/services/training1.jpg",
        width: 1200,
        height: 630,
        alt: "Training Services LuminoED",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Training Services | LuminoED",
    description:
      "Training IT, Google Workspace, dan AI untuk pendidikan dan profesional.",
    images: ["/services/training1.jpg"],
  },
};
