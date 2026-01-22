import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marketing Services | LuminoED",
  description:
    "Layanan design dan marketing LuminoED untuk institusi pendidikan, membantu sekolah membangun citra profesional, meningkatkan kepercayaan, dan memperkuat daya saing di era digital.",
  keywords: [
    "marketing sekolah",
    "jasa marketing pendidikan",
    "branding sekolah",
    "design sekolah",
    "digital marketing pendidikan",
    "ppdb marketing",
    "luminoed",
  ],
  openGraph: {
    title: "Marketing Services | LuminoED",
    description:
      "Strategi design dan marketing untuk institusi pendidikan agar tampil profesional, dipercaya, dan kompetitif.",
    url: "https://luminoed.id/services/marketing",
    siteName: "LuminoED",
    images: [
      {
        url: "/services/marketing1.webp",
        width: 1200,
        height: 630,
        alt: "Marketing Services LuminoED",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marketing Services | LuminoED",
    description:
      "Design & marketing strategis untuk meningkatkan citra dan kepercayaan institusi pendidikan.",
    images: ["/services/marketing1.webp"],
  },
};
