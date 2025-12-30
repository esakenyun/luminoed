"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

import OurClient from "@/components/sections/home/OurClient";
import {
  fadeUp,
  staggerContainer,
} from "@/lib/animation";

/* ================= PAGE ================= */

export default function GoogleWorkspaceForEducationServices() {
  return (
    <main className="w-full overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="pt-24 pb-32">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h1 className="text-4xl lg:text-6xl font-extrabold text-primary-blue leading-tight">
              Google Workspace <br /> for Education
            </h1>

            <p className="mt-6 text-lg text-slate-600 max-w-xl">
              Transformasi pembelajaran dan manajemen sekolah melalui ekosistem
              Google Workspace for Education yang terintegrasi, aman, dan kolaboratif.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="bg-primary-green text-primary-blue px-6 py-3 rounded-full font-semibold hover:bg-lime-300 transition"
              >
                Konsultasi Implementasi
              </Link>

              <Link
                href="#features"
                className="border px-6 py-3 rounded-full font-semibold hover:bg-slate-100 transition"
              >
                Lihat Fitur
              </Link>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="hidden lg:block"
          >
            <div className="aspect-video rounded-2xl bg-slate-100 flex items-center justify-center">
              <span className="text-slate-400">Workspace Preview</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= WHY ================= */}
      <section className="bg-slate-50 py-32">
        <motion.div
          className="max-w-7xl mx-auto px-6 text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary-blue">
            Mengapa Google Workspace for Education?
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-slate-600">
            Google Workspace for Education membantu sekolah meningkatkan efektivitas
            pembelajaran, kolaborasi guru-siswa, dan efisiensi administrasi.
          </p>
        </motion.div>

        <motion.div
          className="mt-20 max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-10"
          variants={staggerContainer(0.15)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <Feature title="Kolaboratif" desc="Belajar dan bekerja bersama secara real-time." />
          <Feature title="Cloud Based" desc="Akses dokumen kapan saja dan di mana saja." />
          <Feature title="Aman & Terkontrol" desc="Manajemen akun dan keamanan tingkat institusi." />
          <Feature title="Efisien" desc="Mengurangi beban administrasi sekolah." />
        </motion.div>
      </section>

      {/* ================= FEATURES ================= */}
      <section id="features" className="py-32">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

          <motion.div
            variants={staggerContainer(0.12)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.h2
              variants={fadeUp}
              className="text-3xl md:text-4xl font-bold text-primary-blue"
            >
              Fitur Utama Workspace Education
            </motion.h2>

            <motion.ul className="mt-10 space-y-6">
              {[
                "Google Classroom & LMS Integration",
                "Google Drive & Shared Storage",
                "Google Meet untuk Pembelajaran Hybrid",
                "Admin Console & User Management",
                "Keamanan Data & Kontrol Akses",
              ].map((item) => (
                <motion.li
                  key={item}
                  variants={fadeUp}
                  className="flex gap-3 items-start"
                >
                  <CheckCircle2 className="text-primary-green mt-1" />
                  <span className="text-slate-700">{item}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="hidden lg:block"
          >
            <div>
                <Image
                    src="/services/additional.jpg"
                    alt="AI Illustration"
                    width={500}
                    height={500}
                    className="relative rounded-2xl"
                />
            </div>
          </motion.div>
        </div>
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

      {/* ================= CLIENT ================= */}
      <section className="max-w-7xl mx-auto px-6">
        <OurClient />
      </section>

    </main>
  );
}

/* ================= COMPONENT ================= */

function Feature({ title, desc }: { title: string; desc: string }) {
  return (
    <motion.div
      variants={fadeUp}
      className="bg-white rounded-xl p-6 shadow"
    >
      <h3 className="font-bold text-primary-blue">{title}</h3>
      <p className="mt-2 text-slate-600">{desc}</p>
    </motion.div>
  );
}