"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useTranslation } from "@/components/providers/I18nProvider";

gsap.registerPlugin(ScrollTrigger);

const clients = [
  { name: "Cendekia Muda", imageUrl: "/client/cendekiamuda.png" },
  { name: "Al Fitrah", imageUrl: "/client/alfitrahbaru.png" },
  { name: "Sekolah Itqan", imageUrl: "/client/sekolahitqan.png" },
  { name: "Kibar Cendekia", imageUrl: "/client/kcm.png" },
  { name: "Mutiara Hati", imageUrl: "/client/mutiara-hati.png" },
  { name: "Raudhatul Jannah", imageUrl: "/client/raudhatul-jannah.png" },
];

const marqueeClients = [...clients, ...clients];

export default function OurClient() {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".cl-heading",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: { trigger: ".cl-heading", start: "top 83%" },
        },
      );

      gsap.fromTo(
        ".cl-bar",
        { scaleX: 0, transformOrigin: "center" },
        {
          scaleX: 1,
          duration: 0.5,
          ease: "power2.out",
          scrollTrigger: { trigger: ".cl-heading", start: "top 83%" },
          delay: 0.2,
        },
      );

      gsap.fromTo(
        ".cl-desc",
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.55,
          ease: "power2.out",
          scrollTrigger: { trigger: ".cl-heading", start: "top 83%" },
          delay: 0.3,
        },
      );

      if (!marqueeRef.current) return;
      gsap.to(marqueeRef.current, {
        xPercent: -50,
        duration: 22,
        ease: "none",
        repeat: -1,
      });

      const track = marqueeRef.current;
      const pause = () => gsap.to(track, { timeScale: 0, duration: 0.4 });
      const resume = () => gsap.to(track, { timeScale: 1, duration: 0.4 });
      containerRef.current?.addEventListener("mouseenter", pause);
      containerRef.current?.addEventListener("mouseleave", resume);
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden bg-white"
    >
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#0A2463 1px,transparent 1px),linear-gradient(90deg,#0A2463 1px,transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="max-w-7xl mx-auto px-5 xl:px-0 relative z-10">
        <div className="cl-heading text-center mb-16">
          <p className="text-sm font-bold tracking-[0.25em] uppercase text-[#2EC4B6] mb-3">
            Trusted Partners
          </p>
          <h2 className="mb-3 font-extrabold uppercase text-[#0A2463] text-3xl md:text-5xl tracking-tight">
            {t("clients.title")}
          </h2>
          <div className="cl-bar h-1.5 w-24 bg-[#2EC4B6] mx-auto rounded-full mb-5" />
          <p className="cl-desc max-w-2xl mx-auto text-neutral-400 text-base md:text-lg leading-relaxed">
            {t("clients.description")}
          </p>
        </div>

        <div ref={containerRef} className="relative mt-6">
          <div className="absolute inset-y-0 left-0  w-24 md:w-48 bg-linear-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 md:w-48 bg-linear-to-l from-white to-transparent z-10 pointer-events-none" />

          <div className="flex overflow-hidden">
            <div
              ref={marqueeRef}
              className="flex gap-12 md:gap-24 items-center whitespace-nowrap py-4"
            >
              {marqueeClients.map((client, i) => (
                <div
                  key={i}
                  className="shrink-0 w-28 md:w-44 h-16 md:h-24 flex items-center justify-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-default"
                >
                  <Image
                    src={client.imageUrl}
                    alt={client.name}
                    width={180}
                    height={100}
                    className="object-contain w-full h-full"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20 text-center">
          <p className="text-neutral-400 text-base mb-5">
            Ready to join our growing network of partner schools?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-[#0A2463] text-white font-bold text-sm hover:bg-[#0d2f7a] transition-colors shadow-lg shadow-[#0A2463]/20"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
