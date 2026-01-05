"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { textVariants } from "@/lib/motion";

const CARD_WIDTH = 480;
const CARD_HEIGHT = 520;
const GAP = 48;

const projects = [
  {
    title: "App Sheet Smart Teacher",
    image: "/services/appsheet.png",
    detail: "AppSheet Smart Teacher adalah aplikasi manajemen aktivitas guru berbasis AppSheet yang dirancang untuk membantu sekolah dalam mendata, memantau, dan mengevaluasi kegiatan guru selama masa kerja secara terstruktur, digital, dan real-time. Aplikasi ini menjadi solusi praktis untuk menggantikan pencatatan manual sehingga proses administrasi menjadi lebih efisien, akurat, dan transparan.",
  },
  {
    title: "Smart School",
    image: "/services/smartschool.png",
    detail: "Solusi digital terpadu untuk mendukung manajemen dan aktivitas pembelajaran di lingkungan sekolah. Smart School dirancang untuk mempermudah pengelolaan data akademik, komunikasi antara guru dan siswa, serta meningkatkan efektivitas proses belajar mengajar melalui sistem yang terintegrasi dan mudah digunakan.",
  },
  {
    title: "Smart School",
    image: "/landing.JPG",
    detail: "Solusi digital terpadu untuk mendukung manajemen dan aktivitas pembelajaran di lingkungan sekolah. Smart School dirancang untuk mempermudah pengelolaan data akademik, komunikasi antara guru dan siswa, serta meningkatkan efektivitas proses belajar mengajar melalui sistem yang terintegrasi dan mudah digunakan.",
  },
  {
    title: "App Sheet",
    image: "/abouts.jpg",
    detail: "Pengembangan lanjutan dari aplikasi App Sheet dengan fokus pada peningkatan performa dan pengalaman pengguna. Versi ini menghadirkan alur kerja yang lebih optimal, antarmuka yang lebih konsisten, serta fitur tambahan yang disesuaikan dengan kebutuhan operasional perusahaan.",
  },
  {
    title: "LuminoED Blog",
    image: "/blog.JPG",
    detail: "Optimalisasi platform LuminoED Blog dengan pendekatan UI/UX dan struktur konten yang mendukung SEO. Proyek ini bertujuan untuk meningkatkan visibilitas website di mesin pencari serta memberikan pengalaman membaca yang lebih nyaman bagi pengguna.",
  },
  {
    title: "Smart School",
    image: "/landing.JPG",
    detail: "Pengembangan Smart School dengan penambahan fitur integrasi sistem untuk mendukung kebutuhan sekolah secara menyeluruh. Solusi ini membantu institusi pendidikan dalam mempercepat digitalisasi, meningkatkan efisiensi administrasi, dan menciptakan ekosistem pembelajaran yang modern.",
  },
];

export default function PortfolioSection() {
  const [active, setActive] = useState(2);

  return (
    <section className="py-32 text-white overflow-hidden bg-gradient-to-br from-primary-blue via-primary-blue to-primary-green opacity-100 mt-40 mb-30">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-white leading-tight text-center mb-5"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Software Implementation <br />
          & Customization
        </motion.h2>
        <motion.p 
          className="max-w-7xl mx-auto text-center text-lg md:text-lg text-white/50 mb-20"
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
        {/* ================= SLIDER ================= */}
        <div className="relative overflow-hidden perspective-[1200px]">
          <motion.div
            className="flex gap-12"
            animate={{
              x: `calc(50% - ${CARD_WIDTH / 2}px - ${
                active * (CARD_WIDTH + GAP)
              }px)`,
            }}
            transition={{
              type: "spring",
              stiffness: 70,
              damping: 18,
            }}
          >
            {projects.map((item, index) => {
              const offset = index - active;

              return (
                <motion.div
                  key={index}
                  className="relative shrink-0 rounded-2xl overflow-hidden shadow-2xl bg-neutral-900"
                  style={{
                    width: CARD_WIDTH,
                    height: CARD_HEIGHT,
                  }}
                  animate={{
                    scale: offset === 0 ? 1 : 0.85,
                    rotateY:
                      offset === 0 ? 0 : offset < 0 ? 20 : -20,
                    rotateZ:
                      offset === 0 ? 0 : offset < 0 ? -6 : 6,
                    opacity: Math.abs(offset) > 1 ? 0 : 1,
                    zIndex: offset === 0 ? 10 : 1,
                  }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                  }}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/10" />
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto px-6">

        {/* ================= INFO & NAV ================= */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-start">

            {/* Title & Description */}
                <div className="max-w-4xl md:ml-20 min-h-[220px]">

                <motion.h3
                    key={`title-${active}`}
                    variants={textVariants}
                    initial="hidden"
                    animate="show"
                    className="text-2xl md:text-3xl font-bold"
                >
                    {projects[active].title}
                </motion.h3>

                <motion.p
                    key={`detail-${active}`}
                    variants={textVariants}
                    initial="hidden"
                    animate="show"
                    transition={{ delay: 0.1 }}
                    className="mt-3 text-gray-300 leading-relaxed"
                >
                    {projects[active].detail}
                </motion.p>
                </div>

            {/* Navigation */}
            <div className="flex gap-4 self-start">
                <button
                onClick={() => setActive((p) => Math.max(p - 1, 0))}
                className="w-12 h-12 rounded-full bg-primary-blue
                            transition-all duration-150 ease-out
                            hover:scale-105
                            active:scale-110 active:shadow-xl cursor-pointer"
                >
                ←
                </button>
                <button
                onClick={() =>
                    setActive((p) =>
                    Math.min(p + 1, projects.length - 1)
                    )
                }
                className="w-12 h-12 rounded-full bg-primary-blue
                            transition-all duration-150 ease-out
                            hover:scale-105
                            active:scale-110 active:shadow-xl cursor-pointer"
                >
                →
                </button>
            </div>
            </div>
      </div>
    </section>
  );
}
