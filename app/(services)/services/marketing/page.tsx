"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animation";
import Image from "next/image";
import OurClient from "@/components/sections/home/OurClient";
import Link from "next/link";

export default function MarketingServices() {
  return (
    <main className="overflow-hidden">
      <section className="px-4 sm:px-6">
        <div className="max-w-7xl mx-auto rounded-lg bg-linear-to-br from-primary-blue to-blue-900 text-white py-32">
          <motion.div
            className="max-w-7xl mx-auto px-6 text-center"
            variants={fadeUp}
            initial="hidden"
            animate="show"
          >
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Design & Marketing untuk Institusi Pendidikan
            </h1>
            <p className="mt-6 text-lg md:text-xl text-blue-100 max-w-3xl mx-auto">
              Strategi visual dan pemasaran digital untuk meningkatkan citra,
              kepercayaan, dan daya saing sekolah di era digital.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <motion.div
          className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10"
          variants={staggerContainer(0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {[
            {
              title: "Branding Edukatif",
              desc: "Identitas visual yang profesional, konsisten, dan mencerminkan nilai pendidikan.",
            },
            {
              title: "Strategi Digital",
              desc: "Pendekatan pemasaran berbasis data untuk menjangkau siswa dan orang tua.",
            },
            {
              title: "Konten Berkualitas",
              desc: "Desain dan konten yang relevan, komunikatif, dan berorientasi edukasi.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="bg-white rounded-2xl shadow-lg p-8"
            >
              <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="bg-gray-50 py-24">
        <motion.div
          className="max-w-7xl mx-auto px-6"
          variants={staggerContainer(0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.h2
            variants={fadeUp}
            className="text-3xl font-bold text-center mb-16"
          >
            Layanan Design & Marketing
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "Brand Identity & Logo",
              "Desain Media Sosial",
              "Company Profile Sekolah",
              "Website & Landing Page",
              "Video Promosi & Edukasi",
              "Digital Campaign",
              "Copywriting Edukatif",
              "Konten AI-Assisted",
            ].map((service, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="bg-white p-6 rounded-xl shadow"
              >
                <p className="font-medium">{service}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="py-24">
        <motion.div
          className="max-w-7xl mx-auto px-6"
          variants={staggerContainer(0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.h2
            variants={fadeUp}
            className="text-3xl font-bold text-center mb-16"
          >
            Proses Kerja Kami
          </motion.h2>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              "Analisis Kebutuhan",
              "Perancangan Strategi",
              "Produksi Konten",
              "Evaluasi & Optimasi",
            ].map((step, i) => (
              <motion.div key={i} variants={fadeUp}>
                <div className="w-16 h-16 mx-auto rounded-full bg-primary-blue text-white flex items-center justify-center font-bold mb-4">
                  {i + 1}
                </div>
                <p className="font-medium">{step}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <div className="relative overflow-hidden">
        <Image
          src="/wave.png"
          width={1920}
          height={400}
          alt="Wave"
          className="w-full"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <OurClient />
      </div>

      <section className="bg-primary-blue text-white py-24">
        <motion.div
          className="max-w-4xl mx-auto px-6 text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            Tingkatkan Citra Sekolah Anda Bersama LuminoED
          </h2>
          <p className="mt-6 text-blue-200">
            Wujudkan strategi pemasaran pendidikan yang profesional, modern, dan
            bermakna.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 mt-10 bg-white text-blue-900 px-8 py-4 rounded-full font-semibold hover:bg-blue-100 transition"
          >
            Konsultasi Sekarang
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
