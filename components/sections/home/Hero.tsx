"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronRight, ChevronDown } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useTranslation } from "@/components/providers/I18nProvider";

export default function Hero() {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        ".h-skew",
        { scaleX: 0, transformOrigin: "right center" },
        { scaleX: 1, duration: 1.0 },
      );

      tl.fromTo(
        ".h-blob",
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1, stagger: 0.15 },
        "<0.2",
      );

      tl.fromTo(
        ".h-word",
        { yPercent: 120, opacity: 0, rotationX: -90 },
        {
          yPercent: 0,
          opacity: 1,
          rotationX: 0,
          duration: 0.65,
          stagger: 0.07,
          ease: "back.out(1.5)",
        },
        "-=0.3",
      );

      tl.fromTo(
        ".h-desc",
        { y: 24, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.55 },
        "-=0.15",
      );

      tl.fromTo(
        ".h-cta",
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(2)" },
        "-=0.3",
      );

      tl.fromTo(
        ".h-img-wrap",
        { clipPath: "inset(0 100% 0 0)", opacity: 0 },
        {
          clipPath: "inset(0 0% 0 0)",
          opacity: 1,
          duration: 0.95,
          ease: "power2.inOut",
        },
        "-=0.7",
      );

      tl.fromTo(
        ".h-cue",
        { opacity: 0, y: 8 },
        { opacity: 1, y: 0, duration: 0.4 },
        "-=0.1",
      );

      gsap.to(".h-cue", {
        y: 7,
        duration: 1.1,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });
      gsap.to(".h-blob-spin", {
        rotation: 360,
        duration: 20,
        ease: "none",
        repeat: -1,
      });
    },
    { scope: sectionRef },
  );

  useEffect(() => {
    const btn = ctaRef.current;
    if (!btn) return;
    const onMove = (e: MouseEvent) => {
      const r = btn.getBoundingClientRect();
      gsap.to(btn, {
        x: (e.clientX - r.left - r.width / 2) * 0.3,
        y: (e.clientY - r.top - r.height / 2) * 0.3,
        duration: 0.3,
        ease: "power2.out",
      });
    };
    const onLeave = () =>
      gsap.to(btn, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1,0.5)" });
    btn.addEventListener("mousemove", onMove);
    btn.addEventListener("mouseleave", onLeave);
    return () => {
      btn.removeEventListener("mousemove", onMove);
      btn.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  const words = t("hero.title").split(" ");

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center pt-28 xl:pt-32 pb-16 overflow-hidden bg-white"
    >
      <div className="h-skew absolute top-0 right-0 w-1/2 h-full bg-linear-to-br from-primary-blue/8 to-primary-green/14 -skew-x-12 origin-top-right z-0" />

      <div className="h-blob absolute top-20 right-[12%] w-80 h-80 bg-primary-green/14 rounded-full blur-3xl pointer-events-none" />
      <div className="h-blob absolute bottom-10 left-[4%]  w-60 h-60 bg-primary-blue/8 rounded-full blur-3xl pointer-events-none" />
      <div className="h-blob h-blob-spin absolute top-1/2 left-1/3 w-44 h-44 bg-secondary-blue-300/18 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 xl:px-0 w-full relative z-10">
        <div className="grid xl:grid-cols-2 gap-12 xl:gap-20 items-center">
          <div className="flex flex-col gap-6 items-center text-center xl:items-start xl:text-left max-w-xl mx-auto xl:mx-0">
            <h1 className="text-5xl xl:text-7xl font-extrabold tracking-tight text-primary-blue leading-tight">
              {words.map((word, i) => (
                <span
                  key={i}
                  className="inline-block overflow-hidden align-bottom mr-[0.22em] last:mr-0"
                >
                  <span className="h-word inline-block">{word}</span>
                </span>
              ))}
            </h1>

            <p className="h-desc text-lg text-neutral-500 xl:max-w-lg leading-relaxed">
              {t("hero.description")}
            </p>

            <div className="pt-2">
              <button
                ref={ctaRef}
                onClick={() => (window.location.href = "/contact")}
                className="h-cta group relative inline-flex items-center gap-2.5 py-4 px-10 bg-primary-blue hover:bg-secondary-blue-900 text-white rounded-2xl font-bold text-base shadow-xl shadow-primary-blue/25 transition-colors duration-200 overflow-hidden"
              >
                <span className="absolute -left-full top-0 h-full w-2/3 bg-white/10 skew-x-[-20deg] transition-all duration-500 group-hover:left-full" />
                {t("hero.cta")}
                <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="h-img-wrap relative aspect-4/3 rounded-3xl overflow-hidden border-[6px] border-white ring-1 ring-primary-blue/8">
              <Image
                src="/hero.webp"
                fill
                alt="LuminoED Platform — Smart School Dashboard"
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
                fetchPriority="high"
              />
              <div className="absolute inset-0 bg-linear-to-t from-primary-blue/35 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-44 h-44 bg-primary-green/20 rounded-full blur-2xl -z-10" />
            <div className="absolute -top-6  -left-6  w-44 h-44 bg-secondary-blue-200/40 rounded-full blur-2xl -z-10" />
          </div>
        </div>

        <div className="h-cue flex flex-col items-center gap-2 mt-16 xl:mt-28 text-neutral-300">
          <span className="text-xs tracking-widest uppercase font-medium">
            {t("hero.scrollCue")}
          </span>
          <ChevronDown className="w-5 h-5" />
        </div>
      </div>
    </section>
  );
}
