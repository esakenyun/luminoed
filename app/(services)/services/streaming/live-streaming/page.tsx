"use client";

import { motion } from "framer-motion";
import { fadeUp, fadeLeft, fadeRight, stagger } from "@/lib/motion";
import Image from "next/image";
import OurClient from "@/components/sections/home/OurClient";

export default function LiveStreamingServices() {
  return (
    <main className="overflow-hidden bg-white text-gray-800">
      <section className="">
        <div className="max-w-7xl mx-auto xl:px-20 py-28 bg-linear-to-br from-primary-blue to-primary-blue/90 text-white xl:rounded-xl">
          <motion.div
            className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.6 }}
          >
            <motion.div variants={fadeLeft}>
              <span className="inline-block mb-4 px-4 py-1 rounded-full bg-white/15 text-sm">
                Live Streaming Service
              </span>

              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Live Streaming Acara & Pengajian
                <span className="text-primary-green"> Sekolah & Institusi</span>
              </h1>

              <p className="mt-6 text-blue-100 max-w-xl">
                Layanan live streaming profesional untuk memastikan setiap
                acara, pengajian, dan kegiatan penting dapat diakses secara
                real-time dengan kualitas terbaik.
              </p>
            </motion.div>

            <motion.div
              variants={fadeRight}
              className="h-80 bg-white/10 backdrop-blur rounded-3xl flex items-center justify-center text-white/60"
            >
              Preview Live Streaming
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <motion.div
          className="max-w-4xl mx-auto px-6 text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-6">
            Menghubungkan Momen Penting Tanpa Batas
          </h2>
          <p className="text-gray-600 text-lg">
            LuminoED menghadirkan sistem live streaming stabil, jernih, dan
            mudah diakses untuk mendukung komunikasi sekolah dengan siswa, orang
            tua, dan masyarakat.
          </p>
        </motion.div>
      </section>

      {/* ================= EVENT STREAMING ================= */}
      <section className="py-24 bg-gray-50">
        <motion.div
          className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
        >
          <motion.div variants={fadeLeft}>
            <h3 className="text-2xl font-bold mb-4 text-primary-blue">
              Live Streaming Acara Sekolah
            </h3>
            <p className="text-gray-600 mb-6">
              Dokumentasi dan siaran langsung acara sekolah dengan pendekatan
              profesional dan tertata rapi.
            </p>

            <ul className="space-y-3 text-gray-700">
              <li>• Wisuda & Perpisahan</li>
              <li>• Seminar & Workshop Pendidikan</li>
              <li>• Pentas Seni & Event Sekolah</li>
              <li>• Hybrid Event (Offline & Online)</li>
            </ul>
          </motion.div>

          <motion.div
            variants={fadeRight}
            className="h-64 bg-white rounded-2xl shadow-lg flex items-center justify-center text-gray-400"
          >
            Visual Acara Sekolah
          </motion.div>
        </motion.div>
      </section>

      {/* ================= RELIGIOUS STREAMING ================= */}
      <section className="py-24 bg-primary-green/5">
        <motion.div
          className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
        >
          <motion.div
            variants={fadeLeft}
            className="h-64 bg-white rounded-2xl shadow-lg flex items-center justify-center text-gray-400"
          >
            Visual Pengajian
          </motion.div>

          <motion.div variants={fadeRight}>
            <h3 className="text-2xl font-bold mb-4 text-primary-green">
              Live Streaming Pengajian & Kegiatan Keagamaan
            </h3>
            <p className="text-gray-600 mb-6">
              Kami menghadirkan layanan streaming yang menjaga kekhusyukan,
              ketenangan, dan kenyamanan audiens dalam mengikuti kegiatan
              spiritual.
            </p>

            <ul className="space-y-3 text-gray-700">
              <li>• Pengajian Rutin</li>
              <li>• Kajian & Tausiyah</li>
              <li>• Doa Bersama</li>
              <li>• Dokumentasi Digital Kegiatan Religi</li>
            </ul>
          </motion.div>
        </motion.div>
      </section>

      {/* ================= OTHER EVENTS ================= */}
      <section className="py-24">
        <motion.div
          className="max-w-7xl mx-auto px-6"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
        >
          <motion.h3
            variants={fadeUp}
            className="text-3xl font-bold text-center mb-16"
          >
            Kegiatan Lain yang Dapat Disiarkan
          </motion.h3>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Rapat & Sosialisasi",
                desc: "Rapat orang tua dan sosialisasi program sekolah.",
              },
              {
                title: "Pelatihan & Webinar",
                desc: "Pelatihan guru dan kegiatan pembelajaran daring.",
              },
              {
                title: "Kegiatan Kolaboratif",
                desc: "Event lintas sekolah dan komunitas pendidikan.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="bg-white p-8 rounded-2xl shadow"
              >
                <h4 className="font-semibold text-lg mb-3 text-primary-blue">
                  {item.title}
                </h4>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* WAVE */}
      <div className="relative overflow-hidden">
        <Image
          src="/wave.png"
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
      <section className="py-24 bg-primary-blue text-white">
        <motion.div
          className="max-w-4xl mx-auto px-6 text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            Siarkan Acara Anda Bersama LuminoED
          </h2>
          <p className="mt-6 text-blue-100">
            Solusi live streaming yang profesional, stabil, dan sesuai kebutuhan
            institusi pendidikan.
          </p>

          <button className="mt-10 px-10 py-4 rounded-full bg-primary-green hover:bg-primary-green/90 transition font-semibold">
            Konsultasi Live Streaming
          </button>
        </motion.div>
      </section>
    </main>
  );
}
