"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import OurClient from "@/components/sections/home/OurClient";
import { fadeScale, fadeUp, stagger } from "@/lib/motion";
import { img } from "framer-motion/client";
import { title } from "process";

const DEVICES = [
  {
    id: "pc1",
    img: "/services/hybrid-learning/pc1.jpg",
    title: "Paket PC Utama (CPU + Monitor + Keyboard + Mouse)",
    desc: "Satu set lengkap untuk operasional kelas hybrid, mencakup CPU, monitor, keyboard, dan mouse agar siap digunakan tanpa penambahan perangkat.",
    brand: "Unit yang kami siapkan:",
    detail: "",
  },
  {
    id: "pc2",
    img: "/services/hybrid-learning/pc2.jpg",
    title: "Unit CPU",
    desc: "Unit CPU tanpa paket monitor, keyboard, dan mouse.",
    brand: "Unit yang kami siapkan:",
    detail: "",
  },
  {
    id: "keyboard",
    img: "/services/hybrid-learning/keyboard.webp",
    title: "Keyboard",
    desc: "Memudahkan pengajar dalam mengontrol materi, navigasi presentasi, dan pengoperasian sistem secara cepat dan presisi.",
    brand: "Keyboard Logitech K120",
    detail:
      "Dipilih dengan key travel nyaman, respons konsisten, dan tata letak yang mendukung shortcut presentasi agar perpindahan materi lebih efisien.",
  },
  {
    id: "mouse",
    img: "/services/hybrid-learning/mouse.webp",
    title: "Mouse",
    desc: "Navigasi responsif untuk memastikan perpindahan materi dan kontrol visual berjalan dengan akurat.",
    brand: "Mouse Logitech K120",
    detail:
      "Cocok untuk kontrol pointer yang halus dan penggunaan panjang tanpa cepat lelah saat sesi belajar berlangsung.",
  },
  {
    id: "tripod",
    img: "/services/hybrid-learning/tripod.jpg",
    title: "Tripod",
    desc: "Menjaga stabilitas kamera agar menghasilkan gambar yang tajam, fokus, dan tidak goyang.",
    brand: "KNF Concept Camera Aluminum Tripod BI234M with Ballhead Kit",
    detail:
      "Struktur kokoh dan kepala tripod yang stabil membantu menjaga framing tetap rapi, terutama untuk setup kelas tetap dan pengambilan sudut utama.",
  },
  {
    id: "Monopod",
    img: "/services/hybrid-learning/monopod.jpg",
    title: "Monopod",
    desc: "Digunakan untuk pengambilan sudut tambahan yang membutuhkan mobilitas dan fleksibilitas lebih tinggi.",
    brand: "Monopod",
    detail:
      "Ideal untuk kebutuhan kamera pendukung yang harus berpindah posisi lebih cepat tanpa kehilangan kestabilan dasar saat pengambilan gambar.",
  },
  {
    id: "mic1",
    img: "/services/hybrid-learning/mic1.jpg",
    title: "Microphone",
    desc: "Menangkap suara pengajar dengan jernih, minim noise, dan kualitas audio profesional.",
    brand: "Tenveo TEVO-M1 Conference Microphone",
    detail: "",
  },
  {
    id: "mic2",
    img: "/services/hybrid-learning/mic2.webp",
    title: "Microphone Cadangan",
    desc: "Memberikan keamanan tambahan agar pembelajaran tetap berjalan lancar tanpa gangguan audio.",
    brand: "TaffSTUDIO 360 Degree Microphone Table Conference Zoom - iTalk-02",
    detail: "",
  },
  {
    id: "kamera1",
    img: "/services/hybrid-learning/kamera11.webp",
    title: "Webcam",
    desc: "Mengambil visual utama pengajar dengan resolusi tinggi dan pencahayaan optimal.",
    brand: "Ausdom AW615 1080p Full HD USB Webcam Network Camera with Microphone for PC",
    detail: "",
  },
  {
    id: "kamera2",
    img: "/services/hybrid-learning/kamera21.webp",
    title: "Webcam Sudut Tambahan",
    desc: "Digunakan untuk pengambilan sudut alternatif atau demonstrasi materi secara lebih detail.",
    brand: "Full HD 1080p USB webcam",
    detail: "",
  },
  {
    id: "hdmi",
    img: "/services/hybrid-learning/hdmii.webp",
    title: "Kabel HDMI",
    desc: "Menjamin transmisi gambar resolusi tinggi tanpa penurunan kualitas atau delay.",
    brand: "Vention - Kabel HDMI v2.0b Ultra HD 4K",
    detail:
      "Penting untuk koneksi kamera, monitor, atau capture setup dengan transfer sinyal yang stabil pada durasi kelas yang panjang.",
  },
  {
    id: "extension",
    img: "/services/hybrid-learning/extension.webp",
    title: "Extension Power Management",
    desc: "Mengatur distribusi daya secara aman dan rapi untuk mendukung seluruh perangkat hybrid learning.",
    brand: "Vention - HDMI Splitter (1 in 2 Out) Full HD 3D 4K",
    detail:
      "Membantu manajemen kabel, pembagian daya, dan perlindungan perangkat agar setup lebih aman, rapi, dan mudah dipelihara.",
  },
  {
    id: "maxhub",
    img: "/services/hybrid-learning/ifp.webp",
    title: "Interactive Flat Panel (IFP)",
    desc: "Layar interaktif untuk presentasi dinamis, kolaborasi, dan visualisasi materi pembelajaran yang lebih menarik.",
    brand: "IFP Maxhub interactive V5 Classic Series C75FA 76 Inch",
    detail:
      "Mendukung fitur whiteboard digital, annotasi langsung, dan konektivitas yang memudahkan pengajar dalam menyampaikan materi secara interaktif.",
  },
  {
    id: "bracket maxhub",
    img: "/services/hybrid-learning/bracket_ifp.webp",
    title: "Bracket untuk IFP",
    desc: "Menyediakan dukungan stabil dan fleksibel untuk memasang Interactive Flat Panel (IFP) di ruang kelas.",
    brand: "Maxhub Bracket",
    detail:
      "Didesain untuk memastikan IFP tetap aman dan terposisi dengan baik, memudahkan akses dan penggunaan selama proses pembelajaran.",
  },
  {
    id: "coocaa",
    img: "/services/hybrid-learning/coocaa.webp",
    title: "Coocaa Interactive Display",
    desc: "Layar interaktif dengan teknologi touch yang memungkinkan kolaborasi dan presentasi yang lebih menarik.",
    brand: "Coocaa Interactive Display",
    detail:
      "Menyediakan pengalaman belajar yang imersif dengan layar besar dan responsivitas tinggi.",
  },
  {
    id: "bracket coocaa",
    img: "/services/hybrid-learning/bracket_coocaa.webp",
    title: "Bracket untuk Coocaa",
    desc: "Menyediakan dukungan stabil dan fleksibel untuk memasang Coocaa Interactive Display di ruang kelas.",
    brand: "Coocaa Bracket",
    detail:
      "Didesain untuk memastikan Coocaa tetap aman dan terposisi dengan baik, memudahkan akses dan penggunaan selama proses pembelajaran.",
  }
];

