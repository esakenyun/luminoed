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

  const [hasAnimated, setHasAnimated] = useState(false);

  const startCountUp = () => {
    if (hasAnimated) return;

    setHasAnimated(true);
    animate(price, 5450000, {
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
      <section className="pt-28 pb-24 mt-16 sm:mt-20 py-20 sm:py-28 lg:py-40 bg-linear-to-b from-primary-blue to-primary-blue/90 text-white">
        <motion.div
          className="max-w-7xl mx-auto px-6 text-center"
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
            <span className="text-primary-green">
              Ekosistem Belajar Aman & Fokus
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-3xl mx-auto text-white/80 text-base sm:text-lg"
          >
            Solusi perangkat pendidikan berbasis cloud dengan kontrol penuh,
            aman untuk siswa, dan mudah dikelola oleh sekolah.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-10">
            <a
              href="#order"
              className="inline-block px-8 py-4 rounded-full bg-primary-green text-white font-semibold hover:opacity-90 transition"
            >
              Pesan Sekarang
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* VIDEO */}
      <section className="py-20 bg-white">
        <motion.div
          className="max-w-5xl mx-auto px-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-xl">
            <iframe
              src="https://www.youtube.com/embed/F0gvpXp0L0A"
              title="Chromebook Education"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </motion.div>
      </section>

      {/* NARRATIVE SECTION */}
      <section className="py-20 bg-white">
        <motion.div
          className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={stagger}
        >
          {/* LEFT – TITLE */}
          <motion.div variants={fadeUp}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-blue leading-tight">
              Mengapa Lenovo Chromebook 300e
              <br />
              Tepat untuk Digitalisasi Sekolah?
            </h2>

            <p className="mt-6 text-gray-600 text-sm sm:text-base">
              Dirancang khusus untuk lingkungan pendidikan modern, khususnya
              sekolah dengan kebutuhan kontrol, keamanan, dan efisiensi tinggi.
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
      <section className="py-24 bg-white">
        <motion.div
          className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={stagger}
        >
          {/* LEFT – STORY */}
          <motion.div variants={fadeUp}>
            <span className="inline-block mb-4 px-4 py-1 rounded-full bg-primary-green/10 text-primary-green text-sm font-semibold">
              Implementasi Nyata
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-blue leading-tight">
              Chromebook Digunakan
              <br />
              Langsung di Aktivitas Sekolah
            </h2>

            <p className="mt-6 text-gray-600 text-sm sm:text-base leading-relaxed">
              <strong>Chromebook Education </strong>
              mendukung proses belajar yang lebih fokus, aman, dan terkontrol —
              mulai dari kegiatan kelas, ujian berbasis digital, hingga
              pengawasan guru secara real-time.
            </p>

            <ul className="mt-6 space-y-3 text-gray-700 text-sm sm:text-base">
              <li>✅ Siswa fokus tanpa distraksi</li>
              <li>✅ Guru mengontrol aktivitas kelas</li>
              <li>✅ Perangkat siap ujian & pembelajaran</li>
            </ul>
          </motion.div>

          {/* RIGHT – VIDEO CARD */}
          <motion.div
            variants={fadeScale}
            className="relative rounded-3xl overflow-hidden shadow-2xl"
          >
            {/* Floating Label */}
            <div className="absolute top-4 left-4 z-10 px-4 py-1 rounded-full bg-primary-blue text-white text-xs font-semibold shadow">
              Real School Usage
            </div>

            <div className="relative w-full aspect-video">
              <iframe
                src="https://www.youtube.com/embed/KcVaTVWocl8"
                title="Chromebook Education Experience"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* PRODUCT */}
      <section className="py-24 bg-white">
        <motion.div
          className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.div variants={fadeScale}>
            <Image
              src="/services/chromebook.webp"
              width={1000}
              height={1000}
              alt="Lenovo Chromebook"
              className="w-full max-w-lg mx-auto"
            />
          </motion.div>

          <motion.div variants={fadeUp}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-blue">
              Perangkat Pilihan:
              <br />
              Lenovo Chromebook 300e
              <br />
              (Education Series)
            </h2>

            <ul className="mt-8 space-y-4 text-gray-700">
              <li>✅ Touchscreen – Mendukung Pembelajaran Interaktif</li>
              <li>✅ Rugged / Tahan Banting</li>
              <li>✅ Manajemen Terpusat Sekolah</li>
              <li>
                ✅ Bundling Unit + Charger +{" "}
                <strong>Lisensi CEU Seumur Hidup</strong>
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </section>

      {/* VALUE */}
      <section className="py-24 bg-primary-blue/5">
        <motion.div
          className="max-w-7xl mx-auto px-6"
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
              },
              {
                title: "Fokus Belajar",
                desc: "Lingkungan bebas distraksi dengan aplikasi pembelajaran terkurasi.",
              },
              {
                title: "Berbasis Cloud",
                desc: "Data aman di cloud, tidak hilang, dan bisa diakses kapan saja.",
              },
              {
                title: "Mudah Dikelola",
                desc: "Setup cepat, update otomatis, dan maintenance minimal.",
              },
              {
                title: "Hemat Biaya",
                desc: "Lebih tahan lama, ringan, dan efisien untuk penggunaan pendidikan.",
              },
              {
                title: "Terintegrasi Google Workspace",
                desc: "Siap pakai dengan Classroom, Drive, Docs, Meet, dan lainnya.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition"
              >
                <h3 className="text-lg font-semibold text-primary-blue">
                  {item.title}
                </h3>
                <p className="mt-3 text-gray-600 text-sm sm:text-base">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* LIMITED OFFER + ANIMATED PRICE */}
      <section className="py-24 bg-primary-blue/5">
        <motion.div
          className="max-w-4xl mx-auto px-6 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-blue">
            Penawaran Terbatas – Batch 1
          </h2>

          <p className="mt-6 text-lg text-gray-700">
            Kuota <strong>25 Unit Pertama</strong>
            <br />
            (Prioritas 1 kelas full Level 7)
            <br />
            Sisa Kuota : <strong>{stok}</strong>
          </p>

          {/* ANIMATED PRICE BADGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.6 }}
            onViewportEnter={startCountUp}
            className="relative inline-block mt-12"
          >
            {/* Glow */}
            <motion.div
              animate={{ opacity: [0.4, 0.8, 0.4] }}
              transition={{ duration: 2.5, repeat: Infinity }}
              className="absolute -inset-3 rounded-3xl bg-primary-green/30 blur-xl"
            />

            {/* Badge */}
            <motion.div
              whileHover={{ y: -6, scale: 1.04 }}
              className="relative px-12 py-6 rounded-2xl bg-primary-green text-white shadow-xl"
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary-blue text-xs font-semibold">
                Batch 1
              </div>

              <p className="text-sm opacity-90">Harga Spesial</p>

              <div className="mt-1 text-3xl sm:text-4xl font-extrabold tracking-wide">
                Rp <motion.span>{rounded}</motion.span>
              </div>

              <p className="mt-1 text-xs opacity-90">
                per unit (All-in Package)
              </p>
            </motion.div>
          </motion.div>

          <p className="mt-6 text-gray-600 text-sm sm:text-base">
            Termasuk Device + CEU License
            <br />+ Setup & Enrollment Sekolah
          </p>

          <div className="mt-10">
            <a
              href="#order"
              className="inline-block px-8 py-4 rounded-full bg-primary-blue text-white font-semibold hover:opacity-90 transition"
            >
              Amankan Unit Sekarang
            </a>
          </div>
        </motion.div>
      </section>

      {/* AVAILABILITY INFO */}
      <section className="py-24 bg-white">
        <motion.div
          className="max-w-5xl mx-auto px-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-primary-blue mb-6">
            Ketersediaan & Pemesanan Selanjutnya
          </h3>

          <p className="text-gray-700 mb-8">
            Jika peminat melebihi <strong>25 unit</strong>, sekolah melalui PT
            Kibar Cendekia Muda akan membuka pemesanan
            <strong> Batch 2</strong>.
          </p>

          <div className="p-6 rounded-2xl bg-yellow-50 border border-yellow-300">
            <p className="text-sm sm:text-base text-gray-700">
              <strong>Catatan Penting:</strong> Harga dan ketersediaan stok
              untuk batch berikutnya <strong>tidak mengikat</strong>,
              menyesuaikan dengan kurs dollar dan stok pasar saat pemesanan.
            </p>

            <p className="mt-4 text-sm sm:text-base text-gray-700">
              <strong>Saran Kami:</strong> Amankan unit di Batch 1 demi
              kepastian harga dan kesiapan belajar siswa.
            </p>
          </div>
        </motion.div>
      </section>

      {/* ORDER FORM */}
      <section id="order" className="py-28 bg-white">
        <motion.div
          className="max-w-4xl mx-auto px-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-blue text-center">
            Form Pemesanan Chromebook
          </h2>

          <form
            className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6"
            onSubmit={handleSubmit}
          >
            <input
              name="school"
              placeholder="Nama Pemesan"
              required
              className="input"
            />
            <input
              name="pic"
              placeholder="Nama Lengkap Siswa"
              required
              className="input"
            />
            <input
              name="phone"
              placeholder="Kelas Saat Ini"
              required
              className="input"
            />
            <input
              name="email"
              type="email"
              placeholder="Email"
              className="input"
            />
            <input
              name="qty"
              type="tel"
              placeholder="Nomor Handphone yang bisa dihubungi"
              className="input"
            />
            <button
              type="submit"
              disabled={loading}
              className={`sm:col-span-2 mt-4 px-8 py-4 rounded-full font-semibold transition
                ${
                  loading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-primary-green text-white hover:opacity-90"
                }
              `}
            >
              {loading ? "Mengirim..." : "Kirim Pemesanan"}
            </button>
          </form>
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
        <Image
          src="/wave.webp"
          alt="Wave"
          width={1920}
          height={400}
          className="w-full h-auto object-cover"
        />
      </motion.div>

      {/* CLIENT */}
      <motion.div
        className="max-w-7xl mx-auto px-6"
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
