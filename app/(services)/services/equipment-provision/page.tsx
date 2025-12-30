"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import OurClient from "@/components/sections/home/OurClient";
import { fadeUp, fadeScale, fadeLeft, fadeRight, stagger } from "@/lib/motion";

/* ================= DATA ================= */
const equipments = [
  {
    name: "Chromebook Education",
    desc: "Perangkat belajar berbasis cloud dengan manajemen terpusat.",
    tag: "Education Device",
  },
  {
    name: "Interactive Flat Panel (IFP)",
    desc: "Layar interaktif untuk kelas digital & presentasi modern.",
    tag: "Smart Classroom",
  },
  {
    name: "Personal Computer (PC)",
    desc: "PC kantor dan laboratorium dengan spesifikasi sesuai kebutuhan.",
    tag: "Workstation",
  },
  {
    name: "Networking & Cable",
    desc: "Kabel LAN, HDMI, power, dan infrastruktur pendukung.",
    tag: "Infrastructure",
  },
  {
    name: "Audio Visual Equipment",
    desc: "Camera, microphone, speaker untuk kelas & streaming.",
    tag: "AV System",
  },
  {
    name: "Custom Equipment",
    desc: "Pengadaan perangkat sesuai permintaan institusi.",
    tag: "Custom",
  },
];

/* ================= PAGE ================= */
export default function EquipmentProvisionServices() {
  return (
    <main className="overflow-hidden">

      {/* ================= INTRO ================= */}
      <section className="mt-20 py-40 bg-primary-blue text-white">
        <motion.div
          className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
        >
          <motion.div variants={fadeUp}>
            <span className="inline-block mb-4 px-4 py-1 rounded-full bg-primary-green/20 text-primary-green text-sm font-medium">
              Equipment Provision
            </span>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Penyediaan Perangkat  
              <br />
              Pendukung Pendidikan Digital
            </h1>

            <p className="mt-6 text-white/80 max-w-xl">
              LuminoED menyediakan berbagai perangkat teknologi pendidikan
              mulai dari Chromebook, PC, IFP, hingga infrastruktur pendukung
              untuk memastikan ekosistem pembelajaran berjalan optimal.
            </p>
          </motion.div>

          {/* VISUAL BLOCK */}
          <motion.div
            variants={fadeScale}
            className="h-72 rounded-3xl bg-white/10 border border-white/20 flex items-center justify-center text-white/50 text-lg"
          >
            Equipment Showcase
          </motion.div>
        </motion.div>
      </section>

      {/* ================= EQUIPMENT GRID ================= */}
      <section className="py-28 bg-white">
        <motion.div
          className="max-w-7xl mx-auto px-6"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
        >
          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-4xl font-bold text-primary-blue mb-16"
          >
            Produk & Perangkat yang Kami Sediakan
          </motion.h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {equipments.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="group relative p-8 rounded-2xl border border-gray-200 hover:border-primary-blue transition"
              >
                <span className="text-xs font-semibold text-primary-green">
                  {item.tag}
                </span>

                <h3 className="mt-4 text-xl font-semibold text-primary-blue">
                  {item.name}
                </h3>

                <p className="mt-3 text-gray-600">
                  {item.desc}
                </p>

                <div className="absolute bottom-6 right-6 text-primary-blue opacity-0 group-hover:opacity-100 transition">
                  →
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ================= VALUE SECTION ================= */}
      <section className="py-28 bg-primary-blue/5 h-75 bg-gradient-to-b to-white">
        <motion.div
          className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
        >
          <motion.div variants={fadeUp}>
            <h4 className="text-xl font-semibold text-primary-blue mb-3">
              Original & Bergaransi
            </h4>
            <p className="text-gray-600">
              Seluruh perangkat resmi dan memiliki garansi sesuai standar pabrikan.
            </p>
          </motion.div>

          <motion.div variants={fadeUp}>
            <h4 className="text-xl font-semibold text-primary-blue mb-3">
              Instalasi & Setup
            </h4>
            <p className="text-gray-600">
              Termasuk konfigurasi awal agar perangkat siap langsung digunakan.
            </p>
          </motion.div>

          <motion.div variants={fadeUp}>
            <h4 className="text-xl font-semibold text-primary-blue mb-3">
              Terintegrasi Sistem LuminoED
            </h4>
            <p className="text-gray-600">
              Perangkat dapat diintegrasikan dengan SmartSchool & Google Workspace.
            </p>
          </motion.div>
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
        <section className="py-32 bg-gradient-to-r from-primary-blue to-primary-blue/90">
          <motion.div
            className="max-w-7xl mx-auto px-6 text-center text-white"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            variants={stagger}
          >
            <motion.h2
              variants={fadeUp}
              className="text-3xl md:text-4xl font-bold"
            >
              Siap Melengkapi Perangkat Digital Sekolah Anda?
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-2xl mx-auto text-white/80 text-lg"
            >
              Konsultasikan kebutuhan perangkat pendidikan Anda bersama tim LuminoED.
              Kami siap membantu mulai dari pemilihan, pengadaan, hingga instalasi.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
            >
              <a
                href="/contact"
                className="px-8 py-4 rounded-full bg-primary-green text-white font-semibold hover:opacity-90 transition text-center"
              >
                Konsultasi Sekarang
              </a>
            </motion.div>
          </motion.div>
        </section>
    </main>
  );
}
