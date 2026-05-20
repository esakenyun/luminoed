"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useTranslation } from "@/components/providers/I18nProvider";

gsap.registerPlugin(ScrollTrigger);

const CARD_W = 520;
const CARD_H = 460;

export default function Portfolio() {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const tweenRef = useRef<gsap.core.Tween | null>(null);
  const autoRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const PROJECTS = [
    {
      title: t("portfolio.projects.smartTeacher.title"),
      image: "/porto/appsheet1.webp",
      detail: t("portfolio.projects.smartTeacher.detail"),
      tag: t("navbar.megamenu.smartSchoolManagementItems.smartClass"),
    },
    {
      title: t("portfolio.projects.smartTalent.title"),
      image: "/porto/looker.webp",
      detail: t("portfolio.projects.smartTalent.detail"),
      tag: t("navbar.megamenu.smartSchoolManagementItems.smartTalent"),
    },
  ];

  useGSAP(
    () => {
      gsap.fromTo(
        ".porto-head",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: { trigger: ".porto-head", start: "top 82%" },
        },
      );
    },
    { scope: sectionRef },
  );

  const gotoSlide = (idx: number, instant = false) => {
    if (!trackRef.current) return;
    const offset = -(idx * CARD_W) + (window.innerWidth / 2 - CARD_W / 2);
    gsap.to(trackRef.current, {
      x: offset,
      duration: instant ? 0 : 0.75,
      ease: "power3.inOut",
    });

    const cards = trackRef.current.querySelectorAll<HTMLElement>(".porto-card");
    cards.forEach((card, i) => {
      const rel = i - idx;
      gsap.to(card, {
        scale: rel === 0 ? 1 : 0.87,
        rotateY: rel === 0 ? 0 : rel < 0 ? 14 : -14,
        y: rel === 0 ? 0 : 14,
        duration: 0.65,
        ease: "power2.out",
      });
    });

    if (infoRef.current) {
      gsap.to(infoRef.current, {
        opacity: 0,
        y: 10,
        duration: 0.2,
        onComplete: () => {
          setActive(idx);
          gsap.to(infoRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.4,
            ease: "power2.out",
          });
        },
      });
    } else {
      setActive(idx);
    }
  };

  useEffect(() => {
    gotoSlide(0, true);
    autoRef.current = setInterval(() => {
      setActive((prev) => {
        const next = (prev + 1) % PROJECTS.length;
        gotoSlide(next);
        return next;
      });
    }, 7000);
    return () => {
      if (autoRef.current) clearInterval(autoRef.current);
    };
  }, []);

  const nav = (dir: 1 | -1) => {
    if (autoRef.current) clearInterval(autoRef.current);
    const next = (active + dir + PROJECTS.length) % PROJECTS.length;
    gotoSlide(next);
    autoRef.current = setInterval(() => {
      setActive((prev) => {
        const n = (prev + 1) % PROJECTS.length;
        gotoSlide(n);
        return n;
      });
    }, 7000);
  };

  return (
    <section
      ref={sectionRef}
      id="portfolio"
      className="py-28 text-white overflow-hidden bg-linear-to-br from-primary-blue via-primary-blue to-[#0d6670] mt-32"
    >
      <div className="porto-head max-w-7xl mx-auto px-6 text-center mb-16">
        <p className="text-sm font-bold tracking-[0.25em] uppercase text-primary-green mb-3">
          {t("portfolio.label")}
        </p>
        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-5">
          {t("portfolio.title")
            .split("&")
            .map((part, i) => (
              <span key={i}>
                {part}
                {i === 0 && (
                  <>
                    <br />
                  </>
                )}
              </span>
            ))}
        </h2>
        <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
          {t("portfolio.description")}
        </p>
      </div>

      <div
        className="relative overflow-hidden w-full flex items-center"
        style={{ perspective: "1400px", height: CARD_H + 40 }}
      >
        <div
          ref={trackRef}
          className="flex items-center gap-0 absolute will-change-transform"
          style={{ transformStyle: "preserve-3d" }}
        >
          {PROJECTS.map((item, i) => (
            <div
              key={i}
              className="porto-card relative shrink-0 rounded-2xl overflow-hidden shadow-2xl cursor-pointer will-change-transform"
              style={{
                width: CARD_W,
                height: CARD_H,
                transformStyle: "preserve-3d",
              }}
              onClick={() => {
                if (autoRef.current) clearInterval(autoRef.current);
                gotoSlide(i);
              }}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
                sizes="520px"
                loading="eager"
              />
              <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-primary-green text-primary-blue text-xs font-bold uppercase tracking-wider">
                {item.tag}
              </span>
              <div className="absolute inset-0 bg-linear-to-t from-primary-blue/40 to-transparent" />
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-14 flex flex-col md:flex-row md:items-start gap-8 h-[200px]">
        <div ref={infoRef} className="flex-1 md:ml-16 overflow-hidden h-full">
          <h3 className="text-2xl md:text-3xl font-bold mb-3 line-clamp-2">
            {PROJECTS[active].title}
          </h3>
          <p className="text-white/70 leading-relaxed max-w-xl line-clamp-4">
            {PROJECTS[active].detail}
          </p>
        </div>

        <div className="flex items-center gap-5 shrink-0 pt-1">
          <div className="flex gap-2">
            {PROJECTS.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  if (autoRef.current) clearInterval(autoRef.current);
                  gotoSlide(i);
                }}
                className={`h-2 rounded-full transition-all duration-300 ${i === active ? "w-8 bg-primary-green" : "w-2 bg-white/30"}`}
              />
            ))}
          </div>
          <button
            onClick={() => nav(-1)}
            className="w-12 h-12 rounded-full border border-white/20 bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => nav(1)}
            className="w-12 h-12 rounded-full bg-primary-green hover:bg-primary-green/90 flex items-center justify-center transition-colors"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
