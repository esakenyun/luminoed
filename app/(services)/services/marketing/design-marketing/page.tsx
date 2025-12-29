"use client";

import { motion } from "framer-motion";
import { fadeUp, fadeLeft, fadeRight, stagger } from "@/lib/motion";
import Image from "next/image";
import OurClient from "@/components/sections/home/OurClient";

export default function MarketingDetailPage() {
  return (
    <main className="overflow-hidden">

      {/* ================= BANNER ================= */}
        <section className="px-4 sm:px-6">
            <div className="max-w-7xl mx-auto px-6 py-28 bg-gradient-to-br from-white to-blue-50 rounded-lg">
            <motion.div
                className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.5 }}
            >
            {/* TEXT SIDE */}
            <motion.div variants={fadeLeft}>
            <span className="inline-block mb-4 px-4 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">
                Design & Marketing
            </span>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Visual yang Meyakinkan,  
                <span className="text-blue-700"> Strategi yang Menggerakkan</span>
            </h1>

            <p className="mt-6 text-lg text-gray-600 max-w-xl">
                Kami membantu sekolah membangun citra profesional melalui desain
                poster, konten media sosial, dan strategi PPDB yang terarah.
            </p>
            </motion.div>

            {/* VISUAL SIDE */}
            <motion.div
            className="relative grid grid-cols-2 gap-6"
            variants={fadeRight}
            >
            {/* Poster */}
            <motion.div
                variants={fadeUp}
                className="bg-white rounded-2xl shadow-xl p-6 h-48 flex flex-col justify-between"
            >
                <p className="text-sm text-gray-500">Poster Design</p>
                <div className="h-24 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">
                Poster
                </div>
            </motion.div>

            {/* Social Media */}
            <motion.div
                variants={fadeUp}
                className="bg-white rounded-2xl shadow-xl p-6 h-48 flex flex-col justify-between mt-10"
            >
                <p className="text-sm text-gray-500">Social Media</p>
                <div className="h-24 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">
                Feed IG
                </div>
            </motion.div>

            {/* PPDB */}
            <motion.div
                variants={fadeUp}
                className="col-span-2 bg-primary-blue text-white rounded-2xl shadow-xl p-6 h-40 flex items-center justify-between"
            >
                <div>
                <p className="text-sm text-blue-200">PPDB Campaign</p>
                <h3 className="text-xl font-semibold mt-1">
                    Tingkatkan Jumlah Pendaftar
                </h3>
                </div>
                <div className="w-24 h-24 bg-secondary-blue-900 rounded-xl flex items-center justify-center text-blue-200">
                PPDB
                </div>
            </motion.div>
            </motion.div>
            </motion.div>
            </div>
        </section>

      {/* ================= INTRO ================= */}
      <section className="py-24">
        <motion.div
          className="max-w-5xl mx-auto px-6 text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-6">
            Desain yang Berbicara, Marketing yang Menggerakkan
          </h2>
          <p className="text-gray-600 text-lg">
            LuminoED membantu institusi pendidikan membangun komunikasi visual
            yang profesional, relevan, dan selaras dengan nilai edukasi.
          </p>
        </motion.div>
      </section>

      {/* ================= POSTER ================= */}
      <section className="bg-gray-50 py-24">
        <motion.div
          className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
        >
          <motion.div variants={fadeLeft}>
            <h3 className="text-2xl font-bold mb-4">
              Desain Poster Edukatif
            </h3>
            <p className="text-gray-600 mb-6">
              Poster bukan sekadar visual, tetapi media komunikasi utama
              sekolah. Kami merancang poster yang informatif, menarik,
              dan konsisten dengan identitas institusi.
            </p>

            <ul className="space-y-3 text-gray-700">
              <li>• Poster PPDB</li>
              <li>• Poster Event & Kegiatan Sekolah</li>
              <li>• Poster Informasi Akademik</li>
              <li>• Desain Cetak & Digital</li>
            </ul>
          </motion.div>

          <motion.div
            variants={fadeRight}
            className="bg-white rounded-2xl shadow-lg h-64 flex items-center justify-center text-gray-400"
          >
            Preview Poster
          </motion.div>
        </motion.div>
      </section>

      {/* ================= SOCIAL MEDIA ================= */}
      <section className="py-24">
        <motion.div
          className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
        >
          <motion.div
            variants={fadeLeft}
            className="bg-white rounded-2xl shadow-lg h-64 flex items-center justify-center text-gray-400"
          >
            Preview Social Media
          </motion.div>

          <motion.div variants={fadeRight}>
            <h3 className="text-2xl font-bold mb-4">
              Konten Social Media Sekolah
            </h3>
            <p className="text-gray-600 mb-6">
              Media sosial adalah wajah digital sekolah. Kami membantu
              mengelola tampilan visual dan pesan agar lebih konsisten,
              profesional, dan dipercaya orang tua.
            </p>

            <ul className="space-y-3 text-gray-700">
              <li>• Feed Instagram & Facebook</li>
              <li>• Story & Reels Edukatif</li>
              <li>• Template Konten Bulanan</li>
              <li>• Copywriting Edukasi & Branding</li>
            </ul>
          </motion.div>
        </motion.div>
      </section>

      {/* ================= PPDB ================= */}
      <section className="bg-blue-50 py-24 h-100 bg-gradient-to-b to-white">
        <motion.div
          className="max-w-7xl mx-auto px-6"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
        >
          <motion.h3
            variants={fadeUp}
            className="text-3xl font-bold text-center mb-12"
          >
            Strategi Marketing PPDB
          </motion.h3>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Visual Konsisten",
                desc: "Identitas PPDB yang seragam di seluruh media promosi."
              },
              {
                title: "Pesan yang Tepat",
                desc: "Komunikasi yang menyentuh kebutuhan orang tua dan siswa."
              },
              {
                title: "Multi-Channel",
                desc: "Poster, media sosial, landing page, dan WhatsApp."
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="bg-white p-8 rounded-xl shadow"
              >
                <h4 className="font-semibold text-lg mb-3">
                  {item.title}
                </h4>
                <p className="text-gray-600">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* WAVE */}
        <div className="relative overflow-hidden">
        <Image
            src="/palkon.png"
            width={1920}
            height={400}
            alt="Wave"
            className="w-full"
        />
        </div>

      {/* CLIENT */}
        <div className="max-w-7xl mx-auto px-6">
        <OurClient />
        </div>

      {/* ================= CTA ================= */}
      <section className="bg-primary-blue text-white py-24">
        <motion.div
          className="max-w-4xl mx-auto px-6 text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            Siap Meningkatkan Daya Tarik Sekolah Anda?
          </h2>
          <p className="mt-6 text-blue-200">
            Bangun citra sekolah yang profesional dan dipercaya
            bersama LuminoED.
          </p>

          <button className="mt-10 px-8 py-4 bg-white text-blue-900 font-semibold rounded-full hover:bg-blue-100 transition">
            Konsultasi Design & Marketing
          </button>
        </motion.div>
      </section>

    </main>
  );
}
