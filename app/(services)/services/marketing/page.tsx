"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animation";
import Image from "next/image";
import OurClient from "@/components/sections/home/OurClient";
import Link from "next/link";
import { useTranslation } from "@/components/providers/I18nProvider";
import {
  Palette,
  Share2,
  Building2,
  Globe,
  Video,
  Megaphone,
  PenTool,
  Bot,
  Search,
  Target,
  Rocket,
  CheckCircle2,
} from "lucide-react";

export default function MarketingServices() {
  const { t } = useTranslation();

  const features = [
    {
      title: t("marketingPage.features.branding.title"),
      desc: t("marketingPage.features.branding.description"),
      icon: <Palette className="w-8 h-8 text-primary-green" />,
      className: "md:col-span-2 bg-blue-50/50",
    },
    {
      title: t("marketingPage.features.strategy.title"),
      desc: t("marketingPage.features.strategy.description"),
      icon: <Target className="w-8 h-8 text-primary-green" />,
      className: "bg-green-50/30",
    },
    {
      title: t("marketingPage.features.content.title"),
      desc: t("marketingPage.features.content.description"),
      icon: <PenTool className="w-8 h-8 text-primary-green" />,
      className: "md:col-span-3 bg-white border border-gray-100",
    },
  ];

  const services = [
    { name: t("marketingPage.services.items.brandIdentity"), icon: Palette },
    { name: t("marketingPage.services.items.socialMedia"), icon: Share2 },
    { name: t("marketingPage.services.items.companyProfile"), icon: Building2 },
    { name: t("marketingPage.services.items.websiteLanding"), icon: Globe },
    { name: t("marketingPage.services.items.videoPromotion"), icon: Video },
    {
      name: t("marketingPage.services.items.digitalCampaign"),
      icon: Megaphone,
    },
    { name: t("marketingPage.services.items.copywriting"), icon: PenTool },
    { name: t("marketingPage.services.items.aiContent"), icon: Bot },
  ];

  const processSteps = [
    {
      title: t("marketingPage.process.steps.analysis.title"),
      desc: t("marketingPage.process.steps.analysis.description"),
      icon: Search,
    },
    {
      title: t("marketingPage.process.steps.strategy.title"),
      desc: t("marketingPage.process.steps.strategy.description"),
      icon: Target,
    },
    {
      title: t("marketingPage.process.steps.production.title"),
      desc: t("marketingPage.process.steps.production.description"),
      icon: Rocket,
    },
    {
      title: t("marketingPage.process.steps.optimization.title"),
      desc: t("marketingPage.process.steps.optimization.description"),
      icon: CheckCircle2,
    },
  ];

  return (
    <main className="overflow-hidden bg-white selection:bg-primary-green/20">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-5 overflow-hidden bg-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-2/3 h-full bg-secondary-blue-50/50 skew-x-12 transform origin-top-left -ml-20" />
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            animate="show"
          >
            <motion.span
              variants={fadeUp}
              className="inline-block py-1 px-4 rounded-full bg-secondary-green-200/40 text-secondary-green-700 text-sm font-bold uppercase tracking-wider mb-6"
            >
              LuminoED Creative
            </motion.span>
            <motion.h1
              variants={fadeUp}
              className="text-5xl lg:text-[5.5rem] font-extrabold text-primary-blue leading-[0.95] tracking-[-0.04em] mb-10"
            >
              {t("marketingPage.hero.title")}
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="max-w-2xl mx-auto text-neutral-600 text-lg md:text-xl leading-relaxed mb-12 font-medium"
            >
              {t("marketingPage.hero.description")}
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link
                href="/services/marketing/design-marketing"
                className="inline-flex items-center justify-center bg-primary-blue text-white px-12 py-5 rounded-full font-bold text-lg hover:scale-105 transition-all shadow-2xl shadow-primary-blue/20"
              >
                {t("marketingPage.hero.button")}
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Bento Grid Features */}
      <section className="py-24 px-5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid md:grid-cols-3 gap-6"
            variants={staggerContainer(0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {features.map((feature, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className={`${feature.className} p-10 rounded-3xl flex flex-col justify-between group hover:shadow-2xl transition-all duration-500`}
              >
                <div>
                  <div className="mb-6 p-4 bg-white rounded-2xl w-fit shadow-sm group-hover:scale-110 transition-transform duration-500">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-primary-blue mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-primary-blue text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-green/10 blur-3xl rounded-full -mr-48 -mt-48" />
        <div className="max-w-7xl mx-auto px-5 relative z-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              {t("marketingPage.services.title")}
            </h2>
            <div className="h-1.5 w-24 bg-primary-green mx-auto rounded-full" />
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all group"
                >
                  <div className="mb-6 text-primary-green group-hover:scale-110 transition-transform">
                    <Icon className="w-10 h-10" />
                  </div>
                  <h4 className="font-bold text-lg">{service.name}</h4>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 px-5 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-primary-blue mb-6">
              {t("marketingPage.process.title")}
            </h2>
            <div className="h-1.5 w-24 bg-primary-green mx-auto rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-4 gap-12 relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-12 left-12 right-12 h-0.5 bg-gray-100 -z-10" />

            {processSteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="w-24 h-24 rounded-full bg-white border-4 border-primary-green flex items-center justify-center text-primary-green mb-8 shadow-xl">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-primary-blue mb-4">
                    {step.title}
                  </h4>
                  <p className="text-gray-500 leading-relaxed">{step.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <OurClient />

      {/* CTA Section */}
      <section className="py-24 px-5">
        <div className="max-w-6xl mx-auto relative overflow-hidden rounded-[3rem] bg-primary-blue p-12 md:p-24 text-center shadow-2xl shadow-primary-blue/20">
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay">
            <Image
              src="/wave.webp"
              fill
              alt="Background Pattern"
              className="object-cover rotate-180"
            />
          </div>

          <div className="relative z-10">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-[1.1]">
                {t("marketingPage.cta.title")}
              </h2>
              <p className="text-xl text-blue-100/80 mb-12 max-w-2xl mx-auto leading-relaxed">
                {t("marketingPage.cta.description")}
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-primary-green text-primary-blue px-12 py-5 rounded-full font-bold text-xl hover:scale-105 transition-all shadow-xl shadow-primary-green/20"
              >
                {t("marketingPage.cta.button")}
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
