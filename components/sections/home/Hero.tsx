"use client";

import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "@/components/providers/I18nProvider";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-white">
      {/* Subtle Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary-blue-100/30 -skew-x-12 transform origin-top-right" />
      </div>

      <div className="max-w-7xl mx-auto px-5 xl:px-0 w-full relative z-10">
        <div className="grid xl:grid-cols-2 gap-12 items-center ">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6 items-center text-center xl:items-start xl:text-left max-w-xl mx-auto xl:mx-0"
          >
            <h1
              className="text-5xl xl:text-7xl font-bold tracking-tight text-primary-blue leading-tight"
              dangerouslySetInnerHTML={{ __html: t("hero.title") }}
            />

            <p className="text-lg text-neutral-600 xl:max-w-lg leading-relaxed">
              {t("hero.description")}
            </p>

            <div className="pt-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => (window.location.href = "/contact")}
                className="group flex items-center gap-2 py-4 px-10 bg-primary-blue text-white rounded-xl font-bold transition-all shadow-lg shadow-primary-blue/20"
              >
                {t("hero.cta")}
                <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </motion.button>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-4/3 rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
              <Image
                src="/hero.webp"
                fill
                alt="LuminoED Platform"
                className="object-cover"
                priority
              />
            </div>

            {/* Minimalist Accent */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary-green/20 rounded-full blur-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-secondary-blue-500/10 rounded-full blur-2xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
