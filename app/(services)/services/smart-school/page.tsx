"use client";

import { CircleCheck } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import OurClient from "@/components/sections/home/OurClient";
import { motion } from "framer-motion";
import { fadeUp, fadeLeft, fadeRight, stagger } from "@/lib/motion";

export default function SmartSchoolServices() {
  const [activeTab] = useState("default");

  const renderContent = () => {
    if (activeTab === "default") {
      return (
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="flex justify-between items-center tablet-landscape-min:gap-12"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div variants={fadeLeft}>
              <h1 className="font-bold text-3xl tablet-landscape-max:text-5xl text-primary-blue">
                Pengelolaan <br /> Kurikulum Sekolah
              </h1>

              <div className="flex flex-col gap-10 mt-10">
                <motion.div variants={fadeUp}>
                  <CircleCheck className="text-primary-green" />
                  <h3 className="font-semibold mt-2 text-2xl">
                    Otomatisasi Modul Ajar
                  </h3>
                  <p className="mt-5 font-medium tablet-landscape-max:w-3/4 text-slate-500 text-lg">
                    Mengintegrasikan teknologi untuk memfasilitasi otomatisasi
                    modul ajar yang memenuhi standar kurikulum nasional.
                  </p>
                </motion.div>

                <motion.div variants={fadeUp}>
                  <CircleCheck className="text-primary-green" />
                  <h3 className="font-semibold mt-2 text-2xl">
                    Penilaian yang Autentik
                  </h3>
                  <p className="mt-5 font-medium tablet-landscape-max:w-3/4 text-slate-500 text-lg">
                    Memastikan standar penilaian yang akurat dan konsisten untuk
                    meningkatkan kualitas pendidikan.
                  </p>
                </motion.div>
              </div>
            </motion.div>

            <motion.div variants={fadeRight}>
              <Image
                className="hidden tablet-landscape-min:block rounded-2xl"
                src="/services/smartschool.png"
                width={500}
                height={500}
                alt="Smart School"
                priority
              />
            </motion.div>
          </motion.div>

          <motion.div
            className="pt-16 tablet-landscape-max:pt-40"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h1
              variants={fadeUp}
              className="font-bold text-3xl tablet-landscape-max:text-4xl text-primary-blue text-center"
            >
              Pengelolaan Tenaga <br /> Pendidik
            </motion.h1>
            <div className="flex flex-col md:flex-row justify-center gap-16 pt-20">
              <motion.div
                variants={fadeUp}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-xl shadow-2xl max-w-md"
              >
                <div className="h-2 bg-primary-green rounded-t-xl"></div>
                <div className="p-8 flex flex-col gap-3">
                  <h1 className="font-bold text-primary-blue text-lg">
                    Manajemen Kehadiran dan Agenda Kerja
                  </h1>
                  <p className="text-slate-500 pt-2 text-lg">
                    Platform yang memudahkan sekolah dalam mengelola kehadiran
                    dan jadwal tenaga pendidik secara efisien.
                  </p>
                  <hr />
                </div>
              </motion.div>
              <motion.div
                variants={fadeUp}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-xl shadow-2xl max-w-md"
              >
                <div className=" h-2 bg-primary-green rounded-t-xl"></div>
                <div className="p-8 flex flex-col gap-3">
                  <h1 className="font-bold text-primary-blue text-lg">
                    Manajemen Mutabaah
                  </h1>
                  <p className="text-slate-500 pt-2 text-lg">
                    Memfasilitasi proses mutabaah dan evaluasi kinerja tenaga
                    pendidik untuk mendukung pengembangan profesionalisme.
                  </p>
                  <hr />
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="pt-32"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h1
              variants={fadeUp}
              className="font-bold text-3xl tablet-landscape-max:text-4xl text-primary-blue"
            >
              Pengelolaan Aset
            </motion.h1>

            <motion.div
              variants={fadeUp}
              className="bg-white shadow-2xl rounded-2xl mt-7"
            >
              <div className="relative p-8 min-h-[300px]">
                <motion.div variants={fadeLeft} className="max-w-md">
                  <h1 className="pt-5 font-semibold text-2xl mb-4">
                    Manajemen Aset
                  </h1>
                  <p className="text-slate-500 pt-2 text-lg">
                    Sistem yang memungkinkan sekolah untuk mengelola aset dengan
                    efisien, termasuk pemeliharaan dan peningkatan kualitas
                    layanan sekolah.
                  </p>
                </motion.div>

                <motion.div
                  variants={fadeRight}
                  className="absolute right-0 bottom-0 top-10 w-[45%] hidden tablet-landscape-max:block overflow-hidden"
                >
                  <Image
                    src="/services/smartschool.png"
                    alt="Manajemen Aset"
                    fill
                    className="object-cover rounded-tl-2xl rounded-br-2xl"
                    priority
                  />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      );
    }

    return null;
  };

  return (
    <>
      <div className="relative min-h-screen pb-20">{renderContent()}</div>

      <div className="relative overflow-hidden">
        <Image
          src="/wave.png"
          width={1920}
          height={400}
          alt="Wave"
          className="w-full"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <OurClient />
      </div>
    </>
  );
}
