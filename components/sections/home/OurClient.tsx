import Image from "next/image";
import React from "react";

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
    <div className="flex justify-center items-center gap-10 md:gap-16 pb-20">
      {clients.map((client: Client, index: number) => (
        <Image
          key={index}
          src={client.imageUrl}
          alt={client.name}
          className="w-24 md:w-52 h-max"
          width={500}
          height={300}
          priority
        />
      ))}
    </div>
  );
}
