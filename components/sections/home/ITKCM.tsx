"use client";

import { motion } from "framer-motion";
import { Database, Lightbulb, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { useTranslation } from "@/components/providers/I18nProvider";

export default function ITKCM() {
  const { t } = useTranslation();

  return (
    <section className="w-full relative py-24 lg:py-32 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-5 xl:px-0 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-2 font-bold uppercase text-primary-blue text-3xl md:text-5xl tracking-tight">
            {t("itkcm.about.title")}
          </h2>
          <div className="h-1.5 w-24 bg-primary-green rounded-full mb-6"></div>
          <p className="text-xl font-semibold text-primary-blue/80 mb-6 uppercase tracking-wider">
            {t("itkcm.about.subtitle")}
          </p>
          <p className="text-lg leading-relaxed text-neutral-500">
            {t("itkcm.about.description")}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border-8 border-white bg-neutral-100">
            <Image
              src="/bar.webp"
              fill
              alt="Dashboard Preview"
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary-green rounded-3xl -z-10" />
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary-blue rounded-3xl -z-10" />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-5 xl:px-0 mb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="mb-2 font-bold uppercase text-primary-blue text-3xl md:text-5xl tracking-tight">
            {t("itkcm.whyChooseUs.title")}
          </h2>
          <div className="h-1.5 w-24 bg-primary-green mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="p-10 rounded-[40px] bg-[#F5F5F3] hover:shadow-xl transition-all"
          >
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-md mb-8 text-yellow-500">
              <Lightbulb size={32} />
            </div>
            <h3 className="text-2xl font-bold text-primary-blue mb-4 uppercase">
              {t("itkcm.whyChooseUs.innovation.title")}
            </h3>
            <p className="text-neutral-500 leading-relaxed text-lg">
              {t("itkcm.whyChooseUs.innovation.description")}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="p-10 rounded-[40px] bg-[#F5F5F3] hover:shadow-xl transition-all"
          >
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-md mb-8 text-blue-500">
              <Database size={32} />
            </div>
            <h3 className="text-2xl font-bold text-primary-blue mb-4 uppercase">
              {t("itkcm.whyChooseUs.dataBased.title")}
            </h3>
            <p className="text-neutral-500 leading-relaxed text-lg">
              {t("itkcm.whyChooseUs.dataBased.description")}
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 xl:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative order-2 lg:order-1"
          >
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="order-1 lg:order-2"
          >
            <h2 className="mb-2 font-bold uppercase text-primary-blue text-3xl md:text-4xl leading-tight">
              {t("itkcm.transformation.title")}
            </h2>
            <div className="h-1.5 w-24 bg-primary-green rounded-full mb-8"></div>

            <p className="text-neutral-500 leading-relaxed text-lg mb-8">
              {t("itkcm.transformation.description")}
            </p>

            <ul className="space-y-4 mb-10">
              <li className="flex items-center gap-3 text-neutral-600 text-lg">
                <CheckCircle2 className="text-primary-green shrink-0" />
                {t("itkcm.transformation.list.structured")}
              </li>
              <li className="flex items-center gap-3 text-neutral-600 text-lg">
                <CheckCircle2 className="text-primary-green shrink-0" />
                {t("itkcm.transformation.list.efficient")}
              </li>
              <li className="flex items-center gap-3 text-neutral-600 text-lg">
                <CheckCircle2 className="text-primary-green shrink-0" />
                {t("itkcm.transformation.list.easyAccess")}
              </li>
            </ul>

            <button
              className="inline-flex items-center gap-2 rounded-full bg-primary-blue px-8 py-4 text-white font-bold hover:bg-secondary-blue-900 transition-all shadow-lg hover:shadow-xl"
              onClick={() => (window.location.href = "#portfolio")}
            >
              {t("itkcm.transformation.cta")}
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
