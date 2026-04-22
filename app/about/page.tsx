"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/motion";
import OurClient from "@/components/sections/home/OurClient";

export default function AboutUsSection() {
  return (
    <section className="relative text-white overflow-hidden pt-20">
      <div className="relative min-h-screen flex items-center py-20">
        <Image
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
          alt="Technology Background"
          fill
          priority
          className="object-cover scale-100"
        />

        <div className="absolute inset-0 bg-linear-to-b from-black/90 via-black/75 to-black/95" />

        <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary-blue/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary-green/20 rounded-full blur-3xl" />

        <motion.div
          className="relative z-10 max-w-7xl mx-auto px-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={stagger}
        >
          <div className="max-w-4xl">
            <motion.p
              variants={fadeUp}
              className="text-sm font-semibold tracking-[0.5em] uppercase text-white/70 -mt-10"
            >
              About Us
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="text-5xl md:text-7xl font-extrabold leading-tight"
            >
              Lumino<span className="text-primary-green">ED</span>
            </motion.h1>

            <motion.div
              variants={fadeUp}
              className="mt-6 h-1 w-24 bg-primary-green rounded-full"
            />

            <motion.div
              variants={stagger}
              className="mt-14 grid gap-10 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-10"
            >
              {[
                "LuminoED lahir dari keyakinan bahwa pendidikan sejati bukan hanya soal pengetahuan, tetapi tentang cahaya yang membimbing generasi dengan petunjuk Ilahi.",
                "Kami menghadirkan teknologi pintar yang menghubungkan guru, siswa, dan manajemen sekolah dalam satu ekosistem digital. Didalamnya terdapat AI untuk mengakselerasi dan efisiensi proses pendidikan, otomatisasi adm pembelajaran, pengelolaan SDM secara digital, hybrid learning, hingga pengelolaan aset dengan data real-time—semua tersambung dengan lisensi Google for Education Premium.",
                "Dengan semangat integrasi spiritual dan digital, LuminoED bukan hanya sistem manajemen sekolah, tapi cahaya yang menuntun masa depan pendidikan Indonesia.",
              ].map((text, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="flex gap-4 items-start text-slate-300"
                >
                  <span className="mt-2 w-2.5 h-2.5 rounded-full bg-primary-green shrink-0" />
                  <p className="leading-relaxed">{text}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="relative z-20 max-w-6xl mx-auto px-6 -mt-10"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <div className="relative w-full h-[480px] rounded-3xl overflow-hidden shadow-xl">
          <Image
            src="/abouts.webp"
            alt="LuminoED Activity"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />
        </div>
      </motion.div>

      <motion.div
        className="max-w-6xl mx-auto px-6 py-16 text-slate-600 text-lg leading-relaxed"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        variants={stagger}
      >
        <motion.p variants={fadeUp} className="mb-8">
          LuminoEd adalah perusahaan berbasis teknologi informasi yang berfokus
          pada pengembangan solusi digital di bidang pendidikan dan teknologi
          kreatif. Kami hadir sebagai jawaban atas kebutuhan institusi
          pendidikan, organisasi, dan individu dalam menghadapi tantangan
          transformasi digital yang terus berkembang. Dengan menggabungkan
          inovasi teknologi, pendekatan strategis, dan pemahaman mendalam
          terhadap dunia pendidikan, LuminoEd berkomitmen menghadirkan solusi
          yang tidak hanya modern, tetapi juga relevan, efektif, dan mudah
          digunakan oleh seluruh pemangku kepentingan.
        </motion.p>

        <motion.p variants={fadeUp} className="mb-8">
          Kami percaya bahwa teknologi seharusnya menjadi alat yang mempermudah,
          mempercepat, dan meningkatkan kualitas proses pembelajaran serta
          manajemen pendidikan. Oleh karena itu, setiap solusi yang kami
          kembangkan dirancang dengan mengedepankan efisiensi, integrasi sistem,
          dan pengalaman pengguna yang intuitif. LuminoEd tidak hanya
          menyediakan platform digital, tetapi juga membangun ekosistem yang
          mendukung kolaborasi, transparansi, dan pengambilan keputusan berbasis
          data.
        </motion.p>

        <motion.p variants={fadeUp} className="mb-8">
          Melalui berbagai layanan unggulan seperti SmartSchool, IT Training,
          streaming & hybrid learning, serta pengembangan desain dan aplikasi
          digital, LuminoEd berperan sebagai mitra strategis bagi institusi
          pendidikan dalam meningkatkan kualitas pembelajaran, efisiensi
          operasional, dan daya saing di era digital. Kami mendampingi klien
          mulai dari tahap perencanaan, implementasi, hingga pengembangan
          berkelanjutan, sehingga setiap solusi dapat tumbuh dan beradaptasi
          seiring kebutuhan organisasi.
        </motion.p>

        <motion.p variants={fadeUp}>
          Dengan semangat inovasi dan kolaborasi, LuminoEd berkomitmen untuk
          terus menghadirkan teknologi yang berdampak nyata—membantu menciptakan
          lingkungan belajar yang lebih efektif, sistem kerja yang lebih
          efisien, serta hubungan yang lebih kuat antara teknologi dan manusia
          demi masa depan pendidikan yang berkelanjutan.
        </motion.p>
      </motion.div>

      <div className="relative overflow-hidden">
        <Image
          src="/wave.webp"
          width={1920}
          height={400}
          alt="Wave"
          className="w-full"
          priority
        />
      </div>

      <OurClient />
    </section>
  );
}
