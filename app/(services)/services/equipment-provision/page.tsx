"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import OurClient from "@/components/sections/home/OurClient";
import { fadeUp, fadeScale, stagger } from "@/lib/motion";

const MotionLink = motion(Link);

const equipments = [
  {
    name: "Chromebook Education",
    desc: "Perangkat belajar berbasis cloud dengan manajemen terpusat.",
    tag: "Education Device",
    link: "/services/equipment-provision/chromebook",
  },
  {
    name: "Hybrid Learning",
    desc: "Perangkat untuk pembelajaran hybrid: webcam, mic, pc, tripod, dll.",
    tag: "Hybrid Learning",
    link: "/services/equipment-provision/hybrid-learning",
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

export default function EquipmentProvisionServices() {
  return (
    <main className="overflow-hidden">
      {/* HERO */}
      <section className="mt-16 sm:mt-20 py-20 sm:py-28 lg:py-40 bg-primary-blue text-white">
        <motion.div
          className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
        >
          <motion.div variants={fadeUp}>
            <span className="inline-block mb-4 px-4 py-1 rounded-full bg-primary-green/20 text-primary-green text-sm font-medium">
              Equipment Provision
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              Penyediaan Perangkat
              <br />
              Pendukung Pendidikan Digital
            </h1>

            <p className="mt-6 text-white/80 max-w-xl text-base sm:text-lg">
              LuminoED menyediakan berbagai perangkat teknologi pendidikan mulai
              dari Chromebook, PC, IFP, hingga infrastruktur pendukung untuk
              memastikan ekosistem pembelajaran berjalan optimal.
            </p>
          </motion.div>

          <motion.div
            variants={fadeScale}
            className="h-48 sm:h-64 lg:h-72 rounded-3xl bg-white/10 border border-white/20 flex items-center justify-center text-white/50 text-sm sm:text-lg"
          >
            Equipment Showcase
          </motion.div>
        </motion.div>
      </section>

      {/* PRODUK */}
      <section className="py-20 sm:py-24 lg:py-28 bg-white">
        <motion.div
          className="max-w-7xl mx-auto px-6"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
        >
          <motion.h2
            variants={fadeUp}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-blue mb-12 sm:mb-16"
          >
            Produk & Perangkat yang Kami Sediakan
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {equipments.map((item, i) => (
              <MotionLink
                key={i}
                href={item.link ?? "/contact"}
                variants={fadeUp}
                className="group relative block p-6 sm:p-8 rounded-2xl border border-gray-200 hover:border-primary-blue hover:-translate-y-1 hover:shadow-lg transition-all"
              >
                <span className="text-xs font-semibold text-primary-green">
                  {item.tag}
                </span>

                <h3 className="mt-4 text-lg sm:text-xl font-semibold text-primary-blue">
                  {item.name}
                </h3>

                <p className="mt-3 text-sm sm:text-base text-gray-600">
                  {item.desc}
                </p>

                <div className="absolute bottom-6 right-6 text-primary-blue opacity-0 group-hover:opacity-100 transition">
                  →
                </div>
              </MotionLink>
            ))}
          </div>
        </motion.div>
      </section>

      {/* KEUNGGULAN */}
      <section className="py-20 sm:py-24 lg:py-28 bg-primary-blue/5 bg-linear-to-b to-white">
        <motion.div
          className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
        >
          {[
            {
              title: "Original & Bergaransi",
              desc: "Seluruh perangkat resmi dan memiliki garansi sesuai standar pabrikan.",
            },
            {
              title: "Instalasi & Setup",
              desc: "Termasuk konfigurasi awal agar perangkat siap langsung digunakan.",
            },
            {
              title: "Terintegrasi Sistem LuminoED",
              desc: "Perangkat dapat diintegrasikan dengan SmartSchool & Google Workspace.",
            },
          ].map((item, i) => (
            <motion.div key={i} variants={fadeUp}>
              <h4 className="text-lg sm:text-xl font-semibold text-primary-blue mb-3">
                {item.title}
              </h4>
              <p className="text-sm sm:text-base text-gray-600">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* WAVE */}
      <motion.div
        className="relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Image
          src="/wave.webp"
          alt="Wave"
          width={1920}
          height={400}
          className="w-full h-auto object-cover"
        />
      </motion.div>

      {/* CLIENT */}
      <motion.div
        className="max-w-7xl mx-auto px-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <OurClient />
      </motion.div>

      {/* CTA */}
      <section className="py-20 sm:py-28 lg:py-32 bg-linear-to-r from-primary-blue to-primary-blue/90">
        <motion.div
          className="max-w-7xl mx-auto px-6 text-center text-white"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
        >
          <motion.h2
            variants={fadeUp}
            className="text-2xl sm:text-3xl md:text-4xl font-bold"
          >
            Siap Melengkapi Perangkat Digital Sekolah Anda?
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-2xl mx-auto text-white/80 text-base sm:text-lg"
          >
            Konsultasikan kebutuhan perangkat pendidikan Anda bersama tim
            LuminoED. Kami siap membantu mulai dari pemilihan, pengadaan, hingga
            instalasi.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-10 flex justify-center"
          >
            <Link
              href="/contact"
              className="px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-primary-green text-white font-semibold hover:opacity-90 transition"
            >
              Konsultasi Sekarang
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}