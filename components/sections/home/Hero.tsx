"use client";

import Image from "next/image";
import { ChevronRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative z-10 pt-24 pb-24 lg:pt-24 lg:pb-32">
      <div className="absolute inset-0 w-full -skew-y-12 origin-top-left overflow-hidden pointer-events-none -z-10">
        <div className="absolute -z-2 top-0 w-full h-3/4 lg:h-full left-0 bg-primary-blue"></div>
      </div>
      <div className="grid tablet-landscape-max:grid-cols-2 gap-12 lg:gap-1 items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 max-w-2xl text-white">
          <h1 className="text-5xl sm:text-6xl lg:text-[77px] font-extrabold tracking-tight leading-[1.1] text-heading-light">
            Powered by Technology, <br />
            Guided by Faith. <br />
          </h1>
          <p className="text-lg sm:text-xl lg:text-[16px] leading-relaxed max-w-xl text-neutral-400">
            Join the growing number of schools that use LuminoED to integrate
            learning, teacher and student management, academic administration,
            and asset monitoring into a single digital ecosystem. LuminoED
            delivers AI-driven learning tools, automated administrative
            workflows, and Google for Education Premium to create a more
            efficient, measurable, and meaningful educational experience.
          </p>
          <div>
            <button
              onClick={() => (window.location.href = "/contact")}
              className="flex gap-0.5 cursor-pointer py-3 px-6 bg-primary-green text-xl font-bold text-white rounded-full hover:text-primary-blue"
            >
              Let&apos;s Join With Us
              <ChevronRight className="mt-1" />
            </button>
          </div>
        </div>
        <div className="relative lg:h-[600px] flex items-center justify-end tablet-landscape-max::justify-end overflow-visible">
          {/* BACK GREEN CARD */}
          <div className="absolute right-6 tablet-landscape-max:right-[-200px] top-[-10px] w-[420px] h-[540px] bg-lime-200/50 rounded-[20px] z-0" />

          {/* FRONT IMAGE CARD */}
          <div className="relative w-full max-w-[420px] h-[540px] rounded-[20px] overflow-hidden shadow-2xl bg-white z-10">
            <Image
              src="/landing.JPG"
              width={500}
              height={500}
              alt="Dashboard Preview"
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
