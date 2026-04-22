// "use client";

import Hero from "@/components/sections/home/Hero";
import ITKCM from "@/components/sections/home/ITKCM";
import OurClient from "@/components/sections/home/OurClient";
import Portfolio from "@/components/sections/home/Porto";
import Services from "@/components/sections/home/Services";

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
