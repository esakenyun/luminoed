"use client";
import { motion } from "framer-motion";
import Image from "next/image";

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
];

export default function OurClient() {
  return (
    <div>
      <motion.blockquote
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-center font-black uppercase text-primary-blue text-3xl md:text-3xl tracking-wide"
      >
        Clients That Grows With Us
      </motion.blockquote>
      <motion.blockquote
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-center my-1 font-medium text-lg leading-relaxed text-neutral-400 mb-20"
      >
        Our clients are our top priority, and we are committed to providing them
        with the highest level of services.
      </motion.blockquote>
      <div className="flex justify-center items-center gap-10 md:gap-16 pb-30">
        {clients.map((client: Client, index: number) => (
          <Image
            key={index}
            src={client.imageUrl}
            alt={client.name}
            className="w-24 md:w-52 h-max"
            width={500}
            height={300}
          />
        ))}
      </div>
    </div>
  );
}
