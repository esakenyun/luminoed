"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import OurClient from "@/components/sections/home/OurClient";
import { fadeUp, stagger } from "@/lib/motion";

export default function SmartAssetPage() {
  return (
    <>
      <section className="w-full">
        <div className="max-w-7xl mx-auto pt-10 px-6">

          {/* ================= HERO ================= */}
          <div className="w-full tablet-landscape-max:w-2/5 flex flex-col md:flex-row justify-center items-center">
            
            {/* TEXT ONLY ANIMATION */}
            <motion.div
              className="flex flex-col justify-center"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <h2 className="font-extrabold text-5xl tablet-landscape-max:text-5xl text-primary-blue">
                Smart Asset
              </h2>

              <p className="mt-10 text-lg font-medium text-slate-600">
                Dalam smart Asset manajemen sekolah/yayasan dapat secara
                realtime menginventaris aset sekolah yang ada di setiap
                ruangan dan secara system dapat dengan segera mengetahui
                aset mana yang perlu maintenance untuk memberikan pelayanan
                maksimal kepada peserta didik.
              </p>
            </motion.div>

            <div className="md:h-[300px]"></div>
          </div>

          {/* IMAGE (NO ANIMATION) */}
          <Image
            className="hidden tablet-landscape-max:block rounded-2xl absolute -right-36 top-[-2%] object-cover"
            src={"/services/smart-asset/smartasset.png"}
            width={800}
            height={800}
            alt="Smart School"
            priority
          />

          {/* ================= CONTENT ================= */}
          <motion.div
            className="pt-16 tablet-landscape-max:pt-60"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={stagger}
          >
            <motion.h1
              variants={fadeUp}
              className="font-bold text-3xl tablet-landscape-max:text-4xl text-primary-blue text-center"
            >
              Smart Asset
            </motion.h1>

            <div className="flex flex-col md:flex-row justify-center gap-16 pt-20">
              
              <motion.div
                variants={fadeUp}
                className="bg-white rounded-xl shadow-2xl max-w-md"
              >
                <div className="h-2 bg-primary-green rounded-t-xl"></div>
                <div className="p-8 flex flex-col gap-3">
                  <h1 className="font-bold text-primary-blue">
                    Dashboard asset untuk ruang kelas
                  </h1>
                  <p className="text-slate-500 pt-2">
                    Dashboard terpusat yang menampilkan kondisi dan ketersediaan aset di setiap ruang kelas secara real-time. 
                    Sekolah dapat memantau status penggunaan, riwayat pemeliharaan, serta umur pakai aset sehingga pengambilan 
                    keputusan menjadi lebih cepat, akurat, dan berbasis data.
                  </p>
                  <hr />
                </div>
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="bg-white rounded-xl shadow-2xl max-w-md"
              >
                <div className="h-2 bg-primary-green rounded-t-xl"></div>
                <div className="p-8 flex flex-col gap-3">
                  <h1 className="font-bold text-primary-blue">
                    QR Code untuk setiap asset kelas
                  </h1>
                  <p className="text-slate-500 pt-2">
                    Setiap aset dilengkkapi QR Code unik yang memudahkan proses identifikasi, pencatatan, dan pelacakan. 
                    Melalui pemindaian sederhana, petugas dapat langsung melihat detail aset, lokasi, kondisi terakhir, 
                    serta melakukan pelaporan kerusakan atau permintaan maintenance secara instan.
                  </p>
                  <hr />
                </div>
              </motion.div>

            </div>
          </motion.div>
        </div>

        {/* ================= CTA SMART ASSET ================= */}
          <motion.section
            className="relative py-32 mt-32 bg-slate-50 h-100 h-150 bg-gradient-to-b to-white"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
          >
            <div className="max-w-7xl mx-auto px-6">
              <div className="grid md:grid-cols-2 gap-16 items-center">

                {/* LEFT CONTENT */}
                <motion.div variants={fadeUp}>
                  <span className="inline-block mb-4 px-4 py-2 text-sm font-semibold rounded-full bg-primary-green/10 text-primary-green">
                    Smart Asset Solution
                  </span>

                  <h2 className="text-4xl md:text-5xl font-extrabold text-primary-blue leading-tight">
                    Kelola Aset Sekolah <br />
                    Lebih <span className="text-primary-green">Rapi, Cepat & Akurat</span>
                  </h2>

                  <p className="mt-6 text-lg text-slate-600 max-w-xl">
                    Dengan Smart Asset, sekolah dan yayasan dapat memantau inventaris,
                    kondisi aset, serta jadwal maintenance secara real-time melalui
                    sistem terintegrasi berbasis data.
                  </p>

                  {/* CTA BUTTON */}
                  <div className="mt-10 flex flex-wrap gap-4">

                    <motion.a
                      href="#"
                      whileHover={{ y: -4 }}
                      whileTap={{ scale: 0.96 }}
                      className="px-8 py-4 rounded-xl bg-white border border-primary-blue text-primary-blue font-semibold hover:bg-primary-blue hover:text-white transition"
                    >
                      Konsultasi Kebutuhan
                    </motion.a>
                  </div>
                </motion.div>

                {/* RIGHT CARD / STATS */}
                <motion.div
                  variants={fadeUp}
                  className="relative bg-white rounded-2xl shadow-2xl p-10"
                >
                  <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary-green/20 rounded-full blur-2xl" />

                  <h3 className="font-bold text-xl text-primary-blue mb-6">
                    Dampak yang Dirasakan Sekolah
                  </h3>

                  <div className="grid grid-cols-2 gap-6">
                    <div className="p-6 rounded-xl bg-slate-50">
                      <p className="text-3xl font-extrabold text-primary-green">60%</p>
                      <p className="text-sm text-slate-600 mt-1">
                        Efisiensi monitoring aset
                      </p>
                    </div>

                    <div className="p-6 rounded-xl bg-slate-50">
                      <p className="text-3xl font-extrabold text-primary-green">Real-time</p>
                      <p className="text-sm text-slate-600 mt-1">
                        Status & kondisi aset
                      </p>
                    </div>

                    <div className="p-6 rounded-xl bg-slate-50">
                      <p className="text-3xl font-extrabold text-primary-green">QR Code</p>
                      <p className="text-sm text-slate-600 mt-1">
                        Identifikasi instan
                      </p>
                    </div>

                    <div className="p-6 rounded-xl bg-slate-50">
                      <p className="text-3xl font-extrabold text-primary-green">Data</p>
                      <p className="text-sm text-slate-600 mt-1">
                        Riwayat & maintenance
                      </p>
                    </div>
                  </div>
                </motion.div>

              </div>
            </div>
          </motion.section>

        {/* ================= WAVE ================= */}
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