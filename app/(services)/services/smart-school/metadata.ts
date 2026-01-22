import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Smart School Management | LuminoED",
  description:
    "Solusi Smart School LuminoED untuk manajemen sekolah modern. Sistem terintegrasi meliputi Smart Class, Smart Talent, Smart Asset, dan Smart Management untuk pembelajaran dan administrasi digital.",
  keywords: [
    "smart school",
    "sistem manajemen sekolah",
    "digitalisasi sekolah",
    "smart class",
    "smart talent",
    "smart asset",
    "smart management",
    "luminoed smart school",
  ],
  openGraph: {
    title: "Smart School Management | LuminoED",
    description:
      "Platform Smart School terintegrasi untuk mengelola pembelajaran, tenaga pendidik, aset, dan administrasi sekolah secara digital.",
    url: "https://luminoed.id/services/smart-school",
    siteName: "LuminoED",
    images: [
      {
        url: "/services/smartschool.webp",
        width: 1200,
        height: 630,
        alt: "Smart School System LuminoED",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Smart School Management | LuminoED",
    description:
      "Sistem Smart School terintegrasi untuk manajemen sekolah digital modern.",
    images: ["/services/smartschool.webp"],
  },
};
