import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Hubungi LuminoED untuk konsultasi Smart School, IT Training, hybrid learning, dan solusi transformasi digital pendidikan. Tim kami siap membantu kebutuhan institusi Anda.",
  keywords: [
    "contact luminoed",
    "konsultasi smart school",
    "edtech indonesia",
    "konsultasi transformasi digital pendidikan",
    "luminoed contact",
  ],
  openGraph: {
    title: "Contact Us",
    description:
      "Diskusikan kebutuhan digital institusi pendidikan Anda bersama LuminoED. Kami siap menjadi mitra transformasi digital yang berkelanjutan.",
    url: "https://luminoed.id/contact",
    siteName: "LuminoED",
    images: [
      {
        url: "/abouts.webp",
        width: 1200,
        height: 630,
        alt: "Contact LuminoED",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact LuminoED",
    description:
      "Hubungi LuminoED untuk konsultasi solusi Smart School dan transformasi digital pendidikan.",
    images: ["/abouts.webp"],
  },
};
