"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import OurClient from "@/components/sections/home/OurClient";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/motion";

export default function SmartManagementPage() {
  return (
    <>
      <section className="w-full pt-24">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
        >
          <div className="mx-auto max-w-7xl px-6">
            <motion.div className="max-w-2xl mb-16" variants={fadeUp}>
              <h1 className="text-4xl lg:text-5xl font-extrabold text-primary-blue">
                Smart Management
              </h1>
              <p className="mt-4 text-lg text-slate-600">
                Solusi manajemen sekolah terintegrasi dari LuminoED untuk
                mengelola administrasi, akademik, guru, dan siswa dalam satu
                sistem digital.
              </p>
            </motion.div>

            <motion.div
              className="grid gap-10 md:grid-cols-3 mb-24"
              variants={stagger}
            >
              {[
                {
                  title: "Centralized School Data",
                  desc: "Kelola data siswa, guru, kelas, dan akademik dalam satu dashboard terpusat.",
                },
                {
                  title: "Automated Administration",
                  desc: "Permudah administrasi sekolah dengan alur kerja otomatis dan efisien.",
                },
                {
                  title: "Real-Time Monitoring",
                  desc: "Pantau aktivitas sekolah dan performa akademik secara real-time.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="rounded-xl bg-white p-6 shadow-sm border"
                >
                  <h3 className="text-xl font-semibold text-primary-blue">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-slate-600">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="relative overflow-hidden rounded-3xl bg-primary-blue p-10 md:p-14 text-white"
              variants={fadeUp}
            >
              <div className="relative z-10 max-w-xl">
                <motion.h2 variants={fadeUp} className="text-3xl font-bold">
                  SmartSchool Portal
                </motion.h2>
                <motion.p variants={fadeUp} className="mt-4 text-white/80">
                  SmartSchool adalah produk unggulan LuminoED yang dirancang
                  khusus untuk mendukung transformasi digital sekolah melalui
                  sistem manajemen yang modern dan terintegrasi.
                </motion.p>
                <Link
                  href="#" //url smartschool
                  target="_blank"
                  className="inline-flex items-center gap-2 mt-8 rounded-full bg-white px-6 py-3 font-semibold text-primary-blue hover:bg-slate-100 transition"
                >
                  Visit SmartSchool Website
                  <ArrowUpRight size={18} />
                </Link>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.section
          className="relative py-32 mt-30 bg-slate-50 h-150 bg-linear-to-b to-white mb-100 md:mb-48 xl:mb-0"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={stagger}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <motion.div variants={fadeUp}>
                <span className="inline-block mb-4 text-sm font-semibold text-primary-blue tracking-wide">
                  SMART MANAGEMENT SYSTEM
                </span>

                <h2 className="text-4xl md:text-5xl font-extrabold text-primary-blue leading-tight">
                  Satu Sistem untuk <br />
                  <span className="text-primary-green">
                    Seluruh Manajemen Sekolah
                  </span>
                </h2>

                <p className="mt-6 text-lg text-slate-600 max-w-xl">
                  Tingkatkan efisiensi operasional, transparansi data, dan
                  kualitas pengambilan keputusan sekolah melalui sistem
                  manajemen digital yang terintegrasi dan scalable.
                </p>

                <motion.div
                  variants={fadeUp}
                  className="mt-10 flex flex-wrap gap-4"
                >
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-full bg-primary-blue px-8 py-4 text-white font-semibold hover:bg-primary-blue/90 transition"
                  >
                    Konsultasi Implementasi
                    <ArrowUpRight size={18} />
                  </Link>
                </motion.div>
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="relative rounded-2xl bg-white p-10 shadow-xl border"
              >
                <div className="absolute -top-6 -right-6 w-28 h-28 bg-primary-blue/10 rounded-full blur-2xl" />

                <h3 className="text-xl font-bold text-primary-blue mb-6">
                  Cocok untuk
                </h3>

                <ul className="space-y-4 text-slate-600">
                  <li className="flex gap-3">
                    <span className="text-primary-green font-bold">✓</span>
                    Sekolah swasta & negeri
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary-green font-bold">✓</span>
                    Yayasan pendidikan multi unit
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary-green font-bold">✓</span>
                    Institusi pendidikan berbasis digital
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary-green font-bold">✓</span>
                    Sekolah yang ingin scale-up sistem
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </motion.section>
        <div className="relative overflow-hidden">
          <Image
            src="/wave.png"
            alt="Wave"
            width={1920}
            height={400}
            className="w-full"
          />
        </div>

        <div className="max-w-7xl mx-auto px-6">
          <OurClient />
        </div>
      </section>
    </>
  );
}
