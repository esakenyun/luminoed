"use client";

import { motion } from "framer-motion";
import { Database, Lightbulb } from "lucide-react";
import Image from "next/image";

export default function ITKCM() {
  return (
    <section className="w-full overflow-hidden">
      {/* HERO */}
      <div 
        className="relative inset-0 -z-10 bg-[#DDF190]" style={{
        clipPath: "polygon(0 10%, 100% 0, 100% 85%, 0 100%)",
        }}>
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 md:grid-cols-2 px-10 py-20">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h1 className="pt-30 md:pt-10 text-3xl lg:text-[64px] font-bold text-primary-blue md:text-4xl">
              IT KCM
            </h1>
            <p className="lg:text-[24px] mt-1 text-base font-bold text-primary-blue/80">
              PT Kibar Cendekia Muda
            </p>

            <p className="mt-4 text-base lg:text-[18px] leading-relaxed text-primary-blue/80">
              Kibar Cendekia Muda adalah perusahaan pengembang teknologi
              informasi yang berfokus pada solusi untuk pendidikan, khususnya
              dalam implementasi Smart School dan Smart Class. Kami menyediakan
              berbagai produk dan layanan yang dirancang untuk memenuhi
              kebutuhan administrasi sekolah modern dan meningkatkan pengalaman
              belajar siswa.
            </p>
          </motion.div>

          {/* RIGHT CARD */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center md:justify-end"
          >
            <div className="relative lg:h-[600px] flex items-center justify-end tablet-landscape-max::justify-end overflow-visible">
              {/* BACK BLUE CARD */}
              <div className="absolute right-6 tablet-landscape-max:right-[95px] top-[200px] w-[300px] h-[450px] shadow-2xl bg-primary-blue rounded-[5px] z-0" />
              {/* FRONT IMAGE CARD */}
              <div className="relative w-full max-w-[320px] h-[340px] p-4 rounded-[5px] top-[135px] overflow-hidden shadow-2xl bg-white z-10">
                <Image
                  src="/bar.png"
                  width={500}
                  height={500}
                  alt="Dashboard Preview"
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* WHY CHOOSE US */}
      <div className="mx-auto max-w-7xl px-6 pt-40 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative inline-block mb-10" // Animasi diterapkan pada kontainer ini
        >
          {/* 1. Teks Bayangan/Latar Belakang (Warna Pudar) */}
          <h2
            className="absolute bottom-4 text-xl md:text-[48px] tablet-landscape-min:text-6xl left-0 font-extrabold text-gray-200 opacity-60 whitespace-nowrap"
            style={{ transform: "translate(2px, -2px)" }}
          >
            WHY YOU SHOULD CHOOSE US?
          </h2>

          {/* 2. Teks Utama (Warna Gelap) */}
          <h2 className="relative z-10 text-xl md:text-[48px] tablet-landscape-min:text-6xl font-extrabold text-primary-blue whitespace-nowrap">
            WHY YOU SHOULD CHOOSE US?
          </h2>
        </motion.div>
        {/* <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-2xl font-bold text-purple-900"
        >
          WHY YOU SHOULD CHOOSE US?
        </motion.h2> */}

        <div className="grid gap-20 md:grid-cols-2">
          {/* ITEM 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="mb-3 items-center">
              <Lightbulb className="mt-10 h-12 w-12 text-yellow-500"/>
              <h3 className="mt-5 text-[18px] md:text-[24px] font-semibold text-purple-900">Innovation</h3>
            </div>
            <p className="text-[16px] md:text-[18px] text-slate-600">
              Menghadirkan inovasi teknologi untuk meningkatkan kualitas
              pendidikan di Indonesia melalui solusi Smart School dan Smart
              Class yang terintegrasi. Menyediakan platform yang dapat
              mengotomatisasi pengelolaan sekolah dan meningkatkan efisiensi
              proses belajar mengajar dengan teknologi terkini.
            </p>
          </motion.div>

          {/* ITEM 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="mb-3 mt-10 items-center gap-3">
              <Database className="h-12 w-12 text-blue-500" />
              <h3 className="text-[18px] md:text-[24px] mt-5 font-semibold text-purple-900">Data Based</h3>
            </div>
            <p className="text-[16px] md:text-[18px] text-slate-600">
              Teknologi Terkini: Menggunakan teknologi terbaru seperti
              kecerdasan buatan dan analisis data untuk meningkatkan efisiensi
              dan efektivitas proses pendidikan.
              <br />
              Integrasi Mudah: Platform yang mudah diimplementasikan dan
              diintegrasikan dengan infrastruktur teknologi yang ada di sekolah.
            </p>
          </motion.div>
        </div>

        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-40 text-center italic text-[24px] md:text-[36px] text-primary-blue/80 font-medium relative before:content-[''] before:block before:w-24 before:h-[2px] before:bg-primary-blue/30 before:mx-auto before:mb-6 after:content-[''] after:block after:w-24 after:h-[2px] after:bg-primary-blue/30 after:mx-auto after:mt-6"
        >
          “Illuminate Minds. Transform Schools.”
        </motion.blockquote>

      </div>
      <div className="relative overflow-hidden z-10">
        <Image
          src="/palkon.png"
          width={500}
          height={500}
          alt="Dashboard Preview"
          className="w-full h-full object-cover"
          priority
        />
      </div>
    </section>
  );
}
