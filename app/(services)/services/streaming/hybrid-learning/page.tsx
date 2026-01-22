"use client";

import { motion } from "framer-motion";
import { fadeUp, fadeLeft, fadeRight, stagger } from "@/lib/motion";
import Image from "next/image";
import OurClient from "@/components/sections/home/OurClient";
import Link from "next/link";

export default function HybridLearningServices() {
  return (
    <main className="overflow-hidden">
      <section className="py-32 bg-linear-to-b from-white to-primary-blue/10">
        <motion.div
          className="max-w-7xl mx-auto px-6 text-center"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
          variants={stagger}
        >
          <motion.span
            variants={fadeUp}
            className="inline-block mb-4 px-4 py-1 rounded-full bg-primary-green/10 text-primary-green text-sm font-medium"
          >
            Hybrid Learning
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="text-4xl md:text-5xl font-bold text-primary-blue"
          >
            Belajar Fleksibel, Terhubung Tanpa Batas
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-3xl mx-auto text-lg text-gray-600"
          >
            LuminoED menghadirkan pembelajaran hybrid melalui sesi Google Meet
            yang terintegrasi langsung ke YouTube, memungkinkan siswa belajar
            secara bersamaan dari kelas maupun jarak jauh.
          </motion.p>
        </motion.div>
      </section>

      <section className="py-28 bg-white">
        <motion.div
          className="max-w-7xl mx-auto px-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={stagger}
        >
          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-4xl font-bold text-primary-blue text-center mb-16"
          >
            Alur Hybrid Learning Terintegrasi
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-10 text-center">
            <motion.div
              variants={fadeUp}
              className="p-8 rounded-2xl bg-primary-blue/5"
            >
              <h3 className="text-xl font-semibold text-primary-blue mb-4">
                Google Meet
              </h3>
              <p className="text-gray-600">
                Guru mengajar secara langsung dari kelas atau studio menggunakan
                Google Meet.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="p-8 rounded-2xl bg-primary-green/5"
            >
              <h3 className="text-xl font-semibold text-primary-green mb-4">
                Live ke YouTube
              </h3>
              <p className="text-gray-600">
                Sesi pembelajaran disiarkan secara real-time ke YouTube tanpa
                konfigurasi rumit.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="p-8 rounded-2xl bg-primary-blue/5"
            >
              <h3 className="text-xl font-semibold text-primary-blue mb-4">
                Akses Siswa
              </h3>
              <p className="text-gray-600">
                Siswa dapat mengikuti secara live atau menonton ulang kapan saja
                sesuai kebutuhan.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <section className="py-28 bg-primary-blue">
        <motion.div
          className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 text-white"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
        >
          <motion.div variants={fadeLeft}>
            <h3 className="text-2xl font-bold mb-4">Siswa di Kelas</h3>
            <p className="text-white/80">
              Tetap mendapatkan pengalaman belajar tatap muka, dengan materi
              yang sama seperti siswa jarak jauh.
            </p>
          </motion.div>

          <motion.div variants={fadeRight}>
            <h3 className="text-2xl font-bold mb-4">Siswa Jarak Jauh</h3>
            <p className="text-white/80">
              Mengikuti pembelajaran dari mana saja melalui YouTube dengan
              kualitas audio dan video yang stabil.
            </p>
          </motion.div>
        </motion.div>
      </section>

      <section className="py-28 bg-white">
        <motion.div
          className="max-w-7xl mx-auto px-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={stagger}
        >
          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-4xl font-bold text-primary-blue text-center mb-16"
          >
            Fitur Unggulan Hybrid Learning
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Live & Recording",
                desc: "Setiap sesi otomatis terekam dan dapat diputar ulang.",
              },
              {
                title: "Akses Fleksibel",
                desc: "Belajar tidak terikat waktu dan lokasi.",
              },
              {
                title: "Terintegrasi Ekosistem Google",
                desc: "Didukung Google Workspace for Education Premium.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="p-8 rounded-2xl bg-primary-blue/5"
              >
                <h4 className="text-xl font-semibold text-primary-blue mb-3">
                  {item.title}
                </h4>
                <p className="text-gray-600">{item.desc}</p>
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

      <section className="py-32 bg-primary-blue">
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
            Siap Menerapkan Hybrid Learning di Sekolah Anda?
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-2xl mx-auto text-white/80 text-lg"
          >
            Tingkatkan kualitas pembelajaran dengan sistem hybrid terintegrasi
            Google Meet dan YouTube, didukung teknologi LuminoED.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
          >
            <Link
              href="/contact"
              className="px-8 py-4 rounded-full bg-primary-green text-white font-semibold hover:opacity-90 transition text-center"
            >
              Konsultasi Sekarang
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}
