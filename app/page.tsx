// "use client";
// feat lenovo close
import Hero from "@/components/sections/home/Hero";
import dynamic from "next/dynamic";

const Services = dynamic(() => import("@/components/sections/home/Services"));
const ITKCM = dynamic(() => import("@/components/sections/home/ITKCM"));
const Portfolio = dynamic(() => import("@/components/sections/home/Porto"));
const OurClient = dynamic(() => import("@/components/sections/home/OurClient"));

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <ITKCM />
      <Portfolio />
      <OurClient />
    </div>
  );
}
