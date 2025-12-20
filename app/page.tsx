import Hero from "@/components/sections/home/Hero";
import ITKCM from "@/components/sections/home/ITKCM";
import OurClient from "@/components/sections/home/OurClient";
import Services from "@/components/sections/home/Services";

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <ITKCM />
      <OurClient />
    </div>
  );
}
