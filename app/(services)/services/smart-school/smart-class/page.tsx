"use client";

import Image from "next/image";
import { useState } from "react";
import OurClient from "@/components/sections/home/OurClient";

export default function SmartClassPage() {
    return (
        <>
        <section className="w-full">
            <div className="max-w-7xl mx-auto px-6">

                {/* SECTION 1 */}
                <div className="flex flex-col md:flex-row justify-center gap-16 pt-6">
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
                        <h2 className="mt-5 text-2xl md:text-3xl font-semibold">
                        Manajemen Kelas
                        </h2>
                        <p className="mt-5 font-medium text-slate-500 text-lg">
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
                        <h2 className="mt-5 text-2xl md:text-3xl font-semibold">
                        Hybrid Learning
                        </h2>
                        <p className="mt-5 font-medium text-slate-500 text-lg">
                        Platform yang mendukung interaksi langsung antara guru dan
                        siswa, serta menyediakan konten pembelajaran yang dapat
                        disesuaikan dengan kebutuhan individu.
                        </p>
                    </div>
                    </div>
                </div>

                {/* SECTION 2 */}
                <div className="pt-16 tablet-landscape-max:pt-36">
                <h1 className="font-bold text-3xl tablet-landscape-max:text-4xl text-primary-blue text-center">
                    Smart Class
                    </h1>
                    <div className="flex flex-col md:flex-row gap-10 pt-10">
                    <div className="bg-[#F0F0F0] p-16 rounded-lg w-full md:w-[46%]">
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
                    <div className="bg-[#F0F0F0] p-16 rounded-lg w-full md:w-[54%]">
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
                    <div className="bg-[#F0F0F0] p-16 rounded-lg w-full mt-10">
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