"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  fadeUp,
  fadeLeft,
  fadeRight,
  stagger,
  fadeScale,
} from "@/lib/motion";
import OurClient from "@/components/sections/home/OurClient";

export default function ContactUsPage() {
  return (
    <main className="overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="pt-32 pb-40 bg-gradient-to-br from-primary-blue to-primary-blue/90 text-white">
        <motion.div
          className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.div variants={fadeUp}>
            <span className="inline-block mb-4 px-4 py-1 rounded-full bg-white/20 text-sm font-medium">
              Contact Us
            </span>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Mari Diskusikan  
              <br />
              Kebutuhan Digital Anda
            </h1>

            <p className="mt-6 text-white/80 max-w-xl">
              Tim LuminoED siap membantu institusi pendidikan dan organisasi
              Anda dalam menerapkan solusi teknologi yang tepat, efektif,
              dan berkelanjutan.
            </p>
          </motion.div>

          <motion.div
            variants={fadeScale}
            className="hidden md:flex justify-center"
          >
            <Image
              src="/abouts.jpg"
              width={420}
              height={420}
              alt="Contact Illustration"
              className="object-contain rounded-xl"
              priority
            />
          </motion.div>
        </motion.div>
      </section>

      {/* ================= CONTACT CONTENT ================= */}
      <section className="py-32 bg-white">
        <motion.div
          className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={stagger}
        >
          {/* ================= LEFT INFO ================= */}
          <motion.div variants={fadeLeft}>
            <h2 className="text-3xl font-bold text-primary-blue">
              Hubungi Kami
            </h2>

            <p className="mt-6 text-gray-600 text-lg max-w-md">
              Jangan ragu untuk menghubungi kami. Konsultasi awal
              untuk membantu Anda menemukan solusi terbaik.
            </p>

            <div className="mt-12 space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary-blue/10 flex items-center justify-center">
                  📍
                </div>
                <div>
                  <p className="font-semibold text-primary-blue">
                    Alamat
                  </p>
                  <p className="text-gray-600">
                    Jl. Bulutangkis No. 13, Arcamanik, Bandung, Jawa Barat 40293
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary-blue/10 flex items-center justify-center">
                  📧
                </div>
                <div>
                  <p className="font-semibold text-primary-blue">
                    Email
                  </p>
                  <p className="text-gray-600">
                    adminlumino@kibarcm.id
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary-blue/10 flex items-center justify-center">
                  📞
                </div>
                <div>
                  <p className="font-semibold text-primary-blue">
                    Telepon / WhatsApp
                  </p>
                  <p className="text-gray-600">
                    +62 815 712 0816
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ================= FORM =================
          <motion.div
            variants={fadeRight}
            className="bg-gray-50 rounded-3xl p-12 shadow-sm"
          >
            <h3 className="text-2xl font-semibold text-primary-blue">
              Kirim Pesan
            </h3>

            <form className="mt-10 space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-blue"
                  placeholder="Nama Anda"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-blue"
                  placeholder="email@contoh.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Pesan
                </label>
                <textarea
                  rows={4}
                  className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-blue"
                  placeholder="Ceritakan kebutuhan Anda..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-primary-blue text-white font-semibold hover:opacity-90 transition"
              >
                Kirim Pesan
              </button>
            </form>
          </motion.div> */}
        </motion.div>
      </section>

      {/* ================= MINI CTA ================= */}
      <section className="py-24 bg-primary-blue/5 h-80 bg-gradient-to-b to-white">
        <motion.div
          className="max-w-4xl mx-auto px-6 text-center"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="text-3xl font-bold text-primary-blue">
            Siap Memulai Transformasi Digital?
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            Hubungi tim LuminoED hari ini dan mulai langkah cerdas
            untuk masa depan pendidikan.
          </p>
        </motion.div>
      </section>

      {/* FULL WIDTH (wave / image) */}
        <div className="relative overflow-hidden">
            <Image
            src="/palkon.png"
            alt="Wave"
            width={1920}
            height={400}
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