"use client";

import Image from "next/image";
import { useState } from "react";
import OurClient from "@/components/sections/home/OurClient";
import Link from "next/link";
import { Video, Camera, Wifi, Headphones, CircleCheck} from "lucide-react";
import { motion } from "framer-motion";

export default function StreamingServices() {

  const [activeTab] = useState("default");

  const renderContent = () => {
    if (activeTab === "default") {
      return (
        <section className="w-full">

                  {/* HERO */}
                  <div className="relative bg-primary-blue text-white py-32 max-w-7xl mx-auto rounded-xl overflow-hidden">
                    <div className="mx-auto max-w-7xl px-20 grid md:grid-cols-2 gap-16 items-center">
                      
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                      >
                        <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight">
                          Professional Streaming
                          <br /> for Education & Events
                        </h1>

                        <p className="mt-6 text-lg text-white/80 max-w-xl">
                          LuminoED menyediakan layanan streaming profesional untuk
                          sekolah, institusi, dan organisasi—mendukung event hybrid,
                          pembelajaran jarak jauh, dan webinar interaktif.
                        </p>

                        <div className="mt-8 flex gap-4">
                          <Link
                            href="/contact"
                            className="rounded-full bg-primary-green px-6 py-3 font-semibold text-primary-blue hover:bg-lime-300 transition"
                          >
                            Request Streaming
                          </Link>

                          <Link
                            href="#services"
                            className="rounded-full border border-white/40 px-6 py-3 font-semibold hover:bg-white/10 transition"
                          >
                            See Our Services
                          </Link>
                        </div>
                      </motion.div>

                      {/* Visual Placeholder */}
                      <div className="hidden md:block">
                        <div className="aspect-video rounded-2xl bg-black/30 flex items-center justify-center">
                          <span className="text-white/60">
                              Streaming Preview
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* SERVICES */}
                  <div id="services" className="mx-auto max-w-7xl px-6 py-24">
                    <h2 className="text-3xl font-bold text-primary-blue mb-12">
                      Our Streaming Services
                    </h2>

                    <div className="grid gap-10 md:grid-cols-3">
                      {[
                        {
                          icon: <Video />,
                          title: "Live Streaming",
                          desc: "Streaming acara sekolah seperti wisuda, seminar, pelatihan, dan event institusi secara real-time.",
                        },
                        {
                          icon: <Camera />,
                          title: "Photography & Videography",
                          desc: "Menyediakan dokumentasi foto dan video profesional untuk acara sekolah dan institusi Anda.",
                        },
                        {
                          icon: <Wifi />,
                          title: "Hybrid Learning",
                          desc: "Menghubungkan kelas offline dan online agar siswa dapat belajar dari mana saja tanpa hambatan.",
                        },
                      ].map((item, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: i * 0.1 }}
                          viewport={{ once: true }}
                          className="rounded-2xl border bg-white p-6 shadow-sm"
                        >
                          <div className="mb-4 text-primary-blue">
                            {item.icon}
                          </div>
                          <h3 className="text-xl font-semibold text-primary-blue">
                            {item.title}
                          </h3>
                          <p className="mt-3 text-slate-600">
                            {item.desc}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* WHAT WE PROVIDE */}
                  <div className="bg-slate-50 py-24 rounded-xl">
                    <div className="mx-auto max-w-7xl px-6">
                      <h2 className="text-3xl font-bold text-primary-blue mb-12">
                        What We Provide
                      </h2>

                      <div className="grid gap-10 md:grid-cols-4">
                        {[
                          {
                            icon: <Camera />,
                            title: "Professional Equipment",
                            desc: "Kamera HD, audio system, dan lighting profesional.",
                          },
                          {
                            icon: <Headphones />,
                            title: "Technical Crew",
                            desc: "Tim operator berpengalaman selama acara berlangsung.",
                          },
                          {
                            icon: <Wifi />,
                            title: "Streaming Platform",
                            desc: "YouTube, Zoom, Google Meet, atau platform khusus.",
                          },
                          {
                            icon: <Video />,
                            title: "Recording & Playback",
                            desc: "Rekaman acara untuk dokumentasi dan distribusi ulang.",
                          },
                        ].map((item, i) => (
                          <div key={i} className="rounded-xl bg-white p-6 border">
                            <div className="mb-4 text-primary-blue">
                              {item.icon}
                            </div>
                            <h4 className="font-semibold text-primary-blue">
                              {item.title}
                            </h4>
                            <p className="mt-2 text-slate-600 text-sm">
                              {item.desc}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="bg-primary-blue py-20 text-center text-white">
                    <h2 className="text-3xl font-bold">
                      Ready to Go Streaming with LuminoED?
                    </h2>
                    <p className="mt-4 text-white/80">
                      Tingkatkan jangkauan dan kualitas acara Anda dengan layanan
                      streaming profesional kami.
                    </p>

                    <Link
                      href="/contact"
                      className="inline-block mt-8 rounded-full bg-primary-green px-8 py-3 font-semibold text-primary-blue hover:bg-lime-300 transition"
                    >
                      Contact Us Now
                    </Link>
                  </div>

                </section>
      );
    }

    return null;
  };

  return (
    <>
      <div className="relative min-h-screen">
        {renderContent()}
      </div>

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
    </>
  );
}