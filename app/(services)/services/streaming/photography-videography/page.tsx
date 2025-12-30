"use client";

import { motion } from "framer-motion";
import { fadeUp, fadeLeft, fadeRight, stagger } from "@/lib/motion";
import Image from "next/image";
import OurClient from "@/components/sections/home/OurClient";

const photoboothImages = [
  "/abouts.jpg",
  "/brief.png",
  "/landing.JPG",
];

export default function PhotoVideoServices() {
  return (
    <main className="bg-white text-gray-800 overflow-hidden">

      {/* ================= SLIM EDITORIAL HEADER ================= */}
      <section className="pt-32 pb-20">
        <motion.div
          className="max-w-5xl mx-auto px-6 text-center"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.7 }}
          variants={fadeUp}
        >
          <p className="text-primary-green font-medium mb-3">
            Photography & Videography
          </p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Mengabadikan Cerita  
            <span className="text-primary-blue"> dalam Setiap Momen</span>
          </h1>
          <p className="mt-6 text-gray-600 text-lg">
            Dokumentasi visual yang fokus pada emosi, detail,
            dan kenangan berharga di lingkungan pendidikan.
          </p>
        </motion.div>
      </section>

      <section className="py-28 bg-gradient-to-b from-white to-primary-blue/5">
      <motion.div
        className="max-w-7xl mx-auto px-6"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
      >
        {/* TITLE */}
        <motion.div variants={fadeUp} className="mb-14">
          <span className="inline-block mb-3 px-4 py-1 rounded-full bg-primary-green/10 text-primary-green text-sm font-medium">
            Photography Service
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-primary-blue">
            Photobooth Experience
          </h2>

          <p className="mt-4 max-w-2xl text-gray-600">
            Photobooth profesional dengan pencahayaan optimal, backdrop custom,
            dan hasil foto berkualitas tinggi yang siap cetak maupun digital.
          </p>
        </motion.div>

        {/* GALLERY */}
        <div className="grid md:grid-cols-3 gap-8">
          {photoboothImages.map((src, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className="group relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl"
            >
              <Image
                src={src}
                alt={`Photobooth LuminoED ${index + 1}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 33vw"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-primary-blue/0 group-hover:bg-primary-blue/40 transition duration-500" />

              {/* TEXT */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <h4 className="text-lg font-semibold">Photobooth Event</h4>
                <p className="text-sm text-white/80 mt-1">
                  Momen spesial dengan hasil profesional
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>

      {/* ================= GRADUATION FEATURE STRIP ================= */}
      <section className="py-24">
        <motion.div
          className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
        >
          <motion.div
            variants={fadeLeft}
            className="lg:col-span-5"
          >
            <h2 className="text-3xl font-bold text-primary-green mb-6">
              Foto Kelulusan & Wisuda
            </h2>
            <p className="text-gray-600 mb-6">
              Setiap kelulusan adalah pencapaian.
              Kami mengabadikannya dengan pendekatan visual
              yang rapi, elegan, dan bernilai kenangan jangka panjang.
            </p>

            <ul className="space-y-3 text-gray-700">
              <li>• Foto individu & kelompok</li>
              <li>• Konsep formal, kasual, hingga tematik</li>
              <li>• Retouch profesional & konsisten</li>
              <li>• Output cetak album & digital</li>
            </ul>
          </motion.div>

          <motion.div
            variants={fadeRight}
            className="lg:col-span-7 h-80 bg-primary-green/5 rounded-3xl flex items-center justify-center text-gray-400"
          >
            Graduation Photo Showcase
          </motion.div>
        </motion.div>
      </section>

      {/* ================= CONTENT SHOWCASE ================= */}
      <section className="py-24 bg-gray-50">
        <motion.div
          className="max-w-7xl mx-auto px-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={stagger}
        >
          <motion.h2
            variants={fadeUp}
            className="text-3xl font-bold text-center mb-16"
          >
            Konten Visual Sekolah
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Konten Profil Institusi",
                desc: "Visual representatif untuk website dan presentasi."
              },
              {
                title: "Konten Media Sosial",
                desc: "Foto & video pendek yang relevan dan konsisten."
              },
              {
                title: "Video Dokumentasi",
                desc: "Cerita visual aktivitas dan prestasi sekolah."
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="bg-white p-8 rounded-2xl shadow"
              >
                <h4 className="font-semibold text-lg mb-3 text-primary-blue">
                  {item.title}
                </h4>
                <p className="text-gray-600">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ================= MINIMAL CTA ================= */}
      <section className="py-24">
        <motion.div
          className="max-w-4xl mx-auto px-6 text-center"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
          variants={fadeUp}
        >
          <h2 className="text-3xl font-bold">
            Setiap Momen Punya Cerita
          </h2>
          <p className="mt-6 text-gray-600">
            Biarkan kami membantu mengabadikannya
            dengan sentuhan visual profesional.
          </p>

          <button className="mt-10 px-10 py-4 rounded-full bg-primary-blue text-white hover:bg-primary-blue/90 transition font-semibold">
            Konsultasi Photography & Videography
          </button>
        </motion.div>
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
    
        {/* CLIENT */}
        <div className="max-w-7xl mx-auto px-6">
            <OurClient />
        </div>
    </main>
  );
}