export default function HybridLearningPage() {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  return (
    <div className="bg-white text-gray-800">
      {/* ================= HERO SECTION ================= */}
      <motion.section
        className="max-w-7xl mx-auto relative py-48 flex items-center justify-center text-center px-6 bg-gradient-to-br from-primary-blue via-green-900 to-primary-blue text-white mt-20 rounded-lg overflow-hidden"
        variants={stagger}
        initial="hidden"
        animate="show"
      >
        <motion.div
          className="absolute -top-20 -left-20 h-64 w-64 rounded-full bg-white/10 blur-3xl"
          animate={{ y: [0, 16, 0], x: [0, 10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-indigo-300/20 blur-3xl"
          animate={{ y: [0, -18, 0], x: [0, -10, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="max-w-4xl relative z-10">
          <motion.h1
            variants={fadeUp}
            className="text-4xl md:text-6xl font-bold leading-tight mb-6"
          >
            Perangkat Hybrid Learning Profesional untuk Pembelajaran Modern
          </motion.h1>

          <motion.p variants={fadeUp} className="text-lg md:text-xl opacity-90 mb-8">
            Luminoed menghadirkan sistem hybrid learning terintegrasi dengan perangkat profesional
            untuk menciptakan pengalaman belajar interaktif, jernih, stabil, dan berkualitas tinggi.
          </motion.p>

          <motion.div variants={fadeUp} className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/contact"
              className="bg-white text-indigo-800 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
            >
              Konsultasi Sekarang
            </Link>
            <Link
              href="#perangkat"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-indigo-800 transition"
            >
              Lihat Layanan Lainnya
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* ================= SETUP UTAMA ================= */}
      <motion.section
        className="py-24 px-6 max-w-7xl mx-auto border-l-2 border-dashed border-gray-200"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div variants={fadeScale}>
            <Image
              src="/services/hybrid-learning/setup2.webp"
              alt="Setup Hybrid Learning"
              width={1000}
              height={700}
              className="rounded-3xl shadow-2xl"
            />
          </motion.div>

          <motion.div variants={fadeUp}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary-blue">
              Satu Setup, Sistem Lengkap, Siap Digunakan.
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Setup hybrid learning Luminoed menggabungkan green screen profesional,
              komputer performa tinggi, sistem kamera stabil, serta audio berkualitas studio.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Dengan sistem ini, pengajar dapat menampilkan presentasi dinamis,
              menambahkan visual interaktif, serta menghadirkan pengalaman belajar
              yang lebih baik untuk siswa online maupun offline.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* ================= PAKET SET LENGKAP ================= */}
      <section className="py-24 px-6 bg-white">
        <motion.div
          className="max-w-7xl mx-auto text-center mb-16 border-l-2 border-dashed border-gray-200"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={stagger}
        >
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold mb-4 text-primary-blue">
            Paket Set Lengkap Hybrid Learning
          </motion.h2>
          <motion.p variants={fadeUp} className="text-gray-600 max-w-3xl mx-auto">
            Kami menyediakan paket-paket hybrid learning yang dirancang khusus untuk memenuhi berbagai kebutuhan institusi pendidikan
            dengan tingkat kualitas dan fitur yang berbeda.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto items-start border-l-2 border-dashed border-gray-200">
          {/* Paket Ekonomis */}
          <PackageCard
            title="Paket Ekonomis"
            subtitle="Solusi Dasar yang Terjangkau"
            color="from-blue-500 to-blue-600"
            layoutImage="/services/hybrid-learning/ekonomis.webp"
            features={[
              "Kamera Webcam Digital",
              "USB Extention Netline - USB 2.0",
              "Mic 360 MAONO 360 Omni",
              "Tripod",
              "PC",
              "Monitor",
              "TV",
              "Dashboard Eksternal: Google Meet Fundametals license",
              "Report Looker Studio Fundamentals license",
            ]}
            description="Paket Ekonomis adalah solusi terintegrasi untuk pembelajaran hybrid tingkat dasar. Cocok untuk kelas dengan anggaran terbatas namun tetap membutuhkan kualitas visual dan audio yang baik. Semua perangkat sudah dikonfigurasi siap pakai."
            benefits={["Harga Terjangkau", "Setup Mudah", "Perawatan Sederhana"]}
            bgImage="bg-gradient-to-br from-blue-50 to-cyan-50"
          />

          {/* Paket Premium */}
          <PackageCard
            title="Paket Premium"
            subtitle="Performa Optimal & Profesional"
            color="from-purple-500 to-purple-600"
            layoutImage="/services/hybrid-learning/premium.webp"
            features={[
              "Kamera OBSBOT Tiny 4K Al-Powered PTZ Webcam",
              "Tripod KNF Concept Camera Aluminum Tripod BI234M with Ballhead Kit",
              "PC Performa Tinggi",
              "Monitor LED AOC 24B2H2 24\" IPS",
              "TV Sony - Bravia 4K Ultra HD Google TV 55 inch",
              "Kabel HDMI Vention - Kabel HDMI v2.0b Ultra HD 4K",
              "Bracket TV AVA1500 Bracket Standing LED TV",
              "USB Ext Netline - USB 2.0 Active Extension 10M",
              "Mic With Speaker For Conference",
              "Mic Conference Micropohone with Speaker",
              "Mic Conference Room Seminar",
              "HDMI Splitter Vention - HDMI Splitter (1 in 2 Out) Full HD 3D 4K",
              "Dashboard Eksternal: Google Meet Education Plus License",
              "Report Looker Studio Education Plus License",
            ]}
            description="Paket Premium menawarkan sistem hybrid learning yang lebih lengkap dengan dukungan multi-kamera dan audio profesional. Ideal untuk institusi yang menginginkan kualitas broadcasting profesional dengan fleksibilitas tinggi dalam produksi konten pembelajaran."
            benefits={["Multi-Camera Setup", "Audio Studio Quality", "Broadcast Standard"]}
            bgImage="bg-gradient-to-br from-purple-50 to-pink-50"
          />

          {/* Paket Gold */}
          <PackageCard
            title="Paket Gold"
            subtitle="Eksklusif dengan Green Screen"
            color="from-amber-500 to-amber-600"
            layoutImage="/services/hybrid-learning/p3.png"
            features={[
              "Kamera OBSBOT Tail Air Webcam Al-Powered 4K Camera Streaming Portable",
              "Tripod",
              "IFP Maxhub interactive V5 Classic Series C75FA 76 Inch",
              "Dashboard Eksternal: Google Meet Education Plus License",
              "Report Looker Studio Education Plus License",
            ]}
            description="Paket Gold adalah solusi premium dengan penambahan green screen profesional dan lighting kit. Memungkinkan pengajar menciptakan set pembelajaran yang lebih dinamis dengan background virtual dan pencahayaan sempurna. Cocok untuk produksi konten kelas yang berkualitas tinggi."
            benefits={["Virtual Background", "Pro Lighting", "Studio Quality", "Full Customization"]}
            bgImage="bg-gradient-to-br from-amber-50 to-yellow-50"
          />

          {/* Paket Full MaxHub */}
          <PackageCard
            title="Paket Full MaxHub"
            subtitle="Solusi Enterprise Terintegrasi"
            color="from-red-500 to-red-600"
            layoutImage="/services/hybrid-learning/p3.png"
            features={[
              "Maxhub SmartWhiteboard 86 inch",
              "Recording Host",
              "Student Camera",
              "Teacher Camera",
              "Omnidirectional Microphone (2PCS)",
              "OPS62 i5 RAM 8 GB SSD 256 GB",
              "Dashboard Eksternal: Google Meet Education Plus License",
              "Report Looker Studio Education Plus License",
            ]}
            description="Paket Full MaxHub adalah solusi terintegrasi paling lengkap untuk institusi pendidikan besar. Menggabungkan interactive smart board MaxHub dengan sistem hybrid learning profesional lengkap. Mendukung kolaborasi kelas yang lebih interaktif dan engaging untuk pembelajaran modern skala enterprise."
            benefits={["Interactive Smart Board", "4K Resolution", "Enterprise Class", "Full Support Included"]}
            bgImage="bg-gradient-to-br from-red-50 to-orange-50"
          />
        </div>
      </section>

      {/* ================= PERANGKAT INTI ================= */}
      <section id="perangkat" className="py-24 bg-gray-50 px-6">
        <motion.div
          className="max-w-7xl mx-auto text-center mb-16"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={stagger}
        >
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold mb-4 text-primary-blue">
            Paket Satuan Perangkat Hybrid Learning
          </motion.h2>
          <motion.p variants={fadeUp} className="text-gray-600 max-w-3xl mx-auto">
            Setiap perangkat dipilih untuk memastikan performa maksimal,
            stabilitas sistem, dan kualitas pembelajaran terbaik.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto items-start">
          {DEVICES.map((item) => (
            <Card
              key={item.id}
              id={item.id}
              img={item.img}
              title={item.title}
              desc={item.desc}
              brand={item.brand}
              detail={item.detail}
              expanded={activeCard === item.id}
              onOpen={() => setActiveCard(item.id)}
              onClose={() => setActiveCard((prev) => (prev === item.id ? null : prev))}
            />
          ))}
        </div>
      </section>

      {/* ================= PROBLEM SECTION ================= */}
      <section className="py-24 px-6 bg-gray-50">
        <motion.div
          className="max-w-7xl mx-auto text-center mb-16"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={stagger}
        >
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold mb-4 text-primary-blue">
            Tantangan dalam Hybrid Learning
          </motion.h2>
          <motion.p variants={fadeUp} className="text-gray-600 max-w-3xl mx-auto">
            Banyak institusi mengalami kendala teknis saat menjalankan pembelajaran hybrid.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <ProblemCard
            title="Audio Tidak Jelas"
            desc="Suara terputus-putus atau banyak noise mengganggu konsentrasi siswa."
          />
          <ProblemCard
            title="Video Tidak Stabil"
            desc="Kamera goyang atau resolusi rendah membuat pembelajaran kurang profesional."
          />
          <ProblemCard
            title="Sistem Sering Lag"
            desc="PC tidak memadai menyebabkan live streaming tersendat."
          />
        </div>
      </section>

      {/* ================= KEUNGGULAN ================= */}
      <section className="py-24 bg-white px-6">
        <motion.div
          className="max-w-7xl mx-auto text-center mb-16 border-l-2 border-dashed border-gray-2 00"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={stagger}
        >
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold mb-4 text-primary-blue">
            Mengapa Memilih Luminoed?
          </motion.h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-7xl mx-auto border-l-2 border-dashed border-gray-200 p-6">
          <Feature
            title="Setup Profesional"
            desc="Perangkat dipilih dengan standar profesional untuk menjamin kualitas visual dan audio terbaik."
          />
          <Feature
            title="Sistem Stabil & Terintegrasi"
            desc="Semua perangkat bekerja secara sinkron untuk meminimalkan risiko gangguan teknis."
          />
          <Feature
            title="Tampilan Modern & Interaktif"
            desc="Green screen dan multi-angle camera memberikan pengalaman belajar yang lebih menarik."
          />
          <Feature
            title="Siap Digunakan"
            desc="Setup dirancang agar mudah dioperasikan oleh pengajar tanpa perlu teknisi khusus."
          />
        </div>
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
        className="max-w-7xl mx-auto px-6 border-l-2 border-dashed border-gray-200"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <OurClient />
      </motion.div>

      {/* ================= CTA ================= */}
      <motion.section
        className="py-24 text-center bg-gradient-to-r from-primary-blue to-indigo-900 text-white px-6"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        variants={stagger}
      >
        <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold mb-6">
          Tingkatkan Standar Pembelajaran Bersama Luminoed
        </motion.h2>
        <motion.p variants={fadeUp} className="max-w-3xl mx-auto mb-8 opacity-90">
          Dengan sistem hybrid learning profesional dari Luminoed, Anda tidak hanya
          mengajar - Anda menciptakan pengalaman belajar modern yang interaktif,
          profesional, dan terpercaya.
        </motion.p>
        <motion.div variants={fadeUp}>
          <Link
            href="/contact"
            className="inline-block bg-white text-indigo-700 px-10 py-4 rounded-full font-semibold hover:scale-105 transition"
          >
            Konsultasi Sekarang
          </Link>
        </motion.div>
      </motion.section>
    </div>
  );
}

/* ================= COMPONENT CARD ================= */

function Card({
  id,
  img,
  title,
  desc,
  brand,
  detail,
  expanded,
  onOpen,
  onClose,
}: {
  id: string;
  img: string;
  title: string;
  desc: string;
  brand: string;
  detail: string;
  expanded: boolean;
  onOpen: () => void;
  onClose: () => void;
}) {
  return (
    <motion.article
      className={`w-full self-start border p-6 rounded-3xl cursor-pointer md:col-span-1 relative overflow-hidden ${
        expanded
          ? "bg-white border-primary-blue/30 shadow-2xl ring-1 ring-primary-blue/15"
          : "bg-white border-primary-blue/10 shadow-lg hover:shadow-2xl"
      }`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      whileHover={expanded ? undefined : { y: -4, scale: 1.005 }}
      onMouseEnter={onOpen}
      onMouseLeave={onClose}
      onFocus={onOpen}
      onBlur={onClose}
      role="button"
      tabIndex={0}
      aria-expanded={expanded}
      aria-controls={`device-detail-${id}`}
    >
      <div className="absolute -top-10 -right-10 h-24 w-24 rounded-full bg-primary-blue/10 blur-2xl" />
      <div className="absolute -bottom-12 -left-10 h-28 w-28 rounded-full bg-primary-green/10 blur-2xl" />

      <div className="flex flex-col gap-5 relative">
        <motion.div
          animate={{ scale: expanded ? 1.01 : 1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <Image
            src={img}
            alt={title}
            width={500}
            height={320}
            className="rounded-2xl w-full object-cover"
          />
        </motion.div>

        <motion.div className="flex-1">
          <h3 className="text-xl font-semibold mb-2 text-primary-green">{title}</h3>
          <p className="text-gray-600 leading-relaxed">{desc}</p>
          <p className="mt-4 text-sm font-semibold text-primary-blue">
            {expanded ? "Geser keluar untuk menutup" : "Arahkan untuk melihat detail"}
          </p>

          <div
            id={`device-detail-${id}`}
            className={`mt-4 border-t border-gray-200 pt-4 transition-[max-height,opacity] duration-300 ease-out ${
              expanded ? "max-h-[520px] opacity-100" : "max-h-0 opacity-0"
            } overflow-hidden`}
          >
            <p className="text-sm font-semibold text-primary-blue">{brand}</p>
            {detail ? <p className="mt-2 text-gray-600 leading-relaxed">{detail}</p> : null}
            {id === "pc1" && (
              <ul className="mt-3 text-gray-600 leading-relaxed list-disc pl-5 space-y-1">
                <li>Motherboard ASROCK B760M PRO RS DDR5</li>
                <li>Prosesor Intel i5-14400F</li>
                <li>RAM 2x8GB CORSAIR VENGEANCE (dual-channel)</li>
                <li>VGA MSI GTX 1650 4GB</li>
                <li>SSD XPG 256GB</li>
                <li>HDD WD BLUE</li>
                <li>PSU AEROCOOL LUX 650W 80+ Bronze</li>
                <li>Casing CUBE GAMING ZINCT WHITE</li>
                <li>Cooling Fan DEEPCOOL AG400 ARGB</li>
                <li>Monitor LED AOC 24B2H2 24" IPS</li>
              </ul>
            )}
            {id === "pc2" && (
              <ul className="mt-3 text-gray-600 leading-relaxed list-disc pl-5 space-y-1">
                <li>Motherboard ASROCK B760M PRO RS DDR5</li>
                <li>Prosesor Intel i5-14400F</li>
                <li>RAM 2x8GB CORSAIR VENGEANCE (dual-channel)</li>
                <li>VGA MSI GTX 1650 4GB</li>
                <li>SSD XPG 256GB</li>
                <li>HDD WD BLUE</li>
                <li>PSU AEROCOOL LUX 650W 80+ Bronze</li>
                <li>Casing CUBE GAMING ZINCT WHITE</li>
                <li>Cooling Fan DEEPCOOL AG400 ARGB</li>
              </ul>
            )}
            {id === "mic1" && (
              <ul className="mt-3 text-gray-600 leading-relaxed list-disc pl-5 space-y-1">
                <li>Memiliki jangkauan penangkapan suara omnidirectional 360 derajat.</li>
                <li>Dilengkapi teknologi peredam noise otomatis dan echo cancellation.</li>
                <li>Mendukung koneksi USB untuk fungsi plug-and-play pada komputer.</li>
                <li>Dirancang untuk digunakan dengan platform video konferensi seperti Zoom dan Microsoft Teams.</li>
              </ul>
            )}
            {id === "mic2" && (
              <ul className="mt-3 text-gray-600 leading-relaxed list-disc pl-5 space-y-1">
                <li>Mikrofon ini dapat menangkap suara dari segala arah dengan radius hingga 3 meter, sehingga ideal untuk digunakan oleh 3–4 orang di satu meja rapat.</li>
                <li>Dilengkapi teknologi untuk meredam kebisingan latar belakang agar suara vokal terdengar lebih jernih.</li>
                <li>Sangat praktis karena langsung bisa digunakan tanpa perlu menginstal driver tambahan. Biasanya terhubung melalui USB atau jack audio 3.5mm.</li>
                <li>Bentuknya yang kecil dan datar (tabletop) dilengkapi dengan alas karet anti-slip agar tetap stabil saat diletakkan di atas meja.</li>
              </ul>
            )}
            {id === "kamera1" && (
              <ul className="mt-3 text-gray-600 leading-relaxed list-disc pl-5 space-y-1">
                <li>Video Full HD 1080P pada 30 frame per detik.</li>
                <li>Lensa kaca berlapis film 5 lapis untuk kejernihan yang lebih baik.</li>
                <li>Mikrofon omnidirectional internal dengan pengurangan kebisingan.</li>
                <li>Penyesuaian fokus manual, desain anti-distorsi dengan sudut pandang 90 derajat, dan klip fleksibel untuk pemasangan pada layar atau meja.</li>
              </ul>
            )}
            {id === "kamera2" && (
              <ul className="mt-3 text-gray-600 leading-relaxed list-disc pl-5 space-y-1">
                <li>1080p Full HD (1920x1080 pixels).</li>
                <li>Built-in microphone, typically plug-and-play via USB 2.0, and often includes autofocus. </li>
                <li>Works with Windows, Mac, and various video calling apps like Zoom, Skype, and YouTube. </li>
              </ul>
            )}
          </div>
        </motion.div>
      </div>
    </motion.article>
  );
}

function ProblemCard({ title, desc }: { title: string; desc: string }) {
  return (
    <motion.div
      className="p-8 border rounded-3xl hover:shadow-xl transition"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      whileHover={{ y: -4 }}
    >
      <h3 className="text-xl font-semibold mb-4 text-primary-green">{title}</h3>
      <p className="text-gray-600">{desc}</p>
    </motion.div>
  );
}

function Feature({ title, desc }: { title: string; desc: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <h3 className="text-xl font-semibold mb-3 text-primary-green">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{desc}</p>
    </motion.div>
  );
}

function PackageCard({
  title,
  subtitle,
  color,
  layoutImage,
  features,
  description,
  benefits,
  bgImage,
}: {
  title: string;
  subtitle: string;
  color: string;
  layoutImage: string;
  features: string[];
  description: string;
  benefits: string[];
  bgImage: string;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      className={`relative self-start h-fit rounded-3xl overflow-hidden border-2 transition-all duration-300 cursor-pointer ${
        expanded ? "border-primary-blue/40 shadow-2xl" : "border-gray-200 shadow-lg"
      }`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ y: -8 }}
      onClick={() => setExpanded(!expanded)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          setExpanded(!expanded);
        }
      }}
    >
      {/* Background */}
      <div className={`absolute inset-0 ${bgImage} -z-10`} />

      {/* Layout Image */}
      <div className="relative w-full bg-gray-100">
        <Image
          src={layoutImage}
          alt={`${title} Layout`}
          width={800}
          height={600}
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Header */}
      <div className={`bg-gradient-to-r ${color} text-white p-8`}>
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-2">{title}</h3>
            <p className="text-sm md:text-base font-medium opacity-90">{subtitle}</p>
          </div>
          <motion.div
            animate={{ rotate: expanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="flex-shrink-0"
          >
            <svg
              className="w-6 h-6 md:w-8 md:h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="p-8 bg-white/80 backdrop-blur-sm">
        {/* Benefits Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {benefits.map((benefit, idx) => (
            <motion.span
              key={idx}
              className={`inline-block px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r ${color} text-white`}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
            >
              {benefit}
            </motion.span>
          ))}
        </div>

        {/* Description */}
        <p className="text-gray-700 leading-relaxed mb-6 font-medium">{description}</p>

        {/* Features List */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: expanded ? 1 : 0,
            height: expanded ? "auto" : 0,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="overflow-hidden"
        >
          <div className="mb-6 pt-4 border-t border-gray-300">
            <h4 className="font-bold text-primary-blue mb-4 text-lg">Paket Mencakup:</h4>
            <ul className="space-y-3">
              {features.map((feature, idx) => (
                <motion.li
                  key={idx}
                  className="flex items-start gap-3 text-gray-700"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <span className={`flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r ${color} flex items-center justify-center text-white text-xs font-bold mt-0.5`}>
                    ✓
                  </span>
                  <span>{feature}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* CTA Button */}
          <div className="pt-4 border-t border-gray-300">
            <Link
              href="/contact"
              className={`inline-block w-full text-center bg-gradient-to-r ${color} text-white py-3 rounded-xl font-bold hover:shadow-lg transition-all duration-300 hover:scale-105`}
            >
              Konsultasi {title}
            </Link>
          </div>
        </motion.div>

        {/* Expand/Collapse hint */}
        <div className="text-center text-xs text-gray-500 mt-4">
          {expanded ? "Klik untuk tutup" : "Klik untuk melihat detail lengkap"}
        </div>
      </div>
    </motion.div>
  );
}
