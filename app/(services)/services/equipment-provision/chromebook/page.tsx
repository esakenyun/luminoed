"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";
import { fadeUp, fadeScale, stagger } from "@/lib/motion";
import OurClient from "@/components/sections/home/OurClient";
import Image from "next/image";
import React from "react";
import postFormChromeBook from "@/services/postFormChromeBook";
import { toast } from "sonner";
import getStokData from "@/services/getDataStok";

export default function ChromebookPage() {
  const [loading, setLoading] = useState(false);
  const [stok, setStok] = useState<number>(0);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const toastId = toast.loading("Mengirim pemesanan...");
    const formData = new FormData(form);

    postFormChromeBook(formData)
      .then((res) => {
        if (!res.success) throw new Error(res.error);

        toast.success(
          "Pemesanan berhasil dikirim. Tim kami akan segera menghubungi Anda.",
          { id: toastId },
        );

        form.reset();

        document
          .getElementById("order")
          ?.scrollIntoView({ behavior: "smooth", block: "center" });
      })
      .catch((err) => {
        toast.error(err.message ?? "Terjadi kesalahan", { id: toastId });
      })
      .finally(() => setLoading(false));
  };

  const price = useMotionValue(0);
  const rounded = useTransform(price, (v) =>
    Math.round(v).toLocaleString("id-ID"),
  );

  const startCountUp = () => {
    price.set(0);
    animate(price, 4400000, {
      duration: 1.8,
      ease: "easeOut",
    });
  };

  useEffect(() => {
    const fetchStok = async () => {
      const stokData = await getStokData();
      setStok(stokData ?? 0);
    };

    fetchStok();
  }, []);

  return (
    <main className="overflow-hidden">
      {/* HERO */}
      <section className="relative pt-28 pb-24 mt-16 sm:mt-20 py-20 sm:py-28 lg:py-40 bg-linear-to-b from-primary-blue to-primary-blue/90 text-white overflow-hidden">
        {/* Animated background elements */}
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-primary-green/10 rounded-full blur-3xl"
          animate={{ 
            x: [0, 50, 0], 
            y: [0, -50, 0]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-80 h-80 bg-primary-blue/20 rounded-full blur-3xl"
          animate={{ 
            x: [0, -50, 0], 
            y: [0, 50, 0]
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        
        <motion.div
          className="max-w-7xl mx-auto px-6 text-center relative z-10"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.h1
            variants={fadeUp}
            className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight"
          >
            Chromebook Education
            <br />
            <motion.span 
              className="text-primary-green inline-block"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Ekosistem Belajar Aman & Fokus
            </motion.span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-3xl mx-auto text-white/80 text-base sm:text-lg"
          >
            Solusi perangkat pendidikan berbasis cloud dengan kontrol penuh,
            aman untuk siswa, dan mudah dikelola oleh sekolah.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-10">
            <motion.a
              href="#order"
              className="inline-block px-8 py-4 rounded-full bg-primary-green text-white font-semibold hover:opacity-90 transition"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Pesan Sekarang
            </motion.a>
          </motion.div>
        </motion.div>
      </section>

      {/* VIDEO */}
      <section className="py-20 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
        <motion.div
          className="max-w-5xl mx-auto px-6 relative z-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            {/* Animated border */}
            <motion.div
              className="absolute inset-0 rounded-3xl border-2 border-primary-green opacity-0 group-hover:opacity-20"
              animate={{ opacity: [0.1, 0.3, 0.1] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            
            <iframe
              src="https://www.youtube.com/embed/F0gvpXp0L0A"
              title="Chromebook Education"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* NARRATIVE SECTION */}
      <section className="py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
        {/* Decorative background */}
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 bg-primary-blue/10 rounded-full blur-3xl"
          animate={{ x: [0, 50, 0], y: [0, 50, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
        
        <motion.div
          className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start relative z-10 border-l-2 border-dashed border-gray-200"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={stagger}
        >
          {/* LEFT – TITLE */}
          <motion.div variants={fadeUp}>
            <motion.h2 
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-blue leading-tight"
              initial={{ y: 20 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Mengapa Lenovo Chromebook 300e
              <br />
              <motion.span 
                className="text-primary-green inline-block"
                animate={{ opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Tepat untuk Digitalisasi Sekolah?
              </motion.span>
            </motion.h2>

            <p className="mt-6 text-gray-600 text-sm sm:text-base leading-relaxed">
              Dirancang khusus untuk lingkungan pendidikan modern, khususnya sekolah dengan kebutuhan kontrol, keamanan, dan efisiensi tinggi.
            </p>
          </motion.div>

          {/* RIGHT – CONTENT */}
          <motion.div
            variants={fadeUp}
            className="text-gray-700 text-sm sm:text-base leading-relaxed space-y-5"
          >
            <p>
              <strong>Lenovo Chromebook 300e</strong> unggul karena menggunakan
              sistem operasi berbasis awan yang memungkinkan proses pemuatan
              data sangat cepat serta keamanan tingkat tinggi melalui fitur{" "}
              <em>penyekatan akses</em>.
            </p>

            <p>
              Melalui <strong>Chrome Education Upgrade (CEU)</strong>, sekolah
              dapat mengelola ribuan perangkat secara terpusat, mengontrol
              aktivitas siswa di kelas, serta memfasilitasi pelaksanaan ujian
              yang aman dan terpantau.
            </p>

            <p>
              Secara khusus, <strong>Lenovo 300e Chromebook</strong> disorot
              sebagai perangkat keras yang{" "}
              <strong>tangguh dan fleksibel</strong> dengan desain lipat yang
              mendukung berbagai metode pembelajaran — mulai dari kelas
              interaktif hingga pembelajaran mandiri.
            </p>

            <p>
              Selain aspek teknis, solusi ini juga mendukung{" "}
              <strong>digitalisasi pendidikan</strong> di lingkungan sekolah
              Islam, dengan pengelolaan perangkat yang lebih rapi, aman, dan
              sesuai dengan nilai-nilai pembelajaran yang terarah.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* EXPERIENCE VIDEO – DIFFERENT LAYOUT */}
      <section className="py-24 bg-gradient-to-b from-white via-primary-blue/5 to-white relative overflow-hidden">
        {/* Decorative background */}
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 bg-primary-green/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], y: [0, -30, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        
        <motion.div
          className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center relative z-10 border-l-2 border-dashed border-gray-200"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={stagger}
        >
          {/* LEFT – STORY */}
          <motion.div variants={fadeUp}>
            <motion.span 
              className="inline-block mb-4 px-4 py-1.5 rounded-full bg-primary-green/10 text-primary-green text-sm font-semibold border border-primary-green/30"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(34, 197, 94, 0.2)" }}
            >
              ✨ Implementasi Nyata
            </motion.span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-blue leading-tight">
              Chromebook Digunakan
              <br />
              <motion.span
                animate={{ color: ['#0ea5e9', '#06b6d4', '#0ea5e9'] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Langsung di Aktivitas Sekolah
              </motion.span>
            </h2>

            <p className="mt-6 text-gray-600 text-sm sm:text-base leading-relaxed">
              <strong>Chromebook Education </strong>
              mendukung proses belajar yang lebih fokus, aman, dan terkontrol — mulai dari kegiatan kelas, ujian berbasis digital, hingga pengawasan guru secara real-time.
            </p>

            <ul className="mt-8 space-y-4 text-gray-700 text-sm sm:text-base">
              {[
                "🎯 Siswa fokus tanpa distraksi",
                "👨 Guru mengontrol aktivitas kelas",
                "📱 Perangkat siap ujian & pembelajaran"
              ].map((item, idx) => (
                <motion.li
                  key={idx}
                  className="flex items-center gap-3 group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <motion.span className="text-xl group-hover:scale-125 transition-transform">
                    {item.split(' ')[0]}
                  </motion.span>
                  <span>{item.substring(2)}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* RIGHT – VIDEO CARD */}
          <motion.div
            variants={fadeScale}
            className="relative rounded-3xl overflow-hidden shadow-2xl group"
            whileHover={{ scale: 1.03 }}
          >
            {/* Glow effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-primary-green/20 via-transparent to-primary-blue/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity z-20 pointer-events-none"
            />
            
            {/* Floating Label */}
            <motion.div 
              className="absolute top-4 left-4 z-10 px-4 py-2 rounded-full bg-primary-blue text-white text-xs font-semibold shadow-lg"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              📺 Real School Usage
            </motion.div>

            <div className="relative w-full aspect-video">
              <motion.iframe
                src="https://www.youtube.com/embed/KcVaTVWocl8"
                title="Chromebook Education Experience"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* PRODUCT */}
      <section className="py-24 bg-gradient-to-b from-white via-primary-blue/5 to-white relative overflow-hidden">
        {/* Decorative elements */}
        <motion.div
          className="absolute top-20 right-0 w-96 h-96 bg-primary-green/10 rounded-full blur-3xl"
          animate={{ x: [0, 40, 0], y: [0, -40, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
        
        <motion.div
          className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 border-l-2 border-dashed border-gray-200"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.div 
            variants={fadeScale}
            className="relative group"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-primary-green/20 to-primary-blue/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"
            />
            <Image
              src="/services/chromebook.webp"
              width={1000}
              height={1000}
              alt="Lenovo Chromebook"
              className="w-full max-w-lg mx-auto relative z-10"
            />
          </motion.div>

          <motion.div variants={fadeUp}>
            <motion.h2 
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-blue"
              initial={{ y: 20 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Perangkat Pilihan:
              <br />
              Lenovo Chromebook 300e
              <br />
              <motion.span 
                className="text-primary-green inline-block"
                animate={{ opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                (Education Series)
              </motion.span>
            </motion.h2>

            <p className="mt-6 text-gray-600 text-sm sm:text-base">
              Tersedia dalam dua batch dengan spesifikasi berbeda sesuai kebutuhan dan anggaran sekolah.
            </p>

            <div className="mt-8 space-y-8">
              {/* BATCH 1 */}
              <motion.div 
                className="p-6 rounded-2xl bg-gradient-to-br from-primary-green/15 to-primary-green/5 border-2 border-primary-green/40 hover:border-primary-green/70 hover:shadow-lg transition-all cursor-pointer"
                whileHover={{ y: -4 }}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
              >
                <motion.div 
                  className="flex items-center gap-2 mb-4"
                  whileHover={{ x: 5 }}
                >
                  <motion.span 
                    className="inline-block px-3 py-1 rounded-full bg-primary-green text-white text-xs font-semibold"
                    animate={{ scale: [0.95, 1.05, 0.95] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    BATCH 1 - SELESAI
                  </motion.span>
                  <span className="text-xs font-semibold text-red-600">(Kuota Habis)</span>
                </motion.div>
                <h3 className="text-lg font-bold text-primary-blue mb-3">Lenovo Chromebook 300e dengan Touchscreen</h3>
                <ul className="space-y-2 text-gray-700 text-sm sm:text-base">
                  <li className="flex items-center gap-2 group">
                    <motion.span 
                      className="text-primary-green font-bold group-hover:scale-125 transition-transform"
                      whileHover={{ rotate: 10 }}
                    >
                      ✅
                    </motion.span>
                    <strong>Touchscreen</strong> – Mendukung Pembelajaran Interaktif
                  </li>
                  <li className="flex items-center gap-2 group">
                    <motion.span className="text-primary-green font-bold group-hover:scale-125 transition-transform">✅</motion.span>
                    Rugged / Tahan Banting
                  </li>
                  <li className="flex items-center gap-2 group">
                    <motion.span className="text-primary-green font-bold group-hover:scale-125 transition-transform">✅</motion.span>
                    Manajemen Terpusat Sekolah
                  </li>
                  <li className="flex items-center gap-2 group">
                    <motion.span className="text-primary-green font-bold group-hover:scale-125 transition-transform">✅</motion.span>
                    Bundling Unit + Charger + <strong>Lisensi CEU Seumur Hidup</strong>
                  </li>
                </ul>
              </motion.div>

              {/* BATCH 2 */}
              <motion.div 
                className="p-6 rounded-2xl bg-gradient-to-br from-primary-blue/15 to-primary-blue/5 border-2 border-primary-blue/40 hover:border-primary-blue/70 hover:shadow-lg transition-all cursor-pointer"
                whileHover={{ y: -4 }}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <motion.div 
                  className="flex items-center gap-2 mb-4"
                  whileHover={{ x: 5 }}
                >
                  <motion.span 
                    className="inline-block px-3 py-1 rounded-full bg-primary-blue text-white text-xs font-semibold"
                    animate={{ scale: [1.05, 0.95, 1.05] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  >
                    BATCH 2 - DIBUKA
                  </motion.span>
                </motion.div>
                <h3 className="text-lg font-bold text-primary-blue mb-3">Lenovo Chromebook 300e Standar (Non-Touchscreen)</h3>
                <ul className="space-y-2 text-gray-700 text-sm sm:text-base">
                  <li className="flex items-center gap-2 group">
                    <motion.span 
                      className="text-primary-blue font-bold group-hover:scale-125 transition-transform"
                      whileHover={{ rotate: 10 }}
                    >
                      ✅
                    </motion.span>
                    Layar Standar (Non-Touchscreen)
                  </li>
                  <li className="flex items-center gap-2 group">
                    <motion.span className="text-primary-blue font-bold group-hover:scale-125 transition-transform">✅</motion.span>
                    Rugged / Tahan Banting
                  </li>
                  <li className="flex items-center gap-2 group">
                    <motion.span className="text-primary-blue font-bold group-hover:scale-125 transition-transform">✅</motion.span>
                    Manajemen Terpusat Sekolah
                  </li>
                  <li className="flex items-center gap-2 group">
                    <motion.span className="text-primary-blue font-bold group-hover:scale-125 transition-transform">✅</motion.span>
                    Bundling Unit + Charger + <strong>Lisensi CEU Seumur Hidup</strong>
                  </li>
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* VALUE */}
      <section className="py-24 bg-gradient-to-b from-primary-blue/5 via-white to-primary-blue/5 relative overflow-hidden">
        {/* Decorative background elements */}
        <motion.div
          className="absolute top-10 left-10 w-64 h-64 bg-primary-green/5 rounded-full blur-2xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-72 h-72 bg-primary-blue/5 rounded-full blur-2xl"
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 7, repeat: Infinity }}
        />
        
        <motion.div
          className="max-w-7xl mx-auto px-6 relative z-10 border-l-2 border-dashed border-gray-200"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.h2
            variants={fadeUp}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-blue mb-16 text-center"
          >
            Mengapa Chromebook untuk Sekolah?
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Aman & Terkontrol",
                desc: "Manajemen akun terpusat, pembatasan akses, dan kontrol penuh oleh sekolah.",
                icon: "🔒",
                color: "from-red-500 to-pink-500"
              },
              {
                title: "Fokus Belajar",
                desc: "Lingkungan bebas distraksi dengan aplikasi pembelajaran terkurasi.",
                icon: "📚",
                color: "from-blue-500 to-cyan-500"
              },
              {
                title: "Berbasis Cloud",
                desc: "Data aman di cloud, tidak hilang, dan bisa diakses kapan saja.",
                icon: "☁️",
                color: "from-purple-500 to-indigo-500"
              },
              {
                title: "Mudah Dikelola",
                desc: "Setup cepat, update otomatis, dan maintenance minimal.",
                icon: "⚙️",
                color: "from-orange-500 to-red-500"
              },
              {
                title: "Hemat Biaya",
                desc: "Lebih tahan lama, ringan, dan efisien untuk penggunaan pendidikan.",
                icon: "💰",
                color: "from-green-500 to-emerald-500"
              },
              {
                title: "Terintegrasi Google",
                desc: "Siap pakai dengan Classroom, Drive, Docs, Meet, dan lainnya.",
                icon: "🔗",
                color: "from-yellow-500 to-orange-500"
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="group relative"
              >
                <motion.div
                  className="h-full p-8 bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
                  whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Gradient overlay on hover */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-all duration-300`}
                  />
                  
                  <div className="relative z-10">
                    <div className="text-5xl mb-4">{item.icon}</div>
                    <h3 className="text-lg font-semibold text-primary-blue group-hover:text-primary-green group-hover:bg-gradient-to-r group-hover:bg-clip-text transition-all duration-300" style={{
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text'
                    }}>
                      {item.title}
                    </h3>
                    <p className="mt-3 text-gray-600 text-sm sm:text-base group-hover:text-gray-700 transition-colors">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* BATCH 2 OPENING */}
      <section className="py-24 bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-50 relative overflow-hidden">
        {/* Animated decorative elements */}
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl"
          animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-80 h-80 bg-blue-200/20 rounded-full blur-3xl"
          animate={{ x: [0, -50, 0], y: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        
        <motion.div
          className="max-w-4xl mx-auto px-6 text-center relative z-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-blue mb-12"
            animate={{ scale: [0.98, 1.02, 0.98] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            🎉 Batch 2 Resmi Dibuka!
          </motion.h2>

          <motion.div 
            className="p-16 rounded-3xl bg-gradient-to-br from-cyan-100 to-blue-100 border-3 border-primary-blue shadow-2xl relative overflow-hidden"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            {/* Shine effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0"
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            
            <motion.div 
              className="text-2xl sm:text-3xl font-bold text-primary-blue mb-4 relative z-10"
              initial={{ y: 10 }}
              whileInView={{ y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Lenovo Chromebook 300e Non-Touchscreen
            </motion.div>
            <p className="text-lg text-gray-800 relative z-10 font-medium">
              Dengan spesifikasi yang sama kuatnya, hasil pembelajaran yang sama optimalnya,
              <br />
              <span className="text-primary-blue">namun dengan solusi biaya yang lebih efisien</span>
            </p>

            {/* BATCH 2 PRICING */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.6 }}
              onViewportEnter={startCountUp}
              className="relative inline-block mt-16"
            >
              {/* Glow */}
              <motion.div
                animate={{ opacity: [0.4, 0.8, 0.4] }}
                transition={{ duration: 2.5, repeat: Infinity }}
                className="absolute -inset-3 rounded-3xl bg-primary-green/40 blur-2xl"
              />

              {/* Badge */}
              <motion.div
                className="relative px-12 py-8 rounded-3xl bg-gradient-to-br from-primary-green to-emerald-400 text-white shadow-2xl"
                whileHover={{ scale: 1.03 }}
              >
                <motion.div 
                  className="absolute -top-5 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-primary-blue text-xs font-semibold shadow-lg"
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Batch 2
                </motion.div>

                <p className="text-sm opacity-95 font-medium">Harga Spesial</p>
                <div className="mt-2 text-4xl sm:text-5xl font-extrabold tracking-wide">
                  Rp <motion.span>{rounded}</motion.span>
                </div>
                <p className="mt-2 text-xs opacity-95">per unit (All-in Package)</p>
              </motion.div>
            </motion.div>

            <p className="mt-8 text-gray-700 text-sm sm:text-base font-medium relative z-10">
              📦 Device + CEU License + Setup & Enrollment Sekolah
            </p>

            <motion.div 
            className="mt-10"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <motion.a
              href="#order"
              className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-primary-blue to-primary-blue/80 text-white font-semibold shadow-lg"
              whileHover={{ scale: 1.08, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              Amankan Unit Sekarang
            </motion.a>
          </motion.div>
          </motion.div>
        </motion.div>
      </section>
      
      {/* BATCH COMPARISON & INFO */}
      <section className="py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
        <motion.div
          className="max-w-6xl mx-auto px-6 relative z-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h3 
            className="text-2xl sm:text-3xl font-bold text-primary-blue mb-12 text-center"
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.5 }}
          >
            ⚖️ Perbandingan Batch 1 vs Batch 2
          </motion.h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* BATCH 1 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <motion.div
                className="h-full p-8 rounded-3xl bg-white border-2 border-primary-green/30 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden relative"
                whileHover={{ y: -8 }}
              >
                {/* Gradient background on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                
                <div className="relative z-10">
                  <motion.div
                    initial={{ scale: 0.8 }}
                    whileInView={{ scale: 1 }}
                    className="mb-6 inline-block px-4 py-2 rounded-full bg-red-100 text-red-700 font-semibold text-sm"
                  >
                    ✓ BATCH 1 - SELESAI
                  </motion.div>
                  <h4 className="text-2xl font-bold text-primary-blue mb-6 group-hover:text-green-600 transition-colors">Dengan Touchscreen</h4>
                  
                  <div className="space-y-4 mb-8">
                    {[
                      { title: "Touchscreen 11.6 inci", desc: "Mendukung pembelajaran interaktif dan engaging" },
                      { title: "Rugged & Tahan Banting", desc: "Desain lipat, tahan jatuh dan tekanan" },
                      { title: "Prosesor Intel Celeron N4020", desc: "Performa stabil untuk aplikasi pembelajaran" },
                      { title: "RAM 4GB + Storage 32GB", desc: "Cukup untuk multi-tasking pembelajaran" },
                      { title: "CEU License Seumur Hidup", desc: "Manajemen terpusat dan kontrol penuh sekolah" },
                    ].map((feature, idx) => (
                      <motion.div 
                        key={idx}
                        className="flex items-start gap-3 group/item"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                      >
                        <motion.span 
                          className="text-primary-green font-bold text-lg shrink-0 group-hover/item:scale-125 transition-transform"
                        >
                          ✅
                        </motion.span>
                        <div>
                          <p className="font-semibold text-gray-800">{feature.title}</p>
                          <p className="text-sm text-gray-600">{feature.desc}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <motion.div 
                    className="p-4 rounded-xl bg-gradient-to-r from-primary-green/10 to-emerald-100 border-2 border-primary-green/30"
                    whileHover={{ scale: 1.02 }}
                  >
                    <p className="text-sm text-gray-700">
                      <strong className="text-primary-green">💰 Harga Reference:</strong><br />
                      <span className="text-lg font-bold text-primary-blue">Rp 5.450.000 / unit</span>
                    </p>
                    <p className="text-xs text-gray-600 mt-2">✓ Termasuk setup & enrollment</p>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>

            {/* BATCH 2 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <motion.div
                className="h-full p-8 rounded-3xl bg-gradient-to-br from-white to-blue-50 border-2 border-primary-blue/30 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden relative"
                whileHover={{ y: -8 }}
              >
                {/* Gradient background on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                
                <div className="relative z-10">
                  <motion.div
                    initial={{ scale: 0.8 }}
                    whileInView={{ scale: 1 }}
                    className="mb-6 inline-block px-4 py-2 rounded-full bg-blue-100 text-primary-blue font-semibold text-sm"
                  >
                    ⭐ BATCH 2 - DIBUKA
                  </motion.div>
                  <h4 className="text-2xl font-bold text-primary-blue mb-6 group-hover:text-cyan-600 transition-colors">Non-Touchscreen</h4>
                  
                  <div className="space-y-4 mb-8">
                    {[
                      { title: "Layar Standar 11.6 inci (Non-Touch)", desc: "Performa visual tetap jernih dan tajam" },
                      { title: "Rugged & Tahan Banting", desc: "Desain lipat, tahan jatuh dan tekanan" },
                      { title: "Prosesor Intel Celeron N4020", desc: "Performa stabil identik dengan Batch 1" },
                      { title: "RAM 4GB + Storage 32GB", desc: "Spesifikasi sama dengan Batch 1" },
                      { title: "CEU License Seumur Hidup", desc: "Manajemen terpusat dan kontrol penuh sekolah" },
                    ].map((feature, idx) => (
                      <motion.div 
                        key={idx}
                        className="flex items-start gap-3 group/item"
                        initial={{ opacity: 0, x: 10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                      >
                        <motion.span 
                          className="text-primary-blue font-bold text-lg shrink-0 group-hover/item:scale-125 transition-transform"
                        >
                          ✅
                        </motion.span>
                        <div>
                          <p className="font-semibold text-gray-800">{feature.title}</p>
                          <p className="text-sm text-gray-600">{feature.desc}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <motion.div 
                    className="p-4 rounded-xl bg-gradient-to-r from-primary-blue/10 to-cyan-100 border-2 border-primary-blue/30"
                    whileHover={{ scale: 1.02 }}
                    animate={{ borderColor: ['rgb(30, 64, 175)', 'rgb(6, 182, 212)', 'rgb(30, 64, 175)'] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <p className="text-sm text-gray-700">
                      <strong className="text-primary-blue">💰 Harga Batch 2:</strong><br />
                      <span className="text-lg font-bold text-primary-blue">Rp. 4.400.000</span>
                    </p>
                    <p className="text-xs text-gray-600 mt-2">✓ Per unit (All-in Package)</p>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* IMPORTANT NOTES */}
      <section className="py-24 bg-white relative overflow-hidden">
        <motion.div
          className="max-w-5xl mx-auto px-6 relative z-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h3 
            className="text-2xl sm:text-3xl font-bold text-primary-blue mb-8"
            initial={{ x: -20 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.5 }}
          >
            ℹ️ Informasi Penting Batch 2
          </motion.h3>

          <div className="space-y-6">
            {[
              {
                icon: "📢",
                title: "Mengapa Batch 2 Non-Touchscreen?",
                desc: "Berdasarkan feedback dan kebutuhan biaya operasional sekolah, kami menyediakan opsi Chromebook tanpa touchscreen untuk memberikan solusi yang lebih terjangkau tanpa mengurangi kualitas pembelajaran dan manajemen sekolah.",
                color: "from-blue-50 to-cyan-50",
                borderColor: "border-blue-400",
                textColor: "text-blue-700"
              },
              {
                icon: "⚠️",
                title: "Catatan Tentang Harga & Kuota",
                desc: "Ketersediaan stok untuk Batch 2 belum ditentukan. Harap tunggu pengumuman resmi dari PT Kibar Cendekia Muda.",
                color: "from-yellow-50 to-orange-50",
                borderColor: "border-yellow-400",
                textColor: "text-yellow-700"
              },
              {
                icon: "💡",
                title: "Tips Bagi Sekolah",
                desc: "Jika touchscreen adalah fitur prioritas untuk pembelajaran interaktif Anda, Batch 2 tetap memberikan solusi kelas dunia dengan manajemen penuh per Chrome Education Upgrade. Keputusan ada di tangan Anda berdasarkan kebutuhan dan anggaran sekolah.",
                color: "from-green-50 to-emerald-50",
                borderColor: "border-green-400",
                textColor: "text-green-700"
              },
            ].map((note, idx) => (
              <motion.div
                key={idx}
                className={`p-6 rounded-2xl bg-gradient-to-br ${note.color} border-2 ${note.borderColor} shadow-md overflow-hidden relative`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
              >
                {/* Animated accent line */}
                <motion.div
                  className={`absolute top-0 left-0 h-1 bg-gradient-to-r ${note.borderColor.replace('border-', 'from-')}`}
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  transition={{ delay: idx * 0.15 + 0.2, duration: 0.8 }}
                />
                
                <div className="flex items-start gap-4">
                  <motion.div 
                    className="text-3xl shrink-0"
                    animate={{ y: [0, -3, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: idx * 0.3 }}
                  >
                    {note.icon}
                  </motion.div>
                  <div className="flex-1">
                    <p className={`text-sm sm:text-base font-semibold ${note.textColor} mb-2`}>
                      {note.title}
                    </p>
                    <p className="text-sm sm:text-base text-gray-700">
                      {note.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <Image
        src="/services/alur.jpeg"
        alt="Wave"
        width={1920}
        height={400}
        className="w-full h-auto object-cover"
      />

      {/* ORDER FORM */}
      <section id="order" className="py-28 bg-gradient-to-b from-white via-blue-50 to-white relative overflow-hidden">
        {/* Animated background */}
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-primary-blue/10 rounded-full blur-3xl"
          animate={{ x: [0, 50, 0], y: [0, -50, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-80 h-80 bg-primary-green/10 rounded-full blur-3xl"
          animate={{ x: [0, -50, 0], y: [0, 50, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
        
        <motion.div
          className="max-w-4xl mx-auto px-6 relative z-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="p-6 mb-30 rounded-2xl bg-gradient-to-r from-blue-100 to-cyan-100 border-2 border-blue-400 shadow-lg"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.01 }}
          >
            <motion.p 
              className="text-sm sm:text-base text-blue-800 flex items-start gap-2"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5 mt-0.5 shrink-0 text-blue-600"
                aria-hidden="true"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="12" x2="12" y1="16" y2="12" />
                <line x1="12" x2="12.01" y1="8" y2="8" />
              </motion.svg>
              <span>
                <strong className="text-blue-900">Informasi:</strong> Batch 1 telah selesai dengan kuota penuh. Batch 2 telah dibuka dan sedang dalam tahap penetapan kuota. Silakan daftarkan ketertarikan Anda melalui form di bawah.
              </span>
            </motion.p>
          </motion.div>
          
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-blue text-center"
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Form Pemesanan Chromebook
          </motion.h2>

          <motion.form
            className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6 p-8 rounded-3xl bg-white/50 backdrop-blur-sm border border-gray-200/50 shadow-lg"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {[
              { name: "order_name", placeholder: "Nama Pemesan", type: "text" },
              { name: "student_name", placeholder: "Nama Lengkap Siswa", type: "text" },
              { name: "kelas", placeholder: "Kelas Saat Ini", type: "text" },
              { name: "email", placeholder: "Email", type: "email" },
              { name: "phone", placeholder: "Nomor Handphone yang Bisa Dihubungi", type: "tel" },
              
            ].map((field, idx) => (
              <motion.input
                key={field.name}
                name={field.name}
                placeholder={field.placeholder}
                type={field.type}
                required={field.name !== "email"}
                className="input border-2 border-gray-300 focus:border-primary-green focus:outline-none rounded-xl px-4 py-3 transition-all duration-300 hover:border-primary-green/50"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                whileFocus={{ scale: 1.02, boxShadow: "0 0 0 3px rgba(34, 197, 94, 0.1)" }}
              />
            ))}
            
            <motion.button
              type="submit"
              disabled={loading}
              className={`sm:col-span-2 mt-4 px-8 py-4 rounded-full font-semibold transition-all duration-300 cursor-pointer text-white ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-gradient-to-r from-primary-green to-emerald-600 hover:shadow-lg"
              }`}
              whileHover={!loading ? { scale: 1.05, y: -2 } : {}}
              whileTap={!loading ? { scale: 0.95 } : {}}
              animate={loading ? { opacity: [0.8, 1, 0.8] } : {}}
              transition={{ duration: 2, repeat: loading ? Infinity : 0 }}
            >
              {loading ? (
                <motion.span
                  animate={{ opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  Mengirim...
                </motion.span>
              ) : (
                "Kirim Pemesanan"
              )}
            </motion.button>
          </motion.form>
        </motion.div>
      </section>

      {/* WAVE */}
      <motion.div
        className="relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <Image
            src="/wave.webp"
            alt="Wave"
            width={1920}
            height={400}
            className="w-full h-auto object-cover"
          />
        </motion.div>
      </motion.div>

      {/* CLIENT */}
      <motion.div
        className="max-w-7xl mx-auto px-6 py-12 border-l-2 border-dashed border-gray-200"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <OurClient />
      </motion.div>
    </main>
  );
}
