"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslation } from "@/components/providers/I18nProvider";

type Client = {
  name: string;
  imageUrl: string;
};

const clients: Client[] = [
  {
    name: "Cendekia Muda",
    imageUrl: "/client/cendekiamuda.png",
  },
  {
    name: "Al Fitrah",
    imageUrl: "/client/alfitrahbaru.png",
  },
  {
    name: "Sekolah Itqan",
    imageUrl: "/client/sekolahitqan.png",
  },
  {
    name: "Kibar Cendekia Muda",
    imageUrl: "/client/kcm.png",
  },
  {
    name: "Mutiara Hati",
    imageUrl: "/client/mutiara-hati.png",
  },
  {
    name: "Raudhatul Jannah",
    imageUrl: "/client/raudhatul-jannah.png",
  },
];

// Double the list for infinite marquee effect
const marqueeClients = [...clients, ...clients];

export default function OurClient() {
  const { t } = useTranslation();

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-5 xl:px-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <h2 className="mb-2 font-bold uppercase text-primary-blue text-3xl md:text-5xl tracking-tight">
            {t("clients.title")}
          </h2>
          <div className="h-1.5 w-24 bg-primary-green mx-auto rounded-full mb-6"></div>
          <p className="max-w-2xl mx-auto text-neutral-400 text-sm md:text-lg leading-relaxed">
            {t("clients.description")}
          </p>
        </motion.div>

        {/* Marquee Container */}
        <div className="relative mt-10">
          {/* Fading Masks */}
          <div className="absolute inset-y-0 left-0 w-20 md:w-40 bg-linear-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-20 md:w-40 bg-linear-to-l from-white to-transparent z-10 pointer-events-none" />

          <div className="flex overflow-hidden">
            <motion.div
              className="flex gap-12 md:gap-24 items-center whitespace-nowrap py-4"
              animate={{
                x: [0, -100 * clients.length],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 15,
                  ease: "linear",
                },
              }}
            >
              {marqueeClients.map((client, index) => (
                <div
                  key={index}
                  className="shrink-0 w-28 md:w-44 h-16 md:h-24 flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-default"
                >
                  <Image
                    src={client.imageUrl}
                    alt={client.name}
                    width={180}
                    height={100}
                    className="object-contain w-full h-full"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
