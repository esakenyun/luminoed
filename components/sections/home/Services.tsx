"use client";

import { useRef } from "react";
import {
  ChevronRight,
  GraduationCap,
  Megaphone,
  Puzzle,
  Sparkles,
  Globe,
  Users,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useTranslation } from "@/components/providers/I18nProvider";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

type Service = {
  id: string;
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
  color: string;
};

export default function Services() {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);

  const SERVICES: Service[] = [
    {
      id: "training",
      title: t("services.training.title"),
      description: t("services.training.description"),
      href: "/services/training",
      icon: <GraduationCap className="w-8 h-8" />,
      color: "#2c1c93",
    },
    {
      id: "marketing",
      title: t("services.marketing.title"),
      description: t("services.marketing.description"),
      href: "/services/marketing",
      icon: <Megaphone className="w-8 h-8" />,
      color: "#110a34",
    },
    {
      id: "streaming",
      title: t("services.streaming.title"),
      description: t("services.streaming.description"),
      href: "/services/streaming",
      icon: <Users className="w-8 h-8" />,
      color: "#bedf3e",
    },
    {
      id: "equipment",
      title: t("services.equipmentProvision.title"),
      description: t("services.equipmentProvision.description"),
      href: "/services/equipment-provision",
      icon: <Puzzle className="w-8 h-8" />,
      color: "#7c9d13",
    },
    {
      id: "smart-school",
      title: t("services.smartSchoolManagement.title"),
      description: t("services.smartSchoolManagement.description"),
      href: "/services/smart-school",
      icon: <Sparkles className="w-8 h-8" />,
      color: "#110a34",
    },
    {
      id: "additional",
      title: t("services.additionalServices.title"),
      description: t("services.additionalServices.description"),
      href: "/services/additional",
      icon: <Globe className="w-8 h-8" />,
      color: "#7c9d13",
    },
  ];

  useGSAP(
    () => {
      /* ── section heading reveal ── */
      gsap.fromTo(
        ".srv-heading",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".srv-heading",
            start: "top 85%",
          },
        },
      );

      gsap.fromTo(
        ".srv-bar",
        { scaleX: 0, transformOrigin: "left center" },
        {
          scaleX: 1,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: { trigger: ".srv-heading", start: "top 85%" },
          delay: 0.25,
        },
      );

      /* ── cards stagger from bottom ── */
      gsap.fromTo(
        ".srv-card",
        { y: 60, opacity: 0, scale: 0.94 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.65,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".srv-grid",
            start: "top 80%",
          },
        },
      );

      /* ── card hover tilt ── */
      document.querySelectorAll<HTMLElement>(".srv-card").forEach((card) => {
        card.addEventListener("mousemove", (e) => {
          const r = card.getBoundingClientRect();
          const x = (e.clientX - r.left) / r.width - 0.5;
          const y = (e.clientY - r.top) / r.height - 0.5;
          gsap.to(card, {
            rotationY: x * 8,
            rotationX: -y * 8,
            duration: 0.3,
            ease: "power2.out",
            transformPerspective: 800,
          });
        });
        card.addEventListener("mouseleave", () => {
          gsap.to(card, {
            rotationY: 0,
            rotationX: 0,
            duration: 0.5,
            ease: "elastic.out(1,0.5)",
          });
        });
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden bg-linear-to-b from-secondary-blue-50 to-secondary-green-50"
    >
      {/* decorative background shapes */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary-blue/6 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-green/10 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5">
        {/* heading */}
        <div className="srv-heading mb-16">
          <p className="text-sm font-bold tracking-[0.25em] uppercase text-primary-green mb-3">
            {t("services.label")}
          </p>
          <h2 className="font-extrabold uppercase text-primary-blue text-3xl md:text-5xl tracking-tight mb-3">
            {t("services.title")}
          </h2>
          <div className="srv-bar h-1.5 w-24 bg-primary-green rounded-full" />
          <p className="mt-4 text-neutral-500 max-w-xl text-lg leading-relaxed">
            {t("services.description")}
          </p>
        </div>

        {/* cards grid */}
        <div className="srv-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {SERVICES.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              learnMoreLabel={t("services.learnMore")}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  service,
  learnMoreLabel,
}: {
  service: Service;
  learnMoreLabel: string;
}) {
  return (
    <div className="srv-card group relative p-8 md:p-10 rounded-[32px] bg-white text-primary-blue flex flex-col justify-between min-h-[320px] shadow-sm ring-1 ring-primary-blue/5 cursor-pointer will-change-transform">
      <Link
        href={service.href}
        className="flex flex-col h-full justify-between"
      >
        <div>
          {/* icon circle */}
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center mb-8 text-white transition-transform duration-300 group-hover:scale-110"
            style={{ backgroundColor: service.color }}
          >
            {service.icon}
          </div>

          <h3 className="text-2xl font-bold mb-3 tracking-tight leading-tight">
            {service.title}
          </h3>
          <p className="text-neutral-500 text-base leading-relaxed mb-8">
            {service.description}
          </p>
        </div>

        <div
          className="inline-flex items-center gap-2 font-bold text-sm uppercase tracking-wider transition-all duration-300 group-hover:gap-3"
          style={{ color: service.color }}
        >
          {learnMoreLabel}
          <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </div>
      </Link>

      {/* hover glow */}
      <div
        className="absolute inset-0 rounded-[32px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ boxShadow: `0 20px 60px -10px ${service.color}30` }}
      />
    </div>
  );
}
