"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { fadeUp, fadeLeft, stagger, fadeScale } from "@/lib/motion";
import OurClient from "@/components/sections/home/OurClient";

export default function ContactUsPage() {
  return (
    <main className="overflow-hidden">
      <section className="pt-32 pb-40 bg-linear-to-br from-primary-blue to-primary-blue/90 text-white">
        <motion.div
          className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center"
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
              Anda dalam menerapkan solusi teknologi yang tepat, efektif, dan
              berkelanjutan.
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
              className="object-contain rounded-xl w-full"
              priority
            />
          </motion.div>
        </motion.div>
      </section>

      <section className="py-32 bg-white">
        <motion.div
          className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={stagger}
        >
          <motion.div variants={fadeLeft}>
            <h2 className="text-3xl font-bold text-primary-blue">
              Hubungi Kami
            </h2>

            <p className="mt-6 text-gray-600 text-lg max-w-md">
              Jangan ragu untuk menghubungi kami. Konsultasi awal untuk membantu
              Anda menemukan solusi terbaik.
            </p>

            <div className="mt-12 space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary-blue/10 flex items-center justify-center">
                  📍
                </div>
                <div>
                  <p className="font-semibold text-primary-blue">Alamat</p>
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
                  <p className="font-semibold text-primary-blue">Email</p>
                  <p className="text-gray-600">adminlumino@kibarcm.id</p>
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
                  <p className="text-gray-600">+62 815 712 0816</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <section className="py-24 bg-primary-blue/5 h-80 bg-linear-to-b to-white">
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
            Hubungi tim LuminoED hari ini dan mulai langkah cerdas untuk masa
            depan pendidikan.
          </p>
        </motion.div>
      </section>

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
    </main>
  );
}
