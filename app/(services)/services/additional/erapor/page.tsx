"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import OurClient from "@/components/sections/home/OurClient";
import { fadeUp, slideRight, stagger } from "@/lib/motion";

export default function ERaporServices() {
  return (
    <main className="bg-white overflow-hidden">
      <section className="relative min-h-screen max-w-7xl mx-auto xl:rounded-xl overflow-hidden bg-linear-to-b from-primary-green to-primary-blue text-white flex items-center">
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-20 grid xl:grid-cols-2 gap-16 items-center">
          <motion.div variants={stagger} initial="hidden" animate="show">
            <motion.span
              variants={fadeUp}
              className="inline-block mb-6 px-5 py-2 rounded-full bg-white/15 text-sm"
            >
              eRapor Digital
            </motion.span>

            <motion.h1
              variants={fadeUp}
              className="text-4xl md:text-5xl font-bold leading-tight"
            >
              Rapor Digital Terintegrasi
              <span className="block text-primary-green/90">
                Akurat, Transparan, Real-Time
              </span>
            </motion.h1>

            <motion.p variants={fadeUp} className="mt-6 text-lg text-white/90">
              LuminoED eRapor membantu sekolah mengelola nilai, rapor, dan
              laporan perkembangan siswa secara otomatis, terstruktur, dan siap
              dipertanggungjawabkan.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Link
                href="/contact"
                className="bg-white text-primary-blue px-8 py-4 rounded-xl font-semibold hover:bg-white/90 transition"
              >
                Konsultasi Implementasi
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            variants={slideRight}
            initial="hidden"
            animate="show"
            className="relative"
          >
            <div className="absolute -inset-10 bg-primary-green/40 blur-3xl rounded-full" />
            <Image
              src="/abouts.jpg"
              alt="eRapor Dashboard"
              width={640}
              height={520}
              className="relative rounded-3xl shadow-2xl"
            />
          </motion.div>
        </div>
      </section>

      <section className="py-32 bg-linear-to-b from-white to-primary-blue/5">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-6"
        >
          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-4xl font-bold text-primary-blue text-center"
          >
            Mengapa Sekolah Beralih ke eRapor?
          </motion.h2>

          <div className="mt-20 grid md:grid-cols-3 gap-12">
            {[
              {
                title: "Penilaian Terstandarisasi",
                desc: "Struktur penilaian sesuai kurikulum nasional dan kebijakan sekolah.",
              },
              {
                title: "Minim Kesalahan Input",
                desc: "Validasi otomatis dan rekap nilai instan.",
              },
              {
                title: "Akses Transparan",
                desc: "Guru, manajemen, dan wali murid melihat data yang sama.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <div className="mb-6 h-14 w-14 rounded-xl bg-primary-green/15 flex items-center justify-center text-primary-green font-bold text-xl">
                  {i + 1}
                </div>
                <h3 className="text-xl font-semibold text-primary-blue">
                  {item.title}
                </h3>
                <p className="mt-4 text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="py-32">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center"
        >
          <motion.div variants={fadeUp}>
            <h2 className="text-3xl font-bold text-primary-blue">
              Alur Kerja eRapor Digital
            </h2>
            <p className="mt-6 text-gray-600">
              Dari input nilai hingga rapor diterima wali murid, semuanya
              berjalan otomatis dan terdokumentasi.
            </p>

            <ul className="mt-8 space-y-4 text-gray-700">
              <li>✔ Input nilai harian, tugas, UTS, dan UAS</li>
              <li>✔ Rekap nilai otomatis per mapel</li>
              <li>✔ Perhitungan nilai akhir instan</li>
              <li>✔ Rapor digital & cetak resmi</li>
              <li>✔ Sinkron dengan Lesson Plan</li>
            </ul>
          </motion.div>

          <motion.div
            variants={slideRight}
            whileHover={{ scale: 1.05 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-primary-blue/25 blur-3xl rounded-3xl" />
            <Image
              src="/abouts.jpg"
              alt="eRapor Workflow"
              width={600}
              height={440}
              className="relative rounded-3xl shadow-xl"
            />
          </motion.div>
        </motion.div>
      </section>

      <motion.div
        className="relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Image
          src="/wave.png"
          alt="Wave"
          width={1920}
          height={400}
          className="w-full"
        />
      </motion.div>

      <motion.div
        className="max-w-7xl mx-auto px-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <OurClient />
      </motion.div>

      <section className="py-32 bg-linear-to-r from-primary-green to-primary-blue">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto px-6 text-center text-white"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            Wujudkan Rapor Digital yang Profesional
          </h2>
          <p className="mt-6 text-white/90">
            Tingkatkan kepercayaan wali murid dan efisiensi sekolah dengan
            sistem eRapor LuminoED.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-primary-blue px-10 py-4 rounded-xl font-semibold hover:bg-white/90 transition"
            >
              Ajukan Demo eRapor
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
