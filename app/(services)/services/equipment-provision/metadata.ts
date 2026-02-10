import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Equipment Provision | LuminoED",
  description:
    "Layanan pengadaan perangkat pendidikan dari LuminoED meliputi Chromebook, PC, Interactive Flat Panel (IFP), audio visual, dan infrastruktur pendukung sekolah digital.",
  keywords: [
    "equipment provision sekolah",
    "pengadaan perangkat pendidikan",
    "chromebook education",
    "interactive flat panel sekolah",
    "perangkat kelas digital",
    "infrastruktur IT sekolah",
    "luminoed",
  ],
  openGraph: {
    title: "Equipment Provision | LuminoED",
    description:
      "Pengadaan perangkat dan teknologi pendidikan untuk mendukung ekosistem pembelajaran digital sekolah.",
    url: "https://luminoed.id/services/equipment-provision",
    siteName: "LuminoED",
    images: [
      {
        url: "/services/chromebook.webp",
        width: 1200,
        height: 630,
        alt: "Equipment Provision LuminoED",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Equipment Provision | LuminoED",
    description:
      "Penyediaan perangkat pendidikan dan teknologi sekolah oleh LuminoED.",
    images: ["/services/chromebook.webp"],
  },
};
//metadata
