"use client";

import Image from "next/image";
import OurClient from "@/components/sections/home/OurClient";

export default function SmartTalentPage() {
    return (
        <>
        <section className="w-full">
            <div className="max-w-7xl mx-auto pt-10 px-6">
                <div className="tablet-landscape-max:w-2/5 flex flex-col md:flex-row justify-center items-center ">
                    <div className="flex flex-col justify-center">
                        <h2 className="font-extrabold text-5xl tablet-landscape-max:text-5xl text-primary-blue">
                        Smart Talent
                        </h2>
                        <p className="mt-10 text-lg font-medium text-slate-600">
                        Manajemen sekolah dapat memantau secara real time dengan
                        dashboard yang disediakan untuk mengetahui karywan yang
                        hadir , terlambat dan jurnal kerja beserta mutabaah pendidik
                        dan tenaga pendidik.
                        </p>
                        <br />
                        <p className="text-lg font-medium text-slate-600">
                        Tenaga pendidik dan pendidik pun dapat melihat capaian
                        dirinya berdasarkan mutbaah, presensi ataupun agenda kerja
                        sebagai bahan evalaui untuk perbaikan performa.
                        </p>
                        <Image
                            className="hidden tablet-landscape-max:block rounded-2xl absolute -right-36 top-[-2%] object-cover"
                            src={"/services/smart-talent/smarttalent.png"}
                            width={800}
                            height={800}
                            alt="Smart School"
                            priority
                        />
                    </div>
                </div>
                <div className="pt-30 tablet-landscape-max:pt-50">
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