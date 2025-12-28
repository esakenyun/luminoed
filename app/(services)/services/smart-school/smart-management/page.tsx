"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import OurClient from "@/components/sections/home/OurClient";

export default function SmartManagementPage() {
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
                {/* FULL WIDTH (wave / image) */}
                    <div className="relative overflow-hidden">
                        <Image
                        src="/palkon.png"
                        alt="Wave"
                        width={1920}
                        height={400}
                        className="w-full"
                        />
                    </div>

                    {/* CLIENT */}
                    <div className="max-w-7xl mx-auto px-6">
                        <OurClient />
                    </div>
            </section>
        </>
    );
}