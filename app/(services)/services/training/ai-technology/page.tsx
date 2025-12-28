"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Brain, Cpu, BarChart3, Sparkles, ArrowRight } from "lucide-react";
import OurClient from "@/components/sections/home/OurClient";

/* ================= ANIMATION ================= */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

const stagger = {
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

export default function AITechnologyServices() {
  return (
    <main className="w-full overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative px-4 sm:px-6">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-blue via-indigo-700 to-purple-700 max-w-7xl mx-auto px-6 md:px-20 rounded-xl" />
        <div className="max-w-7xl mx-auto px-30 relative py-40 text-white">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 text-sm bg-white/10 px-4 py-2 rounded-full">
              <Sparkles size={16} /> AI Technology Training
            </span>

            <h1 className="mt-6 text-4xl md:text-6xl font-extrabold leading-tight">
              Artificial Intelligence <br />
              untuk Pendidikan Masa Depan
            </h1>

            <p className="mt-6 text-lg text-white/80">
              Pelatihan AI LuminoED dirancang untuk membantu institusi pendidikan
              memahami, menerapkan, dan memanfaatkan kecerdasan buatan secara
              etis, efektif, dan berdampak nyata.
            </p>

            <div className="mt-10 flex gap-4">
              <Link
                href="/contact"
                className="bg-primary-green text-primary-blue px-6 py-3 rounded-full font-semibold hover:bg-lime-300 transition"
              >
                Request Training
              </Link>
              <Link
                href="#ai-content"
                className="border border-white/40 px-6 py-3 rounded-full hover:bg-white/10 transition"
              >
                Pelajari AI
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= AI CONTENT ================= */}
      <motion.section
        id="ai-content"
        className="py-32"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-30 grid md:grid-cols-2 gap-16 items-center">
          <motion.div variants={fadeUp}>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-blue">
              AI untuk Pendidikan & Manajemen
            </h2>
            <p className="mt-6 text-slate-600 text-lg leading-relaxed">
              AI membantu sekolah dalam pengambilan keputusan berbasis data,
              otomatisasi administrasi, analisis performa siswa, hingga
              personalisasi pembelajaran.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="relative">
            <div className="absolute inset-0 bg-primary-blue/10 rounded-3xl blur-3xl" />
            <Image
              src="/services/additional.jpg"
              alt="AI Illustration"
              width={500}
              height={500}
              className="relative rounded-2xl"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* ================= USE CASE ================= */}
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
            Use Case AI di Lingkungan Pendidikan
          </motion.h2>

          <div className="mt-20 grid md:grid-cols-3 gap-10">
            <AIUseCase
              icon={<Brain />}
              title="AI Learning Assistant"
              desc="Mendukung guru dan siswa melalui asisten pembelajaran berbasis AI."
            />
            <AIUseCase
              icon={<BarChart3 />}
              title="Analisis Performa"
              desc="Mengolah data akademik untuk evaluasi dan pengambilan keputusan."
            />
            <AIUseCase
              icon={<Cpu />}
              title="Otomatisasi Administrasi"
              desc="Mengurangi beban administrasi dengan proses berbasis AI."
            />
          </div>
        </div>
      </motion.section>

      {/* ================= WORKFLOW ================= */}
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
            Alur Pembelajaran AI LuminoED
          </motion.h2>

          <div className="mt-20 grid md:grid-cols-4 gap-8 text-center">
            <WorkflowStep step="01" title="Fundamental AI" />
            <WorkflowStep step="02" title="Data & Model" />
            <WorkflowStep step="03" title="Implementasi" />
            <WorkflowStep step="04" title="Etika & Evaluasi" />
          </div>
        </div>
      </motion.section>

      {/* ================= CTA ================= */}
        <motion.section
        className="relative bg-primary-blue text-white py-32 overflow-hidden"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        >
        {/* GRADIENT TRANSITION */}
        <div className="pointer-events-none absolute bottom-0 left-0 w-full h-75 bg-gradient-to-b from-primary-blue/40 to-white" />

        <div className="relative max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold">
            Siap Mengadopsi AI di Institusi Anda?
            </h2>

            <p className="mt-6 max-w-2xl mx-auto text-white/80">
            LuminoED siap mendampingi transformasi digital berbasis AI secara
            bertahap, terukur, dan berkelanjutan.
            </p>

            <Link
            href="/contact"
            className="inline-flex items-center gap-2 mt-10 bg-primary-green text-primary-blue px-6 py-3 rounded-full font-semibold hover:bg-lime-300 transition"
            >
            Konsultasi AI
            <ArrowRight size={18} />
            </Link>
        </div>
        </motion.section>

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

    </main>
  );
}

/* ================= COMPONENTS ================= */

function AIUseCase({ icon, title, desc }: any) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -6 }}
      className="bg-white rounded-2xl p-6 shadow-lg"
    >
      <div className="text-primary-blue mb-4">{icon}</div>
      <h3 className="font-bold text-lg text-primary-blue">{title}</h3>
      <p className="mt-3 text-slate-600">{desc}</p>
    </motion.div>
  );
}

function WorkflowStep({ step, title }: any) {
  return (
    <motion.div
      variants={fadeUp}
      className="border rounded-xl p-6"
    >
      <span className="text-primary-green font-bold">{step}</span>
      <h4 className="mt-3 font-semibold text-primary-blue">{title}</h4>
    </motion.div>
  );
}
