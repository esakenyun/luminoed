"use client";

import { motion } from "framer-motion";
import {
  ChevronRight,
  GraduationCap,
  Megaphone,
  Puzzle,
  Sparkles,
  Globe,
  Users,
} from "lucide-react";
import { useTranslation } from "@/components/providers/I18nProvider";
import { cn } from "@/lib/utils";
import Link from "next/link";

type Service = {
  id: string;
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
};

export default function Services() {
  const { t } = useTranslation();

  const SERVICES: Service[] = [
    {
      id: "training",
      title: t("services.training.title"),
      description: t("services.training.description"),
      href: "/services/training",
      icon: <GraduationCap className="w-8 h-8" />,
    },
    {
      id: "marketing",
      title: t("services.marketing.title"),
      description: t("services.marketing.description"),
      href: "/services/marketing",
      icon: <Megaphone className="w-8 h-8" />,
    },
    {
      id: "streaming",
      title: t("services.streaming.title"),
      description: t("services.streaming.description"),
      href: "/services/streaming",
      icon: <Users className="w-8 h-8" />,
    },
    {
      id: "equipmentprovision",
      title: t("services.equipmentProvision.title"),
      description: t("services.equipmentProvision.description"),
      href: "/services/equipment-provision",
      icon: <Puzzle className="w-8 h-8" />,
    },
    {
      id: "smarschoolmanagement",
      title: t("services.smartSchoolManagement.title"),
      description: t("services.smartSchoolManagement.description"),
      href: "/services/smart-school",
      icon: <Sparkles className="w-8 h-8" />,
    },
    {
      id: "additionalservices",
      title: t("services.additionalServices.title"),
      description: t("services.additionalServices.description"),
      href: "/services/additional",
      icon: <Globe className="w-8 h-8" />,
    },
  ];

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-[#F5F5F3]">
      <div className="max-w-7xl mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="mb-2 font-bold uppercase text-primary-blue text-3xl md:text-5xl tracking-tight">
            {t("services.title")}
          </h2>
          <div className="h-1.5 w-24 bg-primary-green rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, index }: { service: Service; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn(
        "group relative p-8 md:p-10 rounded-[40px] bg-white text-primary-blue transition-all duration-500 flex flex-col justify-between min-h-[340px] shadow-sm hover:shadow-2xl hover:-rotate-3 hover:bg-primary-blue hover:text-white hover:z-10",
      )}
    >
      <Link
        href={service.href}
        className="flex flex-col h-full justify-between"
      >
        <div>
          <div className="mb-8 text-inherit transition-colors duration-500">
            {service.icon}
          </div>

          <h3 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight leading-tight transition-colors duration-500">
            {service.title}
          </h3>

          <p className="text-base md:text-lg leading-relaxed mb-8 text-neutral-500 group-hover:text-neutral-400 transition-colors duration-500">
            {service.description}
          </p>
        </div>

        <div className="flex items-center gap-2 font-bold text-lg text-inherit transition-all group/link hover:gap-3 group-hover:text-primary-green">
          Learn more
          <ChevronRight className="w-5 h-5 transition-transform group-hover/link:translate-x-1" />
        </div>
      </Link>
    </motion.div>
  );
}
