"use client";

import Hero from "@/components/sections/home/Hero";
import ITKCM from "@/components/sections/home/ITKCM";
import OurClient from "@/components/sections/home/OurClient";
import Porto from "@/components/sections/home/Porto";
import Services from "@/components/sections/home/Services";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <ITKCM />
      <Porto />
      <motion.blockquote
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="py-30 text-center italic text-[24px] md:text-[36px] text-primary-blue/80 font-medium relative before:content-[''] before:block before:w-24 before:h-[2px] before:bg-primary-blue/30 before:mx-auto before:mb-6 after:content-[''] after:block after:w-24 after:h-[2px] after:bg-primary-blue/30 after:mx-auto after:mt-6"
      >
        “Illuminate Minds. Transform Schools.”
      </motion.blockquote>

      {/* ================= WAVE ================= */}
      <motion.div
        className="relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Image
          src="/wave.webp"
          alt="Wave"
          width={1920}
          height={400}
          className="w-full"
        />
      </motion.div>
      <OurClient />
    </div>
  );
}
