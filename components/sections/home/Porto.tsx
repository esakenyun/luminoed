"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { textVariants } from "@/lib/motion";

const CARD_WIDTH = 480;
const CARD_HEIGHT = 520;
const LANDSCAPE_WIDTH = 720;
const LANDSCAPE_HEIGHT = 405;
const GAP = 48;
// const MAX_CARD_WIDTH = LANDSCAPE_WIDTH;

type ImageProject = {
  type: "image";
  title: string;
  image: string;
  detail: string;
};

type VideoProject = {
  type: "video";
  title: string;
  video: string;
  aspect: "9/10" | "16/9";
  detail: string;
};

type Project = ImageProject | VideoProject;

const projects: Project[] = [
  {
    title: "App Sheet Smart Teacher",
    image: "/services/appsheet.png",
    type: "image",
    detail:
      "AppSheet Smart Teacher adalah aplikasi manajemen aktivitas guru berbasis AppSheet yang dirancang untuk membantu sekolah dalam mendata, memantau, dan mengevaluasi kegiatan guru selama masa kerja secara terstruktur, digital, dan real-time. Aplikasi ini menjadi solusi praktis untuk menggantikan pencatatan manual sehingga proses administrasi menjadi lebih efisien, akurat, dan transparan.",
  },
  {
    title: "Smart Talent",
    type: "image",
    image: "/services/smartschool.png",
    detail:
      "Smart Talent adalah sistem manajemen SDM sekolah yang memungkinkan manajemen memantau presensi, keterlambatan, jurnal kerja, dan mutabaah pendidik serta tenaga kependidikan secara real-time melalui dashboard terintegrasi. Pendidik dan tenaga kependidikan juga dapat melihat capaian kinerja pribadi sebagai bahan evaluasi untuk meningkatkan performa kerja.",
  },
  {
    title: "Smart School Management System",
    type: "video",
    video: "/highlight.mp4",
    aspect: "9/10",
    detail:
      "Solusi digital terpadu untuk mendukung manajemen dan aktivitas pembelajaran di lingkungan sekolah. Smart School dirancang untuk mempermudah pengelolaan data akademik, komunikasi antara guru dan siswa, serta meningkatkan efektivitas proses belajar mengajar melalui sistem yang terintegrasi dan mudah digunakan.",
  },
  {
    title: "Dashboard Eksternal Sekolah",
    type: "video",
    video: "/Dashboard.mp4",
    aspect: "16/9",
    detail:
      "Dashboard Eksternal Sekolah berbasis Google Sites adalah solusi untuk menampilkan informasi sekolah secara terpusat dan mudah diakses oleh publik. Dashboard ini menyajikan data penting seperti profil sekolah, informasi akademik, agenda, serta laporan yang terintegrasi dengan Google Workspace, sehingga mendukung transparansi, komunikasi, dan citra profesional sekolah.",
  },
];

export default function PortfolioSection() {
  const [active, setActive] = useState(2);
  const getCardWidth = (item: Project) =>
    item.type === "video" && item.aspect === "16/9"
      ? LANDSCAPE_WIDTH
      : CARD_WIDTH;

  const getTranslateX = () => {
    let offsetX = 0;

    for (let i = 0; i < active; i++) {
      offsetX += getCardWidth(projects[i]) + GAP;
    }

    const activeCardWidth = getCardWidth(projects[active]);

    return `calc(50% - ${activeCardWidth / 2}px - ${offsetX}px)`;
  };

  return (
    <section
      id="portfolio"
      className="py-32 text-white overflow-hidden bg-linear-to-br from-primary-blue via-primary-blue to-primary-green mt-40"
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold leading-tight mb-5"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Software Implementation <br />& Customization
        </motion.h2>

        <motion.p
          className="text-lg text-white/50 mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Berikut adalah beberapa proyek yang telah kami kerjakan untuk
          mengimplementasikan dan menyesuaikan solusi perangkat lunak sesuai
          kebutuhan klien kami di berbagai sektor.
        </motion.p>
      </div>

      <div className="relative overflow-hidden perspective-distant items-center justify-center center text-center">
        <motion.div
          className="flex gap-12"
          animate={{
            x: getTranslateX(),
          }}
          transition={{
            type: "spring",
            stiffness: 70,
            damping: 18,
          }}
        >
          {projects.map((item, index) => {
            const offset = index - active;

            const isLandscape = item.type === "video" && item.aspect === "16/9";

            const cardWidth = isLandscape ? LANDSCAPE_WIDTH : CARD_WIDTH;

            const cardHeight = isLandscape ? LANDSCAPE_HEIGHT : CARD_HEIGHT;

            return (
              <motion.div
                key={index}
                className="relative shrink-0 rounded-2xl overflow-hidden shadow-2xl bg-neutral-900"
                style={{
                  width: cardWidth,
                  height: cardHeight,
                }}
                animate={{
                  scale: offset === 0 ? 1 : 0.85,
                  rotateY: offset === 0 ? 0 : offset < 0 ? 20 : -20,
                  rotateZ: offset === 0 ? 0 : offset < 0 ? -6 : 6,
                  opacity: Math.abs(offset) > 1 ? 0 : 1,
                  zIndex: offset === 0 ? 10 : 1,
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                {item.type === "image" && (
                  <>
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/10" />
                  </>
                )}

                {item.type === "video" && (
                  <video
                    src={item.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                  />
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-20 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-30">
        <div className="md:ml-20 min-h-[220px]">
          <motion.h3
            key={projects[active].title}
            variants={textVariants}
            initial="hidden"
            animate="show"
            className="text-2xl md:text-3xl font-bold"
          >
            {projects[active].title}
          </motion.h3>

          <motion.p
            key={projects[active].detail}
            variants={textVariants}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.1 }}
            className="mt-4 text-gray-300 leading-relaxed"
          >
            {projects[active].detail}
          </motion.p>
        </div>

        <div className="flex gap-4">
          <button
            onClick={() => setActive((p) => Math.max(p - 1, 0))}
            className="w-12 h-12 rounded-full bg-primary-blue hover:scale-105 active:scale-110"
          >
            ←
          </button>
          <button
            onClick={() =>
              setActive((p) => Math.min(p + 1, projects.length - 1))
            }
            className="w-12 h-12 rounded-full bg-primary-blue hover:scale-105 active:scale-110"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
