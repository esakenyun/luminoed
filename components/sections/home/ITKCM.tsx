"use client";

import { motion } from "framer-motion";
import { Database, Lightbulb } from "lucide-react";
import Image from "next/image";

export default function ITKCM() {
  return (
    <section className="w-full relative pt-10 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-24 z-20 pointer-events-none">
        <div className="bg-[#BEDF3E] w-1/5 h-10 lg:h-16 -rotate-13 md:-rotate-4 lg:-rotate-3 absolute -left-2 top-[75px] md:top-8 lg:top-5"></div>
        <div className="bg-[#110A34] w-1/3 h-10 lg:h-16 -rotate-13 md:-rotate-4 lg:-rotate-3 absolute -left-2 top-[86px] md:top-12 lg:top-10 2xl:top-11 opacity-80"></div>
      </div>

      <div
        className="relative inset-0 -z-10 bg-[#DDF190]"
        style={{
          clipPath: "polygon(0 10%, 100% 0, 100% 85%, 0 100%)",
        }}
      >
        <div className="bg-[#D7D7D7] w-1/3 h-10 lg:h-16 -rotate-13 md:-rotate-4 lg:-rotate-3 -right-2 absolute top-3 md:top-2 lg:top-2 xl:top-2.5"></div>
        <div className="bg-[#110A34] w-1/5 h-10 lg:h-16 -rotate-13 md:-rotate-4 lg:-rotate-3 right-[3%] md:right-[5%] lg:right-[7%] absolute opacity-80 top-8 lg:top-12"></div>

        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 md:grid-cols-2 px-10 py-20">
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

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center md:justify-end"
          >
            <div className="relative lg:h-[600px] flex items-center justify-end tablet-landscape-max::justify-end overflow-visible">
              <div className="absolute right-6 tablet-landscape-max:right-[95px] top-[200px] w-[300px] h-[450px] shadow-2xl bg-primary-blue rounded-[5px] z-0" />
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

      <div className="mx-auto max-w-7xl px-6 pt-40 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative inline-block mb-10"
        >
          <h2
            className="absolute bottom-4 text-xl md:text-[48px] tablet-landscape-min:text-6xl left-0 font-extrabold text-gray-200 opacity-60 whitespace-nowrap"
            style={{ transform: "translate(2px, -2px)" }}
          >
            WHY YOU SHOULD CHOOSE US?
          </h2>
          <h2 className="relative z-10 text-xl md:text-[48px] tablet-landscape-min:text-6xl font-extrabold text-primary-blue whitespace-nowrap">
            WHY YOU SHOULD CHOOSE US?
          </h2>
        </motion.div>
        <div className="grid gap-20 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="mb-3 items-center">
              <Lightbulb className="mt-10 h-12 w-12 text-yellow-500" />
              <h3 className="mt-5 text-[18px] md:text-[24px] font-semibold text-purple-900">
                Innovation
              </h3>
            </div>
            <p className="text-[16px] md:text-[18px] text-slate-600">
              Menghadirkan inovasi teknologi untuk meningkatkan kualitas
              pendidikan di Indonesia melalui solusi Smart School dan Smart
              Class yang terintegrasi. Menyediakan platform yang dapat
              mengotomatisasi pengelolaan sekolah dan meningkatkan efisiensi
              proses belajar mengajar dengan teknologi terkini.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="mb-3 mt-10 items-center gap-3">
              <Database className="h-12 w-12 text-blue-500" />
              <h3 className="text-[18px] md:text-[24px] mt-5 font-semibold text-purple-900">
                Data Based
              </h3>
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
      </div>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="w-full"
            >
              <div className="relative aspect-9/10 overflow-hidden shadow-2xl">
                <video
                  src="/highlight.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-primary-blue">
                Mendukung Transformasi Digital Pendidikan
              </h2>

              <p className="text-slate-600 leading-relaxed">
                Mendukung transformasi digital di lingkungan pendidikan melalui
                sistem yang terintegrasi, efisien, dan mudah digunakan. Solusi
                ini dirancang untuk membantu institusi pendidikan mengelola
                aktivitas pembelajaran dan administrasi secara lebih tertata,
                modern, dan berkelanjutan.
              </p>

              <ul className="space-y-3 text-slate-600">
                <li>
                  ✔ Pengelolaan aktivitas pendidikan yang lebih terstruktur
                </li>
                <li>
                  ✔ Proses kerja yang efisien dan terdokumentasi dengan baik
                </li>
                <li>✔ Akses informasi yang mudah dan terintegrasi</li>
              </ul>

              <button
                className="inline-flex items-center gap-2 rounded-sm bg-lime-500 px-6 py-3 text-white font-medium hover:bg-lime-600 transition"
                onClick={() => (window.location.href = "#portfolio")}
              >
                Lihat Produk Kami
              </button>
            </motion.div>
          </div>
        </div>
      </section>
    </section>
  );
}
