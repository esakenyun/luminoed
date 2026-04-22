"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { textVariants } from "@/lib/motion";
import { useTranslation } from "@/components/providers/I18nProvider";

const CARD_WIDTH = 520;
const CARD_HEIGHT = 480;

export default function Portfolio() {
  const { t } = useTranslation();
  const [active, setActive] = useState(0);
  const autoSlideRef = useRef<NodeJS.Timeout | null>(null);

  const projects = [
    {
      title: t("portfolio.projects.smartTeacher.title"),
      image: "/porto/appsheet1.webp",
      detail: t("portfolio.projects.smartTeacher.detail"),
    },
    {
      title: t("portfolio.projects.smartTalent.title"),
      image: "/porto/looker.webp",
      detail: t("portfolio.projects.smartTalent.detail"),
    },
  ];

  const handleNext = () => {
    setActive((p) => (p + 1) % projects.length);
    resetAutoSlide();
  };

  const handlePrev = () => {
    setActive((p) => (p - 1 + projects.length) % projects.length);
    resetAutoSlide();
  };

  const resetAutoSlide = () => {
    if (autoSlideRef.current) {
      clearInterval(autoSlideRef.current);
    }
    startAutoSlide();
  };

  const startAutoSlide = () => {
    autoSlideRef.current = setInterval(() => {
      setActive((p) => (p + 1) % projects.length);
    }, 9000);
  };

  useEffect(() => {
    startAutoSlide();

    return () => {
      if (autoSlideRef.current) {
        clearInterval(autoSlideRef.current);
      }
    };
  }, [projects.length]);

  const getTranslateX = () => {
    let offsetX = 0;

    for (let i = 0; i < active; i++) {
      offsetX += CARD_WIDTH;
    }

    return `calc(50% - ${CARD_WIDTH / 2}px - ${offsetX}px)`;
  };

  return (
    <section
      id="portfolio"
      className="py-32 text-white overflow-hidden bg-linear-to-br from-primary-blue via-primary-blue to-primary-green mt-40"
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold leading-tight mb-5"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {t("portfolio.title")
            .split("&")
            .map((part, i) => (
              <span key={i}>
                {part}
                {i === 0 && <br />}
              </span>
            ))}
        </motion.h2>

        <motion.p
          className="text-lg text-white/80 mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {t("portfolio.description")}
        </motion.p>
      </div>

      <div className="relative overflow-hidden w-full flex items-center justify-center perspective-[1400px]">
        <motion.div
          className="flex items-center transform-3d will-change-transforms"
          animate={{
            x: getTranslateX(),
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {projects.map((item, index) => {
            let offset = index - active;

            if (offset > projects.length / 2) {
              offset -= projects.length;
            } else if (offset < -projects.length / 2) {
              offset += projects.length;
            }

            return (
              <motion.div
                key={index}
                className="relative shrink-0 overflow-visible will-change-transform"
                style={{
                  width: CARD_WIDTH,
                  height: CARD_HEIGHT,
                }}
                animate={{
                  scale: offset === 0 ? 1 : 0.86,
                  y: offset === 0 ? 0 : 12,
                  rotateY: offset === 0 ? 0 : offset < 0 ? 16 : -16,
                }}
                transition={{
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <motion.div
                  className="relative h-full w-full overflow-hidden rounded-lg shadow-2xl"
                  animate={{
                    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                  }}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 520px"
                  />
                  <div className="absolute inset-0 bg-black/10" />
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-20 grid grid-cols-1 md:grid-cols-[1fr_auto]">
        <div className="md:ml-20 min-h-[220px]">
          <motion.h3
            key={projects[active].title}
            variants={textVariants}
            initial="hidden"
            animate="show"
            className="text-2xl md:text-3xl font-bold"
          >
            {projects[active].title}
          </motion.h3>

          <motion.p
            key={projects[active].detail}
            variants={textVariants}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.1 }}
            className="mt-4 text-gray-300 leading-relaxed"
          >
            {projects[active].detail}
          </motion.p>
        </div>

        <div className="flex gap-4 p-6">
          <button
            onClick={handlePrev}
            className="w-12 h-12 rounded-full bg-primary-blue hover:scale-105 active:scale-110 flex items-center justify-center"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={handleNext}
            className="w-12 h-12 rounded-full bg-primary-blue hover:scale-105 active:scale-110 flex items-center justify-center"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}
