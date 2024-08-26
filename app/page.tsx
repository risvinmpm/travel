import { FloatingNav } from "@/components/layouts/FloatingNav";
import Hero from "@/components/layouts/Hero";
import { FeaturesSection } from "@/components/ui/FeaturesSection";
import { navItems } from "@/data";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-black">
      <FloatingNav navItems={navItems} />
      <Hero />
      <FeaturesSection />
    </main>
  );
}
