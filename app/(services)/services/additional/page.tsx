"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import OurClient from "@/components/sections/home/OurClient";
import { fadeUp, stagger } from "@/lib/motion";

export default function AdditionalServices() {
  return (
    <main className="overflow-hidden bg-white">
      <section className="relative bg-white py-32">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-6 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-primary-blue">
            Additional Services
          </h1>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            Layanan pendukung yang menyempurnakan ekosistem Smart Education
            LuminoED untuk administrasi pembelajaran yang lebih efektif, akurat,
            dan terintegrasi.
          </p>
        </motion.div>
      </section>

      <section className="py-24">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10"
        >
          {[
            {
              title: "Efisiensi Administrasi",
              desc: "Mengurangi beban kerja manual melalui sistem digital terotomatisasi.",
            },
            {
              title: "Akurasi & Transparansi",
              desc: "Data pembelajaran dan penilaian tercatat rapi dan real-time.",
            },
            {
              title: "Terintegrasi SmartSchool",
              desc: "Sinkron dengan Smart Class, Smart Talent, dan Smart Management.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition"
            >
              <div className="h-12 w-12 rounded-xl bg-primary-green/10 flex items-center justify-center mb-6">
                <span className="text-primary-green font-bold text-xl">✓</span>
              </div>
              <h3 className="text-xl font-semibold text-primary-blue">
                {item.title}
              </h3>
              <p className="mt-3 text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="py-24 bg-primary-blue/5">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center"
        >
          <motion.div variants={fadeUp}>
            <h2 className="text-3xl font-bold text-primary-blue">
              Lesson Plan Digital
            </h2>
            <p className="mt-6 text-gray-600">
              Solusi perencanaan pembelajaran digital yang membantu guru
              menyusun RPP secara terstruktur, cepat, dan sesuai kurikulum.
            </p>

            <ul className="mt-6 space-y-3 text-gray-700">
              <li>• Template RPP siap pakai</li>
              <li>• Penyesuaian kurikulum nasional</li>
              <li>• Kolaborasi antar guru</li>
              <li>• Terintegrasi Smart Class</li>
            </ul>

            <Link
              href="/services/additional/lesson-plan"
              className="inline-block mt-10 bg-primary-blue text-white px-8 py-4 rounded-xl font-semibold hover:bg-primary-blue/90 transition"
            >
              Coba Lesson Plan
            </Link>
          </motion.div>

          <motion.div
            variants={fadeUp}
            whileHover={{ scale: 1.03 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-primary-blue/20 rounded-3xl blur-3xl" />
            <Image
              src="/abouts.webp"
              alt="Lesson Plan Digital"
              width={600}
              height={420}
              className="relative rounded-3xl shadow-2xl"
            />
          </motion.div>
        </motion.div>
      </section>

      <section className="py-24">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center"
        >
          <motion.div
            variants={fadeUp}
            whileHover={{ scale: 1.03 }}
            className="relative order-2 md:order-1"
          >
            <div className="absolute inset-0 bg-primary-green/20 rounded-3xl blur-3xl" />
            <Image
              src="/abouts.webp"
              alt="eRapor"
              width={600}
              height={420}
              className="relative rounded-3xl shadow-2xl"
            />
          </motion.div>

          <motion.div variants={fadeUp} className="order-1 md:order-2">
            <h2 className="text-3xl font-bold text-primary-green">
              eRapor Terintegrasi
            </h2>
            <p className="mt-6 text-gray-600">
              Sistem penilaian digital yang mempermudah pengelolaan nilai,
              rapor, dan laporan perkembangan siswa secara otomatis.
            </p>

            <ul className="mt-6 space-y-3 text-gray-700">
              <li>• Input nilai cepat & akurat</li>
              <li>• Rekap nilai otomatis</li>
              <li>• Rapor digital siap cetak</li>
              <li>• Akses wali murid online</li>
            </ul>

            <Link
              href="/services/additional/erapor"
              className="inline-block mt-10 border-2 border-primary-green text-primary-green px-8 py-4 rounded-xl font-semibold hover:bg-primary-green hover:text-white transition"
            >
              Lihat Demo eRapor
            </Link>
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
          src="/wave.webp"
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
            Siap Mengoptimalkan Administrasi Sekolah Anda?
          </h2>
          <p className="mt-6 text-white/90">
            Gunakan layanan tambahan LuminoED untuk pembelajaran yang lebih
            terstruktur, transparan, dan efisien.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services/additional/lesson-plan"
              className="bg-white text-primary-blue px-8 py-4 rounded-xl font-semibold hover:bg-white/90 transition"
            >
              Lesson Plan Digital
            </Link>
            <Link
              href="/services/additional/erapor"
              className="border-2 border-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-primary-blue transition"
            >
              eRapor
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
