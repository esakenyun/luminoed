"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import OurClient from "@/components/sections/home/OurClient";
import { fadeUp, fadeLeft, fadeRight, stagger } from "@/lib/motion";

export default function SmartTalentServices() {
  return (
    <>
      <section className="w-full">
        <div className="max-w-7xl mx-auto pt-15 px-6">

          {/* ================= HERO ================= */}
            <div className="tablet-landscape-max:w-2/5 flex flex-col md:flex-row justify-center items-center">
            
            {/* TEXT ONLY ANIMATION */}
            <motion.div
                className="flex flex-col justify-center"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fadeUp}
            >
                <h2 className="font-extrabold text-5xl tablet-landscape-max:text-5xl text-primary-blue">
                Smart Talent
                </h2>

                <p className="mt-10 text-lg font-medium text-slate-600">
                Manajemen sekolah dapat memantau secara real time dengan
                dashboard yang disediakan untuk mengetahui karywan yang
                hadir , terlambat dan jurnal kerja beserta mutabaah pendidik
                dan tenaga pendidik.
                </p>

                <br />

                <p className="text-lg font-medium text-slate-600">
                Tenaga pendidik dan pendidik pun dapat melihat capaian
                dirinya berdasarkan mutbaah, presensi ataupun agenda kerja
                sebagai bahan evalaui untuk perbaikan performa.
                </p>
            </motion.div>

            {/* IMAGE WITHOUT ANIMATION */}
            <Image
                className="hidden tablet-landscape-max:block rounded-2xl absolute -right-36 top-[-1%] object-cover"
                src={"/services/smart-talent/smarttalent.png"}
                width={800}
                height={800}
                alt="Smart School"
                priority
            />
            </div>

          {/* ================= FEATURE LIST ================= */}
          <motion.div
            className="pt-30 tablet-landscape-max:pt-50"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h1
              variants={fadeUp}
              className="font-bold text-3xl tablet-landscape-max:text-4xl text-primary-blue text-center"
            >
              Smart Talent
            </motion.h1>

            <div className="mt-20 flex flex-col md:flex-row gap-10 justify-center">
              <motion.div
                variants={fadeUp}
                className="max-w-sm border-l-4 border-primary-green pl-6 md:pl-4 tablet-landscape-min:pl-6 tablet-landscape-min:mr-28 h-[400px]"
              >
                <span className="text-slate-600 font-semibold text-lg">
                  01.
                </span>
                <h2 className="text-slate-600 font-bold text-2xl tablet-landscape-min:text-3xl">
                  Dashboard Tendik
                </h2>
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="max-w-sm border-l-4 border-primary-green pl-6 md:pl-4 tablet-landscape-min:pl-6 tablet-landscape-min:mr-28 h-[400px]"
              >
                <span className="text-slate-600 font-semibold text-lg">
                  02.
                </span>
                <h2 className="text-slate-600 font-bold text-2xl tablet-landscape-min:text-3xl">
                  Aplikasi Presensi & Absensi
                </h2>
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="max-w-sm border-l-4 border-primary-green pl-6 md:pl-4 tablet-landscape-min:pl-6 tablet-landscape-min:mr-28 h-[400px]"
              >
                <span className="text-slate-600 font-semibold text-lg">
                  03.
                </span>
                <h2 className="text-slate-600 font-bold text-2xl tablet-landscape-min:text-3xl">
                  Aplikasi Mutabaah
                </h2>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* ================= WAVE ================= */}
        <motion.div
          className="relative overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Image
            src="/palkon.png"
            alt="Wave"
            width={1920}
            height={400}
            className="w-full"
          />
        </motion.div>

        {/* ================= CLIENT ================= */}
        <motion.div
          className="max-w-7xl mx-auto px-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <OurClient />
        </motion.div>

        {/* ================= CTA ================= */}
        <motion.section
          className="relative overflow-hidden py-32 mt-32"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-blue via-primary-blue/90 to-primary-green opacity-95" />

          {/* Decorative Blur */}
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-white/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl" />

          <div className="relative max-w-7xl mx-auto px-6">
            <motion.div
              className="rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 p-12 md:p-20 text-center text-white"
              variants={stagger}
            >
              <motion.h2
                variants={fadeUp}
                className="text-3xl md:text-5xl font-extrabold leading-tight"
              >
                Siap Tingkatkan Performa <br />
                <span className="text-primary-green">Tenaga Pendidik & Tendik?</span>
              </motion.h2>

              <motion.p
                variants={fadeUp}
                className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-white/90"
              >
                Smart Talent membantu sekolah memantau presensi, mutabaah, 
                dan kinerja tenaga pendidik secara real-time melalui dashboard terintegrasi.
              </motion.p>

              {/* CTA BUTTON */}
              <motion.div
                variants={fadeUp}
                className="mt-12 flex flex-col sm:flex-row gap-6 justify-center"
              >
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-4 rounded-xl border-2 border-white text-white font-bold text-lg hover:bg-white hover:text-primary-blue transition"
                >
                  Konsultasi Smart Talent
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

      </section>
    </>
  );
}