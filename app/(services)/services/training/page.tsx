"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import OurClient from "@/components/sections/home/OurClient";
import { motion } from "framer-motion";

/* ================= ANIMATION VARIANTS ================= */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

const stagger = {
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function TrainingServices() {
  return (
    <main className="w-full">

      {/* ================= HERO ================= */}
      <section className="px-4 sm:px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.7 }}
          className="relative bg-primary-blue max-w-7xl mx-auto px-6 md:px-20 text-white py-32 rounded-xl overflow-hidden"
        >
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight">
                Membangun Kompetensi Digital <br />
                untuk Pendidikan & Industri Masa Depan
              </h1>

              <p className="mt-6 text-lg text-white/80 max-w-xl">
                LuminoED menghadirkan program pelatihan berbasis praktik yang
                dirancang untuk meningkatkan kompetensi teknologi, kreativitas,
                dan produktivitas di era digital.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="#program"
                  className="bg-primary-green text-primary-blue font-semibold px-6 py-3 rounded-full hover:bg-lime-300 transition"
                >
                  Lihat Program Training
                </Link>

                <Link
                  href="/contact"
                  className="border border-white/40 px-6 py-3 rounded-full hover:bg-white/10 transition"
                >
                  Konsultasi Training
                </Link>
              </div>
            </div>

            <div className="hidden md:block">
              <div className="aspect-video bg-black/30 rounded-2xl flex items-center justify-center">
                <span className="text-white/60">Training Preview</span>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ================= PROGRAM ================= */}
      <motion.section
        id="program"
        className="py-32"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-4xl font-bold text-primary-blue text-center"
          >
            Program Training LuminoED
          </motion.h2>

          <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            <TrainingCard
              title="Training IT"
              desc="Pelatihan teknologi informasi berbasis praktik sesuai kebutuhan industri dan pendidikan."
              href="/services/training/training-it"
            />
            <TrainingCard
              title="Google Workspace for Education"
              desc="Optimalisasi pembelajaran dan manajemen sekolah dengan ekosistem Google Workspace."
              href="/services/training/google-workspace"
            />
            <TrainingCard
              title="AI Technology"
              desc="Pemanfaatan Artificial Intelligence untuk pendidikan, administrasi, dan produktivitas."
              href="/services/training/ai-technology"
            />
          </div>
        </div>
      </motion.section>

      {/* ================= METODE ================= */}
      <motion.section
        className="bg-slate-50 py-32"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-4xl font-bold text-primary-blue text-center"
          >
            Metode Pelatihan LuminoED
          </motion.h2>

          <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
            <MethodItem title="Hybrid Learning" desc="Offline, online, dan hybrid sesuai kebutuhan." />
            <MethodItem title="Project Based" desc="Belajar melalui studi kasus dan project nyata." />
            <MethodItem title="Mentor Profesional" desc="Didampingi trainer dan praktisi berpengalaman." />
            <MethodItem title="Sertifikasi" desc="Sertifikat resmi sebagai bukti kompetensi." />
          </div>
        </div>
      </motion.section>

      {/* ================= TARGET ================= */}
      <motion.section
        className="py-32"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-4xl font-bold text-primary-blue text-center"
          >
            Siapa yang Cocok Mengikuti Training?
          </motion.h2>

          <div className="mt-16 grid md:grid-cols-3 gap-10">
            <TargetItem text="Guru & Tenaga Pendidik" />
            <TargetItem text="Institusi Pendidikan" />
            <TargetItem text="Mahasiswa & Siswa" />
            <TargetItem text="Profesional & Tim Perusahaan" />
            <TargetItem text="Lembaga Pendidikan Terpadu" />
          </div>
        </div>
      </motion.section>

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
    </main>
  );
}

/* ================= COMPONENTS ================= */

function TrainingCard({ title, desc, href }: any) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -6 }}
      className="bg-white rounded-2xl shadow-lg p-6 flex flex-col transition"
    >
      <h3 className="text-xl font-bold text-primary-blue">{title}</h3>
      <p className="mt-3 text-slate-600 flex-1">{desc}</p>
      <Link
        href={href}
        className="mt-6 inline-flex items-center gap-2 font-semibold text-primary-green"
      >
        Pelajari
        <ArrowRight size={16} />
      </Link>
    </motion.div>
  );
}

function MethodItem({ title, desc }: any) {
  return (
    <motion.div
      variants={fadeUp}
      className="bg-white rounded-xl shadow p-6"
    >
      <h3 className="font-bold text-lg text-primary-blue">{title}</h3>
      <p className="mt-2 text-slate-600">{desc}</p>
    </motion.div>
  );
}

function TargetItem({ text }: any) {
  return (
    <motion.div
      variants={fadeUp}
      className="border rounded-xl p-6 text-center font-semibold text-slate-700"
    >
      {text}
    </motion.div>
  );
}