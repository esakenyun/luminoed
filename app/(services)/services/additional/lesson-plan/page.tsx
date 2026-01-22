"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import OurClient from "@/components/sections/home/OurClient";
import { stagger, slideLeft, slideUp } from "@/lib/motion";

export default function LessonPlanServices() {
  return (
    <main className="bg-white overflow-hidden">
      <section className="relative min-h-screen flex max-w-7xl mx-auto xl:rounded-xl items-center bg-linear-to-br from-primary-blue via-primary-blue/90 to-primary-green text-white overflow-hidden px-6 py-32">
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-20 grid xl:grid-cols-2 gap-16 items-center">
          <motion.div variants={stagger} initial="hidden" animate="show">
            <motion.span
              variants={slideUp}
              className="inline-block mb-6 px-5 py-2 rounded-full bg-white/10 text-sm"
            >
              Lesson Plan Digital
            </motion.span>

            <motion.h1
              variants={slideUp}
              className="text-4xl md:text-5xl font-bold leading-tight"
            >
              Otomatisasi Modul Ajar
              <span className="block text-primary-green">
                Tanpa Ribet Spreadsheet
              </span>
            </motion.h1>

            <motion.p variants={slideUp} className="mt-6 text-white/90 text-lg">
              LuminoED membantu guru menyusun modul ajar dan RPP secara otomatis
              melalui integrasi spreadsheet, template kurikulum, dan sistem
              pintar berbasis AI.
            </motion.p>

            <motion.div variants={slideUp} className="mt-10 flex gap-4">
              <Link
                href="/contact"
                className="bg-white text-primary-blue px-8 py-4 rounded-xl font-semibold hover:bg-white/90 transition"
              >
                Konsultasi Sekarang
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            variants={slideLeft}
            initial="hidden"
            animate="show"
            className="relative"
          >
            <div className="absolute -inset-8 bg-primary-green/30 blur-3xl rounded-full" />
            <Image
              src="/abouts.webp"
              alt="Lesson Plan Automation"
              width={620}
              height={520}
              className="relative rounded-3xl shadow-2xl"
            />
          </motion.div>
        </div>
      </section>

      <section className="mt-20 py-32 bg-linear-to-b from-white to-primary-blue/5">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-6"
        >
          <motion.h2
            variants={slideUp}
            className="text-3xl md:text-4xl font-bold text-primary-blue text-center"
          >
            Alur Otomatisasi Modul Ajar
          </motion.h2>

          <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              {
                title: "Template Kurikulum",
                desc: "Template modul ajar sesuai kurikulum nasional & merdeka.",
              },
              {
                title: "Input Spreadsheet",
                desc: "Guru cukup mengisi data pada spreadsheet terstruktur.",
              },
              {
                title: "Proses Otomatis",
                desc: "Sistem menyusun modul ajar & RPP secara otomatis.",
              },
              {
                title: "Siap Digunakan",
                desc: "Modul ajar siap cetak, unggah, dan integrasi eRapor.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={slideUp}
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl p-8 shadow-lg text-center"
              >
                <div className="mx-auto mb-6 h-14 w-14 rounded-xl bg-primary-green/10 flex items-center justify-center font-bold text-primary-green">
                  {i + 1}
                </div>
                <h3 className="text-xl font-semibold text-primary-blue">
                  {item.title}
                </h3>
                <p className="mt-3 text-gray-600">{item.desc}</p>
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
          <motion.div variants={slideUp}>
            <h2 className="text-3xl font-bold text-primary-blue">
              Kekuatan Spreadsheet Terintegrasi
            </h2>
            <p className="mt-6 text-gray-600">
              Tidak perlu belajar sistem baru yang rumit. Guru cukup menggunakan
              spreadsheet seperti Google Sheets yang sudah familiar, sementara
              sistem LuminoED mengelola otomatisasi di belakang layar.
            </p>

            <ul className="mt-8 space-y-4 text-gray-700">
              <li>✔ Satu input untuk banyak modul</li>
              <li>✔ Sinkron antar kelas & semester</li>
              <li>✔ Minim kesalahan input data</li>
              <li>✔ Riwayat perubahan tercatat</li>
            </ul>
          </motion.div>

          <motion.div
            variants={slideLeft}
            whileHover={{ scale: 1.04 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-primary-blue/20 blur-3xl rounded-3xl" />
            <Image
              src="/abouts.webp"
              alt="Spreadsheet Integration"
              width={600}
              height={420}
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

      <section className="py-32 bg-linear-to-r from-primary-blue to-primary-green">
        <motion.div
          variants={slideUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto px-6 text-center text-white"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            Waktunya Guru Fokus Mengajar
          </h2>
          <p className="mt-6 text-white/90">
            Biarkan LuminoED mengurus administrasi dan modul ajar secara
            otomatis.
          </p>

          <Link
            href="/contact"
            className="inline-block mt-10 bg-white text-primary-blue px-10 py-4 rounded-xl font-semibold hover:bg-white/90 transition"
          >
            Mulai Digitalisasi Sekarang
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
