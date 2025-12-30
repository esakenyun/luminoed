"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import OurClient from "@/components/sections/home/OurClient";
import { fadeUp, stagger } from "@/lib/motion";

export default function SmartClassServices() {
  return (
    <>
      <section className="w-full">
        <div className="max-w-7xl mx-auto px-6">

          {/* ================= SECTION 1 ================= */}
          <motion.div
            className="flex flex-col md:flex-row justify-center gap-16 pt-6"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeUp} className="grid gap-5 max-w-lg">
              <Image
                className="rounded-2xl"
                src={"/services/smartschool.png"}
                width={500}
                height={500}
                alt="Smart School"
                priority
              />
              <div>
                <h2 className="mt-5 text-2xl md:text-3xl font-semibold">
                  Manajemen Kelas
                </h2>
                <p className="mt-5 font-medium text-slate-500 text-lg">
                  Menyediakan layanan hybrid yang memungkinkan akses mudah
                  bagi siswa dan orang tua terhadap materi ajar dan proses
                  pembelajaran harian secara real-time.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="grid gap-5 max-w-lg">
              <Image
                className="rounded-2xl"
                src={"/services/smartschool.png"}
                width={500}
                height={500}
                alt="Smart School"
                priority
              />
              <div>
                <h2 className="mt-5 text-2xl md:text-3xl font-semibold">
                  Hybrid Learning
                </h2>
                <p className="mt-5 font-medium text-slate-500 text-lg">
                  Platform yang mendukung interaksi langsung antara guru dan
                  siswa, serta menyediakan konten pembelajaran yang dapat
                  disesuaikan dengan kebutuhan individu.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* ================= SECTION 2 ================= */}
          <motion.div
            className="pt-16 tablet-landscape-max:pt-36"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h1
              variants={fadeUp}
              className="font-bold text-3xl tablet-landscape-max:text-4xl text-primary-blue text-center"
            >
              Smart Class
            </motion.h1>

            <div className="flex flex-col md:flex-row gap-10 pt-10">
              <motion.div
                variants={fadeUp}
                className="bg-[#F0F0F0] p-16 rounded-lg w-full md:w-[46%]"
              >
                <Image
                  src={"/services/smart-class/icon.svg"}
                  width={100}
                  height={100}
                  alt="Smart-Class Icon 1"
                  className="mx-auto"
                  priority
                />
                <h2 className="mt-5 text-2xl font-bold text-center text-primary-blue/80">
                  Revolusi Pendidikan Secara Digital
                </h2>
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="bg-[#F0F0F0] p-16 rounded-lg w-full md:w-[54%]"
              >
                <Image
                  src={"/services/smart-class/icon2.svg"}
                  width={100}
                  height={100}
                  alt="Smart-Class Icon 2"
                  className="mx-auto"
                  priority
                />
                <h2 className="mt-5 text-2xl font-bold text-center text-primary-blue/80">
                  Akibat Dari Revolusi Pendidikan yang Terjadi di Lingkungan Sekitar
                </h2>
              </motion.div>
            </div>

            <motion.div
              variants={fadeUp}
              className="bg-[#F0F0F0] p-16 rounded-lg w-full mt-10"
            >
              <Image
                src={"/services/smart-class/icon3.svg"}
                width={100}
                height={100}
                alt="Smart-Class Icon 3"
                className="mx-auto"
                priority
              />
              <h2 className="mt-5 text-2xl font-bold text-center text-primary-blue/80">
                Penerapan Teknologi Terbaru dalam Bidang Pendidikan Terkini
              </h2>
            </motion.div>
          </motion.div>
        </div>

        {/* ================= CTA SMART CLASS ================= */}
          <section className="py-32 bg-white">
            <motion.div
              className="max-w-7xl mx-auto px-6"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              variants={stagger}
            >
              <motion.div
                variants={fadeUp}
                className="relative overflow-hidden rounded-3xl border border-gray-200 bg-gradient-to-br from-primary-blue/5 to-primary-green/5 p-16 grid md:grid-cols-2 gap-12 items-center"
              >
                {/* TEXT */}
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-primary-blue leading-tight">
                    Wujudkan Smart Class  
                    <br />
                    di Sekolah Anda
                  </h2>

                  <p className="mt-6 text-gray-600 text-lg max-w-xl">
                    Tingkatkan kualitas pembelajaran dengan konsep Smart Class yang
                    mendukung hybrid learning, interaksi digital, dan pemanfaatan
                    teknologi pendidikan terkini.
                  </p>

                  <div className="mt-10 flex flex-col sm:flex-row gap-4">
                    <a
                      href="/contact"
                      className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-primary-blue text-white font-semibold hover:opacity-90 transition"
                    >
                      Konsultasi Smart Class
                    </a>
                  </div>
                </div>

                {/* VISUAL */}
                <div className="hidden md:flex justify-center">
                  <Image
                    src="/services/smartschool.png"
                    alt="Smart Class Illustration"
                    width={420}
                    height={420}
                    className="object-contain rounded-xl"
                  />
                </div>
              </motion.div>
            </motion.div>
          </section>

        {/* ================= FULL WIDTH IMAGE ================= */}
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
      </section>
    </>
  );
}