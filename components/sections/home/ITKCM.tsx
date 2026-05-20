"use client";

import { useEffect, useRef } from "react";
import { Database, Lightbulb, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useTranslation } from "@/components/providers/I18nProvider";

gsap.registerPlugin(ScrollTrigger);

export default function ITKCM() {
  const { t, locale } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);
  const stats = [
    { label: t("itkcm.about.stats.schoolsServed"), target: 6, suffix: "+" },
    { label: t("itkcm.about.stats.yearsExperience"), target: 3, suffix: "+" },
    { label: t("itkcm.about.stats.servicesOffered"), target: 6, suffix: "" },
  ];

  useGSAP(
    () => {
      gsap.fromTo(
        ".itk-about-text",
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: ".itk-about", start: "top 78%" },
        },
      );
      gsap.fromTo(
        ".itk-about-img",
        { x: 50, opacity: 0, scale: 0.96 },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: ".itk-about", start: "top 78%" },
          delay: 0.15,
        },
      );

      gsap.fromTo(
        ".itk-why-head",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.65,
          ease: "power3.out",
          scrollTrigger: { trigger: ".itk-why-head", start: "top 82%" },
        },
      );

      gsap.fromTo(
        ".itk-why-card",
        { y: 50, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: { trigger: ".itk-why-grid", start: "top 80%" },
        },
      );

      gsap.fromTo(
        ".itk-trans-img",
        { x: -50, opacity: 0, scale: 0.95 },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: ".itk-trans", start: "top 78%" },
        },
      );
      gsap.fromTo(
        ".itk-trans-text",
        { x: 50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: ".itk-trans", start: "top 78%" },
          delay: 0.15,
        },
      );

      gsap.fromTo(
        ".itk-check",
        { x: 30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.45,
          stagger: 0.12,
          ease: "power2.out",
          scrollTrigger: { trigger: ".itk-checklist", start: "top 82%" },
        },
      );

      document.querySelectorAll<HTMLElement>(".itk-counter").forEach((el) => {
        const target = parseFloat(el.dataset.target ?? "0");
        const isInt = Number.isInteger(target);
        ScrollTrigger.create({
          trigger: el,
          start: "top 85%",
          once: true,
          onEnter: () => {
            const proxy = { val: 0 };
            gsap.to(proxy, {
              val: target,
              duration: 1.8,
              ease: "power2.out",
              onUpdate: () => {
                el.textContent = isInt
                  ? Math.round(proxy.val).toString()
                  : proxy.val.toFixed(1);
              },
            });
          },
        });
      });
    },
    { scope: sectionRef },
  );

  useEffect(() => {
    if (!sectionRef.current) return;

    sectionRef.current
      .querySelectorAll<HTMLElement>(".itk-counter")
      .forEach((el) => {
        const target = el.dataset.target ?? "0";
        el.textContent = target;
      });
  }, [locale]);

  return (
    <section
      ref={sectionRef}
      className="w-full relative py-24 lg:py-32 overflow-hidden bg-white"
    >
      <div className="itk-about max-w-7xl mx-auto px-5 xl:px-0 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
        <div className="itk-about-text">
          <p className="text-sm font-bold tracking-[0.25em] uppercase text-primary-green mb-3">
            {t("itkcm.about.label")}
          </p>
          <h2 className="mb-2 font-extrabold uppercase text-primary-blue text-3xl md:text-5xl tracking-tight">
            {t("itkcm.about.title")}
          </h2>
          <div className="h-1.5 w-24 bg-primary-green rounded-full mb-5" />
          <p className="text-xl font-semibold text-primary-blue/70 mb-5 uppercase tracking-wider">
            {t("itkcm.about.subtitle")}
          </p>
          <p className="text-lg leading-relaxed text-neutral-500">
            {t("itkcm.about.description")}
          </p>

          <div className="mt-10 flex gap-10">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-4xl font-extrabold text-primary-blue leading-none">
                  <span className="itk-counter" data-target={s.target}>
                    {s.target}
                  </span>
                  {s.suffix}
                </p>
                <p className="text-sm text-neutral-400 mt-1 font-medium">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="itk-about-img relative">
          <div className="relative aspect-video rounded-3xl overflow-hidden border border-primary-blue/10 bg-white shadow-[0_18px_45px_rgba(17,10,52,0.16)]">
            <Image
              src="/bar.webp"
              fill
              alt="Dashboard Preview"
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              loading="eager"
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 xl:px-0 mb-32">
        <div className="itk-why-head text-center mb-14">
          <p className="text-sm font-bold tracking-[0.25em] uppercase text-primary-green mb-3">
            {t("itkcm.whyChooseUs.label")}
          </p>
          <h2 className="mb-2 font-extrabold uppercase text-primary-blue text-3xl md:text-5xl tracking-tight">
            {t("itkcm.whyChooseUs.title")}
          </h2>
          <div className="h-1.5 w-24 bg-primary-green mx-auto rounded-full" />
        </div>

        <div className="itk-why-grid grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              icon: <Lightbulb size={32} />,
              iconBg: "text-primary-green",
              title: t("itkcm.whyChooseUs.innovation.title"),
              desc: t("itkcm.whyChooseUs.innovation.description"),
            },
            {
              icon: <Database size={32} />,
              iconBg: "text-secondary-blue-700",
              title: t("itkcm.whyChooseUs.dataBased.title"),
              desc: t("itkcm.whyChooseUs.dataBased.description"),
            },
          ].map((card) => (
            <div
              key={card.title}
              className="itk-why-card p-10 rounded-[40px] bg-linear-to-br from-white via-secondary-blue-50/35 to-secondary-green-50/30 border border-primary-blue/6 shadow-sm hover:shadow-xl transition-shadow duration-300"
            >
              <div
                className={`w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-md mb-8 ${card.iconBg}`}
              >
                {card.icon}
              </div>
              <h3 className="text-2xl font-bold text-primary-blue mb-4 uppercase">
                {card.title}
              </h3>
              <p className="text-neutral-500 leading-relaxed text-lg">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="itk-trans max-w-7xl mx-auto px-5 xl:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="itk-trans-img relative order-2 lg:order-1">
            <div className="relative aspect-4/5 rounded-[40px] overflow-hidden shadow-2xl">
              <video
                src="/highlight.mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="none"
                className="absolute inset-0 w-full h-full object-cover"
                aria-label="Highlight video showing features"
              >
                <track kind="captions" srcLang="en" label="English" />
              </video>
            </div>
          </div>

          <div className="itk-trans-text order-1 lg:order-2">
            <p className="text-sm font-bold tracking-[0.25em] uppercase text-primary-green mb-3">
              {t("itkcm.transformation.label")}
            </p>
            <h2 className="mb-2 font-extrabold uppercase text-primary-blue text-3xl md:text-4xl leading-tight">
              {t("itkcm.transformation.title")}
            </h2>
            <div className="h-1.5 w-24 bg-primary-green rounded-full mb-7" />

            <p className="text-neutral-500 leading-relaxed text-lg mb-8">
              {t("itkcm.transformation.description")}
            </p>

            <ul className="itk-checklist space-y-4 mb-10">
              {[
                t("itkcm.transformation.list.structured"),
                t("itkcm.transformation.list.efficient"),
                t("itkcm.transformation.list.easyAccess"),
              ].map((item) => (
                <li
                  key={item}
                  className="itk-check flex items-center gap-3 text-neutral-600 text-lg"
                >
                  <CheckCircle2 className="text-primary-green shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <button
              className="inline-flex items-center gap-2 rounded-2xl bg-primary-blue px-8 py-4 text-white font-bold hover:bg-secondary-blue-800 transition-colors shadow-lg hover:shadow-xl"
              onClick={() => (window.location.href = "#portfolio")}
            >
              {t("itkcm.transformation.cta")}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
