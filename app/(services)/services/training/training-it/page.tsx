"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle, ArrowRight } from "lucide-react";
import OurClient from "@/components/sections/home/OurClient";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

export default function TrainingITServices() {
  return (
    <main className="w-full overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="px-4 sm:px-6">
        <div className="relative bg-gradient-to-br from-primary-blue via-[#1b1f5c] to-[#0f123f] text-white py-36 max-w-7xl mx-auto px-6 md:px-20 rounded-xl overflow-hidden">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* TEXT */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block mb-4 px-4 py-1 text-sm rounded-full bg-white/10">
              Training Program
            </span>

            <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight">
              Training IT
              <br />
              untuk Era Digital
            </h1>

            <p className="mt-6 text-lg text-white/80 max-w-xl">
              Program pelatihan IT berbasis praktik untuk guru, siswa,
              dan profesional—dirancang sesuai kebutuhan industri dan pendidikan modern.
            </p>

            <div className="mt-10 flex gap-4 flex-wrap">
              <Link
                href="/contact"
                className="bg-primary-green text-primary-blue px-6 py-3 rounded-full font-semibold hover:bg-lime-300 transition"
              >
                Request Training
              </Link>

              <Link
                href="#materi"
                className="border border-white/30 px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition"
              >
                Lihat Materi
              </Link>
            </div>
          </motion.div>

          {/* FLOATING CARDS */}
          <div className="relative hidden md:block h-[420px]">
            {["Web Dev", "Database", "System"].map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.2 }}
                className={`absolute ${
                  i === 0
                    ? "top-0 left-10"
                    : i === 1
                    ? "top-32 right-10"
                    : "bottom-0 left-32"
                } bg-white/10 backdrop-blur-md rounded-xl p-6 w-48`}
              >
                <h3 className="font-bold">{item}</h3>
                <p className="text-sm text-white/70 mt-1">
                  Practical learning
                </p>
              </motion.div>
            ))}
          </div>
        </div>
        </div>
      </section>

      {/* ================= OVERVIEW ================= */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-blue">
              Kenapa Training IT LuminoED?
            </h2>

            <p className="mt-6 text-slate-600 leading-relaxed">
              Training IT LuminoED tidak hanya fokus pada teori, tetapi
              langsung mengajak peserta membangun solusi nyata yang dapat
              diterapkan di lingkungan pendidikan dan kerja.
            </p>

            <p className="mt-4 text-slate-600 leading-relaxed">
              Setiap peserta akan mendapatkan pengalaman belajar berbasis
              proyek, mentoring, dan evaluasi kompetensi.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="/services/smartschool.png"
              alt="Training IT"
              width={520}
              height={520}
              className="rounded-2xl shadow-2xl"
              priority
            />
          </motion.div>
        </div>
      </section>

      {/* ================= TIMELINE MATERI ================= */}
      <section id="materi" className="bg-slate-50 py-32">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-blue text-center">
            Alur Materi Training
          </h2>

          <div className="mt-20 relative border-l-2 border-primary-green pl-10 space-y-16">
            {[
              "Fundamental IT & Digital Literacy",
              "Web Development & Database",
              "Sistem Informasi Pendidikan",
              "Keamanan Data & Etika Digital",
              "Final Project & Implementasi",
            ].map((item, i) => (
              <motion.div
                key={item}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative"
              >
                <span className="absolute -left-[22px] top-1 w-4 h-4 rounded-full bg-primary-green" />
                <h3 className="text-xl font-bold text-primary-blue">
                  {item}
                </h3>
                <p className="mt-2 text-slate-600 max-w-xl">
                  Materi dirancang bertahap agar peserta memahami konsep
                  dan mampu menerapkannya secara nyata.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= METODE ================= */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-blue">
            Metode Pembelajaran
          </h2>

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "Project Based Learning",
              "Hybrid Learning",
              "Mentoring Intensif",
              "Sertifikasi & Evaluasi",
            ].map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/70 backdrop-blur-md border rounded-xl p-6 shadow-sm"
              >
                <CheckCircle className="mx-auto text-primary-green mb-4" />
                <p className="font-semibold">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WAVE ================= */}
        <div className="relative overflow-hidden">
          <Image
            src="/palkon.png"
            width={1920}
            height={400}
            alt="Wave"
            className="w-full"
          />
        </div>
  
        {/* ================= CLIENT ================= */}
        <div className="max-w-7xl mx-auto px-6">
          <OurClient />
        </div>

      {/* ================= CTA ================= */}
      <section className="bg-primary-blue text-white py-32">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Siap Meningkatkan Kompetensi IT?
          </h2>

          <p className="mt-6 text-white/80 max-w-2xl mx-auto">
            Konsultasikan kebutuhan training IT institusi Anda bersama LuminoED.
            Kami siap merancang program terbaik.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 mt-10 bg-primary-green text-primary-blue px-8 py-4 rounded-full font-semibold hover:bg-lime-300 transition"
          >
            Mulai Sekarang
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
