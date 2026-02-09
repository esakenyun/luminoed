"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { useScrollFocus } from "@/hooks/useScrollFocus";

type Step = {
  id: string;
  title: string;
  description: string;
  image: string;
  href: string;
};

const STEPS: Step[] = [
  {
    id: "training",
    title: "Training",
    description:
      "Empower educators with practical training on digital tools, classroom technology, and AI-powered learning workflows.",
    image: "/services/training1.webp",
    href: "/services/training",
  },
  {
    id: "marketing",
    title: "Marketing",
    description:
      "Boost your school’s visibility with data-driven digital marketing, branding, and social media management.",
    image: "/services/marketing1.webp",
    href: "/services/marketing",
  },
  {
    id: "streaming",
    title: "Streaming",
    description:
      "Professional live streaming for school events—clear, stable, and high-quality broadcasts handled by our expert team.",
    image: "/services/streaming.webp",
    href: "/services/streaming",
  },
  {
    id: "equipmentprovision",
    title: "Equipment Provision",
    description:
      "High-quality equipment for learning and operations, including cameras, lighting, audio gear, laptops, and more.",
    image: "/services/chromebook.png",
    href: "/services/equipment-provision",
  },
  {
    id: "smarschoolmanagement",
    title: "SmartSchool Management",
    description:
      "A fully integrated system to manage academics, staff, assets, and school operations in one unified digital platform.",
    image: "/services/smart-school.webp",
    href: "/services/smart-school",
  },
  {
    id: "additionalservices",
    title: "Additional Services",
    description:
      "Extra support including digital lesson plans, e-Report systems, templates, and tools to streamline school administration.",
    image: "/services/additionalservice.webp",
    href: "/services/additional",
  },
];

export default function Services() {
  const { refs, activeIndex } = useScrollFocus<HTMLDivElement>(STEPS.length);

  const activeStep = STEPS[activeIndex];

  return (
    <section className="relative py-24 lg:py-28">
      <h1 className="mb-2 text-center font-bold uppercase text-primary-blue text-3xl md:text-4xl">
        Our Services
      </h1>
      <div className="mb-28 h-1.5 w-40 bg-primary-green mx-auto"></div>

      <div className="mx-auto px-6 tablet-landscape-max:hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          {STEPS.map((step, index) => (
            <div
              key={step.id}
              className="flex flex-col rounded-2xl overflow-hidden shadow-md"
            >
              <div className="relative w-full aspect-16/11">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                  priority={index === 0}
                />
              </div>
              <div className="p-4">
                <h2 className="text-lg font-bold tracking-tight text-primary-blue uppercase">
                  {step.title}
                </h2>
                <p className="mt-2 text-sm text-neutral-600">
                  {step.description}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <button
                    onClick={() => (window.location.href = step.href)}
                    className="flex items-center gap-2 py-2 px-3 bg-primary-green text-white rounded-xl text-sm"
                  >
                    Start with {step.title}
                    <ChevronRight />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="hidden tablet-landscape-max:block">
        <div className="max-w-7xl mx-auto flex gap-20 px-6 lg:px-8">
          <div className="relative w-2/5">
            <div>
              {STEPS.map((step, index) => (
                <div
                  key={step.id}
                  ref={(el) => {
                    refs.current[index] = el;
                  }}
                  data-index={index}
                  className="h-screen flex items-center"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="max-w-md"
                  >
                    <h2 className="text-4xl font-bold tracking-widest text-primary-blue uppercase">
                      {step.title}
                    </h2>
                    <p className="my-4 text-lg leading-relaxed text-neutral-600">
                      {step.description}
                    </p>
                    <button
                      onClick={() => (window.location.href = step.href)}
                      className="flex gap-0.5 cursor-pointer py-2 px-4 bg-primary-green text-xl font-bold text-white rounded-full hover:text-primary-blue"
                    >
                      Start with {step.title}
                      <ChevronRight className="mt-1" />
                    </button>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative w-3/5">
            <div className="sticky top-10">
              <div className="relative h-[calc(100vh-80px)] overflow-hidden rounded-4xl">
                <Image
                  src={activeStep.image}
                  alt={activeStep.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
