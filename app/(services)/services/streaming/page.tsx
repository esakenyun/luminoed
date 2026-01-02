"use client";

import Image from "next/image";
import { useState } from "react";
import OurClient from "@/components/sections/home/OurClient";
import Link from "next/link";
import { Video, Camera, Wifi, Headphones, CircleCheck} from "lucide-react";
import { motion } from "framer-motion";
import { container, itemAnim } from "@/lib/motion";
import { ChevronRight } from "lucide-react";

const services = [
  {
    title: "Live Streaming",
    desc: "Siaran langsung kegiatan sekolah, seminar, dan event dengan kualitas audio-visual profesional.",
    icon: Video,
    href: "/services/streaming/live-streaming",
  },
  {
    title: "Photography & Videography",
    desc: "Dokumentasi visual berkualitas tinggi untuk konten promosi, arsip, dan branding institusi.",
    icon: Camera,
    href: "/services/streaming/photography-videography",
  },
  {
    title: "Hybrid Learning",
    desc: "Integrasi pembelajaran tatap muka dan online dalam satu sistem yang efisien dan mudah digunakan.",
    icon: Wifi,
    href: "/services/streaming/hybrid-learning",
  },
];

export default function StreamingServices() {

  const [activeTab] = useState("default");

  const renderContent = () => {
    if (activeTab === "default") {
      return (
        <section className="w-full">
          {/* HERO */}
          <div className="px-4 sm:px-6">
            <div className="relative bg-primary-blue max-w-7xl mx-auto px-6 md:px-20 text-white py-32 rounded-xl overflow-hidden">
              <div className="grid md:grid-cols-2 gap-16 items-center">
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
          </div>

          <section id="services" className="py-24 px-6">
            <div className="mx-auto max-w-7xl px-6">
            <h2 className="text-3xl font-bold text-primary-blue mb-12">
              Our Streaming Services
            </h2>
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center border border-slate-200 rounded-2xl shadow-sm">

              {/* IMAGE LEFT */}
              <motion.div
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative h-full rounded-tl-2xl rounded-bl-2xl overflow-hidden"
              >
                <Image
                  src="/services/streaming.jpg"
                  alt="Additional Services"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent" />
              </motion.div>

              {/* SERVICE LIST */}
              <div className="">
                {services.map((item, i) => {
                  const Icon = item.icon;

                  return (
                    <Link href={item.href} key={i} className="block">
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.15, duration: 0.6 }}
                      className="group flex items-center justify-between bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all m-6"
                    >
                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-lg bg-lime-100 border border-slate-200 text-lime-600">
                          <Icon size={24} />
                        </div>
                        <div>
                          <h3 className="text-lg text-lime-500 font-semibold">
                            {item.title}
                          </h3>
                          <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                      <div className="ml-4 flex items-center justify-center w-10 h-10 rounded-lg text-white 
                                      group-hover:translate-x-1 transition-transform">
                        <ChevronRight size={30} color="lime" />
                      </div>
                    </motion.div>
                    </Link>
                  );
                })}
              </div>
            </div>
            </div>
          </section>

          {/* WHAT WE PROVIDE */}
          <section className="bg-slate-50 py-24 bg-gradient-to-b to-white">
            <div className="mx-auto max-w-7xl px-6">

              {/* TITLE */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-3xl font-bold text-primary-blue mb-12"
              >
                What We Provide
              </motion.h2>

              {/* GRID */}
              <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid gap-10 md:grid-cols-4"
              >
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
                  <motion.div
                    key={i}
                    variants={itemAnim}
                    whileHover={{
                      y: -6,
                      boxShadow: "0 12px 30px rgba(0,0,0,0.08)",
                    }}
                    className="rounded-xl bg-white p-6 border border-slate-200 transition-all"
                  >
                    <div className="mb-4 text-primary-blue">
                      {item.icon}
                    </div>
                    <h4 className="font-semibold text-primary-blue">
                      {item.title}
                    </h4>
                    <p className="mt-2 text-slate-600 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
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
    </>
  );
}