"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { CircleCheck, School } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import OurClient from "@/components/sections/home/OurClient";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function SmartSchoolServices() {
  const tabs = ["Smart Class", "Smart Talent", "Smart Asset", "Smart Management"];
  const [activeTab, setActiveTab] = useState("default"); // default: full content

  // Render konten sesuai tab
  const renderContent = () => {
    if (activeTab === "default") {
      // Konten full seperti halaman sekarang
      return (
        <>
          {/* Section 1 */}
          <div className="max-w-7xl mx-auto">
          <div className="pt-10 flex justify-between items-center tablet-landscape-min:gap-12">
            <div>
              <h1 className="font-bold text-3xl tablet-landscape-max:text-6xl text-primary-blue">
                Pengelolaan <br />
                Kurikulum Sekolah
              </h1>
              <div className="flex flex-col gap-10 mt-10">
                <div>
                  <CircleCheck className="text-primary-green" />
                  <h3 className="font-semibold mt-2">Otomatisasi Modul Ajar</h3>
                  <p className="font-light tablet-landscape-max::w-1/2">
                    Mengintegrasikan teknologi untuk memfasilitasi otomatisasi
                    modul ajar yang memenuhi standar kurikulum nasional.
                  </p>
                </div>
                <div>
                  <CircleCheck className="text-primary-green" />
                  <h3 className="font-semibold mt-2">
                    Penilaian yang Autentik
                  </h3>
                  <p className="font-light tablet-landscape-max:w-1/2">
                    Memastikan standar penilaian yang akurat dan konsisten untuk
                    meningkatkan kualitas pendidikan.
                  </p>
                </div>
              </div>
            </div>
            <Image
              className="hidden tablet-landscape-min:block rounded-2xl"
              src={"/services/smartschool.png"}
              width={500}
              height={500}
              alt="Smart School"
              priority
            />
          </div>

          {/* Section 2 */}
          <div className="pt-16 tablet-landscape-max:pt-36">
            <h1 className="font-bold text-3xl tablet-landscape-max:text-4xl text-primary-blue text-center">
              Pengelolaan Tenaga <br />
              Pendidik
            </h1>
            <div className="flex flex-col md:flex-row justify-center gap-16 pt-10">
              <div className="bg-white rounded-xl shadow-2xl max-w-sm">
                <div className="h-2 bg-primary-green rounded-t-xl"></div>
                <div className="p-5 flex flex-col gap-3">
                  <h1 className="font-bold text-primary-blue">
                    Manajemen Kehadiran dan Agenda Kerja
                  </h1>
                  <p>
                    Platform yang memudahkan sekolah dalam mengelola kehadiran
                    dan jadwal tenaga pendidik secara efisien.
                  </p>
                  <hr />
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-2xl max-w-sm">
                <div className=" h-2 bg-primary-green rounded-t-xl"></div>
                <div className="p-5 flex flex-col gap-3">
                  <h1 className="font-bold text-primary-blue">
                    Manajemen Mutabaah
                  </h1>
                  <p>
                    Memfasilitasi proses mutabaah dan evaluasi kinerja tenaga
                    pendidik untuk mendukung pengembangan profesionalisme.
                  </p>
                  <hr />
                </div>
              </div>
            </div>
          </div>

          {/* Section 3 */}
          <div className="pt-32">
            <h1 className="font-bold text-3xl tablet-landscape-max:text-4xl text-primary-blue">
              Pengelolaan Aset <br />
              Pendidik
            </h1>
            <div className="bg-white shadow-2xl rounded-2xl mt-7">
              <div className="relative p-8 bg-white rounded-xl shadow-md overflow-hidden min-h-[300px]">
                <div className="z-10 max-w-md">
                  <h1 className="font-semibold text-xl mb-4">Manajemen Aset</h1>
                  <p className="text-gray-700 leading-relaxed">
                    Sistem yang memungkinkan sekolah untuk mengelola aset dengan
                    efisien, termasuk pemeliharaan dan peningkatan kualitas
                    layanan sekolah.
                  </p>
                </div>
                <div className="absolute right-0 bottom-0 top-10 w-[45%] hidden tablet-landscape-max:block">
                  <Image
                    src="/services/smartschool.png"
                    alt="Manajemen Aset"
                    fill
                    className="object-cover object-bottom-right"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
          </div>
        </>
      );
    }

    // Konten tab individual
    switch (activeTab) {
      case "Smart Class":
        return (
          <>
            <div className="flex flex-col md:flex-row justify-center gap-16 pt-10">
              <div className="grid gap-5 max-w-lg">
                <Image
                  className="rounded-2xl"
                  src={"/services/smartschool.png"}
                  width={500}
                  height={500}
                  alt="Smart School"
                  priority
                />
                <div>
                  <h2 className="text-2xl md:text-3xl font-semibold">
                    Manajemen Kelas
                  </h2>
                  <p className="mt-3 font-light">
                    Menyediakan layanan hybrid yang memungkinkan akses mudah
                    bagi siswa dan orang tua terhadap materi ajar dan proses
                    pembelajaran harian secara real-time.
                  </p>
                </div>
              </div>
              <div className="grid gap-5 max-w-lg">
                <Image
                  className="rounded-2xl"
                  src={"/services/smartschool.png"}
                  width={500}
                  height={500}
                  alt="Smart School"
                  priority
                />
                <div>
                  <h2 className="text-2xl md:text-3xl font-semibold">
                    Hybrid Learning
                  </h2>
                  <p className="mt-3 font-light">
                    Platform yang mendukung interaksi langsung antara guru dan
                    siswa, serta menyediakan konten pembelajaran yang dapat
                    disesuaikan dengan kebutuhan individu.
                  </p>
                </div>
              </div>
            </div>
            <div className="pt-16 tablet-landscape-max:pt-36">
              <h1 className="font-bold text-3xl tablet-landscape-max:text-4xl text-primary-blue text-center">
                Smart Class
              </h1>
              <div className="flex flex-col md:flex-row gap-10 pt-10">
                <div className="bg-slate-300 p-16 rounded-lg w-full md:w-[46%]">
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
                </div>
                <div className="bg-slate-300 p-16 rounded-lg w-full md:w-[54%]">
                  <Image
                    src={"/services/smart-class/icon2.svg"}
                    width={100}
                    height={100}
                    alt="Smart-Class Icon 2"
                    className="mx-auto"
                    priority
                  />
                  <h2 className="mt-5 text-2xl font-bold text-center text-primary-blue/80">
                    Akibat Dari Revolusi Pendidikan yang Terjadi di Lingkungan
                    Sekitar
                  </h2>
                </div>
              </div>
              <div className="bg-slate-300 p-16 rounded-lg w-full mt-10">
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
              </div>
            </div>
          </>
        );
      case "Smart Talent":
        return (
          <>
            <div className="pt-10">
              <div className="w-full tablet-landscape-max:w-2/5 flex flex-col md:flex-row justify-center items-center ">
                <div className="flex flex-col justify-center">
                  <h2 className="font-bold text-3xl tablet-landscape-max:text-4xl text-primary-blue">
                    Smart Talent
                  </h2>
                  <p className="mt-3 text-lg font-light">
                    Manajemen sekolah dapat memantau secara real time dengan
                    dashboard yang disediakan untuk mengetahui karywan yang
                    hadir , terlambat dan jurnal kerja beserta mutabaah pendidik
                    dan tenaga pendidik.
                  </p>
                  <br />
                  <p className="text-lg font-light">
                    Tenaga pendidik dan pendidik pun dapat melihat capaian
                    dirinya berdasarkan mutbaah, presensi ataupun agenda kerja
                    sebagai bahan evalaui untuk perbaikan performa.
                  </p>
                </div>
                <div className="md:h-[450px]"></div>
              </div>
              <Image
                className="hidden tablet-landscape-max:block rounded-2xl absolute -right-36 top-[10%] object-cover"
                src={"/services/smart-talent/smarttalent.png"}
                width={800}
                height={800}
                alt="Smart School"
                priority
              />
            </div>
            <div className="pt-16 tablet-landscape-max:pt-36">
              <h1 className="font-bold text-3xl tablet-landscape-max:text-4xl text-primary-blue text-center">
                Smart Talent
              </h1>
              <div className="mt-20 flex flex-col md:flex-row gap-10 justify-center">
                <div className="max-w-sm border-l-4 border-primary-green pl-6 md:pl-4 tablet-landscape-min:pl-6 tablet-landscape-min:mr-28 h-[400px]">
                  <span className="text-slate-600 font-semibold text-lg">
                    01.
                  </span>
                  <h2 className="text-slate-600 font-bold text-2xl tablet-landscape-min:text-3xl">
                    Dashboard Tendik
                  </h2>
                </div>
                <div className="max-w-sm border-l-4 border-primary-green pl-6 md:pl-4 tablet-landscape-min:pl-6 tablet-landscape-min:mr-28 h-[400px]">
                  <span className="text-slate-600 font-semibold text-lg ">
                    02.
                  </span>
                  <h2 className="text-slate-600 font-bold text-2xl tablet-landscape-min:text-3xl">
                    Aplikasi Presensi & Absensi
                  </h2>
                </div>
                <div className="max-w-sm border-l-4 border-primary-green pl-6 md:pl-4 tablet-landscape-min:pl-6 tablet-landscape-min:mr-28 h-[400px]">
                  <span className="text-slate-600 font-semibold text-lg ">
                    03.
                  </span>
                  <h2 className="text-slate-600 font-bold text-2xl tablet-landscape-min:text-3xl">
                    Aplikasi Mutabaah
                  </h2>
                </div>
              </div>
            </div>
          </>
        );
      case "Smart Asset":
        return (
          <>
            <div className="pt-10">
              <div className="w-full tablet-landscape-max:w-2/5 flex flex-col md:flex-row justify-center items-center ">
                <div className="flex flex-col justify-center">
                  <h2 className="font-bold text-3xl tablet-landscape-max:text-4xl text-primary-blue">
                    Smart Asset
                  </h2>
                  <p className="mt-3 text-lg font-light">
                    Dalam smart Asset manajemen sekolah/yayasan dapat secara
                    realtime menginventaris aset sekolah yang ada di setiap
                    ruangan dan secara system dapat dengan segera mengetahui
                    aset mana yang perlu maintenance untuk memberikan pelayanan
                    maksimal kepada peserta didik.
                  </p>
                </div>
                <div className="md:h-[450px]"></div>
              </div>
              <Image
                className="hidden tablet-landscape-max:block rounded-2xl absolute -right-36 top-[12%] object-cover"
                src={"/services/smart-asset/smartasset.png"}
                width={800}
                height={800}
                alt="Smart School"
                priority
              />
            </div>
            <div className="pt-16 tablet-landscape-max:pt-40">
              <h1 className="font-bold text-3xl tablet-landscape-max:text-4xl text-primary-blue text-center">
                Smart Asset
              </h1>
              <div className="flex flex-col md:flex-row justify-center gap-16 pt-10">
                <div className="bg-white rounded-xl shadow-2xl max-w-md">
                  <div className="h-2 bg-primary-green rounded-t-xl"></div>
                  <div className="p-8 flex flex-col gap-3">
                    <h1 className="font-bold text-primary-blue">
                      Dashboard asset untuk ruang kelas
                    </h1>
                    <p className="text-slate-500">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Ut, minus ab. Voluptatibus officiis dolorum nihil
                      voluptatum soluta odit ullam, placeat porro ipsum!
                      Provident, rem sunt laboriosam incidunt inventore eveniet
                      aperiam, labore corporis exercitationem est illum eligendi
                      aliquam iure hic amet? Dolores necessitatibus expedita,
                      itaque, obcaecati, ad deleniti reprehenderit nobis sed
                      culpa quia ea aut voluptates mollitia animi rem atque.
                      Animi.
                    </p>
                    <hr />
                  </div>
                </div>
                <div className="bg-white rounded-xl shadow-2xl max-w-md">
                  <div className=" h-2 bg-primary-green rounded-t-xl"></div>
                  <div className="p-8 flex flex-col gap-3">
                    <h1 className="font-bold text-primary-blue">
                      QR Code untuk setiap asset kelas
                    </h1>
                    <p className="text-slate-500">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Enim minima sapiente molestias provident incidunt ipsa
                      quidem voluptas quod alias ratione? Quas rem perspiciatis
                      delectus facere, dolores assumenda eligendi culpa animi
                      corporis obcaecati. Illum expedita praesentium distinctio
                      qui harum optio odio, officiis deserunt libero ullam! Cum
                      neque, ut voluptatem nam expedita reiciendis voluptates ea
                      amet dicta rerum ullam, provident beatae molestiae!
                    </p>
                    <hr />
                  </div>
                </div>
              </div>
            </div>
          </>
        );
        case "Smart Management":
        return (
          <>
            <section className="w-full py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* HEADER */}
        <div className="max-w-2xl mb-16">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-primary-blue">
            Smart Management
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            Solusi manajemen sekolah terintegrasi dari LuminoED untuk
            mengelola administrasi, akademik, guru, dan siswa dalam satu
            sistem digital.
          </p>
        </div>

        {/* FEATURES */}
        <div className="grid gap-10 md:grid-cols-3 mb-24">
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
            <div
              key={i}
              className="rounded-xl bg-white p-6 shadow-sm border"
            >
              <h3 className="text-xl font-semibold text-primary-blue">
                {item.title}
              </h3>
              <p className="mt-3 text-slate-600">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* SMARTSCHOOL PORTAL */}
        <div className="relative overflow-hidden rounded-3xl bg-primary-blue p-10 md:p-14 text-white">
          <div className="relative z-10 max-w-xl">
            <h2 className="text-3xl font-bold">
              SmartSchool Portal
            </h2>
            <p className="mt-4 text-white/80">
              SmartSchool adalah produk unggulan LuminoED yang dirancang
              khusus untuk mendukung transformasi digital sekolah melalui
              sistem manajemen yang modern dan terintegrasi.
            </p>

            <Link
              href="#" //url smartschool
              target="_blank"
              className="inline-flex items-center gap-2 mt-8 rounded-full bg-white px-6 py-3 font-semibold text-primary-blue hover:bg-slate-100 transition"
            >
              Visit SmartSchool Website
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>

      </div>
    </section>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div>
    <div className="relative min-h-screen max-w-7xl mx-10 md:mx-auto pr-3 pt-20 pb-20">
      {/* Navigation */}
      <div className="flex justify-between text-white items-center mb-8">
        <button
          onClick={() => setActiveTab("default")}
          className={`group flex items-center gap-2 cursor-pointer ${
          activeTab === "default"
            ? "text-primary-blue font-bold"
            : "text-primary-green font-semibold"
          }`}
        >
          <Image
            src={"/navbar/services/smart-school.svg"}
            alt="ai-tech"
            width={50}
            height={50}
            className="w-5 h-5"
            priority
          />
          <p className="text-xs md:text-base whitespace-nowrap">
            Smart School Management
          </p>
        </button>

        {/* Desktop Tabs */}
        <ul className="hidden tablet-landscape-max:flex gap-5 text-primary-green">
          {tabs.map((tab) => (
            <li
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`cursor-pointer ${
                activeTab === tab ? "font-bold text-primary-blue" : ""
              }`}
            >
              {tab}
            </li>
          ))}
        </ul>

        {/* Mobile Dropdown */}
        <div className="tablet-landscape-max:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger className="bg-white text-black px-4 py-2 rounded-md text-xs md:text-base outline">
              {activeTab === "default" ? "Overview" : activeTab}
            </DropdownMenuTrigger>

            <DropdownMenuPortal>
              <DropdownMenuContent
                side="bottom"
                align="start"
                className="bg-white rounded-md shadow-md w-40"
              >
                <DropdownMenuItem
                  className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                  onClick={() => setActiveTab("default")}
                >
                  Overview
                </DropdownMenuItem>
                {tabs.map((tab) => (
                  <DropdownMenuItem
                    key={tab}
                    className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenuPortal>
          </DropdownMenu>
        </div>
      </div>

      {/* Konten */}
      <div className="">{renderContent()}</div>
      </div>

      <div className="relative overflow-hidden z-10">
        <Image
          src="/palkon.png"
          width={500}
          height={500}
          alt="Dashboard Preview"
          className="w-full h-full object-cover"
          priority
        />
      </div>

      {/* Client Section */}
      <div>
        <OurClient />
      </div>
    </div>
  );
}
